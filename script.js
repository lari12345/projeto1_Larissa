document.getElementById('botao').addEventListener('click', function(){
    const mensagem = document.getElementById('mensagem');
    mensagem.style.color=mensagem.style.color === 'pink' ? 'red': 'black';
});