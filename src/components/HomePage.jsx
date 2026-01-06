import title from '../assets/Title.png';
import banner from '../assets/banner.png';
import React from 'react';
import PreButton from './preButton';
import StartButton from '../assets/startButton.png';
import sayBaloon from '../assets/defaultBaloon.png'
import yapapacat from '../assets/yapapa.gif';
import EnjoyCount from '../assets/EnjoyCount.png';
import hrLine from '../assets/hr.png'
import shareCount from '../assets/testShareCount.png'
import KakaoShare from './kakaoShare';
import TwitterShare from './twiterShare';
import InstagramShare from './instarShare';
import LinkShare from './linkShare';

import './HomePage.css';


function HomePage() {
  const [isClicked, setisClicked] = React.useState(false);
  const handleClick = () => {
    setisClicked(true);
    setTimeout(() => {
      setisClicked(false);
    }, 200);
  };

  return (
    <div>
      <div id="header">
        <PreButton />
        <img src={banner} alt="Banner" />
      </div>

      <div id="main-content">
        <img src={title} alt="Title" />

        <img src={sayBaloon} alt="Speech Balloon" id="speech-balloon" />

        <img src={yapapacat} alt="Yapapa Cat" id="yapapa-cat" />

        <button id='start-button' onClick={handleClick} className={isClicked ? 'clicked' : ''}>
          <img src={StartButton} alt="시작 버튼" />
        </button>
      </div>
      
      <div id="footer">
        <img src={EnjoyCount} alt="Enjoy Count" id="enjoy-count" />

        <img src={hrLine} alt="Horizontal Line" id="hr-line" />

        <img src={shareCount} alt="Share Count" id="share-count" />
        <TwitterShare/>
        <InstagramShare />
        <KakaoShare />
        <LinkShare />
      </div>
    </div>
  )
}

export default HomePage
