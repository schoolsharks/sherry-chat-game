import {
  IconButton,
  Box,
  Stack,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import Page from "../../../components/layout/Page";
import IdfcLogo from "../../../components/ui/IdfcLogo";
import Row from "../../../components/utility/Row";
import { Volume2 } from "lucide-react";
import chatBg from "../../../assets/images/backgrounds/chat-bg.webp";
import BottomElement from "../../../components/ui/BottomElement";
import FullwidthButton from "../../../components/ui/FullwidthButton";
import SemiTopCard from "../../../components/ui/SemiTopCard";
import cardGraphic from "../../../assets/images/meet-sherry-graphic-1.webp";
import MessageBox from "../../../components/ui/MessageBox";
import "./Alert.css"

const Alert1 = ({ handleNextPage }: { handleNextPage: () => void }) => {
  const theme = useTheme();
  return (
    <Page sx={{ background: `url(${chatBg})`, backgroundSize: "contain" }}>
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
            initial={{
              y: 30,
              opacity: 0,
              rotateY: 180,
              scale: 0.8,
              perspective: 1000,
            }}
            animate={{
              y: 0,
              opacity: 1,
              rotateY: 0,
              scale: 1,
            }}
            transition={{
              duration: 0.5,
              delay: 1,
              ease: "easeInOut",
            }}
            style={{
              perspective: 1000,
              transformStyle: "preserve-3d",
            }}
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
            transition={{ duration: 0.5, delay: 1.5 }}
          >
            <Accordion sx={{ bgcolor: "#700009"}}>
              <AccordionSummary sx={{ marginTop: "24px"}}>
                <Box>
                  <Typography component={"p"} fontSize={"25px"} fontWeight={"600"} lineHeight={"32px"}>
                    Have a look at your progress
                  </Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                <Row sx={{ gap: "5px", color: "#000" }}>
                  <Box padding={"16px"} bgcolor={"#fff"} flex={1}>
                    <Typography component={"p"} variant="20-600">
                      Your
                    </Typography>
                    <Typography component={"p"} variant="24-700">
                      50%
                    </Typography>
                  </Box>
                  <Box
                    padding={"16px"}
                    bgcolor={"#fff"}
                    flex={1}
                    textAlign={"right"}
                  >
                    <Typography component={"p"} variant="20-600">
                      Your
                    </Typography>
                    <Typography component={"p"} variant="24-700">
                      3,90,000
                    </Typography>
                  </Box>
                </Row>
                <Row sx={{ gap: "5px", marginTop: "5px" }}>
                  <Box
                    padding={"16px"}
                    bgcolor={theme.palette.sysgrey.secondary}
                    flex={1}
                  >
                    <Typography component={"p"} variant="20-600">
                      Mira
                    </Typography>
                    <Typography component={"p"} variant="24-700">
                      72%
                    </Typography>
                  </Box>
                  <Box
                    padding={"16px"}
                    bgcolor={theme.palette.sysgrey.secondary}
                    flex={1}
                    textAlign={"right"}
                  >
                    <Typography component={"p"} variant="20-600">
                      Mira
                    </Typography>
                    <Typography component={"p"} variant="24-700">
                      2,50,000
                    </Typography>
                  </Box>
                </Row>
              </AccordionDetails>
            </Accordion>
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
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          duration: 0.5,
          delay: 0.6,
          type: "spring",
          stiffness: 120,
        }}
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
