import { Typography } from "@mui/material";

export const MuiTypography = () => {
  return (
    <div>
      <Typography variant="h1">h1 Heading</Typography>
      <Typography variant="h2">h2 Heading</Typography>
      <Typography variant="h3">h3 Heading</Typography>
      <Typography variant="h4" component={"h1"} gutterBottom>
        h4 Heading
      </Typography>
      <Typography variant="h5">h5 Heading</Typography>
      <Typography variant="h6">h6 Heading</Typography>

      <Typography variant="subtitle1">subtitle1</Typography>
      <Typography variant="subtitle2">subtitle2</Typography>

      <Typography variant="body1">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et alias enim
        praesentium mollitia aspernatur? Repellendus aspernatur at eos accusamus
        ea, ullam saepe velit officia dolor, deserunt quidem, reiciendis nam
        maxime?
      </Typography>
      <Typography variant="body2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
        dicta ducimus at a aspernatur saepe sit animi eius. Eius doloremque
        impedit deserunt illo harum voluptatem asperiores mollitia, rerum vitae
        quisquam.
      </Typography>
    </div>
  );
};
