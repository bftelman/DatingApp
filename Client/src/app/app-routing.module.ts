import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MemberListComponent } from './pages/member-list/member-list.component';
import { MemberDetailComponent } from './pages/member-detail/member-detail.component';
import { ListsComponent } from './pages/lists/lists.component';
import { MessagesComponent } from './pages/messages/messages.component';
import { authGuard } from './guards/auth.guard';
import { TestErrorComponent } from './pages/test-error/test-error.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ServerErrorComponent } from './pages/server-error/server-error.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  {
    path: "", runGuardsAndResolvers: 'always', canActivate: [authGuard], children: [
      { path: "members", component: MemberListComponent },
      { path: "members/:username", component: MemberDetailComponent },
      { path: "lists", component: ListsComponent },
      { path: "messages", component: MessagesComponent },
    ]
  },
  { path: "errors", component: TestErrorComponent },
  { path: "not-found", component: NotFoundComponent },
  { path: "server-error", component: ServerErrorComponent},
  { path: "**", component: NotFoundComponent, pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
