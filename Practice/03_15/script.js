class Book {
  constructor(title, author, pages, isOpened, currentPage, isFinished) {
    (this.title = title),
      (this.author = author),
      (this.pages = pages),
      (this.isOpened = isOpened),
      (this.currentPage = currentPage),
      (this.isFinished = isFinished);
  }
  open(bookStatus) {
    this.isOpened = bookStatus;
  }
  turnPage(currentPage) {
    if (this.currentPage === currentPage) {
      this.isFinished = true;
      return this.isFinished;
    } else {
      this.currentPage = currentPage + 1;
    }
  }
}

let myBook = new Book(
  "Let the party started",
  "John Doe",
  312,
  false,
  25,
  false
);
let sofiBook = new Book("My first snow", "Emilia Klark", 120, false, 49, false);
let nastkaBook = new Book(
  "Last book of the year",
  "Stefany Blue",
  259,
  true,
  258,
  false
);

console.log(myBook);
console.log(sofiBook);
console.log(nastkaBook);
