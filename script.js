const titles = document.querySelectorAll('.title-definition');

titles.forEach(title => {
    title.addEventListener('click', event => {
        const definition = event.target.closest('.definition')
        definition.classList.toggle('open');

        const img = definition.querySelector('img');
        if(img.getAttribute('src') === 'img/ferme.png') {
            img.setAttribute('src', 'img/ouvert.png');
        } else {
            img.setAttribute('src', 'img/ferme.png');
        }
    });
});