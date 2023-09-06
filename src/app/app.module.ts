import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { ExecutivesComponent } from './components/executives/executives.component';
import { ExecutiveGroupsComponent } from './components/executive-groups/executive-groups.component';
import { ExecutiveDetailsComponent } from './components/executive-details/executive-details.component';
import { ExecutiveAddComponent } from './components/executive-add/executive-add.component';
import { ExecutiveGroupAddComponent } from './components/executive-group-add/executive-group-add.component';
import { ExecutiveGroupEditComponent } from './components/executive-group-edit/executive-group-edit.component';
import { SpinnerInterceptor } from './interceptors/spinner.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    ExecutivesComponent,
    ExecutiveGroupsComponent,
    SideNavComponent,
    ExecutiveDetailsComponent,
    ExecutiveAddComponent,
    ExecutiveGroupAddComponent,
    ExecutiveGroupEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: SpinnerInterceptor,
    multi : true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
