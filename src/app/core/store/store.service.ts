import { Injectable } from '@angular/core';
import { Action } from './reducers';
import { BehaviorSubject, Subject } from 'rxjs';
import { scan } from 'rxjs/operators';

class Dispatcher<T> extends Subject<T> {
    dispatch(value: any): void {
        this.next(value);
    }
}

@Injectable({
    providedIn: 'root'
})
export class StoreService<T> extends BehaviorSubject<T> {

    private dispatcher = new Dispatcher();

    constructor(private reducer: any,
        initialState: any) {
        super(initialState);

        // create an temp store in memory inside of observable
        this.dispatcher.pipe(
            scan((state, action) => this.reducer(state, action), initialState))
            .subscribe(state => super.next(state));
    }

    dispatch(value: Action) {
        this.dispatcher.dispatch(value);
    }

    next(value: any) {
        this.dispatcher.dispatch(value);
    }
}