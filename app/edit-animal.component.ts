import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'edit-animal',
  template: `
  <div *ngIf="childSelectedAnimal">
   <h4>Edit {{childSelectedAnimal.name}}</h4>
   <label>Edit the name of the animal</label>
   <input type = "text" [(ngModel)]="childSelectedAnimal.name">
   <label>Edit the age of the animal</label>
   <input type = "float" [(ngModel)]="childSelectedAnimal.age">
   <label>Edit how many caretakers are assigned to this animal</label>
   <input type = "float" [(ngModel)]="childSelectedAnimal.caretakers">
  </div>
  `
})

export class EditAnimalComponent {
  @Input() childSelectedAnimal: Animal;
  @Output() finishedEditingSender = new EventEmitter();

  finishedEditing() {
    this.finishedEditingSender.emit();
  }
}
