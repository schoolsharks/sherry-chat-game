import { Box } from "@mui/material";
import Page from "../../../components/layout/Page";
import ChatsSection from "./ChatsSection";
import Topbar from "./Topbar";
import { useState } from "react";

const ChatMain = () => {
  const [trust, setTrust] = useState(20);
  const [revenue, setRevenue] = useState(250000);


  return (
    <Page>
      <Box position={"sticky"} top={0} zIndex={100}>
        <Topbar trust={trust} revenue={revenue} />
      </Box>
      <ChatsSection trust={trust} revenue={revenue} setTrust={setTrust} setRevenue={setRevenue}/>
    </Page>
  );
};

export default ChatMain;
