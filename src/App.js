import "./App.css";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import RecommendedVideos from "./components/RecommendedVideos";
function App() {
	return (
		<div className="app">
			<Header />
			<div className="app__page">
				<SideBar />
				<RecommendedVideos />
			</div>
		</div>
	);
}

export default App;
