import React from "react";
import InformationCard from "./InformationCard";
// import { faHeartPulse, faTruckMedical, faTooth } from "@fortawesome/free-solid-svg-icons";
import "../Styles/Info.css";
// import { faVideo , faPeopleGroup , faSearch } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon  } from "@fortawesome/react-fontawesome";

function Info() {
  return (
    <div className="info-section" id="services">
      <div className="info-title-content">
        <h3 className="info-title">
          <span>What We Do</span>
        </h3>
        <p className="info-description">
        We bring the world of casting to your fingertips, offering a comprehensive range of services tailored to your needs. Our platform allows you to connect with experienced casting directors who provide expert advice, audition opportunities, and offer quick access to talent whenever you require it.
        </p>
      </div>

      <div className="info-cards-content">
        <InformationCard
          title="Auditions and Casting Calls"
          description="Casting directors organize auditions and casting calls to find the right actors, models, or performers for various projects such as films, TV shows, commercials, and theater productions. They review portfolios, conduct auditions, and make casting decisions based on the project's requirements."

          // icon={faVideo}
        />

        <InformationCard
          title="Talent Scouting and Networking"
          description=" Casting directors are constantly scouting for new talent. They attend events, watch performances, and network with agents, managers, and industry professionals to discover new actors and performers who fit specific roles or have unique qualities."
          // icon={faPeopleGroup}
        />

        <InformationCard
          title="Role Analysis and Casting Strategy"
          description="Casting directors work closely with directors, producers, and writers to understand the script, analyze character roles, and develop a casting strategy. They consider factors such as the project's budget, target audience, and artistic vision when selecting the right talent for each role."
          // icon={faSearch}
        />
      </div>
    </div>
  );
}

export default Info;
