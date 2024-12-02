

const currentTeam = JSON.parse(localStorage.getItem('currentTeam'));
const players= JSON.parse(localStorage.getItem('players'));
const goalKeepers = players.filter(p=>p.position === 'GK');
const attackPlayers = players.filter(p=>p.position === 'ST' ||p.position === 'RW' || p.position ==='LW');
const middlePlayers = players.filter(p=>p.position === 'CM' ||p.position === 'CDM');
const backPlayers = players.filter(p=>p.position === 'CB' ||p.position === 'LB' || p.position ==='RB');


const layout = document.querySelector('.formation-layout');
const formationSelection = document.querySelector('.formation-selection');
const formationForm= document.querySelector('.formation-form');
const changeList = formationForm.querySelector('.change-players');

const card = document.createElement('div');
card.classList.add("player-card","basis-[15%]","transition");
card.setAttribute('draggable',true);





formationSelection.addEventListener('input',e=>{
    if(e.target.value === "") return;
    const formation = e.target.value;
    localStorage.setItem('formation',formation);
    makeLayout(formation,layout);  
})



makeLayout(localStorage.getItem('formation'),layout); 
let currCard = null;
layout.addEventListener('click',e=>{
    if(!e.target.closest('.player-card')) return;
    currCard = e.target.closest('.player-card');
    layout.querySelectorAll('.player-card').forEach(card=>card.classList.remove('selected-card'));
    currCard.classList.add('selected-card');
    changeList.classList.remove('hidden')
    changeList.innerHTML = "";
    let arr;
    if(currCard.dataset.role === "GK") arr = goalKeepers;
    else if (currCard.dataset.role === "LB" || currCard.dataset.role === 'CB' || currCard.dataset.role === 'RB') arr = backPlayers;
    else if (currCard.dataset.role === "CM" || currCard.dataset.role === 'CDM') arr = middlePlayers;
    else if (currCard.dataset.role === "ST" || currCard.dataset.role === 'LW' || currCard.dataset.role === 'RW') arr = attackPlayers;
    arr.forEach(p=>{
        if(!currentTeam.find(el=>el.name === p.name))
            changeList.insertAdjacentHTML('beforeend',`
        <li class="text-white  mb-2 flex items-stretch">
        <button class="btn-select-player flex justify-between p-1 px-8 sm:px-1 items-center cursor-pointer hover:bg-slate-800 w-full bg-slate-600 transition-colors flex-row text-xl sm:text-[8px] md:text-xs lg:text-base xl:text-lg" data-name="${p.name}">
        <img class="w-20 sm:w-10" src="${p.photo}"/>
        <div class="flex flex-col items-center">
        <span>${p.name.split(' ').slice(1)}</span> 
        <div class="flex gap-1 items-center">
        <img src="${p.flag}" class="w-4 " alt="${p.nationality}"/>
        <img src="${p.logo}" class="w-4 " alt="${p.club}"/>
        </div>
        </div>
        <span class ="${p.position === 'GK'? "bg-blue-500":p.position[1] === 'B' ? 'bg-green-500' : p.position ==='CM' ||p.position==='CDM' ?'bg-yellow-500' : "bg-red-500"} px-1 font-semibold text-lg sm:text-[6px] lg:text-sm xl:text-base">${p.position}</span></button></li>
        `)
    })
    changeList.insertAdjacentHTML('afterbegin',"<button class='mx-auto w-full text-center btn-close-choice text-white  p-2 bg-slate-600 hover:bg-slate-800 transition-colors text-lg sm:text-sm lg:text-lg mb-2'>Cancel</button>")
    changeList.querySelector('.btn-close-choice').addEventListener('click',e=>{
        e.preventDefault();
        changeList.classList.add('hidden')
        formationForm.querySelector('.change-players').innerHTML = "";
        currCard.classList.remove('selected-card')
    })
})



formationForm.querySelector('.change-players').addEventListener('click',e=>{
    e.preventDefault()
    if(!e.target.closest('.btn-select-player')) return;
    changeList.classList.add('hidden')
    displayPlayer(currCard,players.find(p=> p.name === e.target.closest('.btn-select-player').dataset.name))
    currCard.classList.remove('selected-card')
    formationForm.querySelector('.change-players').innerHTML = "";
})



