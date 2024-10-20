import React from 'react';
import './AppDownload.css';
import { assets } from '../assets/assets';

const AppDownload = () => {
  return (
    <div className="app-download" id="app-download">
      <div className="app-download-content">
        <h2>For a Better Experience</h2>
        <p>Download the JPFOOZZ App</p>
      </div>
      <div className="app-download-platforms">
        <a href="#" aria-label="Download on the App Store">
          <img src={assets.app_store} alt="App Store" />
        </a>
        <a href="#" aria-label="Get it on Google Play">
          <img src={assets.play_store} alt="Google Play" />
        </a>
      </div>
    </div>
  );
};

export default AppDownload;
