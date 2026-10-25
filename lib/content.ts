export type Project = {
  id: string;
  title: string;
  location: string;
  year: string;
  type: string;
  image: string;
  alt: string;
};

export const projects: Project[] = [
  {
    id: "house-of-stillness",
    title: "House of Stillness",
    location: "New Delhi, India",
    year: "2026",
    type: "Private residence · 280 m²",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=85",
    alt: "Minimal modern residence with a quiet palette of stone, glass, and greenery",
  },
  {
    id: "courtyard-in-between",
    title: "Courtyard, In Between",
    location: "Jaipur, India",
    year: "2025",
    type: "Hospitality · Adaptive reuse",
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1400&q=85",
    alt: "Sunlit contemporary courtyard with tactile natural materials",
  },
  {
    id: "the-long-light",
    title: "The Long Light",
    location: "Alibaug, India",
    year: "2024",
    type: "Coastal retreat · 190 m²",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85",
    alt: "Contemporary architecture opening toward a planted outdoor landscape",
  },
];

export const archiveItems = [
  { number: "A—01", title: "On the weight of light", kind: "Field note", date: "09.26" },
  { number: "A—02", title: "The honesty of stone", kind: "Material study", date: "06.26" },
  { number: "A—03", title: "A courtyard is a pause", kind: "Critical text", date: "02.26" },
  { number: "A—04", title: "Edges, thresholds, and time", kind: "Sketchbook", date: "11.25" },
];
