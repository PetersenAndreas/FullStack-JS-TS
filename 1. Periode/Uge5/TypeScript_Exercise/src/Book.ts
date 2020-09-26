//1a
interface IBook {
    title: string;
    readonly author: string; //1e author is now readonly
    published?: Date;//1d 
    pages?: number; //1d they are now optionale, meaning we dont have to provide them in our object.

}

//1b
function objectInstance(book: IBook) {
    console.log(`Title: ${book.title}\nAurthor: ${book.author}\nRelease date:${book.published}\nPages: ${book.pages}\n`)
}

let bog1: IBook = {
    title: "Den store bog", 
    author: "Kim Kim", 
    published: new Date("2020-02-23"), 
    pages: 200
};

//1d
let bog2: IBook= {
    title: "Bogen",
    author: "John Kim"
}
//bog2.author = "Henning"; throws an error


objectInstance(bog1);
objectInstance(bog2);


//1c
/* 
Duck typing basically means that TS checks if the types are matching with the specified. 
We cannot change the type of a varible through our code. If we trie, the compiler generate a compile-time error.
*/

//1f
class Book implements IBook {
    #title: string;
    #author: string;
    #published: Date; 
    #pages: number;
    
    constructor(title: string, author: string, published: Date, pages: number){
        this.#title = title;
        this.#author = author;
        this.#published = published;
        this.#pages = pages;
    }

    get title():string {return this.#title}
    set title (title:string) {this.#title= title}

    get author():string {return this.#author}
    set author (author:string) {this.#author= author}

    get published():Date {return this.#published}
    set published (published:Date) {this.#published= published}

    get pages():number {return this.#pages}
    set pages (pages:number) {this.#pages= pages}
}

let bog3 = new Book("Hejjeh", "Lars", new Date("2020-09-25"), 1);

objectInstance(bog3);
