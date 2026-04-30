import { asset } from '../utils/asset'

export const expeditions = [
  {
    slug: 'vietnam-2026',
    year: '2026',
    title: 'Hanoi to Ho Chi Minh City',
    subtitle: 'A tribute to the man who first put me on a bicycle',
    distance: '1,800km',
    duration: '1 month',
    country: 'Vietnam',
    support: 'With my father',
    image: asset('pictures/meCyclingInVietnam.jpg'),
    significance: 'Full circle moment — the little girl whose dad let go of her bicycle seat, now cycling across Vietnam with him.',
    body: `There is a photograph somewhere of me at a cycling race. I am maybe seven or eight years old. My father is next to me. He looks proud. I look like I am about to go somewhere.

In 2026 I rode 1,800 kilometres through Vietnam with him — north to south, Hanoi to Ho Chi Minh City. One month on the road. It was not a solo expedition. It was a tribute.

The country unfolded slowly: rice paddies at dawn, the chaos of Hanoi traffic, mountain passes, temple gates so old they seemed to have grown from the rock. We rode in companionable silence for long stretches — the kind of silence that only makes sense between people who've been doing something together for decades.

He was the one who let go of the bicycle seat. This was my way of saying thank you.`,
    tags: ['Cycling', 'Vietnam', 'Family'],
  },
  {
    slug: 'eurovelo-2025',
    year: '2025',
    title: 'EuroVelo 8 & 11 — Skopje to Vienna',
    subtitle: '1,350km solo, fully self-supported, wild camping every night',
    distance: '1,350km',
    duration: '~3 weeks',
    country: 'Europe',
    support: 'Solo / fully self-supported',
    image: asset('pictures/meWithEuroVeloSoundInTheGround.jpg'),
    significance: 'A lifelong dream, executed alone with no support network.',
    body: `This was the one I had been building toward.

Skopje to Vienna. 1,350 kilometres. Solo. Every night in a tent. No backup, no crew, no one waiting anywhere. Just me, the bike loaded with everything I needed, and whatever the day brought.

The route followed EuroVelo 8 and 11 through North Macedonia, across into the Balkans, through Croatia and Slovenia and into Austria. I crossed borders on a bicycle. I wild-camped in forests, in fields, on the edge of rivers. I woke before dawn in a tent wet with condensation and got back on the bike.

There were days of absolute joy and days of absolute difficulty. Both were exactly what I wanted.

When I arrived in Vienna I had been on the road for weeks. I sat outside a café and ordered coffee and thought: I would do it again tomorrow.`,
    tags: ['Cycling', 'Europe', 'Solo', 'Wild Camping'],
  },
  {
    slug: 'camino-2019',
    year: '2019',
    title: 'Camino Portugués — Lisbon to Santiago',
    subtitle: 'The trip that revealed my identity as an expedition cyclist',
    distance: '~620km',
    duration: '10 days',
    country: 'Portugal / Spain',
    support: 'Solo / pilgrim shelters',
    image: asset('pictures/meWithSantiagoCathedral.JPG'),
    significance: 'First major solo cycling tour — the trip that showed me of what I was capable of.',
    body: `I didn't know it was the beginning of something.

I flew to Lisbon, put my bicycle together, and started riding north along the coast. The Camino Portugués — the coastal route to Santiago de Compostela. I stayed in pilgrim hostels. I washed my kit in hostel sinks. I rode in the rain and in brilliant Atlantic light.

I arrived at Santiago de Compostela on a bicycle, not on foot. The cathedral was there, enormous and indifferent, as it has been for centuries. I stood in front of it and thought: I need to do more of this.

Six years later, I cycled 1,350 kilometres alone through Europe. The seed was planted here.`,
    tags: ['Cycling', 'Camino', 'Solo'],
  },
]

export const disciplines = [
  {
    name: 'Paragliding',
    label: '7 Years Active',
    image: asset('pictures/meFlyingWithArenalInBackground.png'),
    credential: 'APPI Level 3 · APPI Certified · SIV Trained',
    detail: 'Flew in Colombia, Macedonia, Turkey, Nepal, Costa Rica. Competition podium — best Costa Rican female pilot, 65km XC personal record.',
  },
  {
    name: 'Cycle Touring',
    label: '3 Major Expeditions',
    image: asset('pictures/meCyclingInVietnam.jpg'),
    credential: '3,420km+ expeditions distance',
    detail: 'Way of St. James Lisbon → Santiago (2019) · Eurovelo 8 & 11 Skopje → Vienna (2025) · Hanoi → Ho Chi Minh City (2026)',
  },
  {
    name: 'Swimming',
    label: 'International Level',
    image: asset('pictures/meInOpenWaterSwimmingStart.jpg'),
    credential: 'Costa Rican National Team · 10km Race Winner',
    detail: 'Competed across Latin America from age 11. Won 10km open water race at Papagayo Bay. Next goal: Strait of Gibraltar crossing.',
  },
  {
    name: 'Kitesurfing',
    label: 'IKO Certified',
    image: asset('pictures/meWithMyKitesurfInWater.JPG'),
    credential: 'IKO Independent Rider',
    detail: 'Trained in the Red Sea, Egypt. Fully self-sufficient on open water.',
  },
  {
    name: 'Scuba Diving',
    label: 'PADI Advanced',
    image: asset('pictures/meScubaDiving.JPG'),
    credential: 'PADI Advanced Open Water',
    detail: 'Advanced open water diver, certified to 30 metres depth in Dahab, Egypt.',
  },
  {
    name: 'Rock Climbing',
    label: 'Technical Routes',
    image: asset('pictures/meRockClimbingInDahab.jpg'),
    credential: 'Indoor + Technical Outdoor',
    detail: 'Technical routes in Dahab, Egypt. Indoor training alongside outdoor expeditions.',
  },
  {
    name: 'Triathlon',
    label: 'Long Distance',
    image: asset('pictures/meAsTriathlete.JPG'),
    credential: 'Long Distance · National Background',
    detail: "Grew up competing in children's triathlon. Returned post-graduation to long-distance racing, building on a foundation of swim, bike, and run.",
  },
]
