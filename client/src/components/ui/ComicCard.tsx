import { Box, Stack } from "@mui/material";
import React from "react";
import { motion } from "framer-motion";
import comicCardBg from "../../assets/images/backgrounds/comic-card-bg.webp";
import Row from "../utility/Row";
import MessageBox from "./MessageBox";

interface ComicCardProps {
  image: string;
  messageContent: React.ReactNode;
  messagePosition: { left?: number; right?: number };
  imagePosition: { left?: number; right?: number };
}

const ComicCard: React.FC<ComicCardProps> = ({
  image,
  messageContent,
  imagePosition,
  messagePosition,
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.1,
      },
    },
  };

  const imageVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 50,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        type: "spring",
        bounce: 0.6,
      },
    },
  };

  const messageBoxVariants = {
    hidden: {
      opacity: 0,
      scale: 0.9,
      x: messagePosition.left ? -30 : 30,
    },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay: 1,
        ease: "easeOut",
      },
    },
  };

  const messageContentVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
        delay: 1.2,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
    >
      <Stack
        sx={{
          background: `url(${comicCardBg})`,
          backgroundSize: "cover",
          color: "#000",
          overflow: "hidden",
        }}
      >
        {/* Message Row */}
        <Row
          sx={{
            justifyContent: messagePosition.left ? "start" : "end",
            marginTop: "45px",
          }}
        >
          <motion.div variants={messageBoxVariants}>
            <MessageBox
              position={messagePosition.left ? "LEFT" : "RIGHT"}
              messageContent={
                <motion.div variants={messageContentVariants}>
                  {messageContent}
                </motion.div>
              }
              sx={{
                marginRight: `${messagePosition.right}px`,
                marginLeft: `${messagePosition.left}px`,
              }}
            />
          </motion.div>
        </Row>

        {/* Image Row */}
        <Row
          sx={{
            justifyContent: imagePosition.left ? "start" : "end",
            marginTop: "24px",
          }}
        >
          <motion.div variants={imageVariants} style={{ height: "250px" }}>
            <Box
              component="img"
              src={image}
              sx={{
                height: "100%",
                marginRight: `${imagePosition.right}px`,
                marginLeft: `${imagePosition.left}px`,
              }}
            />
          </motion.div>
        </Row>
      </Stack>
    </motion.div>
  );
};

export default ComicCard;
