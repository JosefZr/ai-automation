// App.jsx
import { Routes, Route } from "react-router-dom";

import AiAutomation from "./pages/ai-automation";

export default function App() {
  // usePixel(); // Add this at top level

  return (
      <Routes>
        {/* <Route element={<ProtectedRoutes/>}>
        </Route> */}
        <Route path="/" element={<AiAutomation />} />
        </Routes>
  );
}