function makeLayout(formation,layout) {
    const frmArr = formation.split('-').map(el=>+el);
    layout.innerHTML = '';
    const GKRow = document.createElement('div');
    GKRow.classList.add("cards-row","flex","justify-around","basis-[20%]");
    const GKElement = card.cloneNode(true);
    GKElement.dataset.role = 'GK'; 
    GKRow.append(GKElement)   
    layout.prepend(GKRow);
    frmArr.forEach((num,i)=>{
        const cardsRow = document.createElement('div');
        cardsRow.dataset.num = i;
        cardsRow.classList.add("cards-row","flex","justify-around","basis-[20%]");
        for(let j = 0 ; j<num ; j++){
            const c = card.cloneNode(true);
            if(frmArr.length === 3) { 
                if(i===0)  {
                    if(j===0) c.dataset.role = 'LB';
                    else if(j===frmArr[0]-1) c.dataset.role = 'RB';
                    else c.dataset.role = 'CB';
                }
                if(i===1) c.dataset.role = 'CM';
                if(i===2)  {
                    if(frmArr[i]!==1){
                        if(j==0) c.dataset.role = 'LW';
                        else if(j==frmArr[2]-1) c.dataset.role = 'RW';
                        else c.dataset.role = 'ST';
                    }else c.dataset.role = 'ST'
                }
            }
            else if(frmArr.length === 4) {
                if(i===0)  {
                    if(j===0) c.dataset.role = 'LB';
                    else if(j===frmArr[0]-1) c.dataset.role = 'RB';
                    else c.dataset.role = 'CB';
                }
                if(i===1) c.dataset.role = 'CM';
                if(i===2) c.dataset.role = 'CM';
                if(i===3)  {
                    if(frmArr[3] === 1) c.dataset.role ='ST'
                    else {
                        if(j==0) c.dataset.role = 'LW';
                        else if(j==frmArr[3]-1) c.dataset.role = 'RW';
                        else c.dataset.role = 'ST';
                    }
                }
            }
            cardsRow.append(c);
        }
        layout.prepend(cardsRow)
    })
    displayPlayers(currentTeam);
}

let done = false;
function displayPlayers(players) {
    const cards = document.querySelectorAll('.player-card');
    
    cards.forEach((card,i)=>{
        card.dataset.name = players[i].name;
        let features = ``;
        if(players[i].position !== 'GK')
          features = `<div class="player-features-col">
            <span>
            <span class="player-feature-value feature-pace">${players[i].pace}</span>
            <span class="player-feature-title">PAC</span>
            </span>
            <span>
            <span class="player-feature-value feature-shooting">${players[i].shooting}</span>
            <span class="player-feature-title">SHO</span>
            </span>
            <span>
            <span class="player-feature-value feature-passing">${players[i].passing}</span>
            <span class="player-feature-title">PAS</span>
            </span>
            </div>
            <div class="player-features-col">
            <span>
            <span class="player-feature-value feature-dribbling">${players[i].dribbling}</span>
            <span class="player-feature-title">DRI</span>
            </span>
            <span>
            <span class="player-feature-value feature-defending">${players[i].defending}</span>
            <span class="player-feature-title">DEF</span>
            </span>
            <span>
            <span class="player-feature-value feature-physical">${players[i].physical}</span>
            <span class="player-feature-title">PHY</span>
            </span>
            </div>`
            else features = `       
            <div class="player-features-col">
            <span>
            <span class="player-feature-value feature-diving">${players[i].diving}</span>
            <span class="player-feature-title">DIV</span>
            </span>
            <span>
            <span class="player-feature-value feature-handling">${players[i].handling}</span>
            <span class="player-feature-title">HAN</span>
            </span>
            <span>
            <span class="player-feature-value feature-kicking">${players[i].kicking}</span>
            <span class="player-feature-title">KIC</span>
            </span>
            </div>
            <div class="player-features-col">
            <span>
            <span class="player-feature-value feature-reflexes">${players[i].reflexes}</span>
            <span class="player-feature-title">REF</span>
            </span>
            <span>
            <span class="player-feature-value feature-speed">${players[i].speed}</span>
            <span class="player-feature-title">SPE</span>
            </span>
            <span>
            <span class="player-feature-value feature-positioning">${players[i].positioning}</span>
            <span class="player-feature-title">PST</span>
            </span>
            </div>`
        card.insertAdjacentHTML('afterbegin',`
            <div class="fut-player-card relative">
            <span class="absolute top-0 w-4 h-4 text-xs font-semibold bg-red-600 text-white player-chemistry flex justify-center items-center rounded-full">${calcChemistry(card,players[i])}</span>
            <div class="absolute left-0 top-5 flex w-full justify-between p-1 items-end z-10">
            <img class="w-4 player-flag" src="${players[i].flag}" alt="${players[i].country}"/>
            <img class="w-4 player-logo" src="${players[i].logo}" alt="${players[i].club}"/>
            </div>
            <div class="player-card-top">
            <div class="player-picture">
            <img class="player-img" src="${players[i].photo}" alt="${players[i].name}" draggable="false">
            </div>
            </div>
            <div class="player-card-bottom">
            <div class="player-info">
            <div class="player-name">
            <span>${players[i].name.split(' ')[0][0]+" "+players[i].name.split(' ')[1]}</span>
            </div>
            <span class="flex w-full justify-around text-[8px]">
            <span class="player-position text-center">${players[i].position}</span>
            <span class="player-rating text-center">${players[i].rating}</span> 
            </span>
            <div class="player-features ">
            ${features}
            </div>
            </div>
        </div>
        </div>
        `)
    })
    loadImages(document.querySelectorAll('.player-img')).then(()=>{
        if(!done)  {
            makeLayout(localStorage.getItem('formation'),layout);
            done=!done;

        }
    })
}

