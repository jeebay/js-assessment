exports = (typeof window === 'undefined') ? global : window;

exports.objectsAnswers =  {
  alterContext : function(fn, obj) {
    return fn.call(obj);
  },

  alterObjects : function(constructor, greeting) {
    constructor.prototype.greeting = greeting;
  },

  iterate : function(obj) {
    var out = [];
    
    // Object.keys only iterates over an objects own enumerable properties, but
    // here I am filtering with hasOwnProperty to make it clear. For ... in loops
    // will iterate over inherited properties, so that case the filter is necessary
    Object.keys(obj).forEach(function(key) {
      var pair;
      if (obj.hasOwnProperty(key)) {
        pair = key + ': ' + obj[key];
        out.push(pair);
      }
    });

    return out;
  }
};
