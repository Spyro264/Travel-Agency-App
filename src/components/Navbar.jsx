import { Box, Button, IconButton, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../assets/images/logo.jpg";
import Sidebar from "./Sidebar";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import Header from "./Header";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const location = useLocation();

  return (
    <>
      {!location.pathname.includes("/sign-in") && (
        <Box
          height={"8vh"}
          display={"flex"}
          justifyContent={"flex-end"}
          alignItems={"center"}
          padding={{ md: 1 }}
          ml={{ md: "250px" }}
          flexGrow={1}
        >
          {/* Sidebar for mobile */}
          <Sidebar open={openSidebar} setOpen={setOpenSidebar} />

          <Box
            width={{ xs: "100%", md: "100%" }}
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            gap={2}
          >
            {/* {heading for md and above devices} */}
            <Box
              width={"100%"}
              justifyContent={"flex-start"}
              alignItems={"flex-start"}
              flexDirection={"column"}
              padding={{ xs: 1, md: 1 }}
            >
              {/* {Headerr} */}
              <Header />

              {/* {icon and logo for small devices} */}
              <Box
                display={{ xs: "flex", md: "none" }}
                justifyContent={"flex-start"}
                alignItems={"center"}
                gap={1}
              >
                <img src={logo} alt="logo" />
                <Typography fontSize={{ xs: "1.2rem" }} fontWeight={900}>
                  Travel Zone
                </Typography>
              </Box>
            </Box>

            {/* {create trip button + menu} */}
            <Box
              width={"40%"}
              display={"flex"}
              justifyContent={"flex-end"}
              alignItems={"center"}
            >
              <Button
                variant="contained"
                startIcon={<AddIcon />}
                sx={{ fontWeight: 900, display: { xs: "none", md: "flex" } }}
              >
                Create trip
              </Button>
              <IconButton
                sx={{ display: { xs: "flex", md: "none" } }}
                onClick={() => setOpenSidebar((prev) => !prev)}
              >
                {openSidebar ? (
                  <CloseIcon sx={{ color: "black" }} />
                ) : (
                  <MenuIcon sx={{ color: "black" }} />
                )}
              </IconButton>
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
};

export default Navbar;
