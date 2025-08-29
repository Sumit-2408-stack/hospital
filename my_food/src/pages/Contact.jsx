export const Contact = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault(); // stop page reload
    const formData = new FormData(e.target);

    const data = Object.fromEntries(formData.entries());
    console.log(data);

    e.target.reset(); // clear form after submit
  };

  return (
    <section className="section-contact">
      <h2 className="container-title"> Contact Us</h2>

      <div className="contact-container">
        <form onSubmit={handleFormSubmit}>
          <input type="text" className="form-control" placeholder="Enter Your Name" name="username"
            required autoComplete="off" />

          <input type="email"className="form-control"placeholder="Enter Your Email" name="email"
            required autoComplete="off" />

          <textarea className="form-control" rows="10" placeholder="Enter Your Message" name="message"
            required  autoComplete="off" ></textarea>

          <button type="submit">Send</button>
        </form>
      </div>
    </section>
  );
};
