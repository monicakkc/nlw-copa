function createGame(player1, player2, hour) {
    return `
    <li> <!-- define itens da lista-->
        <img src="./assets/icon-${player1}.svg" alt="bandeira ${player1}">  <!-- src eh a fonte da imagem e alt o texto q descreve e serve na busca do navegador -->
        <strong>${hour}</strong> <!--strong enfatiza o texto-->
        <img src="./assets/icon-${player2}.svg" alt="bandeira ${player2}">
    </li>   
    `
}

let delay = -0.4;
function createCard(date, day, games) {
    delay = delay + 0.4;
    return `
        <div class="card" style='animation-delay: ${delay}s'> <!-- div serve para agrupar nivel bloco-->
            <h2>${date} <span>${day}</span></h2> <!-- Span eh container q serve para agrupar nivel linha-->
            <ul> <!-- cria listas desordenadas ol ordenadas-->
                ${games}
            </ul>
        </div>
    `
}

document.querySelector('#cards').innerHTML = 
    createCard('24/11', 'quinta', createGame('brazil', 'serbia', '16:00') + 
                                  createGame('cameroon', 'colombia', '08:00')) +
    createCard('28/11', 'segunda', createGame('hungary', 'argentina', '16:00') +
                                   createGame('cameroon', 'colombia', '08:00') +
                                   createGame('brazil', 'japan', '16:00')) +
    createCard('02/12', 'sexta', createGame('cameroon', 'colombia', '08:00'))
