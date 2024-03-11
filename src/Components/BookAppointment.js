import React, { useEffect, useState } from "react";
import Doctor from "../Assets/doctor-book-appointment.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faCircleCheck,
//   faCalendarCheck,
// } from "@fortawesome/free-solid-svg-icons";
import { useNavigate  } from "react-router-dom";
import "../Styles/BookAppointment.css";

function BookAppointment() {
  const navigate = useNavigate();

  const handleBookAppointmentClick = () => {
    navigate("/appointment");
  };

  //slider below
  const [currentSlide, setCurrentSlide] = useState(0);
  const [goUp, setGoUp] = useState(false);

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

  // const handleBookAppointmentClick = () => {
  //   navigate("/appointment");
  // };



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
    <div className="ba-section">
      {/* <div className="ba-image-content">
        <img src={Doctor} alt="Doctor Group" className="ba-image1" />
      </div> */}

      <div className="ba-text-content">
        <h3 className="ba-title">
          <span>Upcoming Projects</span>
        </h3>
        <p className="ba-description">
        - Payal Kapadia’s Next feature film <br></br>
- Sonam Nair’s  web show for Amazon <br></br>
- ⁠Kanishk Verma’s web show for Viacom  <br></br>
- ⁠Madhumita Sundararaman Hindi version of angmalay diaries.<br></br>
- ⁠Noopur boras next feature film <br></br>
- ⁠Gul khans web show <br></br>
- ⁠ Adam Graves  <br></br>
-short film  Anuja <br></br>
        </p>
       
       

       
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

export default BookAppointment;
