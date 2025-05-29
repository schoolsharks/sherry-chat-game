import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import OnboardingPage from "./OnboardingPage";
import LoginPage from "./LoginPage";
import TermsAndConditions from "./TermsAndConditionsPage";
import LetsBegin from "./gameStatics/LetsBegin";
import Chats from "./Chats";
import Results from "./Results";
import { AnimatePresence } from "framer-motion";
import AnimatedPage from "../../components/layout/AnimatedPage";


const UserMain = () => {
  const location = useLocation();

  return (
    <div style={{ position: "relative", width: "100%", height: "100vh", overflow: "hidden" }}>
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
          {/* <Route
            path="/"
            element={
              <AuthWrapper
                verifyRole={Roles.USER}
                redirection="/user/onboarding/1"
              />
            }
          > */}
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
          {/* </Route> */}
          <Route path="*" element={<Navigate to="/user/onboarding/1" />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
};

export default UserMain;