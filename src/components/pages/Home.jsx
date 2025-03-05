import { useEffect, useRef } from "react";

import banner from "../../assets/banner.jpg";
import favicon from "../../assets/Innovation Club favicon.png";
import { Colors } from "../../assets/Colors";



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
                        zIndex: -1;
                    }
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
                    .content {
                        background: rgb(28,28,28);
                        background: linear-gradient(180deg, #1c1c1c 0%,rgb(5, 5, 88) 20%,rgb(65, 3, 88) 40%, #1c1c1c 60%, rgb(65, 3, 88) 80%, rgb(5, 5, 88) 100%);
                        height: 800vh;
                        z-index: -10;
                        display: flex;
                        justify-content: flex-start;
                        align-items: flex-start;
                        padding: 10rem 5vw;
                        flex-direction: row;
                        gap: 2rem;
                    }

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

                    .bannerText {
                        position: relative;
                        top: 20vh; /* Start hidden below */
                        font-family: "Roboto", sans-serif;
                        font-style: extra-bold;
                        font-weight: 900;
                        font-size: clamp(2.5rem, 7vw, 4.2rem);
                        color: ${Colors.black};
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

                    .jump {
                        width: 2.5rem;
                        border-radius: 50%;
                        position: absolute;
                        bottom: 10%;
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
                        border-color: ${Colors.black};
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
                    .tile {
                        background: rgba(255, 255, 255, 0.2);
                        backdrop-filter: blur(8px);
                        border-radius: 30px;
                        padding: 0% 5%;
                        color: ${Colors.white};
                        text-align: center;
                        z-index: 0;
                        box-shadow: 16px 16px 16px rgba(36,2,93,0.1);
                        overflow: hidden;
                        justify-content: center;
                        align-items: center;
                        text-align: center;
                    }

                    .sectionTitle
                    {
                    position: relative;
                    display: flex;
                    flex: 1;
                    justify-content: center;
                    align-items: center;
                    flex-wrap: wrap;
                    }

                    .sectionTitle .box
                    {
                    position: relative;
                    width: 20vw;
                    height: 60vh;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin: 6vh 0px;
                    transition: 0.5s;
                    }
                    .sectionTitle .box::before,
                    .sectionTitle .box::after
                    {
                    content:'';
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 50%;
                    height: 100%;
                    background: #fff;
                    border-radius: 8px;
                    transform: skewX(15deg);
                    transition: 0.5s;
                    background: linear-gradient(315deg, #03a9f4, #ff0058);
                    z-index: 0;
                    }

                    .sectionTitle .box::after
                    {
                    filter: blur(30px);
                    }

                    .sectionTitle .box .text
                    {
                    position: absolute;
                    left: 0;
                    padding: 10rem 5rem;
                    background: rgba(255, 255, 255, 0.05);
                    backdrop-filter: blur(10px);
                    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
                    border-radius: 8px;
                    transform: 0.5s;
                    color: #fff;
                    z-index: 1;
                    }


                `}
            </style>
            <div className="Home">
                <div className="banner">
                    <BannerContainer />
                    <img src={favicon} className="jump" onClick={() => window.scrollTo({ top: window.innerHeight + (window.innerHeight * 0.10), behavior: "smooth" })}></img>
                </div>
                <div className="content">
                <div class="sectionTitle">
                    <div class="box">
                        <div class="text">
                        Our Aim
                        </div>
                    </div>
                </div>
                    <div className="tile" style={{flex: "1", height:"70vh", position: " relative"} }>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
