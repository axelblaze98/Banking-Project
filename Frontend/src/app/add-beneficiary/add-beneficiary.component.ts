import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-beneficiary',
  templateUrl: './add-beneficiary.component.html',
  styleUrls: ['./add-beneficiary.component.css']
})
export class AddBeneficiaryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  titles=['Mr.', 'Mrs.' , 'Ms.'];
  checkInfo="checked";
  // someProperty = new Beneficiary("",null);

  saveBeneficiry(){
    let acNumber = ((document.getElementById("bAccountNumber") as HTMLInputElement).value);
    let reAcNumber = ((document.getElementById("bReAccountNumber") as HTMLInputElement).value);

    // alert(acNumber);
    if(acNumber != reAcNumber){
      alert("Account Number Mis-Match"); 
    }
    else{
    }
  }

  validate(){
    // let acNumber = ((document.getElementById("bAccountNumber") as HTMLInputElement).value);
    // let reAcNumber = ((document.getElementById("bReAccountNumber") as HTMLInputElement).value);

    // // alert(acNumber);
    // if(acNumber != reAcNumber){
    //   alert("Account Number Mis-Match"); 
    //   this.misMatch=true;
    // }
    // else{
    //   this.misMatch=false;
    // }
  }

}
