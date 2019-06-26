import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Config } from './config';
import { TableComponent } from './table/table.component';
import { SearchPipe } from './search.pipe';
import { AddDataComponent } from './add-data/add-data.component';
import { ApidataComponent } from './apidata/apidata.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    SearchPipe,
    AddDataComponent,
    ApidataComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    Config,
    SearchPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
