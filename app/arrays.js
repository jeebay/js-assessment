exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    return arr.indexOf(item);
  },

  sum : function(arr) {
    return arr.reduce(function (prev, next) {
      return prev + next;
    });
  },

  remove : function(arr, item) {
    return arr.reduce(function(prev, next) {
      if (next !== item) {
        return prev.concat(next);
      } else {
        return prev;
      }
    }, []);
  },

  removeWithoutCopy : function(arr, item) {
    for (var i = arr.length - 1; i >= 0; i--) {
      if (arr[i] === item) {
        arr.splice(i, 1);
      }
    }

    return arr;
  },

  append : function(arr, item) {
    return arr.concat(item);
  },

  truncate : function(arr) {
    return arr.slice(0, -1);
  },

  prepend : function(arr, item) {
    return [item].concat(arr);
  },

  curtail : function(arr) {
    return arr.slice(1);
  },

  concat : function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert : function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count : function(arr, item) {
    var count = 0;
    arr.forEach(function(num) {
      if (num === item) {
        count++;
      }
    });
    return count;
  },

  duplicates : function(arr) {
    var dup = [];
    var out = [];
    arr.forEach(function(item) {
      
      if (dup.indexOf(item) === -1) {
        dup.push(item);
      } else if (out.indexOf(item) === -1) {
          out.push(item);
      }
    });

    return out;
  },

  square : function(arr) {
    return arr.map(function(item) {
      return item * item;
    });
  },

  findAllOccurrences : function(arr, target) {
    var out = [];
    arr.forEach(function(item, index) {
      if (target === item) {
        out.push(index);
      }
    });

    return out;
  }
};
