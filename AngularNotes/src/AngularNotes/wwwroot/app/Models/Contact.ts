import { Note } from './Note';

export interface Contact {
    ID: number;
    Name: string;
    Position: string;
    Phone: string;
    Email: string;
    Details: string;
    Notes: Array<Note>;
}