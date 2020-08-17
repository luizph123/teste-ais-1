import { TestBed } from '@angular/core/testing';

import { DataService } from './data.service';
import { Pokemon, Card } from '../models/pokemon';

describe('DataService', () => {
  let service: DataService;

  const dummyCardsList: Pokemon = {cards: [{
    id: 'xpto',
    name: "string",
    nationalPokedexNumber: 0,
    imageUrl: "string",
    imageUrlHiRes: "string",
    types: ["string"],
    supertype: "string",
    subtype: "string",
    evolvesFrom: "string",
    hp: "string",
    retreatCost: ["string"],
    number: "string",
    artist: "string",
    rarity: "string",
    series: "string",
    set: "string",
    setCode: "string",
    attacks: [
      {
        cost: ["string"],
        name: "string",
        text: "string",
        damage: "string",
        convertedEnergyCost: 0,
      }
    ],
    weaknesses: [
      {
        type: "string",
        value: "string",
      }
    ],
  }]}

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('data should return Card', () => {
    service.data.subscribe(res => {
      expect(res).toBeInstanceOf(Card)
    })
  })

});
