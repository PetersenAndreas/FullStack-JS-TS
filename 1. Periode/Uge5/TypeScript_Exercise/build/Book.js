"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _title, _author, _published, _pages;
//1b
function objectInstance(book) {
    console.log(`Title: ${book.title}\nAurthor: ${book.author}\nRelease date:${book.published}\nPages: ${book.pages}\n`);
}
let bog1 = {
    title: "Den store bog",
    author: "Kim Kim",
    published: new Date("2020-02-23"),
    pages: 200
};
//1d
let bog2 = {
    title: "Bogen",
    author: "John Kim"
};
//bog2.author = "Henning"; throws an error
objectInstance(bog1);
objectInstance(bog2);
//1c
/*
Duck typing basically means that TS checks if the types are matching with the specified.
We cannot change the type of a varible through our code. If we trie, the compiler generate a compile-time error.
*/
//1f
class Book {
    constructor(title, author, published, pages) {
        _title.set(this, void 0);
        _author.set(this, void 0);
        _published.set(this, void 0);
        _pages.set(this, void 0);
        __classPrivateFieldSet(this, _title, title);
        __classPrivateFieldSet(this, _author, author);
        __classPrivateFieldSet(this, _published, published);
        __classPrivateFieldSet(this, _pages, pages);
    }
    get title() { return __classPrivateFieldGet(this, _title); }
    set title(title) { __classPrivateFieldSet(this, _title, title); }
    get author() { return __classPrivateFieldGet(this, _author); }
    set author(author) { __classPrivateFieldSet(this, _author, author); }
    get published() { return __classPrivateFieldGet(this, _published); }
    set published(published) { __classPrivateFieldSet(this, _published, published); }
    get pages() { return __classPrivateFieldGet(this, _pages); }
    set pages(pages) { __classPrivateFieldSet(this, _pages, pages); }
}
_title = new WeakMap(), _author = new WeakMap(), _published = new WeakMap(), _pages = new WeakMap();
let bog3 = new Book("Hejjeh", "Lars", new Date("2020-09-25"), 1);
objectInstance(bog3);
//# sourceMappingURL=Book.js.map