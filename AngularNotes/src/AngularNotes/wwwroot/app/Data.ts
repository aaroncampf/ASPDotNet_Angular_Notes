﻿import { Company } from './models/company';

export const Data: Data = {
    Companies: [
        {
            "ID": 1,
            "Name": "AJP Northwest",
            "Address": "??",
            "City": "Portland",
            "State": "Oregon",
            "Zip": "??",
            "Phone": "??",
            "Contacts": [
                {
                    ID: 1,
                    Name: "Aaron",
                    Position: "CEO",
                    Phone: "5039298022",
                    Email: "aaroncampf@hotmail.com",
                    Details: "Test",
                    Notes: [
                        {
                            ID: 1,
                            Title: "Test Note",
                            Created: new Date(2014, 4, 5),
                            Text: "drghdhfdhfdhnfn"
                        } 
                    ]
                }
            ],
            "Quotes": [
                {
                    "ID": "1",
                    "Date": "2012-04-23T18:25:43.511Z",
                    "Name": "First Quote",
                    "Details": [
                        {
                            ID: 1,
                            Display: "0",
                            DESC: "HCL80W 8 zo. Lids",
                            UNIT: "Case (1000)",
                            Cost: "29.20"
                        }
                    ]
                }
            ]
        }
    ],
        "Products": []
}

export interface Data {
    Companies: Array<Company>
    Products: Array<any>
}