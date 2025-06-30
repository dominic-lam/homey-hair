/**
 * @file AdvancedProductCard.jsx
 * @description
 *   Card UI for a single advanced hair product. Hero image on top, any extra images under the title.
 *   Vertical stack, big readable text, emoji subtitles.
 */

import React from "react";

/**
 * AdvancedProductCard component
 *
 * @param {Object}   props
 * @param {Object}   props.product        - Product object (fields: name, image, desc, features, suitable, usage, shortline)
 * @returns {JSX.Element}
 */
export default function AdvancedProductCard({ product }) {
    if (!product) return null;

    // Split images: first is "hero", rest are "gallery"
    const [mainImg, ...extraImgs] = product.image || [];

    return (
        <div
            style={{
                background: "var(--brand-card, #fff)",
                borderRadius: 16,
                boxShadow: "var(--brand-card-shadow, 0 2px 10px rgba(60,160,120,0.08))",
                padding: "clamp(0px, 3vw, 32px)",
                marginBottom: 38,
                width: "100%",
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
            }}
        >
            {/* Main image: always on top */}
            {mainImg && (
                <img
                    src={mainImg}
                    alt={product.name}
                    style={{
                        width: "100%",
                        display: "block",
                        borderRadius: 10,
                        marginBottom: 20,
                        objectFit: "contain", // show full image
                        background: "#fafafa",
                        maxHeight: 340,
                    }}
                    loading="lazy"
                />
            )}

            {/* Product name */}
            <div style={{
                fontWeight: 800,
                fontSize: 24,
                color: "var(--brand-title, #339966)",
                marginBottom: 8,
                lineHeight: 1.18,
                letterSpacing: ".01em"
            }}>
                {product.name}
            </div>
            {/* One-line pitch */}
            <div style={{
                color: "#FF7043",
                fontSize: 18,
                fontWeight: 700,
                marginBottom: 13,
                lineHeight: 1.25
            }}>
                {product.shortline}
            </div>

            {/* Extra images: display under title/shortline */}
            {extraImgs.length > 0 && (
                <div style={{ width: "100%", marginBottom: 18 }}>
                    {extraImgs.map((img, idx) => (
                        <img
                            key={idx}
                            src={img}
                            alt={product.name + " - " + (idx + 2)}
                            style={{
                                width: "100%",
                                display: "block",
                                borderRadius: 10,
                                marginBottom: 20,
                                objectFit: "contain",
                                background: "#fafafa",
                                maxHeight: 340,
                            }}
                            loading="lazy"
                        />
                    ))}
                </div>
            )}

            {/* Description */}
            <div style={{
                color: "#444",
                marginBottom: 15,
                fontSize: 18,
                lineHeight: 1.8
            }}>
                {product.desc}
            </div>

            {/* Features */}
            <div style={{
                fontWeight: 700,
                marginBottom: 3,
                color: "#16966b",
                fontSize: 18,
                display: "flex",
                alignItems: "center"
            }}>
                🌟 主要功效
            </div>
            <ul style={{ marginTop: 0, marginBottom: 17, color: "#222", paddingLeft: 22 }}>
                {product.features.map((f, idx) => (
                    <li key={idx} style={{ marginBottom: 4, fontSize: 17, lineHeight: 1.7 }}>{f}</li>
                ))}
            </ul>

            {/* Suitable for */}
            <div style={{
                fontWeight: 700,
                marginBottom: 3,
                color: "#16966b",
                fontSize: 18,
                display: "flex",
                alignItems: "center"
            }}>
                👤 適合對象
            </div>
            <ul style={{ marginTop: 0, marginBottom: 17, color: "#222", paddingLeft: 22 }}>
                {product.suitable.map((s, idx) => (
                    <li key={idx} style={{ marginBottom: 4, fontSize: 17, lineHeight: 1.7 }}>{s}</li>
                ))}
            </ul>

            {/* Usage */}
            <div style={{
                fontWeight: 700,
                marginBottom: 3,
                color: "#16966b",
                fontSize: 18,
                display: "flex",
                alignItems: "center"
            }}>
                🧴 用法建議
            </div>
            <div style={{ color: "#222", fontSize: 17, lineHeight: 1.7, marginBottom: 2 }}>
                {product.usage}
            </div>
        </div>
    );
}
