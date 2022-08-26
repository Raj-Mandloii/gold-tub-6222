import { Routes, Route } from "react-router-dom";
import TestPage from "./TestPage";
import Login from "./Login";
import Pricing from "../Components/Price&PlansComponents/Pricing";
import HomePage from "./HomePage";

const MainRoutes = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<TestPage />} /> */}
      <Route path ="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/Pricing" element={<Pricing />} />
    </Routes>
  );
};
export { MainRoutes };
