document.querySelectorAll('.headerButton').forEach(button => {
    button.addEventListener('click', function (event) {
        event.preventDefault();

        // Remove a classe 'selected' de todos os botões
        document.querySelectorAll('.headerButton').forEach(btn => btn.classList.remove('selected'));

        // Adiciona a classe 'selected' ao botão clicado
        this.classList.add('selected');

        // Imprime o ID do botão clicado no console
        console.log(this.id);

        // Salva o ID do botão selecionado no localStorage
        localStorage.setItem('selectedButton', this.id);

        // Carrega a página correspondente
        loadPage(this.id);

        // Altera o título da página
        document.title = this.textContent + " - Álefe Alves da Silva Correia";
    });
});

function loadPage(page) {
    fetch(`${page}.html`)
        .then(response => response.text())
        .then(data => {
            document.getElementById('content').innerHTML = data;
        })
        .catch(error => console.error('Error loading page:', error));
}

// Carrega a página inicial ou a página salva no localStorage
document.addEventListener('DOMContentLoaded', function () {
    const savedPage = localStorage.getItem('selectedButton') || 'sobre';
    const defaultButton = document.getElementById(savedPage);
    if (defaultButton) {
        defaultButton.classList.add('selected');
        loadPage(savedPage);
        document.title = defaultButton.textContent + " - Álefe Alves da Silva Correia";
    }
});
