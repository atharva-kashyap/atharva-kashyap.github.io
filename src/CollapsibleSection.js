import React from 'react';
import './App.css';

const CollapsibleSection = ({ title, content_without_expand, content }) => {
  return (
    <div>
      <h3>{title}</h3>
      {content_without_expand}
      <div>{content}</div>
    </div>
  );
};

export default CollapsibleSection;
