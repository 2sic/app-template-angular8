import { Component, OnInit } from '@angular/core';
import { Data } from '@2sic.com/dnn-sxc-angular';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'person-list',
    templateUrl: './person-list.component.html',
    //template: `List of all persons:<br> <person *ngFor="let person of persons" [person]="person"></person>`
})
export class PersonListComponent implements OnInit {
    persons: Person[];

    constructor(
        private data: Data
    ) {
    }

    ngOnInit() {
        this.data.content<Person>('person').get()
            .subscribe(persons => this.persons = persons);
    }
}

class Person {
    Name: string;
}
