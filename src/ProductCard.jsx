import React, { useState } from "react";
import { PRODUCTS } from "./data";

// Responsive clipboard icon
const ClipboardIcon = ({ copied }) => (
    <span
        style={{
            fontSize: "clamp(18px, 5vw, 24px)",
            color: copied ? "var(--brand-green)" : "#bbb",
            transition: "color 0.15s",
            verticalAlign: "-2px",
            marginLeft: 2,
            userSelect: "none",
        }}
        role="img"
        aria-label="Copy"
    >
    {copied ? "✅" : "📑"}
  </span>
);

export default function ProductCard({ name }) {
    const prod = PRODUCTS[name];
    const [copied, setCopied] = useState(false);

    if (!prod) return null;

    // Copy Chinese product name to clipboard
    const handleCopy = () => {
        navigator.clipboard.writeText(name);
        setCopied(true);
        setTimeout(() => setCopied(false), 1000);
    };

    return (
        <div
            style={{
                position: "relative",
                background: "var(--brand-card)",
                borderRadius: 18,
                boxShadow: "var(--brand-card-shadow)",
                padding: 0,
                marginBottom: 28,
                maxWidth: 440,
                width: "100%",
                marginLeft: "auto",
                marginRight: "auto",
                overflow: "hidden",
            }}
        >
            {/* Responsive square image (aspect-ratio) */}
            {prod.image && (
                <div
                    style={{
                        width: "100%",
                        aspectRatio: "1 / 1",
                        background: "#f5f7f8",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        overflow: "hidden",
                    }}
                >
                    <img
                        src={prod.image}
                        alt={prod.name}
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            display: "block",
                        }}
                    />
                </div>
            )}

            {/* Copied Toast */}
            {copied && (
                <div
                    style={{
                        position: "absolute",
                        top: 18,
                        right: 22,
                        background: "var(--brand-toast)",
                        color: "#fff",
                        padding: "7px 16px",
                        borderRadius: 20,
                        fontWeight: 700,
                        fontSize: "clamp(14px, 3.5vw, 18px)",
                        boxShadow: "var(--brand-toast-shadow)",
                        zIndex: 10,
                        opacity: 0.97,
                        transition: "opacity 0.23s",
                        pointerEvents: "none",
                    }}
                >
                    已複製！
                </div>
            )}

            <div style={{ padding: "clamp(15px,4vw,28px) clamp(12px,5vw,24px) clamp(12px,4vw,18px) clamp(12px,5vw,24px)" }}>
                <div style={{ display: "flex", alignItems: "flex-start", marginBottom: 12 }}>
                    <div style={{ flex: 1 }}>
                        <div style={{ fontWeight: 700, fontSize: "clamp(18px, 5vw, 22px)", lineHeight: 1.15 }}>
                            {prod.name.replace(/\s*\(.*?\)/, "")}
                        </div>
                        <div
                            style={{
                                color: "var(--brand-en)",
                                fontSize: "clamp(13px, 3.5vw, 16px)",
                                fontWeight: 500,
                                marginTop: 3,
                                opacity: 0.84,
                                lineHeight: 1.2,
                            }}
                        >
                            {prod.name.match(/\(.*?\)/)?.[0]}
                        </div>
                    </div>
                    {/* Icon-only copy button */}
                    <button
                        onClick={handleCopy}
                        style={{
                            background: "none",
                            border: "none",
                            borderRadius: 7,
                            padding: 6,
                            marginLeft: 9,
                            cursor: "pointer",
                            fontSize: "inherit",
                            outline: "none",
                        }}
                        aria-label="複製產品中文名稱"
                        title={copied ? "已複製" : "複製產品名稱"}
                    >
                        <ClipboardIcon copied={copied} />
                    </button>
                </div>

                <div style={{
                    fontSize: "clamp(15px, 4vw, 16.5px)",
                    color: "var(--brand-text)",
                    marginBottom: 14,
                    lineHeight: 1.7
                }}>
                    {prod.desc}
                </div>

                <div
                    style={{
                        background: "var(--brand-accent)",
                        borderRadius: 7,
                        padding: "clamp(9px,2.8vw,10px) clamp(10px,3vw,12px)",
                        color: "var(--brand-green)",
                        fontWeight: 600,
                        fontSize: "clamp(15px,4vw,16.2px)",
                        display: "flex",
                        alignItems: "flex-start",
                        marginBottom: 4,
                        gap: 7,
                        lineHeight: 1.8,
                    }}
                >
          <span>
            <span style={{ fontWeight: 800, marginRight: 4 }}>🧴用法：</span>
              {prod.usage}
          </span>
                </div>
            </div>
        </div>
    );
}
