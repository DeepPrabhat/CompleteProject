import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from './models/Student';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient:HttpClient) { }

  addStudent(student:Student)
  { 
    return this.httpClient.post('api/add',student)
  }

  showStudents()
  {
    return this.httpClient.get('api/showall');
  }
}
