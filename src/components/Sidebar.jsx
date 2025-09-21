import { Box, Button, Typography, IconButton } from "@mui/material";
import { side_bar_items } from "../constants";
import logo from "../assets/images/logo.jpg";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { logoutUser } from "../appwrite/auth";

const Sidebar = ({ open }) => {
  const [style, setStyle] = useState({ bgColor: "", color: "" });
  const [indexVal, setIndexVal] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();

  // const [user, setUser] = useState(null);

  // useEffect(() => {
  //   (async () => {
  //     const loggedInUser = await storeUserdata();
  //     setUser(loggedInUser);
  //   })();
  // }, []);

  const handleClick = (index, item) => {
    setIndexVal(index);
    setStyle({ bgColor: "#256FF1", color: "white" });
    // navigates based on click
    if (item?.name === "Dashboard") {
      navigate("/");
    } else if (item?.name === "All Users") {
      navigate("/all-users");
    } else {
      navigate("/ai-trips");
    }
  };

  const handleLogout = async () => {
    try {
      const result = await logoutUser();
      if (result) {
        navigate("/sign-in");
      } else {
        console.log("logout failed");
      }
    } catch (e) {
      console.log("logout issue");
    }
  };

  // runs on first render only
  useEffect(() => {
    handleClick(0);
    navigate("/");
  }, []);

  return (
    <>
      {/* // Sidebar for large screens  */}
      {!location.pathname.includes("/sign-in") && (
        <>
          <Box
            boxShadow={1}
            sx={{
              position: "fixed",
              top: 12,
              left: 0,
              zIndex: 1200,
              backgroundColor: "white",
              width: 250,
              ml: 1,
              minHeight: "100vh",
              display: { xs: "none", md: "flex" },
              flexDirection: "column",
            }}
          >
            <SidebarContent
              indexVal={indexVal}
              handleClick={handleClick}
              style={style}
              navigate={navigate}
              handleLogout={handleLogout}
            />
          </Box>
          {/* // small screen side bar */}
          <Box
            sx={{
              position: "fixed",
              top: 20,
              left: open ? 0 : "-100%",
              width: 200,
              minHeight: "100vh",
              backgroundColor: "white",
              boxShadow: 1,
              borderRadius: 3,
              zIndex: 1300,
              transition: "left 0.3s ease-in-out",
              display: { xs: "flex", md: "none" },
              flexDirection: "column",
            }}
          >
            <SidebarContent
              indexVal={indexVal}
              handleClick={handleClick}
              style={style}
              navigate={navigate}
              handleLogout={handleLogout}
            />
          </Box>
        </>
      )}
    </>
  );
};

const SidebarContent = ({
  indexVal,
  handleClick,
  style,
  navigate,
  handleLogout,
}) => (
  <>
    {/* Logo */}
    <Box display="flex" alignItems="center" gap={1} padding={1}>
      <img src={logo} alt="logo" />
      <Typography fontSize={{ xs: "1.2rem" }} fontWeight={900}>
        Travel Zone
      </Typography>
    </Box>

    <Box
      height={"80vh"}
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"flex-start"}
      flexDirection={"column"}
    >
      {/* Sidebar Items */}
      <Box padding={1} display={"flex"} flexDirection={"column"} gap={2} mt={3}>
        {side_bar_items?.map((item, index) => (
          <Button
            key={index}
            startIcon={item.Icon}
            sx={{
              minWidth: "max-content",
              textTransform: "none",
              justifyContent: "flex-start",
              width: { xs: 150, md: 200 },
              fontSize: "1rem",
              fontWeight: 800,
              padding: { xs: 1, md: 1 },
              paddingX: { md: 2 },
              border: index !== indexVal && "1px solid #256FF1",
              backgroundColor: index === indexVal ? style.bgColor : "",
              color: index === indexVal ? style.color : "",
            }}
            onClick={() => handleClick(index, item)}
          >
            {item.name}
          </Button>
        ))}
      </Box>

      {/* {login-logout} */}
      <Box
        padding={1}
        display={"flex"}
        justifyContent={"flex-start"}
        alignItems={"flex-start"}
        flexDirection={"column"}
        gap={1}
      >
        <Button variant="contained" sx={{ width: 110 }} onClick={handleLogout}>
          Logout
        </Button>
        <Button
          variant="contained"
          sx={{ width: 110 }}
          onClick={() => navigate("/sign-in")}
        >
          Sign up
        </Button>
      </Box>
    </Box>
  </>
);

export default Sidebar;
