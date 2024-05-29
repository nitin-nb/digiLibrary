import { Box } from "@mui/material";
import axios from "axios";

export default function Home() {


const bookData = async(isbn) => {
    try{
        const result = await axios.get(`https://openlibrary.org/api/books`,{
            params: {
                bibkeys: `ISBN:${isbn}`,
                format: 'json',
                jscmd: 'data'
              }
        });

    // const bookData = result.data[`ISBN:${isbn}`];
    console.log(result);
  } catch (error) {
    console.error('Error fetching book data:', error);
  }
}

const isbn = '0451526538';
bookData(isbn);

    document.title="Digi Library";
  return (
    <Box sx={{backgroundColor:"#000", height: "96.5vh"}}>
      <Box>
        Loreum Ipsium Loreum IpsiumLoreum IpsiumLoreum IpsiumLoreum IpsiumLoreum
        IpsiumLoreum IpsiumLoreum IpsiumLoreum IpsiumLoreum IpsiumLoreum
        IpsiumLoreum IpsiumLoreum IpsiumLoreum IpsiumLoreum IpsiumLoreum
        IpsiumLoreum IpsiumLoreum IpsiumLoreum IpsiumLoreum IpsiumLoreum
        IpsiumLoreum IpsiumLoreum IpsiumLoreum IpsiumLoreum IpsiumLoreum
        IpsiumLoreum IpsiumLoreum Ipsium
      </Box>
      <Box>
        Loreum Ipsium Loreum IpsiumLoreum IpsiumLoreum IpsiumLoreum IpsiumLoreum
        IpsiumLoreum IpsiumLoreum IpsiumLoreum IpsiumLoreum IpsiumLoreum
        IpsiumLoreum IpsiumLoreum IpsiumLoreum IpsiumLoreum IpsiumLoreum
        IpsiumLoreum IpsiumLoreum IpsiumLoreum IpsiumLoreum IpsiumLoreum
        IpsiumLoreum IpsiumLoreum IpsiumLoreum IpsiumLoreum IpsiumLoreum
        IpsiumLoreum IpsiumLoreum Ipsium
      </Box>
    </Box>
  );
}
