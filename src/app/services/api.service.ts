/**
 * service to make api calls 
 */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { EndPoints } from 'src/app/constants/constants'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  /**
   * get all the executives in a get call
   */
  public getExecutives() {
    return this.http.get(EndPoints.baseUrl + EndPoints.executives);
  }

  /**
   * get an executive by an id
   */
  public getExecutiveById(execId: string | null) {
    return this.http.get(EndPoints.baseUrl + EndPoints.executives + "/" + execId);
  }

  /**
   * add an executive and store data in db
   */
  public addExecutive(executive: any) {
    return this.http.post(EndPoints.baseUrl + EndPoints.executives, executive);
  }

  /**
   * api call to update an executive
   */
  public updateExecutive(execId: string, executive: any) {
    return this.http.put(EndPoints.baseUrl + EndPoints.executives + "/" + execId, executive);
  }

  /**
   * get all the groups in a get call
   */
  public getGroups() {
    return this.http.get(EndPoints.baseUrl + EndPoints.executiveGroups);
  }

  /**
   * get a group by id in a get call
   */
  public getGroupById(groupId: string | null) {
    return this.http.get(EndPoints.baseUrl + EndPoints.executiveGroups + "/" + groupId);
  }

  /**
   * add a new group in a post call
   */
  public addGroup(group: any) {
    return this.http.post(EndPoints.baseUrl + EndPoints.executiveGroups, group);
  }

  /**
   * update an existing group in a put call
   */
  public updateGroup(groupId: string, group: any) {
    return this.http.put(EndPoints.baseUrl + EndPoints.executiveGroups + "/" + groupId, group);
  }
}
