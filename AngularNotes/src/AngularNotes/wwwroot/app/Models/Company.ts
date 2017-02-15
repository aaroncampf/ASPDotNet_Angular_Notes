import { Contact } from './Contact';

export interface Company {
   ID: number;
   Name: string;
   Address: string;
   City: string;
   State: string;
   Zip: string;
   Phone: string;
   Contacts: Array<Contact>;


    //public Quotes: Array<Quote>;
    Quotes: Array<any>
}
