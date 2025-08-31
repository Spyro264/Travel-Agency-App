import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
import MapIcon from "@mui/icons-material/Map";
import arrowDown from "../assets/icons/arrow-down-red.svg";
import arrowUp from "../assets/icons/arrow-up-green.svg";
import increment from "../assets/icons/increment.svg";
import decrement from "../assets/icons/decrement.svg";
import LocationPinIcon from "@mui/icons-material/LocationPin";

import sample1 from "../assets/images/sample1.jpg";
import sample2 from "../assets/images/sample2.jpg";
import sample3 from "../assets/images/sample3.jpg";
import sample4 from "../assets/images/sample4.jpg";

// side bar items
export const side_bar_items = [
  { name: "Dashboard", Icon: <DashboardIcon /> },
  { name: "All Users", Icon: <GroupIcon /> },
  { name: "AI Trips", Icon: <MapIcon /> },
];

// page header info.
export const pageInfo = [
  {
    message1: "Welcome Nagaraj",
    message2: " Track activity,trends and popular destinations in real time.",
    path: "/",
  },
  {
    message1: "Manage Users",
    message2: "all user details and info",
    path: "/all-users",
  },
  {
    message1: "Add New Trip",
    message2: " View and generate ai trip",
    path: "/ai-trips",
  },
];

// status card data
export const statusCardData = [
  {
    heading: "Total Users",
    count: "1234",
    icon: arrowDown,
    desc: "12% vs to last month",
    graph: decrement,
  },
  {
    heading: "Total Trips",
    count: "123",
    icon: arrowUp,
    desc: "12% vs to last month",
    graph: increment,
  },
  {
    heading: "Active Users",
    count: "3214",
    icon: arrowDown,
    desc: "12% vs to last month",
    graph: increment,
  },
];

//Trip card data

export const tripCardData = [
  {
    image: sample1,
    title: "Romania Beach",
    location: "near westbengal maharashtra",
    locIcon: <LocationPinIcon />,
  },
  {
    image: sample2,
    title: "Paris",
    location: "near westbengal maharashtra",
    locIcon: <LocationPinIcon />,
  },
  {
    image: sample3,
    title: "Japan",
    location: "near westbengal maharashtra",
    locIcon: <LocationPinIcon />,
  },
  {
    image: sample4,
    title: "Australia",
    location: "near westbengal maharashtra",
    locIcon: <LocationPinIcon />,
  },
];
