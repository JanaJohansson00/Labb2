import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Importera FontAwesomeIcon
import {
  faFacebookF,
  faLinkedin,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import ProfilePic from '../Images/Profile-pic.jpg';

const About = () => {
  return (
    <div className="about-wrapper">
      <div className="about-left">
        <div className="about-left-content">
          <div>
            <div className="shadow">
              <div className="about-img">
                <img src={ProfilePic} alt="about image" />
              </div>
            </div>

            <h2>Jana Johansson</h2>
            <h3>Student - Framtida systemutvecklare</h3>
          </div>

          <ul className="icons">
            <li>
              <FontAwesomeIcon icon={faFacebookF} />
            </li>
            <li>
              <FontAwesomeIcon icon={faLinkedin} />
            </li>
            <li>
              <FontAwesomeIcon icon={faInstagram} />
            </li>
          </ul>
        </div>
      </div>
      <footer>
        <p id="easter-egg">&copy; 2024 Jana Johansson.</p>
      </footer>
    </div>
  );
};

export default About;
