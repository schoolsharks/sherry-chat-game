import { Stack } from "@mui/material";
import renderAlert from "./renderAlert";

const AlertPopup = ({ alertId ,onClose}: { alertId: number,onClose:()=>void }) => {
  return (
    <Stack
      sx={{
        position: "fixed",
        top: 0,
        // left: 0,
        width: "100%",
        height: "100%",
        overflow:"scroll",
        zIndex: 9999,
        backgroundColor: "#000000",
        maxWidth:"480px"
      }}
    >
        {renderAlert(alertId,onClose)}
    </Stack>
  );
};

export default AlertPopup;
