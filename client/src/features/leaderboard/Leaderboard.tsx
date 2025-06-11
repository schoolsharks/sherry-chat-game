import React, { useEffect } from "react";
import { motion } from "framer-motion";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  useTheme,
} from "@mui/material";
import BackButton from "../../components/ui/BackButton";
import FlagsIndicator from "../../components/ui/FlagsIndicator";

const data = {
  users: [
    { name: "Neha", time: "2min", flags: 1 },
    { name: "Rahul", time: "3min", flags: 1 },
    { name: "Amit", time: "4min", flags: 1 },
    { name: "Priya", time: "5min", flags: 1 },
    { name: "Sita", time: "6min", flags: 1 },
    { name: "Ravi", time: "7min", flags: 1 },
    { name: "Anjali", time: "8min", flags: 1 },
    { name: "Karan", time: "9min", flags: 1 },
    { name: "Pooja", time: "10min", flags: 1 },
    { name: "Vikram", time: "11min", flags: 1 },
  ],
};

interface LeaderboardData {
  users: Array<{
    name: string;
    time: string;
    flags: number;
  }>;
}

interface LeaderboardProps {
  leaderboardData?: LeaderboardData;
}

const Leaderboard: React.FC<LeaderboardProps> = ({
  leaderboardData = data,
}) => {
  const theme = useTheme();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sortedUsers = leaderboardData ? [...leaderboardData.users] : [];

  const topThree = sortedUsers.slice(0, 3).map((user, index) => ({
    rank: index + 1,
    ...user,
  }));

  const podiumOrder = [topThree[2], topThree[0], topThree[1]];

  const restOfUsers = sortedUsers.slice(3);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Box
        sx={{
          color: "#fff",
          minHeight: window.innerHeight,
          p: "50px 20px",
        }}
      >
        {/* Header */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Box display="flex" alignItems="center" mb={2}>
            <BackButton />
            <Typography fontWeight="bold" fontSize={"25px"} ml={1}>
              Leaderboard
            </Typography>
          </Box>
        </motion.div>

        {/* Top 3 Podium */}
        <Box
          display="flex"
          mb="18px"
          gap={"10px"}
          alignItems="flex-end"
          mt={"24px"}
          width={"100%"}
        >
          {podiumOrder.map((user, index) => {
            const podiumStyles = [
              { height: 180, background: "rgba(209, 209, 214, 1)" }, // #3
              { height: 330, backgroundColor: theme.palette.primary.main }, // #1
              { height: 260, background: "rgba(70, 70, 70, 1)" }, // #2
            ];

            return (
              <motion.div
                key={index}
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.4 + index * 0.2,
                  ease:"easeOut",
                }}
                style={{ flex: 1, textAlign: "center" }}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: 0.8 + index * 0.1,
                    ease:"easeOut",
                  }}
                >
                  <Typography
                    fontSize={"25px"}
                    fontWeight="bold"
                    textAlign={"left"}
                  >
                    #{user?.rank}
                  </Typography>
                </motion.div>
                
                <motion.div
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: 0.6 + index * 0.2,
                    ease: "easeOut"
                  }}
                  style={{ transformOrigin: "bottom" }}
                >
                  <Box
                    sx={{
                      ...podiumStyles[index],
                      p: 1,
                      display: "flex",
                      flexDirection: "column",
                      flex: 1,
                    }}
                  >
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                    >
                      <Box
                        display={"flex"}
                        flexDirection={"row"}
                        justifyContent={"space-between"}
                      >
                        <Typography color={index === 0 ? "black" : "inherit"}>
                          {user?.name}
                        </Typography>
                        <Box display={"flex"} alignItems={"center"} gap={1}>
                          <Typography
                            fontSize="14px"
                            color={index === 0 ? "black" : "inherit"}
                            sx={{
                              textWrap: "nowrap",
                            }}
                          >
                            {user?.time}
                          </Typography>
                        </Box>
                      </Box>
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: 1.4 + index * 0.1 }}
                    >
                      <FlagsIndicator
                        flags={user?.flags}
                        variant={index === 0 ? "dark" : "light"}
                      />
                    </motion.div>
                  </Box>
                </motion.div>
              </motion.div>
            );
          })}
        </Box>

        {/* Leaderboard List */}
        <List disablePadding>
          {restOfUsers.map((user, index) => {
            return (
              <motion.div
                key={index}
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ 
                  duration: 0.5, 
                  delay: 1.6 + index * 0.1,
                  ease: "easeOut"
                }}
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.98 }}
              >
                <ListItem
                  sx={{
                    p: "0",
                    mb: 1,
                    gap: "6px",
                  }}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ 
                      duration: 0.3, 
                      delay: 1.8 + index * 0.05,
                      ease:"easeOut",
                    }}
                  >
                    <Box
                      sx={{
                        backgroundColor: "#333",
                        color: "#fff",
                        p: "5px",
                      }}
                    >
                      <Typography>{String(index + 4).padStart(2, "0")}</Typography>
                    </Box>
                  </motion.div>
                  
                  <Box
                    sx={{
                      backgroundColor: "#333",
                      color: "#fff",
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      flex: "1",
                      alignItems: "center",
                      px: 1,
                    }}
                  >
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 1.9 + index * 0.05 }}
                    >
                      <ListItemText
                        primary={user.name}
                        sx={{
                          minWidth:"90px",
                          ".MuiTypography-root": { fontWeight: 500 },
                        }}
                      />
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 2.0 + index * 0.05 }}
                    >
                      <Typography sx={{ minWidth: 60 }}>{user.time}</Typography>
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 2.1 + index * 0.05 }}
                    >
                      <FlagsIndicator flags={user?.flags} variant="light" />
                    </motion.div>
                  </Box>
                </ListItem>
              </motion.div>
            );
          })}
        </List>
      </Box>
    </motion.div>
  );
};

export default Leaderboard;