import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConcludePageComponent } from './page/conclude-page/conclude-page.component';
import { QuestionnairePageComponent } from './page/questionnaire-page/questionnaire-page.component';


const routes: Routes = [
  { path: '', redirectTo: '/questionnaire-page', pathMatch: 'full' },
  { path: 'questionnaire-page', component: QuestionnairePageComponent },
  { path: 'conclude-page', component: ConcludePageComponent }
  // Wildcard route for a 404 page
  // { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
