import { Injectable } from '@angular/core';
import {v4 as uuid} from 'uuid';

import { Characters } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {



  public characters: Characters[] = [
    {
      id: uuid(),
      name: 'Krillin',
      power: 1000,
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 9500,
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 7500,
    },
  ];


  addCharacter(character: Characters): void {
    console.log('main', character);

    const newCharacter: Characters = { id: uuid(),...character };
    this.characters.push(newCharacter);
  }

  // onDeletedCharacter(index: number): void {
  //   console.log('main', index);
  //   this.characters.splice(index, 1);
  // }
  onDeleteById(id: string): void {
    console.log('main', id);
    this.characters = this.characters.filter(character => character.id !== id);
  }

}
