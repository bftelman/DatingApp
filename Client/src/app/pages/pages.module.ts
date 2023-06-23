import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http"
import { CommonModule } from '@angular/common';
import { UiModule } from '../ui/ui.module';
import { ToastrModule } from 'ngx-toastr';
import { HomeComponent } from './home/home.component';
import { MemberListComponent } from './member-list/member-list.component';
import { MemberDetailComponent } from './member-detail/member-detail.component';
import { ListsComponent } from './lists/lists.component';
import { MessagesComponent } from './messages/messages.component';
import { AccountService } from '../services/account.service';

@NgModule({
    imports: [
        UiModule,
        ToastrModule.forRoot({
            positionClass: 'toast-bottom-right'
        }),
        CommonModule,
        HttpClientModule
    ],
    exports: [
        HomeComponent,
        MemberListComponent,
        MemberDetailComponent,
        ListsComponent,
        MessagesComponent],
    declarations: [
        HomeComponent,
        MemberListComponent,
        MemberDetailComponent,
        ListsComponent,
        MessagesComponent],
    providers: [AccountService],
})
export class PagesModule { }
