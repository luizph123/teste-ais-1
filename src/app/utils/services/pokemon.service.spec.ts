import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PokemonService } from './pokemon.service';
import { Pokemon } from '../models/pokemon';

describe('PokemonService', () => {
  let injector: TestBed;
  let service: PokemonService;
  let httpMock: HttpTestingController;

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
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PokemonService],
    });
    injector = getTestBed();
    service = injector.get(PokemonService);
    httpMock = injector.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getAll() should return Pokemon', () => {
    service.getAll().subscribe((res) => {
      expect(res).toEqual(dummyCardsList);
    });

    const req = httpMock.expectOne('https://api.pokemontcg.io/v1/cards');
    expect(req.request.method).toBe('GET');
    req.flush(dummyCardsList);
  });

  it('getByName() should return Pokemon', () => {
    service.getByName('string').subscribe((res) => {
      expect(res).toEqual(dummyCardsList);
    });

    const req = httpMock.expectOne('https://api.pokemontcg.io/v1/cards?name=string');
    expect(req.request.method).toBe('GET');
    req.flush(dummyCardsList);
  });

  afterEach(() => {
    httpMock.verify();
  });
});
