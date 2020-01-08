/* eslint-disable no-undef */
import '../../vendor/normalize.css';
import './index.css';
/* eslint-disable no-unused-vars */
import config from '../../scripts/config';
/* eslint-disable no-unused-vars */
import { menuOperator, mainMenu } from '../../blocks/menu/menu';
import initUI from '../../scripts/setup';
import Collection from '../../scripts/collection';

const pageUI = initUI();

const myCollection = new Collection(
  pageUI.apiBackend.getAllArticles.bind(pageUI.apiBackend),
  pageUI.apiBackend.deleteArticle.bind(pageUI.apiBackend),
  config,
  pageUI.showError,
);
// Methods

window.onresize = () => {
  if (window.innerWidth > 767) mainMenu.close();
};
