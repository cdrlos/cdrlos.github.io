---
title: A Quick Detour into Random Walks
layout: post
katex: true
plotly: true
---

### Introduction

The random walk is perhaps everyone's first introduction to the theory of stochastic processes. You many not even know what a stochastic process but if you've taken probability you've surely heard of the random walk. With my previous post on Brownian motion I mentioned that Brownian motion is the continuous analogue of the symmetric random walk. In this post I aim to formalize that and remind you of what exactly we mean by random walk--in case you need a refresher.

### Simple Random Walk on $$\mathbf{Z}^2$$

We will start with the case of $$\mathbf{Z}^2$$ as it is the first non-trivial example of a simple random walk. $$\mathbf{Z}^2$$ is of course the integer lattice in $$\mathbf{R}^2$$ and has the prototypical basis $$\{(1,0),(0,1)\}$$.

The following is just a test. I can't get D3js to work with Jekyll yet. Plotly appears to be working?

<div id="myDiv">
<script>
const rand = () => Math.random();
var x = [1, 2, 3, 4, 5];
const new_data = (trace) => Object.assign(trace, {y: x.map(rand)});

// add random data to three line traces
var data = [
{mode:'lines', line: {color: "#b55400"}},
{mode: 'lines', line: {color: "#393e46"}},
{mode: 'lines', line: {color: "#222831"}}
].map(new_data);

var layout = {
title: 'User Zoom Persists<br>When uirevision Unchanged',
uirevision:'true',
xaxis: {autorange: true},
yaxis: {autorange: true}
};

Plotly.react('myDiv', data, layout);

var myPlot = document.getElementById('myDiv');

var cnt = 0;
var interval = setInterval(function() {
data = data.map(new_data);

// user interaction will mutate layout and set autorange to false
// so we need to reset it to true
layout.xaxis.autorange = true;
layout.yaxis.autorange = true;

// not changing uirevision will ensure that user interactions are unchanged
// layout.uirevision = rand();

Plotly.react('myDiv', data, layout);
if(cnt === 100) clearInterval(interval);
}, 2500);
</script>

</div>
