import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import { Patient } from '../../model/Patient';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-patient-manage',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, RouterOutlet],
  templateUrl: './patient-manage.component.html',
  styleUrl: './patient-manage.component.css'
})
export class PatientManageComponent {

  public patientList: Patient[] = [];

  constructor(private http: HttpClient) {
    this.loadPatient();
  }

  loadPatient() {
    this.http.get<Patient[]>("http://localhost:8080/patient/get-all").subscribe(data => {
      data.forEach(obj => {
        console.log(obj);
        this.patientList.push(obj);
      })
    })

    console.log(this.patientList);

  }

  deletePatient(id: any) {

this.http.delete(`http://localhost:8080/patient/delete-by-id/${id}`).subscribe( data => {
alert("Patient deleted")
this.patientList=this.patientList.filter(_=>_.id != id)})
}
  public selectedPatient: any = {};
  selectPatient(patient: any) {
    console.log(patient);
    this.selectedPatient = patient;

  }

  updatePatient() {
        this.http.put("http://localhost:8080/patient/update", this.selectedPatient).subscribe(res => {
          console.log(res);
        })}}
