// 도서 관리

// 도서 추가
// 도서 목록 출력
// 도서 대여
// 도서 반납
let book = {
  books: []
};
class Library{
  constructor(id, title, author){
    this.id = id;
    this.title = title;
    this.author = author;
    this.isAvailable = true;
  }
    add() {
      const newBook = new book(this.books.length + 1, title, author);
      this.books.push(newBook);
      console.log(`${this.title}책이 추가되었습니다 (저자: ${this.author})`);
    }

    display(){
      this.books.forEach(book => {
        console.log(`${this.book.id}: ${this.book.title} 저자:${this.author} - ${this.book.isAvailable ? '대여 가능': '대여 불가'}`);
      });
    }

    rent(id){
      
    }
    
  }

let busan = new Library(1, '12312', '12');
busan.add();
busan.display();