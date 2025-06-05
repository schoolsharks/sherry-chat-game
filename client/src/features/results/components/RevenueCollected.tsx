import { Stack, Typography, useTheme, Box } from "@mui/material";
import Row from "../../../components/utility/Row";
import CustomLineChart from "../../../components/ui/LineChart";

const RevenueCollected = () => {
  const theme = useTheme();
  
  return (
    <Stack alignItems={"center"} flex={"1"}>
      <Typography variant="25-600">Revenue Collected</Typography>
      
      <Box 
        bgcolor="#000" 
        border={`2px solid ${theme.palette.primary.main}`} 
        width={"100%"} 
        padding={"24px"} 
        marginTop={"12px"}
        borderRadius={2}
      >
        {/* Chart Component */}
        <CustomLineChart/>
        
        {/* Legend */}
        <Stack spacing={1.5} sx={{ marginTop: 2 }}>
          <Row sx={{ justifyContent: "space-between", color: "#fff" }}>
            <Row sx={{ gap: "8px" }}>
              <Box 
                width="18px" 
                height="18px" 
                bgcolor={"#fff"} 
                borderRadius={"50%"} 
              />
              <Typography variant="20-700">Your</Typography>
            </Row>
            <Typography variant="20-700">₹ 10,00,000</Typography>
          </Row>
          
          <Row sx={{ 
            justifyContent: "space-between", 
            color: theme.palette.primary.main 
          }}>
            <Row sx={{ gap: "8px" }}>
              <Box 
                width="18px" 
                height="18px" 
                bgcolor={theme.palette.primary.main} 
                borderRadius={"50%"} 
              />
              <Typography variant="20-700">Mira</Typography>
            </Row>
            <Typography variant="20-700">₹ 8,50,000</Typography>
          </Row>
        </Stack>
      </Box>
      
      <Typography 
        variant="18-400" 
        marginTop={"12px"}
        textAlign="center"
        color="#fff"
      >
        Congratulations! You have achieved your 10,00,000 goal of revenue.
      </Typography>
    </Stack>
  );
};

export default RevenueCollected;