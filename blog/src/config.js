let host = 'http://localhost:5000';
host = 'http://admin.fayinme.cn';

let config = {
  API: {
    article: 'api/article',
    article_list: 'api/article/list',
    article_archive: 'api/article/archive'
  },
  getApi(api) {
    return `${host}/` + this.API[api];
  }
};

module.exports = config;
