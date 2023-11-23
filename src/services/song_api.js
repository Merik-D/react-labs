import axios from "axios";

const http = axios.create({ baseURL: "http://127.0.0.1:5000/" });

export async function getAllSongs(filters) {
  const response = await http.get("songs", { params: filters });
  return response.data;
}

export async function getSongById(id) {
  const response = await http.get(`songs/${id}`);
  return response.data;
}

export async function getAuthors() {
  const response = await http.get("authors");
  return response.data.authors;
}

export async function getPrices() {
  const response = await http.get("prices");
  return response.data.prices;
}
