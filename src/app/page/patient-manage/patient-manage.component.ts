import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-patient-manage',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './patient-manage.component.html',
  styleUrl: './patient-manage.component.css'
})
export class PatientManageComponent {

  public patientList:any=[];

  constructor(private http:HttpClient){
   this.loadPatient();
  }

  loadPatient(){
    this.http.get("http://localhost:8080/patient/get-all").subscribe(data=>{
      console.log(data);
      this.patientList=data;
    })
  }

  deletePatient(id:any){
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger"
      },
      buttonsStyling: false
    });
    swalWithBootstrapButtons.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.http.delete(`http://localhost:8080/patient/delete-by-id/${id}`).subscribe(data=>{
          this.loadPatient();
        })
        swalWithBootstrapButtons.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });

        
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire({
          title: "Cancelled",
          text: "Your imaginary file is safe :)",
          icon: "error"
        });
      }
    });

  }
}
