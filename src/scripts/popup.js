/* eslint-disable no-use-before-define */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

const loginForm = document.querySelector('#login-form');
const signupForm = document.querySelector('#signupForm');
const signupOk = document.querySelector('#signup-ok');
const formInput = document.querySelector('.auth-form__input');
const authBtn = document.querySelector('.auth-form__button');

class Popup {
  constructor(loginForm, signupForm, signupOk) {
    this.loginForm = loginForm;
    this.signupForm = signupForm;
    this.signupOk = signupOk;
  }

  Registr() {
    loginBtn();
    loginForm.classList.toggle('.popup_hide');
  }
}

// Активная кнопка

function loginBtn() {
  if (formInput.value.length === 0 || !formInput.validity.valid) {
    authBtn.setAttribute('disabled', true);
  } else {
    elem.disabled = false;
  }
}
