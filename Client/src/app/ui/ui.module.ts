import { NgModule } from '@angular/core';
import { NavComponent } from './nav/nav.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';

@NgModule({
    imports: [FormsModule, CommonModule],
    exports: [NavComponent, RegisterComponent],
    declarations: [NavComponent, RegisterComponent],
    providers: [],
})
export class UiModule { }
