import { Component } from "@angular/core";

@Component({
    selector: 'two-way-binding',
    templateUrl: './two-way-binding.component.html',
    styleUrls: ['./two-way-binding.component.css'],
})

export class TwoWayBindingComponent {
    
    userName = '';


    constructor(){
        
    }


    onClickReset() {
        this.userName = ''
    }



 }

