import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Home from "./components/Home";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import DeepseekUI from './components/DeepseekUI';
import ChatgptUI from './components/ChatgptUI';
import React from 'react';

function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
              <Route
                  exact
                  path="/"
                  element={<Home />}
              />
              <Route
                  path="/about"
                  element={<About />}
              />
              <Route
                  path="/contactus"
                  element={<ContactUs />}
              />
              <Route
                  path="/deepseekui"
                  element={<DeepseekUI />}
              />
              <Route
                  path="/chatgptui"
                  element={<ChatgptUI />}
              />
              <Route
                  path="*"
                  element={<Navigate to="/" />}
              />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
