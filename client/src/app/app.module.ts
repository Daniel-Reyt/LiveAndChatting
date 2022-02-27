import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LivingComponent } from './living/living.component';
import { UpdatePasswordComponent } from './user/update-password/update-password.component';
import { UpdateUsernameComponent } from './user/update-username/update-username.component';
import { ProfilComponent } from './user/profil/profil.component';
import { FriendRequestComponent } from './friend/friend-request/friend-request.component';
import { FriendListComponent } from './friend/friend-list/friend-list.component';
import { PersonnalMessageComponent } from './chat/personnal-message/personnal-message.component';
import { GeneralChatComponent } from './chat/general-chat/general-chat.component';
import { ListPersonnalMessageComponent } from './chat/list-personnal-message/list-personnal-message.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    LivingComponent,
    UpdatePasswordComponent,
    UpdateUsernameComponent,
    ProfilComponent,
    FriendRequestComponent,
    FriendListComponent,
    PersonnalMessageComponent,
    GeneralChatComponent,
    ListPersonnalMessageComponent,
    HomeComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
