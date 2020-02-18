/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
import '../../vendor/normalize.css';
import '../../../node_modules/swiper/css/swiper.min.css';
import './index.css';
import Swiper from 'swiper';
import config from '../../scripts/config';
import { menuOperator, mainMenu } from '../../blocks/menu/menu';
import initInterface from '../../scripts/setup';
import CommitsLoader from '../../scripts/commits-loader';
import CommitsRender from '../../scripts/commits-render';

const pageInt = initInterface();

const swiper = new Swiper('.swiper-container', {
  updateOnWindowResize: true,
  slidesPerView: 3,
  spaceBetween: 10,
  slidesPerGroup: 3,
  loop: false,
  loopFillGroupWithBlank: false,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    200: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 10,
    },
    767: {
      slidesPerView: 2,
      spaceBetween: 10,
      slidesPerGroup: 2,
    },
    1023: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const commitsLoader = new CommitsLoader(config.git, config.maxGitCommits);
const commitsRender = new CommitsRender(
  swiper.update.bind(swiper),
  commitsLoader.getCommits.bind(commitsLoader),
  config,
);

commitsRender.init();

window.onresize = () => {
  if (window.innerWidth > 767) mainMenu.close();
};
