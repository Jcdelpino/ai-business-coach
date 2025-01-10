import { useEffect } from "react";

export const ElevenLabsWidget = () => {
  useEffect(() => {
    // Create and append the widget element when the component mounts
    const widget = document.createElement("elevenlabs-convai");
    widget.setAttribute("agent-id", "FqFBkkjbIAKwoZ8ZPlFe");
    
    // Find the container and append the widget
    const container = document.getElementById("elevenlabs-widget-container");
    if (container) {
      container.appendChild(widget);
    }

    // Cleanup function to remove the widget when component unmounts
    return () => {
      if (container && container.firstChild) {
        container.removeChild(container.firstChild);
      }
    };
  }, []);

  return (
    <div 
      id="elevenlabs-widget-container" 
      className="fixed bottom-4 right-4 z-50"
    />
  );
};