import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { ModalComponent, NgbdModalContent } from './modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    NgbdModalContent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent, NgbdModalContent]
})
export class AppModule { }
