/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import './vendor/normalize.css';
import './index.css';
import { menuOperator, mainMenu } from './blocks/menu/menu';

window.onresize = () => {
  if (window.innerWidth > 767) mainMenu.close();
};
