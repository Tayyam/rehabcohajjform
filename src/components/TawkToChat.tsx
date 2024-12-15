import React, { useEffect } from 'react';

declare global {
  interface Window {
    Tawk_API?: any;
    Tawk_LoadStart?: Date;
  }
}

export const TawkToChat: React.FC = () => {
  useEffect(() => {
    // Initialize Tawk.to
    const s1 = document.createElement("script");
    const s0 = document.getElementsByTagName("script")[0];
    
    s1.async = true;
    s1.src = 'https://embed.tawk.to/675c7370af5bfec1dbdb7d8b/1if0i5s2t';
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin', '*');
    
    if (s0 && s0.parentNode) {
      s0.parentNode.insertBefore(s1, s0);
    }

    // Cleanup function
    return () => {
      // Remove the script when component unmounts
      if (s1 && s1.parentNode) {
        s1.parentNode.removeChild(s1);
      }
      // Clean up global variables
      delete window.Tawk_API;
      delete window.Tawk_LoadStart;
    };
  }, []);

  return null; // This component doesn't render anything
};