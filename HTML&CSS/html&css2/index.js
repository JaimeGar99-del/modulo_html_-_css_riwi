const form = document.getElementById('form');
form.addEventListener('submit', function(event){
    event.preventDefault();
    const usuario = new FormData(form);
    const objeto = Object.fromEntries(usuario.entries());
    console.log(objeto)
});