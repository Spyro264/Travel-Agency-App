import { Box, Typography } from "@mui/material";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <Box display="flex">
      <Sidebar />

      <Navbar />
    </Box>
  );
};

export default App;
