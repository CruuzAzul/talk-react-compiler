import "../styles/Loader.css";

export default function Loader() {
  return (
    <div className="loader">
      <div className="helmets">
        {/* Thomas Bangalter Helmet */}
        <svg
          className="helmet thomas"
          viewBox="0 0 100 100"
          style={{
            animation:
              "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite, rotate 4s linear infinite",
            transformOrigin: "center",
          }}
        >
          <defs>
            <linearGradient
              id="silverGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#f0f0f0" />
              <stop offset="50%" stopColor="#c0c0c0" />
              <stop offset="100%" stopColor="#a0a0a0" />
            </linearGradient>
          </defs>
          <path
            d="M10,50 Q10,10 50,10 Q90,10 90,50 Q90,90 50,90 Q10,90 10,50 Z"
            fill="url(#silverGradient)"
            stroke="#808080"
            strokeWidth="2"
          />
          <path
            d="M25,40 L75,40 Q85,50 75,60 L25,60 Q15,50 25,40 Z"
            fill="#000000"
            stroke="#808080"
            strokeWidth="1"
          />
        </svg>
        {/* Guy-Manuel de Homem-Christo Helmet */}
        <svg
          className="helmet guy"
          viewBox="0 0 100 100"
          style={{
            animation:
              "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite, rotateReverse 4s linear infinite",
            transformOrigin: "center",
          }}
        >
          <defs>
            <linearGradient
              id="goldGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#ffd700" />
              <stop offset="50%" stopColor="#ffcc00" />
              <stop offset="100%" stopColor="#ffaa00" />
            </linearGradient>
          </defs>
          <path
            d="M20,50 Q20,20 50,20 Q80,20 80,50 Q80,80 50,80 Q20,80 20,50 Z"
            fill="url(#goldGradient)"
            stroke="#d4af37"
            strokeWidth="2"
          />
          <path
            d="M30,45 L70,45 Q75,50 70,55 L30,55 Q25,50 30,45 Z"
            fill="#000000"
            stroke="#d4af37"
            strokeWidth="1"
          />
        </svg>
      </div>
    </div>
  );
}
