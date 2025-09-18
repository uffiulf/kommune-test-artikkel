import React, { useEffect } from "react";
import "./App.css";
import NewsStory from "./components/NewsStory";
import { Toaster } from "./components/ui/toaster";

function App() {
  useEffect(() => {
    // Smooth scrolling behavior
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="App">
      <NewsStory />
      <Toaster />
    </div>
  );
}

export default App;