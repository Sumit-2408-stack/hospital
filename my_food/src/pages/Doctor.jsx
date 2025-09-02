import React from "react";

export const Doctor = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    console.log("Appointment Data:", data);
    e.target.reset();
  };

  return (
    <section className="doctor-section">
        <div classname="doctor-container">
      <h1 className="container-heading">Register</h1>

      <div className="doctor-container">
        <form onSubmit={handleFormSubmit}>
          <input type="text" className="form-control"placeholder="Enter Your Name" name="username"
             required autoComplete="off"/>

          <input type="email"className="form-control" placeholder="Enter Your Email" name="email"
             required autoComplete="off" />

          <input type="tel" className="form-control" placeholder="Enter Your Phone"  name="phone"
            required autoComplete="off"/>

          <select className="form-control" name="doctor" required>
            <option value="">Select Doctor</option>
            <option value="Dr. Smith">Dr. Smith</option>
            <option value="Dr. Johnson">Dr. Johnson</option>
            <option value="Dr. Patel">Dr. Hanshraj</option>
            <option value="Dr. Patel">Dr. Prativa</option>
            <option value="Dr. Patel">Dr. Isha</option>
            <option value="Dr. Patel">Dr. Patel</option>
            <option value="Dr. Patel">Dr. Rajak</option>
          </select>

          <input  type="date" className="form-control" name="date" required />

          <input type="time" className="form-control" name="time" required />

          <textarea className="form-control"  rows="5"
            placeholder="Describe Your Health Issue" name="message" required autoComplete="off"></textarea>

          <button type="submit"> Book Appointment </button>
        </form>
      </div>
      </div>
    </section>
  );
};
