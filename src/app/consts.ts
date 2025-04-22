export const projects = [
  {
    name: 'Alice Dowdall Portfolio',
    client: 'Personal',
    description: ['Alice Dowdall Portfolio'],
    image: '/projects/AliceDowdall/desktop1.gif',
    galleryDesktop: [
      { image: '/projects/AliceDowdall/desktop1.gif' },
      { image: '/projects/AliceDowdall/desktop2.gif' },
    ],
    galleryMobile: [
      { image: '/projects/AliceDowdall/mobile1.gif' },
      { image: '/projects/AliceDowdall/mobile2.gif' },
    ],
    link: '/work/alice-dowdall-portfolio',
  },
  {
    name: 'Pokémon Explorer',
    client: 'Personal',
    description: ['Pokémon Explorer is a simple way to explore the Pokémon universe.'],
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
    description: ['A Top Trumps style turn-based game.'],
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
  description: string[];
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
