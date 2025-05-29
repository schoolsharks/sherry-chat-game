import Row from "../../../components/utility/Row";
import { Stack, Typography, useTheme } from "@mui/material";

const TopScores = () => {
  const theme = useTheme();
  return (
    <Row>
      <Stack
        flex={1}
        bgcolor={theme.palette.sysgrey.main}
        padding={"8px"}
        gap={"8px"}
      >
        <Typography variant="16-400">Game Completion</Typography>
        <Typography variant="25-700">100%</Typography>
      </Stack>
      <Stack
        flex={1}
        bgcolor={theme.palette.primary.main}
        padding={"8px"}
        gap={"8px"}
      >
        <Typography variant="16-400">Live Players in Session</Typography>
        <Typography variant="25-700">47%</Typography>
      </Stack>
    </Row>
  );
};

export default TopScores;
