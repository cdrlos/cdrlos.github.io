---
layout: post
title: Stuff you can do on the shell
---

I recently applied for an apprenticeship with [Smoothstack](https://wwww.smoothstack.com) (a _better_ [Revature](https://revature.com)?) and they had me take an assessment for thei Java software engineering track. For some reason they consider familiarity with shell scripting to be an important component of their admissions, so I thought I'd write a post to jog my memory.

This post has the potential to get out of hand so I'm gonna keep the content down to the very basics: script parameters, conditional statements, for loops, and strings. Everything you find here is infinitely better explained in [^1] or even better the official GNU reference manual [^2].

**Disclaimer:**{: style='color:red; opacity:0.8'} When I say shell scripting I really mean Bash scripting, i.e. `bash`---not `zsh`, not `ksh`, especially not `csh`, but `bash`.

# Our very first Bash script

Yes, our very first Bash script will be the beloved hello world script. Not very exciting, I know, but we're gonna build on it in future posts, OK? The bare bones script looks like this:

```bash
#!/bin/bash
echo Hello World
```

Write this to a file---say, `hello.sh`---with your favorite text editor then run the command `$ chmod +x hello.sh` (this will make the file executable) and execute it with `$ ./hello.sh`. This is nothing special, the script will print `Hello World` to standard output.

# Taking parameters

Let's make our hello world script more interactive. In particular, we'll turn it into a proper hello function by making it take parameters. Go back into your editor and modify the contents of `hello.sh` until it looks like this:

```bash
#!/bin/bash
if [ -z "$1" ]
then
  echo Hello World
else
  echo Hello $1
fi
```

Now we can run `$./hello.sh Dan` and the terminal will echo `Hello Dan` and fall back on its previous behavior if no argument is supplied.

OK, nice our very first if statement. But what's with the `$1` and `-z`? The `$1` is easy enough to explain---it holds the first [positional parameter](https://www.gnu.org/software/bash/manual/html_node/Positional-Parameters.html) passed to the script, in this case `Dan`. The `-z` is another beast. If you read
the manual page `$ man bash` and scroll down to the section on conditional expressions you'll see that it's one of a number of different _flags_ the `test` command takes. This one in particular tests for the empty string. :confused:? Hold on! `test` command, what `test` command? You thought those square brackets after the `if` statement were just part of the syntax right? Well, you're wrong. It's [another way of writing `test`](https://developer.ibm.com/technologies/linux/tutorials/l-bash-test/), i.e. we could have written our script as follows:

```bash
#!/bin/bash
if test -z "$1"
then
  echo Hello World
else
  echo Hello $1
fi
```

What's more the space between `[ ... ]` is not optional. Go ahead and remove it and see what happens.

We can extend our hello script, making it take another argument for your last name, and so on and so forth:

```bash
#!/bin/bash
if [ -z "$1" ]
then
  echo Hello World
elif [ -z "$2" ]
then
  echo Hello $1
ele
  echo Hello $1 $2
fi
```

# What if I want to pass like 10 parameters to the script?

For that dear reader we have the symbol `@` which captures the positional parameters to the script. If we wanted to call it a day we would write `Hello $@`, but let's print a proper sentence to stdout for once in this post. To do that we'll need to build up a string from the inputs which separates the supplied positional parameters with a comma then a space. We will use the variable `greeting` to hold this string. We will also introduce the for loop as we need to iterate over the positional parameters:

```bash
#!/bin/bash
greeting="Hello"
if [ -z "$1" ]
then greeting="$greeting World"
else for name in "$@"
do
  greeting="$greeting $name,"
done
fi
echo "${greeting%,}!"
```

Some things to notice here. Notice that the `=` operator is placed directly after the name of the variable and before the new value it assumes. This is important. Put a space before or after and `bash` will throw an error. Try it. In will interpret either the variable or the value as a command. The `for` loop should look fairly familiar if you have ever programmed in JavaScript or Python, but the ensuing operations must be contained within a `do ... done` block. We recursively build the greeting and then print it to stdout. But what is up with that last line? I had to invoke some [string magic](https://tldp.org/LDP/abs/html/string-manipulation.html) to get rid of the trailing comma. It's not as mysterious as it initially seems, but I'll leave you to the man pages for that.

# Calling it a day

Hoo boy! There's really so much to talk about on this topic. We haven't even covered pipes, redirection, `sed` and `awk` and regular expressions. These are all important tools for any script scripter. Baby steps! I plan to follow this up with a post on `sed` and regular expressions, but I'll be throwing in the towel on Bash scripting after that. There is a place for rudimentary Bash script in my toolbox, but it's not my tool of choice and I don't care about cheaping-out on it.

[^1]: [Bash Guide for Beginners](https://tldp.org/LDP/Bash-Beginners-Guide/html/index.html) by Machtelt Garrels.
[^2]: [Bash Reference Manual](https://www.gnu.org/software/bash/manual/html_node/index.html)
[^3]: [Advanced Bash-Scripting Guide](https://tldp.org/LDP/abs/html/index.html) by Mendel Cooper.
