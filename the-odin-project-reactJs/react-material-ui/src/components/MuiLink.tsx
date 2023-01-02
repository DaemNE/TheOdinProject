import { Stack, Link, Typography } from "@mui/material";

export const MuiLink = () => {
  return (
    <Stack spacing={2} direction="row" m={4}>
      <Link href="#">Link</Link>
      <Link href="#" color={"secondary"}>
        Link
      </Link>
      <Link href="#" color={"secondary"} underline="hover">
        Link
      </Link>
      <Link href="#" color={"secondary"} underline="none" variant="h2">
        Link
      </Link>
      <Typography variant="h6">
        <Link href="#" color={"secondary"} underline="none">
          Link
        </Link>
      </Typography>
    </Stack>
  );
};
