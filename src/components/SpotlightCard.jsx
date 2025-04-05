import { useRef } from "react";
import { Colors } from "../assets/Colors";

const SpotlightCard = ({ children, className = "", spotlightColor = Colors.white }) => {
    const divRef = useRef(null);
  
    const handleMouseMove = (e) => {
        const rect = divRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
    
        divRef.current.style.setProperty("--mouse-x", `${x}px`);
        divRef.current.style.setProperty("--mouse-y", `${y}px`);
        divRef.current.style.setProperty("--spotlight-color", spotlightColor);
    };

    return (
        <>
            <style>
                {`        
                .card-spotlight {
                    background: rgba(255, 255, 255, 0.08);
                    backdrop-filter: blur(10px);
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
                    font-family: "Anta", sans-serif;
                    font-style: normal;
                    font-weight: 500;
                    font-size: clamp(1.2rem, 1.6vw, 2.5rem);
                    width: 15vw;
                    height: 70vh;
                    position: relative;
                    box-shadow: 0 0 0.8rem ${Colors.lilac}, 0 0 1.25rem ${Colors.blue};
                }

                /* Spotlight effect */
                .card-spotlight::before {
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
                    opacity: 0.1;
                }

                /* Portrait adjustments */
                @media (orientation: portrait) {
                    .card-spotlight {
                        height: 60vh;
                        width: 90%;
                        order: 2;
                    }
                    .full-width {
                        flex-direction: column;
                        display: block;
                        max-width: 90%;
                        padding-right: 2%;
                        order: 2;
                        text-align: center;
                    }
                }

                /* Full-width version */
                .full-width {
                    padding-top: 10%; 
                    padding-bottom: 10%;
                    width: 90% !important;
                    height: fit-content;
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
