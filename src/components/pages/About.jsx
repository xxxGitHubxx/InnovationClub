import React from 'react'
import { Colors } from "../../assets/Colors";

export const About = () => {
    return (
        <>
            <style>
                {`
                    * {
                        box-sizing: border-box;
                    }

                    .About {
                        width: 100%;
                    }

                    .renovation-page {
                        min-height: 100vh;
                        width: 100%;
                        background:
                            radial-gradient(circle at 20% 20%, rgba(224, 82, 124, 0.14), transparent 25%),
                            radial-gradient(circle at 80% 30%, rgba(142, 124, 195, 0.16), transparent 25%),
                            radial-gradient(circle at 50% 80%, rgba(255, 243, 243, 0.05), transparent 30%),
                            linear-gradient(135deg, ${Colors.black}, ${Colors.purple}, ${Colors.blue});
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        padding: 24px;
                        font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
                        overflow: hidden;
                        position: relative;
                        color: ${Colors.white};
                    }

                    /* subtle grid overlay */
                    .renovation-page::before {
                        content: "";
                        position: absolute;
                        inset: 0;
                        background-image:
                            linear-gradient(rgba(255,243,243,0.035) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,243,243,0.035) 1px, transparent 1px);
                        background-size: 32px 32px;
                        pointer-events: none;
                    }

                    .floating-code {
                        position: absolute;
                        font-size: 12px;
                        color: rgba(142, 124, 195, 0.16);
                        font-family: Consolas, monospace;
                        white-space: pre;
                        user-select: none;
                        pointer-events: none;
                        animation: drift 10s ease-in-out infinite alternate;
                    }

                    .code-1 {
                        top: 8%;
                        left: 5%;
                        transform: rotate(-8deg);
                    }

                    .code-2 {
                        bottom: 10%;
                        right: 7%;
                        transform: rotate(6deg);
                        animation-duration: 12s;
                    }

                    @keyframes drift {
                        from { transform: translateY(0px) rotate(-4deg); }
                        to { transform: translateY(12px) rotate(4deg); }
                    }

                    .renovation-card {
                        margin-top: 3rem;
                        position: relative;
                        z-index: 2;
                        width: 100%;
                        max-width: 760px;
                        background: rgba(255, 243, 243, 0.06);
                        border: 1px solid rgba(255, 243, 243, 0.14);
                        backdrop-filter: blur(14px);
                        -webkit-backdrop-filter: blur(14px);
                        border-radius: 28px;
                        padding: 36px 28px;
                        box-shadow:
                            0 20px 60px rgba(0, 0, 0, 0.35),
                            0 0 40px rgba(224, 82, 124, 0.12);
                        text-align: center;
                        overflow: hidden;
                    }

                    .renovation-card::before {
                        content: "";
                        position: absolute;
                        inset: -2px;
                        border-radius: 28px;
                        padding: 1px;
                        background: linear-gradient(
                            135deg,
                            rgba(224, 82, 124, 0.65),
                            rgba(142, 124, 195, 0.55),
                            rgba(255, 243, 243, 0.12)
                        );
                        -webkit-mask:
                            linear-gradient(#fff 0 0) content-box,
                            linear-gradient(#fff 0 0);
                        -webkit-mask-composite: xor;
                                mask-composite: exclude;
                        pointer-events: none;
                    }

                    .emoji-wrap {
                        display: inline-flex;
                        align-items: center;
                        justify-content: center;
                        width: 110px;
                        height: 110px;
                        border-radius: 50%;
                        margin-bottom: 18px;
                        background: radial-gradient(circle, rgba(224, 82, 124, 0.22), rgba(142, 124, 195, 0.08));
                        border: 1px solid rgba(224, 82, 124, 0.28);
                        box-shadow: 0 0 30px rgba(224, 82, 124, 0.18);
                        animation: pulse 2.4s infinite ease-in-out;
                    }

                    .emoji {
                        font-size: 52px;
                        transform-origin: center;
                        animation: wobble 2s infinite ease-in-out;
                    }

                    @keyframes pulse {
                        0%, 100% { transform: scale(1); }
                        50% { transform: scale(1.05); }
                    }

                    @keyframes wobble {
                        0%, 100% { transform: rotate(0deg); }
                        25% { transform: rotate(-8deg); }
                        75% { transform: rotate(8deg); }
                    }

                    .title {
                        font-size: clamp(2rem, 5vw, 4rem);
                        line-height: 1.05;
                        font-weight: 900;
                        margin: 0;
                        letter-spacing: -0.03em;
                        color: ${Colors.white};
                    }

                    .title .accent {
                        display: block;
                        margin-top: 8px;
                        color: ${Colors.pink};
                        text-shadow: 0 0 20px rgba(224, 82, 124, 0.3);
                    }

                    .subtitle {
                        margin: 18px auto 0;
                        max-width: 620px;
                        font-size: clamp(1rem, 2vw, 1.15rem);
                        line-height: 1.7;
                        color: rgba(255, 243, 243, 0.86);
                    }

                    .funny-box {
                        margin: 28px auto 0;
                        max-width: 620px;
                        padding: 18px 20px;
                        border-radius: 18px;
                        background: rgba(142, 124, 195, 0.08);
                        border: 1px dashed rgba(142, 124, 195, 0.28);
                        font-family: Consolas, monospace;
                        color: ${Colors.lilac};
                        font-size: 0.95rem;
                        line-height: 1.7;
                        text-align: left;
                    }

                    .funny-line {
                        margin: 0;
                    }

                    .funny-line + .funny-line {
                        margin-top: 8px;
                    }

                    .status-row {
                        margin-top: 26px;
                        display: flex;
                        flex-wrap: wrap;
                        justify-content: center;
                        gap: 12px;
                    }

                    .status-pill {
                        padding: 10px 16px;
                        border-radius: 999px;
                        background: rgba(255, 243, 243, 0.06);
                        border: 1px solid rgba(255, 243, 243, 0.14);
                        color: ${Colors.white};
                        font-size: 0.9rem;
                        font-weight: 600;
                    }

                    .loader {
                        margin: 28px auto 0;
                        width: min(420px, 90%);
                        height: 14px;
                        border-radius: 999px;
                        background: rgba(255, 243, 243, 0.08);
                        overflow: hidden;
                        border: 1px solid rgba(255, 243, 243, 0.08);
                        position: relative;
                    }

                    .loader-bar {
                        height: 100%;
                        width: 38%;
                        border-radius: 999px;
                        background: linear-gradient(90deg, ${Colors.pink}, ${Colors.purple});
                        animation: loading 2s infinite ease-in-out;
                        box-shadow: 0 0 20px rgba(224, 82, 124, 0.28);
                    }

                    @keyframes loading {
                        0% { transform: translateX(-120%); }
                        100% { transform: translateX(360%); }
                    }

                    .tiny-note {
                        margin-top: 16px;
                        font-size: 0.85rem;
                        color: rgba(255, 243, 243, 0.6);
                    }

                    .cta {
                        margin-top: 24px;
                        display: inline-block;
                        padding: 12px 20px;
                        border-radius: 14px;
                        text-decoration: none;
                        font-weight: 700;
                        font-size: 0.95rem;
                        color: ${Colors.white};
                        background: linear-gradient(135deg, ${Colors.pink}, ${Colors.lilac});
                        box-shadow: 0 12px 30px rgba(224, 82, 124, 0.22);
                        transition: transform 0.25s ease, box-shadow 0.25s ease;
                    }

                    .cta:hover {
                        transform: translateY(-2px);
                        box-shadow: 0 18px 36px rgba(224, 82, 124, 0.3);
                    }

                    @media (max-width: 640px) {
                        .renovation-card {
                            padding: 28px 20px;
                            border-radius: 22px;
                        }

                        .funny-box {
                            text-align: center;
                        }
                    }
                `}
            </style>

            <div className="About">
                <div className="renovation-page">
                    <div className="floating-code code-1">
                        {`while(site === "broken") {\n  coffee++;\n  deployAgain();\n}`}
                    </div>

                    <div className="floating-code code-2">
                        {`npm run hope\n404 bugs found\n1 developer crying`}
                    </div>

                    <div className="renovation-card">
                        <div className="emoji-wrap">
                            <div className="emoji">🛠️</div>
                        </div>

                        <h1 className="title">
                            This page is
                            <span className="accent">under renovation.</span>
                        </h1>

                        <p className="subtitle">
                            Our tech club website is currently being upgraded by highly skilled
                            developers, questionable caffeine decisions, and at least one person
                            who said, <strong>“it worked on my machine.”</strong>
                        </p>

                        <div className="funny-box">
                            <p className="funny-line">{`> Recompiling reality...`}</p>
                            <p className="funny-line">{`> Fixing bugs that were definitely features yesterday...`}</p>
                            <p className="funny-line">{`> Estimated completion time: somewhere between "soon" and "after one more commit"`}</p>
                        </div>

                        <div className="status-row">
                            <div className="status-pill">⚡ Server: emotionally stable</div>
                            <div className="status-pill">🐞 Bugs: being negotiated with</div>
                            <div className="status-pill">☕ Fuel: dangerously high</div>
                        </div>

                        <div className="loader">
                            <div className="loader-bar"></div>
                        </div>

                        <p className="tiny-note">
                            Please check back later. Or refresh dramatically. Both are valid.
                        </p>

                        <a href="/" className="cta">
                            Return to Civilization
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}