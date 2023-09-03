
const personagens = document.querySelectorAll('.personagem')
if (window.innerWidth < 450) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}



personagens.forEach((personagem) => {
    personagem.addEventListener('click', function () {
        const personagemSelecionado = document.querySelector('.selecionado');
        personagemSelecionado.classList.remove('selecionado');
        personagem.classList.add('selecionado');
        console.log(personagem)
   
        const imagemPersonagemGrande = document.querySelector('.personagem-grande');
        const idPersonagem = personagem.attributes.id.value;
        imagemPersonagemGrande.src = `./src/assets/img/png/${idPersonagem}.png`;
        
    const nomePersonagem = document.getElementById('nome-personagem');
    nomePersonagem.innerText = personagem.getAttribute('data-name');
    const descricaoPersonagem = document.getElementById(`descricao`);
    descricaoPersonagem.innerText = personagem.getAttribute('data-descprition');
}
)


})