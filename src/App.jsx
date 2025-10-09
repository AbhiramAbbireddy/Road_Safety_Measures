import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import Global CSS
import './App.css';

// Import Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Import Pages
import Home from "./pages/Home";
import RoadGuardLearning from "./pages/RoadGuardLearning";
import RoadSafetyStatistics from "./pages/RoadSafetyStatistics";
import RoadSafetyEducational from "./pages/RoadSafetyEducational";
import AfterAccident from "./pages/AfterAccident";
import GuidelinesDriving from "./pages/GuidelinesDriving";
import ImportanceRoadSafety from "./pages/ImportanceRoadSafety";
import Quiz from "./pages/Quiz";
import TrafficRules from "./pages/TrafficRules";
import WhyImportant from "./pages/WhyImportant";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/road-guard-learning" element={<RoadGuardLearning />} />
          <Route path="/statistics" element={<RoadSafetyStatistics />} />
          <Route path="/road-safety-educational" element={<RoadSafetyEducational />} />
          <Route path="/after-accident" element={<AfterAccident />} />
          <Route path="/guidelines-driving" element={<GuidelinesDriving />} />
          <Route path="/importance-road-safety" element={<ImportanceRoadSafety />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/traffic-rules" element={<TrafficRules />} />
          <Route path="/why-important" element={<WhyImportant />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;