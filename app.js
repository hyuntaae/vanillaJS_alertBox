const openBtn = document.querySelector('#open');
const alertBox = document.querySelectorAll('.alert-box');
const closeBtn = document.querySelectorAll('.close-btn');
let count = 0;

openBtn.addEventListener('click', function(){
    count ++;
    console.log(count);

    if(count == 1) {
        alertBox[0].classList.add('show')
        openBtn.innerHTML = '한번 더?'
        openBtn.style.color = 'black'
    } else if (count == 2) {
        alertBox[1].classList.add('show')
        openBtn.innerHTML = '찐막으로?'
        openBtn.style.color = 'black'
    } else if (count == 3) {
        alertBox[2].classList.add('show')
        openBtn.innerHTML = '에이 설마'
        openBtn.style.color = 'black'
    } else {
        openBtn.innerHTML = '그만 눌러!!'
        openBtn.style.color = 'red'
    }
})

function close(x,y) {
    closeBtn[x].addEventListener('click', function(){
        alertBox[x].classList.remove('show')
        openBtn.innerHTML = y
        openBtn.style.color = 'black'
        count = x;
        console.log(count);
    })
}

close(0,'한번 더?');
close(1,'찐막으로');
close(2,'에이 설마');