import React from 'react';
import BuyerCard from './buyerCard';
import Feature from './feature';

const Buyer: React.FC = () => {
  return (
    <div className='page-wrapper'>
        <div className='content'>
            <BuyerCard/>
            <Feature/>
        </div>
    </div>
  );
};

export default Buyer;
