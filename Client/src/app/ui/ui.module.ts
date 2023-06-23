import { NgModule } from '@angular/core';
import { NavComponent } from './nav/nav.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [FormsModule, CommonModule, RouterModule],
    exports: [NavComponent, RegisterComponent],
    declarations: [NavComponent, RegisterComponent],
    providers: [],
})
export class UiModule { }
