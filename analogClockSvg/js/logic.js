function drawStroke() {
    for (let i = 0; i < 60; i++) {
        argStrok = stepArrovInRadian * i;
        let newLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        newLine.setAttribute('x1', 230 * Math.cos(argStrok) + 250);
        newLine.setAttribute('y1', 230 * Math.sin(argStrok) + 250);
        newLine.setAttribute('x2', 245 * Math.cos(argStrok) + 250);
        newLine.setAttribute('y2', 245 * Math.sin(argStrok) + 250);
        newLine.setAttribute('stroke', 'black');
        newLine.setAttribute('stroke-width', '3');
        first.appendChild(newLine);

    }
}

function drawNumber() {
    for (let i = 1; i <= 12; i++) {
        argNumb = stepArrovInRadianForNumb * i - stepArrovInRadianForNumb * 15;
        let newText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        newText.setAttribute('x', 200 * Math.cos(argNumb) + 235);
        newText.setAttribute('y', 200 * Math.sin(argNumb) + 270);
        newText.style.fill = '5E2951';
        newText.style.font = 'bold 40px sans-serif';
        newText.innerHTML = i;
        first.appendChild(newText);

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
    let argHour = stepArrovInRadianForNumb * hourHour - stepArrovInRadianForNumb * 15;
    hourArrow.setAttribute('x2', 150 * Math.cos(argHour) + 250);
    hourArrow.setAttribute('y2', 150 * Math.sin(argHour) + 250);

}

