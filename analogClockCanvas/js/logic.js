import Model from './model.js';
const model = new Model();


const drawBackgroundClock =()=> {
    model.c.beginPath();
    model.c.arc(250, 250, 250, 0, 2 * Math.PI, false);
    model.c.fillStyle = model.grd;
    model.c.fill();
    model.c.beginPath();
    model.c.fillStyle = '#5E2951';

    for (let i = 1; i <= 12; i++) {
        model.argNumb = model.stepArrovInRadianForNumb * i - model.stepArrovInRadianForNumb * 15;
        model.c.font = "50px serif";
        model.c.fillText(i.toString(), model.radiusNumber * Math.cos(model.argNumb) + 235, model.radiusNumber * Math.sin(model.argNumb) + 270);
        model.c.stroke()
    }

    model.c.beginPath();

    for (let i = 1; i <= 60; i++) {
        model.argStrok = model.stepArrovInRadian * i;
        model.c.lineWidth = 5;
        model.c.strokeStyle = 'gray';
        model.c.moveTo(model.radiusStrokMoveTo * Math.cos(model.argStrok) + 250, model.radiusStrokMoveTo * Math.sin(model.argStrok) + 250);
        model.c.lineTo(model.radiusStrokLineTo * Math.cos(model.argStrok) + 250, model.radiusStrokLineTo * Math.sin(model.argStrok) + 250);
        model.c.stroke();
    }
};

export const clearDraw =()=> {
    model.c.clearRect(0, 0, 500, 500);
    drawBackgroundClock();

};

export const second =()=> {
    model.c.beginPath();
    let time = new Date();
    let secondHour = time.getSeconds();
    let argSecond = model.stepArrovInRadian * secondHour - model.stepArrovInRadian * 15;
    model.c.moveTo(250, 250);
    model.c.lineTo(model.radiusSecond * Math.cos(argSecond) + 250, model.radiusSecond * Math.sin(argSecond) + 250);
    model.c.lineWidth = 2;
    model.c.strokeStyle = 'red';
    model.c.lineCap = 'round';
    model.c.stroke();
};

export const minute =()=> {
    model.c.beginPath();
    let time = new Date();
    let minutesHour = time.getMinutes();
    let argMinutes = model.stepArrovInRadian * minutesHour - model.stepArrovInRadian * 15;
    model.c.moveTo(250, 250);
    model.c.lineTo(model.radiusMinutes * Math.cos(argMinutes) + 250, model.radiusMinutes * Math.sin(argMinutes) + 250);
    model.c.lineWidth = 10;
    model.c.strokeStyle = 'black';
    model.c.stroke();
};

export const hours =()=> {
    model.c.beginPath();
    let time = new Date();
    let hoursHour = time.getHours();
    let argHours = model.stepArrovInRadian * hoursHour - model.stepArrovInRadian * 15;
    model.c.moveTo(250, 250);
    model.c.lineTo(model.radiusHours * Math.cos(argHours) + 250, model.radiusHours * Math.sin(argHours) + 250);
    model.c.lineWidth = 15;
    model.c.strokeStyle = 'black';
    model.c.stroke();
};










