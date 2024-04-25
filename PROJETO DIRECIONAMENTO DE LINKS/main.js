// Esta função Verifica se o elemento observado esta ou não visível na página//
const Observador = new IntersectionObserver((FORNECEDOR_DE_INFORMAÇÕES) => {
    FORNECEDOR_DE_INFORMAÇÕES.forEach((verificador) => {
        // Quando um elemento entra na é visível, a classe CSS adiconar_função é adicionada//
        if (verificador.isIntersecting) {
            verificador.target.classList.add('adiconar_função')
        }
        else {
            verificador.target.classList.remove('adiconar_função')
        }
    })
})
//Todos os elementos da classe .hidden são selecionados.
const elements = document.querySelectorAll(".hidden")
//O observador de interseção começa a observar cada um desses elementos.
elements.forEach((Element) => Observador.observe(Element))


