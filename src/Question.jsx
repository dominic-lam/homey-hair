// src/Question.jsx
import React from "react";

export default function Question({ question, onSelect, selected }) {
    return (
        <div className="question-block" style={{ marginBottom: 32 }}>
            <div style={{ fontWeight: "bold", marginBottom: 12, color:"#000000" }}>{question.text}</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {question.options.map((opt) => (
                    <button
                        key={opt.value}
                        onClick={() => onSelect(opt.value)}
                        style={{
                            padding: "16px 0", // makes button tall
                            borderRadius: 8,
                            border: selected === opt.value ? "2px solid #67c9a6" : "1px solid #ccc",
                            background: selected === opt.value ? "#e6f9f0" : "#fff",
                            fontWeight: selected === opt.value ? "bold" : "normal",
                            cursor: "pointer",
                            fontSize: 18,
                            width: "100%",
                            transition: "all 0.15s",
                            color: selected === opt.value ? "#16966b" : "#1d3731",
                        }}
                    >
                        {opt.label}
                    </button>
                ))}
            </div>
        </div>
    );
}
