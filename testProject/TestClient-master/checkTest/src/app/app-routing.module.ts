import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import{MenuComponent}from'./menu/menu.component';
import{RegistStudentComponent}from './regist-student/regist-student.component'
import { CreateTestComponent } from './create-test/create-test.component'
import { CreateQuestionComponent } from './create-question/create-question.component';
import { MenuManagerComponent } from './menu-manager/menu-manager.component';
import { SearchComponent } from './search/search.component';
import { AddQuestionComponent } from './add-question/add-question.component';
import { CreateDataQuestionComponent } from './create-data-question/create-data-question.component';
import { ReportUsersComponent } from './report-users/report-users.component';
import { Highchart1Component } from './reports/highchart1/highchart1.component';
import { FinishTestComponent } from './create-test/finish-test/finish-test.component';
import { TestListComponent } from './tests/test-list/test-list.component';
import { AddCategoryComponent } from './menu-manager/add-category/add-category.component';
import { DisplayTestComponent } from './tests/display-test/display-test.component';


const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'menu',component:MenuComponent},
{path:'regist',component:RegistStudentComponent},
{path:'create-test',component:CreateTestComponent},
{path:'edit-test/:id',component:CreateTestComponent},
{path:'test/:id',component:DisplayTestComponent},
{path:'create-question',component:CreateQuestionComponent},
{path:'menu-manager',component:MenuManagerComponent},
{path:'search',component:SearchComponent},
{path:'AddQuestion',component:AddQuestionComponent},
{path:'CreateDataQuestion',component:CreateDataQuestionComponent},
{path:'ReportUsers',component:ReportUsersComponent},
{path:'Highchart1',component:Highchart1Component},
{path:'FinishTest',component:FinishTestComponent},
{path:'TestList',component:TestListComponent},
{path:'AddCategory',component:AddCategoryComponent},





  {path:'',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
