let host = 'http://localhost:5000';

let config = {
  API: {
    article: 'article',
    article_list: 'article/list'
  },
  getApi(api) {
    return `${host}/` + this.API[api];
  }
};

module.exports = config;
