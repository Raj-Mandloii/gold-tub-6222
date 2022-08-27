import "./App.css";
import { Box } from "@chakra-ui/react";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import FreeHubSpotCRM from "./Components/Software/FreeHubSpotCRM";
import TabPage from "./Pages/TabsPage";
import Pricing from "./Components/Price&PlansComponents/Pricing";
import Login from "./Pages/Login";
import OverviewOfAllProducts from "./Components/Software/OverviewOfAllProducts";
import MarketingHub from "./Components/Software/MarketingHub";
function App() {
  return (
    <Box className="App">
      <Navbar/>
      <Pricing />
      <Footer />
      <FreeHubSpotCRM />
      <OverviewOfAllProducts/>
      <TabPage />
      <Login />
      <MarketingHub/>
    </Box>
  );
}

export default App;
