import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import AccessGate from "./components/AccessGate";
import { AuthProvider } from "./authContext";
import AccountOverlay from "./components/AccountOverlay";

class ErrorBoundary extends React.Component {
  constructor(props) { super(props); this.state = { error: null }; }
  static getDerivedStateFromError(e) { return { error: e }; }
  componentDidCatch(e, info) { console.error(e, info); }
  render() {
    if (this.state.error) {
      return (
        <div style={{ padding: 20, background: "#1e1e1e", color: "#ff6b6b", fontFamily: "monospace", whiteSpace: "pre-wrap", minHeight: "100vh" }}>
          <h1>App Error</h1>
          <pre>{this.state.error.toString()}</pre>
          <button onClick={() => window.location.reload()} style={{ marginTop: 16, padding: "10px 16px" }}>Reload</button>
        </div>
      );
    }
    return this.props.children;
  }
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ErrorBoundary>
      <AuthProvider>
        <AccessGate />
        <AccountOverlay />
      </AuthProvider>
    </ErrorBoundary>
  </React.StrictMode>
);

// Register the service worker (needed for the browser's one-tap install prompt).
import { isNativeApp } from "./pwaInstall";
if ("serviceWorker" in navigator && import.meta.env.PROD && !isNativeApp()) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register(import.meta.env.BASE_URL + "sw.js").catch(() => {});
  });
}

import { precacheOffline } from "./offlineCache";
if ("serviceWorker" in navigator && import.meta.env.PROD && !isNativeApp()) {
  navigator.serviceWorker.ready.then(() => setTimeout(precacheOffline, 3000)).catch(() => {});
}
