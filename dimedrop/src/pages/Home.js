import React, { useEffect, useState } from 'react';
import '../css/Home.css'; // Optional if you want to separate styles

const Home = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`home-container ${visible ? 'fade-in' : ''}`}>
      <h1 className="home-title">Welcome to DimeDrop</h1>
    </div>
  );
};

export default Home;
