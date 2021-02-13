---
title: Brownian motion
math: true
plot: true
---

This topic is seriously involved. Thus, I will not attempt to give it a comprehensive treatment here. Anyone who is seriously interested in learning about more about should read a book on it. A common reference is Durrett's [Probability: Theory and Examples](https://www.amazon.com/Probability-Cambridge-Statistical-Probabilistic-Mathematics/dp/0521765390), but I am partial towards Klebaner's [Introduction to Stochastic Calculus with Applications](https://www.amazon.com/Introduction-Stochastic-Calculus-Applications-2Nd/dp/186094566X/ref=sr_1_2?dchild=1&keywords=klebaner&qid=1612983088&s=books&sr=1-2) since that is the book I used in graduate school.

## Definition of Brownian motion

Brownian motion proper is defined as a [stochastic process](https://en.wikipedia.org/wiki/Stochastic_process) $$\{B_t\}$$ that satisfies the following properties:

1. The difference $$B_t-B_s$$, for $$t>s$$, is independent of $$B_u$$ for $$u\leq s$$; we say the process has _independent increments_.

1. The difference $$B_t-B_s$$, for $$t>s$$, is independent of the past, i.e. independent of $$B_u$$, for $$0\leq u\leq s$$.
1. The difference $$B_t-B_s$$ is normally distributed with mean $$0$$ and variance $$t-s$$.
1. $$B_t$$, $$t\geq 0$$ is continuous with respect to $$t$$.

<script src="{{ base.url | prepend: site.url }}/assets/scripts/random-plot.js">
</script>
