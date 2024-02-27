import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMapMarker,
  faPhone,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  return (
    <section className="contact">
      <div className="content">
        <h2>Kontakta mig</h2>
        <p>
          Skicka ett meddelande till mig nedan om du vill komma i kontakt med
          mig!
        </p>
        <p>Svarar vanligtvis inom 1-2 dagar.</p>

        <div className="contactInfo">
          <div className="box">
            <div className="icon">
              <FontAwesomeIcon icon={faMapMarker} />
            </div>
            <div className="text">
              <h3>Adress</h3>
              <p>Esplanaden 24, 852 36 Sundsvall</p>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              <FontAwesomeIcon icon={faPhone} />
            </div>
            <div className="text">
              <h3>Telefonnummer</h3>
              <p>076-100 96 05</p>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
            <div className="text">
              <h3>Email</h3>
              <p>Janajohansson00@hotmail.com</p>
            </div>
          </div>
        </div>
        <div className="contactForm">
          <form>
            <h2>Skicka meddelande</h2>
            <div className="inputbox">
              <input type="text" required />
              <span>Fullständigt namn</span>
            </div>
            <div className="inputbox">
              <input type="text" required />
              <span>Email</span>
            </div>
            <div className="inputbox">
              <textarea required></textarea>
              <span>Skriv ditt meddelande här..</span>
            </div>
            <div className="inputbox">
              <input type="submit" value="Skicka" />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
