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

document.addEventListener("DOMContentLoaded", function () {
    const codigos = [
        //{ codigo: " " mensagem: ""},
        //Codigos meme
        { codigo: "69", mensagem: "Você é meio horny" },
        { codigo: "6969", mensagem: "Você é muito horny" },
        { codigo: "2201", mensagem: "Ei esse é meu aniversário" },

        //Codigos Importantes
        { codigo: "555", mensagem: "Eu estou aqui a muito tempo, " },
        { codigo: "7532", mensagem: "Não se deve perturbar aqueles que já se foram"},
        { codigo: "8473", mensagem: "Os mortos nos lembram do que esquecemos"},
        { codigo: "7777", mensagem: "Uma hora todos nos precisaremos descansar"},


        //Easter Egg engraçados mas não uteis
        { codigo: "fallout", mensagem: "Bem-vindo à Irmandade!" }
    ];
    let buffer = "";

    const audioChiado = document.getElementById('audioChiado');
    const audioResposta = document.getElementById('audioResposta');

    document.addEventListener("keydown", function (event) {
        if (event.key.length === 1) {
            buffer += event.key;
        }

        if (event.key === "Enter") {
            const entrada = buffer.trim();
            const resultado = codigos.find(obj => obj.codigo === entrada);
            if (resultado) {
                document.getElementById("mensagensCodigo").innerHTML = resultado.mensagem;

                audioChiado.pause();
                audioChiado.currentTime = 0;


                audioResposta.currentTime = 0;
                audioResposta.play().catch(e => {
                    console.log('Falha ao tocar áudio da resposta:', e);
                });
            }
            buffer = "";
        }
    })
})

window.addEventListener('load', function () {
    const audio = document.getElementById('audioChiado');
    audio.play().catch((e) => {
        console.log('Autoplay bloqueado pelo navegador:', e);
    });
});







