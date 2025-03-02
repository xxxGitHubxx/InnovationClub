import { useEffect, useRef } from "react";

import banner from "../../assets/banner.jpg";
import favicon from "../../assets/Innovation Club favicon.png";
import separator from "../../assets/separator.jpg";



const BannerContainer = () => {
    const bannerContainerRef = useRef(null);
    const bannerTextRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (!bannerContainerRef.current) return;

            const xPos = (e.clientX / window.innerWidth) * 30 - 15;
            const yPos = (e.clientY / window.innerHeight) * 30 - 15;
            requestAnimationFrame(() => {
                if (bannerContainerRef.current) {
                    bannerContainerRef.current.style.transform = `translate(-50%, -50%) translate(${xPos}px, ${yPos}px)`;
                }
            });
        };

        const timeout = setTimeout(() => {
            if (bannerContainerRef.current) {
                document.addEventListener("mousemove", handleMouseMove);
            }
            if (bannerTextRef.current) {
                bannerTextRef.current.classList.add("reveal");
            }
        }, 100);

        return () => {
            clearTimeout(timeout);
            document.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <div
            ref={bannerContainerRef}
            id="bannerContainer"
            className="bannerContainer"
        >
            <div ref={bannerTextRef} className="bannerText">INNOVATION CLUB</div>
            <div className="rotatingText">
                <span class="rotatingText-adjective">Imaginate</span>
                <span class="rotatingText-adjective">Innovate</span>
                <span class="rotatingText-adjective">Create</span>
            </div>
        </div>
    );
};

export const Home = () => {
    return (
        <>
            <style>
                {`  
                    @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap');

                    .Home {
                        height: 100vh;
                        zIndex: 0;
                    }
                    .Home .banner {
                        background: #1c1c1c url(${banner}) no-repeat fixed center; 
                        background-size: cover;
                        height: 105vh;
                        zIndex: 0;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        alignItems: center;
                        position: relative;
                    }
                    .Home .content {
                        background: #1c1c1c url() no-repeat fixed center; 
                        height: 100vh;
                        zIndex: 0;
                        display: flex;
                    }

                    .bannerContainer {
                        background: rgba(255, 255, 255, 0.3);
                        backdrop-filter: blur(8px);
                        border-radius: 30px;
                        padding: 0% 5%;
                        color: #fefefe;
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        text-align: center;
                        transform: translate(-50%, -50%);
                        width: clamp(100px, 60vw, 600px);
                        height: clamp(100px, 60vh, 300px);
                        z-index: 0;
                        box-shadow: 16px 16px 16px rgba(36,2,93,0.3);
                        overflow: hidden;
                        justify-content: center;
                        align-items: center;
                        text-align: center;
                    }

                    .bannerText {
                        position: relative;
                        top: 20vh; /* Start hidden below */
                        font-family: "Roboto", sans-serif;
                        font-style: extra-bold;
                        font-weight: 900;
                        font-size: clamp(3rem, 7vw, 4.2rem);
                        color: #1c1c1c;
                        opacity: 0;
                        transition: transform 1s ease-out, opacity 2s ease-out;
                        width: 100%;
                    }
                    .bannerText.reveal {
                        transform: translateY(-10vh);
                        opacity: 1;
                    }

                    .rotatingText {
                        position: absolute;
                        text-align: center;
                        background-color: #1c1c1c;
                        width: 45%;
                        top: 30vh;
                        height: clamp(2.5rem, 6vw, 4rem);
                        left: 27.5%; //half of width
                        overflow: hidden;
                        border-radius: 30px;
                    }

                    .rotatingText-adjective { 
                        position: absolute;
                        font-family: 'Courier New', monospace;
                        font-size: clamp(0.5rem, 5vw, 3.2rem);
                        font-style: normal;
                        font-weight: 700;
                        left: 0;
                        margin-bottom: 0;
                        margin-top: 50px;
                        opacity: 0;
                        position: absolute;
                        right: 0;
                        text-align: center;
                        text-transform: uppercase;
                        top: -6.8vh;

                    }

                    .jump {
                        width: 2.5rem;
                        border-radius: 50%;
                        position: absolute;
                        top: 90%;
                        left: 50%;
                        background-color: rgba(28, 28, 28, 0.8);
                        transform: rotate(180deg) translate(50%, 50%);
                        display: block;
                        padding: 5px 5px;
                        transition: all 0.1s;
                        cursor: pointer;
                    }
                    .jump:hover {
                        border-style: solid;
                        border-color: #1c1c1c;
                        width: 3rem;
                    }

                    @keyframes rotate {
                      0% {opacity: 0; transform: translate3d(0, 50px, 0);}
                      10%, 30% {opacity: 1; transform: translate3d(0, 0, 0);}
                      40% {opacity: 0; transform: translate3d(0, -25px, 0);}
                      100% {opacity: 0; transform: translate3d(0, -25px, 0);}
                    }

                    .rotatingText-adjective:nth-of-type(1) {
                      animation: rotate 4.5s infinite;
                    }

                    .rotatingText-adjective:nth-of-type(2) {
                      animation: rotate 4.5s infinite;
                      animation-delay: 1.5s; /* Starts after first finishes */
                    }

                    .rotatingText-adjective:nth-of-type(3) {
                      animation: rotate 4.5s infinite;
                      animation-delay: 3s; /* Starts after second finishes */
                    }
                    .separator {
                        background: #1c1c1c url(${separator}) repeat-x left center;
                        background-size: auto 105%; /* Stretches the image slightly beyond the div height */
                        width: 100%;
                        height: 10vh;
                    }
                    .tile {
                        background: rgba(255, 255, 255, 0.2);
                        backdrop-filter: blur(8px);
                        border-radius: 30px;
                        padding: 0% 5%;
                        color: #fefefe;
                        text-align: center;
                        z-index: 0;
                        box-shadow: 16px 16px 16px rgba(36,2,93,0.1);
                        overflow: hidden;
                        justify-content: center;
                        align-items: center;
                        text-align: center;
                    }


                `}
            </style>
            <div className="Home">
                <div className="banner">
                    <BannerContainer />
                    <img src={favicon} className="jump" onClick={() => window.scrollTo({ top: window.innerHeight + (window.innerHeight * 0.10), behavior: "smooth" })}></img>
                </div>
                <div className="separator"></div>
                <div className="content">
                    OUR AIM
                    <div className="tile" style={{width: "18vw", height:"70vh", position: "relative", top: "15vh", left: "60vw"} }>
                    </div>
                </div>
                <div className="separator"></div>
            </div>
        </>
    );
};

export default Home;
