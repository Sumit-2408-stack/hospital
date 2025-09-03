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
       <h1 className="container-heading">Doctor & Hospital Information</h1>

       {/* Two parallel divs */}
       <div className="info-container">
         <div className="info-card">
           <h2>👨‍⚕️ Our Doctors</h2>
           <ul>
             <li>Dr. Smith – Cardiologist</li>
             <li>Dr. Johnson – Neurologist</li>
             <li>Dr. Hanshraj – Orthopedic</li>
             <li>Dr. Prativa – Gynecologist</li>
             <li>Dr. Isha – Dermatologist</li>
             <li>Dr. Patel – Pediatrician</li>
             <li>Dr. Rajak – General Physician</li>
     </ul>
         </div>

   <div className="info-card">
           <h2>🏥 Hospital Facilities</h2>
          <ul>
            <li>🛏️ Total Beds: 120</li>
            <li>💉 ICU Beds: 30</li>
           <li>🩺 Ventilators: 15</li>
          <li>🌬️ Oxygen Cylinders: 50</li>
             <li>🚑 Ambulance Service: 24/7</li>
             <li>📡 Online Appointment System</li>
        </ul>
         </div>
       </div>

       {/* Register Form below */}
      <div className="form-card">
       <h2>📅 Book Appointment</h2>
      <form onSubmit={handleFormSubmit}>
           <input type="text" name="username" placeholder="Enter Your Name" required />
      <input type="email" name="email" placeholder="Enter Your Email" required />          <input type="tel" name="phone" placeholder="Enter Your Phone" required />

           <select name="doctor" required>
             <option value="">Select Doctor</option>
             <option value="Dr. Smith">Dr. Smith</option>
             <option value="Dr. Johnson">Dr. Johnson</option>
             <option value="Dr. Hanshraj">Dr. Hanshraj</option>
             <option value="Dr. Prativa">Dr. Prativa</option>
             <option value="Dr. Isha">Dr. Isha</option>
             <option value="Dr. Patel">Dr. Patel</option>
             <option value="Dr. Rajak">Dr. Rajak</option>
          </select>

          <input type="date" name="date" required />
         <input type="time" name="time" required />
           <textarea name="message" rows="5" placeholder="Describe Your Health Issue" required></textarea>

          <button type="submit">Book Appointment</button>
         </form>
      </div>
    </section>
  );
 };


