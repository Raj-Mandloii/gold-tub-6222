import "./App.css";
import { Box } from "@chakra-ui/react";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import FreeHubSpotCRM from "./Components/Software/FreeHubSpotCRM";
import TabPage from "./Pages/TabsPage";
import Pricing from "./Components/Price&PlansComponents/Pricing";
function App() {
  return (
    <Box className="App">
      <Pricing/>
      <Footer />
      <FreeHubSpotCRM/>
      <TabPage/>
    </Box>
  );
}

export default App;
