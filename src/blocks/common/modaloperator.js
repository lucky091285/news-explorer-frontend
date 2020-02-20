import './scroll-lock.css';

export default class ModalOperator {
  constructor(kbdElement, clickElement) {
    this.kbdElement = kbdElement;
    this.clickElement = clickElement;
    this.modals = Array.from(this.kbdElement.querySelectorAll('.popup'));
    this.kbdElement.addEventListener('keydown', (event) => this.onKey(event));
    this.clickElement.addEventListener('mousedown', (event) => this.onClick(event));
  }

  onKey(event) {
    if (Array.from(this.clickElement.classList).includes('body-noscroll')) {
      if (event.code === 'Escape') {
        this.modals.find(
          (element) => !Array.from(element.classList).includes('popup_hide'),
        ).classList.add('popup_hide');
        this.clickElement.classList.remove('body-noscroll');
      }
    }
  }

  onClick(event) {
    if (Array.from(event.target.classList).includes('popup')) {
      event.target.classList.add('popup_hide');
      this.clickElement.classList.remove('body-noscroll');
    }
  }
}
