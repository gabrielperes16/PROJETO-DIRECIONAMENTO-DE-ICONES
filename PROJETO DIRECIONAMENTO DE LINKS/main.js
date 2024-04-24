

const Observador = new IntersectionObserver((FORNECEDOR_DE_INFORMAÇÕES) => {
    FORNECEDOR_DE_INFORMAÇÕES.forEach((verificador) =>{    
        
        if(verificador.isIntersecting){
            verificador.target.classList.add('adiconar_função')
        }
        else{
            verificador.target.classList.remove('adiconar_função')
        }
})
 })

const elements= document.querySelectorAll(".hidden")

elements.forEach((Element) => Observador.observe(Element))


