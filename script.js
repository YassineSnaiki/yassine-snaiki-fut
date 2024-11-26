
// rw st lw   cdm cm  cb lb rb gk 




const players= [
      {
        name: "Lionel Messi",
        photo: "https://cdn.sofifa.net/players/158/023/25_120.png",
        position: "RW",
        nationality: "Argentina",
        flag: "https://cdn.sofifa.net/flags/ar.png",
        club: "Inter Miami",
        logo: "https://cdn.sofifa.net/meta/team/239235/120.png",
        rating: 93,
        pace: 85,
        shooting: 92,
        passing: 91,
        dribbling: 95,
        defending: 35,
        physical: 65
      },
      {
        name: "Cristiano Ronaldo",
        photo: "https://cdn.sofifa.net/players/020/801/25_120.png",
        position: "ST",
        nationality: "Portugal",
        flag: "https://cdn.sofifa.net/flags/pt.png",
        club: "Al Nassr",
        logo: "https://cdn.sofifa.net/meta/team/2506/120.png",
        rating: 91,
        pace: 84,
        shooting: 94,
        passing: 82,
        dribbling: 87,
        defending: 34,
        physical: 77
      },
      {
        name: "Kevin De Bruyne",
        photo: "https://cdn.sofifa.net/players/192/985/25_120.png",
        position: "CM",
        nationality: "Belgium",
        flag: "https://cdn.sofifa.net/flags/be.png",
        club: "Manchester City",
        logo: "https://cdn.sofifa.net/players/239/085/25_120.png",
        rating: 91,
        pace: 74,
        shooting: 86,
        passing: 93,
        dribbling: 88,
        defending: 64,
        physical: 78
      },
      {
        name: "Kylian Mbappé",
        photo: "https://cdn.sofifa.net/players/231/747/25_120.png",
        position: "ST",
        nationality: "France",
        flag: "https://cdn.sofifa.net/flags/fr.png",
        club: "Real Madrid",
        logo: "https://cdn.sofifa.net/meta/team/3468/120.png",
        rating: 92,
        pace: 97,
        shooting: 89,
        passing: 80,
        dribbling: 92,
        defending: 39,
        physical: 77
      },
      {
        name: "Virgil van Dijk",
        photo: "https://cdn.sofifa.net/players/203/376/25_120.png",
        position: "CB",
        nationality: "Netherlands",
        flag: "https://cdn.sofifa.net/flags/nl.png",
        club: "Liverpool",
        logo: "https://cdn.sofifa.net/meta/team/8/120.png",
        rating: 90,
        pace: 75,
        shooting: 60,
        passing: 70,
        dribbling: 72,
        defending: 92,
        physical: 86
      },
      {
        name: "Antonio Rudiger",
        photo: "https://cdn.sofifa.net/players/205/452/25_120.png",
        position: "CB",
        nationality: "Germany",
        flag: "https://cdn.sofifa.net/flags/de.png",
        club: "Real Madrid",
        logo: "https://cdn.sofifa.net/meta/team/3468/120.png",
        rating: 88,
        pace: 82,
        shooting: 55,
        passing: 73,
        dribbling: 70,
        defending: 86,
        physical: 86
      },
      {
        name: "Neymar Jr",
        photo: "https://cdn.sofifa.net/players/190/871/25_120.png",
        position: "LW",
        nationality: "Brazil",
        flag: "https://cdn.sofifa.net/flags/br.png",
        club: "Al-Hilal",
        logo: "https://cdn.sofifa.net/meta/team/7011/120.png",
        rating: 90,
        pace: 91,
        shooting: 83,
        passing: 86,
        dribbling: 94,
        defending: 37,
        physical: 61
      },
      {
        name: "Mohamed Salah",
        photo: "https://cdn.sofifa.net/players/192/985/25_120.png",
        position: "RW",
        nationality: "Egypt",
        flag: "https://cdn.sofifa.net/flags/eg.png",
        club: "Liverpool",
        logo: "https://cdn.sofifa.net/meta/team/8/120.png",
        rating: 89,
        pace: 93,
        shooting: 87,
        passing: 81,
        dribbling: 90,
        defending: 45,
        physical: 75
      },
      {
        name: "Joshua Kimmich",
        photo: "https://cdn.sofifa.net/players/212/622/25_120.png",
        position: "CM",
        nationality: "Germany",
        flag: "https://cdn.sofifa.net/flags/de.png",
        club: "Bayern Munich",
        logo: "https://cdn.sofifa.net/meta/team/503/120.png",
        rating: 89,
        pace: 70,
        shooting: 75,
        passing: 88,
        dribbling: 84,
        defending: 84,
        physical: 81
      },
      {
        name: "Jan Oblak",
        photo: "https://cdn.sofifa.net/players/200/389/25_120.png",
        position: "GK",
        nationality: "Slovenia",
        flag: "https://cdn.sofifa.net/flags/si.png",
        club: "Atletico Madrid",
        logo: "https://cdn.sofifa.net/meta/team/7980/120.png",
        rating: 91,
        diving: 89,
        handling: 90,
        kicking: 78,
        reflexes: 92,
        speed: 50,
        positioning: 88
      },
      {
        name: "Luka Modrić",
        photo: "https://cdn.sofifa.net/players/177/003/25_120.png",
        position: "CM",
        nationality: "Croatia",
        flag: "https://cdn.sofifa.net/flags/hr.png",
        club: "Real Madrid",
        logo: "https://cdn.sofifa.net/meta/team/3468/120.png",
        rating: 88,
        pace: 74,
        shooting: 78,
        passing: 89,
        dribbling: 90,
        defending: 72,
        physical: 65
      },
      {
        name: "Vinicius Junior",
        photo: "https://cdn.sofifa.net/players/238/794/25_120.png",
        position: "LW",
        nationality: "Brazil",
        flag: "https://cdn.sofifa.net/flags/br.png",
        club: "Real Madrid",
        logo: "https://cdn.sofifa.net/meta/team/3468/120.png",
        rating: 89,
        pace: 91,
        shooting: 88,
        passing: 85,
        dribbling: 94,
        defending: 39,
        physical: 61
      },
      {
        name: "Brahim Diáz",
        photo: "https://cdn.sofifa.net/players/231/410/25_120.png",
        position: "LW",
        nationality: "Morocco",
        flag: "https://cdn.sofifa.net/flags/ma.png",
        club: "Real Madrid",
        logo: "https://cdn.sofifa.net/meta/team/3468/120.png",
        rating: 82,
        pace: 85,
        shooting: 74,
        passing: 78,
        dribbling: 85,
        defending: 31,
        physical: 56
      },
      {
        name: "Karim Benzema",
        photo: "https://cdn.sofifa.net/players/165/153/25_120.png",
        position: "ST",
        nationality: "France",
        flag: "https://cdn.sofifa.net/flags/fr.png",
        club: "Al-Ittihad",
        logo: "https://cdn.sofifa.net/meta/team/476/120.png",
        rating: 90,
        pace: 77,
        shooting: 90,
        passing: 83,
        dribbling: 88,
        defending: 40,
        physical: 78
      },
      {
        name: "Erling Haaland",
        photo: "https://cdn.sofifa.net/players/239/085/25_120.png",
        position: "ST",
        nationality: "Norway",
        flag: "https://cdn.sofifa.net/flags/no.png",
        club: "Manchester City",
        logo: "https://cdn.sofifa.net/players/239/085/25_120.png",
        rating: 91,
        pace: 89,
        shooting: 94,
        passing: 65,
        dribbling: 80,
        defending: 45,
        physical: 88
      },
      {
        name: "N'Golo Kanté",
        photo: "https://cdn.sofifa.net/players/215/914/25_120.png",
        position: "CDM",
        nationality: "France",
        flag: "https://cdn.sofifa.net/flags/fr.png",
        club: "Al-Ittihad",
        logo: "https://cdn.sofifa.net/meta/team/476/120.png",
        rating: 87,
        pace: 77,
        shooting: 66,
        passing: 75,
        dribbling: 82,
        defending: 88,
        physical: 82
      },
      {
        name: "Alphonso Davies",
        photo: "https://cdn.sofifa.net/players/234/396/25_120.png",
        position: "LB",
        nationality: "Canada",
        flag: "https://cdn.sofifa.net/flags/ca.png",
        club: "Bayern Munich",
        logo: "https://cdn.sofifa.net/meta/team/503/120.png",
        rating: 84,
        pace: 96,
        shooting: 68,
        passing: 77,
        dribbling: 82,
        defending: 76,
        physical: 77
      },
      {
        name: "Yassine Bounou",
        photo: "https://cdn.sofifa.net/players/209/981/25_120.png",
        position: "GK",
        nationality: "Morocco",
        flag: "https://cdn.sofifa.net/flags/ma.png",
        club: "Al-Hilal",
        logo: "https://cdn.sofifa.net/meta/team/7011/120.png",
        rating: 84,
        diving: 81,
        handling: 82,
        kicking: 77,
        reflexes: 86,
        speed: 38,
        positioning: 83
      },
      {
        name: "Bruno Fernandes",
        photo: "https://cdn.sofifa.net/players/212/198/25_120.png",
        position: "CM",
        nationality: "Portugal",
        flag: "https://cdn.sofifa.net/flags/pt.png",
        club: "Manchester United",
        logo: "https://cdn.sofifa.net/meta/team/14/120.png",
        rating: 88,
        pace: 75,
        shooting: 85,
        passing: 89,
        dribbling: 84,
        defending: 69,
        physical: 77
      },
      {
        name: "Jadon Sancho",
        photo: "https://cdn.sofifa.net/players/233/049/25_120.png",
        position: "LW",
        nationality: "England",
        flag: "https://cdn.sofifa.net/flags/gb-eng.png",
        club: "Manchester United",
        logo: "https://cdn.sofifa.net/meta/team/14/120.png",
        rating: 84,
        pace: 85,
        shooting: 74,
        passing: 78,
        dribbling: 88,
        defending: 34,
        physical: 63
      },
      {
        name: "Trent Alexander-Arnold",
        photo: "https://cdn.sofifa.net/players/231/281/25_120.png",
        position: "RB",
        nationality: "England",
        flag: "https://cdn.sofifa.net/flags/gb-eng.png",
        club: "Liverpool",
        rating: 87,
        pace: 76,
        shooting: 66,
        passing: 89,
        dribbling: 80,
        defending: 79,
        physical: 71
      },
      {
        name: "Achraf Hakimi",
        photo: "https://cdn.sofifa.net/players/235/212/25_120.png",
        position: "RB",
        nationality: "Morocco",
        flag: "https://cdn.sofifa.net/flags/ma.png",
        club: "Paris Saint-Germain",
        logo: "https://cdn.sofifa.net/meta/team/591/120.png",
        rating: 84,
        pace: 91,
        shooting: 76,
        passing: 80,
        dribbling: 80,
        defending: 75,
        physical: 78
      },
      {
        name: "Youssef En-Nesyri",
        photo: "https://cdn.sofifa.net/players/235/410/25_120.png",
        position: "ST",
        nationality: "Morocco",
        flag: "https://cdn.sofifa.net/flags/ma.png",
        club: "Fenerbahçe",
        logo: "https://cdn.sofifa.net/meta/team/88/120.png",
        rating: 83,
        pace: 82,
        shooting: 82,
        passing: 63,
        dribbling: 77,
        defending: 36,
        physical: 80
      },
      {
        name: "Noussair Mazraoui",
        photo: "https://cdn.sofifa.net/players/236/401/25_120.png",
        position: "LB",
        nationality: "Morocco",
        flag: "https://cdn.sofifa.net/flags/ma.png",
        club: "Manchester United",
        logo: "https://cdn.sofifa.net/meta/team/14/120.png",
        rating: 81,
        pace: 78,
        shooting: 66,
        passing: 77,
        dribbling: 83,
        defending: 77,
        physical: 71
      },
      {
        name: "Ismael Saibari",
        photo: "https://cdn.sofifa.net/players/259/480/25_120.png",
        position: "CM",
        nationality: "Morocco",
        flag: "https://cdn.sofifa.net/flags/ma.png",
        club: "PSV",
        logo: "https://cdn.sofifa.net/meta/team/682/120.png",
        rating: 83,
        pace: 89,
        shooting: 78,
        passing: 80,
        dribbling: 86,
        defending: 55,
        physical: 84
      },
      {
        name: "Gianluigi Donnarumma",
        photo: "https://cdn.sofifa.net/players/230/621/25_120.png",
        position: "GK",
        nationality: "Italy",
        flag: "https://cdn.sofifa.net/flags/it.png",
        club: "Paris Saint-Germain",
        logo: "https://cdn.sofifa.net/meta/team/591/120.png",
        rating: 89,
        diving: 88,
        handling: 84,
        kicking: 75,
        reflexes: 90,
        speed: 50,
        positioning: 85
      }
]

