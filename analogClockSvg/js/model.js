export default {
    first: document.getElementById('first'),
    hourArrow: document.getElementById('hourArrow'),
    secondArrow: document.getElementById('secondArrow'),
    minuteArrow: document.getElementById('minuteArrow'),

    argNumb: 0,
    argStrok: 0,

    stepArrovInRadian: (((2 * Math.PI) / 360) * 6),
    stepArrovInRadianForNumb: (((2 * Math.PI) / 360) * 30),
}
