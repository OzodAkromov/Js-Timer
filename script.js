const tabs = document.querySelectorAll('.tab-nav__btn')
const contents = document.querySelectorAll('.tab-body__content')

tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        removeActive()
        tab.classList.add('active')
        contents[index].classList.add('active')
    })
})

function removeActive() {
    tabs.forEach((tab, idx) => {
        tab.classList.remove('active')
        contents[idx].classList.remove('active')
    })
}

autoplaybirthday()

function birthdayTime() {
    document.querySelectorAll('.tab-body__content.active')
    const birthdayDate = new Date('28 january, 2024, 00:00:00').getTime();
    const nows = new Date().getTime();
    const distances = birthdayDate - nows;
    
    const sec = 1000;
    const min = sec * 60;
    const hour = min * 60;
    const day = hour * 24;
    
    const d = Math.floor( distances / (day) );
    const h = Math.floor( distances % (day) / (hour) );
    const m = Math.floor( distances % (hour) / (min) );
    const s = Math.floor( distances % (min) / (sec) );
    
    document.querySelector('.day').innerHTML = d;
    document.querySelector('.hour').innerHTML = h;
    document.querySelector('.min').innerHTML = m;
    document.querySelector('.sec').innerHTML = s;
    
    autoplaybirthday()
}


function autoplaybirthday() {
    timer = setTimeout(birthdayTime, 1000);
}


autoplay()

function khaitTime() {
    document.querySelector('.none')
    const khaitDate = new Date('1 january, 2024, 00:00:00').getTime();
    const now = new Date().getTime();
    const distance = khaitDate - now;
    
    const sec = 1000;
    const min = sec * 60;
    const hour = min * 60;
    const day = hour * 24;
    
    const d = Math.floor( distance / (day) );
    const h = Math.floor( distance % (day) / (hour) );
    const m = Math.floor( distance % (hour) / (min) );
    const s = Math.floor( distance % (min) / (sec) );
    
    document.querySelector('.days').innerHTML = d;
    document.querySelector('.hours').innerHTML = h;
    document.querySelector('.mins').innerHTML = m;
    document.querySelector('.secs').innerHTML = s;
    
    autoplay()
}


function autoplay() {
    timer = setTimeout(khaitTime, 1000);
}