function displayPlayer(card,player) {
    const cardName = card.dataset.name;
        card.querySelector('.player-chemistry').textContent = calcChemistry(card,player)
        card.querySelector('.player-picture').querySelector('img').src = player.photo;
        card.querySelector('.player-name').querySelector('span').textContent = player.name.split(' ')[0][0]+" "+player.name.split(' ')[1];
        card.querySelector('.player-position').textContent = player.position;
        card.querySelector('.player-rating').textContent = player.rating;
        card.querySelector('.player-flag').src = player.flag;
        card.querySelector('.player-logo').src = player.logo;
        if(card.dataset.role === 'GK'){
            card.querySelector('.feature-diving').textContent = player.diving;
            card.querySelector('.feature-handling').textContent = player.handling;
            card.querySelector('.feature-kicking').textContent = player.kicking;
            card.querySelector('.feature-reflexes').textContent = player.reflexes;
            card.querySelector('.feature-speed').textContent = player.speed;
            card.querySelector('.feature-positioning').textContent = player.positioning;

        }else {
            card.querySelector('.feature-pace').textContent = player.pace;
            card.querySelector('.feature-shooting').textContent = player.shooting;
            card.querySelector('.feature-passing').textContent = player.passing;
            card.querySelector('.feature-dribbling').textContent = player.dribbling;
            card.querySelector('.feature-defending').textContent = player.defending;
            card.querySelector('.feature-physical').textContent = player.physical;
        }
        currentTeam[currentTeam.findIndex(el=>el.name===cardName)] = player;
        card.dataset.name = player.name;
        makeLayout(localStorage.getItem('formation'),layout); 
        localStorage.setItem('currentTeam',JSON.stringify(currentTeam))
}


function calcChemistry(card,player) {
    let res = 0;
    if(card.dataset.role === player.position ||
       card.dataset.role==='CM' && player.position==='CDM' ||
       card.dataset.role==='LW' || card.dataset.role==='RW' && player.position==='ST') res+=10;
    currentTeam.forEach(p=>{
        if(p.club === player.club && p.name !== player.name) res+=3;
        if(p.nationality === player.nationality && p.name !== player.name)  res+=1;
    })  
    return res;
}





function loadImages(images) {
    return new Promise((resolve, reject) => {
        let loadedImages = 0;
        let totalImages = images.length;

        images.forEach(image => {
            image.addEventListener('load', () => {
                loadedImages++;
                if (loadedImages === totalImages) {
                    resolve(); 
                }
            });
            image.addEventListener('error', () => reject('Error loading images'));
        });
    });
}