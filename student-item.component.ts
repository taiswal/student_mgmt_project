import { Component, EventEmitter, Input,OnInit, Output } from '@angular/core';
import { StudentModel } from '../model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-item',
  standalone: true,
  imports: [],
  templateUrl: './student-item.component.html',
  styleUrl: './student-item.component.scss'
})
export class StudentItemComponent implements OnInit {
@Input() student ! : StudentModel;
@Output() onDelete = new EventEmitter();

constructor(private router:Router){

}


ngOnInit() : void{
 console.log(this.student);
}

goTo(path:string,id:string){
 this.router.navigate(['app',path,id]);
}

editStudent(event:any, id: string) {
  event.stopPropagation();
  this.goTo('edit-student',id);
}

deleteStudent(event:any,id : string){
  event.stopPropagation();
  this.onDelete.emit(id);
}

}
