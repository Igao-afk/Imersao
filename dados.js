let dados = [
    {
        titulo: "Thor",
        descricao: "Thor é filho de Odin e Jord, a personificação da Terra, e é um guerreiro que utiliza o martelo mágico, Mjölnir, que nunca erra o alvo, e pode ter seu tamanho reduzido.",
        link: "https://www.historiadomundo.com.br/viking/thor.htm",
        tags: "martelo, trovão, relâmpago, raio"
    },
    {
        titulo: "Loki",
        descricao: "Loki é o deus da trapaça e da discórdia. Muitas vezes retratado como um trickster, ele é conhecido por suas travessuras, inteligência e capacidade de se transformar em qualquer forma.",
        link: "https://www.significados.com.br/loki-deus-da-trapaca-da-mitologia-nordica/",
        tags: "trapaça, discórdia, metamorfose, inteligência"
    },
    {
        titulo: "Odin",
        descricao: "Odin é o maior dos deuses nórdicos, o pai dos deuses. Odin é representado como um homem velho, mas forte, e vestido com suas armas de guerreiro, pois ele é o deus da sabedoria, da guerra e da morte.",
        link: "https://www.historiadomundo.com.br/viking/odin.htm",
        tags: "sabedoria, guerra, morte"
    },
    {
        titulo: "Freyja",
        descricao: "Freyja é a deusa do amor, da fertilidade e da beleza. Ela também é uma deusa da guerra, associada às Valquírias, que levam os guerreiros mortos para o Valhalla.",
        link: "https://pt.wikipedia.org/wiki/Freyja",
        tags: "amor, fertilidade, beleza, Valquírias"
    },
    {
        titulo: "Týr",
        descricao: "Týr é o deus da guerra e da justiça. Ele é conhecido por sua coragem, especialmente pelo sacrifício de sua mão ao domar o lobo Fenrir.",
        link: "https://pt.wikipedia.org/wiki/Týr",
        tags: "guerra, justiça, coragem, Fenrir"
    },
    {
        titulo: "Heimdall",
        descricao: "Heimdall é o guardião da ponte Bifrost, que conecta Asgard à Terra. Ele tem sentidos extremamente aguçados e pode ouvir a grama crescer e ver a grandes distâncias.",
        link: "https://pt.wikipedia.org/wiki/Heimdall",
        tags: "guardião, Bifrost, sentidos aguçados, visão"
    },
    {
        titulo: "Frigg",
        descricao: "Frigg é a esposa de Odin e a deusa do casamento, da maternidade e das profecias. Ela é uma das divindades mais importantes da mitologia nórdica.",
        link: "https://pt.wikipedia.org/wiki/Frigg",
        tags: "casamento, maternidade, profecias"
    },
    {
        titulo: "Rá",
        descricao: "Rá é o deus do Sol e um dos mais importantes da mitologia egípcia. Ele é responsável pela criação de toda a vida e é retratado com uma cabeça de falcão e um disco solar sobre a cabeça.",
        link: "https://pt.wikipedia.org/wiki/Rá",
        tags: "Sol, criação, falcão, disco solar"
    },
    {
        titulo: "Osíris",
        descricao: "Osíris é o deus dos mortos e da vida após a morte. Ele é o governante do submundo e é associado à regeneração e à fertilidade.",
        link: "https://pt.wikipedia.org/wiki/Osíris",
        tags: "mortos, vida após a morte, regeneração, fertilidade"
    },
    {
        titulo: "Ísis",
        descricao: "Ísis é a deusa da maternidade, da magia e da sabedoria. Ela é esposa de Osíris e mãe de Hórus, sendo uma das divindades mais veneradas no antigo Egito.",
        link: "https://pt.wikipedia.org/wiki/Ísis",
        tags: "maternidade, magia, sabedoria, Osíris"
    },
    {
        titulo: "Hórus",
        descricao: "Hórus é o deus do céu e da realeza. Ele é frequentemente representado como um homem com cabeça de falcão e é conhecido por ser o filho de Osíris e Ísis.",
        link: "https://pt.wikipedia.org/wiki/Hórus",
        tags: "céu, realeza, falcão, Osíris"
    },
    {
        titulo: "Anúbis",
        descricao: "Anúbis é o deus associado à mumificação e ao cuidado dos mortos. Ele é representado com a cabeça de um chacal e é o guardião dos túmulos.",
        link: "https://pt.wikipedia.org/wiki/Anúbis",
        tags: "mumificação, mortos, chacal, túmulos"
    },
    {
        titulo: "Bastet",
        descricao: "Bastet é a deusa da casa, do amor, da fertilidade e dos gatos. Ela é retratada como uma mulher com cabeça de leoa ou de gato, simbolizando proteção e gentileza.",
        link: "https://pt.wikipedia.org/wiki/Bastet",
        tags: "casa, amor, fertilidade, gatos"
    },
    {
        titulo: "Toth",
        descricao: "Toth é o deus da sabedoria, da escrita e da magia. Ele é o escriba dos deuses e o inventor dos hieróglifos, sendo frequentemente representado com a cabeça de um íbis.",
        link: "https://pt.wikipedia.org/wiki/Thoth",
        tags: "sabedoria, escrita, magia, hieróglifos"
    },
    {
        titulo: "Zeus",
        descricao: "Zeus é o rei dos deuses e deus do céu, do trovão e da justiça. Ele governa o Monte Olimpo e é conhecido por seu poder e liderança entre os deuses.",
        link: "https://pt.wikipedia.org/wiki/Zeus",
        tags: "céu, trovão, justiça, Monte Olimpo"
    },
    {
        titulo: "Hera",
        descricao: "Hera é a rainha dos deuses e esposa de Zeus. Ela é a deusa do casamento e da família, sendo protetora das mulheres casadas.",
        link: "https://pt.wikipedia.org/wiki/Hera",
        tags: "rainha, casamento, família, proteção"
    },
    {
        titulo: "Poseidon",
        descricao: "Poseidon é o deus dos mares, dos terremotos e dos cavalos. Ele é irmão de Zeus e controla os oceanos com seu tridente.",
        link: "https://pt.wikipedia.org/wiki/Poseidon",
        tags: "mares, terremotos, cavalos, tridente"
    },
    {
        titulo: "Atena",
        descricao: "Atena é a deusa da sabedoria, da guerra estratégica e das artes. Ela nasceu da cabeça de Zeus e é uma das principais divindades do Olimpo.",
        link: "https://pt.wikipedia.org/wiki/Atena",
        tags: "sabedoria, guerra estratégica, artes, Zeus"
    },
    {
        titulo: "Ares",
        descricao: "Ares é o deus da guerra e é conhecido por sua natureza violenta e impetuosa nos conflitos. Ele é filho de Zeus e Hera.",
        link: "https://pt.wikipedia.org/wiki/Ares",
        tags: "guerra, violência, conflitos, Zeus"
    },
    {
        titulo: "Afrodite",
        descricao: "Afrodite é a deusa do amor, da beleza e da paixão. Ela é uma das divindades mais adoradas na Grécia antiga e está associada à sensualidade e ao desejo.",
        link: "https://pt.wikipedia.org/wiki/Afrodite",
        tags: "amor, beleza, paixão, sensualidade"
    },
    {
        titulo: "Hades",
        descricao: "Hades é o deus do submundo e dos mortos. Ele é irmão de Zeus e Poseidon, e governa o reino dos mortos, o mundo subterrâneo.",
        link: "https://pt.wikipedia.org/wiki/Hades",
        tags: "submundo, mortos, reino subterrâneo, Zeus"
    },
    {
        titulo: "Apolo",
        descricao: "Apolo é o deus do sol, da música, da profecia e da cura. Ele é filho de Zeus e Leto, e irmão gêmeo de Ártemis.",
        link: "https://pt.wikipedia.org/wiki/Apolo",
        tags: "sol, música, profecia, cura"
    },
    {
        titulo: "Ártemis",
        descricao: "Ártemis é a deusa da caça, da lua e da vida selvagem. Ela é irmã gêmea de Apolo e uma das principais deusas virgens do Olimpo.",
        link: "https://pt.wikipedia.org/wiki/Ártemis",
        tags: "caça, lua, vida selvagem, virgem"
    },
    {
        titulo: "Deméter",
        descricao: "Deméter é a deusa da agricultura, das colheitas e da fertilidade da terra. Ela é responsável pela nutrição e pelo ciclo das estações.",
        link: "https://pt.wikipedia.org/wiki/Deméter",
        tags: "agricultura, colheitas, fertilidade, nutrição, estações"
    },
    {
        titulo: "Dionísio",
        descricao: "Dionísio é o deus do vinho, da festa e do êxtase. Ele é frequentemente associado à alegria, celebração e libertação dos sentidos.",
        link: "https://pt.wikipedia.org/wiki/Dionísio",
        tags: "vinho, festa, êxtase, alegria, celebração"
    },
        {
            titulo: "Hefesto",
            descricao: "Hefesto é o deus do fogo, da forja e da metalurgia. Ele é o artesão dos deuses e conhecido por sua habilidade em criar armas e armaduras.",
            link: "https://pt.wikipedia.org/wiki/Hefesto",
            tags: "fogo, forja, metalurgia, armas, armaduras"
        }
    ];
   