const goalKeepers = players.filter(p=>p.position === 'GK');
const attackPlayers = players.filter(p=>p.position === 'ST' ||p.position === 'RW' || p.position ==='LW');
const middlePlayers = players.filter(p=>p.position === 'CM' ||p.position === 'CDM');
const backPlayers = players.filter(p=>p.position === 'CB' ||p.position === 'LB' || p.position ==='RB');




const layout = document.querySelector('.formation-layout');
const formationSelection = document.querySelector('.formation-selection')


formationSelection.addEventListener('input',e=>{
    if(e.target.value === "") return;
    const formation = e.target.value;
    makeLayout(formation,layout);
    
})



const card = document.createElement('div');
card.classList.add("player-card","basis-[15%]");

function makeLayout(formation,layout) {
    const frmArr = formation.split('-').map(el=>+el);
    layout.innerHTML = '<img src="images/field.webp" alt="" class="field-img w-full absolute left-0 top-0">';
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
                    if(j==0) c.dataset.role = 'LW';
                    else if(j==frmArr[2]-1) c.dataset.role = 'RW';
                    else c.dataset.role = 'ST';
                }
            }
            else if(frmArr.length === 4) {
                if(i===0)  {
                    if(j===0) c.dataset.role = 'LB';
                    else if(j===frmArr[0]-1) c.dataset.role = 'RB';
                    else c.dataset.role = 'CB';
                }
                if(i===1) c.dataset.role = 'CDM';
                if(i===2) c.dataset.role = 'CM';
                if(i===3)  {
                    if(j==0) c.dataset.role = 'LW';
                    else if(j==frmArr[3]-1) c.dataset.role = 'RW';
                    else c.dataset.role = 'ST';
                }
            }
            cardsRow.append(c);
        }
        layout.prepend(cardsRow)
    })
    displayPlayers(players);
}

