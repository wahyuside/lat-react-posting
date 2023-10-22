/* eslint-disable no-unused-vars */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "./App.css";

//Component
import Home from "./component/home";
import About from "./component/about";
import Posting from "./component/posting";
import Login from "./component/login";

function App() {
  return (
    <div className="container-fluid">
      <div className="container text-center">
        <h1>Test React lat-react-posting</h1>
        <p>Home | Posting | About | Login</p>
        <hr />
      </div>
      <div className="container-fluid">
        <div className="Container">
          {/* <Home></Home>
          <About></About> */}
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/posting" element={<Posting />} />
              <Route path="/posting/:id" element={<Posting />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </Router>
        </div>
      </div>
    </div>
  );
}

export default App;
