import React, { useState } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';

const CollapsibleSection = ({ title, content_without_expand, content }) => {
  // State to control the visibility of the collapsible content
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div>
      <h3>{title}</h3>
      {/* Render content conditionally */}
      {content_without_expand}
      {isExpanded && <div>{content}</div>}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className='expandButton'
      >
        {isExpanded ? <p><FontAwesomeIcon icon={faCaretUp} /> Read less</p> : <p><FontAwesomeIcon icon={faCaretDown} /> Read more</p>}
      </button>
    </div>
  );
};

export default CollapsibleSection;
