import React from "react";
import {
  Typography,
  Stack,
} from "@mui/material";
import Page from "../layout/Page";
import FullwidthButton from "./FullwidthButton";
import SoundToggleButton from "../../features/sound/components/SoundToggleButton";

interface SoundPermissionModalProps {
  needsPermission: boolean;
  onPermissionGranted: () => void;
  onPermissionDenied: () => void;
}

const SoundPermissionModal: React.FC<SoundPermissionModalProps> = ({
  // needsPermission,
  onPermissionGranted,
  onPermissionDenied,
}) => {
  const handleGrantPermission = () => {
    console.log("Audio permission granted");
    onPermissionGranted();
  };

  const handleDeny = () => {
    onPermissionDenied();
  };

  return (
    <Page
      sx={{ alignItems: "center", justifyContent: "center", padding: "20px" }}
    >
      <Stack
        padding="32px 20px"
        border={"2px solid #ffffff"}
        width={"100%"}
        alignItems={"center"}
      >
        {/* <Volume2 strokeWidth={1} size={48} /> */}
        <SoundToggleButton/>
        <Typography fontSize={"40px"} fontWeight={"600"}>
          Sound On
        </Typography>
        <Typography fontSize={"18px"} fontWeight={"400"}>
          We use light background sounds to enhance your game experience.Would
          you like to enable sound?
        </Typography>
        <Stack gap={"12px"} padding={"0px 20px"} width={"100%"} marginTop={"35px"}>
          <FullwidthButton
            value="Turn On Sound"
            handleOnClick={handleGrantPermission}
            sx={{bgcolor:"transparent",border:"2px solid #ffffff"}}
          />
          <FullwidthButton
            value="Play Without Sound"
            handleOnClick={handleDeny}
          />
        </Stack>
      </Stack>
    </Page>
  );
};

export default SoundPermissionModal;
