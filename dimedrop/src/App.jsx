import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
} from 'react-router-dom'
import './css/App.css';
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import ChatgptUI from './pages/ChatgptUI';
import React from 'react';
import styled, { keyframes } from 'styled-components';

const Container = styled.div`
  margin: 0 auto;
  font-family: 'Press Start 2P', cursive;
  min-height: 100vh;
  color: #ecf0f1;
  image-rendering: pixelated;
`;

const Nav = styled.nav`
  background: #34495e;
  padding: 15px;
  margin-bottom: 30px;
  border-bottom: 4px solid #ecf0f1;
`;

const NavLink = styled(Link)`
  color: #ecf0f1;
  text-decoration: none;
  margin: 0 15px;
  padding: 5px 10px;
  border: 2px solid transparent;

  &:hover {
    border-color: #e74c3c;
  }
`;

const pixelate = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
  100% { transform: translateY(0); }
`;

const AnimatedPixel = styled.div`
  animation: ${pixelate} 1s infinite;
  font-family: 'Press Start 2P', cursive;
  font-size: 2rem;
  color:rgb(255, 153, 0);
  height: 10vh;
  align-items: center;

  display: flex;
  justify-content: center;  /* horizontal centering */
  align-items: center;      /* vertical centering */
`;

function App() {
  return (
    <div className="App">
        <AnimatedPixel>
            <h1 className="Title">Welcome to DimeDrop</h1>
        </AnimatedPixel>
        <Router>
            <Container>
                <Nav>
                  <NavLink to="/">Home</NavLink>
                  <NavLink to="/chatgptui">Expenses</NavLink>
                  <NavLink to="/aboutus">About Us</NavLink>
                  <NavLink to="/contactus">Contact Us</NavLink>
                </Nav>

                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/aboutus" element={<AboutUs />} />
                  <Route path="/contactus" element={<ContactUs />} />
                  <Route path="/chatgptui" element={<ChatgptUI />} />
                </Routes>
            </Container>
        </Router>
    </div>
  );
}

export default App;
