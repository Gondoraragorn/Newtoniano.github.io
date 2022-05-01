import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SHOComponent } from './sho/sho.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component'
import { NotfoundComponent } from './notfound/notfound.component';
import { CodingComponent } from './coding/coding.component';
import { ResumeComponent } from './resume/resume.component';

const routes: Routes = [
  {path:'contact', component: ContactComponent},
  {path:'projects', component: ProjectsComponent},
  {path:'SHO', component: SHOComponent},
  {path: 'coding', component: CodingComponent},
  {path: 'resume', component: ResumeComponent},
  {path: '', component: HomeComponent},
  {path: '**', component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
