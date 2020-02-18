/* eslint-disable no-undef */
import '../../vendor/normalize.css';
import './index.css';
/* eslint-disable no-unused-vars */
import config from '../../scripts/config';
/* eslint-disable no-unused-vars */
import { menuOperator, mainMenu } from '../../blocks/menu/menu';
import initInterface from '../../scripts/setup';
import Collection from '../../scripts/collection';

const pageInt = initInterface();

const myCollection = new Collection(
  pageInt.apiBackend.getAllArticles.bind(pageInt.apiBackend),
  pageInt.apiBackend.deleteArticle.bind(pageInt.apiBackend),
  config,
  pageInt.showError,
);

window.onresize = () => {
  if (window.innerWidth > 767) mainMenu.close();
};
