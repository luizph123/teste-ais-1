export class Pokemon {
  cards: [Card];
}

export class Card {
  id: string;
  name: string;
  nationalPokedexNumber: number;
  imageUrl: string;
  imageUrlHiRes: string;
  types: [string];
  supertype: string;
  subtype: string;
  evolvesFrom: string;
  hp: string;
  retreatCost: [string];
  number: string;
  artist: string;
  rarity: string;
  series: string;
  set: string;
  setCode: string;
  attacks: [
    {
      cost: [string];
      name: string;
      text: string;
      damage: string;
      convertedEnergyCost: number;
    }
  ];
  weaknesses: [
    {
      type: string;
      value: string;
    }
  ];
}
