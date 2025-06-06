import { IconButton, Box, Stack, Typography, useTheme } from "@mui/material";
import Page from "../../../components/layout/Page";
import IdfcLogo from "../../../components/ui/IdfcLogo";
import { motion } from "framer-motion";
import Row from "../../../components/utility/Row";
import { Volume2 } from "lucide-react";
import bgRed2 from "../../../assets/images/backgrounds/bg-red-2.webp";
import BottomElement from "../../../components/ui/BottomElement";
import FullwidthButton from "../../../components/ui/FullwidthButton";
import SemiTopCard from "../../../components/ui/SemiTopCard";
import FlagsIndicator from "../../../components/ui/FlagsIndicator";

const Alert2 = ({ handleNextPage }: { handleNextPage: () => void }) => {
  const theme = useTheme();
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
            <Box margin={"48px 0"}>
              <Typography variant="25-700">
                Have a look at your progress{" "}
              </Typography>
              <Row sx={{ justifyContent: "space-between", marginTop: "20px" }}>
                <Typography variant="24-700">Trust</Typography>
                <Typography variant="24-700">Revenue</Typography>
              </Row>
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
    <Box color={"#000"} marginTop={"40px"}>
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
