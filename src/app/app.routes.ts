import { Routes } from '@angular/router';
import { AppointmentManageComponent } from './page/appointment-manage/appointment-manage.component';
import { PatientManageComponent } from './page/patient-manage/patient-manage.component';
import { LoginComponent } from './page/login/login.component';
import { DashBordPageComponent } from './page/dash-bord-page/dash-bord-page.component';
import { AddPatientComponent } from './page/add-patient/add-patient.component';
import { PatientRootComponent } from './page/patient-root/patient-root.component';
import { DashPageComponent } from './page/dash-page/dash-page.component';
import { AddAppointmentComponent } from './page/add-appointment/add-appointment.component';
import { AppoimtmentRootComponent } from './page/appoimtment-root/appoimtment-root.component';

export const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: "appointment",
    component: AppointmentManageComponent
  },
  {
    path: "patient",
    component: PatientManageComponent
  },
  {
    path: "dashbord",
    component: DashBordPageComponent,
    children: [
      {
        path:"",
        component:DashPageComponent
      },
      {
        path: "appointment",
        component: AppoimtmentRootComponent,
        children:[
          {
            path:"",
            component:AppointmentManageComponent
          },
          {
            path:"add-appointment",
            component:AddAppointmentComponent
          },
          {
            path:"view-all",
            component:AppointmentManageComponent
          }
        ]
      },
      {
        path: "patient",
        component: PatientRootComponent,
        children:[
          {
            path:"",
            component:PatientManageComponent
          },
          {
            path: "add-patient",
            component: AddPatientComponent
          },
          {
            path:"manage-all",
            component: PatientManageComponent
          }
        ]
      },

    ]
  }
];
