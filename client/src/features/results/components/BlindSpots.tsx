import { Box, LinearProgress, Stack, Typography, useTheme } from "@mui/material";
import Row from "../../../components/utility/Row";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

const BlindSpots = () => {
  const theme = useTheme();
  const [myVal, setMyVal] = useState(0);
  const [miraVal, setMiraVal] = useState(0);
   const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.2,
  });

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setMyVal(58);
        setMiraVal(68);
      }, 1000); // Increased from 1000ms to 1500ms for slower start

      return () => clearTimeout(timer);
    }
  } , [isInView]);


  return (
    <Stack ref={ref} alignItems={"center"}>
      <Typography variant="25-600">Blind Spots</Typography>
      <Stack gap={"15px"} marginTop={"15px"}>
        {Array.from({ length: 3 }, (_, index) => (
          <Stack
            key={index}
            bgcolor={theme.palette.primary.main}
            padding={"12px"}
            width={"100%"}
          >
            <Typography variant="14-400">
              Q{index + 1} - A major client, "SubEntity A," suddenly replaced
              authorised signers. Ms. Sherry wants to ensure no internal
              corruption was missed. The client requests two large wires
              promptly.
            </Typography>
            <Box sx={{ width: '100%', mt: 1,marginTop:"32px" }}>
              <LinearProgress 
                variant="determinate" 
                value={myVal} 
                sx={{
                  height: 12,
                  borderRadius: 5,
                  backgroundColor: "#fff" ,
                  '& .MuiLinearProgress-bar': {
                    backgroundColor: theme.palette.sysgrey.main,
                    borderRadius: 5,
                    transition: 'transform 1s ease-in-out', // Added slow transition
                  }
                }}
              />
              <Row sx={{justifyContent:"space-between",marginTop:"4px"}}>
                <Typography>You</Typography>
                <Typography>58%</Typography>
              </Row>
            </Box>
            <Box sx={{ width: '100%', mt: 1,marginTop:"32px" }}>
              <LinearProgress 
                variant="determinate" 
                value={miraVal} 
                sx={{
                  height: 12,
                  borderRadius: 5,
                  backgroundColor: "#fff" ,
                  '& .MuiLinearProgress-bar': {
                    backgroundColor: theme.palette.sysgrey.secondary,
                    borderRadius: 5,
                    transition: 'transform 1s ease-in-out', // Added slow transition
                  }
                }}
              />
              <Row sx={{justifyContent:"space-between",marginTop:"4px"}}>
                <Typography>Mira</Typography>
                <Typography>68%</Typography>
              </Row>
            </Box>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default BlindSpots;