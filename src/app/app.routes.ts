import { Routes } from '@angular/router';
import { LearnComponent } from './learn/learn.component';
import { CreateCardComponent } from './create-card/create-card.component';

export const routes: Routes = [
    {path:"", component:LearnComponent},
    {path:"create", component:CreateCardComponent}
];
