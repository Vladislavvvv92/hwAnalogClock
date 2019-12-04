let canvas = document.getElementById('canvas');
let c = canvas.getContext('2d');

let argNumb = 0;
let argStrok = 0;

let radiusHours = c.canvas.height / 2 - 130;
let radiusNumber = c.canvas.height / 2 - 40;
let radiusSecond = c.canvas.height / 2 - 80;
let radiusMinutes = c.canvas.height / 2 - 90;

let radiusStrokLineTo = c.canvas.height / 2 - 5;
let radiusStrokMoveTo = c.canvas.height / 2 - 20;

let stepArrovInRadian = (((2 * Math.PI) / 360) * 6);
let stepArrovInRadianForNumb = (((2 * Math.PI) / 360) * 30);

let grd = c.createRadialGradient(135.000, 135.000, 0.000, 135.000, 135.000, 150.000);
