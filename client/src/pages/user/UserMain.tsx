import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import OnboardingPage from "./OnboardingPage";
import LoginPage from "./LoginPage";
import TermsAndConditions from "./TermsAndConditionsPage";
import LetsBegin from "./gameStatics/LetsBegin";
import Chats from "./Chats";
import Results from "./Results";
import { AnimatePresence } from "framer-motion";
import AnimatedPage from "../../components/layout/AnimatedPage";
import LeaderboardPage from "./Leaderboard";
import Alerts from "./Alerts";
import useSound from "../../features/sound/hooks/useSound";
import { useEffect, useRef } from "react";
import SoundPermissionModal from "../../components/ui/SoundPermissionModal";

const UserMain = () => {
  const location = useLocation();
  const hasInitializedRef = useRef(false);
  
  const { 
    playInLoop, 
    stop, 
    needsPermission, 
    handlePermissionGranted, 
    handlePermissionDenied,
    hasUserInteracted
  } = useSound();

  useEffect(() => {
    if (!hasInitializedRef.current) {
      hasInitializedRef.current = true;
      
      console.log("Initializing background music");
      
      // Try to play immediately - this will trigger permission modal if needed
      playInLoop("BGM_1", 0.5);
    }
    
    // Cleanup function
    return () => {
      console.log("Cleaning up audio on unmount");
      stop();
    };
  }, [playInLoop, stop]); 

  // Also try to play music when user interaction status changes
  useEffect(() => {
    if (hasUserInteracted && !needsPermission) {
      console.log("User has interacted, ensuring background music is playing");
      // Small delay to ensure everything is ready
      setTimeout(() => {
        playInLoop("BGM_1", 0.5);
      }, 100);
    }
  }, [hasUserInteracted, needsPermission, playInLoop]);

  return (
    <div style={{ position: "relative", width: "100%", minHeight: "100vh" }}>
      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route
            index
            path="/onboarding/:page"
            element={
              <AnimatedPage>
                <OnboardingPage />
              </AnimatedPage>
            }
          />
          <Route
            path="/login"
            element={
              <AnimatedPage>
                <LoginPage />
              </AnimatedPage>
            }
          />
          <Route
            path="/terms-and-conditions"
            element={
              <AnimatedPage>
                <TermsAndConditions />
              </AnimatedPage>
            }
          />
          <Route
            path="/lets-begin"
            element={
              <AnimatedPage>
                <LetsBegin />
              </AnimatedPage>
            }
          />
          <Route
            path="/chats"
            element={
              <AnimatedPage>
                <Chats />
              </AnimatedPage>
            }
          />
          <Route
            path="/results"
            element={
              <AnimatedPage>
                <Results />
              </AnimatedPage>
            }
          />
          <Route
            path="/leaderboard"
            element={
              <AnimatedPage>
                <LeaderboardPage />
              </AnimatedPage>
            }
          />
          <Route
            path="/alerts/:page"
            element={
              <AnimatedPage>
                <Alerts />
              </AnimatedPage>
            }
          />
          <Route path="*" element={<Navigate to="/user/onboarding/1" />} />
        </Routes>
      </AnimatePresence>

      <SoundPermissionModal 
        needsPermission={needsPermission}
        onPermissionGranted={handlePermissionGranted}
        onPermissionDenied={handlePermissionDenied}
      />
    </div>
  );
};

export default UserMain;