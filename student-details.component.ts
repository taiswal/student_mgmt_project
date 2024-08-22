import { Component, Input, input } from '@angular/core';
import { StudentServiceService } from '../student-service.service';
import { StudentModel } from '../model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-details',
  standalone: true,
  imports: [],
  templateUrl: './student-details.component.html',
  styleUrl: './student-details.component.scss'
})
export class StudentDetailsComponent {
  public student !: StudentModel | undefined ;
  @Input() 
   set stdId(value:string){
    this.initStudent(value)
  }

  constructor(private studentService :StudentServiceService,public router:Router){

  }

  // initStudent(id:string){
  //  this.student = this.studentService.getStudentDetails(id);

  //  if(!this.student)
  //   {
  //     this.goTo();
  //   }
  // }

  initStudent(id:string){
    this.studentService.getStudentDetails(id).subscribe((res)=>{
      this.student = res;
      if(!this.student)
        {
          this.goTo();
        }
    });
 
   }

  goTo(){
    this.router.navigate(['app','student-list']);
  }

}
