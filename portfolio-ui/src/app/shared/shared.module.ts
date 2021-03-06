import { MatCardModule } from '@angular/material/card';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MailDialogComponent } from './mail-dialog/mail-dialog.component';
import { CommonModule } from '@angular/common';
import { WebDetailPopupComponent } from './web-detail-popup/web-detail-popup.component';
import { MatStepperModule } from '@angular/material/stepper';
import { FooterComponent } from './footer/footer.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RecaptchaModule } from 'ng-recaptcha';
import { AddExperienceComponent } from './add-experience/add-experience.component';
import { MatCheckboxModule } from '@angular/material/checkbox';



@NgModule({
    imports: [
        MatToolbarModule,
        MatIconModule,
        MatMenuModule,
        MatButtonModule,
        MatSlideToggleModule,
        CommonModule,
        MatStepperModule,
        MatCardModule,
        MatGridListModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule,
        MatProgressSpinnerModule,
        RecaptchaModule,
        MatCheckboxModule
    ],
    declarations: [
        HeaderComponent,
        MenuComponent,
        MailDialogComponent,
        WebDetailPopupComponent,
        FooterComponent,
        AddExperienceComponent
    ],
    exports: [
        HeaderComponent,
        MenuComponent,
        FooterComponent,
        MatToolbarModule,
        MatIconModule,
        MatMenuModule,
        MatCardModule,
        MatGridListModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule,
        MatProgressSpinnerModule,
        MatCheckboxModule
    ],
    entryComponents: []

})
export class SharedModule {
}
