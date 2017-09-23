const path = require('path');

var createPattern = function (pattern) {
  return {pattern: pattern, included: true, served: true, watched: false};
};

var initDomMatchers = function (files) {
  var matchersPath = path.dirname(require.resolve('jasmine-dom-custom-matchers'));
  files.unshift(createPattern(path.join(matchersPath,'/dom-matchers.js')));
};

initDomMatchers.$inject = ['config.files'];

module.exports = {
  'framework:jasmine-dom': ['factory', initDomMatchers]
};