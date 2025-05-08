function carregar() {
    var msg = document.getElementById("msg")
    var img = document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `agora sao ${hora}h horas`
    if (hora >+ 0 && hora < 12){
        img.src = "imagens/manha.png"
        document.body.style.background = "#e2cd9f"
    }
    else if (hora >= 12 && hora < 17){
        img.src = "imagens/tarde.png"
        document.body.style.background = "#b9846f"
        }
    else{
        img.src = "imagens/noite.png"
        document.body.style.background = "#515154f"
    }
}

