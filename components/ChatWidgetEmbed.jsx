"use client";
import React from "react";
import ReactDOM from "react-dom/client";
import ChatWidget from "./ChatWidget"; // Your main chat widget component

// Define a function that will be called from outside
export function renderChatWidget(containerId, options = {}) {
  const container = document.getElementById(containerId);
  if (!container) return console.error("Container not found!");

  const root = ReactDOM.createRoot(container);
  root.render(<ChatWidget {...options} />);
}

// Export globally to be available in window
if (typeof window !== "undefined") {
  window.renderChatWidget = renderChatWidget;
}
