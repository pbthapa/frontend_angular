import { Injectable } from '@angular/core';
import { Subject } from '../model/subject.model';
import { Http } from '@angular/http'
import { Observable } from 'rxjs/Observable'
import 'rxjs/Rx'

@Injectable()
export class SubjectAreaService {

  constructor(private _http: Http) { }

  create(subject: Subject) {
    return this._http.post("/admin/subject-area", subject)
    .map(data => data.json())
    .toPromise();
  }

  update(subject: Subject) {
    return this._http.put("/admin/subject-area" + subject.id, subject)
    .map(data => data.json())
    .toPromise();
  }

  destroy(id: number) {
    return this._http.delete("/admin/subject-area" + id)
    .map(data => data.json())
    .toPromise();
  }

  getSubjectAreaList() {
    return this._http.get("/admin/subject-area")
    .map(data => data.json())
    .toPromise();
  }

  getSubjectArea(id: number) {
    return this._http.get("/admin/subject-area" + id)
    .map(data => data.json())
    .toPromise();
  }
}
