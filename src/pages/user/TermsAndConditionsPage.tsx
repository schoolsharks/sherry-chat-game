import { Box, Typography, useTheme } from "@mui/material";
import Page from "../../components/layout/Page";
import BackButton from "../../components/ui/BackButton";
import Row from "../../components/utility/Row";

const TermsAndConditions = () => {
  const theme=useTheme()
  return (
    <Page>
      <Row sx={{marginTop:"40px"}}>
        <BackButton />
        <Typography variant="h1">Terms & Conditions</Typography>
      </Row>
      <Box padding={"20px"} margin={"50px 20px 0"} bgcolor={theme.palette.sysgrey.secondary}>
        <Typography variant="16-400">
          This game is designed for fun and educational purposes only! 
          <br /><br />
          No real data will be collected, stored, or shared during the game. 
          <br /><br />
          All inputs will be erased after the game concludes unless you explicitly request to stay connected for follow-up discussions or insights. 
          <br /><br />
          Enjoy the experience without any worries!
        </Typography>
      </Box>
    </Page>
  );
};

export default TermsAndConditions;
