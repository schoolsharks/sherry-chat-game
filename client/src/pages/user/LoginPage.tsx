import { Stack, Typography } from "@mui/material";
import LoginForm from "../../features/auth/components/LoginForm";
import Page from "../../components/layout/Page";
import Row from "../../components/utility/Row";
// import IdfcLogo from "../../components/ui/IdfcLogo";
import chatBg from "../../assets/images/backgrounds/chat-bg.webp";
// import useNavigateWithSound from "../../features/sound/hooks/useNavigateWithSound";
import ScrollToTop from "../../components/utility/ScrollToTop";

const LoginPage = () => {
  // const navigateWithSound = useNavigateWithSound();
  return (
    <Page sx={{background:`url(${chatBg})`,backgroundSize:"contain"}}>
      <ScrollToTop behavior="instant"/>
      <Row sx={{ justifyContent: "space-between",alignItems:"center",marginTop:"48px",padding:"0 20px" }}>
        <Typography variant="h1">
          Login
        </Typography>
        {/* <Box onClick={() => navigateWithSound("/user/onboarding/1")}>
            <IdfcLogo />
          </Box> */}
      </Row>
      <Stack marginTop={"50px"} flex={1}>
        <LoginForm />
      </Stack>
    </Page>
  );
};

export default LoginPage;
