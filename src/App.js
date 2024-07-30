import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Add from './components/Add';
import View from './components/View';
import Search from './components/Search';
import Delete from './components/Delete';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Add />} />
          <Route path="/view" element={<View />} />
          <Route path="/search" element={<Search />} />
          <Route path="/delete" element={<Delete />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
