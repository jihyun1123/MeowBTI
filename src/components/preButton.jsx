// components/PreButton.jsx
import React, { useState } from 'react';
import preButton from '../assets/preButton.png';
function PreButton() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
    }, 200);
  };


  return (
    <img
      src={preButton}
      alt="PreIcon"
      onClick={handleClick}
      className={isClicked ? 'clicked' : ''}
      style={{ cursor: 'pointer' }}
    />
  );
}
export default PreButton;