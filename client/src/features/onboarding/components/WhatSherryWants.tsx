import { Box, Button, Stack, Typography } from "@mui/material";
import comicBg from "../../../assets/images/comic-bg.webp";
import PictureCard from "../../../components/ui/PictureCard";
import { ArrowForward } from "@mui/icons-material";
import Page from "../../../components/layout/Page";
import BottomElement from "../../../components/ui/BottomElement";


const WhatSherryWants = ({handleNextPage}:{handleNextPage:()=>void}) => {
  return (
    <Page>
      <Stack padding={"0 16px"}>
        <Typography marginTop={"40px"} variant="h1" textAlign={"center"}>
          What Sherry Wants?
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
        <Typography
          variant="12-400"
          component={"p"}
          textAlign={"center"}
          marginTop={"23px"}
        >
          “A game of choices , every decision comes with shift in revenue and
          trust.”
        </Typography>
      </Stack>
      <BottomElement>
      <Button
        variant="contained"
        endIcon={<ArrowForward />}
        onClick={handleNextPage}
        sx={{
          padding: "12px",
          bgcolor: "#fff",
          color: "#000",
          borderRadius: "0",
          width: "100%",
        }}
      >
        Meet Others
      </Button></BottomElement>
    </Page>
  );
};

export default WhatSherryWants;

const Content1 = () => {
  return (
    <Box marginLeft={"50%"}>
      <Typography variant="20-600" component={"p"}>
        Hi! <br /> I am Sherry...
      </Typography>
      <Typography variant="16-400" component={"p"}>
        Your line manager.
      </Typography>{" "}
    </Box>
  );
};
const Content2 = () => {
  return (
    <Box>
      <Typography variant="16-400" component={"p"}>
        Your Goal is to
        <br />
        Achieve <b>Rs. 10,000,000</b>
        <br /> in revenue
      </Typography>{" "}
    </Box>
  );
};
const Content3 = () => {
  return (
    <Box>
      <Typography variant="16-400" component={"p"} marginLeft={"50%"}>
        and
        <br />
        Maintain <b>100% trust</b>
        <br /> with the bank
      </Typography>{" "}
    </Box>
  );
};
