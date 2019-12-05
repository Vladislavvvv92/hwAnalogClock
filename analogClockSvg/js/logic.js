import model from './model';

export const drawStroke =()=> {
    for (let i = 0; i < 60; i++) {
        model.argStrok = model.stepArrovInRadian * i;
        let newLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        newLine.setAttribute('x1', 230 * Math.cos(model.argStrok) + 250);
        newLine.setAttribute('y1', 230 * Math.sin(model.argStrok) + 250);
        newLine.setAttribute('x2', 245 * Math.cos(model.argStrok) + 250);
        newLine.setAttribute('y2', 245 * Math.sin(model.argStrok) + 250);
        newLine.setAttribute('stroke', 'black');
        newLine.setAttribute('stroke-width', '3');
        model.first.appendChild(newLine);
    }

};

export const drawNumber =()=> {
    for (let i = 1; i <= 12; i++) {
        model.argNumb = model.stepArrovInRadianForNumb * i - model.stepArrovInRadianForNumb * 15;
        let newText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        newText.setAttribute('x', 200 * Math.cos(model.argNumb) + 235);
        newText.setAttribute('y', 200 * Math.sin(model.argNumb) + 270);
        newText.style.fill = '5E2951';
        newText.style.font = 'bold 40px sans-serif';
        newText.innerHTML = i.toString();
        model.first.appendChild(newText);
    }

};


export const second =()=> {
    let time = new Date();
    let secondHour = time.getSeconds();
    let argSecond = model.stepArrovInRadian * secondHour - model.stepArrovInRadian * 15;
    model.secondArrow.setAttribute('x2', 200 * Math.cos(argSecond) + 250);
    model.secondArrow.setAttribute('y2', 200 * Math.sin(argSecond) + 250);

};

export const minute =()=> {
    let time = new Date();
    let minuteHour = time.getMinutes();
    let argSecond = model.stepArrovInRadian * minuteHour - model.stepArrovInRadian * 15;
    model.minuteArrow.setAttribute('x2', 180 * Math.cos(argSecond) + 250);
    model.minuteArrow.setAttribute('y2', 180 * Math.sin(argSecond) + 250);

};

export const hour =()=> {
    let time = new Date();
    let hourHour = time.getHours();
    let argHour = model.stepArrovInRadianForNumb * hourHour - model.stepArrovInRadianForNumb * 15;
    model.hourArrow.setAttribute('x2', 150 * Math.cos(argHour) + 250);
    model.hourArrow.setAttribute('y2', 150 * Math.sin(argHour) + 250);

};

