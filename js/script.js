//class list
const btns=document.querySelectorAll('button'),
    wrapper= document.querySelector('.btn-block');

// console.log(btns[0].classList.length);

//console.log(btns[0].classList.item(1));//получение определенного класса

// console.log(btns[1].classList.add('red'));//добавляем определенный класс

// console.log(btns[0].classList.remove('blue'));
// console.log(btns[0].classList.toggle('blue'));//добавляет если класса нет и может его убрать потом

// if(btns[1].classList.contains('red')){
//     console.log('red');
// }

btns[0].addEventListener('click',()=>{

    // if(!btns[1].classList.contains('red')){
    //     btns[1].classList.add('red');
    // }
    // else{
    //     btns[1].classList.remove('red');
    // }


    btns[1].classList.toggle('red');
});

// console.log(btns[0].className);
//делегирование-обработка события

wrapper.addEventListener('click',(event)=>{
    // console.dir(event.target);
    if(event.target&&event.target.matches("button.red")){
        console.log("Hello");

    }
});

// btns.forEach(btn=>{
//     btn.addEventListener('click',()=>{
//         console.log('Hi')
//     });
// });

const btn=document.createElement('button');
btn.classList.add('red');
wrapper.append(btn);