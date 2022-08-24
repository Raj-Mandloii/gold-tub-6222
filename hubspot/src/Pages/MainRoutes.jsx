import { Routes, Route } from "react-router-dom";
import TestPage from "./TestPage";
import Login from "./Login";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<TestPage />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};
export { MainRoutes };
