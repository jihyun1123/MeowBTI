import React, { useState } from "react";
import copyIcon from "./assets/icons/linkIcon.png";

function CopyLink() {
  const [copied, setCopied] = useState(false);

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    // eslint-disable-next-line no-unused-vars
    } catch (err) {
      alert("링크 복사에 실패했어요 😿");
    }
  };

  return (
    <img
      src={copyIcon}
      alt="링크 복사"
      onClick={copyLink}
      style={{
        cursor: "pointer",
        transform: copied ? "scale(0.95)" : "scale(1)",
        marginLeft: "5%",
        marginRight: "-5%",
        transition: "transform 0.2s ease",
        opacity: copied ? 0.6 : 1,
      }}
    />
  );
}

export default CopyLink;
