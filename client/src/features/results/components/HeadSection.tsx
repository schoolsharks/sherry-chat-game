import { Stack, Typography, useTheme, Box } from "@mui/material";
import theIronSpineBadge from "../../../assets/images/badges/the-iron-spine.webp";
import cardBg from "../../../assets/images/backgrounds/results-header-card-bg.webp";
import Row from "../../../components/utility/Row";
import { Sparkle } from "lucide-react";
import { motion } from "framer-motion";

const HeadSection = () => {
  const theme = useTheme();
  return (
    <Stack
      alignItems={"center"}
      sx={{
        backgroundImage: `url(${cardBg})`,
        backgroundSize: "cover",
        padding: "35px 28px",
        border: `2px solid ${theme.palette.primary.main}`,
      }}
    >
      <Row
        sx={{
          bgcolor: "#370A0E",
          border: `1px solid ${theme.palette.primary.main}`,
          borderRadius: "8px",
          padding: "4px 12px",
          gap: "6px",
          color: "#FF3A49",
          marginLeft: "auto",
        }}
      >
        <Typography>Congratulations</Typography>
        <Sparkle size={16} />
      </Row>

      <motion.img
        src={theIronSpineBadge}
        initial={{
          scale: 0,
          rotateY: 0,
        }}
        animate={{
          scale: 1,
          rotateY: 360,
        }}
        transition={{
          duration: 2,
          ease: "easeOut",
          times: [0, 0.5, 1],
          scale: {
            duration: 1,
            ease: "backOut",
          },
          rotateY: {
            duration: 1.5,
            delay: 0.5,
            ease: "easeInOut",
          },
        }}
        style={{
          width: "45%",
          marginTop: "24px",
          transformStyle: "preserve-3d",
          backfaceVisibility: "visible",
        }}
      />

      <Box marginTop={"36px"}>
        <Typography component={"p"} variant="20-300">
          You are the
        </Typography>
        <Typography component={"p"} variant="28-700">
          The Iron Spine
        </Typography>
        <Typography component={"p"} variant="16-400">
          You stood firm under pressure. You consistently follow policy despite
          client pushback or emotional manipulation.
        </Typography>
      </Box>
    </Stack>
  );
};

export default HeadSection;
