import { Box, Button, Stack, Typography } from "@mui/material";
import BackButton from "../../../components/ui/BackButton";
import Page from "../../../components/layout/Page";
import Row from "../../../components/utility/Row";
import PictureCard from "../../../components/ui/PictureCard";
import comicBg from "../../../assets/images/comic-bg.webp";
import BottomElement from "../../../components/ui/BottomElement";
import { ArrowForward } from "@mui/icons-material";

const MeetOthers = ({handleNextPage}:{handleNextPage:()=>void}) => {
  return (
    <Page>
      <Row sx={{ marginTop: "40px" }}>
        <BackButton />
        <Typography variant="h1" textAlign={"center"}>
          Meet others
        </Typography>
      </Row>

      <Stack padding={"0 16px"} marginTop={"38px"} gap={"10px"}>
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
       Next
      </Button></BottomElement>
    </Page>
  );
};

export default MeetOthers;

const Content1 = () => {
  return (
    <Box>
      <Typography variant="20-600" component={"p"}>
        Meet Mira
      </Typography>
      <Typography variant="16-400" component={"p"}>
        Your peer, and maybe a little bit of competition. I close deals fast.
        Just make sure you don’t fall behind.
      </Typography>
    </Box>
  );
};
const Content2 = () => {
  return (
    <Box>
      <Typography variant="20-600" component={"p"}>
        Meet Omar
      </Typography>
      <Typography variant="16-400" component={"p"}>
        Click to Know more
      </Typography>
    </Box>
  );
};
const Content3 = () => {
  return (
    <Box>
      <Typography variant="20-600" component={"p"}>
        You
      </Typography>
      <Typography variant="16-400" component={"p"}>
        Click to Know more
      </Typography>
    </Box>
  );
};
