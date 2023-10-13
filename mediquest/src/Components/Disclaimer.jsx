// Disclaimer.jsx

import React from 'react';
import DisclaimerIcon from '../Assets/Disclaimer.svg';

const Disclaimer = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>
      <img src={DisclaimerIcon} alt="Disclaimer Icon" style={{ width: '24px', height: '24px', marginRight: '10px' }} />
      <p style={{ fontSize: '14px', maxWidth: '80%', lineHeight: '1.4' }}>
        MediQuest provides information for general awareness only and is not a substitute for professional medical advice or diagnosis. Always consult a healthcare professional about any health concerns. If you believe you have a medical emergency, seek immediate medical attention. Use of MediQuest indicates understanding of these limitations.
      </p>
    </div>
  );
}

export default Disclaimer;
