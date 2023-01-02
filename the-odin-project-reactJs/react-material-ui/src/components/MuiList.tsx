import {
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  ListItemAvatar,
  Avatar,
  ListItemButton,
  Divider,
} from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import { useState } from "react";

export const MuiList = () => {
  const [shoppingList, setShoppingList] = useState([
    { item: "oranges", text: "healthy" },
    { item: "Bananas", text: "Curved" },
    { item: "Apples", text: "Keeps the doctor away" },
  ]);
  const [inputContent, setInputContent] = useState("");
  const [inputContentSecondary, setInputContentSecondary] = useState("");

  const handleClick = () => {
    if (!inputContent || !inputContentSecondary) return;
    setShoppingList([
      ...shoppingList,
      {
        item: inputContent,
        text: inputContentSecondary,
      },
    ]);
    setInputContent("");
    setInputContentSecondary("");
  };

  const listContent = shoppingList.map((item) => {
    return (
      <>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <ListItemAvatar>
                <Avatar>
                  <MailIcon />
                </Avatar>
              </ListItemAvatar>
            </ListItemIcon>
            <ListItemText primary={item.item} secondary={item.text} />
          </ListItemButton>
        </ListItem>
        <Divider />
      </>
    );
  });

  return (
    <Box sx={{ width: "400px", bgcolor: "#EFEFEF" }}>
      <List>{listContent}</List>
      <input
        type="text"
        name=""
        id=""
        value={inputContent}
        onChange={(event) => setInputContent(event.target.value)}
      />
      <input
        type="text"
        name=""
        id=""
        value={inputContentSecondary}
        onChange={(event) => setInputContentSecondary(event.target.value)}
      />
      <button onClick={handleClick}>Add To List</button>
    </Box>
  );
};
