import { Routes } from '@angular/router';
import { AppointmentManageComponent } from './page/appointment-manage/appointment-manage.component';
import { PatientManageComponent } from './page/patient-manage/patient-manage.component';
import { LoginComponent } from './page/login/login.component';
import { DashBordPageComponent } from './page/dash-bord-page/dash-bord-page.component';

export const routes: Routes = [
    {
        path:'',
        component:LoginComponent
    },
    {
        path:"appointment",
        component:AppointmentManageComponent
    },
    {
        path:"patient",
        component:PatientManageComponent
    },
    {
        path:"dashbord",
        component:DashBordPageComponent
    }
];
