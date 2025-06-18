import { Box, Stack, Typography, useTheme } from "@mui/material";
import optionSelectionBg from "../../../assets/images/backgrounds/option-selection-bg.webp";
import { useEffect, useState, useRef } from "react";

interface Option {
  id: string;
  text: string;
}

interface OptionSelectionProps {
  show: boolean;
  options: Option[];
  onSelect: (optionId: string) => void;
}

const OptionSelection: React.FC<OptionSelectionProps> = ({
  show,
  options,
  onSelect,
}) => {
  const theme = useTheme();
  const [visibility, setVisibility] = useState<"visible" | "hidden">("hidden");
  const [height, setHeight] = useState<string | number>(0);
  const contentRef = useRef<HTMLDivElement>(null);
  const [shouldScroll, setShouldScroll] = useState(false);
  const [timeLeft, setTimeLeft] = useState(90);

  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;

    if (show && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      if (options.length > 0) {
        onSelect(options[0].id);
      }
    }

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [show, timeLeft, options, onSelect]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  useEffect(() => {
    if (show) {
      setTimeLeft(120);

      setVisibility("visible");

      setTimeout(() => {
        const contentHeight = contentRef.current?.scrollHeight || "auto";
        setHeight(contentHeight);
        setShouldScroll(true);
      }, 10);
    } else {
      setHeight(0);
      setShouldScroll(false);

      const timer = setTimeout(() => {
        setVisibility("hidden");
      }, 400);

      return () => clearTimeout(timer);
    }
  }, [show]);

  useEffect(() => {
    if (shouldScroll && height !== 0) {
      setTimeout(() => {
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: "smooth",
        });
      }, 250);

      setShouldScroll(false);
    }
  }, [height, shouldScroll]);

  const handleClick = (optionId: string) => {
    onSelect(optionId);
  };

  return (
    <Box
      // overflow={"hidden"}
      position="relative"
      sx={{
        height: height,
        transition: "height 0.3s ease",
        visibility: visibility,
      }}
    >
      <Box
        ref={contentRef}
        sx={{
          transform: show ? "translateY(0)" : "translateY(100%)",
          opacity: show ? 1 : 0,
          transition: "all 0.3s ease",
          background: `url(${optionSelectionBg})`,
          backgroundSize: "cover",
          border: "1px solid #fff",
          padding: "28px 16px",
          position: "relative",
          bottom: 0,
          width: "100%",
        }}
      >
        <Stack direction={"row"} justifyContent={"space-between"}>
          <Typography variant="20-700">Tap to Choose</Typography>
          <Typography variant="20-700">{formatTime(timeLeft)}</Typography>
        </Stack>

        <Stack marginTop={"12px"} gap={"12px"}>
          {options.map((option) => (
            <Stack
              key={option.id}
              direction={"row"}
              padding={"8px"}
              bgcolor={option.id === "A" ? theme.palette.sysgrey.dark : "#fff"}
              color={option.id === "A" ? "#fff" : "#000"}
              alignItems={"center"}
              gap={"8px"}
              onClick={() => handleClick(option.id)}
              sx={{ cursor: "pointer" }}
            >
              <Typography variant="20-500" padding={"0 8px"}>
                {option.id}
              </Typography>
              <Typography variant="14-500">{option.text}</Typography>
            </Stack>
          ))}
        </Stack>
      </Box>
    </Box>
  );
};

export default OptionSelection;
