import React, { useState } from "react";
import instagramButton from "../assets/instargram_icon.png";

function InstagramShare() {
  const [isClicked, setIsClicked] = useState(false);

  const shareInstagram = async () => {
    const url = window.location.href;

    try {
      await navigator.clipboard.writeText(url);
      alert("링크가 복사됐어요!\n인스타그램 스토리에 붙여넣기 해주세요 😼");
      window.open("https://www.instagram.com", "_blank");
    // eslint-disable-next-line no-unused-vars
    } catch (err) {
      alert("링크 복사에 실패했어요 😿");
    }
  };

  const handleClick = () => {
    setIsClicked(true);
    shareInstagram();
    setTimeout(() => setIsClicked(false), 200);
  };

  return (
    <img
      src={instagramButton}
      alt="인스타그램 공유"
      onClick={handleClick}
      style={{
        cursor: "pointer",
        transform: isClicked ? "scale(0.95)" : "scale(1)",
        transition: "transform 0.2s ease",
      }}
    />
  );
}

export default InstagramShare;
