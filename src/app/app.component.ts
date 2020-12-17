import { Component, VERSION, Pipe, PipeTransform } from "@angular/core";
import { FilterPipe } from "./pipes/FilterPipe";

interface Book {
  id: number;
  title: string;
  author: string;
  image: string;
  description: string;
  price: number;
}

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  searchStr: string = "";

  newBook: Book = {
    id: null,
    title: "",
    author: "",
    image: "",
    description: "",
    price: 0
  };

  isEdit: boolean = false;

  books: Book[] = [
    {
      id: 1,
      title: "Гарри Поттер и узник Азкабана",
      author: "Джоан Роулинг",
      image:
        "https://s1.livelib.ru/boocover/1003317448/o/2954/Dzhoan_Rouling__Garri_Potter_i_uznik_Azkabana.jpeg",
      description:
        "Гарри Поттер снова проводит лето в доме Дурслей. Третьекурсники в Хогвартсе могут посещать деревню магов Хогсмид, но для этого Гарри нужно получить разрешение у Дурслей. Дядя Вернон обещает подписать, если Гарри будет хорошо себя вести в присутствии его сестры Мардж, которая приезжает в гости на неделю.",
      price: 175
    },
    {
      id: 2,
      title: "Зеленая Миля",
      author: "Стивен Кинг",
      image:
        "https://s1.livelib.ru/boocover/1003823201/o/57e3/Stiven_King__Zelenaya_milya.jpeg",
      description:
        "Бывший надзиратель в федеральной тюрьме штата Луизиана «Холодная гора» Пол Эджкомб рассказывает свою историю. В 1932 году Пол работал в тюремном блоке «Е» (блоке для смертников) старшим надзирателем. Блок прозвали «Зелёная миля» по аналогии с «Последней милей», которую проходит приговорённый в последний раз. А зелёная — потому что полы в блоке были застелены светло-зелёным линолеумом.",
      price: 145
    }
  ];

  onClick(index) {
    this.books.splice(index, 1);
  }

  addBook() {
    const lastBook = this.books[this.books.length - 1];
    const lastId = lastBook.id;
    this.books.push({
      ...this.newBook,
      id: lastId + 1
    });
    this.newBook = {
      id: null,
      title: "",
      author: "",
      image: "",
      description: "",
      price: 0
    };
  }

  editBook() {
    const bookId = this.books.indexOf(this.newBook);
    this.books[bookId] = this.newBook;

    this.newBook = {
      id: null,
      title: "",
      author: "",
      image: "",
      description: "",
      price: 0
    };

    this.isEdit = false;
  }

  onClickEdit(index) {
    this.isEdit = true;
    this.newBook = this.books[index];
  }
}
