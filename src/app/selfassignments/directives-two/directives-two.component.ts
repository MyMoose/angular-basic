import { Component, OnInit } from '@angular/core';
import { bufferToggle } from 'rxjs';

@Component({
  selector: 'app-directives-two',
  templateUrl: './directives-two.component.html',
  styleUrls: ['./directives-two.component.css']
})
export class DirectivesTwoComponent implements OnInit {

  showPassword = false;
  onClickCounter = [];
  counter = 0;
  arrayOfCounts = [];

  constructor() { }

  ngOnInit(): void {
  }

  onClick = () => {
    this.showPassword = !this.showPassword;
    this.counter = this.counter + 1;
    this.onClickCounter.splice(0,1, this.counter);
    this.arrayOfCounts.push(this.arrayOfCounts.length + 1);

    
  }

  backgroundColor = () => {
    if(this.counter >= 5){
      return 'blue';
    }
    
  }

}
