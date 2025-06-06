import { Box, Stack, Typography } from "@mui/material";
import Page from "../../../components/layout/Page";
import BottomElement from "../../../components/ui/BottomElement";
import FullwidthButton from "../../../components/ui/FullwidthButton";
import meetSherryGraphic1 from "../../../assets/images/meet-sherry-graphic-1.webp";
import meetSherryGraphic2 from "../../../assets/images/meet-sherry-graphic-2.webp";
import meetSherryGraphic3 from "../../../assets/images/meet-sherry-graphic-3.webp";
import { motion } from "framer-motion";
import ComicCard from "../../../components/ui/ComicCard";
import IdfcLogo from "../../../components/ui/IdfcLogo";


const MeetSherry = ({ handleNextPage }: { handleNextPage: () => void }) => {
  return (
    <Page>
      <Stack padding={"0 16px"}>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{display:"flex",alignItems:"center",marginTop:"40px",justifyContent:"space-between"}}
        >
          <Typography  variant="h1">
            Meet Sherry
          </Typography>
          <IdfcLogo/>
        </motion.div>

        <Stack marginTop={"38px"} gap={"10px"}>
          <ComicCard
            image={meetSherryGraphic1}
            messageContent={<Content1 />}
            imagePosition={{ right: 20 }}
            messagePosition={{ left: 20 }}
          />
          <ComicCard
            image={meetSherryGraphic2}
            messageContent={<Content2 />}
            imagePosition={{ left: 20 }}
            messagePosition={{ right: 20 }}
          />
          <ComicCard
            image={meetSherryGraphic3}
            messageContent={<Content3 />}
            imagePosition={{ right: 20 }}
            messagePosition={{ left: 20 }}
          />
        </Stack>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 2.8 }}
        >
          <Typography
            variant="12-400"
            component={"p"}
            textAlign={"center"}
            marginTop={"23px"}
          >
            "A game of choices , every decision comes with shift in revenue and
            trust."
          </Typography>
        </motion.div>
      </Stack>

      <BottomElement>
        <FullwidthButton
          icon="NEXT"
          value="Meet Others"
          handleOnClick={handleNextPage}
          sx={{ fontSize: "1.25rem", padding: "20px" }}
        />
      </BottomElement>
    </Page>
  );
};

export default MeetSherry;

const Content1 = () => {
  return (
    <Box paddingRight={"54px"}>
      <Typography variant="20-600" component={"p"} lineHeight={"24px"}>
        Hi! <br /> I am Sherry...
      </Typography>
      <Typography variant="16-400" component={"p"}>
        Your line manager.
      </Typography>
    </Box>
  );
};

const Content2 = () => {
  return (
    <Box paddingLeft="20px">
      <Typography variant="16-400" component={"p"} textAlign={"right"}>
        Your Goal is to
        <br />
        Achieve <b>₹10,000,000</b>
        <br /> in revenue
      </Typography>
    </Box>
  );
};

const Content3 = () => {
  return (
    <Box paddingRight={"54px"}>
      {/* Image animation - comes from right */}

      <Typography variant="16-400" component={"p"}>
        and
        <br />
        Maintain <b>100% trust</b> {" "}
        with <br />
        the bank
      </Typography>
    </Box>
  );
};
