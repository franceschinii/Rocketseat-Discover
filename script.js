function toggleMode( ) {
    const html = document.documentElement
    html.classList.toggle('light')

//pegar a tag img
const img = document.querySelector("#profile img")

//substituir a imagem
if(html.classList.contains('light')) {
    //se tiver light mode, adicionar a imagem light
    img.setAttribute('src', './assets/avatar-light1.png')
    img.setAttribute('alt', 'Foto de André de cabelo cortado, usando uma camisa preta, e uma corrente no pescoco, segurando seu celular no espelho do banheiro')
} else {
    // se tiver sem light mode, manter a imagem normal
    img.setAttribute('src', './assets/avatar1.png')
    img.setAttribute('alt', 'Foto de André sorrindo em uma pizzaria, usando uma camisa social preta, com um botão desabotoado, e correntes de aço no pulso.')
}

}