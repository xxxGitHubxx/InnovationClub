import { useRef } from "react";
import { Colors } from "../../assets/Colors";

const SpotlightCard = ({ children, className = "", spotlightColor = "rgba(255, 255, 255, 0.25)" }) => {
    const divRef = useRef(null);
  
    const handleMouseMove = (e) => {
      const rect = divRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left + 100;
      const y = e.clientY - rect.top + 150;
  
      divRef.current.style.setProperty("--mouse-x", `${x}px`);
      divRef.current.style.setProperty("--mouse-y", `${y}px`);
      divRef.current.style.setProperty("--spotlight-color", spotlightColor);
    };
  
    return (
    <>
    <style>
        {`        
        .card-spotlight
        {
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(8px);
            border-radius: 30px;
            padding: 0% 5%;
            color: ${Colors.white};
            z-index: 0;
            box-shadow: 16px 16px 16px rgba(20, 1, 52, 0.47);
            overflow: hidden;
            flex-grow: 1;
            margin: 0;
            display: flex;
            align-items: center;
            font-family: "Roboto", sans-serif;
            font-style: normal;
            font-weight: 500;
            font-size: clamp(1.3rem, 1.6vw, 2.5rem);
            --mouse-x: -50%;
            --mouse-y: -50%;
            --spotlight-color: rgba(255, 255, 255, 0.05);
            width: 20vw;
            height: 70vh;
            position: "relative";
        }


        .card-spotlight::before 
        {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: radial-gradient(circle at var(--mouse-x) var(--mouse-y), var(--spotlight-color), transparent 80%);
            opacity: 0;
            transition: opacity 0.5s ease;
            pointer-events: none;
        }

        .card-spotlight:hover::before,
        .card-spotlight:focus-within::before {
            opacity: 0.6;
        }

        @media (orientation:portrait)
        {
            .card-spotlight
            {
                flex-basis: 100%;
                height: 60vh;
            }
        }

        `}
    </style>
    <div
    ref={divRef}
    onMouseMove={handleMouseMove}
    className={`card-spotlight ${className}`}
    >
    {children}
    </div>
    </>
    );
  };
  
  export default SpotlightCard;