import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { LoginComponent } from './login/login.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { ChidCompComponent } from './chid-comp/chid-comp.component';
import { ParentCompComponent } from './parent-comp/parent-comp.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { NgifComponent } from './StructuralDirective/ngif/ngif.component';
import { NgSwitchComponent } from './StructuralDirective/ng-switch/ng-switch.component';
import { NgforComponent } from './StructuralDirective/ngfor/ngfor.component';


@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    LoginComponent,
    ParentComponent,
    ChildComponent,
    ChidCompComponent,
    ParentCompComponent,
    NgifComponent,
    NgSwitchComponent,
    NgforComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
