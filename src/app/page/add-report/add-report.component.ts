import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MedicalReport } from '../../model/MedicalReport';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-report',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-report.component.html',
  styleUrl: './add-report.component.css'
})
export class AddReportComponent {

 public formDate:FormData= new FormData();
 public report:MedicalReport= new MedicalReport("", "", 0);
 selectedFile:File|null = null;

  onFileSelected(event:Event){
    const inputElement =event.target as HTMLInputElement;
    if(inputElement.files && inputElement.files.length>0){
      this.selectedFile=inputElement.files[0];
      console.log(this.selectedFile);
            this.report.setfile(this.selectedFile);
    }
  }

  constructor(private http:HttpClient){}

postObj:any={
 report:this.report,
 file:this.selectedFile
}
  addReport():void{

  console.log(this.postObj);
  this.http.post("http://localhost:8080/medical-report/add-report",this.postObj).subscribe(res=>{
    console.log("report added successfully");
})

  }

}
