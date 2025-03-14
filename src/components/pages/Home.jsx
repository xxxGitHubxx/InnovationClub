import { useEffect, useRef } from "react";

import banner from "../../assets/banner.jpg";
import favicon from "../../assets/Innovation Club favicon.png";
import { Colors } from "../../assets/Colors";
import SpotlightCard from './SpotlightCard';

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
                    @import url('https://fonts.googleapis.com/css2?family=Anta&display=swap');

                    /*Full Page*/
                    .Home {
                        zIndex: -1;
                    }

                    /*Banner area*/
                    .Home .banner {
                        background: ${Colors.black} url(${banner}) no-repeat fixed center; 
                        background-size: cover;
                        height: 105vh;
                        zIndex: 1;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        position: relative;
                    }

                    /*Banner translucent box*/
                    .bannerContainer {
                        background: rgba(255, 255, 255, 0.3);
                        backdrop-filter: blur(8px);
                        border-radius: 30px;
                        padding: 0% 5%;
                        color: ${Colors.white};
                        position: absolute;
                        top: 45%;
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

                    /*INNOVATION CLUB title text*/
                    .bannerText {
                        position: relative;
                        top: 20vh; /* Start hidden below */
                        font-family: "Anta", sans-serif;
                        font-style: extra-bold;
                        font-weight: 900;
                        font-size: clamp(3rem, 6.8vw, 4.3rem);
                        color: ${Colors.black};
                        opacity: 0;
                        transition: transform 1s ease-out, opacity 2s ease-out;
                        width: 100%;
                    }
                    .bannerText.reveal {
                        transform: translateY(-10vh);
                        opacity: 1;
                    }

                    /*Text under title*/
                    .rotatingText {
                        position: absolute;
                        text-align: center;
                        background-color: ${Colors.black};
                        width: 45%;
                        top: 70%;
                        height: clamp(2rem, 6vw, 4rem);
                        left: 27.5%; //half of width
                        overflow: hidden;
                        border-radius: 30px;
                    }
                    .rotatingText-adjective { 
                        font-family: 'Courier New', monospace;
                        font-size: clamp(0.5rem, 5vw, 3.2rem);
                        font-style: normal;
                        font-weight: 700;
                        left: 0;
                        margin-bottom: 0;
                        margin-top: 0;
                        opacity: 0;
                        position: absolute;
                        right: 0;
                        text-align: center;
                        text-transform: uppercase;
                        top: 10%;
                    }

                    /*Rotating text animation*/
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


                    /*Scroll button under banner box*/
                    .jump {
                        width: 2.5rem;
                        border-radius: 50%;
                        background-color: rgba(28, 28, 28, 0.8);
                        transform: rotate(180deg) translate(50%, 50%);
                        display: block;
                        padding: 5px 5px;
                        transition: all 0.1s;
                        cursor: pointer;
                        z-index: 1;
                    }
                    .jump:hover {
                        border-style: solid;
                        border-color: ${Colors.black};
                        width: 3rem;
                        transform: rotate(180deg) translate(50%, 40%);
                    }

                    
                    /*Everything except banner*/
                    .content {
                        background: rgb(28,28,28);
                        background: repeating-linear-gradient(180deg, #1c1c1c 0%,rgb(5, 5, 88) 12.5%,rgb(65, 3, 88) 25%, rgb(5, 5, 88) 37.5%, #1c1c1c 50%);
                        height:  800vh;
                        z-index: -10;
                    }

                    /*General styling for each section of the page*/
                    .section {
                    height: 80vh;
                    display: flex;
                    justify-content: center;
                    align-items: flex-start;
                    padding-top: clamp(3rem, 10rem, 10rem);
                    padding-left: 5vw;
                    padding-right: 5vw;
                    gap: 2rem;
                    flex-wrap: wrap;
                    align-content: flex-start;            
                    }

                    /*

                    /*General styling for different section titles which do not have img*/
                    .sectionTitle
                    {
                    position: relative;
                    display: flex;
                    flex: 1;
                    width: 50%;
                    justify-content: center;
                    align-items: center;
                    flex-wrap: wrap;
                    height: 10vh;
                    margin-top: 6vh;
                    }
                    .sectionTitle .box
                    {
                    position: relative;
                    width: 20vw;
                    height: 60vh;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    transition: 0.5s;
                    }
                    .sectionTitle .box::before,
                    .sectionTitle .box::after
                    {
                    content:'';
                    position: absolute;
                    top: 0;
                    left: 10%;
                    width: 60%;
                    height: 100%;
                    background: #fff;
                    border-radius: 8px;
                    transform: skewX(15deg);
                    transition: 0.5s;
                    background: linear-gradient(315deg,${Colors.purple},${Colors.lilac});
                    z-index: 0;
                    }
                    .sectionTitle .box::after
                    {
                    filter: blur(30px);
                    }
                    .sectionTitle:hover .box::before,
                    .sectionTitle:hover .box::after
                    {
                    transform: skewX(0deg);
                    width: 70%;
                    left: 5%;
                    right: 0%;
                    }
                    .sectionTitle .box .text
                    {
                    position: absolute;
                    left: 0;
                    padding: 6rem 2rem;
                    width: 60%;
                    background: rgba(255, 255, 255, 0.05);
                    backdrop-filter: blur(10px);
                    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
                    border-radius: 8px;
                    transform: 0.5s;
                    color: ${Colors.white};
                    z-index: 1;
                    font-family: "Anta", sans-serif;
                    font-style: extra-bold;
                    font-weight: 900;
                    font-size: clamp(2.5rem, 7vw, 4.2rem);
                    display: flex;
                    justify-content: center;
                    }

                    /*modification for phone*/
                    @media (orientation:portrait)
                    {
                        /*General styling for section's title which do not have img*/
                        .sectionTitle
                        {
                            flex-basis: 100%;
                            width: 100%;
                            margin-top: -10rem;;
                        }
                        .sectionTitle .box::before,
                        .sectionTitle .box::after
                        {
                        transform: skewX(0deg);
                        left: -125%;
                        top: 35%;
                        width: 350%;
                        height: 30%;
                    }
                        .sectionTitle .box .text
                        {
                        position: relative;
                        padding: 3rem 6rem;
                        }
                    }


                `}
            </style>
            <div className="Home">
                <div className="banner">
                    <BannerContainer />
                    <img src={favicon} className="jump" style={{position: "absolute", bottom: "10%", left: "50%"}} onClick={() => window.scrollTo({ top: (window.innerHeight * 1.10), behavior: "smooth" })}></img>
                </div>

                <div className="content">

                    <div className="section">
                        <div class="sectionTitle">
                            <div class="box">
                                <div class="text">
                                Our Aim
                                </div>
                            </div>
                        </div>
                        <SpotlightCard className="spotlight">
                        
                                The Innovation Club, founded in 2024, aims to foster creativity and problem-solving by encouraging members 
                                to think outside the box and develop cutting-edge solutions. It provides a collaborative space for individuals 
                                to explore new ideas, experiment with emerging technologies, and drive positive change through innovation. 
                                The club nurtures a spirit of curiosity and continuous learning, empowering members to turn their visions into reality.
                        
                        </SpotlightCard>
                    </div>
                    
                    <div className="section">
                        <div class="sectionTitle">
                            <div class="box">
                                <div class="text">
                                Our Aim
                                </div>
                            </div>
                        </div>
                        <SpotlightCard className="spotlight">
                        </SpotlightCard>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Home;
