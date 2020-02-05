/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import './vendor/normalize.css';
import './index.css';
import { menuOperator, mainMenu } from './blocks/menu/menu';
// import AuthForm from './blocks/common/auth-form/auth-form';


// import initUI from './scripts/setup';

// const pageUI = initUI();

window.onresize = () => {
  if (window.innerWidth > 767) mainMenu.close();
};
