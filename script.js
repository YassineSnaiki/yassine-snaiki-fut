const players = [
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
        logo: "https://cdn.sofifa.net/meta/team/10/120.png",
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
        name: "Erling Haaland",
        photo: "https://cdn.sofifa.net/players/239/085/25_120.png",
        position: "ST",
        nationality: "Norway",
        flag: "https://cdn.sofifa.net/flags/no.png",
        club: "Manchester City",
        logo: "https://cdn.sofifa.net/meta/team/10/120.png",
        rating: 91,
        pace: 89,
        shooting: 93,
        passing: 65,
        dribbling: 80,
        defending: 45,
        physical: 88
    },
    {
        name: "Robert Lewandowski",
        photo: "https://cdn.sofifa.net/players/188/545/25_120.png",
        position: "ST",
        nationality: "Poland",
        flag: "https://cdn.sofifa.net/flags/pl.png",
        club: "Barcelona",
        logo: "https://cdn.sofifa.net/meta/team/241/120.png",
        rating: 91,
        pace: 78,
        shooting: 92,
        passing: 79,
        dribbling: 86,
        defending: 44,
        physical: 82
    },
    {
        name: "Karim Benzema",
        photo: "https://cdn.sofifa.net/players/165/153/25_120.png",
        position: "CF",
        nationality: "France",
        flag: "https://cdn.sofifa.net/flags/fr.png",
        club: "Al-Ittihad",
        logo: "https://cdn.sofifa.net/meta/team/110330/120.png",
        rating: 90,
        pace: 74,
        shooting: 87,
        passing: 83,
        dribbling: 88,
        defending: 39,
        physical: 78
    },
    {
        name: "Thibaut Courtois",
        photo: "https://cdn.sofifa.net/players/192/119/25_120.png",
        position: "GK",
        nationality: "Belgium",
        flag: "https://cdn.sofifa.net/flags/be.png",
        club: "Real Madrid",
        logo: "https://cdn.sofifa.net/meta/team/3468/120.png",
        rating: 91,
        pace: 50,
        shooting: 17,
        passing: 37,
        dribbling: 41,
        defending: 16,
        physical: 63
    },
    {
        name: "Alisson Becker",
        photo: "https://cdn.sofifa.net/players/208/830/25_120.png",
        position: "GK",
        nationality: "Brazil",
        flag: "https://cdn.sofifa.net/flags/br.png",
        club: "Liverpool",
        logo: "https://cdn.sofifa.net/meta/team/8/120.png",
        rating: 89,
        pace: 50,
        shooting: 15,
        passing: 36,
        dribbling: 41,
        defending: 11,
        physical: 68
    },
    {
        name: "Joshua Kimmich",
        photo: "https://cdn.sofifa.net/players/212/622/25_120.png",
        position: "CDM",
        nationality: "Germany",
        flag: "https://cdn.sofifa.net/flags/de.png",
        club: "Bayern Munich",
        logo: "https://cdn.sofifa.net/meta/team/21/120.png",
        rating: 89,
        pace: 69,
        shooting: 74,
        passing: 89,
        dribbling: 84,
        defending: 83,
        physical: 75
    },
    {
        name: "Casemiro",
        photo: "https://cdn.sofifa.net/players/200/145/25_120.png",
        position: "CDM",
        nationality: "Brazil",
        flag: "https://cdn.sofifa.net/flags/br.png",
        club: "Manchester United",
        logo: "https://cdn.sofifa.net/meta/team/11/120.png",
        rating: 89,
        pace: 63,
        shooting: 73,
        passing: 75,
        dribbling: 74,
        defending: 87,
        physical: 91
    }
];


const btnCnt = document.querySelector(".formation-btns");
const layout = document.querySelector('.formation-layout');

btnCnt.addEventListener('click',e=>{
    if(!e.target.matches('.btn-formation')) return;
    const formation = e.target.dataset.str;
    makeLayout(formation,layout)
    
})





const card = document.createElement('div');
card.classList.add("player-card","basis-[15%]");

function makeLayout(formation,layout) {
    const frmArr = formation.split('-').map(el=>+el);
    layout.innerHTML = '<img src="images/field.webp" alt="" class="field-img w-full absolute left-0 top-0">';
    const GKRow = document.createElement('div');
    GKRow.classList.add("cards-row","flex","justify-around","basis-[20%]");
    const GKElement = card.cloneNode(true);
    GKElement.dataset.role = 'gk'; 
    GKRow.append(GKElement)

    layout.prepend(GKRow);
    frmArr.forEach((num,i)=>{
        const cardsRow = document.createElement('div');
        cardsRow.classList.add("cards-row","flex","justify-around","basis-[20%]");
        for(let j = 0 ; j<num ; j++){
            const c = card.cloneNode(true);
            if(frmArr.length === 3) {
                console.log(3);
                
                if(i===0)  c.dataset.role = 'D';
                if(i===1)  c.dataset.role = 'M';
                if(i===2)  c.dataset.role = 'A';
            }
            else if(frmArr.length === 4) {
                console.log(4);
                
                if(i===0)  c.dataset.role = 'D';
                if(i===1)  c.dataset.role = 'MD';
                if(i===2)  c.dataset.role = 'MA'; 
                if(i===3)  c.dataset.role = 'A'; 
            }
            cardsRow.append(card.cloneNode(true));
        }
        layout.prepend(cardsRow)
    })
    displayPlayers(players);
}

makeLayout("5-3-2",layout)

function displayPlayers(players) {
    const cards = document.querySelectorAll('.player-card');
    cards.forEach((card,i)=>{
        card.insertAdjacentHTML('afterbegin',`
             <div class="fut-player-card">
             <div class="player-card-top">
          <div class="player-master-info">
          
          </div>
          <div class="player-picture">
            <img src="${players[i].photo}" alt="Messi" draggable="false">
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



