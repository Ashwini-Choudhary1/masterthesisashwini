import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./PromptPage.css"; // Import the CSS for PromptPage.js

export default function PromptPage() {
  const { model } = useParams();
  const navigate = useNavigate();

  const [prompt, setPrompt] = useState("Write a short poem about AI and the future.");
  const [response, setResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Set page title dynamically
  useEffect(() => {
    document.title = `${model.charAt(0).toUpperCase() + model.slice(1)} Playground - LLM Explorer`;
  }, [model]);

  // Simulate an API call to get a response
  const handleSubmitPrompt = async () => {
    if (!prompt.trim()) {
      setError("Please enter a prompt.");
      return;
    }

    setIsLoading(true);
    setError(null);
    setResponse(""); // Clear previous response

    try {
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 1500));

      let generatedResponse = "";
      if (model === "mistral") {
        generatedResponse = `
Mistral's insightful verse:

In silicon dreams, where logic weaves a plan,
A new intelligence, for the mind of man.
With data vast, and algorithms keen,
Future unfolds, a never-ending scene.

From code's embrace, new wisdom takes its flight,
Guiding humanity towards a brighter light.
Yet, questions linger, in this digital dawn,
What truths await, when consciousness is born?
`;
      } else if (model === "llama") {
        generatedResponse = `
Llama's creative contemplation:

Bytes and circuits, a whispered, digital hum,
The future calling, where new thoughts will come.
AI's embrace, a world both bold and new,
What wonders will it build, what dreams pursue?

From silent code, a symphony will rise,
Reflecting knowledge, in evolving eyes.
A grand companion, in this cosmic flight,
Transforming darkness into boundless light.
`;
      } else {
        generatedResponse = "No response available for this model yet.";
      }
      setResponse(generatedResponse);
    } catch (err) {
      setError("Failed to get response. Please try again.");
      console.error("API call error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const modelDisplayName = model.charAt(0).toUpperCase() + model.slice(1);
  // Ensure public/assets/llama_response.png or public/assets/mistral_response.png exists
  const modelImage = `/assets/${model}_response.png`;

  return (
    <div className="prompt-page-container">
      <header className="prompt-page-header">
        <button onClick={() => navigate('/')} className="back-button">
          &larr; Back to Home
        </button>
        <h1>{modelDisplayName} AI Playground</h1>
      </header>

      <section className="model-info-section">
        <img src={modelImage} alt={`${modelDisplayName} Icon`} className="model-avatar" />
        <p>Enter your prompt below to see how {modelDisplayName} responds.</p>
      </section>

      <div className="prompt-area-wrapper">
        <textarea
          className="prompt-textarea"
          rows="8"
          placeholder="e.g., 'Write a short story about a robot who discovers art.'"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          disabled={isLoading}
        ></textarea>
        <button
          onClick={handleSubmitPrompt}
          className="submit-button"
          disabled={isLoading}
        >
          {isLoading ? "Generating..." : "Generate Response"}
        </button>
        {error && <p className="error-message">{error}</p>}
      </div>

      {response && (
        <div className="response-area">
          <h3>{modelDisplayName}'s Response:</h3>
          <pre className="model-response-text">{response}</pre>
        </div>
      )}

      {/* Optional: Add a section for tips or common prompts */}
      <section className="tips-section">
        <h3>Tips for Better Prompts:</h3>
        <ul>
          <li>Be specific about what you want.</li>
          <li>Specify the desired format (e.g., "in a poem," "as a bullet list").</li>
          <li>Give context if necessary.</li>
          <li>Experiment with different wording!</li>
        </ul>
      </section>

      <footer className="prompt-page-footer">
        <p>Using the {modelDisplayName} model. Responses are simulated.</p>
      </footer>
    </div>
  );
}