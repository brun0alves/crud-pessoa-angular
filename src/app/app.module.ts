import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { PessoaModule } from './pessoa/pessoa.module';
import { SharedModule } from './shared';
import { EnderecoModule } from './endereco/endereco.module';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PessoaModule,
    SharedModule,
    EnderecoModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
