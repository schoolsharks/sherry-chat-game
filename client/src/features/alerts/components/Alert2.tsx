import {
  IconButton,
  Box,
  Stack,
  Typography,
  useTheme,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import Page from "../../../components/layout/Page";
import IdfcLogo from "../../../components/ui/IdfcLogo";
import { motion } from "framer-motion";
import Row from "../../../components/utility/Row";
import { ChevronDown, Volume2 } from "lucide-react";
import BottomElement from "../../../components/ui/BottomElement";
import FullwidthButton from "../../../components/ui/FullwidthButton";
import SemiTopCard from "../../../components/ui/SemiTopCard";
import FlagsIndicator from "../../../components/ui/FlagsIndicator";
import chatBg from "../../../assets/images/backgrounds/chat-bg.webp";
import useNavigateWithSound from "../../sound/hooks/useNavigateWithSound";

const Alert2 = ({ handleNextPage }: { handleNextPage: () => void }) => {
  const theme = useTheme();
  const navigateWithSound = useNavigateWithSound();
  return (
    <Page sx={{ background: `url(${chatBg})`, backgroundSize: "contain" }}>
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
              <IconButton>
                <Volume2 />
              </IconButton>
              <Box onClick={()=>navigateWithSound("/user/onboarding/1")} sx={{cursor:"pointer"}}>
              <IdfcLogo />
              </Box>
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

export default Alert2;

const CardTopContent = () => {
  return (
    <Stack alignItems={"center"} position={"relative"} padding={"48px 20px"}>
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          duration: 0.5,
          delay: 0.6,
          type: "spring",
          stiffness: 120,
        }}
      >
        <FlagsIndicator flags={0} variant="dark" flagSize="80px" />
      </motion.div>
    </Stack>
  );
};

const CardBottomContent = () => {
  return (
    <Box color={"#000"} margin={"30px 0"} padding={"0 20px"}>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.7 }}
      >
        <Typography component={"p"} variant="25-700">
          No Risk Indicators
        </Typography>
        <Typography component={"p"} variant="18-400">
          <b>No Red Flags</b> — that’s a good sign.
        </Typography>
      </motion.div>
    </Box>
  );
};
