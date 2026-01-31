import axios from "axios";
import { type PixabayResponse } from "./types/pixabay";

const BASE_URL = "https://pixabay.com/api/";

export async function getImagesByQuery(query: string, page: number): Promise<PixabayResponse> {
  const response = await axios.get<PixabayResponse>(BASE_URL, {
    params: {
      key: '54444233-ffdc2d70c2ef035b72fb292ae', 
      q: query,
      page: page,
      per_page: 15,
      image_type: "photo",
      orientation: "horizontal",
      safesearch: true,
    },
  });

  return response.data;
}