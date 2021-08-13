import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { DefaultDataService, HttpUrlGenerator } from "@ngrx/data";
import { Course } from "../model/course";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable()
export class CourseDataService extends DefaultDataService<Course> {
  constructor(http: HttpClient, htttpUrlGenerator: HttpUrlGenerator) {
    super("Course", http, htttpUrlGenerator);
  }

  getAll(): Observable<Course[]> {
    return this.http.get("/api/courses").pipe(map((res) => res["payload"]));
  }
}
