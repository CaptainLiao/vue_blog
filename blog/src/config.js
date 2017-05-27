let host = 'http://localhost:5000';

let config = {
  API: {
    article: 'article',
    article_list: 'article/list',
    article_archive: 'article/archive'
  },
  getApi(api) {
    return `${host}/` + this.API[api];
  }
};

module.exports = config;
