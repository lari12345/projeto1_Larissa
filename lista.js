document.querySelectorAll('#Lista-itens li').forEach(function(itens)
{Item.addEventListener('click', function(){
    document.getElementById('mensagem-item'). textContent= this.getAttribute
    ('data-mensagem');
});

document.querySelectorAll('#Lista-itens li').forEach(function(item)
{Item.addEventListener('click', function(){
    document.getElementById('mensagem-item'). textContent= this.getAttribute
    ('data-mensagem');

    document.getElementById('mensagem-item'). src = this.getAttribute ('data-mensagem');
    document.getElementById('mensagem-item'). style.display= 'block';
    document.getElementById('descrição-item'). textContent= this.getAttribute
    ('data-descrição');})
    
});
});
