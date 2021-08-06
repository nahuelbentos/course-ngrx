import { Injectable } from "@angular/core";
import { Actions } from "@ngrx/effects";
import { login } from './auth.actions';

@Injectable()
export class AuthEffects {

  constructor( private actions$: Actions) {

    actions$.subscribe( action => {
      console.log(action.type === login.type);
      console.log(action.type);
      console.log(login.type);

      if( action.type === login.type){
        localStorage.setItem('user',  JSON.stringify(action["user"]) )
      }

    })

  }


}
