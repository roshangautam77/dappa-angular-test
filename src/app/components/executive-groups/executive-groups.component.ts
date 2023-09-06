/**
 * Display all the executive groups
*/
import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { pipe, catchError, throwError } from 'rxjs';
import { AppNavigation } from 'src/app/constants/constants';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-executive-groups',
  templateUrl: './executive-groups.component.html',
  styleUrls: ['./executive-groups.component.scss']
})
export class ExecutiveGroupsComponent {
  public allGroups: any;

  constructor(
    private apiService: ApiService,
    private router: Router
  ) { }

  public ngOnInit(): void {
    this.apiService.getGroups().subscribe(data => {
      this.allGroups = data;
      if (this.allGroups.resultCode == 0)
        this.allGroups = this.allGroups.value
    })
    pipe(
      catchError((error: HttpErrorResponse) => {
        console.log(error);
        return throwError(error);
      })
    );
  }

  /**
   * navigate to component to add group
   */
  public addGroup(): void {
    this.router.navigate([AppNavigation.addGroup]);
  }

  /**
   * navigate to edit group component
   */
  public editGroup(groupId: string): void {
    this.router.navigate([AppNavigation.editGroup, groupId]);
  }
}
