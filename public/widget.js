(async () => {
  // Dynamically import React
  const React = await import("react");
  const ReactDOM = await import("react-dom/client");

  // Fetch and execute your ChatWidgetEmbed code
  const { renderChatWidget } = await import("/components/ChatWidgetEmbed.jsx");

  // Auto-inject the widget into a div if found
  const containerId = "chat-widget";
  const container = document.getElementById(containerId);
  if (container) {
    renderChatWidget(containerId);
  }
})();
