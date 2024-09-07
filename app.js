function pesquisar() {
    // Obtém a seção HTML onde os resultados serão renderizados
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;
    if(!campoPesquisa){
        section.innerHTML = "<p>Nada foi encontrado. Digite uma palavra!</P>"
        return
    }
    campoPesquisa = campoPesquisa.toLowerCase();
    // Inicializa uma variável "resultados" como uma string vazia, onde os dados serão acumulados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
    // Loop através de cada item no array "dados"
    for (let dado of dados) {
       titulo = dado.titulo.toLowerCase()
       descricao = dado.descricao.toLowerCase() 
       tags = dado.tags.toLowerCase()
       if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
        // Concatena uma estrutura HTML para cada item no array "dados", utilizando template strings
        resultados += `
        <div class="item-resultado">
            <h2>${dado.titulo}</h2> 
            <p class="descricao-meta">
                ${dado.descricao} 
            </p>
            <a href=${dado.link} target="_blank">Mais Informações</a> 
        </div>`;
       }
        
    }
    if(!resultados)
        resultados = "<p>Nada foi encontrado</p>"
    // Insere o conteúdo acumulado de "resultados" na seção HTML
    section.innerHTML = resultados;
}
