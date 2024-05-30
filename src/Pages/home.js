import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import axios from "axios";
import Controller from "../Controller/controller";
import { useEffect, useState } from "react";
import Loader from "../Components/loader";

export default function Home() {
  const [api, setApi] = useState([]);
  const [showLoader, setShowLoader] = useState(false);

  async function fetchBooks() {
    setShowLoader(true);
    try {
      // Search for books using the Open Library Search API
      const searchResponse = await axios.get(
        "http://openlibrary.org/search.json?q=programming"
      );
      const works = searchResponse.data.docs;

      // Get cover images for the first few books
      const booksWithImages = [];
      const maxBooks = 24; // Maximum number of books to fetch
      let booksFetched = 0;

      for (const work of works) {
        if (work.cover_i && booksFetched < maxBooks) {
          // Fetch cover image from the Open Library Covers API
          const coverImage = `https://covers.openlibrary.org/b/id/${work.cover_i}-M.jpg`;

          // Add book details and cover image URL to the result
          booksWithImages.push({
            title: work.title,
            author: work.author_name
              ? work.author_name.join(", ")
              : "Unknown Author",
            coverImage: coverImage,
            subject: work.first_sentence ? work.first_sentence[0] : "No Bio",
          });

          booksFetched++;
        }
      }
      setApi(booksWithImages);
      return booksWithImages;
    } catch (error) {
      console.error("Error fetching books:", error);
      return [];
    } finally {
      setShowLoader(false);
    }
  }
  console.log("api", api);

  useEffect(() => {
    fetchBooks();
  }, []);

  document.title = "DigiLibrary";
  return (
    <Box sx={{ overflow: "hidden" }}>
      {showLoader && <Loader />}
      <Grid md={12} sx={{ backgroundColor: "#000" }}>
        <Grid container>
          {api.map((item, index) => (
            <Grid item xs={4} md={2} m={3.1} key={index}>
              <Card sx={{ width: "100%", zIndex: 1, padding: 0.5 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="350"
                    image={item.coverImage}
                    alt="books"
                  />
                  <CardContent sx={{p: 0.5}}>
                    <Typography
                      gutterBottom
                      variant="subtitle1"
                      component="div"
                      sx={{
                        color: "#000",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="subtitle2"
                      component="div"
                      color="primary"
                      sx={{
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      Author: {item.author}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#000",
                        display: "-webkit-box",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: "vertical",
                        height: 60,
                      }}
                    >
                      {item.subject}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
}
