/**
 * @file App.jsx
 * @description
 *   Root component for the Hair Product Guide app.
 *   Handles global layout, page routing, and provides a central wrapper for all main pages.
 *   Ensures the app is fully responsive and always centered both vertically and horizontally.
 *   Implements all main navigation: survey, shampoo steps, advanced care, etc.
 */

import React, { useState } from "react";
import Survey from "./Survey";
import HomeMenu from "./HomeMenu";
import ShampooList from "./ShampooList";
import "./App.css";

/**
 * Root component for the app.
 * - Manages current page via React state.
 * - Applies a fully responsive, centered layout.
 * - Renders the main menu, survey, and other feature pages.
 *
 * @returns {JSX.Element} The rendered Hair Product Guide app.
 */
export default function App() {
    // Track which main page is being displayed ("home", "survey", "steps", "advanced", etc.)
    const [page, setPage] = useState("home");

    return (
        // OUTER WRAPPER: fills viewport, centers content, sets background color from App.css variable
        <div
            style={{
                minHeight: "100vh",
                minWidth: "100vw",
                display: "flex",
                alignItems: "center",      // vertical centering
                justifyContent: "center",  // horizontal centering
                background: "var(--brand-bg, #f6fcfa)",
                boxSizing: "border-box",
                padding: 0,
            }}
        >
            {/* INNER WRAPPER: card with maxWidth, responsive padding, shadow */}
            <div
                style={{
                    width: "100%",
                    maxWidth: 430,
                    padding: "clamp(16px, 5vw, 32px)",
                    margin: "0 auto",
                    boxSizing: "border-box",
                    background: "var(--brand-card, #fff)",
                    borderRadius: 16,
                    boxShadow: "var(--brand-card-shadow, 0 4px 18px rgba(60,160,120,0.10))",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                {/* HOME MENU: Main navigation menu */}
                {page === "home" && <HomeMenu onSelect={setPage} />}

                {/* SURVEY: The quiz flow, with handlers for "see all shampoo" and "go home" */}
                {page === "survey" && (
                    <Survey
                        onBack={() => setPage("home")}
                        onSeeAllShampoo={() => setPage("steps")}
                        onGoHome={() => setPage("home")}
                    />
                )}

                {/* SHAMPOO STEPS: Placeholder for now */}
                {page === "steps" && (
                    <ShampooList onGoHome={() => setPage("home")} />
                )}

                {/* ADVANCED CARE: Placeholder for now */}
                {page === "advanced" && (
                    <div style={{ width: "100%" }}>
                        <button
                            onClick={() => setPage("home")}
                            style={{
                                background: "none",
                                border: "none",
                                fontSize: 18,
                                cursor: "pointer",
                                color: "var(--color-accent, #D6ACA6)",
                                marginBottom: 16,
                            }}
                        >
                            ← Back
                        </button>
                        <h2>Advanced Care</h2>
                        <p>
                            (This page is a placeholder. Add your advanced care tips or product routines here!)
                        </p>
                    </div>
                )}

                {/* TODO: Add more pages as you expand the app */}
            </div>
        </div>
    );
}
