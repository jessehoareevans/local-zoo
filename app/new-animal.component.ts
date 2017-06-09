import { Component, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'new-animal',
  template: `
    <h1>New Animal</h1>
    <div>
    <label>Enter the species of the animal:</label>
     <input #newSpecies>
     <label>Enter the name of the animal:</label>
     <input #newName>
     <label>Enter the age of the animal:</label>
     <input #newAge>
     <label>Enter the diet of the animal:</label>
     <input #newDiet>
     <label>Enter the location of the animal:</label>
     <input #newLocation>
     <label>Enter the amount of caretakers for the animal:</label>
     <input #newCaretakers>
     <label>Enter the sex of the animal:</label>
     <input #newSex>
     <label>Enter the likes of the animal:</label>
     <input #newLikes>
     <label>Enter the dislikes of the animal:</label>
     <input #newDislikes>
     <button> (click)="submitForm(newSpecies.value, newName.value, newAge.value, newDiet.value, newLocation.value, newCaretakers.value, newSex.value, newLikes.value, newDislikes.value); newSpecies.value=''; newName.value=''; newAge.value=''; newDiet.value=''; newLocation.value=''; newCaretakers.value=''; newSex.value=''; newLikes.value=''; newDislikes.value='';"></button>
    </div>
  `
})

export class NewAnimalComponent {
  @Output() newAnimalSender = new EventEmitter();

  submitForm(species: string, name: string, age: number, diet: string, location: string, caretakers: number, sex: string, likes: string, dislikes: string) {
    var newAnimal: Animal = new Animal(species, name, age, diet, location, caretakers, sex, likes, dislikes);
    this.newAnimalSender.emit(newAnimal);
  }
}
