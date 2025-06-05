import { Box, Stack, Typography, useTheme } from "@mui/material";
import Row from "../../../components/utility/Row";
import DigitalProgressBar from "../../../components/ui/DigitalProgressBar";
// import miraProfile from "../../../assets/images/profiles/mira.webp";
// import yourProfile from "../../../assets/images/profiles/you.webp";

const TrustScore = () => {
  const theme = useTheme();
  return (
    <Stack alignItems={"center"} flex={"1"}>
      <Typography variant="25-600">Trust Score</Typography>
      <Box
        bgcolor={"#000"}
        marginTop={"10px"}
        padding={"24px"}
        width={"100%"}
        border={`2px solid ${theme.palette.primary.main}`}
      >
        <Stack gap={"12px"}>
          <Row sx={{ justifyContent: "space-between" }}>
            <Typography variant="24-700">Your</Typography>
            <Typography variant="24-700" color={theme.palette.primary.main}>
              75%
            </Typography>
          </Row>
          <DigitalProgressBar
            percentage={75}
            color={theme.palette.primary.main}
          />
        </Stack>


        <Stack gap={"12px"} marginTop={"42px"}>
          <Row sx={{ justifyContent: "space-between" }}>
            <Typography variant="24-700">Mira</Typography>
            <Typography variant="24-700" color={theme.palette.sysgrey.secondary}>
              62%
            </Typography>
          </Row>
          <DigitalProgressBar
            percentage={62}
            color={theme.palette.sysgrey.secondary}
          />
        </Stack>

        <Typography component={"p"} variant="20-500" marginTop={"30px"}>
          Trust benchmark to be set as <b>80%</b>
        </Typography>
      </Box>
    </Stack>
  );
};

export default TrustScore;

// import { Box, Stack, Typography, useTheme } from "@mui/material";
// import Row from "../../../components/utility/Row";
// // import miraProfile from "../../../assets/images/profiles/mira.webp";
// // import yourProfile from "../../../assets/images/profiles/you.webp";

// const TrustScore = () => {
//   const theme = useTheme();
//   return (
//     <Stack alignItems={"center"} flex={"1"}>
//       <Typography variant="25-600">Trust Score</Typography>
//       <Box
//         bgcolor={"#000"}
//         marginTop={"10px"}
//         padding={"24px"}
//         width={"100%"}
//         border={`2px solid ${theme.palette.primary.main}`}
//       >
//         <Box height="380px">
//           <Row
//             sx={{
//               gap: "30px",
//               padding: "0 15px",
//               height: "100%",
//               alignItems: "flex-end",
//               paddingBottom: "24px",
//             }}
//           >
//             <Stack
//               flex={1}
//               justifyContent="flex-end"
//               alignItems={"center"}
//               bgcolor={"#000"}
//               height={"53%"}
//               gap={"10px"}
//               position={"relative"}
//             >
//               <Typography variant="20-700" position={"absolute"} bottom={"-36px"}>Mira</Typography>
//               <Typography variant="20-700">45%</Typography>
//               <Box bgcolor={"#fff"} height={"80px"} width={"100%"} />
//             </Stack>
//             <Stack
//               flex={1}
//               justifyContent="flex-end"
//               alignItems={"center"}
//               bgcolor={theme.palette.primary.main}
//               height={"82%"}
//               gap={"10px"}
//               position={"relative"}

//             >
//               <Typography variant="20-700">80%</Typography>
//               <Typography variant="20-700" position={"absolute"} bottom={"-36px"}>Your</Typography>
//               <Box bgcolor={"#fff"} height={"80px"} width={"100%"} />
//             </Stack>
//           </Row>
//         </Box>
//           <Typography component={"p"} variant="20-300" marginTop={"30px"}>Trust benchmark to be set as <b>80%</b></Typography>
//       </Box>
//     </Stack>
//   );
// };

// export default TrustScore;
