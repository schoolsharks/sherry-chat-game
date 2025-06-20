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
// import IdfcLogo from "../../../components/ui/IdfcLogo";
import Row from "../../../components/utility/Row";
import { ChevronDown, Home } from "lucide-react";
import chatBg from "../../../assets/images/backgrounds/chat-bg.webp";
import BottomElement from "../../../components/ui/BottomElement";
import FullwidthButton from "../../../components/ui/FullwidthButton";
import SemiTopCard from "../../../components/ui/SemiTopCard";
import cardGraphic from "../../../assets/images/meet-sherry-graphic-1.webp";
import MessageBox from "../../../components/ui/MessageBox";
import "./Alert.css";
import useNavigateWithSound from "../../sound/hooks/useNavigateWithSound";
import ScrollToTop from "../../../components/utility/ScrollToTop";
import SoundToggleButton from "../../sound/components/SoundToggleButton";

const Alert1 = ({ handleContinue }: { handleContinue: () => void }) => {
  const theme = useTheme();
  const navigateWithSound = useNavigateWithSound();
  return (
    <Page sx={{ background: `url(${chatBg})`, backgroundSize: "contain" }}>
      <ScrollToTop behavior="instant" />

      <Stack
        sx={{
          width: "100%",
          flex: 1,
          background: "linear-gradient(to bottom, transparent, #0000009a)",
        }}
      >
        <Box padding={"0 30px"} marginTop={"24px"}>
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Row sx={{ justifyContent: "space-between" }}>
              <IconButton onClick={()=> navigateWithSound("/user/onboarding/1")}>
                <Home />
              </IconButton>
              <SoundToggleButton/>
              {/* <IconButton>
                <Volume2 />
              </IconButton> */}
              {/* <Box
                onClick={() => navigateWithSound("/user/onboarding/1")}
                sx={{ cursor: "pointer" }}
              >
                <IdfcLogo />
              </Box> */}
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
                topColor={theme.palette.primary.main}
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
            <Accordion sx={{ bgcolor: theme.palette.primary.main }}>
              <AccordionSummary sx={{ marginTop: "24px" }}>
                <Row
                  sx={{
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <Typography
                    component={"p"}
                    fontSize={"20px"}
                    fontWeight={"700"}
                    lineHeight={"32px"}
                  >
                    Have a look at your progress
                  </Typography>

                  <ChevronDown />
                </Row>
              </AccordionSummary>
              <AccordionDetails>
                <Row sx={{ justifyContent: "space-between" }}>
                  <Typography fontSize={"20px"} fontWeight={"600"}>
                    Trust
                  </Typography>
                  <Typography fontSize={"20px"} fontWeight={"600"}>
                    Revenue
                  </Typography>
                </Row>
                <Row sx={{ gap: "5px" }}>
                  <Box padding={"16px"} bgcolor={"#fff"} color="#000" flex={1}>
                    <Typography component={"p"} variant="20-600">
                      Your
                    </Typography>
                    <Typography fontSize={"24px"} fontWeight={"800"}>
                      50%
                    </Typography>
                  </Box>
                  <Box
                    padding={"16px"}
                    bgcolor={theme.palette.sysgrey.secondary}
                    flex={1}
                    textAlign={"right"}
                  >
                    <Typography component={"p"} variant="20-600">
                      Your
                    </Typography>
                    <Typography fontSize={"24px"} fontWeight={"800"}>
                      ₹3,90,000
                    </Typography>
                  </Box>
                </Row>
                <Row sx={{ gap: "5px", marginTop: "5px" }}>
                  <Box
                    padding={"16px"}
                    bgcolor={"#fff"}
                    color={"#000"}
                    flex={1}
                  >
                    <Typography component={"p"} variant="20-600">
                      Mira
                    </Typography>
                    <Typography fontSize={"24px"} fontWeight={"800"}>
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
                    <Typography fontSize={"24px"} fontWeight={"800"}>
                      ₹2,50,000
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
            handleOnClick={handleContinue}
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
            messageContent={
              <Typography
                textAlign={"center"}
                color="#000"
                fontSize={"20px"}
                fontWeight={"600"}
              >
                Well done!
              </Typography>
            }
            position="RIGHT"
            sx={{
              width: "150px",
              height: "44px",
              marginRight: "40px",
              padding: "8px 16px",
            }}
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
          <Box
            component={"img"}
            src={cardGraphic}
            height={"140px"}
            marginTop={"12px"}
            marginLeft={"12px"}
          />
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
          You're off to a smart <br />
          start!
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
