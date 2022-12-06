import { Button, Typography } from "@mui/material";
import { styled } from "@mui/system";
import PageShell from "../components/PageShell";
import profile from "../assets/profile.jpeg"
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getUserById } from "../services/service";

const Container = styled('div')(({ theme }) => ({
  width: 400,
  height: 400,
  borderRadius: 10,
  margin: "90px auto",
  paddingTop: 40,
  backgroundColor: "#f5f5f5",
  textAlign: "center",
  [theme.breakpoints.down("md")]: {
    width: 300,
  },
}));
const Image = styled('div')(({ theme }) => ({
  width: 150,
  height: 150,
  borderRadius: "50%",
  margin: "0px auto",
  backgroundColor: "white",
  overflow: "hidden"
}));

const ContactImage = styled('img')(({ theme }) => ({
  width: "100%",
  marginTop: 10,
}));

const Name = styled(Typography)(({ theme }) => ({
  marginTop: 30,
  fontWeight: 600,
  fontFamily: "Carme, sans-serif",
}));
const Phone = styled(Name)(({ theme }) => ({
  marginTop: 10,
  fontWeight: 400,
}));

const SendButton = styled(Button)(({ theme }) => ({
  width: 160,
  height: 40,
  borderRadius: 40,
  marginTop: 40,
  fontWeight: 600,
  backgroundColor: "#38b3f5",
  color: "white",
  "&: hover": {
    backgroundColor: "#0296e6"
  }
}));

function Profile() {

  const navigate = useNavigate();

  let { id } = useParams();

  const [user, setUser] = useState();

  const handleSend = (column) => {
    navigate("/send");
  };

  useEffect(() => {
    async function fetch(){

      const userDoc = await getUserById(id);

      setUser(userDoc);

      localStorage.setItem("user",JSON.stringify(userDoc));
    }
    fetch();
  },[])

  return (
    <PageShell>
      <Container>
        <Image>
          <ContactImage src={profile} />
        </Image>
        <Name variant="h5">{ user ? user.firstName + " " + user.lastName : ""}</Name>
        <Phone variant="h6">{user ? user.phone : ""}</Phone>
        <SendButton onClick={handleSend}>Send Message</SendButton>
      </Container>
    </PageShell>
  )
}

export default Profile;