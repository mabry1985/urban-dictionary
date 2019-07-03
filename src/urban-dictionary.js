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
}
