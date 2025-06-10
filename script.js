 let trilho = document.getElementById('trilho')
 let body = document.querySelector('body')


// Verifica se o modo dark está ativado no localStorage ao carregar a página
if (localStorage.getItem('darkMode') === 'true') {
   trilho.classList.add('dark');
   body.classList.add('dark');
}

// Função para alternar o modo dark
trilho.addEventListener('click', function() {
   trilho.classList.toggle('dark');
   body.classList.toggle('dark');
   // Salva o estado no localStorage
   localStorage.setItem('darkMode', trilho.classList.contains('dark'));
});