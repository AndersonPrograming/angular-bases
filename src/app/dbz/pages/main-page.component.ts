import { Component } from '@angular/core';
import { DbzService } from '../services/dbz.service';
import { Characters } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {

  constructor(private dbzService: DbzService) {}

  get characters() {
    return [...this.dbzService.characters];
  }

  onDeleteCharacter(id: string): void {
    this.dbzService.onDeleteById(id);
  }

  onNewCharacter(character: Characters): void {
    this.dbzService.addCharacter(character);
  }


}
