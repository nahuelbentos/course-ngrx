import { User } from '../model/user.model';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createReducer,
  createSelector,
  MetaReducer,
  on
} from '@ngrx/store';
import { AuthActions } from '../action-type';
import { state } from '@angular/animations';

export interface AuthState {
  user: User
}

export const initialState: AuthState = {
  user: undefined
}


export const authReducer = createReducer(
  initialState,
  on( AuthActions.login, (state, {user}) => ({...state, user}) ),
  on( AuthActions.logout, (state) => ({...state, user: undefined}) ),

  )
