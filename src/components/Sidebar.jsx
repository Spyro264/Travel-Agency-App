import { Box, Button, Typography, IconButton } from "@mui/material";
import { side_bar_items } from "../constants";
import logo from "../assets/images/logo.jpg";
import { useEffect, useState } from "react";

const Sidebar = ({ open }) => {
  const [style, setStyle] = useState({ bgColor: "", color: "" });
  const [indexVal, setIndexVal] = useState(0);

  const handleClick = (index) => {
    setIndexVal(index);
    setStyle({ bgColor: "#256FF1", color: "white" });
  };

  useEffect(() => {
    handleClick(0);
  }, []);

  return (
    <>
      {/* Sidebar for large screens */}
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
        />
      </Box>

      {/* Sidebar for small screens */}
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
        />
      </Box>
    </>
  );
};

const SidebarContent = ({ indexVal, handleClick, style }) => (
  <>
    {/* Logo */}
    <Box display="flex" alignItems="center" gap={1} padding={1}>
      <img src={logo} alt="logo" />
      <Typography fontSize={{ xs: "1.2rem" }} fontWeight={900}>
        Travel Zone
      </Typography>
    </Box>

    {/* Sidebar Items */}
    <Box
      width={"90%"}
      padding={1}
      display={"flex"}
      flexDirection={"column"}
      gap={2}
      mt={3}
    >
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
            padding: { xs: 1, md: 2 },
            border: index !== indexVal && "1px solid #256FF1",
            backgroundColor: index === indexVal ? style.bgColor : "",
            color: index === indexVal ? style.color : "",
          }}
          onClick={() => handleClick(index)}
        >
          {item.name}
        </Button>
      ))}
    </Box>
  </>
);

export default Sidebar;
