/**
 * A class that shows executive details
 */
import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { pipe, catchError, throwError } from 'rxjs';
import { AppNavigation } from 'src/app/constants/constants';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-executive-details',
  templateUrl: './executive-details.component.html',
  styleUrls: ['./executive-details.component.scss']
})
export class ExecutiveDetailsComponent {
  public execData: any;

  constructor(private apiSvc: ApiService,
    private route: ActivatedRoute,
    private router: Router) { }

  public ngOnInit() {
    const execId: string = this.route.snapshot.paramMap.get('id') || "0";

    this.apiSvc.getExecutiveById(execId).subscribe(data => {
      this.execData = data;
      this.execData = this.execData.value;
    })
    pipe(
      catchError((error: HttpErrorResponse) => {
        console.log(error);
        return throwError(error);
      })
    );
  }

  /**
   * Redirect to respective component for edit executive feature
  */
  public editExecutive(execId: string): void {
    if (execId)
      this.router.navigate([AppNavigation.editExecutive, execId]);
  }
}
