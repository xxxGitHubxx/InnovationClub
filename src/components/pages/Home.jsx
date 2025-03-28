import { useEffect, useRef } from "react";

import banner from "../../assets/HomePageSections/banner.jpg";
import {pic1,pic2,pic3,pic4} from '../../assets/HomePageSections/DetailsImages'
import { box1,box2,box3,box4,box5,box6 } from "../../assets/HomePageSections/FeaturedImages";
import favicon from "../../assets/Branding/Innovation Club favicon.png";
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
                        right: 50%;
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
                        font-size: clamp(2.4rem, 6.8vw, 4.3rem);
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
                        background: repeating-linear-gradient(180deg, ${Colors.black} 0%,rgb(5, 5, 88) 12.5%,rgb(65, 3, 88) 25%, rgb(5, 5, 88) 37.5%, ${Colors.black} 50%);
                        height:  auto;
                        z-index: -10;
                    }

                    /*General styling for each section of the page*/
                    .section {
                        display: flex;
                        justify-content: center;
                        align-items: stretch;
                        padding-top: clamp(3rem, 10rem, 10rem);
                        padding-left: 5vw;
                        padding-right: 5vw;
                        gap: 4rem;
                        row-gap: 40%;
                        align-content: flex-start;            
                    }

                    /*general styling for titles which have images*/
                    .imgSectionTitle
                    {
                        position: relative;
                        transform: translate(0, 22.5%);
                        width: 30vw;
                        height: 50vh;
                        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
                        border-radius: 20px;
                        color: ${Colors.white};
                        z-index: 1;
                        font-family: "Anta", sans-serif;
                        font-style: extra-bold;
                        font-weight: 900;
                        font-size: clamp(2.5rem, 3.6vw, 4.2rem);
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        text-shadow: 0 .15ch 0.3rem #000;
                        flex: 1;
                    }

                    /*General styling for different section titles which do not have img*/
                    .sectionTitle
                    {
                        position: relative;
                        display: flex;
                        flex: 1;
                        width: 40%;
                        justify-content: center;
                        align-items: center;
                        flex-wrap: wrap;
                        height: 10vh;
                        margin-top: 6vh;
                    }
                        .sectionTitle.v2
                        {
                            flex-basis: 100%;
                            order: -1;
                            width: 100%;
                            margin-top: -10rem;
                            margin-bottom: -4rem;
                        }
                    .sectionTitle .box
                    {
                        position: relative;
                        width: 65%;
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
                        .sectionTitle.v2 .box::before,
                        .sectionTitle.v2 .box::after
                        {
                            transform: skewX(0deg);
                            left: -25%;
                            top: 42.5%;
                            width: 150%;
                            height: 15%;
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
                        color: ${Colors.white};
                        z-index: 1;
                        font-family: "Anta", sans-serif;
                        font-style: extra-bold;
                        font-weight: 900;
                        font-size: clamp(2.5rem, 7vw, 4.2rem);
                        display: flex;
                        justify-content: center;
                    }
                        .sectionTitle.v2 .box .text
                        {
                            position: relative;
                            padding: 1rem 3rem;
                            font-size: clamp(2.2rem, 6.4vw, 3.8rem);
                            width: 200%;
                        }

                    .featuredContainer{
                        width: 75vw;
                        position: relative;
                        left: 6.5%;
                        height: 300vh;
                        display: grid;
                        gap: 2rem;
                        grid-template-columns: 30% 30% 35%;
                        grid-auto-rows: 18%;
                        grid-template-areas:
                        "box-1 box-1 box-2"
                        "box-3 box-3 box-2"
                        "box-4 box-5 box-5"
                        "box-4 box-6 box-6";
                    }
                    .featuredItems{
                        background-color: rgba(255, 255, 255, 0.1);
                        border-radius: 30px;
                        cursor: pointer;
                        width: 100%;
                        height: 100%;
                    }

                    .featuredText{
                        width: 100%;
                        height: 100%;
                        position: absolute;
                        border-radius: 30px;
                        cursor: pointer;
                        background: linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 70%);
                        color: ${Colors.white};
                        display: flex;
                        text-align: left;
                        align-items: flex-end;
                        justify-content: flex-start; 
                        box-sizing: border-box;
                        padding-left: 5%;
                        padding-bottom: 3%;

                        font-family: "Anta", sans-serif;
                        font-style: normal;
                        font-weight: 500;
                        font-size: clamp(1rem, 1.6vw, 2.5rem);
                    }




                    /*modification for phone*/
                    @media (orientation:portrait)
                    {
                        /*Styling for each section*/
                        .section{
                        flex-direction: column;
                        align-items: center;                      }

                        /*General styling for section's title which do not have img*/
                        .sectionTitle
                        {
                            flex-basis: 100%;
                            order: -1;
                            width: 100%;
                            margin-top: -10rem;
                            margin-bottom: -4rem;
                        }
                        .sectionTitle .box::before,
                        .sectionTitle .box::after
                        {
                        transform: skewX(0deg);
                        left: -25%;
                        top: 35%;
                        width: 150%;
                        height: 30%;
                        }
                        .sectionTitle .box .text
                        {
                        position: relative;
                        padding: 3rem 6rem;
                        }

                        .imgSectionTitle
                        {
                            order: 1;
                            width: 80%;
                            min-height: 30vh;
                            transform: translate(0,0);
                            margin-bottom: 2rem;
                            margin-top: -4rem;
                        }

                        .featuredContainer
                        {
                            width: 90%;
                            position: relative;
                            left: -5%;
                            height: 200vh;
                            display: grid;
                            gap: 2rem;
                            grid-template-columns: 50% 50%;
                            grid-auto-rows: 14% 14% 21% 14% 14%;
                            grid-template-areas:
                            "box-1 box-1"
                            "box-3 box-3"
                            "box-2 box-4"
                            "box-5 box-5"
                            "box-6 box-6";
                        }      
                    }

                    @media (max-aspect-ratio: 29/18) and (min-aspect-ratio: 1/1)
                    {
                        .featuredContainer
                        {
                            width: 95%;
                            position: relative;
                            left: 0%;
                            height: 450vh;
                            display: grid;
                            gap: 2rem;
                            grid-template-columns: 50% 50%;
                            grid-auto-rows: 14% 14% 22% 14% 14%;
                            grid-template-areas:
                            "box-1 box-1"
                            "box-3 box-3"
                            "box-2 box-4"
                            "box-5 box-5"
                            "box-6 box-6";
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

                    <div className="section"  /*Aim */>
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
                    
                    <div /*details */>
                        <div className="section">
                            <SpotlightCard className="spotlight">
                            The Innovation Club provides a nurturing environment where students can brainstorm and explore new ideas. Through guided sessions by
                            experienced people and peer collaboration, members can develop their initial concepts into well-structured solutions. The club 
                            encourages free thinking and out-of-the-box ideas, promoting creativity and originality.
                            </SpotlightCard>
                            <div class="imgSectionTitle" style={{background: `url(${pic1}) no-repeat center/cover`}}>Idea Incubation</div>
                        </div>

                        <div className="section">
                        <div class="imgSectionTitle" style={{background: `url(${pic2}) no-repeat center/cover`}}>Prototyping & Experimentation</div>
                            <SpotlightCard className="spotlight">
                            Innovation Club members have access to resources and lab spaces where they can experiment with their ideas and create working prototypes. 
                            Whether it's using 3D printers, electronics kits, or software platforms, the club encourages hands-on experimentation to test and improve 
                            the feasibility of their concepts.
                            </SpotlightCard>
                        </div>

                        <div className="section">
                            <SpotlightCard className="spotlight">
                            Regular hands-on workshops are a key feature of the Innovation Club. These sessions cover a wide range of topics, such as design thinking, coding,
                            prototyping, and emerging technologies like artificial intelligence, robotics, and 3D printing. The goal is to equip members with the necessary skills
                            to bring their ideas to life, fostering technical and creative expertise. Additionally, most of these workshops are conducted by students themselves.
                            </SpotlightCard>
                            <div class="imgSectionTitle" style={{background: `url(${pic3}) no-repeat center/cover`}}>Workshops & Skill-building</div>
                        </div>

                        <div className="section">
                            <div class="imgSectionTitle" style={{background: `url(${pic4}) no-repeat center/cover`}}>Showcases & Competitions</div>
                            <SpotlightCard className="spotlight">
                            Members have opportunities to present their projects at various exhibitions and competitions. These showcases not only celebrate their achievements but
                            also help them gain recognition for their innovative work. Once their talent has been nurtured, they are sent to represent the school in various inter
                            school events such as hackathons.
                            </SpotlightCard>
                        </div>
                    </div>

                    <div className="section" style={{flexDirection: "column"}}>
                        <div class="sectionTitle v2">
                            <div class="box">
                                <div class="text">
                                Featured Projects
                                </div>
                            </div>
                        </div>

                        <div className="featuredContainer">

                            <img src={box1} className="featuredItems" style={{ gridArea: "box-1"}} alt="Box 1"></img>
                            <div className="featuredText" style={{ gridArea: "box-1"}}>Xyflow: Your Plants' Lifeline</div>

                            <img src={box2} className="featuredItems" style={{ gridArea: "box-2"}} alt="Box 2"></img>
                            <div className="featuredText" style={{ gridArea: "box-2"}}>Medicoach: Your Health <br></br>Forecast</div>

                            <video src={box3} className="featuredItems" style={{ gridArea: "box-3", objectFit: "cover"}} autoPlay loop muted playsInline></video>
                            <div className="featuredText" style={{ gridArea: "box-3"}}>Insurakshak: A Diebetic's ticket to Freedom</div>

                            <img src={box4} className="featuredItems" style={{ gridArea: "box-4"}} alt="Box 4"></img>
                            <div className="featuredText" style={{ gridArea: "box-4"}}>YogAi: Perfect Posture, Perfect Portability</div>

                            <video src={box5} className="featuredItems" style={{ gridArea: "box-5"}} autoPlay loop muted playsInline></video>
                            <div className="featuredText" style={{ gridArea: "box-5"}}>Interschool Robotics Championship</div>

                            <video src={box6} className="featuredItems" style={{ gridArea: "box-6", objectFit: "cover"}} autoPlay loop muted playsInline></video>
                            <div className="featuredText" style={{ gridArea: "box-6"}}>All Terrain Pathfinder</div>
                        </div>

                    </div>

                </div>
            </div>
        </>
    );
};

export default Home;
