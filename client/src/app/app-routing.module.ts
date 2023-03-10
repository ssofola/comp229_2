import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {AboutComponent} from "./pages/about/about.component";
import {ProjectsComponent} from "./pages/projects/projects.component";
import {ServicesComponent} from "./pages/services/services.component";
import {ContactComponent} from "./pages/contact/contact.component";
import {BooksComponent} from "./pages/books/books.component";

const routes: Routes = [
  {path:'home', component: HomeComponent, data:{title: 'Home'}},
  {path:'about', component: AboutComponent, data:{title: 'About Me'}},
  {path:'projects', component: ProjectsComponent, data:{title: 'Projects'}},
  {path:'services', component: ServicesComponent, data:{title: 'Services'}},
  {path:'contact', component: ContactComponent, data:{title: 'Contact Me'}},
  {path:'books', component: BooksComponent, data:{title: 'Books'}},
  {path:'', redirectTo:'/home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
