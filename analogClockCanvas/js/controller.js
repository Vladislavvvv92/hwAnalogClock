import {clearDraw} from './logic';
import {second} from './logic';
import {minute} from './logic';
import {hours} from './logic';

const start =()=> {
    setInterval(clearDraw, 1000);
    setInterval(second, 1000);
    setInterval(minute, 1000);
    setInterval(hours, 1000);
};

start();

