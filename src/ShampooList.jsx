/**
 * @file ShampooList.jsx
 * @description
 *   Lists all shampoo products (from PRODUCTS object) using ProductCard.
 *   Responsive, themed, and ready for navigation.
 */

import React from "react";
import { PRODUCTS } from "./data";
import ProductCard from "./ProductCard";

/**
 * Returns true if a product key is considered a shampoo.
 * (Customize this logic if your naming changes!)
 * @param {string} key
 * @returns {boolean}
 */
function isShampooProduct(key) {
    // Check if the product key includes "洗髮"
    return key.includes("洗髮");
}

/**
 * ShampooList component
 * - Shows all shampoo products in ProductCard format.
 * - Includes a "Back to Home" button.
 *
 * @param {Object} props
 * @param {Function} props.onGoHome - Callback to return to home.
 * @returns {JSX.Element}
 */
export default function ShampooList({ onGoHome }) {
    // Convert object to array, filter only shampoo products
    const shampooKeys = Object.keys(PRODUCTS).filter(isShampooProduct);

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
                所有洗頭水產品
            </h2>

            {/* List all shampoo ProductCards */}
            <div style={{ width: "100%" }}>
                {shampooKeys.length === 0 ? (
                    <div style={{ color: "#888", textAlign: "center" }}>未有洗頭水產品資料。</div>
                ) : (
                    shampooKeys.map((key) => (
                        <ProductCard key={key} name={key} />
                    ))
                )}
            </div>

            {/* Back to Home button */}
            <button
                onClick={onGoHome}
                style={{
                    marginTop: 36,
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
