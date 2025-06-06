import { Box, SxProps } from "@mui/material";
import React from "react";
import messageTriangleLeft from "../../assets/images/message-triangle-left.webp";
import messageTriangleRight from "../../assets/images/message-triangle-right.webp";

interface MessageBoxProps {
  messageContent: React.ReactNode;
  position: "LEFT" | "RIGHT";
  sx?: SxProps;
}
const MessageBox: React.FC<MessageBoxProps> = ({
  messageContent,
  position,
  sx,
}) => {
  return (
    <Box
      sx={{
        bgcolor: "#fff",
        border: "2px solid #000",
        padding: "16px",
        position: "relative",
        ...sx,
      }}
    >
      {messageContent}
      {/* <motion.div variants={messageContentVariants}>
                {messageContent}
              </motion.div> */}

      <Box
        component={"img"}
        position={"absolute"}
        src={position === "LEFT" ? messageTriangleLeft : messageTriangleRight}
        sx={{
          bottom: 0,
          width: "24px",
          right: position === "LEFT" ? "24px" : "unset",
          left: position === "RIGHT" ? "24px" : "unset",
          transform: "translateY(calc(100% - 1px))",
        }}
      />
    </Box>
  );
};

export default MessageBox;
