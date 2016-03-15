exports = (typeof window === 'undefined') ? global : window;

/**
 * This file defines an object with some methods. Some of these methods are
 * populated incorrectly; your job is to fix them. Other methods are not
 * populated at all; your job is to fill them out.
 */

exports.bestPracticesAnswers = {
  // in strict mode, omitting var will produce an error
  globals : function() {
    var myObject = {
      name : 'Jory'
    };

    return myObject;
  },

  functions : function(flag) {
    // Function declarations are not hoisted, so a function expression is necessary
    // in this case to ensure that getValue returns 'a' when flag is true
    var getValue;
    
    if (flag) {
      getValue = function () { return 'a'; };
    } else {
      getValue = function () { return 'b'; };
    }

    return getValue();
  },

  parseInt : function(num) {
    // The radix should always be defined to avoid confusion, usually base 10.
    return parseInt(num, 10);
  },

  identity : function(val1, val2) {
    // Strict equality ensures that you are comparing values (or references)
    // and not truthiness/falsiness
    return val1 === val2;
  }
};
