import { Component } from "@angular/core";

@Component({
    selector: 'directives',
    templateUrl: './directives.component.html',
    styleUrls: ['./directives.component.css'],
})

export class DirectivesComponent {
    showSecret = false;
    log = [];

    onClick() {
        this.showSecret = !this.showSecret;
        // this.log.push(this.log.length + 1);
        this.log.push(new Date());
    }

}