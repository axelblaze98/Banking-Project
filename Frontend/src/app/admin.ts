export class Admin {
        "userId":String;
        "password":String;
        constructor(){}

}

export class AccountHolderDetails {
        constructor(
            public accountNumber:   number,
            public refernceId:      number,
            public accountBalance:  number,
            public department:      string,
            public title:           string,
            public firstName:       string,
            public middleName:      string,
            public lastName:        string,
            public mobileNumber:    string,
            public email:           string,
            public fatherName:      string,
            public motherName:      string,
            public aadharCard:      string,
            public dob:             string,
            public resAddress1:     string,
            public resAddress2:     string,
            public resLandMark:     string,
            public resState:        string,
            public resCity:         string,
            public resPincode:      string,
            public perAddress1:     string,
            public perAddress2:     string,
            public perLandMark:     string,
            public perState:        string,
            public perCity:         string,
            public perPincode:      string,
            public occupation:      string,
            public sourceOfIncome:  string,
            public annualSalary:    string,
            public approvedByAdmin: string,
            public adminRemark:     string
        ) {
        }
    }
    