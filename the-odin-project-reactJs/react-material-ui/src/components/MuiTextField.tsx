import { Stack, TextField } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useState } from "react";
import { IconButton } from "@mui/material";

export const MuiTextField = () => {
  const [value, setValue] = useState("");
  const [togglePassword, setTogglePassword] = useState(true);
  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction={"row"}>
        <TextField label="name" variant="outlined"></TextField>
        <TextField label="name" variant="filled"></TextField>
        <TextField label="name" variant="standard"></TextField>
      </Stack>
      <Stack spacing={2} direction={"row"}>
        <TextField
          label="small secondary"
          variant="outlined"
          size="small"
          color="secondary"
        ></TextField>
        <TextField
          label="medium warning"
          variant="outlined"
          size="medium"
          color="warning"
        ></TextField>
      </Stack>
      <Stack spacing={2} direction={"row"}>
        <TextField
          label="Form nput"
          variant="outlined"
          size="small"
          color="secondary"
          required
          value={value}
          onChange={(e) => setValue(e.target.value)}
          error={!value}
          helperText={
            !value ? "Required" : "Do not share your password with anyone"
          }
        ></TextField>
        <TextField
          label="medium warning"
          variant="outlined"
          size="medium"
          color="warning"
          helperText="Do not share your password with anyone"
        ></TextField>
        <TextField
          label="password"
          variant="outlined"
          size="medium"
          color="warning"
          type={"password"}
          disabled
          helperText="Do not share your password with anyone"
        ></TextField>
        <TextField
          label="read only"
          variant="filled"
          color="error"
          InputProps={{ readOnly: true }}
        ></TextField>
      </Stack>
      <Stack direction={"row"} spacing={2}>
        <TextField
          label="Password"
          type={togglePassword ? "password" : "text"}
          InputProps={{
            endAdornment: togglePassword ? (
              <IconButton onClick={() => setTogglePassword(false)}>
                <VisibilityIcon></VisibilityIcon>
              </IconButton>
            ) : (
              <IconButton onClick={() => setTogglePassword(true)}>
                <VisibilityOffIcon></VisibilityOffIcon>
              </IconButton>
            ),
          }}
        ></TextField>
      </Stack>
    </Stack>
  );
};
