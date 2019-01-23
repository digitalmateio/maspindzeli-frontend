import React from 'react';
import TripOrderForm from '../containers/TripOrderForm';
import Header from './Header';

const TripStart = () => {
  return (
    <div className="trip-start--container">
      <Header />
      <TripOrderForm />
    </div>
  );
};

export default TripStart;
