import {Pipe, PipeTransform} from '@angular/core';
import {Animal} from  './animal.model';

@Pipe({
  name: "caretaker",
  pure: false
})

export class CaretakerPipe implements PipeTransform {
  transform(input: Animal[], animalCaretaker) {
    var output: Animal[] = [];
    if(animalCaretaker === "notMany") {
      for (var i = 0; i <input.length; i++) {
        if (input[i].caretakers < 3) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (animalCaretaker === "many"){
      for (var i = 0; i <input.length; i++) {
        if (input[i].caretakers > 3) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
