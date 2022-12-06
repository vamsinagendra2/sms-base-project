
import { IconButton, Typography } from "@mui/material";
import { styled } from "@mui/system"
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import logo from "../assets/logo.png"
import { NavLink, useNavigate } from "react-router-dom";

const NavBarContainer = styled('div')(({ theme }) => ({
  width: "100%",
  height: 100,
  display: "flex",
  alignItems: "center",
  position: "relative",
  backgroundColor: "#FAF9F6"
}));

export const LogoContainer = styled('div')(({ theme }) => ({
  minWidth: 253,
  height: 32,
  display: 'flex',
  alignItems: "center",
  marginLeft: 50,
  cursor: "pointer",
  [theme.breakpoints.down("lg")]: {
    width: 183,
    height: 24,
  },
  [theme.breakpoints.down("md")]: {
    width: 183,
    height: 32,
    marginLeft: 30,
  },
}));

export const LogoIcon = styled('img')(({ theme }) => ({
  height: 50,
  marginRight: 16,
  [theme.breakpoints.down("lg")]: {
    height: 40,
  }
}));

export const LogoTitle = styled(Typography)(({ theme }) => ({
  fontFamily: "Carme, sans-serif",
  fontWeight: 800,
  [theme.breakpoints.down("lg")]: {
    fontSize: 16
  }
}));

const LinkContainer = styled('div')(({ theme }) => ({
  height: 60,
  width: 700,
  display: "flex",
  alignItems: "center",
  marginLeft: "15%",
  [theme.breakpoints.down("md")]: {
    display: "none"
  },
}));
const LinkDiv = styled('div')(({ theme }) => ({
  padding: "0px 30px",
  justifyContent: "center",
  display: "flex",
  alignItems: "center",
  marginLeft: 10,
  cursor: "pointer"
}));
const Link = styled(NavLink)(({ theme }) => ({
  textDecoration: "none",
  fontSize: 20,
  fontFamily: "Carme, sans-serif",
  fontWeight: 600,
  color: "black"
}));

const BurgerIcon = styled(IconButton)(({theme})=>({
  width: 24,
  height: 24,
  position: "absolute",
  right: "35px",
  [theme.breakpoints.up("md")]: {
    display: "none"
  },
}));

export default function NavBar() {

  const links = [{
    name: "Contacts",
    route: "/"
  }, {
    name: "Messages",
    route: "/messages"
  }]

  const navigate = useNavigate();

  const handleHome = () => navigate("/");

  return (
    <NavBarContainer>
      <LogoContainer onClick={handleHome}>
        <LogoIcon src={logo} />
        <LogoTitle variant="h5">Service</LogoTitle>
      </LogoContainer>
      <LinkContainer>
        {
          links.map((link, i) => (
            <LinkDiv key={i}>
              <Link to={link.route}>{link.name}</Link>
            </LinkDiv>
          ))
        }
      </LinkContainer>
      <BurgerIcon>
        <MenuRoundedIcon/>
      </BurgerIcon>
    </NavBarContainer>
  )
}