makeLayout("5-3-2",layout)

function displayPlayers(players) {
    const cards = document.querySelectorAll('.player-card');
    const selectedPlayers = [];
    cards.forEach((card,i)=>{
        // if(card.dataset.role==="G")
        //    selectedPlayers.push(players.find(p=>p.position === "GK" && !selectedPlayers.find(el=>el.name === p.name)));
        // else if(card.dataset.role==="D")
        //    selectedPlayers.push(players.find(p=>p.position === "CB" && !selectedPlayers.find(el=>el.name === p.name)));
        // else if(card.dataset.role==="CDM")
        //    selectedPlayers.push(players.find(p=>p.position === "CDM" && !selectedPlayers.find(el=>el.name === p.name)));
        // else if(card.dataset.role==="CM")
        //    selectedPlayers.push(players.find(p=>p.position === "CM" && !selectedPlayers.find(el=>el.name === p.name)));
        // else if(card.dataset.role==="M")
        //    selectedPlayers.push(players.find(p=>p.position === "CM" || p.position === "CDM" && !selectedPlayers.find(el=>el.name === p.name)));
        // else if(card.dataset.role==="A")
        //    selectedPlayers.push(players.find(p=>p.position === "ST" || p.position === "LW" || p.position === "RW" && !selectedPlayers.find(el=>el.name === p.name)));
        card.insertAdjacentHTML('afterbegin',`
             <div class="fut-player-card">
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
              <div class="player-features-col">
                <span>
                  <span class="player-feature-value">97</span>
                  <span class="player-feature-title">PAC</span>
                </span>
                <span>
                  <span class="player-feature-value">95</span>
                  <span class="player-feature-title">SHO</span>
                </span>
                <span>
                  <span class="player-feature-value">94</span>
                  <span class="player-feature-title">PAS</span>
                </span>
              </div>
              <div class="player-features-col">
                <span>
                  <span class="player-feature-value">99</span>
                  <span class="player-feature-title">DRI</span>
                </span>
                <span>
                  <span class="player-feature-value">35</span>
                  <span class="player-feature-title">DEF</span>
                </span>
                <span>
                  <span class="player-feature-value">68</span>
                  <span class="player-feature-title">PHY</span>
                </span>
              </div>
            </div>
          </div>
        </div>
             </div>
            `)
    })
}




