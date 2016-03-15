exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {
  argsAsArray : function(fn, arr) {
    return fn.apply(null, arr);
  },

  speak : function(fn, obj) {
    return fn.apply(obj);
  },

  functionFunction : function(str) {
    return function(str2) {
      return str + ', ' + str2;
    };
  },

  makeClosures : function(arr, fn) {
    return arr.map(function(item) {
      return function () {
        return fn(item);
      };
    });
  },

  partial : function(fn, str1, str2) {
    return fn.bind(null, str1, str2);
  },

  useArguments : function() {
    return Array.prototype.reduce.call(arguments, function(prev, next) {
      return prev + next;
    });
  },

  callIt : function(fn) {
    var args = Array.prototype.slice.call(arguments, 1);
    return fn.apply(null, args);
  },

  partialUsingArguments : function(fn) {
    var args = Array.prototype.slice.call(arguments, 1);

    function partial (fn, args) {
      return function() {
        var args2 = Array.prototype.slice.call(arguments);
        return fn.apply(null, args.concat(args2));
      };
    }

    return partial(fn, args);
  },

  curryIt : function(fn) {
    var numArgs = fn.length;

    function curry(prevArgs) {
      return function (newArg) {
        var args = prevArgs.concat(newArg);
        
        if (args.length === numArgs) {
          return fn.apply(null, args);
        } else {
          return curry(args);
        }
      };
    }
    return curry([]);
  }
};
