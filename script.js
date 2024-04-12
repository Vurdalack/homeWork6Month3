// let day = document.getElementById('day')
// let hour = document.getElementById('hour')
// let minute = document.getElementById('minute')
// let second = document.getElementById('second')

// const formatNum = (num) => num < 10 ? `0 ${num}` : num;



// const den = document.getElementById('den')
// den.style.display = 'none'


// const interval = setInterval(() => {
//     let date = new Date();
//     // const end = date + dur;
//     let aleksandr = new Date(2024, 4, 12);
//     let difference = aleksandr.getTime() - date.getTime();

//     day.textContent = formatNum(Math.floor(difference / 1000 / 60 / 60 / 24 ));
//     hour.textContent = formatNum(Math.floor((difference / 1000 / 60 / 60 ) % 24));
//     minute.textContent = formatNum(Math.floor((difference / 1000 / 60 ) % 60));
//     second.textContent = formatNum(Math.floor((difference / 1000) % 10));
// })



let day = document.getElementById('day')
let hour = document.getElementById('hour')


const wrapper = document.getElementById('wrapper')
const den = document.getElementById('den')


den.style.display = 'none'

const dur = 100000;

function aleksander(){
    const second = document.getElementById('second')
    const now = new Date().getTime();
    const end = now + dur 
    const interval = setInterval(()=>{
        const formatNum = end - new Date().getTime()


        
        if(formatNum<= 0){
            clearInterval(interval)

            wrapper.style.display = 'none'
            den.style.display = 'block'
        }else{
  
            const minutes = Math.floor((formatNum % (1000 * 60 * 60)) / (1000 * 60)); 
            const seconds = Math.floor((formatNum % (1000 * 60)) / 1000); 
 
            second.innerText = ` ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        }
    },1000)
}

window.onload=aleksander








// let date = new Date();
// let aleksandr = new Date(2024, 6, 15);
// // let history = new Date(0);
// let difference = aleksandr.getTime() - date.getTime();

// console.log(date.getTimezoneOffset());
// console.log(history);
// console.log(date.getFullYear());
// console.log(date.getMonth());
// console.log(date.getDay());
// console.log(date.getDate());
// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getSeconds());
// console.log(date.getMilliseconds());
// console.log(aleksander);




