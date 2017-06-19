import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
  <select (change)="onChange($event.target.value)">
    <option value="allAnimals" selected="selected">All Animals</option>
    <option value="underTwo">All Animals Under 2 Years Old</option>
    <option value="overTwo">All Animals Over 2 Years Old</option>
  </select>

  <select (change)="onCaretakerChange($event.target.value)">
    <option value="allCaretakers" selected="selected">Animals regardless of caretakers</option>
    <option value="notMany" >Animals with less than three caretakers</option>
    <option value="many">Animals with more than 3 caretakers</option>
  </select>

  <ul>
   <li *ngFor="let currentAnimal of childAnimalList | age:filterByAge | caretaker:filterByCaretaker"> This {{currentAnimal.species}}'s name is {{currentAnimal.name}}, this animal is {{currentAnimal.age}} years old. They have a {{currentAnimal.diet}} diet. They are housed in the {{currentAnimal.location}} and have {{currentAnimal.caretakers}} caretakers. This animal is {{currentAnimal.sex}} and their likes are {{currentAnimal.likes}} and dislikes are {{currentAnimal.dislikes}}.
    <button class="btn btn-success" (click)="editButtonHasBeenClicked(currentAnimal)">Edit</button>
   </li>
  </ul>
  `
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  @Output() clickSender = new EventEmitter();

  filterByAge: string = "allAnimals";
  filterByCaretaker: string = "allCaretakers";

  editButtonHasBeenClicked(animalToEdit: Animal) {
    this.clickSender.emit(animalToEdit);
  }

  onChange(age) {
    this.filterByAge = age;
  }

  onCaretakerChange(caretaker) {
    this.filterByCaretaker = caretaker;
  }
}
