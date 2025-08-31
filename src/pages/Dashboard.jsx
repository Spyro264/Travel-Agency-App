import { Box, Typography } from "@mui/material";
import Navbar from "../components/Navbar";
import Statscard from "../components/Statscard";
import Tripcard from "../components/Tripcard";

const Dashboard = () => {
  return (
    <Box ml={{ xs: 0, md: 31.3 }} minHeight={"100vh"}>
      <Statscard />
      <Tripcard />
    </Box>
  );
};

export default Dashboard;
