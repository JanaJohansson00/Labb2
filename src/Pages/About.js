import React from 'react';
import ProfilePic from '../Images/Profile-pic.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faLinkedin,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

const About = () => {
  return (
    <div className="row">
      <div className="col-12">
        <div className="about-wrapper">
          <div className="about-left">
            <div className="about-left-content">
              <div>
                <div className="shadow">
                  <div className="about-img">
                    <img src={ProfilePic} />
                  </div>
                </div>

                <h2>Jana Johansson</h2>
                <h3>Student - Framtida systemutvecklare</h3>
                <p>Skrolla ner för att läsa mer!</p>
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

          <div className="about-right">
            <h1>
              Hej<span>!</span>
            </h1>
            <h2>Här är mer om vem jag är och vad jag gör..</h2>

            <div className="about-para">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
                aspernatur possimus ullam quaerat, laboriosam ex voluptate
                aliquid laborum, obcaecati ratione accusamus! Ea nisi modi dolor
                nam numquam? Temporibus, molestias amet.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus
                iure tempora alias laudantium sapiente impedit!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
