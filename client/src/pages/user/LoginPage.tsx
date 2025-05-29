import { Stack, Typography } from "@mui/material";
import LoginForm from "../../features/auth/components/LoginForm";
import Page from "../../components/layout/Page";

const LoginPage = () => {
  return (
    <Page>
      <Typography variant="h1" marginTop={"48px"} marginLeft={"20px"}>
        Login
      </Typography>
      <Stack marginTop={"50px"} flex={1}>
        <LoginForm />
      </Stack>
    </Page>
  );
};

export default LoginPage;
