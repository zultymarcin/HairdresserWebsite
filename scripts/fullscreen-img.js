
window.onload = function(){
    
function openFullscreenImage(event) {
    const overlay = document.getElementById('fullscreenOverlay');
    const fullscreenImg = document.getElementById('fullscreenImg');
    fullscreenImg.src = event.target.src; 
    overlay.classList.add('active'); 
}

function closeFullscreenImage() {
    const overlay = document.getElementById('fullscreenOverlay');
    overlay.classList.remove('active'); 
}

document.querySelectorAll('.fullscreen-photo').forEach(img => {
    img.addEventListener('click', openFullscreenImage);
});

document.getElementById('fullscreenOverlay').addEventListener('click', closeFullscreenImage);

}