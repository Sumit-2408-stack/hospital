import Doctordetail from "../api/doctorData.json";

export const About = () => {
  return (
    <section className="section-about container">
      <h1 className="container-title">
        Here are some Information 
        <br />
        About Doctor's
      </h1>
      <div className="gradient-cards">
        {Doctordetail.map((doctor) => {
          const { doctor_id, name, location, specialty, degree } = doctor;
          return (
            <div className="card" key={doctor_id}>
              <div className="container-card bg-blue-box">
                <p className="card-title">Doctor</p>
                <p>
                  <span className="card-description">Name:</span> {name}
                </p>
                <p>
                  <span className="card-description">Location:</span> {location}
                </p>
                <p>
                  <span className="card-description">Specialty:</span> {specialty}
                </p>
                <p>
                  <span className="card-description">Degree:</span> {degree}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
