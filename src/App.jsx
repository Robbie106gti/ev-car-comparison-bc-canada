import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import EvapRebatePage from "./pages/EvapRebatePage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/evap-rebate" element={<EvapRebatePage />} />
    </Routes>
  );
}
