/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import './vendor/normalize.css';
import './index.css';
import config from './scripts/config';
import { menuOperator, mainMenu } from './blocks/menu/menu';
import initInt from './scripts/setup';
import NewsApi from './scripts/news-api';
import NewsRender from './scripts/news-render';

const pageInt = initInt();

const newsApi = new NewsApi(config.newsFeed);

const newsRender = new NewsRender(
  newsApi.getNews.bind(newsApi),
  pageInt.apiBackend.saveArticle.bind(pageInt.apiBackend),
  pageInt.apiBackend.deleteArticle.bind(pageInt.apiBackend),
  pageInt.showError,
  config,
);

window.onresize = () => {
  if (window.innerWidth > 767) mainMenu.close();
};
