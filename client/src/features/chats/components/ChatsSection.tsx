import { Box, Stack } from "@mui/material";
import ChatMessage from "./ChatMessage";
import { MessageSendor } from "../types/enums";
import OptionSelection from "./OptionSelection";
import { useEffect, useState, useRef } from "react";
import FullwidthButton from "../../../components/ui/FullwidthButton";
import chatBg from "../../../assets/images/backgrounds/chat-bg.webp";
import useSound from "../../sound/hooks/useSound";
import useNavigateWithSound from "../../sound/hooks/useNavigateWithSound";
import AlertPopup from "../../alerts/AlertPopup";
import SoundToggleButton from "../../sound/components/SoundToggleButton";
import Row from "../../../components/utility/Row";
interface Message {
  sender: MessageSendor;
  content: string[];
  id: string;
}

interface Option {
  id: string;
  text: string;
}

interface ConversationStep {
  sender: MessageSendor;
  content?: string[];
  options?: Option[];
  responseFor?: Record<string, string[]>;
  id: string;
  alertId?: number;
  revenueUpdate?: number;
  trustUpdate?: number;
}

const conversationScript: ConversationStep[] = [
  {
    sender: MessageSendor.OTHER,
    content: [
      "Hey! Glad I reached you — need a quick favour 🙏",
      "$3M needs to be wired today to our HK supplier. \nFunds from 5 different accounts. Internal reshuffle. Directors are on board — can we get this done today?",
    ],
    id: "msg1",
  },
  {
    sender: MessageSendor.ME,
    options: [
      {
        id: "A",
        text: "Omar, five accounts? That's a bit unusual. Mind explaining quickly?",
      },
      {
        id: "B",
        text: "Got it, Omar. Can you quickly send over the board resolution and invoice?",
      },
    ],
    responseFor: {
      A: [
        "That's a fair question. The 5 accounts are for different subsidiaries, all approved by the board for this emergency supplier payment.",
      ],
      B: [
        "I'll send them right away. The board resolution is being finalized but I have the invoice here.",
        "Actually, could you process this first? The resolution will follow in a couple hours - we need to move quickly on this.",
      ],
    },
    id: "msg2",
    revenueUpdate: 500000,
    trustUpdate: 5,
  },
  {
    sender: MessageSendor.ME,
    options: [
      {
        id: "A",
        text: "Sorry Omar, I can't proceed without proper documentation. Company policy requires the board resolution first.",
      },
      {
        id: "B",
        text: "I understand the urgency. Let me see what I can do to help speed things up.",
      },
    ],
    responseFor: {
      A: [
        "I understand your concern, but this is an exceptional situation. The CEO has signed off on this already. Can you make an exception just this once?",
      ],
      B: [
        "Thanks! I really appreciate your help here. Our supplier is threatening to cancel our contract if we don't make the payment today.",
      ],
    },
    id: "msg3",
    alertId: 1,
    revenueUpdate: -20000,
    trustUpdate: -2,
  },
  {
    sender: MessageSendor.ME,
    options: [
      {
        id: "A",
        text: "I still need to follow protocol. Please have the CEO email me directly to confirm.",
      },
      {
        id: "B",
        text: "Alright, for a valued supplier I'll make an exception. Please send the account details.",
      },
    ],
    responseFor: {
      A: [
        "I'll ask, but he's in back-to-back meetings today. By then it will be too late for the wire transfer.",
        "Is there any way we can move forward now? I can personally vouch for this transaction.",
      ],
      B: [
        "Thank you so much! You're a lifesaver.",
        "I'll send all the details right away. Our company really appreciates your help with this urgent matter.",
      ],
    },
    id: "msg4",
    revenueUpdate: 300000,
    trustUpdate: 30,
  },
  {
    sender: MessageSendor.ME,
    options: [
      {
        id: "A",
        text: "I'm sorry, but I need that confirmation. It's too large a sum to bypass protocols.",
      },
      {
        id: "B",
        text: "OK, send me the account details and I'll prepare the transfers now.",
      },
    ],
    responseFor: {
      A: [
        "I understand. I'll try to reach the CEO as soon as possible.",
        "Thanks for considering it at least. Hope we can resolve this quickly.",
      ],
      B: [
        "You're the best! Here are the account details:",
        "Account 1: HK38293829382...\nAccount 2: HK74736478374...\nAccount 3: HK84736473647...\nAccount 4: HK37465473647...\nAccount 5: HK38293847583...",
        "Let me know when it's done so I can inform our supplier!",
      ],
    },
    id: "msg5",
    revenueUpdate: -20000,
    trustUpdate: -10,
  },
  {
    sender: MessageSendor.ME,
    options: [
      {
        id: "A",
        text: "Thanks for the information. I'll process this right away.",
      },
      {
        id: "B",
        text: "Wait, these account numbers don't match our supplier records. Let me check with compliance first.",
      },
    ],
    responseFor: {
      A: [
        "Perfect! Thanks again for your help with this urgent matter.",
        "Please let me know once the transfers are complete.",
      ],
      B: [
        "Oh? That's strange. Maybe there was an update to their accounts recently.",
        "But if you need to check, go ahead. I just hope we can still get it done today.",
      ],
    },
    id: "msg6",
    alertId: 2,
    revenueUpdate: 100000,
    trustUpdate: -10,
  },
];

