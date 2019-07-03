export class UrbanDictionary {

  getUrbanDefinition(word) {
    return new Promise(function (resolve, reject) {
      let request = new XMLHttpRequest();
      let url = `http://api.urbandictionary.com/v0/define?term=${word}`;
      request.onload = function () {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      };

      request.open('GET', url, true);
      request.send();
    });
  }

  getTvShow(word) {
    return new Promise(function (resolve, reject) {
      let request = new XMLHttpRequest();
      let tv = `http://api.tvmaze.com/search/shows?q=${word}`;
      request.onload = function () {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      };

      request.open('GET', tv, true);
      request.send();
    });
  }
  goAway(word) {
    return new Promise(function (resolve, reject) {
      let request = new XMLHttpRequest();
      let url = `https://www.foaas.com/${word}/Sam`;
      request.onload = function () {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }

      };
      request.open('GET', url, true);
      request.setRequestHeader('Accept', 'application/json');
      request.send();
    });

  }
}
