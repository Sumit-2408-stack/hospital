import { FaLongArrowAltRight } from "react-icons/fa";

export const HeroSection = () => {
    return (
        <main className="hero-section main"> 
                <div className="container grid grid-two-cols">
                    <div className="hero-content">
                    <h1 className="heading-xl">
                        View details about doctor,
                         one at a time.
                    </h1>
                    <p className="paragraph">
                        We have a team of experienced doctors decicated to
                         patient health, safety, and well-being.
                    </p>
                    <button className="btn btn-darken btn-inline bg-white-box">
                        Start Explore <FaLongArrowAltRight />
                    </button>
                    </div>
                    <div className="hero-image">
                        <img src="/images/Hospital.png" alt="" className="hospital-image" />
                    </div>
                </div>
                </main>
            );
}