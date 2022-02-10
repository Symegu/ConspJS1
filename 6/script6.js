Обработка событий JS 
Событие — это сигнал от браузера о том, что что-то произошло, можно указать обработчик любому событию
document.addEventListener('событие', event =>{функция при срабатывании события});

function myProcessor(){
    console.log("Загрузка завершена");
}
window.onload = myProcessor;

Есть и другой способ: обработчик можно назначить прямо в разметке
Он указывается в атрибуте on<событие>
Чтобы прикрепить click-событие к картинке, нужно присвоить обработчик onclick:
<img onclick="changeBigPicture()" src="img/gallery/small/1.jpg"></img>
//Так будет выглядеть обработчик:
function changeBigPicture(eventObj){
	console.log(eventObj);
}


addEventListener и removeEventListener
Обработчик назначается  вызовом addEventListener с тремя аргументами:
element.addEventListener(event, handler[, phase]);

event — имя события (например, click).
handler — ссылка на функцию, которую надо поставить обработчиком.
phase — необязательный аргумент, «фаза», на которой обработчик должен сработать (редко нужен)

Обработчик удаляют вызовом removeEventListener:
element.removeEventListener(event, handler[, phase]);

//доп материалы -  -- - крестики-нолики
