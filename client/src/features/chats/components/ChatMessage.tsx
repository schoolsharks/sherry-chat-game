// ChatMessage.tsx
import { Box, Stack, Typography, useTheme } from "@mui/material";
import { MessageSendor } from "../types/enums";
import DOMPurify from "dompurify";
import typingDots from "../../../assets/gifs/typing-dots.gif";
import omarImage from "../../../assets/images/omar.webp"
import youImage from "../../../assets/images/you.webp"
import { motion, AnimatePresence } from "framer-motion";

interface ChatMessageProps {
  sender: MessageSendor;
  messages?: string[];
  elements?: React.ReactNode[];
  isTyping?: boolean;
}

const ChatMessage: React.FC<ChatMessageProps> = ({
  sender,
  messages,
  isTyping = false,
}) => {
  const theme = useTheme();
  const boxColor =
    sender === MessageSendor.ME
      ? theme.palette.primary.main
      : theme.palette.sysgrey.main;

  const senderName = sender === MessageSendor.ME ? "You" : "Omar";

  // Animation variants
  const messageVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.3,
        duration: 0.5,
      },
    }),
  };

  return (
    <Stack paddingBottom={"80px"}>
      <Stack gap={"8px"} position={"relative"}>
        {isTyping ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <Box
                padding="10px"
                bgcolor={boxColor}
                margin={
                  sender === MessageSendor.OTHER ? "0 0 0 32px" : "0 32px 0 0"
                }
                position={"relative"}
              >
                <Typography variant="10-500" color="#ffffffa6" component={"p"}>
                  {isTyping ? "Omar is typing..." : senderName}
                </Typography>
                <img src={typingDots} style={{filter: "invert(100%)",width:"30px"}} />
              </Box>
            </motion.div>
        ) : (
          <AnimatePresence>
            {messages?.map((message, index) => (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                animate="visible"
                variants={messageVariants}
              >
                <Box
                  padding="10px"
                  bgcolor={boxColor}
                  margin={
                    sender === MessageSendor.OTHER ? "0 0 0 32px" : "0 32px 0 0"
                  }
                  position={"relative"}
                >
                  <Typography variant="10-500" color="#ffffffa6" component={"p"}>
                    {isTyping ? "Omar is typing..." : senderName}
                  </Typography>
                  <Typography
                    variant="14-400"
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(
                        isTyping ? message : message.replace(/\n/g, "<br/>")
                      ),
                    }}
                  />
                  {index === messages.length - 1 && (
                    <Box
                      position={"absolute"}
                      bgcolor={boxColor}
                      width={"20px"}
                      height={"15px"}
                      top={"100%"}
                      left={sender === MessageSendor.OTHER ? "0" : undefined}
                      right={sender === MessageSendor.ME ? "0" : undefined}
                      sx={{
                        translate:
                          sender === MessageSendor.ME ? "2px 0" : "-2px 0",
                        clipPath:
                          sender === MessageSendor.ME
                            ? "polygon(0 0, 100% 100%, 90% 0)"
                            : "polygon(10% 0, 0 100%, 100% 0)",
                      }}
                    />
                  )}
                </Box>
              </motion.div>
            ))}
          </AnimatePresence>
        )}

        <Stack
          position={"absolute"}
          width={"70px"}
          height={"70px"}
          bgcolor={"#fff"}
          bottom={"-80px"}
          zIndex={-1}
          left={sender === MessageSendor.OTHER ? "0" : undefined}
          right={sender === MessageSendor.ME ? "0" : undefined}
        >
          <Box component={"img"}  src={sender===MessageSendor.ME ? youImage:omarImage} height={"100%"} sx={{objectFit:"contain"}}/>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ChatMessage;
