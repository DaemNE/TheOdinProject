import { Alert, Stack, AlertTitle, Button } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

export const MuiAlert = () => {
  return (
    <Stack spacing={2}>
      <Alert severity="error"> this is an error alert</Alert>
      <Alert severity="warning"> warning alert</Alert>
      <Alert severity="info">This is an Info alert</Alert>
      <Alert severity="success">This is a success Alert</Alert>

      <Alert variant="outlined" severity="error">
        {" "}
        this is an error alert
      </Alert>
      <Alert variant="outlined" severity="warning">
        {" "}
        warning alert
      </Alert>
      <Alert variant="outlined" severity="info">
        This is an Info alert
      </Alert>
      <Alert variant="outlined" severity="success">
        This is a success Alert
      </Alert>

      <Alert
        variant="filled"
        severity="error"
        onClose={() => alert("Close alert!")}
      >
        <AlertTitle>Error</AlertTitle> this is an error alert
      </Alert>
      <Alert variant="filled" severity="warning">
        <AlertTitle>Warning</AlertTitle> warning alert
      </Alert>
      <Alert variant="filled" severity="info">
        <AlertTitle>Info</AlertTitle>
        This is an Info alert
      </Alert>
      <Alert
        variant="filled"
        severity="success"
        icon={<CheckIcon fontSize="inherit" />}
        action={
          <Button
            color="inherit"
            size="small"
            onClick={() => alert("UNDO clicked")}
          >
            UNDO
          </Button>
        }
      >
        <AlertTitle>Success</AlertTitle>
        This is a success Alert
      </Alert>
    </Stack>
  );
};
