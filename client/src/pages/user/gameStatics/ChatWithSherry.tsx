import { Box, Stack, Typography } from "@mui/material";
import Page from "../../../components/layout/Page";
import PictureCard from "../../../components/ui/PictureCard";
// import comicBg froms "../../../assets/images/comic-bg.webp";
import BottomElement from "../../../components/ui/BottomElement";
import FullwidthButton from "../../../components/ui/FullwidthButton";
import useNavigateWithSound from "../../../features/sound/hooks/useNavigateWithSound";
import chatBg from "../../../assets/images/backgrounds/chat-bg.webp";
import chatWithSherryBg1 from "../../../assets/images/backgrounds/chat-with-sherry-bg-1.webp";
import chatWithSherryBg2 from "../../../assets/images/backgrounds/chat-with-sherry-bg-2.webp";
import Row from "../../../components/utility/Row";
import MessageBox from "../../../components/ui/MessageBox";
import { motion } from "framer-motion";
import ScrollToTop from "../../../components/utility/ScrollToTop";

const ChatWithSherry = () => {
  const navigateWithSound = useNavigateWithSound();
  return (
    <Page sx={{ background: `url(${chatBg})`, backgroundSize: "contain" }}>
      <ScrollToTop behavior="instant" />
      <Stack padding={"0 20px"}>
        <Typography marginTop={"40px"} variant="h1">
          Let’s see what Sherry has to say
        </Typography>

        <Stack marginTop={"38px"} gap={"10px"}>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <PictureCard
              sx={{ minHeight: "130px", backgroundSize: "cover" }}
              image={chatWithSherryBg1}
              content={<Content1 />}
            />
          </motion.div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <PictureCard
              sx={{
                minHeight: "130px",
                backgroundSize: "cover",
                backgroundPosition: "100% 100%",
              }}
              image={chatWithSherryBg2}
              content={<Content2 />}
            />
          </motion.div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.5 }}
          >
            <PictureCard
              sx={{ minHeight: "130px", backgroundSize: "cover" }}
              image={chatWithSherryBg1}
              content={<Content3 />}
            />
          </motion.div>
        </Stack>
      </Stack>
      <BottomElement>
        <Stack gap={"4px"}>
          {/* <FullwidthButton
            value="Back To Omar"
            icon="PREV"
            handleOnClick={() => navigateWithSound("/user/chats")}
            sx={{ fontSize: "1.25rem", padding: "20px" }}
          /> */}
          <FullwidthButton
            value="Continue"
            icon="NEXT"
            handleOnClick={() => navigateWithSound("/user/results/")}
            sx={{
              fontSize: "1.25rem",
              padding: "20px",
              bgcolor: "#fff",
              color: "#000",
            }}
          />
        </Stack>
      </BottomElement>
    </Page>
  );
};

export default ChatWithSherry;

const Content1 = () => {
  return (
    <Row sx={{ color: "#000", height: "150px" }}>
      <motion.div
        initial={{ x: 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          duration: 1.5,
          delay: 0.7,
          type: "spring",
          bounce: 0.7,
        }}
        style={{ marginLeft: "auto" }}
      >
        <MessageBox
          position="LEFT"
          mode="HORIZONTAL"
          sx={{ width: "170px", padding: "8px" }}
          messageContent={
            <>
              <Typography fontSize={"12px"} fontWeight={"500"}>
                Hi Sherry!
                <br />
                Need to discuss a client transaction.
              </Typography>
            </>
          }
        />
        <Box
          bgcolor={"#fff"}
          border={"1px solid #000"}
          mt={"4px"}
          padding={"8px"}
        >
          <Typography fontSize={"12px"} fontWeight={"500"}>
            Quick call possible?
          </Typography>
        </Box>
      </motion.div>
    </Row>
  );
};
const Content2 = () => {
  return (
    <Row sx={{ color: "#000", height: "150px" }}>
      <motion.div
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5, delay: 1.2, type: "spring", bounce: 0.7 }}
      >
        <MessageBox
          position="RIGHT"
          mode="HORIZONTAL"
          sx={{ width: "160px", padding: "8px" }}
          messageContent={
            <>
              <Typography fontSize={"12px"} fontWeight={"500"}>
                Hey, I’m at an offsite — might not be available for a few days.
                Can it wait?
              </Typography>
            </>
          }
        />
        <Box
          bgcolor={"#fff"}
          border={"1px solid #000"}
          mt={"4px"}
          padding={"8px"}
          maxWidth={"160px"}
        >
          <Typography fontSize={"12px"} fontWeight={"500"}>
            Also, what’s going on with your work? No movement for 15 days?
          </Typography>
        </Box>
      </motion.div>
    </Row>
  );
};
const Content3 = () => {
  return (
    <Row sx={{ color: "#000", height: "150px" }}>
      <motion.div
        initial={{ x: 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5, delay: 1.7, type: "spring", bounce: 0.7 }}
        style={{ marginLeft: "auto" }}
      >
        <MessageBox
          position="LEFT"
          mode="HORIZONTAL"
          sx={{ width: "170px", padding: "8px" }}
          messageContent={
            <>
              <Typography fontSize={"12px"} fontWeight={"500"}>
                Nothing super urgent. Working on something promising.
              </Typography>
            </>
          }
        />
        <Box
          bgcolor={"#fff"}
          border={"1px solid #000"}
          mt={"4px"}
          padding={"8px"}
          maxWidth={"160px"}
        >
          <Typography fontSize={"12px"} fontWeight={"500"}>
            Hoping to get back on track with this one. Will connect when you're
            back.
          </Typography>
        </Box>
      </motion.div>
    </Row>
  );
};
