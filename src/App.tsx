import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import "./App.css";

import Details from "./components/Details";
import Favorites from "./components/Favorites ";
import Footer from "./components/Footer";

import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jobs/favorites" element={<Favorites />} />
          <Route path="/jobs/:id" element={<Details />} />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
