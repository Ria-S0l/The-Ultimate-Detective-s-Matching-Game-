import './canvas';
import  './saiharaSprite';
import {saiharaAction} from './spriteAnimate'
import './scoreboard'
import './cards'
import {startAnimation,addAnimation} from './animation';
import {cardDrawer} from './cards';

addAnimation(cardDrawer);
startAnimation();

addAnimation(saiharaAction)