import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '../../node_modules/@angular/forms';
import { DefaultService } from './default.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  searchForm = new FormGroup({
    pokemonName: new FormControl('', [
      Validators.required
    ])
  });
  public pokemon: any;
  public buscando = false;
  public errorMsg = false;

  constructor(private _default: DefaultService) {}

  onSubmit() {
    this.reset();
    this.getPokemon();
    this.buscando = true;
  }
  getPokemon() {
    this._default.getPokemon(this.searchForm.value.pokemonName).subscribe(
      data => {
        this.pokemon = data;
        this.buscando = false;
      },
      error => {
        this.errorMsg = true;
        this.buscando = false;
      }
    );
  }
  reset() {
    this.buscando = false;
    this.errorMsg = false;
  }
}
