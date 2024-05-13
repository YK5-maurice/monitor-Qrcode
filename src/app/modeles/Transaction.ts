export class Transaction{
  id: number;
  nom: string;
  email: string;
  tel: string;
  gu_id: string;
  userIdCustomer: string;
  transactionType: string;
  AccountToCredit: string;
  Amount: string;
  Remarks:string;
  isGTBAccount:string;
  isOrangeMoney:string;
  isMoovMoney:string;
  isMTNMoney:string;
  status_qrCode:string;
  Insert_Date:string;

  constructor(
    id: number,
  nom: string,
  email:string,
  tel: string,
  gu_id: string,
  userIdCustomer: string,
  transactionType: string,
  AccountToCredit: string,
  Amount: string,
  Remarks:string,
  isGTBAccount:string,
  isOrangeMoney:string,
  isMoovMoney:string,
  isMTNMoney:string,
  status_qrCode:string,
  Insert_Date:string,
  ){
    this.id=id;
    this.nom=nom;
    this.email=email;
    this.tel=tel;
    this.gu_id=gu_id;
    this.userIdCustomer=userIdCustomer;
    this.transactionType=transactionType;
    this.AccountToCredit=AccountToCredit;
    this.Amount=Amount;
    this.Remarks=Remarks;
    this.isGTBAccount=isGTBAccount;
    this.isOrangeMoney=isOrangeMoney;
    this.isMoovMoney=isMoovMoney;
    this.isMTNMoney=isMTNMoney;
    this.status_qrCode=status_qrCode;
    this.Insert_Date=Insert_Date;

  }
}
