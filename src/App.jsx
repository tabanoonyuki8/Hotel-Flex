import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Bookings from './pages/Bookings';
import Rooms from './pages/Rooms';
import Customers from './pages/Customers';
import Robot from './pages/Robot';


function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow container mx-auto p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/bookings" element={<Bookings />} />
            <Route path="/rooms" element={<Rooms />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/robot" element={<Robot />} /> 
          </Routes>
        </main>
        <Footer />
      </div>s
    </Router>
  );
}

export default App;
