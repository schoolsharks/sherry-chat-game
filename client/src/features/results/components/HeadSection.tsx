import { Stack, Typography } from "@mui/material";
import theIronSpineBadge from "../../../assets/images/badges/the-iron-spine.webp";

const HeadSection = () => {
  return (
    <Stack alignItems={"center"}>
      <Typography variant="25-700" component={"p"}>
        Congratulations!
      </Typography>
      <img src={theIronSpineBadge} alt="" style={{width:"135px"}} />
      <Typography variant="20-300" component={"p"} marginTop={"12px"}>
        You are the
      </Typography>
      <Typography variant="28-700" component={"p"}>
        The Iron Spine
      </Typography>
      <Typography
        variant="18-400"
        component={"p"}
        marginTop={"22px"}
        textAlign={"center"}
      >
        You stood firm under pressure. You consistently follow policy despite
        client pushback or emotional manipulation.
      </Typography>
    </Stack>
  );
};

export default HeadSection;
