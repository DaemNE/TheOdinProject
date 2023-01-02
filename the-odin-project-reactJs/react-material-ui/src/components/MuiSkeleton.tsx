import { Skeleton, Stack, Box, Avatar, Typography } from "@mui/material";
import { useEffect, useState } from "react";

export const MuiSkeleton = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <Box sx={{ width: "250px" }}>
      {loading ? (
        <Skeleton
          variant="rectangular"
          width={256}
          height={144}
          animation={"wave"}
        ></Skeleton>
      ) : (
        <img
          src="https://source.unsplash.com/random/256x144"
          alt="skeleton"
          width={256}
          height={144}
        ></img>
      )}
      <Stack
        direction={"row"}
        spacing={1}
        sx={{ width: "100%", marginTop: "12px" }}
      >
        {loading ? (
          <Skeleton
            variant={"circular"}
            height={40}
            width={40}
            animation={"wave"}
          />
        ) : (
          <Avatar>V</Avatar>
        )}
        <Stack
          sx={{
            width: "80%",
          }}
        >
          {loading ? (
            <>
              <Typography variant="body1">
                <Skeleton
                  variant="text"
                  width={"100%"}
                  animation={"wave"}
                ></Skeleton>
              </Typography>
              <Typography variant="body2">
                <Skeleton
                  variant="text"
                  width={"100%"}
                  animation={"wave"}
                ></Skeleton>
              </Typography>
            </>
          ) : (
            <>
              <Typography variant="body1">React MUI Tutorial</Typography>
            </>
          )}
        </Stack>
      </Stack>
    </Box>
  );
};
