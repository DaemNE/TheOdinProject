import { Box } from "@mui/material";
import { styled } from "@mui/material";

const StyledBox = styled(Box)(({ theme }) => ({
  height: "255px",
  width: "255px",
  backgroundColor: theme.palette.neutral?.darker,
}));

export const MuiResponsiveness = () => {
  return (
    <>
      <Box
        sx={{
          height: "300px",
          width: {
            xs: 100, // 0
            sm: 200, // 600
            md: 300, // 900
            lg: 400, // 1200
            xl: 500, // 1536
          },
          bgcolor: {
            xs: "primary.main", // 0
            sm: "primary.light", // 600
            md: "secondary.main", // 900
            lg: "secondary.light", // 1200
            xl: "secondary.dark", // 1536
          },
        }}
      ></Box>
      <StyledBox />
    </>
  );
};
