import { Box } from "@mui/material";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { alertMapper } from "../../features/alerts/alertMapper";

const Alerts = () => {
  const { page } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!page) {
      navigate("/user/alerts/1");
    }
  }, [page, navigate]);

  return <Box>
    {
      alertMapper(Number(page))
    }

  </Box>;
};

export default Alerts;