interface ChatSectionProps {
  trust: number;
  revenue: number;
  setTrust: (value: number) => void;
  setRevenue: (value: number) => void;
}

const ChatsSection: React.FC<ChatSectionProps> = ({
  trust,
  revenue,
  setTrust,
  setRevenue,
}) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [showOptions, setShowOptions] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [isChatEnded, setIsChatEnded] = useState(false);
  const messagesEndRef = useRef<null | HTMLDivElement>(null);
  const [alertId, setAlertId] = useState<number | null>(null);

  const { playOnce } = useSound();
  const navigateWithSound = useNavigateWithSound();

  useEffect(() => {
    startConversation();
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, showOptions, isChatEnded]);

  const startConversation = () => {
    const firstMessage = conversationScript[0];
    setMessages([
      {
        sender: firstMessage.sender,
        content: firstMessage.content || [],
        id: firstMessage.id,
      },
    ]);

    setTimeout(() => {
      setCurrentStep(1);
      setShowOptions(true);
    }, 1000);
  };

  const handleOptionSelect = (optionId: string) => {
    setShowOptions(false);

    playOnce("MESSAGE_SEND");

    const currentMessage = conversationScript[currentStep];
    if (!currentMessage) return;

    const selectedOption = currentMessage.options?.find(
      (opt) => opt.id === optionId
    );

    if (selectedOption) {
      setMessages((prev) => [
        ...prev,
        {
          sender: MessageSendor.ME,
          content: [selectedOption.text],
          id: `${currentMessage.id}-response`,
        },
      ]);
      if (currentMessage.alertId) {
        setAlertId(currentMessage.alertId);
      }
      if (currentMessage.revenueUpdate) {
        setRevenue(revenue + currentMessage.revenueUpdate);
      }
      if (currentMessage.trustUpdate) {
        setTrust(trust + currentMessage.trustUpdate);
      }

      setTimeout(() => {
        setIsTyping(true);
        setTimeout(() => {
          scrollToBottom();
        }, 100);

        setTimeout(() => {
          setIsTyping(false);

          const responses = currentMessage.responseFor?.[optionId];

          if (responses) {
            playOnce("MESSAGE_RECIEVE");
            setMessages((prev) => [
              ...prev,
              {
                sender: MessageSendor.OTHER,
                content: responses,
                id: `${currentMessage.id}-reply`,
              },
            ]);
          }

          const nextStep = currentStep + 1;
          setCurrentStep(nextStep);

          // Check if there are more steps with options
          if (
            nextStep < conversationScript.length &&
            conversationScript[nextStep].options
          ) {
            setTimeout(() => {
              setShowOptions(true);
            }, 1000);
          } else {
            // Chat has ended - no more options available
            setIsChatEnded(true);
          }
        }, 1000);
      }, 500);
    }
  };

  // const handleContinue = () => {
  //   navigateWithSound("/user/alerts/1");
  // };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Stack
      flex={1}
      position="relative"
      display="flex"
      flexDirection="column"
      height="100%"
      sx={{ background: `url(${chatBg})`, backgroundSize: "contain" }}
    >
      <Row sx={{ justifyContent: "flex-end" ,zIndex:999,padding:"0 8px"}}>
        <Box position={"fixed"} top={"80px"}>
          <SoundToggleButton />
        </Box>
      </Row>
      {alertId && (
        <AlertPopup alertId={alertId} onClose={() => setAlertId(null)} />
      )}
      <Stack
        margin="40px 0 20px"
        overflow="scroll"
        height={"40px"}
        gap="12px"
        flex={1}
        minHeight={0} // This is crucial - allows flex child to shrink below content size
        padding="0 16px"
        sx={{
          scrollbarWidth: "none",
          overflowY: "scroll",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        {messages.map((message) => (
          <ChatMessage
            key={message.id}
            sender={message.sender}
            messages={message.content}
          />
        ))}

        {isTyping && (
          <ChatMessage
            sender={MessageSendor.OTHER}
            messages={["Typing..."]}
            isTyping={true}
          />
        )}

        <div ref={messagesEndRef} />
      </Stack>
      {isChatEnded && (
        <Stack alignItems="center" padding="20px 0" gap={"4px"}>
          <FullwidthButton
            handleOnClick={() => navigateWithSound("/user/chat-with-sherry")}
            value="Chat With Sherry"
            icon="NEXT"
            sx={{ fontSize: "1.25rem", padding: "20px" }}
          />
          {/* <FullwidthButton
            handleOnClick={handleContinue}
            value="Continue"
            icon="NEXT"
            sx={{
              fontSize: "1.25rem",
              padding: "20px",
              bgcolor: "#fff",
              color: "#000",
            }}
          /> */}
        </Stack>
      )}

      {showOptions &&
        currentStep < conversationScript.length &&
        conversationScript[currentStep].options && <Box height={"240px"}></Box>}

      <Box position={"fixed"} bottom={0} maxWidth={"480px"}>
        {showOptions &&
          currentStep < conversationScript.length &&
          conversationScript[currentStep].options && (
            <OptionSelection
              show={showOptions}
              options={conversationScript[currentStep].options || []}
              onSelect={handleOptionSelect}
            />
          )}
      </Box>
    </Stack>
  );
};

export default ChatsSection;
