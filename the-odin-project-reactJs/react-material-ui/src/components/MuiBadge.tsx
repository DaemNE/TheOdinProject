import { Badge, Stack } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";

export const MuiBadge = () => {
  return (
    <Stack spacing={2} direction="row">
      <Badge badgeContent={5} color="primary">
        <MailIcon />
      </Badge>
      <Badge badgeContent={5} color="secondary" showZero>
        <MailIcon />
      </Badge>
      <Badge badgeContent={10} color="primary" showZero max={9}>
        <MailIcon />
      </Badge>
      <Badge variant="dot" color="primary" showZero max={9} invisible={true}>
        <MailIcon />
      </Badge>
    </Stack>
  );
};
