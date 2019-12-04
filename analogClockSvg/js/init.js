let container = document.getElementById('container')
let secondArrow = document.getElementById('secondArrow');
let minuteArrow = document.getElementById('minuteArrow');
let hourArrow = document.getElementById('hourArrow');
let first = document.getElementById('first');
let newSvg = document.createElement('svg');




let stepArrovInRadian = (((2 * Math.PI) / 360) * 6);
let argStrok = 0;


function drawStroke() {
    for(let i = 0; i < 60; i++){
        argStrok = stepArrovInRadian * i;
        let newLine = document.createElement('line');
        newLine.setAttribute('x1', 230 * Math.cos(argStrok) + 250);
        newLine.setAttribute('y1', 230 * Math.sin(argStrok) + 250);
        newLine.setAttribute('x2', 245 * Math.cos(argStrok) + 250);
        newLine.setAttribute('y2', 245 * Math.sin(argStrok) + 250);
        newLine.setAttribute('stroke', 'black');
        newLine.setAttribute('stroke-width', '3');
        first.appendChild(newLine)
    }
}

function second() {
    let time = new Date();
    let secondHour = time.getSeconds();

    let argSecond = stepArrovInRadian * secondHour - stepArrovInRadian * 15;
    secondArrow.setAttribute('x2', 200 * Math.cos(argSecond) + 250);
    secondArrow.setAttribute('y2', 200 * Math.sin(argSecond) + 250);
}

function minute() {
    let time = new Date();
    let minuteHour = time.getMinutes();

    let argSecond = stepArrovInRadian * minuteHour - stepArrovInRadian * 15;
    minuteArrow.setAttribute('x2', 180 * Math.cos(argSecond) + 250);
    minuteArrow.setAttribute('y2', 180 * Math.sin(argSecond) + 250);
}

function hour() {
    let time = new Date();
    let hourHour = time.getHours();

    let argSecond = stepArrovInRadian * hourHour - stepArrovInRadian * 15;
    hourArrow.setAttribute('x2', 150 * Math.cos(argSecond) + 250);
    hourArrow.setAttribute('y2', 150 * Math.sin(argSecond) + 250);
}

drawStroke();
setInterval(second, 1000);
setInterval(minute, 1000);
setInterval(hour, 1000);

