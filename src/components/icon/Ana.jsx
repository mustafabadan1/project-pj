import React from 'react';

const Ana = ({ className, height, width }) => {
  return (
    <svg 
    className={className}
    width={width}
    height={height}
    xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Zm1 2v14h16V5H4Zm3 8h2v4H7v-4Zm4-6h2v10h-2V7Zm4 3h2v7h-2v-7Z'
 
      />
    </svg>
  );
};

export { Ana };
