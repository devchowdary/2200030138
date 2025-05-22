import React, { useState } from 'react';
import Header from './components/Header';
import Calculator from './components/Calculator';
import Footer from './components/Footer';
import { WindowProvider } from './context/WindowContext';

function App() {
  const [windowSize, setWindowSize] = useState(10);

  const handleWindowSizeChange = (newSize) => {
    if (newSize >= 1 && newSize <= 100) {
      setWindowSize(newSize);
    }
  };

  return (
    <WindowProvider initialWindowSize={windowSize}>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header 
          windowSize={windowSize} 
          onWindowSizeChange={handleWindowSizeChange} 
        />
        <main className="flex-grow container mx-auto px-4 py-8">
          <Calculator />
        </main>
        <Footer />
      </div>
    </WindowProvider>
  );
}

export default App;