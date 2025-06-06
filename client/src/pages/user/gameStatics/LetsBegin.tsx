import { Box, Stack, Typography } from "@mui/material";
import Page from "../../../components/layout/Page";
import PictureCard from "../../../components/ui/PictureCard";
// import comicBg froms "../../../assets/images/comic-bg.webp";
import BottomElement from "../../../components/ui/BottomElement";
import FullwidthButton from "../../../components/ui/FullwidthButton";
import comicBg from "../../../assets/images/backgrounds/red-bg-1.webp"
import useNavigateWithSound from "../../../features/sound/hooks/useNavigateWithSound";

const LetsBegin = () => {
  const navigateWithSound = useNavigateWithSound();
  return (
    <Page sx={{ bgcolor: "#fff" }}>
      <Stack padding={"0 20px"}>
        <Typography marginTop={"40px"} variant="h1" color="#000">
          You Start With...
        </Typography>

        <Stack marginTop={"38px"} gap={"10px"}>
          <PictureCard
            sx={{ minHeight: "130px" }}
            image={comicBg}
            content={<Content1 />}
          />
          <PictureCard
            sx={{ minHeight: "130px" }}
            image={comicBg}
            content={<Content2 />}
          />
          <PictureCard
            sx={{ minHeight: "130px" }}
            image={comicBg}
            content={<Content3 />}
          />
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

export default LetsBegin;

const Content1 = () => {
  return (
    <Box height={"100%"}>
      <Typography variant="10-300">You Start with...</Typography>
      <Typography marginTop="30px" variant="20-600" component={"p"}>
        Rs. 250,000 in <br />
        Revenue
      </Typography>
      <Typography variant="10-300" component={"p"}>
        (Your journey to Rs. 10 Million begins here.)
      </Typography>{" "}
    </Box>
  );
};
const Content2 = () => {
  return (
    <Box marginLeft={"10%"}>
      <Typography variant="20-600" component={"p"} textAlign={"right"}>
        50% Trust Level
      </Typography>
      <Typography variant="12-400" textAlign={"right"} component={"p"}>
        (Your client knows you, but doesn’t fully rely <br /> on you—yet.)
      </Typography>
    </Box>
  );
};
const Content3 = () => {
  return (
    <Box>
      <Typography variant="20-600" component={"p"}>
        0 Red Flags
      </Typography>
      <Typography variant="12-400" component={"p"}>
        (You’re clean—for now. Cross the line too often
        <br /> and it’s game over.)
      </Typography>
    </Box>
  );
};
