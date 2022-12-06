import { Button, TextField, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { useEffect, useState } from "react";
import PageShell from "../components/PageShell";
import { sendSms } from "../services/service";

const Container = styled('div')(({ theme }) => ({
  width: 300,
  height: 300,
  borderRadius: 10,
  margin: "90px auto",
  padding: 20,
  backgroundColor: "#f5f5f5",
  [theme.breakpoints.down("md")]: {
    width: 300,
  },
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
  width: 130,
  height: 40,
  borderRadius: 40,
  marginTop: 50,
  fontWeight: 600,
  backgroundColor: "#38b3f5",
  color: "white",
  display: "block",
  "&: hover": {
    backgroundColor: "#0296e6"
  }
}));

const Text = styled(TextField)(({ theme }) => ({
  width: 300,
  height: 100,
  marginTop: 30
}));

const Status = styled(Typography)(({ theme }) => ({
  marginTop: 20,
}));

function SendMessage() {

  const [user, setUser] = useState("");

  const [otp, setOtp] = useState("");

  const [text, setText] = useState("");

  const [error,] = useState(false);

  const [status, setStatus] = useState("");

  const handleSend = async () => {
    try{
      await sendSms({
        ...user,
        text
      })
      setStatus("Your message was sent successfully");
    }catch(e) {
      console.log(e);
    }
  }

  const otpGenerator = (length) => {
    let digits = '0123456789';
    let otp = '';
    for (let i = 0; i < length; i++) {
      otp += digits[Math.floor(Math.random() * 10)];
    }
    return otp;
  }

  const handleInput = (e) => {
    setText(e.target.value);
  }

  useEffect(() => {
    const newOtp = otpGenerator(6);

    setOtp(newOtp);

    setText(`Hi, Your OTP is ${newOtp}`);

    const doc = JSON.parse(localStorage.getItem("user"));

    setUser(doc);

  }, [])

  return (
    <PageShell>
      <Container>
        <Phone variant="h6">To: +91{user.phone}</Phone>
        {
          text ?
            <Text
              id="outlined-multiline-static"
              label="Message"
              multiline
              rows={4}
              value={text}
              onChange={handleInput}
            /> :
            <></>
        }
        <SendButton onClick={handleSend}>Send</SendButton>
        {
          status ? 
          <Status style={{color: error ? "red" : "green"}}>"{status}"</Status> : <></>
        }
      </Container>
    </PageShell>
  )
}

export default SendMessage;