import { NgModule } from '@angular/core';
import { NavComponent } from './nav/nav.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';
import { MemberCardComponent } from './member-card/member-card.component';
import { PhotoEditorComponent } from './photo-editor/photo-editor.component';
import { FileUploadModule } from 'ng2-file-upload';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';


@NgModule({
    imports: [
        FormsModule, CommonModule, RouterModule, FileUploadModule, ReactiveFormsModule,
        BsDatepickerModule.forRoot()
    ],
    exports: [NavComponent, RegisterComponent, MemberCardComponent, PhotoEditorComponent],
    declarations: [NavComponent, RegisterComponent, MemberCardComponent, PhotoEditorComponent, DatePickerComponent],
    providers: [],
})
export class UiModule { }
