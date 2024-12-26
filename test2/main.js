// TASK1

function extractNumbers(str) {
    return str.match(/\d+/g)?.map(Number) || [];
}

console.log(extractNumbers("a1fg5hj6"));

// TASK2

function fibonacciWithDelay(prev = 0, current = 1) {
    if (prev > 144) return;

    console.log(prev);

    setTimeout(() => {
        fibonacciWithDelay(current, prev + current);
    }, 1000);
}

fibonacciWithDelay();

// TASK3

async function fetchProductTitles() {
    const apiUrl = "https://fakestoreapi.com/products";

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`Ошибка HTTP: ${response.status}`);
        }

        const products = await response.json();
        products.forEach(product => {
            console.log(product.title);
        });
    } catch (error) {
        console.error("Произошла ошибка при запросе:", error.message);
    }
}

fetchProductTitles();

// TASK4

 // Выбираем контейнер с кнопками
 const buttonContainer = document.getElementById('button-container');

 // Добавляем обработчик события на контейнер
 buttonContainer.addEventListener('click', (event) => {
     // Проверяем, что клик произошел по кнопке
     if (event.target.tagName === 'BUTTON') {
         const color = event.target.textContent; // Получаем текст кнопки (название цвета)
         document.body.style.backgroundColor = color; // Меняем цвет фона body
     }
 });

 // TASK5

 const block = document.getElementById('block');
 const toggleButton = document.getElementById('toggleButton');

 toggleButton.addEventListener('click', () => {
     if (block.style.display === 'none') {
         block.style.display = 'block'; // Показываем блок
         toggleButton.textContent = 'Скрыть блок'; // Меняем текст кнопки
     } else {
         block.style.display = 'none'; // Скрываем блок
         toggleButton.textContent = 'Показать блок'; // Меняем текст кнопки
     }
 });

 // TASK6

 const counterElement = document.getElementById('counter');
        let count = 0;

        const intervalId = setInterval(() => {
            count++;
            counterElement.textContent = count;

            if (count >= 100) {
                clearInterval(intervalId); // Останавливаем счётчик
            }
        }, 1); // Интервал 1 миллисекунда

// TASK7

 // Пример JSON-данных, которые можно имитировать через сторонний ресурс
 const jsonUrl = 'https://jsonplaceholder.typicode.com/posts/1'; // Используем пример публичного JSON

 // Асинхронная функция для получения данных
 async function fetchData() {
     try {
         const response = await fetch(jsonUrl); // Отправляем GET-запрос
         if (!response.ok) {
             throw new Error(`Ошибка: ${response.status}`); // Обрабатываем ошибку HTTP
         }
         const data = await response.json(); // Парсим JSON-данные
         console.log(data); // Выводим данные в консоль
     } catch (error) {
         console.error('Ошибка при запросе:', error.message); // Обрабатываем ошибки
     }
 }

 // Добавляем обработчик события на кнопку
 document.getElementById('fetchButton').addEventListener('click', fetchData);


