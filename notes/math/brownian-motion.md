---
title: Brownian motion
math: true
plot: true
---

This topic is seriously involved. I cannot possibly do it justice in a single post. Anybody seriously invested in learning more about Brownian motion should pick up a book on the subject. One common reference is Durrett's [Probability: Theory and Examples](https://www.amazon.com/Probability-Cambridge-Statistical-Probabilistic-Mathematics/dp/0521765390), but I am partial towards Klebaner's [Introduction to Stochastic Calculus with Applications](https://www.amazon.com/Introduction-Stochastic-Calculus-Applications-2Nd/dp/186094566X/ref=sr_1_2?dchild=1&keywords=klebaner&qid=1612983088&s=books&sr=1-2) since that is the I used in graduate school. This post will be about as dry as it can get. I'll explain all the terminology and essential results and we'll get down to the proof of existence of Brownian motion---we'll leave applications for another time.

## Definition of Brownian motion
Brownian motion is properly defined as a stochastic process[^1] $$\{B_t\}$$ which obeys the following properties:

1. The difference $$B_t-B_s$$, for $$t>s$$, is independent of the past, i.e. independent of $$B_u$$, for $$0\leq u\leq s$$.
2. The difference $$B_t-B_s$$ is normally distributed with mean $$0$$ and variance $$t-s$$.
3. $$B_t$$, $$t\geq 0$$ is continuous with respect to $$t$$.

<div id="simplebrownian">
<script type="text/javascript">
Plotly.d3.csv("https://raw.githubusercontent.com/plotly/datasets/master/finance-charts-apple.csv", function(err, rows){

  function unpack(rows, key) {
  return rows.map(function(row) { return row[key]; });
}


var trace1 = {
  type: "scatter",
  mode: "lines",
  x: unpack(rows, 'Date'),
  y: unpack(rows, 'AAPL.High'),
  line: {color: '#17BECF'}
}

var trace2 = {
  type: "scatter",
  mode: "lines",
  x: unpack(rows, 'Date'),
  y: unpack(rows, 'AAPL.Low'),
  line: {color: '#7F7F7F'}
}

var data = [trace1,trace2];

var layout = {
  title: 'Custom Range',
  xaxis: {
    range: ['2016-07-01', '2016-12-31'],
    type: 'date'
  },
  yaxis: {
    autorange: true,
    range: [86.8700008333, 138.870004167],
    type: 'linear'
  }
};

Plotly.newPlot('myDiv', data, layout);
})
</script>
</div>

[^1]: If you don't know what a stochastic process is, in short it is a family of random variables. Here we think of them as parameterized by the interval $$[0,T]$$ or $$[0,\infty)$$.
