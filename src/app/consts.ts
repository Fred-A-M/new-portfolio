export const projects = [
  {
    name: 'Alice Dowdall: Portfolio',
    client: 'Personal',
    roles: ['Developer', 'Designer'],
    tools: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript', 'Framer Motion'],
    tagline: 'A fun portfolio site for a senior advertising creative',
    description:
      'I created this portfolio site Alice Dowdall, a senior advertising creative. She wanted a homepage where emoji-style eyes followed the cursor as the user selected her projects.',
    image: '/projects/AliceDowdall/desktop1.gif',
    galleryDesktop: [
      { image: '/projects/AliceDowdall/desktop1.gif' },
      { image: '/projects/AliceDowdall/desktop2.gif' },
    ],
    galleryMobile: [
      { image: '/projects/AliceDowdall/mobile1.gif' },
      { image: '/projects/AliceDowdall/mobile2.gif' },
    ],
    link: '/work/alice-dowdall',
  },
  {
    name: 'Pokémon Explorer',
    client: 'Personal',
    roles: ['Developer', 'Designer'],
    tools: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript', 'GraphQL', 'Apollo Client'],
    tagline: 'A tool to explore the first 3 generations of Pokémon',
    description:
      'An interactive site I made to explore the first 3 generations of Pokémon. I used the public GraphQL PokéAPI to fetch the data. The user can browse through the first 3 generations of Pokémon, view their stats, and add them to a favourites list to compare later.',
    image: '/projects/Pokemon/desktop1.gif',
    galleryDesktop: [
      { image: '/projects/Pokemon/desktop1.gif' },
      { image: '/projects/Pokemon/desktop2.gif' },
    ],
    galleryMobile: [
      { image: '/projects/Pokemon/mobile1.gif' },
      { image: '/projects/Pokemon/mobile2.gif' },
    ],
    link: '/work/pokemon-explorer',
  },
  {
    name: 'Mutant Trumps',
    client: 'Personal',
    roles: ['Developer', 'Designer'],
    tools: ['React', 'JavaScript', 'CSS', 'HTML', 'Tailwind CSS', 'Dall-E'],
    tagline: "A turn-based 'trumps' game with mutant characters",
    description:
      "I created a 'Top Trumps' style game where the user plays against the computer to win the deck. I created the gameplay mechanics from scratch and designed the cards, with the mutant images generated using Dall-E.",
    image: '/projects/MutantTrumps/desktop1.gif',
    galleryDesktop: [
      { image: '/projects/MutantTrumps/desktop1.gif' },
      { image: '/projects/MutantTrumps/desktop2.gif' },
    ],
    galleryMobile: [
      { image: '/projects/MutantTrumps/mobile1.gif' },
      { image: '/projects/MutantTrumps/mobile2.gif' },
    ],
    link: '/work/mutant-trumps',
  },
];

export interface Project {
  name: string;
  client: string;
  roles: string[];
  tools: string[];
  tagline: string;
  description: string;
  image: string;
  galleryDesktop: {
    image: string;
    width?: number;
    height?: number;
  }[];
  galleryMobile: {
    image: string;
    width?: number;
    height?: number;
  }[];
  video?: string;
  link: string;
}

export const profile = {
  image: '/something.jpg',
  background: ['1st sentence', '2nd sentence', '3rd sentence'],
  contact: [
    'alice@revolt.agency',
    'https://www.instagram.com/alice.revolt/',
    'https://www.linkedin.com/in/alice-revolt/',
  ],
  worked: [{ name: 'Employer 1', dates: '2017-2021', link: 'https://employerswebsite' }],
  workedWith: [{ brands: 'List of brands' }, { charities: 'List of charities' }],
};

export const features = [
  '/featured-logos/01.png',
  '/featured-logos/02.png',
  '/featured-logos/03.png',
  '/featured-logos/04.png',
  '/featured-logos/05.png',
  '/featured-logos/06.png',
  '/featured-logos/07.png',
  '/featured-logos/08.png',
  '/featured-logos/09.png',
  '/featured-logos/10.png',
  '/featured-logos/11.png',
  '/featured-logos/12.png',
  '/featured-logos/13.png',
  '/featured-logos/14.png',
  '/featured-logos/15.png',
];
