export default class Model {
    constructor(){
        this.canvas = document.getElementById('canvas');
        this.c =  this.canvas.getContext('2d');
        this.argNumb = 0;
        this.argStrok = 0;

        this.radiusHours =  this.c.canvas.height / 2 - 130;
        this.radiusNumber = this.c.canvas.height / 2 - 40;
        this.radiusSecond = this.c.canvas.height / 2 - 80;
        this.radiusMinutes = this.c.canvas.height / 2 - 90;
        this.radiusStrokLineTo = this.c.canvas.height / 2 - 5;
        this.radiusStrokMoveTo = this.c.canvas.height / 2 - 20;

        this.stepArrovInRadian = (((2 * Math.PI) / 360) * 6);
        this.stepArrovInRadianForNumb = (((2 * Math.PI) / 360) * 30);

        this.grd = this.c.createRadialGradient(135.000, 135.000, 0.000, 135.000, 135.000, 150.000);
    }


}
