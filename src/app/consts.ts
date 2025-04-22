export const projects = [
  {
    name: "Oi! Observe and Intervene",
    client: "UN Women UK",
    tagline: "Taught people how to Oi!",
    description: [
      "Sexism should be a thing of the past, yet unfortunately it happens daily and too often goes unchecked.",
      "Oi! Observe and Intervene is a simple way people can challenge sexism when they overhear it.",
      "All the quotes we used were overheard by real women on social media, in the workplace, or in the street."
    ],
    image: "/projects/Oi/Main.gif",
    gallery: [
      {image: "/projects/Oi/1.gif", width: 400, height: 400},
      {image: "/projects/Oi/2.jpg"},
      {image: "/projects/Oi/3.jpg"},
      {image: "/projects/Oi/4.jpg"},
      {image: "/projects/Oi/5.jpg"},
      {image: "/projects/Oi/6.gif"},
    ],
    link: "/work/how-to-oi",
  },
];

export interface Project {
  name: string;
  client: string;
  tagline: string;
  description: string[];
  image: string;
  gallery: {
    image: string, 
    width?: number,
    height?: number
  }[];
  video?: string;
  link: string;
}

export const profile = {
  image: "/something.jpg",
  background: [
    "1st sentence",
    "2nd sentence",
    "3rd sentence",
  ],
  contact: [
    "alice@revolt.agency",
    "https://www.instagram.com/alice.revolt/",
    "https://www.linkedin.com/in/alice-revolt/",
  ],
  worked: [
    {name: "Employer 1", dates: "2017-2021", link: "https://employerswebsite"},
  ],
  workedWith: [
    {brands: "List of brands"},
    {charities: "List of charities"}
  ]
}

export const projectsMobile = [
  {
    name: "The CPR Bra",
    client: "St John Ambulance",
    tagline: "Made a CPR Bra",
    description: [
      "Boobs shouldn’t be the difference between life and death. But St John Ambulance revealed that 1/3 people are afraid to give CPR to women because they are worried about inappropriate touching.",
      "We stepped in with the CPR Bra. The world’s first educational bra to bust the touch taboo.",
      "The campaign was launched on Restart a Heart day with Lioness legend Millie Bright and others. It spread far and wide on social and beyond.",
      "It was covered by BBC Breakfast, The Guardian, Forbes, The Mirror, The Daily Mail, Campaign, PR Week, Famous Campaigns and more. Plus St John Ambulance had an 26,000% traffic increase to their website!",
    ],
    image: "/projects/CPRBra/Main.png",
    gallery: [
       {image: "/projects/CPRBra/1.gif", width: 160, height: 160},
       {image: "/projects/CPRBra/2.png"},
       {image: "/projects/CPRBra/3.gif"},
       {image: "/projects/CPRBra/4.gif"},
       {image: "/projects/CPRBra/5.jpg"},
       {image: "/projects/CPRBra/6.png"},
       {image: "/projects/CPRBra/7.gif"},
       {image: "/projects/CPRBra/8.gif"},
    ],
    link: "/work/made-a-cpr-bra",
  },
];

export const features = [
  "/featured-logos/01.png",
  "/featured-logos/02.png",
  "/featured-logos/03.png",
  "/featured-logos/04.png",
  "/featured-logos/05.png",
  "/featured-logos/06.png",
  "/featured-logos/07.png",
  "/featured-logos/08.png",
  "/featured-logos/09.png",
  "/featured-logos/10.png",
  "/featured-logos/11.png",
  "/featured-logos/12.png",
  "/featured-logos/13.png",
  "/featured-logos/14.png",
  "/featured-logos/15.png",
]