import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExamModule } from './exam/exam.module';
import { ProductRoutingModule } from './product/product-routing.module';
import { ProductModule } from './product/product.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { NotFoundService } from './services/not-found.service';
import{ EmployeeModule} from './employees/employee.module';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import {SlideshowModule} from 'ng-simple-slideshow';
import { OwlModule } from 'ngx-owl-carousel';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from  '@angular/common/http';


// import {MdCardModule} from '@angular/material';
// import {MdButtonModule} from '@angular/material';
// import {MDialogModule} from '@angular/material';
//import { DialogDemoComponent } from './dialog-demo/dialog-demo.component';

import {DialogModule} from 'primeng/dialog';
import { UserDetailsComponent } from './user-details/user-details.component';


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    DashBoardComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    UserDetailsComponent
    //DialogDemoComponent,
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ProductRoutingModule,
    ExamModule,
    ProductModule,
    BsDropdownModule,
    EmployeeModule,
    TooltipModule,
    ModalModule,
    SlideshowModule,
    OwlModule,
    DialogModule,
    BrowserAnimationsModule,
    HttpClientModule,
    // MatCardModule,
    // MatButtonModule,
    // MatDialogModule,
 
    AppRoutingModule
  ],
  providers: [NotFoundService],
  bootstrap: [AppComponent]
})
export class AppModule { }

