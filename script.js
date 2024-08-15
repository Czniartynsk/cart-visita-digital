function toggleMode() {
  //const body = document.body

  /* 
  document é a representação do documento (página toda) em formato de OBJETO javascript. Sempre que colocado ponto, estou acessando propriedades e funcionalidades do objeto

  documentElement é a tag <html>
  */
  const html = document.documentElement

  /*
  if(html.classList.contains('light')) {
    html.classList.remove('light')
  } else {
    html.classList.add('light')
  }
  */

  /* o toggle faz essa lógica acima */
  html.classList.toggle("light")

  /* Alterar imagem dependendo do modo */
  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute(
      "src",
      "./assets/341186498_179510484970880_4084133003381744331_n.jfif"
    )
    img.setAttribute("alt", "Eu dentro do carro com óculos escuros")
  } else {
    img.setAttribute(
      "src",
      "./assets/102874554_259038238664288_6280213599959940720_n.jpg"
    )
    img.setAttribute("alt", "Eu sorrindo")
  }
}
