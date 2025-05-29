import { Box, Stack, Typography, useTheme } from "@mui/material";
import Row from "../../../components/utility/Row";
// import miraProfile from "../../../assets/images/profiles/mira.webp";
// import yourProfile from "../../../assets/images/profiles/you.webp";

const TrustScore = () => {
  const theme = useTheme();
  return (
    <Stack alignItems={"center"} flex={"1"}>
      <Typography variant="20-500">Trust Score</Typography>
      <Box
        bgcolor={theme.palette.sysgrey.main}
        marginTop={"16px"}
        padding={"24px"}
        width={"100%"}
      >
        <Box height="380px">
          <Row sx={{ gap:"30px",padding:"0 15px",height:"100%" ,alignItems:"flex-end"}}>
            <Box flex={1} bgcolor={"#000"} height={"53%"}>
              <Box bgcolor={"#fff"} height={"120px"} width={"100%"}/>
              {/* <Box component={"img"} src={miraProfile} sx={{ width: "70%",margin:"auto auto 0" }} /> */}
            </Box>
            <Box flex={1} bgcolor={theme.palette.primary.main} height={"82%"}>
              {/* <Box component={"img"} src={yourProfile} sx={{ width: "70%",mx:"auto" }} /> */}
            </Box>
          </Row>
        </Box>
      </Box>
    </Stack>
  );
};

export default TrustScore;
