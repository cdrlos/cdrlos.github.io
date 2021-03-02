// 2D Brownian motion
// Modified from plotly's Lorentz attractor found here https://plotly.com/javascript/animations/
// <script src="https://cdn.jsdelivr.net/gh/nicolaspanel/numjs@0.15.1/dist/numjs.min.js"></script>


var points = 20; // initial number of points
var x = [], y = [];

brownian_motion(points);

Plotly.newPlot('myDiv', [{
    x: x,
    y: y,
    mode: 'markers'
}], {
    xaxis: {range: [-40, 40]},
    yaxis: {range: [-40, 40]}
})

brownian_motion = () => {
    for (i = 0; i < n; i++) {
        x[0] = Math.random();
        y[0] = Math.random();
    }
    return
}

update = () => {
    compute();

    Plotly.animate('myDiv', {
        data: [{x: x, y: z}]
    }, {
        transition: {
            duration: 0
        },
        frame: {
            duration: 0,
            redraw: false
        }
    });

    requestAnimationFrame(update);
}

requestAnimationFrame(update);
