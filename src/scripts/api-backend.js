/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */

export default class ApiBackend {
  constructor({
    signInUrl, signUpUrl, logOutUrl, getUser, articles,
  }) {
    this._signInUrl = signInUrl;
    this._signUpUrl = signUpUrl;
    this._logOutUrl = logOutUrl;
    this._getUser = getUser;
    this._articles = articles;
    this.baseHeader = { 'Content-Type': 'application/json' };
  }

  logout() {
    return fetch(this._logOutUrl,
      {
        method: 'POST',
        headers: this.baseHeader,
        mode: 'cors',
        credentials: 'include',
      })
      .then((res) => {
        if (!res.ok) throw new Error(`Ошибка выхода: ${res.status}`);
        return res.json();
      });
  }

  login(data) {
    return fetch(this._signInUrl,
      {
        method: 'POST',
        headers: this.baseHeader,
        mode: 'cors',
        credentials: 'include',
        body: JSON.stringify(data),
      })
      .then((res) => {
        if (!res.ok) throw new Error(res.status);
        return res.json();
      });
  }

  getUserName() {
    return fetch(this._getUser, { credentials: 'include' })
      .then((res) => {
        if (!res.ok) throw new Error(`Ошибка чтения ${res.status}`);
        return res.json();
      })
      .then((userInfo) => userInfo.user);
  }

  signUp(data) {
    return fetch(this._signUpUrl,
      {
        method: 'POST',
        credentials: 'include',
        headers: this.baseHeader,
        mode: 'cors',
        body: JSON.stringify(data),
      })
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.status);
        }
        return res.json();
      });
  }

  saveArticle(data) {
    return fetch(this._articles,
      {
        method: 'POST',
        headers: this.baseHeader,
        mode: 'cors',
        credentials: 'include',
        body: JSON.stringify(data),
      })
      .then((res) => {
        if (!res.ok) throw new Error(`Ошибка сохранения карточки ${res.status}`);
        return res.json();
      })
      .then((res) => res._id);
  }

  deleteArticle(id) {
    return fetch(`${this._articles}/${id}`,
      {
        method: 'DELETE',
        headers: this.baseHeader,
        mode: 'cors',
        credentials: 'include',
      })
      .then((res) => {
        if (!res.ok) throw new Error(`Ошибка удаления карточки ${res.status}`);
        return res.json();
      });
  }

  getAllArticles() {
    return fetch(this._articles,
      {
        method: 'GET',
        headers: this.baseHeader,
        mode: 'cors',
        credentials: 'include',
      })
      .then((res) => {
        if (!res.ok) throw new Error(`Ошибка чтения карточек ${res.status}`);
        return res.json();
      });
  }
}
