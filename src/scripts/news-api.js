/* eslint-disable no-shadow */
/* eslint-disable no-undef */
export default class NewsApi {
  constructor(newsFeed) {
    this.newsFeed = newsFeed;
  }

  getNews(query) {
    const dateNow = new Date();
    const sevenDays = 7 * 24 * 3600 * 1000;
    const dateWeekAgo = new Date(dateNow - sevenDays);
    const dateTo = `${dateNow.getFullYear()}-${dateNow.getMonth() + 1}-${dateNow.getDate()}`;
    const dateFrom = `${dateWeekAgo.getFullYear()}-${dateWeekAgo.getMonth() + 1}-${dateWeekAgo.getDate()}`;
    const url = `${this.newsFeed}&q=${query}&from=${dateFrom}&to=${dateTo}`;
    return fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error('Can not read news feed');
        return res.json();
      })
      .then((data) => {
        const news = [];
        // eslint-disable-next-line arrow-spacing
        data.articles.forEach((item)=> {
          news.push({
            source: item.source.name,
            title: item.title,
            date: new Date(Date.parse(item.publishedAt)),
            text: item.description,
            image: item.urlToImage,
            link: item.url,
            keyword: query,
          });
        });
        return news;
      })
      .catch((err) => {
        throw new Error(err.message);
      });
  }
}
