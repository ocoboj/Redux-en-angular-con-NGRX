import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import * as actions from '../contador.actions';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styles: [
  ]
})
export class NietoComponent implements OnInit {

 contador: number;



  constructor( private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.select('contador')
    .subscribe( count => this.contador = count);
  }

  // tslint:disable-next-line: typedef
  reset() {
    this.store.dispatch( actions.reset());
  }

}
