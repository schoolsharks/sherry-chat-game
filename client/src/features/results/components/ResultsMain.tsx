import { Stack, useTheme } from "@mui/material";
import HeadSection from "./HeadSection";
import TopScores from "./TopScores";
import TrustScore from "./TrustScore";
import RevenueCollected from "./RevenueCollected";
import RiskIndicators from "./RiskIndicators";
import BlindSpots from "./BlindSpots";
import FullwidthButton from "../../../components/ui/FullwidthButton";
import { useNavigate } from "react-router-dom";
import ScrollToTop from "../../../components/utility/ScrollToTop";

const ResultsMain = () => {
  const theme=useTheme();
  const navigate=useNavigate();
  const handleRestart=()=>{
    navigate("/user/onboarding/1")
  }
  return (
    <Stack>
      <ScrollToTop/>
      <Stack padding={"16px"} gap={"55px"}>
        <TopScores />
        <HeadSection />
        <TrustScore />
        <RevenueCollected />
        <RiskIndicators />
        <BlindSpots />
      </Stack>
      <FullwidthButton
        icon={"NEXT"}
        value="Leaderboard"
        handleOnClick={() => {}}
        sx={{ padding: "20px",marginTop:"50px",fontSize:"1.25rem",bgcolor:theme.palette.sysgrey.main,color:"#fff" }}
      />
      <FullwidthButton
        icon={"NEXT"}
        value="Restart"
        handleOnClick={handleRestart}
        sx={{ padding: "20px",fontSize:"1.25rem" }}
      />
    </Stack>
  );
};

export default ResultsMain;
