import { Box, Stack } from "@mui/material";
import UnderlinedTextInput from "../../../components/ui/UnderlinedTextInput/UnderlinedTextInput";
import { useState } from "react";
import TermsAndConditionsInput from "./TermsAndConditionsInput";
import BottomElement from "../../../components/ui/BottomElement";
import FullwidthButton from "../../../components/ui/FullwidthButton";
// import { useNavigate } from "react-router-dom";
import useNavigateWithSound from "../../sound/hooks/useNavigateWithSound";

const LoginForm = () => {
    const navigateWithSound=useNavigateWithSound()
  const [formValues, setFormValues] = useState({
    screen_name: "",
    email: "",
    contact: "",
    employee_id: "",
  });
  const [tncAccepted, setTncAccepted] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log(name, value);
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  return (
    <Stack flex={1}>
      <Stack gap={"30px"} padding={"0 20px"}>
        <UnderlinedTextInput
          name="Screen Name"
          isMandatory={true}
          value={formValues.screen_name}
          handleChange={() => handleChange}
        />
        <UnderlinedTextInput
          name="Email"
          value={formValues.email}
          handleChange={() => handleChange}
        />
        <UnderlinedTextInput
          name="Contact"
          value={formValues.contact}
          handleChange={() => handleChange}
        />
        <UnderlinedTextInput
          name="Empoloyee Id"
          value={formValues.employee_id}
          handleChange={() => handleChange}
        />
      </Stack>

      <Box marginTop={"80px"}>
        <TermsAndConditionsInput
          tncAccepted={tncAccepted}
          setTncAccepted={setTncAccepted}
          tncPageRoute="/user/terms-and-conditions"
        />
      </Box>

      <BottomElement>
        <FullwidthButton
          icon="NEXT"
          value="Start"
          handleOnClick={() => navigateWithSound("/user/lets-begin")}
          sx={{ fontSize: "1.25rem", padding: "20px" }}
        />
      </BottomElement>
    </Stack>
  );
};

export default LoginForm;
