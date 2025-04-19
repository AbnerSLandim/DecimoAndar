document.addEventListener("DOMContentLoaded", function () {
    const mensagensApresentacao = [
        { texto: "Eu li essa frase em um livro uma vez" },
        { texto: "Aqueles que passam por nos nao vao sos.<br> deixam um pouco de si levam um pouco de nos" },
        { texto: "Na epoca eu pensei que era uma frase bonita<br> mas me pergunto" },
        { texto: "O quanto eu deixei de mim e quanto eles deixaram em mim" },
        { texto: "Eu vejo eles quando eu fecho meus olhos" },
        { texto: "Eu nao consigo dormir" },
        { texto: "As coisas que eu vi" },
        { texto: "Mesmo que eu saia vivo eu nao serei eu mesmo" },
        { texto: "Espero que você nao tenha o mesmo destino que eu" },
        { texto: "Por favor..." },
        { texto: "Acabe com esse ciclo" },
        { texto: "555" }
    ];

    let index = 0;

    const setinha = document.getElementById("setinha");
    const titulo = document.getElementById("titulo");

    setinha.addEventListener("click", () => {
        index++;

        if (index >= mensagensApresentacao.length) {
            // Redireciona para outra página
            window.location.href = "SalaDeEstar.jsp"; // Altere para o caminho desejado
            return;
        }

        titulo.innerHTML = mensagensApresentacao[index].texto;
    });
});






