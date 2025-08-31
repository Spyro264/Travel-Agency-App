import { Grid, Typography, Box } from "@mui/material";
import { statusCardData } from "../constants";

const Statscard = () => {
  return (
    <Grid
      container
      padding={1}
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      gap={1}
      mt={2}
      //   border={"2px solid red"}
    >
      {statusCardData?.map((item, index) => (
        <Grid
          key={index}
          flexGrow={1}
          boxShadow={3}
          borderRadius={2}
          padding={1}
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          paddingX={2}
        >
          <Box width={"50%"}>
            <Typography
              fontSize={{ xs: "0.8rem", md: "1rem" }}
              fontWeight={{ xs: 700, md: 900 }}
            >
              {item?.heading}
            </Typography>
            <Typography
              fontSize={{ xs: "1.5rem", md: "2rem" }}
              fontWeight={{ xs: 700, md: 900 }}
            >
              {item?.count}
            </Typography>
            <Typography
              fontSize={{ xs: "0.7rem", md: "0.7rem" }}
              fontWeight={{ xs: 700, md: 900 }}
              color="grey"
              display={"flex"}
              justifyContent={"flex-start"}
              alignItems={"center"}
              gap={1}
            >
              <img src={item.icon} /> 12% vs to last month
            </Typography>
          </Box>
          <Box
            // border={"2px solid red"}
            width={"50%"}
            display={"flex"}
            justifyContent={"flex-start"}
            alignItems={"center"}
            padding={1}
          >
            <img src={item.graph} />
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default Statscard;
