import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AxiosAdapter } from '../common/adapters/axios.adapter';
import { Pokemon } from '../pokemon/entities/pokemon.entity';
import { PokeResponse } from './interfaces/poke-response.interface';

@Injectable()
export class SeedService {

  constructor(
    @InjectModel( Pokemon.name)
    private readonly pokemonModel: Model<Pokemon>,

    private readonly http: AxiosAdapter,
  ){}

  async executeSeed() {

    console.log('jesusfchrist11')
    const pokemonToInsert: {name: string, no: number}[] = [];

    const data =  await this.http.get<PokeResponse>(
      'https://pokeapi.co/api/v2/pokemon?limit=9',
    );

    console.log('jesusfchrist22')

    data.results.forEach( res => {
      const segments = res.url.split('/');
      const no = +segments[segments.length - 2]; 
      const name = res.name;   

      console.log({name,no});

      pokemonToInsert.push({name, no});
    })

    await this.pokemonModel.insertMany(pokemonToInsert);
    return 'Seed executed';
  }
}
