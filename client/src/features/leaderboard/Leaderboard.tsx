import React, { useEffect } from "react";
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

// const Flags = ({
//   flags,
//   variant,
// }: {
//   flags: number;
//   variant: "dark" | "light";
// }) => {
//   const filledFlag = variant === "dark" ? flagFilledDark : flagFilled;
//   const emptyFlag = variant === "dark" ? flagDark : flag;
//   return (
//     <Row>
//       {Array.from({ length: 3 }, (_, index) => (
//         <Box
//           component={"img"}
//           src={index < flags ? filledFlag : emptyFlag}
//           style={{ width: "18px",opacity: variant==="light" ? (index<flags ? 1 : 0.5):1 }}
//         />
//       ))}
//     </Row>
//   );
// };

const Leaderboard: React.FC<LeaderboardProps> = ({
  leaderboardData = data,
}) => {
  const theme = useTheme();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Sort users by totalStars in descending order and take the top 6
  //   const sortedUsers = [...leaderboardData.users]
  //     .sort((a, b) => b.totalStars - a.totalStars)
  //     .slice(0, 10);

  const sortedUsers = leaderboardData ? [...leaderboardData.users] : [];

  const topThree = sortedUsers.slice(0, 3).map((user, index) => ({
    rank: index + 1,
    ...user,
  }));

  const podiumOrder = [topThree[2], topThree[0], topThree[1]];

  const restOfUsers = sortedUsers.slice(3);

  return (
    <Box
      sx={{
        color: "#fff",
        minHeight: window.innerHeight,
        p: "50px 20px",
      }}
    >
      {/* Header */}
      <Box display="flex" alignItems="center" mb={2}>
        <BackButton />
        <Typography fontWeight="bold" fontSize={"25px"} ml={1}>
          Leaderboard
        </Typography>
      </Box>

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
            <Box textAlign="center" flex={1} key={index}>
              <Typography
                fontSize={"25px"}
                fontWeight="bold"
                textAlign={"left"}
              >
                #{user?.rank}
              </Typography>
              <Box
                sx={{
                  ...podiumStyles[index],
                  p: 1,
                  display: "flex",
                  flexDirection: "column",
                  flex: 1,
                }}
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
                      {user?.time}{" "}
                      {/* <StarsOutlinedIcon
                        sx={{ fontSize: 12, verticalAlign: "middle" }}
                      /> */}
                    </Typography>
                  </Box>
                </Box>
                <FlagsIndicator
                  flags={user?.flags}
                  variant={index === 0 ? "dark" : "light"}
                />
              </Box>
            </Box>
          );
        })}
      </Box>

      {/* Leaderboard List */}
      <List disablePadding>
        {restOfUsers.map((user, index) => {
          return (
            <ListItem
              key={index}
              sx={{
                p: "0",
                mb: 1,
                gap: "6px",
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
                <ListItemText
                  primary={user.name}
                  sx={{
                    ".MuiTypography-root": { fontWeight: 500 },
                  }}
                />
                <Typography sx={{ minWidth: 60 }}>{user.time}</Typography>
                <FlagsIndicator flags={user?.flags} variant="light" />

                {/* <Typography sx={{ minWidth: 50 }}>
                    {user.totalStars}{" "}
                  </Typography> */}
              </Box>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};

export default Leaderboard;
