/**
 * A class that edits executive group
 */
import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { pipe, catchError, throwError } from 'rxjs';
import { AppNavigation } from 'src/app/constants/constants';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-executive-group-edit',
  templateUrl: './executive-group-edit.component.html',
  styleUrls: ['./executive-group-edit.component.scss']
})
export class ExecutiveGroupEditComponent {
  public executiveGroupForm: FormGroup;
  public group: any;
  private groupId: string | null;

  constructor(private fb: FormBuilder,
    private apiSvc: ApiService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.groupId = this.route.snapshot.paramMap.get('id');

    if (this.groupId) {
      this.executiveGroupForm = this.fb.group({
        name: ['', [Validators.required, Validators.maxLength(30)]],
        version: ['']
      });
      this.apiSvc.getGroupById(this.groupId).subscribe(data => {
        this.group = data;
        if (this.group.resultCode == 0) {
          this.executiveGroupForm.patchValue(this.group.value);
        }
      })
      pipe(
        catchError((error: HttpErrorResponse) => {
          console.log(error);
          return throwError(error);
        })
      );
    }
    else {
      //TODO: navigate to error page
    }
  }

  /**
   * handle form submission post edit
   */
  public onSubmit(): void {
    if (this.executiveGroupForm.valid) {
      this.apiSvc.updateGroup(<string>this.groupId, this.executiveGroupForm.value).subscribe(data => {
        const editedGroup: any = data;
        if (editedGroup.resultCode == 0)
          this.router.navigate([AppNavigation.executiveGroups]);
      })
      pipe(
        catchError((error: HttpErrorResponse) => {
          console.log(error);
          return throwError(error);
        })
      );
    }
  } // onSubmit
}
