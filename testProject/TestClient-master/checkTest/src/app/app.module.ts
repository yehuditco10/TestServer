import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { MenuComponent } from './menu/menu.component';
import { RegistStudentComponent } from './regist-student/regist-student.component';
import { CreateTestComponent } from './create-test/create-test.component';
import { CreateQuestionComponent } from './create-question/create-question.component';
import { RegisterComponent } from './register/register.component';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { GetQuestionsComponent } from './get-questions/get-questions.component';
import { CreateDataQuestionComponent } from './create-data-question/create-data-question.component';
import { DisplayQuestionComponent } from './display-question/display-question.component';
import {MatButtonModule, MatCheckboxModule} from '@angular/material'
import { MenuManagerComponent } from './menu-manager/menu-manager.component';
import { SearchComponent } from './search/search.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { AddQuestionComponent } from './add-question/add-question.component';
import { ReportUsersComponent } from './report-users/report-users.component';
import { Highchart1Component } from './reports/highchart1/highchart1.component';
import { FinishTestComponent } from './create-test/finish-test/finish-test.component';
import { CategoriesTreeComponent } from './shared/categories-tree/categories-tree.component';
import { TreeModule } from 'angular-tree-component';
import { TestListComponent } from './tests/test-list/test-list.component';
import { TestCardsComponent } from './shared/test-cards/test-cards.component';
import { AddCategoryComponent } from './menu-manager/add-category/add-category.component';
import {MatRadioModule} from '@angular/material/radio';
import { DisplayTestComponent } from './tests/display-test/display-test.component';
import {MatIconModule} from '@angular/material/icon';
import { HeaderComponent } from './header/header.component';
import { ReportSumUsersComponent } from './reports/report-sum-users/report-sum-users.component';
import { FabComponent } from './fab/fab.component';
import { HeaderManagerComponent } from './header-manager/header-manager.component';
import { ReportsComponent } from './reports/reports/reports.component';
import { ReportSumQuestionsComponent } from './reports/report-sum-questions/report-sum-questions.component';
import { TryComponent } from './try/try.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    RegistStudentComponent,
    CreateTestComponent,
    CreateQuestionComponent,
    RegisterComponent,
    GetQuestionsComponent,
    CreateDataQuestionComponent,
    DisplayQuestionComponent,
    MenuManagerComponent,
    SearchComponent,
    AddQuestionComponent,
    ReportUsersComponent,
    Highchart1Component,
    FinishTestComponent,
    CategoriesTreeComponent,
    TestListComponent,
    TestCardsComponent,
    AddCategoryComponent,
    DisplayTestComponent,
    HeaderComponent,
    ReportSumUsersComponent,
    FabComponent,
    HeaderManagerComponent,
    ReportsComponent,
    ReportSumQuestionsComponent,
    TryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FroalaEditorModule.forRoot(), 
    FroalaViewModule.forRoot() ,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    TreeModule.forRoot(),
    MatRadioModule,
    MatIconModule
    // MatButtonModule, MatCheckboxModule,BrowserAnimationsModule
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
