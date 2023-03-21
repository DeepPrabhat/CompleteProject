import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { Student } from '../models/Student';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})

export class SignupComponent implements OnInit{
  //fname=new FormControl('');
  userForm!: FormGroup;

  constructor(private as:ApiService, private router: Router) {
  }

  // userForm =this.fb.group({
  //   fname:['',Validators.required],
  //   lname:['']
  // });\

  ngOnInit(): void {
    this.userForm = new FormGroup({
      fname: new FormControl('',Validators.required),
      lname: new FormControl('',Validators.required)
    })
  }

  AddStudent(){
    this.as.addStudent(this.userForm.value).subscribe((data) => {
      console.log(data);
    })
    this.router.navigate(["/showall"])
    console.log(this.userForm.value)
  }

}
