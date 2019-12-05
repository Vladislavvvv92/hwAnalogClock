import {drawNumber} from './logic';
import {drawStroke} from './logic';
import {second} from './logic';
import {minute} from './logic';
import {hour} from './logic';

drawNumber();
drawStroke();
setInterval(second, 1000);
setInterval(minute, 1000);
setInterval(hour, 1000);