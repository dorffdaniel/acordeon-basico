let acordeons = document.querySelectorAll('.acordeon');

acordeons.forEach(items =>{
    items.addEventListener('click',()=>{
        let corpo = items.querySelector('.corpo');
        corpo.classList.toggle('ativo');

        setTimeout(() => {
           corpo.classList.remove('ativo') 
        }, 6000);
    })
})