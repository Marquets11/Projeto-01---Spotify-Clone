import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [
    {
      image: "https://t.scdn.co/images/cd59d6084c4a4c5191aeaad187246f24.jpeg",
      title: "Lançamentos de Podcasts",
    },
    {
      image: "https://t.scdn.co/images/3e8acf88a1ae408d85f65630d90b1d73.jpeg",
      title: "Podcasts Originais",
    },
    {
      image: "https://t.scdn.co/images/2f94e9acafa84ab18a012bac2a8b1f85",
      title: "Spotify Podcast Academia",
    },
    {
      image: "https://t.scdn.co/images/37c7d233782f4a7e869c0530bd85eea8.jpeg",
      title: "Playlists de Podcasts",
    },
    {
      image: "https://t.scdn.co/images/d951a2d590194722bbfffe2a99ab0e45.jpeg",
      title: "Histórias",
    },
  ],
};

const categorySlice = createSlice({
  name: "category",
  initialState,
});

export default categorySlice.reducer;
