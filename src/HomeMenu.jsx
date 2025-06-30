/**
 * @file HomeMenu.jsx
 * @description
 *   Main home menu for navigation between app sections.
 *   Displays a list of big, responsive buttons for each main feature.
 *   Responsive and mobile-friendly, with clean color theming.
 */

import React from "react";

/**
 * Main navigation menu for the Hair Product Guide app.
 *
 * @param {Object} props
 * @param {Function} props.onSelect - Callback when a menu option is selected; receives the page key.
 * @returns {JSX.Element} The rendered main menu.
 */
export default function HomeMenu({ onSelect }) {
    // Define the menu options (add/remove/edit here to change menu)
    const options = [
        { key: "survey", label: "頭皮自測 → 選擇洗髮水" },
        { key: "advanced", label: "進階護理推薦" },
        { key: "steps", label: "正確洗頭步驟" },
        // { key: "products", label: "其他產品" },
    ];

    return (
        <div
            style={{
                maxWidth: 400,                        // Responsive card width
                // width: "100%",                        // Fill parent (will not exceed maxWidth)
                // margin: "0 auto",                     // Center horizontally
                // padding: "clamp(20px, 5vw, 40px)",    // Responsive padding (nice on mobile/desktop)
                // borderRadius: 18,
                // background: "var(--brand-bg, #f5fbf8)",
                // boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                display: "flex",                      // Vertically stack everything, center children
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            <div
                style={{
                    width: "120%",
                    background: "#111",            // solid black (not full #000 for softer look)
                    borderRadius: 16,
                    padding: "38px 0 28px 0",      // top, right/left, bottom
                    marginBottom: 36,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    boxShadow: "0 2px 10px rgba(0,0,0,0.07)",
                }}
            >
              <span
                  style={{
                      color: "#fff",
                      fontFamily: `'Times New Roman', Times, serif`, // Or use a custom modern serif if available
                      fontWeight: 700,
                      fontSize: 30,
                      letterSpacing: "1px",
                      textTransform: "lowercase",
                      marginBottom: 12,
                      lineHeight: 1.05,
                  }}
              >
                magnet:icellar
              </span>
                            <span
                                style={{
                                    color: "#ddd",
                                    fontFamily: "inherit",
                                    fontSize: 12,
                                    fontWeight: 300,
                                    letterSpacing: ".1em",
                                    marginTop: 2,
                                    textTransform: "none",
                                }}
                            >
                professional hair care
              </span>
            </div>
            {options.map(opt => (
                <button
                    key={opt.key}
                    style={btnStyle}
                    onClick={() => onSelect(opt.key)}
                    aria-label={opt.label}
                >
                    {opt.label}
                </button>
            ))}
        </div>
    );
}

/**
 * Inline style object for the main menu buttons.
 * - Responsive, modern, and accessible.
 */
const btnStyle = {
    width: "150%",                       // Fill the menu card horizontally
    padding: "18px 0",                   // Extra vertical space for big tap area
    marginBottom: 18,
    border: "none",
    borderRadius: 12,
    background: "var(--brand-accent, #e5f8f0)",
    color: "var(--brand-btn-text, #1b7c5e)",
    fontSize: 18,
    fontWeight: 600,
    cursor: "pointer",
    transition: "background 0.18s, box-shadow 0.15s",
    outline: "none",
    boxShadow: "0 1px 3px rgba(0,0,0,0.03)",
    letterSpacing: 1,
    // Simple hover/focus effect for feedback
    // (Pro tip: add a :hover style in real CSS for best accessibility)
};


