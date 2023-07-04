import {
	BrowserRouter as Router,
	Navigate,
	Route,
	Routes,
} from "react-router-dom";
import "./App.css";

import Favorites from "./components/Favorites";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Details from "./components/Details";

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
					<Route path="/apply" element={<Profile />} />
					<Route path="*" element={<Navigate to="/" />} />
				</Routes>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
