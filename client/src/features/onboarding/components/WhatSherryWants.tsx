import { Box, Typography, useTheme } from "@mui/material";
import FullwidthButton from "../../../components/ui/FullwidthButton";
import BottomElement from "../../../components/ui/BottomElement";
import Page from "../../../components/layout/Page";
// import backgroundRays from "../../../assets/images/background_rays.webp";
// import "./WhatSherryWants.css";
import girlGraphic from "../../../assets/images/home_page_graphic.webp";
import { motion } from "framer-motion";
import homeBg from "../../../assets/images/backgrounds/home-bg.webp";
import Row from "../../../components/utility/Row";
import IdfcLogo from "../../../components/ui/IdfcLogo";

const WhatSherryWants = ({
  handleNextPage,
}: {
  handleNextPage: () => void;
}) => {
  const theme = useTheme();

  return (
    <Page sx={{ overflow: "hidden", width: "100%", position: "relative" }}>
      <Row sx={{justifyContent:"flex-end"}}>
        <IdfcLogo sx={{margin:"48px 20px 0 0",zIndex:"2",position:"relative"}}/>
      </Row>
      <Box sx={{ margin: "auto" }}>
        <Box
          sx={{
            position: "relative",
            zIndex: "1",
            width: "90%",
            margin: "60px auto 0",
          }}
        >
          {/* White border box with bounce animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.6,
              delay: 0.5,
              type: "spring",
              bounce: 0.5,
            }}
            style={{
              border: "30px solid white",
              background: theme.palette.primary.main,
              width: "100%",
              height: "auto",
              aspectRatio: "1.5",
              zIndex: "1",
            }}
          />

          {/* Girl graphic with bounce animation after delay */}
          <motion.img
            src={girlGraphic}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.6,
              delay: 0.8,
              type: "spring",
              bounce: 0.4,
            }}
            onAnimationComplete={() => {
              console.log("animation completed");
            }}
            style={{
              position: "absolute",
              width: "100%",
              bottom: "0",
            }}
          />
        </Box>

        <Box
          textAlign={"center"}
          padding={"20px"}
          position={"relative"}
          zIndex={2}
        >
          {/* First text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.5 }}
          >
            <Typography variant="16-400" component={"p"}>
              IDFC FIRST Bank presents
            </Typography>
          </motion.div>

          {/* Second text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.7 }}
          >
            <Typography variant="32-700" component={"p"}>
              What Sherry Wants?
            </Typography>
          </motion.div>

          {/* Third text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.9 }}
          >
            <Typography variant="12-400" component={"p"}>
              "A game of choices , every decision comes with shift in revenue
              and trust."
            </Typography>
          </motion.div>
        </Box>
      </Box>

      {/* Background rays with linear opacity animation */}
      <motion.img
        src={homeBg}
        className="bg-rays"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1,
          delay: 1.2,
          ease: "linear",
        }}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          top: "0",
          left: "0",
        }}
      />
      {/* <motion.img
        src={backgroundRays}
        className="bg-rays"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ 
          duration: 1, 
          delay: 1.2, 
          ease: "linear" 
        }}
        style={{
          position: "absolute",
          width: "170%",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      /> */}

      <BottomElement>
        <FullwidthButton
          icon="NEXT"
          value="Next"
          handleOnClick={handleNextPage}
          sx={{
            fontSize: "1.25rem",
            padding: "20px",
          }}
        />
      </BottomElement>
    </Page>
  );
};

export default WhatSherryWants;
