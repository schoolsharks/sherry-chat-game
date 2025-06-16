import { IconButton, Stack, Typography, useTheme } from "@mui/material";
import useNavigateWithSound from "../../sound/hooks/useNavigateWithSound";
import IdfcLogo from "../../../components/ui/IdfcLogo";
import { useSpring, animated } from "@react-spring/web";
import { formatAmount } from "../../../utility/formatAmount";

interface TopbarProps {
  trust: number;
  revenue: number;
}

const Topbar: React.FC<TopbarProps> = ({ trust, revenue }) => {
  const theme = useTheme();
  const navigateWithSound = useNavigateWithSound();

  const trustSpring = useSpring({ number: trust, config: { tension: 120, friction: 14 } });
  const revenueSpring = useSpring({ number: revenue, config: { tension: 120, friction: 14 } });

  return (
    <Stack direction="row" gap="5px" bgcolor="#000">
      <Stack flex={1} bgcolor={theme.palette.sysgrey.main} padding="8px 16px">
        <Typography fontSize="25px" fontWeight="800">
          <animated.span>
            {trustSpring.number.to((val) => `${val.toFixed(0)}%`)}
          </animated.span>
        </Typography>
        <Typography variant="16-400">Trust</Typography>
      </Stack>

      <Stack
        bgcolor={theme.palette.primary.main}
        padding="18px"
        justifyContent="center"
      >
        <IconButton onClick={() => navigateWithSound("/user/onboarding/1")}>
          <IdfcLogo sx={{ width: "32px", height: "32px" }} />
        </IconButton>
      </Stack>

      <Stack
        flex={1}
        bgcolor={theme.palette.sysgrey.secondary}
        padding="8px 16px"
        textAlign="right"
      >
        <Typography fontSize="25px" fontWeight="800">
          <animated.span>
            {revenueSpring.number.to((val) => `₹${formatAmount(val.toFixed(0))}`)}
          </animated.span>
        </Typography>
        <Typography variant="16-400">Revenue</Typography>
      </Stack>
    </Stack>
  );
};

export default Topbar;
