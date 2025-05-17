import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/deepseekui">Deepseek UI</Link>
                </li>
                <li>
                    <Link to="/chatgptui">Chatgpt UI</Link>
                </li>
            </ul>
        </div>
    );
};

export default Home;