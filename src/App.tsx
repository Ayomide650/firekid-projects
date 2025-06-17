import React, { useState } from 'react';
import Navigation from './components/Navigation';
import ServerInfo from './components/ServerInfo';
import AboutOwner from './components/AboutOwner';
import Rules from './components/Rules';
import Commands from './components/Commands';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <ServerInfo />;
      case 'owner':
        return <AboutOwner />;
      case 'rules':
        return <Rules />;
      case 'commands':
        return <Commands />;
      default:
        return <ServerInfo />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <Navigation currentPage={currentPage} onPageChange={setCurrentPage} />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderCurrentPage()}
      </main>
      
      {/* Footer */}
      <footer className="bg-gray-900/50 border-t border-gray-700 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <p className="text-gray-400 mb-2">
              © 2025 FireKid Projects. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm">
              Built with ❤️ for our amazing community
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;