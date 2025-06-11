import { Box, Stack, Typography } from "@mui/material";
import Page from "../../../components/layout/Page";
import PictureCard from "../../../components/ui/PictureCard";
// import comicBg froms "../../../assets/images/comic-bg.webp";
import BottomElement from "../../../components/ui/BottomElement";
import FullwidthButton from "../../../components/ui/FullwidthButton";
import comicBg from "../../../assets/images/backgrounds/red-bg-1.webp";
import useNavigateWithSound from "../../../features/sound/hooks/useNavigateWithSound";
import chatBg from "../../../assets/images/backgrounds/chat-bg.webp";
import Row from "../../../components/utility/Row";
import MessageBox from "../../../components/ui/MessageBox";
import youStartWithGraphic1 from "../../../assets/images/you-start-with-graphic-1.webp";
import youStartWithGraphic2 from "../../../assets/images/you-start-with-graphic-2.webp";
import { motion } from "framer-motion";
import ScrollToTop from "../../../components/utility/ScrollToTop";

const YouStartWith = () => {
  const navigateWithSound = useNavigateWithSound();
  return (
    <Page sx={{ background: `url(${chatBg})`, backgroundSize: "contain" }}>
      <ScrollToTop behavior="instant" />
      <Stack padding={"0 20px"}>
        <Typography marginTop={"40px"} variant="h1">
          You Start With...
        </Typography>

        <Stack marginTop={"38px"} gap={"10px"}>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <PictureCard
              sx={{ minHeight: "130px" }}
              image={comicBg}
              content={<Content1 />}
            />
          </motion.div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <PictureCard
              sx={{ minHeight: "130px" }}
              image={comicBg}
              content={<Content2 />}
            />
          </motion.div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.5 }}
          >
            <PictureCard
              sx={{ minHeight: "130px" }}
              image={comicBg}
              content={<Content3 />}
            />
          </motion.div>
        </Stack>
      </Stack>
      <BottomElement>
        <Box width={"100%"} height={"1px"} bgcolor={"#000"} />
        <FullwidthButton
          value="Start"
          icon="NEXT"
          handleOnClick={() => navigateWithSound("/user/chats")}
          sx={{ fontSize: "1.25rem", padding: "20px" }}
        />
      </BottomElement>
    </Page>
  );
};

export default YouStartWith;

const Content1 = () => {
  // const [completionStates, setCompletionStates] = useState<boolean[]>([false]);

  // const handleComplete = (index: number) => {
  //   setCompletionStates((prev) => {
  //     const newStates = [...prev];
  //     newStates[index] = true;
  //     return newStates;
  //   });
  // };
  return (
    <Box sx={{ color: "#000", height: "130px" }}>
      <motion.div
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          duration: 1.5,
          delay: 0.9,
          type: "spring",
          bounce: 0.6,
        }}
      >
        <MessageBox
          position="RIGHT"
          mode="HORIZONTAL"
          sx={{ width: "170px" }}
          messageContent={
            <>
              <Typography fontWeight={"500"} lineHeight={"20px"}>
                Journey starts from ₹ 2,50,000 in Revenue
              </Typography>
              {/* <CustomTypewriter
              index={0}
              sx={{ fontSize: "16px", fontWeight: "500" }}
              completionStates={completionStates}
              onComplete={handleComplete}
              strings={["Journey starts from ₹ 2,50,000 in Revenue"]}
            /> */}
            </>
          }
        />
      </motion.div>

      <motion.img
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 1.5,
          delay: 0.7,
          type: "spring",
          bounce: 0.6,
        }}
        src={youStartWithGraphic1}
        style={{ position: "absolute", width: "110px", bottom: 0, right: 0 }}
      />
    </Box>
  );
};
const Content2 = () => {
  // const [completionStates, setCompletionStates] = useState<boolean[]>([
  //   false,
  //   false,
  // ]);

  // const handleComplete = (index: number) => {
  //   setCompletionStates((prev) => {
  //     const newStates = [...prev];
  //     newStates[index] = true;
  //     return newStates;
  //   });
  // };
  return (
    <Row sx={{ color: "#000", height: "130px" }}>
      <motion.div
        initial={{ x: 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5, delay: 1.6, type: "spring", bounce: 0.7 }}
        style={{ marginLeft: "auto" }}
      >
        <MessageBox
          position="LEFT"
          mode="HORIZONTAL"
          sx={{ width: "160px" }}
          messageContent={
            <>
              <Typography fontSize={"16px"} fontWeight={"600"}>
                50% Trust Level
              </Typography>
              <Typography
                fontSize={"12px"}
                fontWeight={"300"}
                lineHeight={"16px"}
              >
                (Your client knows you, but doesn’t fully rely on you—yet.)
              </Typography>

              {/* <CustomTypewriter
              index={0}
              sx={{fontSize:"16px",fontWeight:"600"}}
              completionStates={completionStates}
              onComplete={handleComplete}
              strings={["50% Trust Level"]}
            />
            <CustomTypewriter
              index={0}
              sx={{fontSize:"12px",fontWeight:"500"}}
              completionStates={completionStates}
              onComplete={handleComplete}
              strings={["(Your client knows you, but doesn’t fully rely on you—yet.)"]}
            /> */}
            </>
          }
        />
      </motion.div>
      <motion.img
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5, delay: 1.2, type: "spring", bounce: 0.7 }}
        src={youStartWithGraphic2}
        style={{
          position: "absolute",
          width: "110px",
          bottom: 0,
          left: "12px",
        }}
      />
    </Row>
  );
};
const Content3 = () => {
  // const [completionStates, setCompletionStates] = useState<boolean[]>([
  //   false,
  //   false,
  // ]);

  // const handleComplete = (index: number) => {
  //   setCompletionStates((prev) => {
  //     const newStates = [...prev];
  //     newStates[index] = true;
  //     return newStates;
  //   });
  // };
  return (
    <Row sx={{ color: "#000", height: "130px" }}>
      <motion.div
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5, delay: 2.3, type: "spring", bounce: 0.7 }}
      >
        <MessageBox
          position="RIGHT"
          mode="HORIZONTAL"
          sx={{ width: "170px" }}
          messageContent={
            <>
              <Typography fontWeight={"500"} lineHeight={"20px"}>
                Journey starts from ₹ 2,50,000 in Revenue
              </Typography>
              {/* <CustomTypewriter
              index={0}
              sx={{ fontSize: "16px", fontWeight: "500" }}
              completionStates={completionStates}
              onComplete={handleComplete}
              strings={["Journey starts from ₹ 2,50,000 in Revenue"]}
            /> */}
            </>
          }
        />
      </motion.div>
      <motion.img
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5, delay: 1.7, type: "spring", bounce: 0.7 }}
        src={youStartWithGraphic1}
        style={{ position: "absolute", width: "110px", bottom: 0, right: 0 }}
      />
    </Row>
  );
};
