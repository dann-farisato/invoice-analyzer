import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DropzoneComponent } from './components/dropzone/dropzone.component';
import { ExtrasComponent } from './components/extras/extras.component';
import { ProgressComponent } from './components/progress/progress.component';

const routes: Routes = [
  { path: 'home', component: ProgressComponent },
  { path: 'drop', component: DropzoneComponent },
  { path: 'extras', component: ExtrasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
