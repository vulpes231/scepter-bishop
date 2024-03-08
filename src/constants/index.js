import { redwine, rose, chardonnay } from "../assets";
import { nairaSymbol } from "../utils";

export const mobileMenuLinks = [
  {
    id: 1,
    title: "view stock",
    number: "01",
    path: "/shop",
  },
  {
    id: 2,
    title: "know your psychedelic",
    number: "02",
    path: "",
  },
  {
    id: 3,
    title: "contact us",
    number: "03",
    path: "",
  },
];

export const blogArticles = [
  { id: 1, title: "lsd facts", link: "" },
  { id: 2, title: "mushroom facts", link: "" },
  {
    id: 3,
    title: "aderall facts",
    link: "https://www.understood.org/en/articles/adderall",
  },
  {
    id: 4,
    title: "recommended way to take mushroom",
    link: "https://www.psilocybinsf.com/blog/what-is-lemon-tek",
  },
  {
    id: 5,
    title: "why do we think time is an illusion while on a trip?",
    link: "https://www.psilocybinsf.com/blog/time-is-an-illusion-while-on-trip",
  },
  {
    id: 6,
    title: "guidelines for being an effective trip sitter",
    link: "https://www.psilocybinsf.com/blog/guidelines-for-being-an-effective-trip-sitter",
  },
  {
    id: 7,
    title: "5 must-read books about psychedelics",
    link: "https://www.psilocybinsf.com/blog/5-must-read-books-in-psychedelics",
  },
  {
    id: 8,
    title: "the synergy between music and psychedelics",
    link: "https://www.psilocybinsf.com/blog/the-synergy-between-music-and-psychedelics",
  },
  {
    id: 9,
    title: "5 must-watch documentaries in psychedelics",
    link: "https://www.psilocybinsf.com/blog/5-must-watch-documentaries-in-psychedelics",
  },
];

export const myQuotes = [
  {
    id: 1,
    quote: `Psychedelics show you what’s in and on your mind, those subconscious thoughts and feelings that are hidden, covered up, forgotten, out of sight, maybe even completely unexpected, but nevertheless imminently present.`,
    author: "Rick Strassman",
  },
  {
    id: 2,
    quote: `Taking LSD was a profound experience, one of the most important things in my life. LSD shows you that there’s another side to the coin, and you can’t remember it when it wears off, but you know it. It reinforced my sense of what was important, creating great things instead of making money, putting things back into the stream of history and of human consciousness as much as I could.`,
    author: "Steve Jobs",
  },
  {
    id: 3,
    quote: `Psychedelics are catalysts for a deeper understanding of the mind and consciousness.`,
    author: "Stanislav Grof",
  },
  {
    id: 4,
    quote: `If life wasn't real, it would be the craziest psychedelic trip ever.`,
    author: "Joe Rogan",
  },
];

export const shopItems = [
  {
    id: 1,
    name: "mushroom",
    desc: "",
    img: redwine,
    price: `${nairaSymbol} 15,000 per gram`,
  },
  {
    id: 2,
    name: "aderall",
    desc: "",
    img: rose,
    price: `${nairaSymbol} 25,000 per gram`,
  },
  {
    id: 3,
    name: "lsd",
    desc: "",
    img: chardonnay,
    price: `${nairaSymbol} 15,000 per tab`,
  },
];
