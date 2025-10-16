// Funções para o formulário multi-etapas
function proximaEtapa(etapaAtual) {
    document.getElementById('etapa' + etapaAtual).classList.remove('active');
    document.getElementById('etapa' + (etapaAtual + 1)).classList.add('active');
}

function voltarEtapa(etapaAtual) {
    document.getElementById('etapa' + etapaAtual).classList.remove('active');
    document.getElementById('etapa' + (etapaAtual - 1)).classList.add('active');
}