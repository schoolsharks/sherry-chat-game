import { Box } from "@mui/material";
import Page from "../../../components/layout/Page";
import ChatsSection from "./ChatsSection";
import Topbar from "./Topbar";

const ChatMain = () => {
  return (
    <Page>
      <Box position={"sticky"} top={0} zIndex={100}>
        <Topbar />
      </Box>
      <ChatsSection />
    </Page>
  );
};

export default ChatMain;
