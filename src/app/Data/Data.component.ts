import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../my-service.service';
import { Personne } from '../modeles/Personne';
import * as $ from 'jquery';
import 'datatables.net';

@Component({
  selector: 'app-Data',
  templateUrl: './Data.component.html',
  styleUrls: ['./Data.component.css']
})

export class DataComponent implements OnInit {
  titre="Plateforme pour surveiller les transmissions de GTplace";

  personnes:Personne[] | undefined;

  constructor(private service:MyServiceService) { }

  ngOnInit() {

    this.service.getAll().subscribe(
      (data)=>{
        this.personnes=data
        console.log(this.personnes)
        $(document).ready(function() {
          $('#myTable').DataTable();
        });
      },
      (error)=>{
        console.error("erreur lors de la recuperation des donnees",error)
      }
    )

  }





}
