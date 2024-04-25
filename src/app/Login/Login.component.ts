import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../my-service.service';
import { error } from 'jquery';
import { Router } from '@angular/router';

@Component({
  selector: 'app-Login',
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.component.css']
})
export class LoginComponent implements OnInit {

  password!:string;

  constructor(private service:MyServiceService, private route:Router) { }

  ngOnInit() {}

  onSubmit(){
    this.service.getUserBId(this.password).subscribe(
      (data)=>{
        if(data!=null){
          this.route.navigate(["/data"])
        }
        console.log(data)
      },
      (error)=>{
        console.error("errur lors du chargement des donnees",error)
      }
    )
  }

}
