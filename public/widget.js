// This script loads the chat widget dynamically when added to any website
(function () {
  const container = document.createElement("div");
  container.id = "chat-widget";
  document.body.appendChild(container);

  const script = document.createElement("script");
  script.type = "module";
  script.src = "https://saaschatwidget.netlify.app/_next/static/chunks/app/page.js"; 
  // ^ replace this URL with the exact built file that renders your chat (I’ll explain below)
  document.body.appendChild(script);
})();
