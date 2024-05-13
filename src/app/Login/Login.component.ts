import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../my-service.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-Login',
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.component.css']
})
export class LoginComponent implements OnInit {

  user!:string;
  pass!:string;

  constructor(private service:MyServiceService, private route:Router, private taostr:ToastrService) {}

  ngOnInit() {}

  onSubmit(){
    if(!this.user||!this.pass){
      // crypter avec RSA

      
      this.taostr.warning("veiller remplir tous les champs")
    }else{
      console.info(this.user,this.pass)
      this.service.getUserById(this.user,this.pass).subscribe(
        (data)=>{

          if(data!=null){
            this.service.setLogin(true);
            this.route.navigate(["/data"])
          }
          console.log(data)
        },
        (error)=>{
          console.error(error)
          this.taostr.error("errur lors du chargement des donnees")
          this.route.navigate([""])
        }
      )
    }/*

    if(validateEmail(this.user)){

     // this.service.callApiWithKey()

      this.service.getUserById(this.user,this.pass).subscribe(
        (data)=>{
          this.taostr.success("veiller remplir tous les champs")
          if(data!=null){
            this.service.setLogin(true);
            this.route.navigate(["/data"])
          }
          console.log(data)
        },
        (error)=>{
          console.error(error)
          this.taostr.error("errur lors du chargement des donnees")
        }
      )
    }else{
      this.taostr.info("le format de l'email n'est pas correcte")
    }

    function validateEmail(email: string): boolean {
      // Expression régulière pour valider une adresse e-mail
      const emailRegex: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      return emailRegex.test(email);
    }
  }*/

  }

}
