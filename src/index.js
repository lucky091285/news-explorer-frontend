/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
/* eslint-disable import/named */
/* eslint-disable no-undef */
import './index.css';
import './vendor/normalize.css';
// eslint-disable-next-line no-unused-vars
import { menuOperator, mainMenu } from './blocks/menu/menu';
import modalOperator from './blocks/common/modaloperator';
import Card from './blocks/common/card/card';
import { loginForm, signupForm, regCompleteForm } from './blocks/common/auth-form/auth-form';

const cardIconSave = new Card(document.querySelector('.results'));

// Methods

regCompleteForm.open();

window.onresize = () => {
  if (window.innerWidth > 767) mainMenu.close();
};
