import { useRef, useState } from "react";
import { Colors } from "../assets/Colors";

const AccordionItem = ({ title, content }) => {
    const divRef = useRef(null);
    const [isClicked, setIsClicked] = useState(false);

    const handleMouseMove = (e) => {
        const rect = divRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        divRef.current.style.setProperty("--mouse-x", `${x}px`);
        divRef.current.style.setProperty("--mouse-y", `${y}px`);
        divRef.current.style.setProperty("--spotlight-color", Colors.white);
    };

    const toggleClick = () => {
        setIsClicked(prev => !prev);
    };

    return (
        <>
            <style>
                {`
                .accordion {
                    width: 100%;
                    font-family: 'Anta', sans-serif;
                }

                .accordion-item {
                    background: rgba(255, 255, 255, 0.08);
                    backdrop-filter: blur(10px);
                    color: ${Colors.white};
                    border-radius: 30px;
                    margin-bottom: 15px;
                    overflow: hidden;
                    padding: 0% 5%;
                    font-style: normal;
                    font-weight: 500;
                    font-size: clamp(1.7rem, 2vw, 3rem);
                    width: 90%;
                    height: fit-content;
                    position: relative;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    z-index: 0;
                    box-shadow: 0 0 0.8rem ${Colors.lilac}, 0 0 1.25rem ${Colors.blue}, 16px 16px 16px rgba(20, 1, 52, 0.47);
                }

                .accordion-item::before {
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

                .accordion-item:hover::before,
                .accordion-item:focus-within::before {
                    opacity: 0.1;
                }

                .accordion-title {
                    cursor: pointer;
                    padding: 1.2rem 2rem;
                    font-size: clamp(1.6rem, 2vw, 2.5rem);
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    width: 100%;
                }

                .accordion-content {
                    max-height: 0;
                    opacity: 0;
                    padding: 0 2rem;
                    overflow: hidden;
                    transition: max-height 0.5s ease, opacity 0.4s ease, padding 0.4s ease;
                }

                .accordion-item:hover .accordion-content,
                .accordion-item.clicked .accordion-content {
                    max-height: 500px;
                    opacity: 1;
                    padding: 0 2rem 1.2rem 2rem;
                }

                .accordion-icon {
                    transition: transform 0.3s ease;
                }

                .accordion-item:hover .accordion-icon,
                .accordion-item.clicked .accordion-icon {
                    transform: rotate(45deg);
                }

                @media (orientation: portrait) {
                    .accordion-item {
                        height: fit-content;
                        width: 90%;
                        order: 2;
                    }

                    .accordion {
                        flex-direction: column;
                        display: block;
                        max-width: 90%;
                        padding-right: 2%;
                        order: 2;
                        font-size: clamp(1.2rem, 1.6vw, 2.5rem);
                        text-align: center;
                    }
                }
                `}
            </style>

            <div
                className={`accordion ${isClicked ? "clicked" : ""}`}
                ref={divRef}
                onMouseMove={handleMouseMove}
            >
                <div className={`accordion-item ${isClicked ? "clicked" : ""}`}>
                    <div className="accordion-title" onClick={toggleClick}>
                        <span>{title}</span>
                        <span className="accordion-icon">+</span>
                    </div>
                    <div className="accordion-content">{content}</div>
                </div>
            </div>
        </>
    );
};

export default AccordionItem;
