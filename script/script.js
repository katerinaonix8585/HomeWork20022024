const rootNote = document.querySelector(".root");

const products = [
  { id: 1, title: 'Футбольный мяч', price: 25.99, count: 15 },
  { id: 2, title: 'Наушники Bluetooth', price: 59.99, count: 20 },
  { id: 3, title: 'Ноутбук Dell Inspiron', price: 899.99, count: 0 },
  { id: 4, title: 'Смартфон Samsung Galaxy S21', price: 799.99, count: 10 },
  { id: 5, title: 'Кофеварка Nespresso', price: 149.99, count: 8 },
  { id: 6, title: 'Книга "Мастер и Маргарита"', price: 12.99, count: 30 },
  { id: 7, title: 'Фотоаппарат Canon EOS R5', price: 3499.99, count: 0 },
  { id: 8, title: 'Спортивные кроссовки Nike Air Max', price: 129.99, count: 12 },
  { id: 9, title: 'Умный термостат Nest', price: 199.99, count: 0 },
  { id: 10, title: 'Пылесос Dyson V11', price: 499.99, count: 6 }
];

const productsNodesArray = products.map (({title, price, count}) => {
      const container = document.createElement("div");
      const titleNode = document.createElement("p");
      const priceNode = document.createElement("p");
      const countNode = document.createElement("p");
      const newButton = document.createElement("button");

      titleNode.innerText = `Наименование товара: ${title}`;
      priceNode.innerText = `Цена: ${price}`;
      countNode.innerText = count > 0 ? `Наличие: ${count}` : `Наличие: товар закончился`;
      newButton.innerText = "Click!"

      container.append(titleNode, priceNode, countNode, newButton);
      container.classList.add("card");
      newButton.style.width = "70px";
      newButton.style.height = "25px";

      newButton.addEventListener("click", () => {
           const getValue = () => Math.round((Math.random() * 255));
          
           const red = getValue();
           const green = getValue();
           const blue = getValue();

           container.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
        });

      return container;
});

rootNote.append(...productsNodesArray);



// Необходимо написать скрипт, который выводит карточки с информацией о товаре.

// У карточек с товаром должен быть класс, который позволяет их стилизовать
// Если товар кончился (count равен 0) то нужно вместа кол-ва вывести фразу "Товар кончился"
// Добавьте кнопку к каждой карточке при нажатии на которую цвет заднего фона карточки меняется на случайный.