import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'user', loadChildren: './user/user.module#UserPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'list', loadChildren: './list/list.module#ListPageModule' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'members', loadChildren: './members/members.module#MembersPageModule' },
  { path: 'event_summary', loadChildren: './event-summary/event-summary.module#EventSummaryPageModule' },
  { path: 'add-event', loadChildren: './add-event/add-event.module#AddEventPageModule' },
  { path: 'add-members', loadChildren: './add-members/add-members.module#AddMembersPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'messages', loadChildren: './messages/messages.module#MessagesPageModule' },
  { path: 'expenses', loadChildren: './expenses/expenses.module#ExpensesPageModule' },
  { path: 'payback-facility', loadChildren: './payback-facility/payback-facility.module#PaybackFacilityPageModule' },
  { path: 'menu', loadChildren: './menu/menu.module#MenuPageModule' },
  { path: 'menu', loadChildren: './menu/menu.module#MenuPageModule' },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
