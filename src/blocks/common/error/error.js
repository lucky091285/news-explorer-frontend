/* eslint-disable no-undef */
import './error.css';

export default class ShowError {
  constructor() {
    this.domElement = document.querySelector('#system-error');
    this.errorMessage = document.querySelector('#system-error-message');
    document.addEventListener('click', () => this.hide());
  }

  show(message) {
    this.errorMessage.textContent = message;
    this.domElement.classList.add('sys-error_on');
  }

  hide() {
    this.errorMessage.textContent = '';
    this.domElement.classList.remove('sys-error_on');
  }

  _onKey(event) {
    if (event.code === 'Escape') {
      if (this.domElement.classList.contains('sys-error_on')) {
        this.hide();
      }
    }
  }

  _onClick() {
    if (this.domElement.classList.contains('sys-error_on')) {
      this.hide();
    }
  }
}
