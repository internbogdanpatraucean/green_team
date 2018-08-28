import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './components/shared/authentification/authGuard.service';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { PageHeaderComponent } from './components/shared/page-header/page-header.component';
import { CourseComponent } from './components/admin/course/course.component';
import { UserListComponent } from './components/admin/user-list/user-list.component';
import { UserComponent } from './components/admin/user/user.component';
import { HeroComponent } from './components/shared/hero/hero.component';
import { CourseListComponent } from './components/shared/course-list/course-list.component';
import { ChapterListComponent } from './components/shared/chapter-list/chapter-list.component';
import { MyAccountComponent } from './components/shared/my-account/my-account.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ChapterQuestionsComponent } from './components/shared/chapter-questions/chapter-questions.component';
import { AuthentificationComponent } from './components/shared/authentification/authentification.component';
import { LoginComponent } from './components/shared/authentification/login/login.component';
import { RegisterComponent } from './components/shared/authentification/register/register.component';
import { ResetComponent } from './components/shared/authentification/reset/reset.component';
import { HttpClientModule } from '@angular/common/http';
import { ChapterComponent } from './components/shared/chapter/chapter.component';
import { CourseFinishComponent } from './components/shared/course-finish/course-finish.component';


const routes: Routes = [
  { path: 'authentification', component: AuthentificationComponent },
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'reset', component: ResetComponent},
  { path: 'account', component: MyAccountComponent ,canActivate: [AuthGuardService] },
  { path: 'users', component: UserListComponent ,canActivate: [AuthGuardService] },
  { path: 'users/:id', component: UserComponent ,canActivate: [AuthGuardService] },
  { path: 'dashboard', component: DashboardComponent ,canActivate: [AuthGuardService] },
  { path: 'courses', component: CourseListComponent ,canActivate: [AuthGuardService] },
  { path: 'course-finish', component: CourseFinishComponent,canActivate: [AuthGuardService]},
  { path: 'chapters-list', component: ChapterListComponent ,canActivate: [AuthGuardService] },
  { path: 'chapter', component: ChapterComponent ,canActivate: [AuthGuardService]},
  { path: 'chapter-questions', component: ChapterQuestionsComponent ,canActivate: [AuthGuardService] },

  {
    path: 'courses/:id',
    component: ChapterListComponent, canActivate: [AuthGuardService]
  },
  {
    path: 'courses/:courseId/:chapterId',
    component: ChapterQuestionsComponent, canActivate: [AuthGuardService]
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
    HeroComponent,
    CourseListComponent,
    ChapterListComponent,
    MyAccountComponent,
    DashboardComponent,
    ChapterQuestionsComponent,
    AuthentificationComponent,
    LoginComponent,
    RegisterComponent,
    ResetComponent,
    ChapterComponent,
    CourseFinishComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    [RouterModule.forRoot(routes)]
  ],
  providers: [AuthGuardService],
  bootstrap: [AppComponent]
})

export class AppModule { }
