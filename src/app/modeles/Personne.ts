export class Personne{
  id: number;
  nom: string;
  prenom: string;
  contact: string;
  email: string;
  date: string;
  heure: string;
  motpass: string;
  lienphoto: string;

  constructor(
    id: number,
  nom: string,
  prenom: string,
  contact: string,
  email: string,
  date: string,
  heure: string,
  motpass: string,
  lienphoto: string
  ){
    this.id=id;
    this.prenom=prenom;
    this.contact=contact;
    this.date=date;
    this.email=email;
    this.heure=heure;
    this.lienphoto=lienphoto;
    this.nom=nom;
    this.motpass=motpass
  }
}
