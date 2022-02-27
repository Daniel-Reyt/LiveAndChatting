import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneralChatComponent } from './chat/general-chat/general-chat.component';
import { ListPersonnalMessageComponent } from './chat/list-personnal-message/list-personnal-message.component';
import { PersonnalMessageComponent } from './chat/personnal-message/personnal-message.component';
import { FriendListComponent } from './friend/friend-list/friend-list.component';
import { FriendRequestComponent } from './friend/friend-request/friend-request.component';
import { HomeComponent } from './home/home.component';
import { LivingComponent } from './living/living.component';
import { LoginComponent } from './user/login/login.component';
import { ProfilComponent } from './user/profil/profil.component';
import { RegisterComponent } from './user/register/register.component';
import { UpdatePasswordComponent } from './user/update-password/update-password.component';
import { UpdateUsernameComponent } from './user/update-username/update-username.component';

const routes: Routes = [
  //Rooting Login / register 
  {path: '', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  //Rooting home
  {path: 'home', component: HomeComponent},
  //Rooting user
  {path: 'profil', component: ProfilComponent},
  {path: 'edit-username', component: UpdateUsernameComponent},
  {path: 'edit-password', component: UpdatePasswordComponent},
  //Rooting friend
  {path: 'friend-list', component: FriendListComponent},
  {path: 'friend-request', component: FriendRequestComponent},
  //Rooting chat
  {path: 'chat', component: GeneralChatComponent},
  {path: 'personnal-chat-list', component: ListPersonnalMessageComponent},
  {path: 'personnal-chat', component: PersonnalMessageComponent},
  //Rooting live
  {path: 'live', component: LivingComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
