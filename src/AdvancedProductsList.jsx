/**
 * @file AdvancedProductsList.jsx
 * @description
 *   Shows all advanced care products as cards.
 *   Responsive, clean, and includes a back button.
 */

import React from "react";
import { ADVANCED_PRODUCTS } from "./data";
import AdvancedProductCard from "./AdvancedProductCard";

/**
 * AdvancedProductsList component
 *
 * @param {Object} props
 * @param {Function} props.onGoHome - Callback to return to home/main menu.
 * @returns {JSX.Element}
 */
export default function AdvancedProductsList({ onGoHome }) {
    // Get array of all products
    const products = Object.values(ADVANCED_PRODUCTS);

    return (
        <div
            style={{
                width: "100%",
                maxWidth: 430,
                margin: "0 auto",
                padding: "clamp(0px, 1vw, 28px)",
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            {/* Title */}
            <h2
                style={{
                    color: "var(--brand-title, #339966)",
                    fontWeight: 700,
                    fontSize: 26,
                    marginBottom: 24,
                    textAlign: "center",
                }}
            >
                進階護理產品
            </h2>

            {/* Product cards */}
            <div style={{ width: "100%" }}>
                {products.length === 0 ? (
                    <div style={{ color: "#888", textAlign: "center" }}>暫無產品資料。</div>
                ) : (
                    products.map((prod, idx) => <AdvancedProductCard key={prod.name || idx} product={prod} />)
                )}
            </div>

            {/* Back to Home button */}
            <button
                onClick={onGoHome}
                style={{
                    marginTop: 28,
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
    );
}
