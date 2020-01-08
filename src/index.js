/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import './vendor/normalize.css';
import './index.css';
import config from './scripts/config';
import { menuOperator, mainMenu } from './blocks/menu/menu';
import initUI from './scripts/setup';
import NewsApi from './scripts/news-api';
import NewsRender from './scripts/news-render';

const pageUI = initUI();

const newsApi = new NewsApi(config.newsFeed);

const newsRender = new NewsRender(
  newsApi.getNews.bind(newsApi),
  pageUI.apiBackend.saveArticle.bind(pageUI.apiBackend),
  pageUI.apiBackend.deleteArticle.bind(pageUI.apiBackend),
  pageUI.showError,
  config,
);

window.onresize = () => {
  if (window.innerWidth > 767) mainMenu.close();
};
