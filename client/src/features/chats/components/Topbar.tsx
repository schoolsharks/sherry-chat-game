import { HomeOutlined } from "@mui/icons-material";
import { IconButton, Stack, Typography, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Topbar = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <Stack direction={"row"}>
      <Stack flex={1} bgcolor={theme.palette.sysgrey.main} padding={"8px"}>
        <Typography variant="25-700">20%</Typography>
        <Typography variant="16-400">Trust</Typography>
      </Stack>
      <Stack
        bgcolor={theme.palette.sysgrey.secondary}
        padding={"18px"}
        justifyContent={"center"}
        sx={{ widht: "30px" }}
      >
        <IconButton onClick={() => navigate("/user/onboarding/1")}>
          <HomeOutlined sx={{ fontSize: "32px" }} />
        </IconButton>
      </Stack>
      <Stack
        flex={1}
        bgcolor={theme.palette.primary.main}
        padding={"8px"}
        textAlign={"right"}
      >
        <Typography variant="25-700">2,50,000</Typography>
        <Typography variant="16-400">Revenue</Typography>
      </Stack>
    </Stack>
  );
};

export default Topbar;
