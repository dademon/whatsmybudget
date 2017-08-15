import { InlineComponent } from './inline/inline.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ButtonsComponent } from './buttons/buttons.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Prime'
    },
    children: [
      {
        path: 'buttons',
        component: ButtonsComponent,
        data: {
          title: 'Buttons'
        }
      },
      {
        path: 'inline',
        component: InlineComponent,
        data: {
          title: 'Inline'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrimeRoutingModule { }
