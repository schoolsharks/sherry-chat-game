import { Box, Stack, Typography } from "@mui/material";
import Page from "../../../components/layout/Page";
import BottomElement from "../../../components/ui/BottomElement";
import FullwidthButton from "../../../components/ui/FullwidthButton";
import meetSherryGraphic1 from "../../../assets/images/meet-sherry-graphic-1.webp";
import meetSherryGraphic2 from "../../../assets/images/meet-sherry-graphic-2.webp";
import meetSherryGraphic3 from "../../../assets/images/meet-sherry-graphic-3.webp";
import { motion } from "framer-motion";
import ComicCard from "../../../components/ui/ComicCard";
// import IdfcLogo from "../../../components/ui/IdfcLogo";
import { useState } from "react";
import CustomTypewriter from "../../../components/utility/Typewriter";
import ScrollToTop from "../../../components/utility/ScrollToTop";
// import useNavigateWithSound from "../../sound/hooks/useNavigateWithSound";


const MeetSherry = ({ handleNextPage }: { handleNextPage: () => void }) => {
  // const navigateWithSound = useNavigateWithSound();
  return (
    <Page>
      <ScrollToTop behavior="instant" />
      <Stack padding={"0 16px"}>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{display:"flex",alignItems:"center",marginTop:"40px",justifyContent:"space-between"}}
        >
          <Typography  variant="h1">
            Meet Sherry
          </Typography>
          {/* <Box onClick={() => navigateWithSound("/user/onboarding/1")}>
            <IdfcLogo />
          </Box> */}
        </motion.div>

        <Stack marginTop={"38px"} gap={"10px"}>
          <ComicCard
            image={meetSherryGraphic1}
            messageContent={<Content1 />}
            imagePosition={{ right: 20 }}
            messagePosition={{ left: 20 }}
          />
          <ComicCard
            image={meetSherryGraphic2}
            messageContent={<Content2 />}
            imagePosition={{ left: 20 }}
            messagePosition={{ right: 20 }}
          />
          <ComicCard
            image={meetSherryGraphic3}
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

export default MeetSherry;

const Content1 = () => {
  const [completionStates, setCompletionStates] = useState<boolean[]>([
    false, false,
  ]);

  const handleComplete = (index: number) => {
    setCompletionStates((prev) => {
      const newStates = [...prev];
      newStates[index] = true;
      return newStates;
    });
  };

  return (
    <Box paddingRight={"54px"} minHeight={"75px"} minWidth={"240px"}>
      <Typography variant="20-600" component={"p"} lineHeight={"24px"}>
        <CustomTypewriter
          strings={["Hi! <br /> I am Sherry..."]}
          index={0}
          completionStates={completionStates}
          onComplete={handleComplete}
        />
      </Typography>
      <Typography variant="16-400" component={"p"}>
        <CustomTypewriter
          strings={["Your line manager."]}
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
  ]);

  const handleComplete = (index: number) => {
    setCompletionStates((prev) => {
      const newStates = [...prev];
      newStates[index] = true;
      return newStates;
    });
  };

  return (
    <Box paddingLeft="20px" minHeight={"90px"} minWidth={"240px"}>
      <Typography variant="20-600" component={"p"} textAlign={"right"}>
        <CustomTypewriter
          strings={["Your Goal is to <br />Achieve <b>₹10,00,000</b><br /> in revenue"]}
          index={0}
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
  ]);

  const handleComplete = (index: number) => {
    setCompletionStates((prev) => {
      const newStates = [...prev];
      newStates[index] = true;
      return newStates;
    });
  };

  return (
    <Box paddingRight={"0px"} minHeight={"90px"} minWidth={"250px"}>
      <Typography variant="20-600" component={"p"}>
        <CustomTypewriter
          strings={["and <br />Maintain <b>100% trust</b> with <br />the bank"]}
          index={0}
          completionStates={completionStates}
          onComplete={handleComplete}
        />
      </Typography>
    </Box>
  );
};