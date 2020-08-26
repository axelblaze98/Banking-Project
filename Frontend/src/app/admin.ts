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

