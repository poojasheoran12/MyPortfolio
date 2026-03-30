
import { Routes, Route } from "react-router-dom";
import Portfolio from "./pages/Portfolio";
import Mediline from "./pages/projects/Mediline.js";
import CampusCare from "./pages/projects/CampusCare";
import LocalLoop from "./pages/projects/LocalLoop.js";
import NewsApp from "./pages/projects/Newsify.js";
import KMPMusicPlayer from "./pages/projects/KMPMusic.js";
import Drishti from "./pages/projects/Drishti.js";

export default function App() {
  return (
    <Routes>
      {/* Homepage */}
      <Route path="/" element={<Portfolio />} />

      {/* Project Pages */}
      <Route path="/project/mediline" element={<Mediline />} />
      <Route path="/project/campuscare" element={<CampusCare />} />
      <Route path="/project/localloop" element={<LocalLoop />} />
      <Route path="/project/newsify" element={<NewsApp />} />
      <Route path="/project/kmp-music" element={<KMPMusicPlayer/>} />
      <Route path="/project/drishti" element={<Drishti/>} />
    </Routes>
  );
}
