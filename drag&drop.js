let dragged = null;
layout.addEventListener('dragstart',e=>{
    if (!e.target.classList.contains('player-card')) {
        e.preventDefault(); // Prevent drag if it's not a player-card
        return;
    }
    dragged = e.target.closest('.player-card');
    changeList.innerHTML = "";
})
layout.addEventListener('dragover', (e) => {
    e.preventDefault(); // Required for drop to work
});
layout.addEventListener('dragenter', (e) => {
    if(!e.target.closest('.player-card')) return;
    layout.querySelectorAll('.player-card').forEach(el=>el.classList.remove('selected-card'));
    e.target.closest('.player-card').classList.add('selected-card');
});
layout.addEventListener('dragend', (e) => {
    layout.querySelectorAll('.player-card').forEach(el=>el.classList.remove('selected-card'));
});

layout.addEventListener('drop',e=>{
    if(!e.target.closest('.player-card')) return;
    layout.querySelectorAll('.player-card').forEach(el=>el.classList.remove('selected-card'));
    if(e.target.closest('.player-card').dataset.role === 'GK' || dragged.dataset.role === 'GK') return;
    const draggedName = dragged.dataset.name;
    const dropInName = e.target.closest('.player-card').dataset.name;  
    const draggedObject = {...currentTeam.find(p=>p.name===draggedName)}
    const dropInObject = {...currentTeam.find(p=>p.name===dropInName)}
    
    displayPlayer(e.target.closest('.player-card'),draggedObject);
    displayPlayer(dragged,dropInObject);
})
    