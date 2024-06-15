import React, { useState, useEffect } from 'react';

const AnimatedText = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set isVisible to true after component mounts to trigger animation
    setIsVisible(true);
  }, []);

  return (
    <>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Podkova:wght@400..800&display=swap')
      </style>
      {isVisible && (
        <p style={{ "font-family": "Podkova, serif", "font-weight": "600", display: 'inline-block' }}>
          {Array.from("Hello!👋 Thanks for visiting!🙏").map((char, index) => (
            <span
              key={index}
              style={{
                opacity: 0,
                animation: `fadeIn 0.5s ease forwards`,
                animationDelay: `${index * 0.1}s`,
                fontSize: "32px"
              }}
            >
              {char}
            </span>
          ))}
        </p>
      )}
      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
        `}
      </style>
    </>
  );
};

export default AnimatedText;
