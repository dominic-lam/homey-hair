/**
 * @file Result.jsx
 * @description
 *   Displays the quiz result: title, recommended products, tips, and product details.
 *   Includes "Restart", "See All Shampoo", and "Go Home" actions.
 *   Responsive and visually styled card, consistent with app layout.
 */

import React from "react";
import ProductCard from "./ProductCard";

/**
 * Result component for displaying the user's quiz result.
 *
 * @param {Object}   props
 * @param {Object}   props.result              - The result object (title, tips, products).
 * @param {Function} props.onRestart           - Callback to restart the quiz.
 * @param {Function} props.onSeeAllShampoo     - Callback to view all shampoo (triggers navigation).
 * @param {Function} props.onGoHome            - Callback to return to the main menu.
 * @returns {JSX.Element}
 */
export default function Result({
                                   result,
                                   onRestart,
                                   onSeeAllShampoo,
                                   onGoHome
                               }) {
    // If result is missing or null, display a friendly error.
    if (!result) {
        return <div>搵唔到結果，請重新作答。</div>;
    }

    // Main card container: consistent with app card layout
    return (
        <div
            style={{
                background: "var(--brand-card, #fff)",
                borderRadius: 18,
                maxWidth: 430,
                width: "100%",
                margin: "32px auto 0 auto",
                boxSizing: "border-box",
                padding: "clamp(16px, 4vw, 28px)",
                boxShadow: "var(--brand-card-shadow, 0 4px 18px rgba(60,160,120,0.10))",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            {/* Result title */}
            <h2
                style={{
                    color: "var(--brand-title, #339966)",
                    marginBottom: 12,
                    fontSize: "clamp(22px, 5vw, 28px)",
                    fontWeight: 700,
                    lineHeight: 1.2,
                    textAlign: "center"
                }}
            >
                {result.title}
            </h2>

            {/* Recommended product names (bullet list) */}
            <div style={{
                fontWeight: 600,
                marginBottom: 8,
                fontSize: "clamp(17px, 4vw, 19px)",
                color: "#000000"
            }}>
                建議產品：
            </div>
            <ul style={{
                marginBottom: 14,
                marginLeft: 12,
                paddingLeft: 0,
                fontSize: "clamp(16px,4vw,18px)"
            }}>
                {result.products.map((prod, idx) => (
                    <li key={idx} style={{
                        marginBottom: 4,
                        listStyle: "none",
                        fontWeight: 700,            // <-- bold!
                        color: "#111",
                    }}>
                        {prod}
                    </li>
                ))}
            </ul>

            {/* Tips */}
            <div
                style={{
                    color: "var(--brand-grey, #666)",
                    marginBottom: 22,
                    fontSize: "clamp(15px,3.8vw,17px)",
                    lineHeight: 1.7,
                    textAlign: "left"
                }}
            >
                {result.tips}
            </div>

            {/* Restart quiz button */}
            <button
                onClick={onRestart}
                style={{
                    padding: "clamp(10px,3vw,16px) clamp(18px,5vw,34px)",
                    background: "var(--brand-green-light, #67c9a6)",
                    color: "#fff",
                    border: "none",
                    borderRadius: 8,
                    fontWeight: "bold",
                    cursor: "pointer",
                    marginBottom: 32,
                    fontSize: "clamp(16px,4vw,18px)",
                    letterSpacing: 1,
                    boxShadow: "0 2px 8px rgba(60,160,120,0.08)"
                }}
            >
                重新選擇
            </button>

            {/* Product details section */}
            <div style={{ width: "100%" }}>
                <div
                    style={{
                        fontWeight: 700,
                        marginBottom: 14,
                        fontSize: "clamp(18px,4.7vw,20px)",
                        color: "var(--brand-blue, #21896b)",
                        marginTop: 18,
                        textAlign: "left"
                    }}
                >
                    產品詳情
                </div>
                {result.products.map((prod, idx) => (
                    <ProductCard key={idx} name={prod} />
                ))}
            </div>

            {/* Action buttons at the bottom */}
            <div style={{
                display: "flex",
                gap: 18,
                marginTop: 20,
                marginBottom: 2,
                justifyContent: "center",
                width: "100%"
            }}>
                <button
                    onClick={onSeeAllShampoo}
                    style={{
                        padding: "clamp(9px,2.8vw,13px) clamp(20px,5vw,36px)",
                        background: "var(--brand-green-light, #67c9a6)",
                        color: "#fff",
                        border: "none",
                        borderRadius: 8,
                        fontWeight: "bold",
                        cursor: "pointer",
                        fontSize: "clamp(16px,4vw,18px)",
                        letterSpacing: 1,
                        boxShadow: "0 2px 8px rgba(60,160,120,0.07)",
                        transition: "background 0.13s"
                    }}
                >
                    查看全部洗頭水
                </button>
                <button
                    onClick={onGoHome}
                    style={{
                        padding: "clamp(9px,2.8vw,13px) clamp(18px,5vw,32px)",
                        background: "var(--brand-accent, #e8f7f1)",
                        color: "var(--brand-green, #16966b)",
                        border: "none",
                        borderRadius: 8,
                        fontWeight: "bold",
                        cursor: "pointer",
                        fontSize: "clamp(16px,4vw,18px)",
                        letterSpacing: 1,
                        boxShadow: "0 2px 8px rgba(60,160,120,0.04)",
                        transition: "background 0.13s"
                    }}
                >
                    返回主頁
                </button>
            </div>
        </div>
    );
}
