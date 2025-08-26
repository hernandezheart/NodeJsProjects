import Rho from "../assets/Rho.jpg";
import Valorant from "../assets/Valorant.jpg";
import Minecraft from "../assets/Minecraft.png";
import BG3 from "../assets/BG3.jpg";
import LOL from "../assets/LOL.jpg";
import Warframe from "../assets/Warframe.jpg";
import Roblox from "../assets/Roblox.jpg";
import Overwatch from "../assets/Overwatch.png";
import Marvel from "../assets/Marvel.jpg";
import Sims from "../assets/Sims.jpg";
import Viper from "../assets/Viper.png";



// Uses the same shape your components expect
export const Players = [
  {
    code: "member1",
    name: "Rhozeth Carl Muyot",
    username: "Croakie",
    status: "Online",
    bio: "Gamer, Developer, Content Creator",
    avatarUrl: Rho,
    heroImage: Viper, // fallback
    games: [
      { name: "Valorant",            cover: Valorant,     hours: 350 },
      { name: "Minecraft",           cover: Minecraft,    hours: 512 },
      { name: "Baldur's Gate 3",     cover: BG3,          hours: 400  },
      { name: "LOL",                 cover: LOL,          hours: 300  },
      { name: "The Sims 4",          cover: Sims,         hours: 240  },  
      { name: "Warframe",            cover: Warframe,     hours: 174 },
      { name: "Marvel Rivals",       cover: Marvel,       hours: 120  },
      { name: "Roblox",              cover: Roblox,       hours: 870 },
      { name: "Overwatch",           cover: Overwatch,    hours: 85  },
    ],
    milestones: [
      "Achieved clutch in Valorant",
      "Defeated the Ender Dragon in Minecraft",
      "Got an Ace in Valorant",
      "30 Assists in a single match of Marvel Rivals",
    ],
  },
  {
    code: "member2",
    name: "Heart Hernandez",
    username: "goozart",
    status: "Offline",
    bio: "Casual Gamer",
    avatarUrl: "https://placehold.co/90x90",
    heroImage: "https://placehold.co/300x200", // fallback
    games: [  
      { name: "Minecraft",   cover: "https://placehold.co/300x200?text=Minecraft",   hours: 500 },
      { name: "GTA V",       cover: "https://placehold.co/300x200?text=GTA+V",       hours: 200 },
      { name: "Sims4",       cover:"https://placehold.co/300x200?text=Sims4",        hours: 75  },
      { name: "Roblox",      cover: "https://placehold.co/300x200?text=Roblox",      hours: 90  },
      { name: "CS2",         cover: "https://placehold.co/300x200?text=CS2",         hours: 135 },
      { name: "Sims4",       cover:"https://placehold.co/300x200?text=Sims4",        hours: 75  },
      { name: "CS2",         cover: "https://placehold.co/300x200?text=CS2",         hours: 135 },
      { name: "Sims4",       cover:"https://placehold.co/300x200?text=Sims4",        hours: 75  },
      { name: "CS2",         cover: "https://placehold.co/300x200?text=CS2",         hours: 135 },
      { name: "Sims4",       cover:"https://placehold.co/300x200?text=Sims4",        hours: 75  },
    ],
    milestones: [
      "Achieved clutch in Valorant",
      "Defeated the Ender Dragon in Minecraft",
      "Completed Elden Ring without dying",
      "Achieved clutch in Valorant",
      "Defeated the Ender Dragon in Minecraft",
      "Completed Elden Ring without dying",
      "Defeated the Ender Dragon in Minecraft",
      "Completed Elden Ring without dying",
    ],
  },
  {
    code: "member3",
    name: "Arabela Raine Alfonso",
    username: "sesamehh",
    status: "Online",
    bio: "Gamer, Developer, Content Creator",
    avatarUrl: "https://placehold.co/90x90",
    heroImage: "https://placehold.co/300x200", // fallback
    games: [
      { name: "LoL",         cover: "https://placehold.co/300x200?text=LoL",         hours: 250 },
      { name: "Dota 2",      cover: "https://placehold.co/300x200?text=Dota+2",      hours: 110 },
      { name: "Honkai",      cover: "https://placehold.co/300x200?text=Honkai",      hours: 45  },
      { name: "OW2",         cover: "https://placehold.co/300x200?text=OW2",         hours: 80  },
      { name: "Diablo IV",   cover: "https://placehold.co/300x200?text=Diablo+IV",   hours: 35  },
    ],
    milestones: [
      "Achieved clutch in Valorant",
      "Defeated the Ender Dragon in Minecraft",
      "Completed Elden Ring without dying",
    ],
  },
  {
    code: "member4",
    name: "Jan Ryza Bacsal",
    username: "Azelea",
    status: "Offline",
    bio: "Gamer, Developer, Content Creator",
    avatarUrl: "https://placehold.co/90x90",
    heroImage: "https://placehold.co/300x200", // fallback
    games: [
      { name: "Starfield",   cover: "https://placehold.co/300x200?text=Starfield",   hours: 55  },
      { name: "Hades",       cover: "https://placehold.co/300x200?text=Hades",       hours: 140 },
      { name: "PoE",         cover: "https://placehold.co/300x200?text=PoE",         hours: 220 },
      { name: "FFXIV",       cover: "https://placehold.co/300x200?text=FFXIV",       hours: 300 },
      { name: "Lost Ark",    cover: "https://placehold.co/300x200?text=Lost+Ark",    hours: 60  },
    ],
    milestones: [
      "Achieved clutch in Valorant",
      "Defeated the Ender Dragon in Minecraft",
      "Completed Elden Ring without dying",
    ],
  },
  {
    code: "member5",
    name: "Emmanuel Corpuz",
    username: "emman",
    status: "Online",
    bio: "Gamer, Developer, Content Creator",
    avatarUrl: "https://placehold.co/90x90",
    heroImage: "https://placehold.co/300x200", // fallback
    games: [
      { name: "Fortnite",    cover: "https://placehold.co/300x200?text=Fortnite",    hours: 95  },
      { name: "PUBG",        cover: "https://placehold.co/300x200?text=PUBG",        hours: 180 },
      { name: "COD",         cover: "https://placehold.co/300x200?text=COD",         hours: 260 },
      { name: "Apex",        cover: "https://placehold.co/300x200?text=Apex",        hours: 70  },
      { name: "Halo",        cover: "https://placehold.co/300x200?text=Halo",        hours: 25  },
    ],
    milestones: [
      "Achieved clutch in Valorant",
      "Defeated the Ender Dragon in Minecraft",
      "Completed Elden Ring without dying",
    ],
  },
];
