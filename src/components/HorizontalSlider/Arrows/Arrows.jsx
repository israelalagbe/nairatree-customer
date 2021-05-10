import React from 'react';

const Arrow = ({
  arrow,
    onClick
  }) => {
    return (
      <>
        <div className="arrows" onClick={onClick}>
          {arrow}
        </div>
  
       
      </>
    );
  };
  
  export default Arrow;
  