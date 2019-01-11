import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { throwError, of, timer, from } from 'rxjs';
import { catchError, mergeMap } from 'rxjs/operators';
@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.css']
})
export class UserpageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}
