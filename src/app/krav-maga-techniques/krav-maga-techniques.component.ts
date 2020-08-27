import {
  Component
} from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'krav-maga-techniques',
  templateUrl: './krav-maga-techniques.component.html'
})
export class KravMagaTechniquesComponent {

  public items: BehaviorSubject<any> = new BehaviorSubject([
    { id: '1', column1: 101, column2: 'Apple', column3: 'Anne eats apples' },
    { id: '2', column1: 202, column2: 'Banana', column3: 'Ben eats bananas' },
    { id: '3', column1: 303, column2: 'Pear', column3: 'Patty eats pears' },
    { id: '4', column1: 404, column2: 'Grape', column3: 'George eats grapes' },
    { id: '5', column1: 505, column2: 'Banana', column3: 'Becky eats bananas' },
    { id: '6', column1: 606, column2: 'Lemon', column3: 'Larry eats lemons' },
    { id: '7', column1: 707, column2: 'Strawberry', column3: 'Sally eats strawberries' }
  ]);

  public changeData() {
    this.items.next([
      { id: '1', column1: 101, column2: 'blah', column3: 'Anne eats apples' },
      { id: '2', column1: 202, column2: 'me', column3: 'Ben eats bananas' },
      { id: '3', column1: 303, column2: 'q', column3: 'Patty eats pears' },
      { id: '4', column1: 404, column2: 'j', column3: 'George eats grapes' },
      { id: '5', column1: 505, column2: 'l', column3: 'Becky eats bananas' },
      { id: '6', column1: 606, column2: 'i', column3: 'Larry eats lemons' },
      { id: '7', column1: 707, column2: 't', column3: 'Sally eats strawberries' }
    ]);
  }

}
