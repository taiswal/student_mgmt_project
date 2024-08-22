import { Component, OnInit } from '@angular/core';
import { StudentItemComponent } from '../student-item/student-item.component';
import { StudentServiceService } from '../student-service.service';
import { StudentModel } from '../model';
import { NgFor } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [StudentItemComponent,NgFor],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.scss'
})
export class StudentListComponent implements OnInit {
 public students : StudentModel[] = [];
  constructor(private StudentServiceService : StudentServiceService,private router:Router) {

 }

//  ngOnInit(): void {
//    this.students = this.StudentServiceService.getStudenList();
//    console.log(this.students);
//  }

ngOnInit(): void {
  this.StudentServiceService.getStudenList().subscribe((res) =>{
    this.students = res;
    console.log(this.students);
  });
  
}

goTo(){
  this.router.navigate(['app','create-student']);
}

onDelete(id:string){
  console.log(id);
  this.StudentServiceService.deleteStudent(id).subscribe((res)=>{
    this.students = res;
  })
}

}
