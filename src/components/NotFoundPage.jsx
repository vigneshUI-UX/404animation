import React, { useState, useEffect } from 'react';
import '../styles/NotFoundPage.css';

export default function NotFoundPage() {
  // Sequence states: 'disconnected' -> 'connecting' -> 'shocked'
  const [animState, setAnimState] = useState('disconnected');

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setAnimState('connecting');
    }, 2000);

    const timer2 = setTimeout(() => {
      setAnimState('shocked');
    }, 3200);

    const timer3 = setTimeout(() => {
      setAnimState('disconnected');
    }, 5200);

    const interval = setInterval(() => {
      setAnimState('connecting');
      
      setTimeout(() => {
        setAnimState('shocked');
      }, 1200);

      setTimeout(() => {
        setAnimState('disconnected');
      }, 3200);
    }, 6000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="not-found-container">
      <div className="content-wrapper">
        <h1 className="error-code">404</h1>
        <h2 className="error-subtitle">ERROR</h2>

        {/* Animation Stage */}
        <div className="animation-stage">
          {/* Left Monitor */}
          <div className="machine monitor-machine">
            <div className="monitor-screen">
              <svg className="screen-graph" viewBox="0 0 100 60">
                <path d="M 0 35 L 25 35 L 35 15 L 50 45 L 65 20 L 75 35 L 100 35" />
              </svg>
            </div>
            <div className="monitor-stand"></div>
            <div className="monitor-base"></div>
            <div className="wire-port port-left"></div>
          </div>

          {/* Right Server Rack */}
          <div className="machine server-machine">
            <div className="server-slot">
              <span className={`server-light ${animState === 'shocked' ? 'spark-light' : 'green-light'}`}></span>
              <span className="server-light red-light"></span>
              <div className="server-vent"></div>
            </div>
            <div className="server-slot">
              <span className="server-light blue-light"></span>
              <div className="server-vent"></div>
            </div>
            <div className="server-slot">
              <span className={`server-light ${animState === 'shocked' ? 'spark-light' : 'green-light'}`}></span>
              <div className="server-vent"></div>
            </div>
            <div className="wire-port port-right"></div>
          </div>

          {/* Wire SVGs - Direct contact touching object edges */}
          <svg className="connecting-wire-svg" viewBox="0 0 420 220">
            {/* Left Wire touching Monitor Back Edge */}
            <path
              className="wire-path"
              d={
                animState === 'disconnected'
                  ? "M 82,155 C 100,195 130,190 170,165"
                  : "M 82,155 C 110,195 145,180 205,163"
              }
            />
            {/* Right Wire touching Server Left Side Edge */}
            <path
              className="wire-path"
              d={
                animState === 'disconnected'
                  ? "M 335,155 C 315,195 285,190 250,165"
                  : "M 335,155 C 305,195 270,180 215,163"
              }
            />
          </svg>

          {/* Grounded Monkey */}
          <div className={`monkey-wrapper ${animState}`}>
            {animState === 'shocked' && (
              <div className="spark-overlay">
                <span className="spark s1">⚡</span>
                <span className="spark s2">⚡</span>
                <span className="spark s3">⚡</span>
                <span className="spark s4">⚡</span>
              </div>
            )}

            <div className={`monkey-character ${animState === 'shocked' ? 'vibrate' : ''}`}>
              <div className={`cape cape-left ${animState}`}></div>
              <div className={`cape cape-right ${animState}`}></div>

              <div className="monkey-head">
                <div className="ear ear-left"></div>
                <div className="ear ear-right"></div>
                <div className="face-outer">
                  <div className={`eye eye-left ${animState === 'shocked' ? 'eye-shock' : ''}`}>
                    <div className="pupil"></div>
                  </div>
                  <div className={`eye eye-right ${animState === 'shocked' ? 'eye-shock' : ''}`}>
                    <div className="pupil"></div>
                  </div>
                  <div className="snout"></div>
                  <div className={`mouth ${animState === 'shocked' ? 'mouth-shock' : ''}`}></div>
                </div>
              </div>

              <div className="monkey-body">
                <div className="monkey-chest"></div>
              </div>

              <div className={`arm arm-left ${animState}`}>
                <div className="hand"></div>
              </div>
              <div className={`arm arm-right ${animState}`}>
                <div className="hand"></div>
              </div>

              <div className="foot foot-left"></div>
              <div className="foot foot-right"></div>
              <div className="monkey-tail"></div>
            </div>
          </div>

          <div className="grass-hill"></div>
        </div>

        {/* Permanent Stable Heading Text */}
        <h3 className="heading-text">Look like you're lost</h3>
        <p className="sub-text">the page you are looking for is not available!</p>
      </div>
    </div>
  );
}