// function test() {
//     const card = [...document.querySelectorAll('.player-card')].find(el=>el.dataset.role === 'LW'); 
//     displayPlayer(card,players[10]);
// }


function displayPlayer(card,player) {
    card.querySelector('.player-picture').querySelector('img').src = player.photo;
    card.querySelector('.player-name').querySelector('span').textContent = player.name.split(' ')[0][0]+" "+player.name.split(' ')[1];
    card.querySelector('.player-position').textContent = player.position;
    card.querySelector('.player-rating').textContent = player.rating;
}

const formationForm= document.querySelector('.formation-form');


let currCard = null;

layout.addEventListener('click',e=>{
    if(!e.target.closest('.player-card')) return;
    currCard = e.target.closest('.player-card');
    layout.querySelectorAll('.player-card').forEach(card=>card.classList.remove('selected-card'));
    currCard.classList.add('selected-card');
    const list = formationForm.querySelector('.change-players');
    list.innerHTML = "";
    let arr;
    console.log(currCard.dataset.role);
    
    if(currCard.dataset.role === "GK") arr = goalKeepers;
    else if (currCard.dataset.role === "LB" || currCard.dataset.role === 'CB' || currCard.dataset.role === 'RB') arr = backPlayers;
    else if (currCard.dataset.role === "CM" || currCard.dataset.role === 'CDM') arr = middlePlayers;
    else if (currCard.dataset.role === "ST" || currCard.dataset.role === 'LW' || currCard.dataset.role === 'RW') arr = attackPlayers;
    arr.forEach(p=>list.insertAdjacentHTML('beforeend',`
        <li class="text-white"><button class="btn-select-player cursor-pointer hover:bg-slate-800">${p.name}</button></li>
        `))
    
})


formationForm.querySelector('.change-players').addEventListener('click',e=>{
    e.preventDefault()
    if(!e.target.matches('.btn-select-player')) return;

    displayPlayer(currCard,players.find(p=> p.name === e.target.textContent))
})
