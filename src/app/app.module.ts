import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { BtnComponent } from './components/btn/btn.component';
import { BoardsComponent } from './pages/boards/boards.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { BoardComponent } from './pages/board/board.component';
import { DialogModule } from '@angular/cdk/dialog';
import { TodoDialogComponent } from './components/todo-dialog/todo-dialog.component';
import { TableComponent } from './pages/table/table.component';
import { CdkTableModule } from '@angular/cdk/table';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BtnComponent,
    BoardsComponent,
    NavbarComponent,
    BoardComponent,
    TodoDialogComponent,
    TableComponent,
    ForgotPasswordComponent,
  ],
  imports: [
    BrowserModule,
    OverlayModule,
    AppRoutingModule,
    FontAwesomeModule,
    CdkAccordionModule,
    DragDropModule,
    DialogModule,
    CdkTableModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
