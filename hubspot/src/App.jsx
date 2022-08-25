import "./App.css";
import { Box } from "@chakra-ui/react";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import FreeHubSpotCRM from "./Components/Software/FreeHubSpotCRM";
import TabPage from "./Pages/TabsPage";
import Pricing from "./Components/Price&PlansComponents/Pricing";
import Login from "./Pages/Login";
function App() {
  return (
    <Box className="App">
      <Pricing />
      <Footer />
      <FreeHubSpotCRM />
      <TabPage />
      <Login />
    </Box>
  );
}

export default App;
