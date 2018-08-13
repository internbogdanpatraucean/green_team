import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { PageHeaderComponent } from './components/shared/page-header/page-header.component';
import { CourseComponent } from './components/admin/course/course.component';
import { UserListComponent } from './components/admin/user-list/user-list.component';
import { UserComponent } from './components/admin/user/user.component';
import { LoginComponent } from './components/shared/login/login.component';
import { HeroComponent } from './components/shared/hero/hero.component';
import { CourseListComponent } from './components/shared/course-list/course-list.component';
import { ChapterListComponent } from './components/shared/chapter-list/chapter-list.component';
import { MyAccountComponent } from './components/shared/my-account/my-account.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ChapterQuestionsComponent } from './components/shared/chapter-questions/chapter-questions.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'account', component: MyAccountComponent },
  { path: 'users', component: UserListComponent },
  { path: 'users/:id', component: UserComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'courses', component: CourseListComponent },
  {
    path: 'courses/:id',
    component: ChapterListComponent
  },
  {
    path: 'courses/:courseId/:chapterId',
    component: ChapterQuestionsComponent
  },
  { path: '**', redirectTo: 'dashboard' }
];

@NgModule({
  declarations: [
    AppComponent,
    PageHeaderComponent,
    CourseComponent,
    UserListComponent,
    UserComponent,
    LoginComponent,
    HeroComponent,
    CourseListComponent,
    ChapterListComponent,
    MyAccountComponent,
    DashboardComponent,
    ChapterQuestionsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
