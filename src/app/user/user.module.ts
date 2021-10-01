import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import {MatTabsModule} from '@angular/material/tabs';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatNativeDateModule } from '@angular/material/core';
import { MatBadgeModule } from '@angular/material/badge';
import { AppCommonModule } from '../app-common/app-common.module';
import { ButtonModule } from "primeng/button";
import { PhysicianInboxComponent } from './physician-inbox/physician-inbox.component';
import { MatRadioModule } from '@angular/material/radio';
import { MatMenuModule } from '@angular/material/menu';
import { AddScheduleComponent } from './add-schedule/add-schedule.component';
import { EditScheduleComponent } from './edit-schedule/edit-schedule.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';

import { ChartModule } from 'primeng/chart';
import {TabViewModule} from 'primeng/tabview';
import {TableModule} from 'primeng/table';
import {DropdownModule} from 'primeng/dropdown';
import {InputTextModule} from 'primeng/inputtext';
import {ContextMenuModule} from 'primeng/contextmenu';
import { ToolbarModule } from 'primeng/toolbar';
import { PatientModifyComponent } from './patient-modify/patient-modify.component';
import { SendNotesComponent } from './send-notes/send-notes.component';
import {DialogModule} from 'primeng/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from "@angular/material/icon";
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    UserComponent,
    PhysicianInboxComponent,
    AddScheduleComponent,
    EditScheduleComponent,
    PatientModifyComponent,
    SendNotesComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MatTableModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    MatTabsModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatBadgeModule,
    AppCommonModule,
    MatMenuModule,
    ChartModule,
    TabViewModule,
    TableModule,
    DropdownModule,
    InputTextModule,
    ContextMenuModule,
    ButtonModule,
    ToolbarModule,
    MatRadioModule,
    DialogModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatCardModule,
    MatIconModule,
    ChartsModule

  ]

})
export class UserModule { }
