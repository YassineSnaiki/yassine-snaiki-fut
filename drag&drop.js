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
 


let offsetX = null;
let offsetY = null;
layout.addEventListener('touchstart', e => {
    const touch = e.touches[0];
    const target = document.elementFromPoint(touch.clientX, touch.clientY);
    if (!target.closest('.player-card')) {
        return;
    }

    dragged = target.closest('.player-card');

    changeList.innerHTML = "";
    const rect = dragged.getBoundingClientRect();
    dragged.style.position = 'absolute'; // Ensure the element is positioned absolutely
    dragged.style.left = `${rect.left}px`;
    dragged.style.top = `${rect.top}px`;
    offsetX = touch.clientX - rect.left;
    offsetY = touch.clientY - rect.top;
});

layout.addEventListener('touchmove', e => {
    if (!dragged) return; // Ensure there's a dragged element
    const touch = e.touches[0];
    dragged.style.left = `${touch.clientX - offsetX}px`;
    dragged.style.top = `${touch.clientY - offsetY}px`;
});

layout.addEventListener('touchend', e => {
    dragged = null; // Clear the dragged reference on touch end
});
