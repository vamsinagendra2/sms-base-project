import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./screens/Homepage";
import Messages from "./screens/Messages";
import Profile from "./screens/ProfileDetails";
import SendMessage from "./screens/SendMessage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/profile/:id" element={<Profile/>} />
      <Route path="/send" element={<SendMessage/>} />
      <Route path="/messages" element={<Messages/>} />
    </Routes>
  );
}

export default App;
