import React from "react";
import DoctorCard from "./DoctorCard";
import profile1 from "../Assets/romile.jpg";
import profile2 from "../Assets/ram.jpg";
import profile3 from "../Assets/vasu.jpg";
import profile4 from "../Assets/profile-4.png";
import "../Styles/Doctors.css";

function Doctors() {
  return (
    <div className="doctor-section" id="doctors">
      <div className="dt-title-content">
        <h3 className="dt-title">
          <span>Meet Our Team Members</span>
        </h3>

        <p className="dt-description">
        Meet our exceptional team of casting directors, dedicated to providing top-notch casting services at Casting Plus. Trust in their knowledge and experience to lead you towards a successful and memorable production.
        </p>
      </div>

      <div className="dt-cards-content">
        <DoctorCard
          img={profile1}
          name="Romil Modi"
          title="Director"
          // stars="4.9"
          // reviews="1800"
        />
        <DoctorCard
          img={profile2}
          name="Ram Rawat"
          title="Assistant Director"
          // stars="4.8"
          // reviews="700"
        />
        <DoctorCard
          img={profile3}
          name="Vasu"
          title="Assistant Director"

          // stars="4.7"
          // reviews="450"
        />
        {/* <DoctorCard
          img={profile4}
          name="Dr. Albert Flores"
          title="Hematologists"
          stars="4.8"
          reviews="500"
        /> */}
      </div>
    </div>
  );
}

export default Doctors;
