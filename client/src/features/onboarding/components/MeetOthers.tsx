import { Box, Stack, Typography } from "@mui/material";
import Page from "../../../components/layout/Page";
import BottomElement from "../../../components/ui/BottomElement";
import FullwidthButton from "../../../components/ui/FullwidthButton";
import { motion } from "framer-motion";
import ComicCard from "../../../components/ui/ComicCard";
import IdfcLogo from "../../../components/ui/IdfcLogo";
import { useState } from "react";
import CustomTypewriter from "../../../components/utility/Typewriter";
import youGraphic from "../../../assets/images/you.webp";
import miraGraphic from "../../../assets/images/mira.webp";
import omarGraphic from "../../../assets/images/omar.webp";
import ScrollToTop from "../../../components/utility/ScrollToTop";

const MeetOthers = ({ handleNextPage }: { handleNextPage: () => void }) => {
  return (
    <Page>
      <ScrollToTop behavior="instant" />

      <Stack padding={"0 16px"}>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: "40px",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h1">Meet Others</Typography>
          <IdfcLogo />
        </motion.div>

        <Stack marginTop={"38px"} gap={"10px"}>
          <ComicCard
            image={miraGraphic}
            messageContent={<Content1 />}
            imagePosition={{ right: 20 }}
            messagePosition={{ left: 20 }}
          />
          <ComicCard
            image={omarGraphic}
            messageContent={<Content2 />}
            imagePosition={{ left: 20 }}
            messagePosition={{ right: 20 }}
          />
          <ComicCard
            image={youGraphic}
            messageContent={<Content3 />}
            imagePosition={{ right: 20 }}
            messagePosition={{ left: 20 }}
          />
        </Stack>

        {/* <motion.div
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
        </motion.div> */}
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

export default MeetOthers;

const Content1 = () => {
  const [completionStates, setCompletionStates] = useState<boolean[]>([
    false,
    false,
  ]);

  const handleComplete = (index: number) => {
    setCompletionStates((prev) => {
      const newStates = [...prev];
      newStates[index] = true;
      return newStates;
    });
  };

  return (
    <Box minHeight={"115px"} width={"300px"}>
      <Typography variant="20-600" component={"p"} lineHeight={"24px"}>
        <CustomTypewriter
          strings={["Hi!<br/>I am Mira..."]}
          index={0}
          completionStates={completionStates}
          onComplete={handleComplete}
        />
      </Typography>
      <Typography variant="16-400" component={"p"} marginTop={"8px"}>
        <CustomTypewriter
          lineHeight="20px"
          speed={40}
          strings={[
            "Your peer, and maybe a little bit of competition. I close deals fast. Just make sure you don’t fall behind.",
          ]}
          index={1}
          completionStates={completionStates}
          onComplete={handleComplete}
        />
      </Typography>
    </Box>
  );
};

const Content2 = () => {
  const [completionStates, setCompletionStates] = useState<boolean[]>([
    false,
    false,
  ]);

  const handleComplete = (index: number) => {
    setCompletionStates((prev) => {
      const newStates = [...prev];
      newStates[index] = true;
      return newStates;
    });
  };

  return (
    <Box minHeight={"145px"} width={"240px"}>
      <Typography variant="20-600" component={"p"} lineHeight={"24px"}>
        <CustomTypewriter
          strings={["Hi!<br/>I am Omar..."]}
          index={0}
          completionStates={completionStates}
          onComplete={handleComplete}
        />
      </Typography>
      <Typography variant="16-400" component={"p"} marginTop={"8px"}>
        <CustomTypewriter
          lineHeight="22px"
          speed={40}
          strings={[
            "A long-time client. Friendly, fast-moving, and under a lot of pressure. I need things done, quickly. You trust me, right?",
          ]}
          index={1}
          completionStates={completionStates}
          onComplete={handleComplete}
        />
      </Typography>
    </Box>
  );
};

const Content3 = () => {
  const [completionStates, setCompletionStates] = useState<boolean[]>([
    false,
    false,
  ]);

  const handleComplete = (index: number) => {
    setCompletionStates((prev) => {
      const newStates = [...prev];
      newStates[index] = true;
      return newStates;
    });
  };

  return (
    <Box minHeight={"145px"} width={"240px"}>
      <Typography variant="20-600" component={"p"} lineHeight={"24px"}>
        <CustomTypewriter
          strings={["Hi!<br/>Its You...."]}
          index={0}
          completionStates={completionStates}
          onComplete={handleComplete}
        />
      </Typography>
      <Typography variant="16-400" component={"p"} marginTop={"8px"}>
        <CustomTypewriter
          lineHeight="22px"
          speed={40}
          strings={[
            "An ambitious Relationship Manager chasing targets, navigating tricky clients, and hoping for that big promotion. Let’s see if you can play it smart",
          ]}
          index={1}
          completionStates={completionStates}
          onComplete={handleComplete}
        />
      </Typography>
    </Box>
  );
};
