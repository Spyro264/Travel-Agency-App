import { Box, Typography } from "@mui/material";
import React from "react";

const Chip = ({ title = "beach", color = "#026AA2", bgColor = "#F0FFFF" }) => {
  return (
    <Box
      boxShadow={3}
      color={color}
      bgcolor={bgColor}
      borderRadius={30}
      paddingX={4}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      width={"fit-content"}
    >
      <Typography fontWeight={550}>{title}</Typography>
    </Box>
  );
};

export default Chip;
