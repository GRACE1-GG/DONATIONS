// src/components/DonateBooksOrMoney.jsx

import PledgeBook from './PledgeBook';
import MonetaryDonation from './MonetaryDonation';
import GoogleMapComponent from './GoogleMap';
import ErrorBoundary from './ErrorBoundary';
import './DonateBooksOrMoney.css'; // Import a CSS file for styling if needed

const DonateBooksOrMoney = () => {
  return (
    <ErrorBoundary>
    <div className="donate-books-or-money">
      <PledgeBook />
      <MonetaryDonation />
      <GoogleMapComponent />
    </div>
    </ErrorBoundary>
  );
};

export default DonateBooksOrMoney;
