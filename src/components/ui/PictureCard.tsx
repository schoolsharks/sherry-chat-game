import { Box, Stack, SxProps } from "@mui/material";
import React from "react";

interface PictureCardProps {
  image: string;
  content: React.ReactNode;
  contentAlign?: "left" | "right";
  sx:SxProps
}
const PictureCard: React.FC<PictureCardProps> = ({ image, content ,sx}) => {
  return (
    <Stack
      border={"3px solid #fff"}
      padding={"16px"}
      sx={{
        background: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        justifyContent: "center",
        position: "relative",
        ...sx,
      }}
    >
      <Box zIndex={2} position={"relative"}>{content}</Box>
      <Box
        position={"absolute"}
        width={"100%"}
        height={"100%"}
        zIndex={1}
        bgcolor={"#000000ae"}
        top={0}
        left={0}
      />
    </Stack>
  );
};

export default PictureCard;
