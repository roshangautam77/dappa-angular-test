/**
 * A class that creates new executive group
 */
import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { pipe, catchError, throwError } from 'rxjs';
import { AppNavigation } from 'src/app/constants/constants';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-executive-group-add',
  templateUrl: './executive-group-add.component.html',
  styleUrls: ['./executive-group-add.component.scss']
})
export class ExecutiveGroupAddComponent {
  public executiveGroupForm: FormGroup;
  public newGroup: any;

  constructor(private fb: FormBuilder, private apiSvc: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.executiveGroupForm = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(30)]],
    });
  }

  /**
   * handle form submission to create executive group
   */
  public onSubmit(): void {
    if (this.executiveGroupForm.valid) {
      this.apiSvc.addGroup(this.executiveGroupForm.value).subscribe(data => {
        this.newGroup = data;
        if (this.newGroup.resultCode == 0)
          this.newGroup = this.newGroup.value;
        this.router.navigate([AppNavigation.executiveGroups]);

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
