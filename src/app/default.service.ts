import { Injectable } from '@angular/core';
import { HttpClient } from '../../node_modules/@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DefaultService {

  private pokeApi_URL = 'https://pokeapi.co/api/v2/pokemon/';
  constructor(private _http: HttpClient) { }

  getPokemon(pokemonName: string) {
    return this._http.get(this.pokeApi_URL + pokemonName);
  }
}
