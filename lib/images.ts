// Unsplash photos (free licence). Swap for client photography when available.
const u = (id: string) => `https://images.unsplash.com/photo-${id}`;

export const img = {
  sigiriyaDawn: { src: u("1760020052045-d1ab1631b3a1"), alt: "Sigiriya rock fortress at sunrise under pink clouds" },
  sigiriyaAerial: { src: u("1612862862126-865765df2ded"), alt: "Aerial view of Sigiriya rock rising above green forest" },
  sigiriyaPath: { src: u("1580794749460-76f97b7180d8"), alt: "Path leading to Sigiriya rock under a blue sky" },
  pidurangala: { src: u("1539576776193-2c07122e5fee"), alt: "Two travellers looking out towards Sigiriya from Pidurangala rock" },
  nineArch: { src: u("1566296314736-6eaac1ca0cb9"), alt: "Blue train crossing the Nine Arches Bridge in Ella" },
  trainWindow: { src: u("1704797389166-c7dac99fc633"), alt: "Traveller leaning out of a train window through tea country" },
  teaMist: { src: u("1760532511219-c8b7566f90af"), alt: "Tea plantation on a misty hillside" },
  teaAerial: { src: u("1544015759-237f87d55ef3"), alt: "Aerial view of tea fields and a winding road" },
  teaHills: { src: u("1578517929034-db013fd86597"), alt: "Rolling tea country hills beneath mountains" },
  leopardWater: { src: u("1621847473222-d85c022cbf07"), alt: "Leopard standing in shallow water" },
  leopard: { src: u("1728455470905-156f4278056a"), alt: "Leopard resting on a tree stump" },
  elephants: { src: u("1533484482814-3fe2d922be89"), alt: "Herd of elephants bathing in a river" },
  tusker: { src: u("1731124655617-e74233ed4a4d"), alt: "Elephant with tusks standing in water" },
  galleTower: { src: u("1770730608218-f05b82d7a1a4"), alt: "Stone steps up to the clock tower in Galle Fort" },
  galleAerial: { src: u("1579989197111-928f586796a3"), alt: "Aerial view of Galle Fort and the sea" },
  kandyTemple: { src: u("1665849050430-5e8c16bacf7e"), alt: "Temple of the Tooth beside Kandy Lake" },
  surfBeach: { src: u("1552055568-f8c4fb8c6320"), alt: "Aerial view of fishing boats on an east-coast beach" },
  stiltFishers: { src: u("1519566335946-e6f65f0f4fdf"), alt: "Stilt fishermen on wooden poles in shallow coastal water" },
  palmBeach: { src: u("1580910527739-556eb89f9d65"), alt: "Palm trees leaning over a south-coast beach" },
  coastAerial: { src: u("1734279135115-6d8984e08206"), alt: "Aerial view of a tropical beach and turquoise water" },
  riceCurry: { src: u("1742281095650-dd3c50c08772"), alt: "Sri Lankan rice and curry served on a banana leaf" },
  adamsPeak: { src: u("1593983913587-361576add259"), alt: "Adam's Peak rising above the clouds" },
  waterfall: { src: u("1609681980718-340e7f4b11d7"), alt: "Waterfall falling down a green cliff into a misty valley" },
  dambulla: { src: u("1756670164679-83f5fa92d1e1"), alt: "Row of golden Buddha statues in the Dambulla cave temple" },
  northBoats: { src: u("1559703266-747294757090"), alt: "Colourful fishing boats moored side by side" },
  kovil: { src: u("1725773682183-f0c885081ce5"), alt: "Ornate gateway tower of a Hindu temple" },
  boatSea: { src: u("1505238052661-c0cb4fc6e274"), alt: "Fisherman in a small boat on a rough sea" },
} as const;

export type Img = { src: string; alt: string };
