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
import Header from "./components/Header";

import Home from "./components/Home";
import Profile from "./components/Profile";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jobs/favorites" element={<Favorites />} />
          <Route path="/jobs/:id" element={<Details />} />
          <Route path="/settings/profile" element={<Profile />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
