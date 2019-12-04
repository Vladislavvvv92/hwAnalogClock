function drawBackgroundClock() {
    c.beginPath();
    c.arc(250, 250, 250, 0, 2 * Math.PI, false);
    c.fillStyle = grd;
    c.fill();
    c.beginPath();
    c.fillStyle = '#5E2951';

    for (let i = 1; i <= 12; i++) {
        argNumb = stepArrovInRadianForNumb * i - stepArrovInRadianForNumb * 15;
        c.font = "50px serif";
        c.fillText(i, radiusNumber * Math.cos(argNumb) + 235, radiusNumber * Math.sin(argNumb) + 270);
        c.stroke()
    }

    c.beginPath();

    for (let i = 1; i <= 60; i++) {
        argStrok = stepArrovInRadian * i;
        c.lineWidth = 5;
        c.strokeStyle = 'gray';
        c.moveTo(radiusStrokMoveTo * Math.cos(argStrok) + 250, radiusStrokMoveTo * Math.sin(argStrok) + 250);
        c.lineTo(radiusStrokLineTo * Math.cos(argStrok) + 250, radiusStrokLineTo * Math.sin(argStrok) + 250);
        c.stroke();
    }
}

function clearDraw() {
    c.clearRect(0, 0, 500, 500);
    drawBackgroundClock();

}

function second() {
    c.beginPath();
    let time = new Date();
    let secondHour = time.getSeconds();
    let argSecond = stepArrovInRadian * secondHour - stepArrovInRadian * 15;
    c.moveTo(250, 250);
    c.lineTo(radiusSecond * Math.cos(argSecond) + 250, radiusSecond * Math.sin(argSecond) + 250);
    c.lineWidth = 2;
    c.strokeStyle = 'red';
    c.lineCap = 'round';
    c.stroke();
}

function minute() {
    c.beginPath();
    let time = new Date();
    let minutesHour = time.getMinutes();
    let argMinutes = stepArrovInRadian * minutesHour - stepArrovInRadian * 15;
    c.moveTo(250, 250);
    c.lineTo(radiusMinutes * Math.cos(argMinutes) + 250, radiusMinutes * Math.sin(argMinutes) + 250);
    c.lineWidth = 10;
    c.strokeStyle = 'black';
    c.stroke();
}

function hours() {
    c.beginPath();
    let time = new Date();
    let hoursHour = time.getHours();
    let argHours = stepArrovInRadian * hoursHour - stepArrovInRadian * 15;
    c.moveTo(250, 250);
    c.lineTo(radiusHours * Math.cos(argHours) + 250, radiusHours * Math.sin(argHours) + 250);
    c.lineWidth = 15;
    c.strokeStyle = 'black';
    c.stroke();
}










