// src/components/Banner.
// import React from 'react';
// src/components/Banner.jsx
//import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css'; // Ensure you import the CSS file

const Banner = () => (
  <div className="banner">
    <img src="/src/images/image.jpg" alt="Students reading" />
    <h1>Donate or Exchange Books. Transform Education.</h1>
    <Link to="/donate-books-or-money">
      <button>Donate Books or Money</button>
    </Link>
    <Link to="/find-or-exchange-books">
      <button>Find or Exchange Books</button>
    </Link>
  </div>
);

export default Banner;

