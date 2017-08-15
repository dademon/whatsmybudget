import { ButtonsComponent } from './buttons/buttons.component';
import { NgModule } from '@angular/core';
import {GrowlModule,MessagesModule,ButtonModule} from 'primeng/primeng';
import { PrimeRoutingModule } from './prime-routing.module';
import {InlineEditorModule} from '@qontu/ngx-inline-editor';
import { InlineComponent } from './inline/inline.component';


@NgModule({
  imports: [
    PrimeRoutingModule,
    ButtonModule,
    GrowlModule,
    MessagesModule,
    InlineEditorModule
  ],
  declarations: [
    ButtonsComponent,
    InlineComponent,
  ]
})
export class PrimeModule { }
