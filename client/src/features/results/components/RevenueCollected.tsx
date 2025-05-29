import { Stack, Typography, useTheme } from "@mui/material";
import Row from "../../../components/utility/Row";

const RevenueCollected = () => {
  const theme = useTheme();
  return (
    <Stack alignItems={"center"} flex={"1"}>
      <Typography variant="25-600">Revenue Collected</Typography>
      <Row sx={{ marginTop: "10px", gap: "4px" }}>
        <Stack
          bgcolor={theme.palette.primary.main}
          padding={"12px"}
          gap={"30px"}
        >
          <Typography variant="16-400" component={"p"}>
            Revenue collected by You
          </Typography>
          <Typography variant="32-700" component={"p"}>
            1M
          </Typography>
        </Stack>
        <Stack
          bgcolor={theme.palette.sysgrey.secondary}
          padding={"12px"}
          gap={"30px"}
        >
          <Typography variant="16-400" component={"p"}>
            Revenue collected by Mira
          </Typography>
          <Typography variant="32-700" component={"p"}>
            900K
          </Typography>
        </Stack>
      </Row>
      <Typography variant="18-400" marginTop={"12px"}>
        Congratulations! You have achieved your 1M goal of revenue.
      </Typography>
    </Stack>
  );
};

export default RevenueCollected;
