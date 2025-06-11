import { Stack, Typography } from "@mui/material";
import LoginForm from "../../features/auth/components/LoginForm";
import Page from "../../components/layout/Page";
import Row from "../../components/utility/Row";
import IdfcLogo from "../../components/ui/IdfcLogo";
import chatBg from "../../assets/images/backgrounds/chat-bg.webp";

const LoginPage = () => {
  return (
    <Page sx={{background:`url(${chatBg})`,backgroundSize:"contain"}}>
      <Row sx={{ justifyContent: "space-between",alignItems:"center",marginTop:"48px",padding:"0 20px" }}>
        <Typography variant="h1">
          Login
        </Typography>
        <IdfcLogo />
      </Row>
      <Stack marginTop={"50px"} flex={1}>
        <LoginForm />
      </Stack>
    </Page>
  );
};

export default LoginPage;
