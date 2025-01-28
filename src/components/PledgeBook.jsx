// src/components/PledgeBook.jsx
import  { useState } from 'react';
import './PledgeBook.css';

const PledgeBook = () => {
  const [formData, setFormData] = useState({
    name: '',
    contactInfo: '',
    title: '',
    gradeLevel: '',
    author: '',
    condition: '',
    photo: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, photo: e.target.files[0] });
  };

  const handlePledgeSubmit = (e) => {
    e.preventDefault();
    // Handle the pledge submission logic
    alert('Pledge submitted successfully!');
  };

  return (
    <div className="pledge-book">
      <h2>Pledge Book Donation</h2>
      <form onSubmit={handlePledgeSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="contactInfo"
          placeholder="Contact Info"
          value={formData.contactInfo}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="title"
          placeholder="Book Title"
          value={formData.title}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="gradeLevel"
          placeholder="Grade Level"
          value={formData.gradeLevel}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="author"
          placeholder="Author"
          value={formData.author}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="condition"
          placeholder="Condition of the Book"
          value={formData.condition}
          onChange={handleInputChange}
          required
        />
        <input
          type="file"
          name="photo"
          onChange={handleFileChange}
        />
        <button type="submit">Submit Pledge</button>
      </form>
    </div>
  );
};

export default PledgeBook;
