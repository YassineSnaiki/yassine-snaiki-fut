const players= JSON.parse(localStorage.getItem('players'));

const playersContainer = document.querySelector('.players-container');
const btnAddPlayer = document.querySelector('.btn-add-player');
const formAddPlayer = document.querySelector('.form-add-player');
const formModifyPlayer = document.querySelector('.form-modify-player');
const btnCloseForm = document.querySelectorAll('.btn-close-form');
const btnDelete = document.querySelector('.btn-delete-player');
let selectedPlayerElement = null;




displayAll();

    


btnCloseForm.forEach(btn=>{
    btn.addEventListener('click',e=>{
        e.preventDefault();
        
        formAddPlayer.classList.add('hidden')
        formModifyPlayer.classList.add('hidden')
        playersContainer.querySelectorAll('.fut-player-card').forEach(p=>p.classList.remove('selected-card'))
    })
})

btnAddPlayer.addEventListener('click',e=>{
    formAddPlayer.classList.remove('hidden');
})

playersContainer.addEventListener('click',e=>{
    if(!e.target.closest('.fut-player-card')) return;
    selectedPlayerElement = e.target.closest('.fut-player-card'); 
    console.log(selectedPlayerElement);
    
    playersContainer.querySelectorAll('.fut-player-card').forEach(p=>p.classList.remove('selected-card'))
    selectedPlayerElement.classList.add('selected-card')
    formModifyPlayer.classList.remove('hidden');
    const selectedPlayer = players.find(p=>p.name === selectedPlayerElement.dataset.name);
    formModifyPlayer.querySelector('img').src = selectedPlayer.photo;
    document.getElementById('rating').value = selectedPlayer.rating;
    document.getElementById('pace').value = selectedPlayer.pace;
    document.getElementById('shooting').value = selectedPlayer.shooting;
    document.getElementById('passing').value =selectedPlayer.passing;
    document.getElementById('dribbling').value = selectedPlayer.dribbling;
    document.getElementById('defending').value = selectedPlayer.defending;
    document.getElementById('physical').value = selectedPlayer.physical;
    
})

formAddPlayer.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent the form from submitting
    formAddPlayer.classList.add('hidden');
    const newPlayer = {
        name: document.getElementById('name').value,
        photo: document.getElementById('photo').value,
        position: document.getElementById('position').value,
        nationality: document.getElementById('nationality').value,
        flag: document.getElementById('flag').value,
        club: document.getElementById('club').value,
        logo: document.getElementById('logo').value,
        rating: '-', 
        pace: '-',   
        shooting: '-',
        passing: '-',  
        dribbling: '-',
        defending: '-', 
        physical: '-'  
    };
    players.push(newPlayer);
    localStorage.setItem('players',JSON.stringify(players)) 
    displayAll(); 
});


formModifyPlayer.addEventListener('submit',e=>{
    formModifyPlayer.classList.add('hidden');
    e.preventDefault();
    const rating =document.getElementById('rating').value;
    const pace =document.getElementById('pace').value;
    const shooting =document.getElementById('shooting').value;
    const passing =document.getElementById('passing').value;
    const dribbling =document.getElementById('dribbling').value;
    const defending =document.getElementById('defending').value;
    const physical =document.getElementById('physical').value;
    const selectedPlayer = players.find(p=>p.name === selectedPlayerElement.dataset.name);
    selectedPlayer.rating = rating;
    selectedPlayer.shooting = shooting;
    selectedPlayer.pace = pace;
    selectedPlayer.passing = passing;
    selectedPlayer.dribbling = dribbling;
    selectedPlayer.defending = defending;
    selectedPlayer.physical = physical;
    localStorage.setItem('players',JSON.stringify(players));
    displayAll();
})

btnDelete.addEventListener('click',e=>{
  e.preventDefault();
  const selectedIndex = players.findIndex(p=>p.name === selectedPlayerElement.dataset.name);
  players.splice(selectedIndex,1);
  localStorage.setItem('players',JSON.stringify(players));
  formModifyPlayer.classList.add('hidden');
  displayAll();
})


function displayAll(){
    playersContainer.innerHTML = ""
    players.forEach((p,i)=>{
      if(players[i].position !== 'GK')
      features = `<div class="player-features-col">
            <span>
            <span class="player-feature-value">${players[i].pace}</span>
            <span class="player-feature-title">PAC</span>
            </span>
            <span>
            <span class="player-feature-value">${players[i].shooting}</span>
            <span class="player-feature-title">SHO</span>
            </span>
            <span>
            <span class="player-feature-value">${players[i].passing}</span>
            <span class="player-feature-title">PAS</span>
            </span>
            </div>
            <div class="player-features-col">
            <span>
            <span class="player-feature-value">${players[i].dribbling}</span>
            <span class="player-feature-title">DRI</span>
            </span>
            <span>
            <span class="player-feature-value">${players[i].defending}</span>
            <span class="player-feature-title">DEF</span>
            </span>
            <span>
            <span class="player-feature-value">${players[i].physical}</span>
            <span class="player-feature-title">PHY</span>
            </span>
            </div>`
            else features = `       
            <div class="player-features-col">
            <span>
            <span class="player-feature-value">${players[i].diving}</span>
            <span class="player-feature-title">DIV</span>
            </span>
            <span>
            <span class="player-feature-value">${players[i].handling}</span>
            <span class="player-feature-title">HAN</span>
            </span>
            <span>
            <span class="player-feature-value">${players[i].kicking}</span>
            <span class="player-feature-title">KIC</span>
            </span>
            </div>
            <div class="player-features-col">
            <span>
            <span class="player-feature-value">${players[i].reflexes}</span>
            <span class="player-feature-title">REF</span>
            </span>
            <span>
            <span class="player-feature-value">${players[i].speed}</span>
            <span class="player-feature-title">SPE</span>
            </span>
            <span>
            <span class="player-feature-value">${players[i].positioning}</span>
            <span class="player-feature-title">PST</span>
            </span>
            </div>`
        playersContainer.insertAdjacentHTML('beforeend',`
            <div class="fut-player-card" draggable="true" data-name = "${players[i].name}">
            <div class="player-card-top">
            <div class="player-master-info">
            
            </div>
            <div class="player-picture">
            <img  src="${players[i].photo}" alt="Messi" draggable="false">
            <div class="player-extra">
            </div>
            </div>
            </div>
            <!-- Player Card Bottom -->
            <div class="player-card-bottom">
            <div class="player-info">
            <!-- Player Name -->
            <div class="player-name">
            <span>${players[i].name.split(' ')[0][0]+" "+players[i].name.split(' ')[1]}</span>
            </div>
            <!-- Player Features -->
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
    }