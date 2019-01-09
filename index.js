import React from 'react';

var _safeHTML = function _safeHTML(html) {
  return {
    __html: html
  };
};

var SafeHTML = function SafeHTML(_ref) {
  var html = _ref.html,
      _ref$tag = _ref.tag,
      tag = _ref$tag === void 0 ? 'div' : _ref$tag;
  var Tag = tag;
  return React.createElement(Tag, {
    dangerouslySetInnerHTML: _safeHTML(html)
  });
};

export default SafeHTML;
