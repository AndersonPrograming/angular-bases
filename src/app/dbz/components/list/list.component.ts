import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Characters } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  @Input()
  public CharacterList: Characters[] = [
    {
      id: '1',
      name: 'Trunks',
      power: 10,
    },
  ];

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();


  onDeletedCharacter(id?: string): void {
    if (!id) {
      return;
    }
    console.log('list', id);
    this.onDelete.emit(id);
  }
}
