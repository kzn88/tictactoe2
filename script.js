let block = document.querySelectorAll('.block');
let container = document.querySelector('.container1')
let x = 1;
let y = 3;
let posPlayer2;
let player1Answers = new Array ();
let player2Answers = new Array ();
let winner1=[];
let winner2=[];
let fighter='x';
let fighter2='0';
let winner = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7],
];
for (let i=0;i<9;i++) {
block[i].setAttribute('posX',x)
x++
}

document.querySelector('.x').addEventListener('click', function () {
    document.querySelector('.x').classList.add('active');
    document.querySelector('.null').classList.remove('active')
    fighter='x';
    fighter2='0';      
})


document.querySelector('.null').addEventListener('click', function () {
    document.querySelector('.null').classList.add('active')
    document.querySelector('.x').classList.remove('active')  
    fighter='0';
    fighter2='x';
    posPlayer2=randompos(); 
    player2=document.querySelector('[posX="'+posPlayer2[0]+'"]');
    player2.innerHTML=fighter2;
    player2Answers.push(parseInt(posPlayer2));   
})



function randompos () {
    let y = Math.floor(Math.random()*(9)+1);
    return [y]
}

function checkOtvet1 () {

    for (let i=0;i<winner.length;i++) {
        a=winner[i].filter(item=>player1Answers.includes(item))
        if (a.length!=3) {}
        else {winner1.push(a)}
        }
        console.log ('верные ответы игрока 1 ',winner1[0]);
        let w1= winner1[0][0];
        let w2= winner1[0][1];
        let w3= winner1[0][2];
        console.log(w1,w2,w3)
        document.querySelector('[posX="'+w1+'"]').style.animationName='block';
        document.querySelector('[posX="'+w2+'"]').style.animationName='block';
        document.querySelector('[posX="'+w3+'"]').style.animationName='block';
        
    }
function checkOtvet2() {

    for (let i=0;i<winner.length;i++) {
        a=winner[i].filter(item=>player2Answers.includes(item))
        if (a.length!=3) {}
        else {winner2.push(a)}
        }
        console.log ('верные ответы игрока 2 ',winner2[0])
        let w1= winner2[0][0];
        let w2= winner2[0][1];
        let w3= winner2[0][2];
        console.log(w1,w2,w3)
        document.querySelector('[posX="'+w1+'"]').style.animationName='block';
        document.querySelector('[posX="'+w2+'"]').style.animationName='block';
        document.querySelector('[posX="'+w3+'"]').style.animationName='block';
        
    }




function checkWinner () {
    for (let i in winner){
        let win=true;
        for (let j in winner[i]) {
            let id = winner[i][j];
            let ind = player1Answers.indexOf(id);

            if (ind===-1) {win=false}
                                  }
        if (win) return true
    }
    return false;
}
function checkWin () {
    for (let n in winner){
        let win1=true;
        for (let m in winner[n]) {
            let id = winner[n][m];
            let ind = player2Answers.indexOf(id);

            if (ind===-1) {win1=false}
                                  }
        if (win1) return true
    }
    return false;
}

container.addEventListener('click', function(event) {

    if (document.querySelector('.winner').innerHTML==='Winner '+fighter||
    document.querySelector('.winner').innerHTML==='Winner '+fighter2) {return}
    let a = event.target.attributes[1].value;
    player1=document.querySelector('[posX="'+a+'"]');
    if (player1.innerHTML==="") {
    player1.innerHTML=fighter;
    player1Answers.push(parseInt(a));
    player1.classList.remove('hover')
}
    else {return}
    if (checkWinner()){document.querySelector('.winner').innerHTML='Winner '+fighter;
    document.querySelector('.restart').style.visibility='visible';
    for (i=0;i<9;i++) {
        block[i].classList.remove('hover')
        }
        checkOtvet1 ();
    return};
    if (player1Answers.length<5) 
    {
    do {
    posPlayer2=randompos(); 
    player2=document.querySelector('[posX="'+posPlayer2[0]+'"]');}
    while (posPlayer2[0]===a||player2.innerHTML!='') 
    player2=document.querySelector('[posX="'+posPlayer2[0]+'"]');
    // player2.innerHTML=fighter2;
    setTimeout(() => player2.innerHTML=fighter2, 0);
    player2Answers.push(parseInt(posPlayer2));
    player2.classList.remove('hover')
    if (checkWin()){document.querySelector('.winner').innerHTML='Winner '+fighter2;document.querySelector('.restart').style.visibility='visible';
        checkOtvet2(); 
        for (i=0;i<9;i++) {
        block[i].classList.remove('hover')
        }
        return};
    }

    else { if (checkWinner()){document.querySelector('.winner').innerHTML='Winner '+fighter;
    for (i=0;i<9;i++) {
        block[i].classList.remove('hover')
        }
        }
        else {document.querySelector('.winner').innerHTML='Draw!';
        document.querySelector('.restart').style.visibility='visible';
        for (i=0;i<9;i++) {
            block[i].classList.remove('hover')
            }
        return
    }}
})

document.querySelector('.restart').addEventListener('click',function() {
    for (i=0;i<9;i++) {
    block[i].innerHTML='';
    block[i].style.animationName='';
    }
    winner1.length=0;
    winner2.length=0;
    document.querySelector('.winner').innerHTML='';
    document.querySelector('.restart').style.visibility='hidden';
    player1Answers.length=0;
    player2Answers.length=0;
    for (i=0;i<9;i++) {
    block[i].classList.add('hover')
    }
})


// for (i=0;i<9;i++) {
//     if (block[i].innerHTML!=''){
//     block[i].classList.remove('hover')}
//     }