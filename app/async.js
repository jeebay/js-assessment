exports = (typeof window === 'undefined') ? global : window;

exports.asyncAnswers = {
  async : function(value) {
    return new Promise(function(resolve, reject) {
      resolve(value);
    });
  },

  manipulateRemoteData : function(url) {
    // Returns a promise that resolves to the sorted array of people
    return get(url).then(JSON.parse).then(function(res) {
      var people = res.people.map(function(item) {
        return item.name;
      }).sort();
      
      return people;
    });
  }
};

function get(url) {
  // Basic XHR GET, promisified
  return new Promise(function(resolve, reject) {
    var request = new XMLHttpRequest();
    request.open('GET', url);

    request.onload = function() {
      if (request.status === 200) {
        resolve(request.response);
      } else {
        reject(Error('XHR error'));
      }
    };

    request.send();
  });
}