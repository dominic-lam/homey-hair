/**
 * @file WashSteps.jsx
 * @description
 *   Displays the proper shampooing steps/routine in a friendly, emoji-packed way.
 */

import React from "react";

/**
 * WashSteps component
 * - Shows a step-by-step guide for correct hair washing.
 * - Includes a "Back to Home" button.
 *
 * @param {Object} props
 * @param {Function} props.onGoHome - Callback to go back to main menu.
 * @returns {JSX.Element}
 */
export default function WashSteps({ onGoHome }) {
    // Native, emoji-rich Canto instructions
    const steps = [
        "1️⃣ 先用大約$5銀咁多洗頭水，倒喺手心搓勻。",
        "2️⃣ 用指尖輕輕按摩頭皮，沿住左右兩邊到頭頂，記得頭頂可以多按摩5-8下，舒服至上🤩。",
        "3️⃣ 如果第一次起泡唔多，代表頭皮好污糟，建議再洗多次🫧🫧。",
        "4️⃣ 洗完頭後，用活髮精華，沿住髮線噴到後腦，再用指尖按摩至吸收，唔使沖水，方便快捷！🧴✨",
    ];

    return (
        <div
            style={{
                width: "100%",
                maxWidth: 430,
                margin: "0 auto",
                padding: "clamp(16px, 4vw, 28px)",
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            <h2
                style={{
                    color: "var(--brand-title, #339966)",
                    fontWeight: 700,
                    fontSize: 30,
                    marginBottom: 12,
                    textAlign: "center",
                    letterSpacing: ".01em",
                }}
            >
                點樣正確洗頭？🫣🤭
            </h2>
            <div
                style={{
                    color: "#21896b",
                    fontSize: 18,
                    marginBottom: 32,
                    textAlign: "center",
                    fontWeight: 600,
                }}
            >
                洗頭正確步驟 <br />（簡單4招，頭皮舒服又健康！）
            </div>
            <ul
                style={{
                    width: "100%",
                    color: "#333",
                    fontSize: 20,            // Bigger!
                    fontWeight: 500,
                    paddingLeft: 18,
                    marginBottom: 30,
                    lineHeight: 2,
                    listStyle: "none",
                }}
            >
                {steps.map((text, idx) => (
                    <li key={idx} style={{ marginBottom: 16 }}>{text}</li>
                ))}
            </ul>
            <button
                onClick={onGoHome}
                style={{
                    marginTop: 16,
                    padding: "clamp(11px,3vw,18px) clamp(20px,6vw,36px)",
                    background: "var(--brand-accent, #e8f7f1)",
                    color: "var(--brand-green, #16966b)",
                    border: "none",
                    borderRadius: 8,
                    fontWeight: "bold",
                    cursor: "pointer",
                    fontSize: "clamp(18px,4vw,21px)",  // Bigger button too
                    letterSpacing: 1,
                    boxShadow: "0 2px 8px rgba(60,160,120,0.04)",
                    transition: "background 0.13s"
                }}
            >
                返回主頁
            </button>
        </div>
    );
}
