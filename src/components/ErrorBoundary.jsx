// src/components/ErrorBoundary.jsx
import  { Component } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes for props validation

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true }; // Removed the 'error' parameter as it is not used
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught by Error Boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired, // Add PropTypes validation for children prop
};

export default ErrorBoundary;
