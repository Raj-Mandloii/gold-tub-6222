import { Routes, Route } from "react-router-dom";
import TestPage from "./TestPage";
import Login from "./Login";
import Pricing from "../Components/Price&PlansComponents/Pricing";
import HomePage from "./HomePage";
import ContactPage from "./ContactPage";
import MarketingHub from "../Components/Software/MarketingHub";

const MainRoutes = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<TestPage />} /> */}
      <Route path ="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/Pricing" element={<Pricing />} />
      <Route path="/ContactPage" element={<ContactPage />} />
      <Route path="/Marketing" element={ <MarketingHub/>} />
    </Routes>
  );
};
export { MainRoutes };
