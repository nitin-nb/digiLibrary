import { Box } from "@mui/material";
import axios from "axios";
import Controller from "../Controller/controller";
import { useEffect, useState } from "react";

export default function Home() {

  const [bookData, setBookData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://openlibrary.org/subjects/science_fiction.json?limit=10');
        setBookData(response.data.works);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, []);

  console.log("bookData", bookData)
  return (
    <Box sx={{height: '96.5vh' }}>
      <Box>
        <h2>Science Fiction Books</h2>
        {bookData.length > 0 ? (
          <ul>
            {bookData.map((book, index) => (
              <li key={index}>{book.title}</li>
            ))}
          </ul>
        ) : (
          <div>Loading...</div>
        )}
        {error && <div>Error: {error.message}</div>}
      </Box>
      <Box>{/* Other content */}</Box>
    </Box>
  );
}
