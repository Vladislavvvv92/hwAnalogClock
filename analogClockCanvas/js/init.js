function circle() {
    let canvas = document.getElementById('canvas');
    let c = canvas.getContext('2d');

    let radiusSecond = c.canvas.height / 2 - 80;
    let radiusMinutes = c.canvas.height / 2 - 90;
    let radiusHours = c.canvas.height / 2 - 130;
    let stepArrovInRadian = (((2 * Math.PI) / 360) * 6);

    let radiusNumber = c.canvas.height / 2 - 40;
    let stepArrovInRadianForNumb = (((2 * Math.PI) / 360) * 30);

    let radiusStrokMoveTo = c.canvas.height / 2 - 20;
    let radiusStrokLineTo = c.canvas.height / 2 - 5;

    let grd = c.createRadialGradient(135.000, 135.000, 0.000, 135.000, 135.000, 150.000);

    function drawBackgroundClock() {
        c.beginPath();
        c.arc(250, 250, 250, 0, 2 * Math.PI, false);
        c.fillStyle = grd;
        c.fill();
        let argNumb = 0;
        let argStrok = 0;
        c.beginPath();
        c.fillStyle = 'red';

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
            console.log(radiusStrokMoveTo * Math.cos(argStrok));
            c.moveTo(radiusStrokMoveTo * Math.cos(argStrok) + 250, radiusStrokMoveTo * Math.sin(argStrok) + 250);
            c.lineTo(radiusStrokLineTo * Math.cos(argStrok) + 250, radiusStrokLineTo * Math.sin(argStrok) + 250);
            c.stroke();
        }
    }


        function timing() {
            c.clearRect(0, 0, 500, 500);

            drawBackgroundClock();

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

            c.beginPath();

            let minutesHour = time.getMinutes();
            let argMinutes = stepArrovInRadian * minutesHour - stepArrovInRadian * 15;
            c.moveTo(250, 250);
            c.lineTo(radiusMinutes * Math.cos(argMinutes) + 250, radiusMinutes * Math.sin(argMinutes) + 250);
            c.lineWidth = 10;
            c.strokeStyle = 'black';
            c.stroke();

            c.beginPath();

            let hoursHour = time.getHours();
            console.log(hoursHour)
            let argHours = stepArrovInRadian * hoursHour - stepArrovInRadian * 15;
            c.moveTo(250, 250);
            c.lineTo(radiusHours * Math.cos(argHours) + 250, radiusHours * Math.sin(argHours) + 250);
            c.lineWidth = 15;
            c.strokeStyle = 'black';
            c.stroke();
        }
        setInterval(timing, 1000);
}





