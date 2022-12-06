import { Typography } from "@mui/material";
import { styled } from "@mui/system";
import PageShell from "../components/PageShell";
import contact from "../assets/contact.jpg"
import ContactsTable from "../components/TableContacts";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getUsers } from "../services/service";

const Container = styled('div')({
  width: "80%",
  display: "flex",
  margin: "90px auto",
  justifyContent: "space-between"
})
const ContactList = styled('div')(({ theme }) => ({
  width: "50%",
  height: 600,
  margin: "0px auto",
  [theme.breakpoints.down("sm")]: {
    margin: "0px",
  },
}));

const Heading = styled(Typography)({
  fontSize: 25,
  fontWeight: 600,
  fontFamily: "Carme, sans-serif",
  marginBottom: 20,
});

const ContactImage = styled('img')(({ theme }) => ({
  width: 400,
  height: 400,
  borderRadius: "50%",
  [theme.breakpoints.down("lg")]: {
    display: "none"
  },
}));

function Home() {

  const [users, setUsers] = useState({});

  const navigate = useNavigate();

  const handleRowClick = (item) => {
    navigate("/profile/"+item?.phone);
  }

  useEffect(() => {
    async function fetch(){

      const usersList = await getUsers();

      setUsers(usersList);
    }
    fetch();
  },[])

  return (
    <PageShell>
      <Container>
        <ContactList>
          <Heading>
            Contacts List
          </Heading>
          {
            users.length ? <ContactsTable handleRowClick={handleRowClick} users={users}/> : <></>
          }
        </ContactList>
        <ContactImage src={contact} />
      </Container>
    </PageShell>
  )
}

export default Home;