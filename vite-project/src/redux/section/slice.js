import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sections: [
    {
      title: "Podcasts",
      backgroundColor: "bg-blue-700",
      image: "https://i.scdn.co/image/567158eb895ad26718a814345af0fc43ee785ec5",
    },
    {
      title: "Feito para você",
      backgroundColor: "bg-blue-900",
      image: "https://t.scdn.co/images/ea364e99656e46a096ea1df50f581efe",
    },
    {
      title: "Paradas",
      backgroundColor: "bg-purple-500",
      image:
        "https://charts-images.scdn.co/assets/locale_en/regional/weekly/region_global_default.jpg",
    },
    {
      title: "Novos Lançamentos",
      backgroundColor: "bg-rose-400",
      image: "https://i.scdn.co/image/ab67706f000000027ea4d505212b9de1f72c5112",
    },
    {
      title: "Descobrir",
      backgroundColor: "bg-purple-400",
      image: "https://t.scdn.co/images/d0fb2ab104dc4846bdc56d72b0b0d785.jpeg",
    },
    {
      title: "Eventos ao vivo",
      backgroundColor: "bg-teal-400",
      image: "https://concerts.spotifycdn.com/images/live-events_category-image.jpg",
    },
    {
      title: "Brasil",
      backgroundColor: "bg-red-400",
      image: "https://t.scdn.co/images/131fcbdd35ab418ca6df1fdb3038812f.jpeg",
    },
    {
      title: "Sertanejo",
      backgroundColor: "bg-teal-600",
      image: "https://t.scdn.co/images/8e6eaf8b5c9449fdbb689a4fdace1f25.jpeg",
    },
    {
      title: "EQUAL",
      backgroundColor: "bg-green-500",
      image: "https://i.scdn.co/image/ab67706f0000000284a1ec26f589f0d569805a07",
    },
  ],
};

const sectionSlice = createSlice({
  name: "section",
  initialState,
});

export default sectionSlice.reducer;
