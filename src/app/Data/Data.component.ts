import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../my-service.service';
import { Transaction } from '../modeles/Transaction';
import * as $ from 'jquery';
import 'datatables.net';
import { Router } from '@angular/router';
import 'datatables.net-buttons';

@Component({
  selector: 'app-Data',
  templateUrl: './Data.component.html',
  styleUrls: ['./Data.component.css']
})

export class DataComponent implements OnInit {

  selectedColumn: string | null = null;
  columns = [
    { name: 'ID', hidden: true },
    { name: 'NOM', hidden: false },
    { name: 'Email', hidden: false },
    { name: 'Tel', hidden: true },
    { name: 'Gu_id', hidden: true},
    { name: 'UserIdCustomer', hidden: false },
    { name: 'TransactionType', hidden: false },
    { name: 'AccountToCredit', hidden: false },
    { name: 'Amount', hidden: false},
    { name: 'Remarks', hidden: false },
    { name: 'IsGTBAccount', hidden: true },
    { name: 'IsOrangeMoney', hidden: true },
    { name: 'IsMoovMoney', hidden: true },
    { name: 'IsMTNMoney', hidden: true },
    { name: 'Status_qrCode', hidden: true },
    { name: 'InsertDate', hidden: false }
  ];

  toggleColumn(columnName: any) {
    const column = this.columns.find(col => col.name === columnName);
    if (column) {
      column.hidden = !column.hidden;
    }
  }

  titre="Plateforme pour surveiller les transmissions de GTplace";

  // variable de type tableau sans initialiser
  transactions:Transaction[] | undefined ;

  constructor(private service:MyServiceService,private route:Router) { }

  ngOnInit() {

    // condition pour verifier si l'utilisateur c'est connecter sur la page de login
    if(this.service.getLogin()){

           //afficher le contenu de getLogin
      console.log(this.service.getLogin())
      // si connexion a la page login appelle de la methode getAll() pour charger les data

  }else{
/*
    console.error("erreur lors de la recuperation des donnees");
    // si pas de connexion sur login rediriger sur la page login
    this.route.navigate(["/data"])
*/
    this.service.getAll().subscribe(
      (data)=>{
        this.transactions = data;
        console.log(data);
        $(document).ready(() => {
            $('#myTable').DataTable();
        });

      },
      (error)=>{
        console.error("erreur lors de la recuperation des donnees",error);
      }
    )

  }
}

}
