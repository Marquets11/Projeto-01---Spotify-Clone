import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  musics: [
    {
      name: "Paint the Town Red",
      singer: "Doja Cat",
      album: "Paint the Town Red",
      time: "3:51",
    },
  ],
};

const musicSlice = createSlice({
  name: "music",
  initialState,
});

export default musicSlice.reducer;
