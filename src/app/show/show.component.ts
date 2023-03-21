import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Student } from '../models/Student';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})
export class ShowComponent implements OnInit{
  constructor(private api:ApiService){
  }

  records!: Student[]
  ngOnInit():void
  {
    this.api.showStudents().subscribe(res=>{
      this.records=res as any;
    })
  }


}
