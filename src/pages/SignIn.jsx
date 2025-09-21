import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";
import bgImage from "../assets/images/auth-img.webp";
import GoogleIcon from "@mui/icons-material/Google";
import logo from "../assets/images/logo.jpg";
import { loginWithGoogle } from "../appwrite/auth";

export const SignIn = () => {
  // login function
  const handleLogin = () => {
    loginWithGoogle();
  };

  return (
    <Box
      height={"100vh"}
      sx={{
        backgroundImage: `url(${bgImage})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Dialog
        open={true}
        PaperProps={{
          sx: {
            width: "400px",
            maxWidth: "80%",
            borderRadius: 3,
            padding: 3,
          },
        }}
      >
        <DialogTitle
          textAlign={"center"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={1}
        >
          <img src={logo} />
          <Typography
            fontFamily={"monospace"}
            fontWeight={900}
            fontSize={{ xs: "1rem", md: "1.8rem" }}
          >
            TravelZone
          </Typography>
        </DialogTitle>
        <DialogContent>
          <Typography
            fontWeight={900}
            textAlign={"center"}
            fontSize={{ xs: "1rem", md: "1.8rem" }}
          >
            Admin Dashboard Login
          </Typography>
          <Typography
            variant="body2"
            textAlign={"center"}
            color="grey"
            fontSize={"0.7rem"}
          >
            Sign in with google to match the destinations, itinerariesm and user
            activity with ease
          </Typography>
        </DialogContent>
        <DialogActions
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            variant="contained"
            fullWidth
            startIcon={<GoogleIcon />}
            onClick={handleLogin}
          >
            <Typography fontSize={{ xs: "1rem", md: "1rem" }} fontWeight={900}>
              Sign in with google
            </Typography>
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default SignIn;
