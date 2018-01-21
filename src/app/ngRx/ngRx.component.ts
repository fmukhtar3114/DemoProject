import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { INCREMENT, DECREMENT, RESET } from './reducer';
import { Component } from '@angular/core';

interface AppState {
  counter: number;
}

@Component({
	selector: 'ngRx',
	templateUrl:'ngRx.component.html'
})
export class NgRxComponent {
	counter: Observable<number>;

	constructor(private store: Store<AppState>) {
		this.counter = store.select('counter');
	}

	increment(){
		this.store.dispatch({ type: INCREMENT });
	}

	decrement(){
		this.store.dispatch({ type: DECREMENT });
	}

	reset(){
		this.store.dispatch({ type: RESET });
	}
}