import { Stack } from "@mui/material";
import HeadSection from "./HeadSection";
import TopScores from "./TopScores";
import TrustScore from "./TrustScore";

const ResultsMain = () => {
  return (
    <Stack>
      <Stack padding={"16px"} gap={"55px"}>
        <TopScores/>
        <HeadSection/>
        <TrustScore/>
      </Stack>
    </Stack>
  );
};

export default ResultsMain;
