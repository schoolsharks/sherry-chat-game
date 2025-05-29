// ChatMessage.tsx
import { Box, Stack, Typography, useTheme } from "@mui/material";
import { MessageSendor } from "../types/enums";
import DOMPurify from "dompurify";

interface ChatMessageProps {
  sender: MessageSendor;
  messages: string[];
  isTyping?: boolean;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ sender, messages, isTyping = false }) => {
  const theme = useTheme();
  const boxColor =
    sender === MessageSendor.ME
      ? theme.palette.primary.main
      : theme.palette.sysgrey.main;

  const senderName = sender === MessageSendor.ME ? "You" : "Omar";

  return (
    <Stack paddingBottom={"70px"}>
      <Stack gap={"8px"} position={"relative"}>
        {messages.map((message, index) => (
          <Box
            padding="10px"
            key={index}
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
                __html: DOMPurify.sanitize(isTyping ? message : message.replace(/\n/g, '<br/>')),
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
                  translate: sender === MessageSendor.ME ? "2px 0" : "-2px 0",
                  clipPath:
                    sender === MessageSendor.ME
                      ? "polygon(0 0, 100% 100%, 90% 0)"
                      : "polygon(10% 0, 0 100%, 100% 0)",
                }}
              />
            )}
          </Box>
        ))}
        <Box
          position={"absolute"}
          width={"70px"}
          height={"70px"}
          bgcolor={"#fff"}
          bottom={"-70px"}
          zIndex={-1}
          left={sender === MessageSendor.OTHER ? "0" : undefined}
          right={sender === MessageSendor.ME ? "0" : undefined}
        ></Box>
      </Stack>
    </Stack>
  );
};

export default ChatMessage;