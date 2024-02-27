import React from 'react';
import cvData from '../Cv-data.json';
import ProfilePic2 from '../Images/Profile-pic2.png';

const CvData = () => {
  return (
    <div className="header">
      <div className="profile-image-container">
        <img src={ProfilePic2} alt="Jana Johansson" className="profile-image" />
      </div>

      <div className="cv-container">
        <div className="left-column">
          {/* Personlig information */}
          <div className="section">
            <div className="heading">Personlig information</div>
            <p>
              <strong>Ålder:</strong> {cvData.personligInformation.ålder}
            </p>
            <p>
              <strong>Email:</strong> {cvData.personligInformation.email}
            </p>
            <p>
              <strong>Telefonnummer:</strong>{' '}
              {cvData.personligInformation.telefonnummer}
            </p>
          </div>

          {/* Styrkor */}
          <div className="section">
            <div className="heading">Styrkor</div>
            <ul>
              {cvData.styrkor.map((styrka, index) => (
                <li key={index}>{styrka}</li>
              ))}
            </ul>
          </div>

          {/* Utbildning */}
          <div className="section">
            <div className="heading">Utbildningar</div>
            <ul>
              {cvData.utbildningar.map((utbildning, index) => (
                <li key={index}>
                  <h4>{utbildning.titel}</h4>
                  <p>{utbildning.skola}</p>
                  <p>
                    <strong>Period:</strong> {utbildning.period}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="right-column">
          {/* Arbetslivserfarenhet */}
          <div className="section">
            <div className="heading">Arbetslivserfarenhet</div>
            <ul>
              {cvData.arbetsplatser.map((arbetsplats, index) => (
                <li key={index}>
                  <p>
                    <u>
                      <strong>
                        {arbetsplats.titel} -{arbetsplats.arbetsgivare}
                      </strong>
                    </u>
                  </p>
                  <p>Datum: {arbetsplats.period}</p>
                  <p>
                    Beskrivning:
                    {arbetsplats.beskrivning}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CvData;
