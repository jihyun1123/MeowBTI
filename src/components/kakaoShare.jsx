import React, { useEffect, useState } from "react";
import kakaoButton from "../assets/kakao_icon.png";

function KakaoShare() {
  const [isClicked, setIsClicked] = useState(false);

  // Kakao SDK 초기화
  useEffect(() => {
    if (window.Kakao && !window.Kakao.isInitialized()) {
      window.Kakao.init("YOUR_KAKAO_JAVASCRIPT_KEY");
    }
  }, []);

  // 카카오 공유 함수
  const shareKakao = () => {
    if (!window.Kakao) return;

    window.Kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title: "MeowBTI 🐱",
        description: "나의 고양이 밈 MBTI는?",
        imageUrl: "https://your-domain.com/thumbnail.png",
        link: {
          mobileWebUrl: window.location.href,
          webUrl: window.location.href,
        },
      },
      buttons: [
        {
          title: "테스트 하러 가기",
          link: {
            mobileWebUrl: window.location.href,
            webUrl: window.location.href,
          },
        },
      ],
    });
  };

  // 클릭 핸들러 (애니메이션 포함)
  const handleClick = () => {
    setIsClicked(true);
    shareKakao();
    setTimeout(() => setIsClicked(false), 200);
  };

  return (
    <img
      src={kakaoButton}
      alt="카카오톡 공유"
      onClick={handleClick}
      style={{
        cursor: "pointer",
        marginTop: "3%",
        marginLeft: "5%",
        transform: isClicked ? "scale(0.95)" : "scale(1)",
        transition: "transform 0.2s ease",
      }}
    />
  );
}

export default KakaoShare;
