import React, { useState } from "react";
import twitterButton from "../assets/twitter_icon.png";

function TwitterShare() {
  const [isClicked, setIsClicked] = useState(false);

  const shareTwitter = () => {
    const text = "MeowBTI 🐱 나의 고양이 밈 MBTI는?";
    const url = window.location.href;

    const twitterUrl = 
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;

    window.open(twitterUrl, "_blank");
  };

  const handleClick = () => {
    setIsClicked(true);
    shareTwitter();
    setTimeout(() => setIsClicked(false), 200);
  };

  return (
    <img
      src={twitterButton}
      alt="트위터 공유"
      onClick={handleClick}
      style={{
        cursor: "pointer",
        transform: isClicked ? "scale(0.95)" : "scale(1)",
        marginTop: "3%",
        marginLeft: "-5%",
        marginRight: "5%",
        transition: "transform 0.2s ease",
      }}
    />
  );
}

export default TwitterShare;
