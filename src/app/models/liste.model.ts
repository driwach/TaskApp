import {ListeItem} from './lista-item.model';

export class Liste{
    id: number;
    title: string;
    createdIn: Date;
    finishedEn: Date;
    finished: boolean;
    items: ListeItem[];
    constructor( title: string) {
    this.title = title;
    this.createdIn = new Date();
    this.finished = false;
    this.items = [];
    this.id = new Date().getTime();
    }
}
