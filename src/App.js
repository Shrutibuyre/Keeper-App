import React from 'react';
import Header from './Header';
import CreateArea from './CreateArea';
import Note from './Note';
import Footer from './Footer';

function App() {
  return (
    <div>
      <Header />
      <CreateArea />
      <Note />
      {/* You can repeat the <Note /> component for each note you want to display */}
      <Footer />
    </div>
  );
}

export default App;
