import { BrowserModule } from '@angular/platform-browser';

/* Routing */
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

/* Angular Material */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatButtonModule} from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';


/* Components */
import { LogInComponent } from './log-in/log-in.component';
import { RegisterComponent } from './register/register.component';
import { MatLabel } from '@angular/material/form-field';
// import { UserRequestService } from './user-http/user-request.service';


@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    RegisterComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // AngularMaterialModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class AppModule { }