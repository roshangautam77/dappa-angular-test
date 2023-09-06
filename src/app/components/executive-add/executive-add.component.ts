/**
 * A class that adds/edits executive details
 */
import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, first, pipe, throwError } from 'rxjs';
import { AppNavigation } from 'src/app/constants/constants';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-executive-add',
  templateUrl: './executive-add.component.html',
  styleUrls: ['./executive-add.component.scss']
})
export class ExecutiveAddComponent {
  /**
   * Global initialization
   */
  public executiveForm: FormGroup;
  public newExecutive: any;
  public existingExecutive: any;
  public editMode: boolean = false;
  private execId: string | null;
  public executiveGroup: any;

  constructor(private fb: FormBuilder,
    private apiSvc: ApiService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.getExecutiveGroups();
    this.buildForm();

    this.execId = this.route.snapshot.paramMap.get('id');
    if (this.execId) {
      this.editMode = true;
      this.apiSvc.getExecutiveById(this.execId)
        .pipe(first())
        .subscribe(data => {
          this.existingExecutive = data
          if (this.existingExecutive.resultCode == 0) {
            this.executiveForm.patchValue(this.existingExecutive.value);
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
  * get Executive Groups to display in dropdown
  */
  private getExecutiveGroups(): void {
    this.apiSvc.getGroups().subscribe(data => {
      this.executiveGroup = data;
      if (this.executiveGroup.resultCode == 0)
        this.executiveGroup = this.executiveGroup.value
    })
    pipe(
      catchError((error: HttpErrorResponse) => {
        console.log(error);
        return throwError(error);
      })
    );
  }

  /**
  * build reactive form for add/edit executive
  */
  private buildForm(): void {
    this.executiveForm = this.fb.group({
      firstName: ['', [Validators.maxLength(30)]],
      lastName: ['', [Validators.maxLength(30)]],
      title: ['', [Validators.maxLength(20)]],
      initials: ['', [Validators.maxLength(10)]],
      postTitle: ['', [Validators.maxLength(20)]],
      systemInitials: ['', [Validators.required, Validators.maxLength(10)]],
      jobTitle: ['', [Validators.maxLength(100)]],
      executiveGroup: ['', [Validators.required]]
    });
  }

  /**
  * update database after submitting form based on add/edit condition
  */
  public onSubmit(): void {
    if (this.executiveForm.valid) {
      if (this.editMode) {
        this.executiveForm.value.version = this.existingExecutive.value.version;
        this.apiSvc.updateExecutive(<string>this.execId, this.executiveForm.value).subscribe(data => {
          this.newExecutive = data;
          if (this.newExecutive.resultCode == 0)
            this.router.navigate([AppNavigation.allExecutives]);
        })
        pipe(
          catchError((error: HttpErrorResponse) => {
            console.log(error);
            return throwError(error);
          })
        );

      }
      else {
        this.executiveForm.value.executiveGroup = JSON.parse(this.executiveForm.value.executiveGroup);
        this.apiSvc.addExecutive(this.executiveForm.value).subscribe(data => {
          this.newExecutive = data;
          if (this.newExecutive.resultCode == 0)
            this.newExecutive = this.newExecutive.value;
          this.router.navigate([AppNavigation.allExecutives]);
        })
        pipe(
          catchError((error: HttpErrorResponse) => {
            console.log(error);
            return throwError(error);
          })
        );
      }
    }
  }
}
