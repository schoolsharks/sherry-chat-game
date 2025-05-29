import {Stack, Typography } from "@mui/material"
import Row from "../../../components/utility/Row"
import flagIcon from "../../../assets/images/flag.webp"
import flagFilledIcon from "../../../assets/images/flag-filled.webp"

const RiskIndicators = () => {
  return (
    <Stack alignItems={"center"}>
       <Typography variant="25-600">Risk Indicators</Typography>
       <Row sx={{marginTop:"30px"}}>
        <img src={flagFilledIcon} style={{width:"90px"}} />
        <img src={flagIcon} style={{width:"90px"}} />
        <img src={flagIcon} style={{width:"90px"}} />
       </Row>
       <Typography variant="18-400" textAlign={"center"} marginTop={"12px"}>You encountered only 1 Red Flag — that’s a good sign.</Typography>
      
    </Stack>
  )
}

export default RiskIndicators
