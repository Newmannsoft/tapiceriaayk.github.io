const grid = new Muuri('.grid', {
    layout: {
        rounding: false
    }
});
/*trancition*/
window.addEventListener('load', () => {
    grid.refreshItems().layout();
    document.getElementById('grid').classList.add('imagenes-cargadas');
    /*Selector */
    const enlaces = document.querySelectorAll('#categorias a');
    enlaces.forEach((elemento) => {
        elemento.addEventListener('click', (evento) => {
            evento.preventDefault();
            enlaces.forEach((enlace) => enlace.classList.remove('activo'))
            evento.target.classList.add('activo');
            /*Selector y conversor a minusculas */
            const categoria = evento.target.innerHTML.toLowerCase();
            /*Filtrado */
            grid.filter('[data-categoria="categoria"]');
        });
    });
});

