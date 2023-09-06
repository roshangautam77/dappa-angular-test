/**
 * A class which will display all the executives and handle navigation
 */
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { pipe, catchError, throwError } from 'rxjs';

import { AppNavigation, ActionType } from 'src/app/constants/constants';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-executives',
  templateUrl: './executives.component.html',
  styleUrls: ['./executives.component.scss']
})
export class ExecutivesComponent implements OnInit {
  public allExecutives: any;

  constructor(
    private apiService: ApiService,
    private router: Router
  ) { }

  public ngOnInit(): void {
    this.apiService.getExecutives().subscribe(data => {
      this.allExecutives = data;
    })
    pipe(
      catchError((error: HttpErrorResponse) => {
        console.log(error);
        return throwError(error);
      })
    );;
  }

  /**
   * based on the view or edit action, user will be rdirected to respective component
   */
  public execDetails(execId: string, action: string): void {
    if (execId) {
      if (action === ActionType.view) {
        this.router.navigate([AppNavigation.executiveDetails, execId]);
      }
      else if (action === ActionType.edit) {
        this.router.navigate([AppNavigation.editExecutive, execId]);
      }
      else {
        // redirect to errors page
      }
    }
    else {
      // redirect to errors page
    }
  }

  /**
   * redirect to component which adds executives
   */
  public addExecutive(): void {
    this.router.navigate([AppNavigation.addExecutive]);
  }
}
