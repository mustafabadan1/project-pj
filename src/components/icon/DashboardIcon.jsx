import React from 'react';

const DashboardIcon = ({ className, height, width }) => {
  return (
    <svg 
    className={className}
    width={width}
    height={height}
    xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M3 3h8v8H3V3Zm0 10h8v8H3v-8ZM13 3h8v8h-8V3Zm0 10h8v8h-8v-8Zm2-8v4h4V5h-4Zm0 10v4h4v-4h-4ZM5 5v4h4V5H5Zm0 10v4h4v-4H5Z'

      />
    </svg>
  );
};

export { DashboardIcon };
