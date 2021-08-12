import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { AppState } from '../reducers/index';
import { tap, first, finalize, filter } from 'rxjs/operators';
import { loadAllCourses } from './course.actions';
import { areCoursesLoaded } from './courses.selectors';

@Injectable({
  providedIn: 'root'
})
export class CoursesResolver implements Resolve<any> {

  loading = false;

  constructor(private store: Store<AppState>) {

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {

    return this.store.pipe(
      select( areCoursesLoaded ),
      tap( (coursesLoaded) => {
        if( !this.loading && !coursesLoaded){
          this.loading = true;
          this.store.dispatch( loadAllCourses() ) ;
        }
      }),
      filter( coursesLoaded => coursesLoaded),
      first( ),
      finalize( () => this.loading = false)
    )
  }
}
