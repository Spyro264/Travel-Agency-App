import { Box, Typography } from "@mui/material";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Allusers from "./pages/Allusers";
import AItrips from "./pages/AItrips";

const App = () => {
  return (
    <Box display="flex" flexDirection={"column"}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/all-users" element={<Allusers />} />
        <Route path="/ai-trips" element={<AItrips />} />
      </Routes>
    </Box>
  );
};

export default App;
