export class Login {
        "userId":String;
        "password":String;
}

export class AccountHolderDetails {
    constructor(){}
    public firstName:       string;
    public accountNumber:   number;
    public refernceId:      number;
    public approvedByAdmin: string;
    public adminRemark:     string;
}

export class UserRegister{
    constructor(){}
    "accNumber" : String;
    "lgnPassword" : String;
    "tnPassword": String
}

export class AdminRegister{
    public adminUserID:string;
     public adminPassword:string;
     public adminName:string;
  }

export class OpenAccount{
    
    public title :string;
    public firstName :string;
    public middleName :string;
    public lastName  :string;
    public mobileNumber :string;
    public email :string;
    public fatherName  :string;
    public motherName  :string;
    public aadharCard :string;
    public dob  :string;
    public resAddress1 :string;
    public resAddress2 :string;
    public resLandMark  :string;
    public resState :string;
    public resCity :string;
    public resPincode :string;
    public perAddress1 :string;
    public perAddress2 :string;
    public perLandMark :string;
    public perState  :string;
    public perCity  :string;
    public perPincode  :string;
    public occupation :string;
    public sourceOfIncome :string;
    public annualSalary :string;
}
