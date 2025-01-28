import { useState } from "react";
import "./MonetaryDonation.css"; // Import the external CSS

const MonetaryDonation = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div className="payment-container">
      <h2>Payment Options</h2>
      <form>
        <div className="payment-option">
          <label>
            <input
              type="radio"
              value="paypal"
              checked={selectedOption === "paypal"}
              onChange={handleOptionChange}
            />
            PayPal
          </label>
        </div>
       
        <div className="payment-option">
          <label>
            <input
              type="radio"
              value="card"
              checked={selectedOption === "card"}
              onChange={handleOptionChange}
            />
            Credit or Debit Card
          </label>
          {selectedOption === "card" && (
            <div className="card-details">
              <label>
                Card Number:
                <input type="text" placeholder="Card Number" />
              </label>
              <label>
                Name on Card:
                <input type="text" placeholder="Name on Card" />
              </label>
              <div className="card-extra">
                <label>
                  Expiry Date:
                  <input type="text" placeholder="MM/YY" />
                </label>
                <label>
                  CVV:
                  <input type="text" placeholder="CVV" />
                </label>
              </div>
            </div>
          )}
        </div>
        <div className="payment-option">
          <label>
            <input
              type="radio"
              value="mpesa"
              checked={selectedOption === "mpesa"}
              onChange={handleOptionChange}
            />
            M-Pesa
          </label>
          {selectedOption === "mpesa" && (
            <div className="mpesa-details">
              <label>
                Phone Number:
                <input type="text" placeholder="Enter M-Pesa Phone Number" />
              </label>
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default MonetaryDonation;