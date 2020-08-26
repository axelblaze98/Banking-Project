export class Admin {
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
export class Forgotpassword {
     "userId": string;
     "password": string;
}

export class Forgotuserid {
    "userId": string;
    "password": string;
}

