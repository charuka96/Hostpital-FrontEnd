import { Form } from "@angular/forms";

export class MedicalReport {
    public id: number = 0;
    public pdfSrc: string;
    public localDateTime: string;
    public patientId: number;
    public file :File =new File(["foo"],"foo.tex",{
      type:"text/plain",
    }) ;

    constructor( pdfSrc: string, localDateTime: string, patientId: number) {
        this.pdfSrc = pdfSrc;
        this.localDateTime = localDateTime;
        this.patientId = patientId;

    }

public setpdfSrc(pdfSrc:string){
  this.pdfSrc = pdfSrc;
}

public setlocalDateTime(localDateTime:string){
  this.localDateTime = localDateTime;
}

public setPatientId(patientId:number){
 this.patientId = patientId;
}

public setfile(file:File){
  this.file = file;
}

public getId():number{
  return this.id;
}

public getpdfSrc():string{
  return this.pdfSrc;
}
public getPatientId():number{
return this.patientId;}

public getFile():File{
  return this.file;
}}
