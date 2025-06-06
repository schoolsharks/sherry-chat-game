import { IconButton, Box, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import Page from "../../../components/layout/Page";
import IdfcLogo from "../../../components/ui/IdfcLogo";
import Row from "../../../components/utility/Row";
import { Volume2 } from "lucide-react";
import bgRed2 from "../../../assets/images/backgrounds/bg-red-2.webp";
import BottomElement from "../../../components/ui/BottomElement";
import FullwidthButton from "../../../components/ui/FullwidthButton";
import SemiTopCard from "../../../components/ui/SemiTopCard";
import cardGraphic from "../../../assets/images/meet-sherry-graphic-1.webp";
import MessageBox from "../../../components/ui/MessageBox";

const Alert1 = ({ handleNextPage }: { handleNextPage: () => void }) => {
  return (
    <Page sx={{ background: `url(${bgRed2})`, backgroundSize: "contain" }}>
      
        <Stack
          sx={{
            width: "100%",
            flex: 1,
            background: "linear-gradient(to bottom, transparent, #0000009a)",
          }}
        >
          <Box padding={"0 20px"} marginTop={"24px"}>
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Row sx={{ justifyContent: "space-between" }}>
                <IconButton>
                  <Volume2 />
                </IconButton>
                <IdfcLogo />
              </Row>
            </motion.div>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Box marginTop={"40px"}>
                <SemiTopCard
                  topColor="#700009"
                  topContent={<CardTopContent />}
                  bottomContent={<CardBottomContent />}
                />
              </Box>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Box bgcolor={"#700009"} padding={"20px 28px"} marginTop={"48px"}>
                <Typography variant="25-700">Have a look at your progress</Typography>
              </Box>
            </motion.div>
          </Box>

         
            <BottomElement>
              <FullwidthButton
                value="Continue"
                icon="NEXT"
                handleOnClick={handleNextPage}
                sx={{
                  fontSize: "1.25rem",
                  padding: "20px",
                  bgcolor: "#fff",
                  color: "#000",
                }}
              />
            </BottomElement>
        </Stack>
    </Page>
  );
};

export default Alert1;

const CardTopContent = () => {
  return (
    <Box position={"relative"} padding={"20px 20px 0"} overflow={"hidden"}>
      <motion.div
        initial={{ x: 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.5 }}
      >
        <Row sx={{ justifyContent: "flex-end" }}>
          <MessageBox
            messageContent={<></>}
            position="RIGHT"
            sx={{ width: "200px", height: "44px" }}
          />
        </Row>
      </motion.div>
      
      <motion.div
        initial={{ x:-20, opacity: 0 }}
        animate={{ x:0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6, type: "spring", stiffness: 120 }}
      >
        <Row>
          <Box component={"img"} src={cardGraphic} height={"140px"} />
        </Row>
      </motion.div>
    </Box>
  );
};

const CardBottomContent = () => {
  return (
    <Box color={"#000"}>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.7 }}
      >
        <Typography component={"p"} variant="25-700">
          You're off to a smart start!
        </Typography>
      </motion.div>
      
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.7 }}
      >
        <Typography component={"p"} variant="18-400">
          You questioned a major anomaly right away — that's what sharp RMs do.
        </Typography>
      </motion.div>
    </Box>
  );
};