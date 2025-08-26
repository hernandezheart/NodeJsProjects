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
import HartHero2 from "../assets/harthero2.png";



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
    status: "Online",
    bio: "quack quack",
    avatarUrl: "https://scontent.fmnl4-1.fna.fbcdn.net/v/t39.30808-6/480805951_1689258051969002_120274337568902222_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeGteieFw_cQYaoW0Zx-nyMBt6iPA-9AMGK3qI8D70AwYi7_JB2i-3FVtxUV3T4U1YEZJn-b8eaCNyP2uQLmyJQG&_nc_ohc=RiWT4cZm_CQQ7kNvwE7Zkdd&_nc_oc=AdmTCnxz54M_V7x_ZsXIVoLtTm0YsphS66zJc3JaxZQmsEU9WrZWergdEj5ph4S7jJA&_nc_zt=23&_nc_ht=scontent.fmnl4-1.fna&_nc_gid=MsW4pTsWUWsfTg_r-SNvdQ&oh=00_AfX_PGh4jaPKeaaRWycRpCBtPWHgt79-E0xluq_daOZ8wQ&oe=68B369E4",
    games: [  
      { name: "GTA V",          cover: "https://wallpapersok.com/images/high/4k-gta-5-logo-on-plane-above-los-santos-vi4dn38abgxw74qn.jpg",   hours: 348 },
      { name: "FiveM",          cover: "https://scontent.fmnl4-4.fna.fbcdn.net/v/t39.30808-6/465923794_10223383321006323_4841337855170187016_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=2285d6&_nc_eui2=AeE_KEdms7ga47ebLgVGq-dffITKGf1eNrt8hMoZ_V42u-thIXp9NQP-h-fbBqAF6pT4lfxRErzdnaBjwjM_-BXw&_nc_ohc=zAgRsowU3DMQ7kNvwGgpLrz&_nc_oc=Adn1LbnbcxuFpokEVxvDRsODaJ83v8g4BEnxs3ez0sS4nWNhhn2b0sA1cPFjQ8IPabA&_nc_zt=23&_nc_ht=scontent.fmnl4-4.fna&_nc_gid=FhTFCgdFpO9nf3zJnR9jww&oh=00_AfXgqF2ra8CGrEuAlxRnrh9Hpt3SoL5mu5Z0Vb6nQYrD3w&oe=68B33DF9",       hours: 237 },
      { name: "Roblox",         cover: "https://cdn.buttercms.com/ORMyMISWTDas1y0KNm0j",       hours: 234 },
      { name: "Valorant",       cover: "https://wallpapers.com/images/hd/3440x1440p-valorant-background-uznol55s8v0uyv74.jpg",        hours: 165 },
      { name: "The Sims 4",     cover: "https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2022/10/The-Sims-4-splash-screen.jpg",        hours: 147 },
      { name: "Stardew Valley", cover: "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000001801/7aa9c6cf5e7d4cecf481f18b1d7a9d79e7aab85045b22203effb2dda409bc5b7",        hours: 81 },
      { name: "Raft",           cover: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/648800/capsule_616x353.jpg?t=1727184011",        hours: 73 },
      { name: "The Forest",     cover: "https://hb.imgix.net/2784f189723e79e7b6ebf8104d31cb2d3c4d60eb.jpeg?auto=compress,format&fit=crop&h=353&w=616&s=129dd0664da138d6f114481b11d3d90e",        hours: 35 },
    ],
    milestones: [
      "Survived the Forest",
      "Minor Cannibalism in The Forest",
      "Reached Rank 50 in GTA V",
      "Reached Rank Bronze 3 in Valorant",
      "Reached Year 3 in Stardew Valley", 
      "Intermediate Shark Hunter in Raft",
      "Defeated the Ender Dragon in Minecraft",
      "Caught 10 different fish in Stardew Valley",
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
    username: "zuproc",
    status: "Offline",
    bio: "Gamer, Developer, Pool Player",
    avatarUrl: "https://scontent.fmnl40-1.fna.fbcdn.net/v/t39.30808-6/483562825_9372489262843093_4152535215521198301_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=NZaeUlSSWZoQ7kNvwGvznGb&_nc_oc=Adm_Djtvbny1NrWd6qdH932L0Yi6zfqcnUU9pnMczVfIwa-YIH_f2glksaHrqTj8nkQ&_nc_zt=23&_nc_ht=scontent.fmnl40-1.fna&_nc_gid=0C_kMJJOZAKcxv75Qbb2eA&oh=00_AfUyXVMl8P45s8MLEMniTMoq9QNhKBKcCXLx1etplaHAaw&oe=68B3AE37",
    heroImage: "https://plus.unsplash.com/premium_photo-1661843402797-d51337c5e42e?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z29yaWxsYXxlbnwwfHwwfHx8MA%3D%3D/300x200", // fallback
    games: [
      { name: "8 Ball",        cover: "https://play-lh.googleusercontent.com/_Jdpvdh_23fm5BUZxx-Dg_l5xT8iAJzHzaI_JYDrbkqfDxJ7indVI27lMhgrQblv0g=w526-h296-rw",        hours: 43830  },
      { name: "Valorant",    cover: " https://wallpapers.com/images/featured/valorant-thumbnail-gtrf9127f9y5jxm3.jpg",    hours: 350  },
      { name: "PUBG",        cover: "https://e1.pxfuel.com/desktop-wallpaper/223/615/desktop-wallpaper-gaming-pubg-mobile-thumbnail-youtube.jpg",        hours: 350 },
      { name: "COD: Warzone",         cover: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8f8a8fd3-ddb1-4928-aff3-b2bdd840fe38/dg6jcx0-fdae5e9d-472a-4e60-bfd6-8041a4b698d8.png/v1/fill/w_1600,h_900,q_80,strp/youtube_thumbnail_call_of_duty_by_juzoyena_dg6jcx0-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTAwIiwicGF0aCI6IlwvZlwvOGY4YThmZDMtZGRiMS00OTI4LWFmZjMtYjJiZGQ4NDBmZTM4XC9kZzZqY3gwLWZkYWU1ZTlkLTQ3MmEtNGU2MC1iZmQ2LTgwNDFhNGI2OThkOC5wbmciLCJ3aWR0aCI6Ijw9MTYwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.Ez87ohUSePWp3kgrYt_dVmzAorUOMXPt3y9dtg7KJqA",         hours: 260 },
      { name: "CSGO",        cover: "https://e1.pxfuel.com/desktop-wallpaper/937/124/desktop-wallpaper-cs-go-gaming-thumbnail.jpg",        hours: 70  },
      
     
    ],
    milestones: [
      "Achieved Quadro Ace",
      "5 Winner Winner, Chicken Dinner in Single Night",
      "Reached Grandmaster in 1 week",
    ],
  },
];
