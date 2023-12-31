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
import { TestErrorComponent } from './test-error/test-error.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { ServerErrorComponent } from './server-error/server-error.component';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import { MemberEditComponent } from './member-edit/member-edit.component';
import { FormsModule } from '@angular/forms';


@NgModule({
    imports: [
        UiModule,
        ToastrModule.forRoot({
            positionClass: 'toast-bottom-right'
        }),
        CommonModule,
        HttpClientModule,
        RouterModule,
        NgxGalleryModule,
        FormsModule,
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
        MessagesComponent,
        TestErrorComponent,
        NotFoundComponent,
        ServerErrorComponent,
        MemberEditComponent],
    providers: [AccountService],
})
export class PagesModule { }
