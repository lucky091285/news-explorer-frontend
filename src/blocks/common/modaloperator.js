import './scroll-lock.css';

export default class ModalOperator {
  constructor(kbdElement, elementClick) {
    this.kbdElement = kbdElement;
    this.elementClick = elementClick;
    this.modals = Array.from(this.kbdElement.querySelectorAll('.popup'));
    this.kbdElement.addEventListener('keydown', (event) => this.onKey(event));
    this.elementClick.addEventListener('mousedown', (event) => this.onClick(event));
  }

  onKey(event) {
    if (Array.from(this.elementClick.classList).includes('body-noscroll')) {
      if (event.code === 'Escape') {
        this.modals.find(
          (element) => !Array.from(element.classList).includes('popup_hide'),
        ).classList.add('popup_hide');
        this.elementClick.classList.remove('body-noscroll');
      }
    }
  }

  onClick(event) {
    if (Array.from(event.target.classList).includes('popup')) {
      event.target.classList.add('popup_hide');
      this.elementClick.classList.remove('body-noscroll');
    }
  }
}
