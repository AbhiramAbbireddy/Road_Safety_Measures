import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
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

// This new component checks the current page and decides if a video background should be shown.
function AppContent() {
  const location = useLocation();
  const isEducationalPage = location.pathname === '/road-safety-educational';
  const isLearningPage = location.pathname === '/road-guard-learning';

  return (
    <>
      {(isEducationalPage || isLearningPage) && (
        <div className="video-background-fixed">
          <video autoPlay loop muted playsInline key={location.pathname}>
            <source 
              src={isLearningPage ? "/videos/roadGuardBG.mp4" : "/videos/roadsafetyeducationbgvideo.mp4"} 
              type="video/mp4" 
            />
          </video>
        </div>
      )}

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
    </>
  );
}

// The main App component now just sets up the Router
function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;