import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Box,
} from "@mui/material";
import { ticketEvent } from "../../common/ticketEvent";

const Featured = () => {
  const getRandomIndex = () => {
    const indexes: number[] = [];
    while (indexes.length < 3) {
      const randomIndex = Math.floor(Math.random() * ticketEvent.length);
      if (!indexes.includes(randomIndex)) {
        indexes.push(randomIndex);
      }
    }
    return indexes;
  };

  const getThreeFeaturedEvents: number[] = getRandomIndex();

  return (
    <Box
      sx={{
        margin: "20px 24px",
        padding: "0 50px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "300px",
      }}
    >
      {getThreeFeaturedEvents.map((index: number) => (
        <Card sx={{ maxWidth: 350, margin: "10px 20px" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              width="300"
              height="350"
              image={ticketEvent[index].image}
              alt={ticketEvent[index].name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {ticketEvent[index].name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {ticketEvent[index].date}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </Box>
  );
};

export default Featured;
