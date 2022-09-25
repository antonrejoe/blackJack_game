




function random(variable) {
    
    let var1 = Math.random()
    let var2 = Math.round(var1*12 + 1)

    return variable = var2 + 1 
    
}


let card_img =document.querySelectorAll('.card > img')

card_img.forEach(element => {
    
    element.style.visibility = 'hidden'
});


let cards_1 = document.querySelectorAll('.card');

cards_1.forEach(element => {
    element.style.backgroundImage = `url("card_back.svg")`;
    element.style.backgroundPosition = 'center';
});

document.querySelector('button:not(.magic)').addEventListener('click',function () {


    let var1 ;
    let var2 ; 
    let firstCard  = random(var1);
    let secondCard = random(var2);
    let sum = firstCard + secondCard ;



    this.style.translate = '0vw';
    this.transition = 'all 1s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
    cards_1.forEach(element => {

        
            element.style.backgroundImage = `linear-gradient(
                to left top,
                rgba(144, 132, 132, 0.629),
                rgba(255, 255, 255, 0.719)
            
                )`;
        element.style.backgroundPosition = 'center';
        
        
        });
    
    


    const click_audio = new Audio("audio/click.mp3");

    click_audio.play();

    card_img.forEach(element => {
    
        element.style.visibility = 'visible'
    });
    
   
    this.innerText = 'continue';
    

       
    const cards = ['clubs','diamond', 'heart', 'spade'];



    document.querySelector('.card:nth-of-type(1) > h1').textContent = firstCard;
    document.querySelector('.card:nth-of-type(2) > h1').textContent = secondCard;

    if (firstCard == 11 ) {
        document.querySelector('.card:nth-of-type(1) > h1').textContent = 'A';
    }
    if (secondCard == 11 ) {
        document.querySelector('.card:nth-of-type(2) > h1').textContent = 'A';
    }

    if(firstCard == 10){
        document.querySelector('.card:nth-of-type(1) > h1').textContent = 'K';

    }
    if(secondCard == 10){
        document.querySelector('.card:nth-of-type(2) > h1').textContent = 'K';

    }
    if(firstCard == 9){
        document.querySelector('.card:nth-of-type(1) > h1').textContent = 'Q';

    }
    if(secondCard == 9){
        document.querySelector('.card:nth-of-type(2) > h1').textContent = 'Q';

    }
    if(firstCard == 10){
        document.querySelector('.card:nth-of-type(1) > h1').textContent = 'J';

    }
    if(secondCard == 10){
        document.querySelector('.card:nth-of-type(2) > h1').textContent = 'J';

    }

    let random_card = Math.round(Math.random()*3);
    let random_card2 = Math.round(Math.random()*3);

    let final= cards[random_card];
    let final2= cards[random_card2];
    // img\cards\diamond.svg


    let random_type_1 = `img/cards/${final}.svg`;
    let random_type_2 = `img/cards/${final2}.svg`;

    
    const img_1 = document.querySelectorAll('.card_1 > img');
    img_1.forEach(element => {
        element.src= random_type_1
    });
    let img_2 = document.querySelectorAll('.card_2 > img');

    img_2.forEach(element => {
        element.src = random_type_2
    });
     
    
   
   
    console.log(sum);

    
    
    
    function game_flow() {
        if (sum > 21) {
            console.log('out')

            let pop_up = document.createElement('div');
            pop_up.classList.add('popup');
            pop_up.innerText = 'Try again';
            pop_up.style.transition = 'all 1s cubic-bezier(0.68, -0.55, 0.265, 1.55)';

            pop_up.innerHTML = '<span class="cross_btn"></span><span class="popup_msg" >Try again</span>'

            let reload_btn = document.createElement('span');
            reload_btn.classList.add('reload_btn_span')
            reload_btn.innerHTML = `<img src = "img/reload.svg">`
            pop_up.appendChild(reload_btn);
            document.documentElement.appendChild(pop_up);
            document.querySelector('body > button:not(.magic)').style.translate = '100vw';
            let fail = new Audio(`audio/fail.mp3`);
            fail.play();
            reload_btn.addEventListener('click',function () {
    
                location.reload();
            
            });

        } if(sum == 21  ) {
            console.log('u won');

                    let pop_up = document.createElement('div');
            pop_up.classList.add('popup');
            pop_up.innerText = 'Try again';
            pop_up.style.transition = 'all 1s cubic-bezier(0.68, -0.55, 0.265, 1.55)';

            pop_up.innerHTML = '<span class="cross_btn"></span><span class="popup_msg" >You won !!</span>'

            let reload_btn = document.createElement('span');
            reload_btn.classList.add('reload_btn_span')
            reload_btn.innerHTML = `<img src = "img/reload.svg">`
            pop_up.appendChild(reload_btn);
            document.documentElement.appendChild(pop_up);
            document.querySelector('body > button:not(.magic)').style.translate = '100vw';
            
            reload_btn.addEventListener('click',function () {

                location.reload();
            
            });

            let victory = new Audio(`audio/victory.m4a`);
            victory.play();

        }if (sum < 21) {
            console.log('continue');

        }else{
            console.log('💩');

        } 
    }
    
    game_flow();

    



    
 });


 
 document.querySelector('button.magic').addEventListener('click',function () {
   
    let pop_up = document.createElement('div');
    pop_up.classList.add('popup');
    pop_up.innerText = 'Try again';
    pop_up.style.transition = 'all 1s cubic-bezier(0.68, -0.55, 0.265, 1.55)';

    pop_up.innerHTML = '<span class="cross_btn"></span><span class="popup_msg" >You won !!</span>'

    let reload_btn = document.createElement('span');
    reload_btn.classList.add('reload_btn_span')
    reload_btn.innerHTML = `<img src = "img/reload.svg">`
    pop_up.appendChild(reload_btn);
    document.documentElement.appendChild(pop_up);
    let fail = new Audio(`audio/fail.mp3`);
    fail.play();
    reload_btn.addEventListener('click',function () {

        location.reload();
    
    });
    
    document.querySelector('body > button:not(.magic)').style.translate = '100vw';
    
    var magic = new Audio(`audio/mixkit-horror-bell-cartoon-transition-598.wav`);
    
    magic.play();
    
})





