import { LinearProgress, Stack, CircularProgress } from "@mui/material";

export const MuiProgress = () => {
  return (
    <Stack spacing={2}>
      <CircularProgress color="primary" />
      <CircularProgress color="success" />
      <CircularProgress variant="determinate" color="primary" value={60} />

      <LinearProgress color="primary" />
      <LinearProgress color="success" />
      <LinearProgress variant="determinate" color="primary" value={60} />
    </Stack>
  );
};
