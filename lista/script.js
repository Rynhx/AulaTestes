
    const lista = [...document.getElementById("lista").children]

    lista.forEach ((item) => {
        item.onclick = concluir
    })

    function concluir (evento) {

        console.log(evento)

        item.classList.toggle("concluido")

    }