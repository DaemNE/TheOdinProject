import {
  Stack,
  ImageList,
  ImageListItem,
  Box,
  ImageListItemBar,
} from "@mui/material";
import MouseIcon from "@mui/icons-material/Mouse";

export const MuiImageList = () => {
  return (
    <Stack spacing={4}>
      <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2`}
              alt={item.title}
              loading="lazy"
            ></img>
            <ImageListItemBar
              title={item.title}
              actionIcon={
                <MouseIcon
                  color="success"
                  onClick={() => console.log(`clicked  + ${item.title}`)}
                />
              }
            ></ImageListItemBar>
          </ImageListItem>
        ))}
      </ImageList>
      <Box sx={{ width: 500, height: 450, overflowY: "scroll" }}>
        <ImageList variant="masonry" cols={3} gap={8}>
          {itemData2.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=248&fit=crop&auto=format&dpr=2`}
                alt={item.title}
                loading="lazy"
              ></img>
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </Stack>
  );
};

const itemData = [
  {
    img: "https://source.unsplash.com/random",
    title: "Breakfast",
  },
  {
    img: "https://source.unsplash.com/random",
    title: "Burger",
  },
  {
    img: "https://source.unsplash.com/random",
    title: "Camera",
  },
  {
    img: "https://source.unsplash.com/random",
    title: "Coffee",
  },
  {
    img: "https://source.unsplash.com/random",
    title: "Hats",
  },
  {
    img: "https://source.unsplash.com/random",
    title: "Honey",
  },
  {
    img: "https://source.unsplash.com/random",
    title: "Basketball",
  },
  {
    img: "https://source.unsplash.com/random",
    title: "Fern",
  },
  {
    img: "https://source.unsplash.com/random",
    title: "Mushrooms",
  },
  {
    img: "https://source.unsplash.com/random",
    title: "Tomato Basil",
  },
  {
    img: "https://source.unsplash.com/random",
    title: "Sea Star",
  },
  {
    img: "https://source.unsplash.com/random",
    title: "Bike",
  },
];
const itemData2 = [
  {
    img: "https://source.unsplash.com/random",
    title: "Breakfast",
  },
  {
    img: "https://source.unsplash.com/random",
    title: "Burger",
  },
  {
    img: "https://source.unsplash.com/random",
    title: "Camera",
  },
  {
    img: "https://source.unsplash.com/random",
    title: "Coffee",
  },
  {
    img: "https://source.unsplash.com/random",
    title: "Hats",
  },
  {
    img: "https://source.unsplash.com/random",
    title: "Honey",
  },
  {
    img: "https://source.unsplash.com/random",
    title: "Basketball",
  },
  {
    img: "https://source.unsplash.com/random",
    title: "Fern",
  },
  {
    img: "https://source.unsplash.com/random",
    title: "Mushrooms",
  },
  {
    img: "https://source.unsplash.com/random",
    title: "Tomato Basil",
  },
  {
    img: "https://source.unsplash.com/random",
    title: "Sea Star",
  },
  {
    img: "https://source.unsplash.com/random",
    title: "Bike",
  },
  {
    img: "https://source.unsplash.com/random",
    title: "Mushrooms",
  },
  {
    img: "https://source.unsplash.com/random",
    title: "Tomato Basil",
  },
  {
    img: "https://source.unsplash.com/random",
    title: "Sea Star",
  },
  {
    img: "https://source.unsplash.com/random",
    title: "Bike",
  },
  {
    img: "https://source.unsplash.com/random",
    title: "Mushrooms",
  },
  {
    img: "https://source.unsplash.com/random",
    title: "Tomato Basil",
  },
  {
    img: "https://source.unsplash.com/random",
    title: "Sea Star",
  },
  {
    img: "https://source.unsplash.com/random",
    title: "Bike",
  },
  {
    img: "https://source.unsplash.com/random",
    title: "Mushrooms",
  },
  {
    img: "https://source.unsplash.com/random",
    title: "Tomato Basil",
  },
  {
    img: "https://source.unsplash.com/random",
    title: "Sea Star",
  },
  {
    img: "https://source.unsplash.com/random",
    title: "Bike",
  },
  {
    img: "https://source.unsplash.com/random",
    title: "Mushrooms",
  },
  {
    img: "https://source.unsplash.com/random",
    title: "Tomato Basil",
  },
  {
    img: "https://source.unsplash.com/random",
    title: "Sea Star",
  },
  {
    img: "https://source.unsplash.com/random",
    title: "Bike",
  },
];
