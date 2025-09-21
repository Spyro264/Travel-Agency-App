import { Box, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import { pageInfo } from "../constants";

const Header = () => {
  const location = useLocation();
  const path_name = location.pathname || "";

  const current_page = pageInfo.find((page) => page.path === path_name) || "";

  return (
    <Box
      display={{ xs: "none", md: "flex" }}
      justifyContent={"flex-start"}
      alignItems={"flex-start"}
      flexDirection={"column"}
    >
      <Typography variant="h4" fontWeight={900} fontFamily={"sans-serif"}>
        {current_page.message1}
      </Typography>
      <Typography
        variant="body2"
        color="grey"
        fontWeight={500}
        fontFamily={"monospace"}
      >
        {current_page.message2}
      </Typography>
    </Box>
  );
};

export default Header;
