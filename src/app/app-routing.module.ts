import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConcludePageComponent } from './page/conclude-page/conclude-page.component';
import { QuestionnairePageComponent } from './page/questionnaire-page/questionnaire-page.component';


const routes: Routes = [
  { path: '', component: QuestionnairePageComponent },

  { path: 'questionnaire-page', component: QuestionnairePageComponent },
  { path: 'conclude-page', component: ConcludePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
