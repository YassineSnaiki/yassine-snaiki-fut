let dragged = null;
layout.addEventListener('dragstart',e=>{
    if (!e.target.classList.contains('player-card')) {
        e.preventDefault(); 
        return;
    }
    dragged = e.target.closest('.player-card');
    changeList.innerHTML = "";
})
layout.addEventListener('dragover', (e) => {
    e.preventDefault(); 
});
layout.addEventListener('dragenter', (e) => {
    if(!e.target.closest('.player-card')) return;
    layout.querySelectorAll('.player-card').forEach(el=>el.classList.remove('selected-card'));
    e.target.closest('.player-card').classList.add('selected-card');
});
layout.addEventListener('dragend', (e) => {
    layout.querySelectorAll('.player-card').forEach(el=>el.classList.remove('selected-card'));
});

layout.addEventListener('drop', e => {
    if (!e.target.closest('.player-card')) return;
    layout.querySelectorAll('.player-card').forEach(el => el.classList.remove('selected-card'));

    if (e.target.closest('.player-card').dataset.role === 'GK' || dragged.dataset.role === 'GK') return;

    const draggedName = dragged.dataset.name;
    const dropInName = e.target.closest('.player-card').dataset.name;

    const draggedIndex = currentTeam.findIndex(p => p.name === draggedName);
    const dropInIndex = currentTeam.findIndex(p => p.name === dropInName);

    const draggedObject = currentTeam[draggedIndex];
    const dropInObject = currentTeam[dropInIndex];

    displayPlayer(e.target.closest('.player-card'), draggedObject);
    displayPlayer(dragged, dropInObject);

    currentTeam[draggedIndex] = dropInObject;
    currentTeam[dropInIndex] = draggedObject;

    localStorage.setItem('currentTeam', JSON.stringify(currentTeam));
});
 