import React, { useState } from "react";


export const BookingForm = ({ movie, closeForm }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(
      `🎉 Booking Confirmed!\n
Movie: ${movie.original_title}
Name: ${formData.name}
`
    );

    closeForm();
  };

  return (
    <div className="form-overlay">
      <div className="booking-form">
        <h2>Book Ticket</h2>
        <p><b>Movie:</b> {movie.original_title}</p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            onChange={handleChange}
          />

          <input
          type="date"
          name="date"
          required
          onChange={handleChange}
        />


          

          <div className="form-buttons">
            <button type="submit">Submit</button>
            <button type="button" onClick={closeForm}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
