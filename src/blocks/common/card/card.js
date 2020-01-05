/* eslint-disable class-methods-use-this */
import './card.css';

export default class Card {
  constructor(parentField) {
    // eslint-disable-next-line semi
    this.parentField = parentField
    this.parentField.addEventListener('click', (event) => { this.click(event); });
  }

  click(event) {
    if (event.target.className.includes('card__icon')) event.preventDefault();
  }
}
