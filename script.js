// let name = prompt("Enter a name"); //Запрашиваем имя
// name = name.replace(name[0], name[0].toUpperCase()); //Делаем что б 1 буква имени была постоянно заглавной
// alert(`Welcome ${name}`); //Приветствем по имени


// let call = prompt("Введите предложение с использованием ком")
// let modcall = call.split(",").join(", блін"); //После каждой комы, добавляем слово "блин"
// alert(modcall); //Предложение с изменениями


// let str = "cANBerRa"
// let result = str.slice(0, 1).toUpperCase() + str.slice(1).toLowerCase(); //Обращаемся с помощью slice(0, 1) к первой букве слова, затем добовляем к ней с помощью "+" и slice(1) вторую часть слова, с помощью toUpperCase и toLowerCase нужные буквы уменьшаем и увеличиваем
// console.log(result) //Выводим исправленое слово


// let text = "qwer qwer qwer qwer qwer";
// let words = text.split(" "); //text.split(" ")- с помолью этой команды считаем количество пробелов сежду словами, тем самым узнаем количество слов
// console.log(words);


// let surname = prompt("Введите фамилию");
// let name = prompt("Введите имя");
// let noun = prompt("Введите отчество");
// surname = (surname.trim()); //Убираем лишние отступы
// name = (name.trim()); //Убираем лишние отступы
// noun = (noun.trim()); //Убираем лишние отступы
// let result_1 = surname.slice(0, 1).toUpperCase() + surname.slice(1).toLowerCase(); //Делаем обязательное начало с большой быквы в слове
// let result_2 = name.slice(0, 1).toUpperCase() + name.slice(1).toLowerCase(); //Делаем обязательное начало с большой быквы в слове
// let result_3 = noun.slice(0, 1).toUpperCase() + noun.slice(1).toLowerCase(); //Делаем обязательное начало с большой быквы в слове
// let fullName = (`${result_1} ${result_2} ${result_3}`); //Объединяем все prompt запросы в 1 строку
// alert(fullName); //Выводим объединеную строку


// let str = "Було жарко. Василь пив пиво вприкуску з креветками";
// let oldWord = "пиво";
// let newWord = "чай";
// let words = str.split(" "); // Разбиваем строку на массив слов
// for (let i = 0; i < words.length; i++) {
//    if (words[i] === oldWord) {
//       words[i] = newWord;
//    }
// } // Проходим по каждому слову и заменяем старое слово на новое, если оно найдено
// let result = words.join(" "); // Объединяем массив слов обратно в строку
// console.log(result); // "Було жарко. Василь пив чай вприкуску з креветками"



// const element = document.querySelector(".text"); // Получаем элемент, содержащий HTML-код с тегом <br>
// const brTags = element.querySelectorAll("br"); // Получаем коллекцию всех тегов <br> внутри элемента
// brTags.forEach((brTag) => {
//    brTag.remove();
// }); // Удаляем каждый тег <br>
// const updatedHtml = element.innerHTML; // Получаем обновленный HTML-код из элемента
// console.log(updatedHtml);


// let str = "якийсь текст у якому є один тег <br/> і всяке інше";
// let tagbr = str.indexOf("<br/>"); // находим тег в предложении
// let tagBR = tagbr + 6; // длина "<br />" ровна 6
// let result = str.slice(0, tagbr) + "<BR/>" + str.slice(tagBR); // заменяем тег и соединяем с другими частями предложения
// console.log(result); // якийсь текст у якому є один тег <BR/> і всяке інше


// let inputString = prompt("Введіть рядок з маркерами нового рядка '\\n':");
// let arrayOfStrings = inputString.split("\\n"); //Разбиваем рядок
// let multiLineString = arrayOfStrings.join("\n"); //Делаем перенос после разбития
// console.log(multiLineString);
// alert(multiLineString);


window.addEventListener('DOMContentLoaded', function () {
   let video = document.querySelector('.video');

   video.addEventListener('click', function () {
      if (video.classList.contains('ready')) {
         return;
      }
      video.classList.add('ready');
      video.insertAdjacentHTML('afterbegin', '<iframe width="560" height="315" src="https://www.youtube.com/embed/ORkIoaM7ICQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>');
   })
})