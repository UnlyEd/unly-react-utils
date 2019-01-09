import React from 'react';

const _safeHTML = (html) => {
  return { __html: html };
};

const SafeHTML = ({ html, tag = 'div' }) => {
  const Tag = tag;

  return <Tag dangerouslySetInnerHTML={_safeHTML(html)} />;
};

export default SafeHTML;

