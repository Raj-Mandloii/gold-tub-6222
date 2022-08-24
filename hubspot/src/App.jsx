import "./App.css";
import { Box } from "@chakra-ui/react";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import FreeHubSpotCRM from "./Components/Software/FreeHubSpotCRM";
function App() {
  return (
    <Box className="App">
      <Footer />
      <FreeHubSpotCRM/>
    </Box>
  );
}

export default App;
