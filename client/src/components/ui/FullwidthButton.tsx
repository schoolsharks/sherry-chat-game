import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { Button, SxProps } from "@mui/material";

interface FullwidthButtonProps {
  icon?: "NEXT" | "PREV";
  value?: string;
  sx?: SxProps;
  handleOnClick: () => void;
}

const FullwidthButton: React.FC<FullwidthButtonProps> = ({
  icon,
  value,
  handleOnClick,
  sx
}) => {
  return (
    <Button
      variant="contained"
      endIcon={icon == "NEXT" && <ArrowForward />}
      startIcon={icon == "PREV" && <ArrowBack />}
      onClick={handleOnClick}
      sx={{
        padding: "12px",
        bgcolor: "#fff",
        color: "#000",
        borderRadius: "0",
        width: "100%",
        textTransform:"none",
        justifyContent:"space-between",
        ...sx,
      }}
    >
      {value}
    </Button>
  );
};

export default FullwidthButton;
