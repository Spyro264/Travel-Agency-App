import { Box, Grid, Typography } from "@mui/material";
import Chip from "./Chip";
import { tripCardData } from "../constants";

const Tripcard = () => {
  return (
    <Box padding={1} mt={3}>
      <Grid container spacing={2}>
        {tripCardData?.map((item, index) => (
          <Grid
            key={index}
            item
            size={{ xs: 12, sm: 6, md: 6, lg: 3 }}
            boxShadow={4}
            borderRadius={2}
          >
            {/* Image Section */}
            <Box borderRadius={2} overflow="hidden">
              <img
                src={item.image}
                alt="image"
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "200px",
                  borderRadius: "8px 8px 0 0",
                }}
              />
            </Box>

            {/* Content Section */}
            <Box
              borderRadius={2}
              p={2}
              display="flex"
              flexDirection="column"
              gap={1}
            >
              <Typography
                variant="h6"
                fontWeight={900}
                mb={0}
                // border={"2px solid red"}
              >
                {item.title}
              </Typography>
              <Typography color="grey" m={0} p={0}>
                {item.location}
              </Typography>
              <Chip />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Tripcard;
