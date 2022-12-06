import { styled } from "@mui/system";
import Navbar from "./Navbar";

const PageShellStyled = styled('div')({
  width: "100%",
  height: "100vh",
  // backgroundImage: `url(${home})`,
});

function PageShell({ children }) {
  return (
    <PageShellStyled>
      <Navbar/>
      { children }
    </PageShellStyled>
  )
}

export default PageShell;