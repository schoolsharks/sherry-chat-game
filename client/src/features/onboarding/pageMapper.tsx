import MeetOthers from "./components/MeetOthers";
import WhatSherryWants from "./components/WhatSherryWants";
import MeetSherry from "./components/MeetSherry";
import useNavigateWithSound from "../sound/hooks/useNavigateWithSound";

export const pageMapper = (page: number) => {
  const navigateWithSound = useNavigateWithSound();

  const handleNextPage = () => {
    if (page < 3) {
      navigateWithSound(`/user/onboarding/${page + 1}`);
    } else {
      navigateWithSound("/user/login");
    }
  };

  if (page === 1) {
    return <WhatSherryWants handleNextPage={handleNextPage} />;
  }
  if (page === 2) {
    return <MeetSherry handleNextPage={handleNextPage} />;
  }
  if (page === 3) {
    return <MeetOthers handleNextPage={handleNextPage} />;
  }
};
