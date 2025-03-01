import { useEffect, useRef } from "react";
import banner from "../../assets/banner.jpg";
import favicon from "../../assets/Innovation Club favicon.png";

const BannerLogo = () => {
    const bannerLogoRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (!bannerLogoRef.current) return;

            const xPos = (e.clientX / window.innerWidth) * 30 - 15;
            const yPos = (e.clientY / window.innerHeight) * 30 - 15;
            requestAnimationFrame(() => {
                if (bannerLogoRef.current) {
                    bannerLogoRef.current.style.transform = `translate(-50%, -50%) translate(${xPos}px, ${yPos}px)`;
                }
            });
        };

        const timeout = setTimeout(() => {
            if (bannerLogoRef.current) {
                document.addEventListener("mousemove", handleMouseMove);
            }
        }, 100);

        return () => {
            clearTimeout(timeout);
            document.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <div
            ref={bannerLogoRef}
            id="bannerLogo"
            className = "bannerLogo"
        >
            <img style={{width: "100%"}} src="https://media.giphy.com/media/BjOrucHPLB6xWgv4OO/giphy.gif" alt="Banner Logo" className="w-32 h-32" />
        </div>
    );
};

export const Home = () => {
    return (
        <>
            <style>
                {`  
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
                    }
                    .bannerLogo {
                        background: rgba(255, 255, 255, 0.3);
                        backdrop-filter: blur(8px);
                        border-radius: 30px;
                        padding: 0% 10%;
                        color: #fefefe;
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        text-align: center;
                        transform: translate(-50%, -50%);
                        width: clamp(300px, 60vw, 500px);
                        height: auto;
                        zIndex: 0;
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
                        border-style:solid;
                        border-color: #1c1c1c;
                        width: 3rem;
                        margin-top: -10px;
                    }
                    .tile {
                        background: rgba(255, 255, 255, 0.3);
                        backdrop-filter: blur(8px);
                        border-radius: 30px;
                        padding: 0% 10%;
                        color: #fefefe;
                    }

                `}
            </style>
            <div className="Home">
                <div className="banner">
                    <BannerLogo />
                    <img src={favicon} className="jump" onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}></img>
                </div>
                <div className="content"></div>
            </div>
        </>
    );
};

export default Home;
