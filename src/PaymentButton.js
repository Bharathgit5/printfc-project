import React from 'react';

const PaymentButton = () => {
  const handleButtonClick = () => {
    window.open('https://www.instamojo.com/@printfc_in12', '_blank');
  };

  return (
    <button onClick={handleButtonClick}>Pay Now</button>
  );
};

export default PaymentButton;
