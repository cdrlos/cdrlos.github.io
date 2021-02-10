var trace1 = {
  x: [0, 1, 2, 3, 4, 5, 6, 7, 8],
  y: [0, 1, 2, 3, 4, 5, 6, 7, 8],
  name: 'Name of Trace 1',
  type: 'scatter'
};
var trace2 = {
  x: [0, 1, 2, 3, 4, 5, 6, 7, 8],
  y: [1, 0, 3, 2, 5, 4, 7, 6, 8],
  name: 'Name of Trace 2',
  type: 'scatter'
};
var data = [trace1, trace2];
var layout = {
  title: {
    text:'Plot Title',
    font: {
      family: 'Hack, monospace',
      size: 24
    },
    xref: 'paper',
    x: 0.05,
  },
  xaxis: {
    title: {
      text: 'x Axis',
      font: {
        family: 'Hack, monospace',
        size: 18,
        color: '#7f7f7f'
      }
    },
  },
  yaxis: {
    title: {
      text: 'y Axis',
      font: {
        family: 'Courier New, monospace',
        size: 18,
        color: '#7f7f7f'
      }
    }
  }
};

Plotly.newPlot('myDiv', data, layout);
