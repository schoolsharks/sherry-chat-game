import React from "react";
import Row from "../../../components/utility/Row";
import { Checkbox, Typography } from "@mui/material";
import useNavigateWithSound from "../../sound/hooks/useNavigateWithSound";

interface TermsAndConditionsInputProps {
  tncAccepted: boolean;
  tncPageRoute: string;
  setTncAccepted: React.Dispatch<React.SetStateAction<boolean>>;
}

const TermsAndConditionsInput: React.FC<TermsAndConditionsInputProps> = ({
  tncAccepted,
  tncPageRoute,
  setTncAccepted,
}) => {
  const navigateWithSound = useNavigateWithSound();
  return (
    <Row>
      <Checkbox
        checked={tncAccepted}
        onChange={() => setTncAccepted((prev) => !prev)}
        sx={{
          "&.MuiCheckbox-root": { color: "#ffffff" },
        }}
      />
      <Typography fontWeight={"500"} color={"#fff"} fontSize={"14px"}>
        I agree to the
        <span
          onClick={() => navigateWithSound(tncPageRoute)}
          style={{
            cursor: "pointer",
            marginLeft: "4px",
            color: "#ffffff",
            fontSize: "16px",
            fontWeight: "bold",
          }}
        >
          Terms & conditions{" "}
        </span>
      </Typography>
    </Row>
  );
};

export default TermsAndConditionsInput;
