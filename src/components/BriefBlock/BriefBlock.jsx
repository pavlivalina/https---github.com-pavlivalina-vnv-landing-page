import React from 'react';
import './BriefBlock.css'

const BriefBlock = () => {
  const briefDescription = "A brief is a document that contains important information about a project or task. It helps to understand the client's needs and expectations and provides a crucial foundation for development.";

  return (
    <div className="brief-block-section">
      <div className='brief-block'>
      <h1 className='brief-title'>Fill brief</h1>
      <p>{briefDescription}</p>
      <button className='fill-now-button'>Fill Now</button>
    </div>
    </div>
  );
};

export default BriefBlock;
