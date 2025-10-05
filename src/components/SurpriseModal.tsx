import React, { useState, useEffect } from "react";

interface SurpriseModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SurpriseModal: React.FC<SurpriseModalProps> = ({ isOpen, onClose }) => {
  const [sparkles, setSparkles] = useState<
    Array<{ id: number; x: number; y: number; delay: number }>
  >([]);
  const [showLetter, setShowLetter] = useState(false);

  useEffect(() => {
    if (isOpen) {
      // Create sparkles
      const sparklesData = Array.from({ length: 20 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 2,
      }));
      setSparkles(sparklesData);

      // Show letter after sparkles animation
      setTimeout(() => setShowLetter(true), 1000);
    } else {
      setShowLetter(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="surprise-modal-overlay" onClick={onClose}>
      <div className="surprise-modal" onClick={(e) => e.stopPropagation()}>
        {/* Sparkles Animation */}
        <div className="modal-sparkles">
          {sparkles.map((sparkle) => (
            <div
              key={sparkle.id}
              className="modal-sparkle"
              style={{
                left: `${sparkle.x}%`,
                top: `${sparkle.y}%`,
                animationDelay: `${sparkle.delay}s`,
              }}
            >
              ✨
            </div>
          ))}
        </div>

        {/* Handwritten Love Letter */}
        <div className={`handwritten-letter ${showLetter ? "show" : ""}`}>
          <div className="letter-paper">
            <div className="letter-header">
              <h2 className="handwritten-title">My Dearest Love🌹</h2>
            </div>
            <div className="handwritten-content">
              <p className="handwritten-line">
                From the very first moment you walked into my life, everything changed  quietly, beautifully, and completely. You brought colors into my world that I never knew existed. Every smile of yours feels like sunrise after a long night, and every word you speak feels like music my heart was waiting to hear💖....
              </p>
              <p className="handwritten-line">
                I still remember the way you look when you laugh  that sparkle in your eyes, that innocence in your smile  it makes me forget everything else for a while. You’ve become my peace, my chaos, my comfort, and my home, all at once😘 😍  🥰.
              </p>
              <p className="handwritten-line">
                You’ve taught me what love truly means  not through big gestures or fancy words, but through your kindness, patience, and the way you make even ordinary moments feel magical. When I’m with you, time slows down, and the world feels just right💖 💘 💝.......
              </p>
              <p className="handwritten-line">I love the way you care, the way you dream, and the way you make everyone around you feel special. But most of all, I love the way you make me feel   loved, valued, and complete.and the dream I never want to wake up from.....
              </p>
              <p className="handwritten-line">
               On your special day, I just want to remind you how deeply I adore you. You deserve every bit of happiness, every smile, and every dream coming true......
              </p>
              <p className="handwritten-line">

              </p>
              <p className="handwritten-line">
               Happy Birthday, my love   my Chinnu. 💐
               I’ll keep loving you in every way possible  through every sunrise, every night sky, and every heartbeat in between......
              </p>
              <div className="handwritten-signature">
                For Ever yours,
                <br />
                <span className="signature-name">Kamran 💞
                </span>
              </div>
            </div>
          </div>
        </div>

        <button className="close-modal" onClick={onClose}>
          ×
        </button>
      </div>
    </div>
  );
};

export default SurpriseModal;
