import { Component, VERSION } from "@angular/core";

interface Book {
  title: String;
  author: String;
  image: String;
  description: String;
  price: Number;
}

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  newBook: Book = {
    title: "",
    author: "",
    image: "",
    description: "",
    price: 0
  };

  isEdit: boolean = false;

  books: Book[] = [
    {
      title: "Гарри Поттер и узник Азкабана",
      author: "Джоан Роулинг",
      image:
        "https://s1.livelib.ru/boocover/1003317448/o/2954/Dzhoan_Rouling__Garri_Potter_i_uznik_Azkabana.jpeg",
      description:
        "Гарри Поттер снова проводит лето в доме Дурслей. Третьекурсники в Хогвартсе могут посещать деревню магов Хогсмид, но для этого Гарри нужно получить разрешение у Дурслей. Дядя Вернон обещает подписать, если Гарри будет хорошо себя вести в присутствии его сестры Мардж, которая приезжает в гости на неделю.",
      price: 175
    },
    {
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
    this.books.push({
      ...this.newBook
    });
  }

  editBook(){
    
  }
}
