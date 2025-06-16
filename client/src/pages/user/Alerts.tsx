// import { Box } from "@mui/material";
// import { useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { alertMapper } from "../../features/alerts/alertMapper";
// import useNavigateWithSound from "../../features/sound/hooks/useNavigateWithSound";

// const Alerts = () => {
//   const { page } = useParams();
//   const navigateWithSound = useNavigateWithSound();

//   useEffect(() => {
//     if (!page) {
//       navigateWithSound("/user/alerts/1");
//     }
//   }, [page, navigateWithSound]);

//   return <Box>
//     {
//       alertMapper(Number(page))
//     }

//   </Box>;
// };

// export default Alerts;
