import React, { useEffect, useState } from "react";
import Doctor from "../Assets/romil.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCalendarCheck, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { useNavigate  } from "react-router-dom";
import "../Styles/Hero.css";


function Hero() {
  const navigate = useNavigate();
  const [goUp, setGoUp] = useState(false);

  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    '/images/image3.jpeg',
    '/images/image4.jpeg',
    '/images/image5.jpeg',
    '/images/image6.jpeg',
    '/images/image7.jpeg',
    '/images/image8.jpeg',
    '/images/image9.jpeg',
    '/images/image10.jpeg',
    '/images/image11.jpeg',
  ];


  const [f, setF] = useState(4); // Number of images to show initially

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    if (currentSlide >= images.length - f) {
      setCurrentSlide(0);
    }
  }, [currentSlide, images.length, f]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setF(1); // Change to 1 image for mobile devices
      } else {
        setF(4); // Default to 4 images for larger screens
      }
    };

    handleResize(); // Call once to set initial value
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBookAppointmentClick = () => {
    navigate("/appointment");
  };



  useEffect(() => {
    const onPageScroll = () => {
      if (window.scrollY > 600) {
        setGoUp(true);
      } else {
        setGoUp(false);
      }
    };
    window.addEventListener("scroll", onPageScroll);

    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);

  return (
    <div className="section-container">
      <div className="hero-section">
        <div className="text-section">
          <p className="text-headline">🎬 Discover Talent for Your Next Project</p>
          <h2 className="text-title">
          Find the Perfect Cast for Your Film
          </h2>
          <p className="text-descritpion">
          Connect with talented actors and actresses for auditions and casting calls. Browse profiles, view reels, and make selections. On-demand casting services to bring your vision to life.
          </p>
          <button
            className="text-appointment-btn"
            type="button"
            onClick={handleBookAppointmentClick}
          >
            {/* <FontAwesomeIcon icon={faCalendarCheck} /> */}
             Book Appointment
          </button>
          <div className="text-stats">
            <div className="text-stats-container">
              <p>145k+</p>
              <p>Received Project</p>
            </div>

            <div className="text-stats-container">
              <p>50+</p>
              <p>Expert Team</p>
            </div>

            <div className="text-stats-container">
              <p>15+</p>
              <p>Years of Experience</p>
            </div>
          </div>
        </div>

        <div className="hero-image-section">
          <img className="hero-image1" width={80} src={Doctor} alt="Doctor" />
        </div>
      </div>

      <div
        onClick={scrollToTop}
        className={`scroll-up ${goUp ? "show-scroll" : ""}`}
      >
        {/* <FontAwesomeIcon icon={faAngleUp} /> */}
      </div>
      <div style={{ position: 'relative', width: '100%', height: '400px', overflow: 'hidden' }}>
      <button
        style={{
          position: 'absolute',
          top: '50%',
          left: '10px',
          transform: 'translateY(-50%)',
          zIndex: '999',
          backgroundColor: 'rgba(255, 255, 255, 0.5)',
          border: 'none',
          color: 'black',
          padding: '10px',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
        onClick={prevSlide}
      >
        {'<'}
      </button>
      <button
        style={{
          position: 'absolute',
          top: '50%',
          right: '10px',
          transform: 'translateY(-50%)',
          zIndex: '999',
          backgroundColor: 'rgba(255, 255, 255, 0.5)',
          border: 'none',
          color: 'black',
          padding: '10px',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
        onClick={nextSlide}
      >
        {'>'}
      </button>
      <div style={{ display: 'flex', transition: 'transform 0.5s', transform: `translateX(-${currentSlide * (100 / f)}%)` }}>
        {images.map((image, index) => (
          <img
            key={index}
            style={{ width: `${100 / f}%`, height: 'auto' }}
            src={process.env.PUBLIC_URL + image}
            alt={`Slide ${index}`}
          />
        ))}
      </div>
    </div>
      
    </div>
  );
   
}

export default Hero;





























