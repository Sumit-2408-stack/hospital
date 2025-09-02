export const Contact = () => {
  const handleFormSubmit = async (e) => {
    e.preventDefault(); // stop page reload
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("http://localhost:5000/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (result.success) {
        alert("✅ Message sent successfully!");
      } else {
        alert("❌ Failed to send message: " + result.error);
      }
    } catch (err) {
      console.error(err);
      alert("⚠ Error connecting to the server");
    }

    e.target.reset(); // clear form after submit
  };

  return (
    <section className="section-contact">
      <h2 className="container-title"> Contact Us</h2>

      <div className="contact-container">
        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Your Name"
            name="name" // ✅ changed from username → name to match backend
            required
            autoComplete="off"
          />

          <input
            type="email"
            className="form-control"
            placeholder="Enter Your Email"
            name="email"
            required
            autoComplete="off"
          />

          <textarea
            className="form-control"
            rows="10"
            placeholder="Enter Your Message"
            name="message"
            required
            autoComplete="off"
          ></textarea>

          <button type="submit">Send</button>
        </form>
      </div>
    </section>
  );
};export const contact = () => {
  const handleFormSubmit = async (e) => {
    e.preventDefault(); // stop page reload
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("http://localhost:5000/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (result.success) {
        alert("✅ Message sent successfully!");
      } else {
        alert("❌ Failed to send message: " + result.error);
      }
    } catch (err) {
      console.error(err);
      alert("⚠ Error connecting to the server");
    }

    e.target.reset(); // clear form after submit
  };

  return (
    <section className="section-contact">
      <h2 className="container-title"> Contact Us</h2>

      <div className="contact-container">
        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Your Name"
            name="name" // ✅ changed from username → name to match backend
            required
            autoComplete="off"
          />

          <input
            type="email"
            className="form-control"
            placeholder="Enter Your Email"
            name="email"
            required
            autoComplete="off"
          />

          <textarea
            className="form-control"
            rows="10"
            placeholder="Enter Your Message"
            name="message"
            required
            autoComplete="off"
          ></textarea>

          <button type="submit">Send</button>
        </form>
      </div>
    </section>
  );
};