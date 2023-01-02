import { Box } from "@mui/material";

export const MuiResponsiveness = () => {
  return (
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
          md: "primary.dark", // 900
          lg: "secondary.light", // 1200
          xl: "secondary.main", // 1536
        },
      }}
    ></Box>
  );
};
