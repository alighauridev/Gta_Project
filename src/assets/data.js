import { AiFillStar } from "react-icons/ai";
import bannerImg1 from "./images/bag.png";
import bannerImg2 from "./images/nike-black.png";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import BorderAllIcon from "@mui/icons-material/BorderAll";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

export const slides = [
  {
    title: "Fashionable Collection",
    description: "  MuiBox-root css-aa19x3 ",
    image: bannerImg1,
    link: "/products",
  },
  {
    title: "Fashionable Collection",
    description: "  MuiBox-root css-aa19x3 ",
    image: bannerImg2,
    link: "/products",
  },
];

export const catergories = [
  "Mobile",
  "Laptop",
  "Car",
  "Bag",
  "Clothes",
  "Machine",
];

export const ratingsData = ["4", "3", "2", "1"];

export const dropdownOptions = [
  {
    icon: <PersonOutlinedIcon />,
    name: "Profile",
    path: "/profile",
  },

  {
    icon: <ShoppingBagOutlinedIcon />,
    name: "Orders",
    path: "/orders",
  },
  {
    icon: <FavoriteBorderOutlinedIcon />,
    name: "Whistlist",
    path: "#",
  },
];

export const BackdropStyle = {
  opacity: "1",
  background: "white",
  zIndex: "11",
  backdropFilter: "blur(2px)",
  position: "fixed",
  top: "0px",
  height: "100vh",
  width: "100%",
  transition: "opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
};
