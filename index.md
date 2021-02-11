---
title: Home
feature_text: |
 # <span style="color:white">Under construction!!</span>
feature_image: "https://images.unsplash.com/photo-1563257764-ec4bd2983cbe?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80"
math: true
plot: true
---

Soon I'll fill this place with content, both old and new.

In the mean time enjoy looking at the Fourier transform 

$$\hat f(\xi) = \int_{-\infty}^{\infty}f(x)e^{-2\pi i x\xi}\,dx $$

delivered to you super fast by [Katex](https://katex.org).


How about some graphs?

<div id="myDiv">
<script type="text/javascript">
var trace1 = {
  y: [0.75, 5.25, 5.5, 6, 6.2, 6.6, 6.80, 7.0, 7.2, 7.5, 7.5, 7.75, 8.15, 8.15, 8.65, 8.93, 9.2, 9.5, 10, 10.25, 11.5, 12, 16, 20.90, 22.3, 23.25],
  type: 'box',
  name: 'All Points',
  jitter: 0.3,
  pointpos: -1.8,
  marker: {
    color: 'rgb(7,40,89)'
  },
  boxpoints: 'all'
};

var trace2 = {
  y: [0.75, 5.25, 5.5, 6, 6.2, 6.6, 6.80, 7.0, 7.2, 7.5, 7.5, 7.75, 8.15, 8.15, 8.65, 8.93, 9.2, 9.5, 10, 10.25, 11.5, 12, 16, 20.90, 22.3, 23.25],
  type: 'box',
  name: 'Only Wiskers',
  marker: {
    color: 'rgb(9,56,125)'
  },
  boxpoints: false
};

var trace3 = {
  y: [0.75, 5.25, 5.5, 6, 6.2, 6.6, 6.80, 7.0, 7.2, 7.5, 7.5, 7.75, 8.15, 8.15, 8.65, 8.93, 9.2, 9.5, 10, 10.25, 11.5, 12, 16, 20.90, 22.3, 23.25],
  type: 'box',
  name: 'Suspected Outlier',
  marker: {
    color: 'rgb(8,81,156)',
    outliercolor: 'rgba(219, 64, 82, 0.6)',
    line: {
      outliercolor: 'rgba(219, 64, 82, 1.0)',
      outlierwidth: 2
    }
  },
  boxpoints: 'suspectedoutliers'
};

var trace4 = {
  y: [0.75, 5.25, 5.5, 6, 6.2, 6.6, 6.80, 7.0, 7.2, 7.5, 7.5, 7.75, 8.15, 8.15, 8.65, 8.93, 9.2, 9.5, 10, 10.25, 11.5, 12, 16, 20.90, 22.3, 23.25],
  type: 'box',
  name: 'Wiskers and Outliers',
  marker: {
    color: 'rgb(107,174,214)'
  },
  boxpoints: 'Outliers'
};



var data = [trace1, trace2, trace3, trace4];

var layout = {
  title: 'Box Plot Styling Outliers'
};

Plotly.newPlot('myDiv', data, layout);
</script>
</div>

And the commands used to generate it:

``` javascript
var trace1 = {
  y: [0.75, 5.25, 5.5, 6, 6.2, 6.6, 6.80, 7.0, 7.2, 7.5, 7.5, 7.75, 8.15, 8.15, 8.65, 8.93, 9.2, 9.5, 10, 10.25, 11.5, 12, 16, 20.90, 22.3, 23.25],
  type: 'box',
  name: 'All Points',
  jitter: 0.3,
  pointpos: -1.8,
  marker: {
    color: 'rgb(7,40,89)'
  },
  boxpoints: 'all'
};

var trace2 = {
  y: [0.75, 5.25, 5.5, 6, 6.2, 6.6, 6.80, 7.0, 7.2, 7.5, 7.5, 7.75, 8.15, 8.15, 8.65, 8.93, 9.2, 9.5, 10, 10.25, 11.5, 12, 16, 20.90, 22.3, 23.25],
  type: 'box',
  name: 'Only Wiskers',
  marker: {
    color: 'rgb(9,56,125)'
  },
  boxpoints: false
};

var trace3 = {
  y: [0.75, 5.25, 5.5, 6, 6.2, 6.6, 6.80, 7.0, 7.2, 7.5, 7.5, 7.75, 8.15, 8.15, 8.65, 8.93, 9.2, 9.5, 10, 10.25, 11.5, 12, 16, 20.90, 22.3, 23.25],
  type: 'box',
  name: 'Suspected Outlier',
  marker: {
    color: 'rgb(8,81,156)',
    outliercolor: 'rgba(219, 64, 82, 0.6)',
    line: {
      outliercolor: 'rgba(219, 64, 82, 1.0)',
      outlierwidth: 2
    }
  },
  boxpoints: 'suspectedoutliers'
};

var trace4 = {
  y: [0.75, 5.25, 5.5, 6, 6.2, 6.6, 6.80, 7.0, 7.2, 7.5, 7.5, 7.75, 8.15, 8.15, 8.65, 8.93, 9.2, 9.5, 10, 10.25, 11.5, 12, 16, 20.90, 22.3, 23.25],
  type: 'box',
  name: 'Wiskers and Outliers',
  marker: {
    color: 'rgb(107,174,214)'
  },
  boxpoints: 'Outliers'
};



var data = [trace1, trace2, trace3, trace4];

var layout = {
  title: 'Box Plot Styling Outliers'
};

Plotly.newPlot('myDiv', data, layout);
```
