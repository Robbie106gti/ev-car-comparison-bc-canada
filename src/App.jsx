import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import CarGuidePage from "./pages/CarGuidePage";
import EvapRebatePage from "./pages/EvapRebatePage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/cars" element={<CarGuidePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/evap-rebate" element={<EvapRebatePage />} />
    </Routes>
  );
}
