import React from 'react';

function DownArrow() {
  const arrowStyle = {
    position: 'absolute',
    bottom: '8%',
    right: '8%',
    cursor: 'pointer',
    animation: 'bounce 2s infinite',
    zIndex: '100',
    border: '1px solid #fff',
    borderRadius: '50%',
    padding: '10px 12px',
    scrollBehavior: 'smooth',
  };

  const arrowStyle2 = {
    width: '30px',
    height: '30px',
    position: 'relative',
    cursor: 'pointer',
  };

  const handleDownArrow = () => {
    const targetPosition = 800; // Hedef yükseklik
    const currentPosition = window.pageYOffset; // Mevcut yükseklik
    const distance = targetPosition - currentPosition; // Yol mesafesi
    const speed = 50; // Scroll hızı (daha yüksek sayı daha hızlı scroll yapar)

    const scrollStep = Math.PI / (targetPosition / (speed / 15)); // Scroll adım büyüklüğü

    let scrollCount = 0;
    let scrollMargin;

    const scrollAnimation = setInterval(() => {
      if (window.pageYOffset !== targetPosition) {
        scrollCount += 1;
        scrollMargin = distance * (0.5 - 0.5 * Math.cos(scrollCount * scrollStep));
        window.scrollTo(0, currentPosition + scrollMargin);
      } else {
        clearInterval(scrollAnimation);
      }
    }, 1);
  };

  return (
    <div onClick={handleDownArrow} className="downArrow" style={arrowStyle}>
      <img style={arrowStyle2} src="https://i.hizliresim.com/1fkz3cl.png" alt="" />
    </div>
  );
}

export default DownArrow;
