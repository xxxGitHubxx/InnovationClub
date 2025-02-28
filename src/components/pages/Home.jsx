import { useEffect, useRef } from "react";
import banner from "../../assets/banner.jpg";

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
            style={{
                background: "rgba(255, 255, 255, 0.3)",
                backdropFilter: "blur(10px)",
                borderRadius: "30px",
                padding: "0% 10%",
                color: "white",
                position: "absolute",
                top: "50%",
                left: "50%",
                textAlign: "center",
                transform: "translate(-50%, -50%)",
                zIndex: 0  // Lower than the navbar
            }}
        >
            <img src="https://media.giphy.com/media/BjOrucHPLB6xWgv4OO/giphy.gif" alt="Banner Logo" className="w-32 h-32" />
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
                        height: 100vh;
                        zIndex: 0;
                    }
                    .Home .content {
                        background: #1c1c1c url() no-repeat fixed center; 
                        height: 100vh;
                        zIndex: 0;
                    }
                `}
            </style>
            <div className="Home">
                <div className="banner">
                    <BannerLogo />
                </div>
                <div className="content"></div>
            </div>
        </>
    );
};

export default Home;
