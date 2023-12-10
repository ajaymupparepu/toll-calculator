import React from 'react';

const Result = ({ totalToll }) => {
  return (
    <div>
      <h3>Total Toll:</h3>
      <p>${totalToll}</p>
    </div>
  );
};

export default Result;