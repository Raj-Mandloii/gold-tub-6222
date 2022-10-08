import { Routes, Route } from "react-router-dom";

import Login from "./Login";
import Pricing from "../Components/Price&PlansComponents/Pricing";
import HomePage from "./HomePage";
import ContactPage from "./ContactPage";
import MarketingHub from "../Components/Software/MarketingHub";
import FreeHubSpotCRM from "../Components/Software/FreeHubSpotCRM";
import OverviewOfAllProducts from "../Components/Software/OverviewOfAllProducts";
import SalesHub from "../Components/Software/SalesHub";
import SignUp from "./SignUp";

const MainRoutes = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<TestPage />} /> */}
      <Route path ="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/Pricing" element={<Pricing />} />
      <Route path="/ContactPage" element={<ContactPage />} />
      <Route path="/Marketing" element={ <MarketingHub/>} />
      <Route path="/FreeHubSpotCRM" element={ <FreeHubSpotCRM/>} />
      <Route path="/productoverview" element={ <OverviewOfAllProducts/>} />
      <Route path="/Sales" element={ <SalesHub/>} />
      <Route path="/signup" element={<SignUp />}/>
    </Routes>
  );
};
export { MainRoutes };
