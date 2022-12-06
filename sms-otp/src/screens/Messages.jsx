import { Typography } from "@mui/material";
import { styled } from "@mui/system";
import { useEffect, useState } from "react";
import PageShell from "../components/PageShell";
import { getMessages } from "../services/service";

const Container = styled('div')(({ theme }) => ({
  width: "70%",
  height: "auto",
  borderRadius: 10,
  margin: "90px auto",
  padding: 20,
  backgroundColor: "#f5f5f5",
  [theme.breakpoints.down("md")]: {
    width: 300,
  },
}));

const MessageBox = styled(Typography)(({ theme }) => ({
  width: "95%",
  height: "auto",
  marginTop: 20,
  backgroundColor: "white",
  display: "flex",
  alignItems: "center",
  padding: 20,
  justifyContent: "space-between"
}));
const Name = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  fontFamily: "Carme, sans-serif",
}));

const Phone = styled(Name)(({ theme }) => ({
  fontWeight: 400,
}));

const Otp = styled(Name)(({ theme }) => ({
  fontWeight: 400,
  fontFamily: "sans-serif"
}));

function Messages() {
  const [messages, setMessages] = useState([])

  useEffect(() => {
    async function fetch() {
      const messagesData = await getMessages();
      console.log(messagesData);
      setMessages(messagesData)
    }
    fetch();
  }, [])

  return (
    <PageShell>
      <Container>
        { messages?.length ?
          messages.map((message) => {
            let time = new Date(message.time).toISOString();
            return (
              <MessageBox>
                <Name variant="body1">{message.firstName + message.lastName}</Name>
                <Phone variant="caption">{message.phone}</Phone>
                <Otp>{message.text}</Otp>
                <Otp>{time}</Otp>
              </MessageBox>
            )
          }) : <></>
        }
      </Container>
    </PageShell>
  )
}

export default Messages;