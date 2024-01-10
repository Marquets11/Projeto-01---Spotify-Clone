import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  playlists: [
    {
      title: "Today's Top Hits",
      description: "Doja Cat on top of the Hottest 50!",
      image: "https://i.scdn.co/image/ab67706f00000002023867d5cf694548540423dd",
      musics: [{}],
    },
    {
      title: "RapCaviar",
      description: "New music from Fivio Foreign, Lil Yachty and Drake.",
      image: "https://i.scdn.co/image/ab67706f000000020107a3aeac780c2d2cf621ca",
      musics: [{}],
    },
    {
      title: "All Out 2010s",
      description: "The Biggest songs of 2010.",
      image: "https://i.scdn.co/image/ab67706f00000002b0fe40a6e1692822f5a9d8f1",
      musics: [{}],
    },
    {
      title: "Today's Top Hits",
      description: "Doja Cat on top of the Hottest 50!",
      image: "https://i.scdn.co/image/ab67706f00000002023867d5cf694548540423dd",
      musics: [{}],
    },
    {
      title: "RapCaviar",
      description: "New music from Fivio Foreign, Lil Yachty and Drake.",
      image: "https://i.scdn.co/image/ab67706f000000020107a3aeac780c2d2cf621ca",
      musics: [{}],
    },
    {
      title: "All Out 2010s",
      description: "The Biggest songs of 2010.",
      image: "https://i.scdn.co/image/ab67706f00000002b0fe40a6e1692822f5a9d8f1",
      musics: [{}],
    },
  ],
};

const playlistSlice = createSlice({
  name: "playlist",
  initialState,
});

export default playlistSlice.reducer;
