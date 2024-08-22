import { NgClass, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { StudentServiceService } from '../student-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-student',
  standalone: true,
  imports: [ReactiveFormsModule,NgClass,NgIf],
  templateUrl: './create-student.component.html',
  styleUrl: './create-student.component.scss'
})
export class CreateStudentComponent {
  public studentId !:string;
  public studentForm !:FormGroup ;
  
  @Input()
  set stdId(value:string){
    this.studentId = value ;
  }

  constructor(private fb:FormBuilder,private studentService:StudentServiceService, private router:Router){

  }

  ngOnInit():void{
    this.studentForm = this.fb.group({
      id: [''],
      img: ['',[Validators.required]],
      name: ['', [Validators.required, Validators.minLength(2),Validators.pattern('^([^0-9]*)$')]],
      age: ['',[Validators.required, Validators.minLength(18),Validators.max(36)]],
      email: ['',[Validators.required,Validators.email]],
      number: ['',[Validators.required,Validators.pattern('^[0-9]{10}$')]]
    })
    if(this.studentId){
      this.initStudent();
    }
  }

  // initStudent(){
  //   const student : any = this.studentService.getStudentDetails(this.studentId);
  //   this.studentForm.setValue(student);
  // }

  initStudent(){
    this.studentService.getStudentDetails(this.studentId).subscribe((res)=>{
      this.studentForm.setValue(res);
    });
  }

  // saveStudent(){
  //   this.studentService.createStudent(this.studentForm.value);
  //   this.goTo();

  // }

  // saveStudent(){
  //   if(this.studentId){
  //     this.studentService.editStudent(this.studentId,this.studentForm.value).subscribe((res)=>{
  //       this.goTo();
  //     });

  //   }
  //   else{
  //     this.studentService.createStudent(this.studentForm.value).subscribe((res)=>{
  //       this.goTo();
  //     });
    
  //   }

  // }

  saveStudent(){
    let studentSub ;
    if(this.studentId){
      studentSub = this.studentService.editStudent(this.studentId,this.studentForm.value);
    }
    else{
      studentSub = this.studentService.createStudent(this.studentForm.value);
    
    }

    studentSub.subscribe(()=>{
      this.goTo();
    })

  }


  goTo(){
    this.router.navigate(['app','student-list']);
  }


}
