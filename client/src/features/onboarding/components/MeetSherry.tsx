import { Box, Stack, Typography } from "@mui/material";
import bgRed1 from "../../../assets/images/backgrounds/red-bg-1.webp";
import PictureCard from "../../../components/ui/PictureCard";
import Page from "../../../components/layout/Page";
import BottomElement from "../../../components/ui/BottomElement";
import FullwidthButton from "../../../components/ui/FullwidthButton";
import meetSherryGraphic1 from "../../../assets/images/meet-sherry-graphic-1.webp";
import meetSherryGraphic2 from "../../../assets/images/meet-sherry-graphic-2.webp";
import meetSherryGraphic3 from "../../../assets/images/meet-sherry-graphic-3.webp";
import { motion } from "framer-motion";

const MeetSherry = ({ handleNextPage }: { handleNextPage: () => void }) => {
  return (
    <Page>
      <Stack padding={"0 16px"}>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Typography marginTop={"40px"} variant="h1">
            Meet Sherry
          </Typography>
        </motion.div>
        
        <Stack marginTop={"38px"} gap={"10px"}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <PictureCard
              sx={{ minHeight: "130px", position: "relative",overflow:"hidden" }}
              image={bgRed1}
              content={<Content1 />}
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
          >
            <PictureCard
              sx={{ minHeight: "130px", position: "relative",overflow:"hidden" }}
              image={bgRed1}
              content={<Content2 />}
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 2.0 }}
          >
            <PictureCard
              sx={{ minHeight: "130px", position: "relative",overflow:"hidden" }}
              image={bgRed1}
              content={<Content3 />}
            />
          </motion.div>
        </Stack>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 2.8 }}
        >
          <Typography
            variant="12-400"
            component={"p"}
            textAlign={"center"}
            marginTop={"23px"}
          >
            "A game of choices , every decision comes with shift in revenue and
            trust."
          </Typography>
        </motion.div>
      </Stack>
      
      <BottomElement>
        <FullwidthButton
          icon="NEXT"
          value="Meet Others"
          handleOnClick={handleNextPage}
          sx={{ fontSize: "1.25rem", padding: "20px" }}
        />
      </BottomElement>
    </Page>
  );
};

export default MeetSherry;

const Content1 = () => {
  return (
    <>
      {/* Image animation - comes from right */}
      <motion.img
        src={meetSherryGraphic1}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 1.2 }}
        style={{
          position: "absolute",
          height: "100%",
          bottom: "0",
          right: "3%",
        }}
      />
      
      {/* Text box animation */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 1.6 }}
      >
        <Box
          bgcolor={"#ffffff"}
          color={"#000"}
          marginRight={"40%"}
          padding={"8px 16px"}
          border={"2px solid #000"}
        >
          <Typography variant="20-600" component={"p"} lineHeight={"24px"}>
            Hi! <br /> I am Sherry...
          </Typography>
          <Typography variant="16-400" component={"p"}>
            Your line manager.
          </Typography>
        </Box>
      </motion.div>
    </>
  );
};

const Content2 = () => {
  return (
    <>
      {/* Image animation - comes from left */}
      <motion.img
        src={meetSherryGraphic2}
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 1.8 }}
        style={{
          position: "absolute",
          height: "100%",
          bottom: "0",
          left: "3%",
        }}
      />
      
      {/* Text box animation */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 2.2 }}
      >
        <Box
          bgcolor={"#ffffff"}
          color={"#000"}
          marginLeft={"35%"}
          padding={"8px 16px"}
          border={"2px solid #000"}
        >
          <Typography variant="16-400" component={"p"} textAlign={"right"}>
            Your Goal is to
            <br />
            Achieve <b>₹10,000,000</b>
            <br /> in revenue
          </Typography>
        </Box>
      </motion.div>
    </>
  );
};

const Content3 = () => {
  return (
    <>
      {/* Image animation - comes from right */}
      <motion.img
        src={meetSherryGraphic3}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 2.4 }}
        style={{
          position: "absolute",
          height: "100%",
          bottom: "0",
          right: "3%",
        }}
      />
      
      {/* Text box animation */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 2.8 }}
      >
        <Box
          bgcolor={"#ffffff"}
          color={"#000"}
          marginRight={"40%"}
          padding={"8px 16px"}
          border={"2px solid #000"}
        >
          <Typography variant="16-400" component={"p"}>
            and
            <br />
            Maintain <b>100% trust</b>
            <br /> with the bank
          </Typography>
        </Box>
      </motion.div>
    </>
  );
};