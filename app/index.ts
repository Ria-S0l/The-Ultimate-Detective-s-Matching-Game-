import './canvas';
import  './saiharaSprite';
import {saiharaAction} from './spriteAnimate'
import {scoreboard} from './scoreboard'
import './cards'
import {startAnimation,addAnimation} from './animation';
import {cardDrawer} from './cards';

addAnimation(cardDrawer);
addAnimation(scoreboard);
startAnimation();

addAnimation(saiharaAction)