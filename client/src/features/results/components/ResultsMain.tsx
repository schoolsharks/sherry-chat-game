import { Stack, useTheme } from "@mui/material";
import HeadSection from "./HeadSection";
import TopScores from "./TopScores";
import TrustScore from "./TrustScore";
import RevenueCollected from "./RevenueCollected";
import RiskIndicators from "./RiskIndicators";
import BlindSpots from "./BlindSpots";
import FullwidthButton from "../../../components/ui/FullwidthButton";
import ScrollToTop from "../../../components/utility/ScrollToTop";
import chatBg from "../../../assets/images/backgrounds/chat-bg.webp"
import Row from "../../../components/utility/Row";
import FadeInAnimatedWrapper from "../../../components/animations/FadeInAnimatedWrapper";
import useNavigateWithSound from "../../sound/hooks/useNavigateWithSound";

const ResultsMain = () => {
  const theme = useTheme();
  const navigateWithSound = useNavigateWithSound();
  
  const handleRestart = () => {
    navigateWithSound("/user/onboarding/1");
  };

  const handleLeaderboard = () => {
    navigateWithSound("/user/leaderboard");
  };

  return (
    <Stack
      sx={{
        background: `url(${chatBg})`,
        backgroundRepeat: "repeat",
        backgroundSize: "100%",
      }}
    >
      <ScrollToTop />
      <Stack padding={"16px"} gap={"55px"}>
        <FadeInAnimatedWrapper delay={0.1}>
          <TopScores />
        </FadeInAnimatedWrapper>

        <FadeInAnimatedWrapper delay={0.2}>
          <HeadSection />
        </FadeInAnimatedWrapper>

        <FadeInAnimatedWrapper delay={0.3}>
          <TrustScore />
        </FadeInAnimatedWrapper>

        <FadeInAnimatedWrapper delay={0.4}>
          <RevenueCollected />
        </FadeInAnimatedWrapper>

        <FadeInAnimatedWrapper delay={0.5}>
          <RiskIndicators />
        </FadeInAnimatedWrapper>

        <FadeInAnimatedWrapper delay={0.6}>
          <BlindSpots />
        </FadeInAnimatedWrapper>
      </Stack>

    
        <Row sx={{ marginTop: "40px" }}>
          <FullwidthButton
            icon={"NEXT"}
            value="Leaderboard"
            handleOnClick={handleLeaderboard}
            sx={{
              padding: "20px",
              fontSize: "1.25rem",
              bgcolor: theme.palette.sysgrey.main,
            }}
          />
          <FullwidthButton
            icon={"NEXT"}
            value="Restart"
            handleOnClick={handleRestart}
            sx={{
              padding: "20px",
              fontSize: "1.25rem",
              bgcolor: theme.palette.sysgrey.secondary,
            }}
          />
        </Row>
    </Stack>
  );
};

export default ResultsMain;