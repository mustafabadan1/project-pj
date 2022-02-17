import React from 'react';

const Reports = ({ className, height, width }) => {
  return (
    <svg 
    
    className={className}
    width={width}
    height={height}
     xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M7 6V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-3v3c0 .552-.45 1-1.007 1H4.007A1 1 0 0 1 3 21l.003-14c0-.552.45-1 1.006-1H7ZM5.002 8 5 20h10V8H5.002ZM9 6h8v10h2V4H9v2Zm-2 5h6v2H7v-2Zm0 4h6v2H7v-2Z'
       
      />
    </svg>
  );
};

export { Reports };
