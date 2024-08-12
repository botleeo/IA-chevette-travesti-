const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "dados da ONU  falam que mais de 50% da  população está acima do peso?",
        alternativas: [
            "sim pois muitas pessoas não praticam esporte e acabam acima do peso",
            "pois as comidas industrializadas contêm muita gordura e as pessoas comem muito",
        ]
    },
]
    {
        enunciado: "o perigo na desidratação no local de trabalho?",
        alternativas;[
            "sim isso afeta a saude ",
            "pessoas desidratadas  podem passar mal tendo muitas outras doenças  inclussas ",
        ]
    }
    {
        enunciado: "Como utlizart a tecnologia para promover ações objetivas para aumentar o número de castrações, e assim diminuir a quantidade de animais em situação de rua, e ações de conscientização, promovendo a mudança cultural para evitar o abandono de animais, utilizando hábitos do menos é mais?",
        alternativas;[
            "Uso das redes sociais para apoio e divulgação das ações",
            "Impulsionamento nas redes socias",
        ]
    }
    let atual = 0;
    let perguntaAtual;
    let historiaFinal = "";
    
    function mostraPergunta() {
        if (atual >= perguntas.length) {
            mostraResultado();
            return;
        }
        perguntaAtual = perguntas[atual];
        caixaPerguntas.textContent = perguntaAtual.enunciado;
        caixaAlternativas.textContent = "";
        mostraAlternativas();
    }
    
    function mostraAlternativas(){
        for(const alternativa of perguntaAtual.alternativas) {
            const botaoAlternativas = document.createElement("button");
            botaoAlternativas.textContent = alternativa.texto;
            botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
            caixaAlternativas.appendChild(botaoAlternativas);
        }
    }
    
    function respostaSelecionada(opcaoSelecionada) {
        const afirmacoes = opcaoSelecionada.afirmacao;
        historiaFinal += afirmacoes + " ";
        atual++;
        mostraPergunta();
    }
    
    function mostraResultado() {
        caixaPerguntas.textContent = "Em 2049...";
        textoResultado.textContent = historiaFinal;
        caixaAlternativas.textContent = "";
    }
    
    mostraPergunta();