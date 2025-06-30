/**
 * @file Survey.jsx
 * @description
 *   Handles the quiz flow: shows one question at a time, collects answers,
 *   and renders the Result component at the end.
 *   Responsive and centered layout, with narrow horizontal padding for a tighter look.
 *   Passes onSeeAllShampoo and onGoHome callbacks down so Result screen works fully.
 */

import React, { useState } from "react";
import { QUESTIONS, RESULT_MAP } from "./data";
import Question from "./Question";
import Result from "./Result";

/**
 * Survey component
 * - Shows the quiz, handles answer selection and state.
 * - Renders Result when finished.
 * - Passes down onSeeAllShampoo and onGoHome so Result buttons work.
 *
 * @param {Object}   props
 * @param {Function} [props.onSeeAllShampoo] - Callback for "See All Shampoo" button (from parent/App.jsx)
 * @param {Function} [props.onGoHome]        - Callback for "Go Home" button (from parent/App.jsx)
 * @returns {JSX.Element}
 */
export default function Survey({ onSeeAllShampoo, onGoHome }) {
    const [answers, setAnswers] = useState([]);
    const [showResult, setShowResult] = useState(false);

    // Handle answer selection
    const handleSelect = (value) => {
        const nextAnswers = [...answers, value];
        setAnswers(nextAnswers);

        // If all questions answered, show result after a short delay
        if (nextAnswers.length === QUESTIONS.length) {
            setTimeout(() => {
                setShowResult(true);
            }, 120);
        }
    };

    // Restart the quiz
    const handleRestart = () => {
        setAnswers([]);
        setShowResult(false);
    };

    // Combine answers into a key for result lookup
    const answerKey = answers.join("");
    const result = RESULT_MAP[answerKey];

    return (
        <div
            style={{
                maxWidth: 480,
                margin: "0 auto",
                padding: "clamp(0px, 0vw, 12px)", // Minimum horizontal padding, responsive to screen size
                boxSizing: "border-box",
            }}
        >
            <h1
                style={{
                    fontWeight: "bold",
                    color: "#3ba776",
                    marginBottom: 20,
                    fontSize: 28,
                    textAlign: "center",
                }}
            >
                頭皮自測問卷
            </h1>
            {!showResult ? (
                <>
                    {/* Only show the next unanswered question */}
                    {QUESTIONS.map((q, idx) =>
                        idx === answers.length ? (
                            <Question
                                key={q.id}
                                question={q}
                                selected={answers[idx]}
                                onSelect={handleSelect}
                            />
                        ) : null
                    )}
                    {/* Progress indicator */}
                    <div style={{ marginTop: 24, color: "#888" }}>
                        {Math.min(answers.length + 1, QUESTIONS.length)}/{QUESTIONS.length} 題
                    </div>
                </>
            ) : (
                <Result
                    result={result}
                    onRestart={handleRestart}
                    onSeeAllShampoo={onSeeAllShampoo}
                    onGoHome={onGoHome}
                />
            )}
        </div>
    );
}
