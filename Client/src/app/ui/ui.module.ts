import { NgModule } from '@angular/core';
import { NavComponent } from './nav/nav.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';
import { MemberCardComponent } from './member-card/member-card.component';
import { PhotoEditorComponent } from './photo-editor/photo-editor.component';
import { FileUploadModule } from 'ng2-file-upload';


@NgModule({
    imports: [FormsModule, CommonModule, RouterModule, FileUploadModule],
    exports: [NavComponent, RegisterComponent, MemberCardComponent, PhotoEditorComponent],
    declarations: [NavComponent, RegisterComponent, MemberCardComponent, PhotoEditorComponent],
    providers: [],
})
export class UiModule { }
