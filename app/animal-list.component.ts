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
  <ul>
   <li *ngFor="let currentAnimal of childAnimalList | age:filterByAge"> This {{currentAnimal.species}}'s name is {{currentAnimal.name}}, this animal is {{currentAnimal.age}} years old. Their diet consists of {{currentAnimal.diet}}. They are housed in {{currentAnimal.location}} and have {{currentAnimal.caretakers}} many caretakers. This animal is {{currentAnimal.sex}} and their likes are {{currentAnimal.likes}} and dislikes {{currentAnimal.disklikes}}.
    <button class="btn btn-success" (click)="editButtonHasBeenClicked(currentAnimal)">Edit</button>
   </li>
  </ul>
  `
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  @Output() clickSender = new EventEmitter();

  filterByAge: string = "allAnimals";

  editButtonHasBeenClicked(animalToEdit: Animal) {
    this.clickSender.emit(animalToEdit);
  }
  onChange(age) {
    this.filterByAge = age;
  }
}
