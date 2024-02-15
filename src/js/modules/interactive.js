function interactive() {
    
    const infoBtns = document.querySelectorAll('.info__dot');
    const infoHints = document.querySelectorAll('.info__hint');
    
    for (let btn of infoBtns) {
        btn.addEventListener('click', function (e) {
            e.stopPropagation()
            this.parentNode.querySelector('.info__hint').classList.toggle('none')
        });
    }
    
    
    document.addEventListener('click', function (e) {
        for (let hint of infoHints) {
            hint.classList.add('none')
        }
    });
    
    for (let hint of infoHints) {
        hint.addEventListener('click', (e) => e.stopPropagation());
        
    }
}



export default interactive = interactive;