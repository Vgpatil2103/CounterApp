import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Counter';
  counter: number = 0;
  history: Array<string> = [];
  setCounter(type: string) {
    if (type === 'Decrement') {
      this.counter > 0 ? (this.counter -= 1) : alert("Counter value cannot be less than 0");
      this.history.unshift(`🔴Counter value is decremented by 1 current value is ${this.counter}`);
    } else if (type === 'Reset') {
      this.counter = 0;
      this.history.unshift(`🟡Counter value is been reset to ${this.counter}`);
    } else if (type === 'Increment') {
      this.counter >= 0 ? (this.counter += 1) : this.counter;
      this.history.unshift(`🟢 Counter value is incremented by 1 current value is ${this.counter}`);
    }
  }

  clearHistory(){
    this.history=[]
  }
}
