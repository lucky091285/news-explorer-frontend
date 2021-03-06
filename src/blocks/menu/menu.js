/* eslint-disable no-undef */
import './menu.css';
import Component from '../common/component';
import Overlay from '../common/overlay/overlay';

class Menu {
  constructor(
    {
      control, list, menu,
    },
    overlayObject,
  ) {
    this.isOpened = false;
    this.overlay = overlayObject;
    this.menuList = document.querySelector(list);
    this.menuControl = document.querySelector(control);
    this.menu = document.querySelector(menu);
    this.isBlack = Array.from(this.menu.classList).includes('menu_black');
  }

  click() {
    if (this.isOpened) {
      this.close();
    } else {
      this.open();
    }
  }

  open() {
    this.menuControl.classList.add('menu__mobile_close');
    if (this.isBlack) this.menuControl.classList.add('menu__mobile_close_black');
    this.overlay.show();
    this.menu.classList.add(!this.isBlack ? 'menu_on-top' : 'menu_on-top_black');
    this.menuList.classList.add('menu__list_show');
    if (this.isBlack) this.menuList.style.background = 'rgba(255,255,255,1)';
    this.isOpened = true;
  }

  close() {
    this.menuControl.classList.remove('menu__mobile_close');
    this.overlay.hide();
    this.menu.classList.remove('menu_on-top');
    this.menu.classList.remove('menu_on-top_black');
    this.menuList.classList.remove('menu__list_show');
    if (this.isBlack) this.menuList.style.background = 'rgba(255,255,255,0)';
    this.isOpened = false;
  }
}

const overlay = new Overlay();

export const mainMenu = new Menu(
  {
    control: '.menu__mobile',
    list: '.menu__list',
    menu: '.menu',
  },
  overlay,
);

export const menuOperator = new Component(
  document.querySelector('.menu__mobile'),
  {
    click: () => {
      mainMenu.click();
    },
  },
);
