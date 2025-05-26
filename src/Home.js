import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css"; // Import the CSS for Home.js

export default function Home() {
  const navigate = useNavigate();

  const handleModelClick = (modelName) => {
    navigate(`/prompt/${modelName}`);
  };

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Explore the World of Large Language Models</h1>
          <p>Dive into the capabilities of leading AI models: Mistral and Llama.</p>
          <p>Discover their unique strengths and how they respond to your prompts.</p>
        </div>
        <div className="hero-image">
          {/* Ensure public/assets/ai_hero.png exists or use a different image/remove this tag */}
          <img src="/assets/ai_hero.png" alt="AI Illustration" />
        </div>
      </section>

      {/* Model Selection Section */}
      <section className="model-selection-section">
        <h2>Choose Your AI Companion</h2>
        <div className="model-cards-container">
          {/* Mistral Model Card */}
          <div className="model-card" onClick={() => handleModelClick('mistral')}>
            {/* Ensure public/assets/mistral_response.png exists */}
            <img src="/assets/mistral_response.png" alt="Mistral AI Icon" className="model-icon" />
            <h3>Mistral AI</h3>
            <p>
              Known for its efficiency and strong performance, Mistral AI excels in complex reasoning and multilingual tasks, offering a robust solution for various applications.
            </p>
            <button className="explore-button">Explore Mistral</button>
          </div>

          {/* Llama Model Card */}
          <div className="model-card" onClick={() => handleModelClick('llama')}>
            {/* Ensure public/assets/llama_response.png exists */}
            <img src="/assets/llama_response.png" alt="Llama AI Icon" className="model-icon" />
            <h3>Llama by Meta</h3>
            <p>
              Developed by Meta, Llama models are powerful open-source large language models, providing a strong foundation for research and development in the AI community.
            </p>
            <button className="explore-button">Explore Llama</button>
          </div>
        </div>
      </section>

      {/* Footer (Optional, but good for completeness) */}
      <footer className="home-footer">
        <p>&copy; {new Date().getFullYear()} LLM Explorer. All rights reserved.</p>
      </footer>
    </div>
  );
}