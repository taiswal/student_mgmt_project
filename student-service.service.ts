import { Injectable } from '@angular/core';
import { StudentModel } from './model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const STUDENTS: StudentModel[] = [
  {
    img: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
    id: 's1',
    name: 'Suraj',
    age: 32,
    email: 'test@test.com',
    number: '12457654'
  },
  {
    img: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
    id: 's2',
    name: 'Rahul',
    age: 12,
    email: 'test@test.com',
    number: '12457654',
  },
  {
    img: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
    id: 's3',
    name: 'Pritesh',
    age: 23,
    email: 'test@test.com',
    number: '12457654',
  },
  {
    img: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
    id: 's4',
    name: 'Ajinkya',
    age: 38,
    email: 'test@test.com',
    number: '12457654',
  },
  {
    img: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
    id: 's5',
    name: 'Nikhil',
    age: 18,
    email: 'test@test.com',
    number: '12457654',
  },
];

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {
  public baseUrl = ' http://localhost:5000/api/';
  private students : StudentModel[] = STUDENTS;
  constructor(private httpClient :HttpClient) { }

  // getStudenList():StudentModel[]{
  //   return this.students;
  // }

  getStudenList():Observable<any>{
      return this.httpClient.get(this.baseUrl + 'students');
     }

  // getStudentDetails(id : string) : StudentModel | undefined{
  //   return this.students.find((std:StudentModel) => std.id == id);
  // }

  getStudentDetails(id : string) : Observable<any>{
    return this.httpClient.get(this.baseUrl + 'students/' + id);
  }

  // createStudent(std:StudentModel){
  //   this.students.unshift(std);
  // }
  createStudent(std:StudentModel) : Observable<any>{
    return this.httpClient.post(this.baseUrl + 'students',std);
  }

  editStudent(id : string,std:StudentModel) : Observable<any>{
    return this.httpClient.patch(this.baseUrl + 'students/'+id , std);
  }

  deleteStudent(id : string)  : Observable<any>{
    return this.httpClient.delete(this.baseUrl + 'students/' + id);

  }
}
