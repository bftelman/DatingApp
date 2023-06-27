import { NgModule } from '@angular/core';
import { NavComponent } from './nav/nav.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';
import { MemberCardComponent } from './member-card/member-card.component';

@NgModule({
    imports: [FormsModule, CommonModule, RouterModule],
    exports: [NavComponent, RegisterComponent, MemberCardComponent],
    declarations: [NavComponent, RegisterComponent, MemberCardComponent],
    providers: [],
})
export class UiModule { }
