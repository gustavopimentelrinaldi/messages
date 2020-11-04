Vue.component('mes-07', {
  template: `<div v-for="message in conversation" :key="message.created_at">
              <h3>{{message.sender}}</h3>
              <h4>{{message.created_at}}</h4>
              <p>{{message.text}}</p>
             </div>`,
  data() {
    return {
      "conversation":[
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T23:53:21.708743",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-08-01T00:00:20.996991"
            }
          ],
          "text": "Eu tava jantando, minha mãe fez um macarrão muito bomm"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T23:52:54.214164",
          "text": "Já morei em Planaltina, no buritis 4"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T23:50:16.919194",
          "text": "E você? Tá fazendo o que aí??"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T23:50:05.652603",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-31T23:52:29.485188"
            }
          ],
          "text": "Imagino, eles são dedicados"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T23:49:57.621852",
          "text": "Daqui a pouco chego em casa"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T23:49:13.821730",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-31T23:52:27.083486"
            }
          ],
          "text": "Eu vim aqui em Planaltina ver minha família"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T23:48:53.553095",
          "text": "Fui não"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T23:21:57.227372",
          "text": "Ficou bem produzido, achei massa"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T23:21:44.493266",
          "text": "Danilo deitou na música tb"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T23:21:33.165378",
          "text": "Paulin mandou bem dms"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T23:21:17.577462",
          "text": "Você foi trabalhar hj?"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T23:20:59.568430",
          "text": "Tô bemm"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T23:18:59.273161",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-31T23:21:18.416111"
            }
          ],
          "text": "O que você achou?"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T23:18:38.681270",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-31T23:21:05.645160"
            }
          ],
          "text": "Eu ainda não vi, assim que chegar em casa eu vejo"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T23:18:24.484157",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-31T23:20:50.411101"
            }
          ],
          "text": "Ta bem???"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T23:18:18.496809",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-31T23:20:48.571280"
            }
          ],
          "text": "Mas o importante é que você esteja"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T23:18:09.713753",
          "text": "Eu to bem"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T22:37:07.924165",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-31T23:18:29.493589"
            }
          ],
          "text": "Danilo felizão com o clipe, ficou massa né"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T22:35:44.608973",
          "text": "Kkkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T22:35:15.114923",
          "text": "Tá fazendo oq?"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T22:35:04.037161",
          "text": "Oii, cê tá bem?"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T07:47:07.731030",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-31T07:47:22.164614"
            }
          ],
          "text": "Beijo"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T07:47:05.945195",
          "text": "Boa noite meu bem"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T07:46:50.130828",
          "text": "Beijo"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T07:46:48.519901",
          "text": "Boa noite linda"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T07:46:06.474985",
          "text": "Sempre aqui, você que é incrível"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T07:45:39.769216",
          "text": "Você é incrível ❤️"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T07:45:25.946202",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-31T07:45:34.864335"
            }
          ],
          "text": "Obrigado pela presença"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T07:45:13.395483",
          "text": "Então tá bom"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T07:45:08.025346",
          "text": "Ah tá"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T07:45:06.994171",
          "text": "Mas ela já vai dormir tb"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T07:44:49.045263",
          "text": "Dani tá acordada conversando cmg"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T07:44:32.344524",
          "text": "Não"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T07:44:26.918302",
          "text": "Te segurei muito??"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T07:44:21.729198",
          "text": "Tô com sono já"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T07:44:09.341301",
          "text": "Eu já vou dormir, tava só esperando kkkk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T07:43:34.017542",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-31T07:43:40.837812"
            }
          ],
          "text": "Vai descansar"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T07:43:18.547863",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-31T07:43:21.947403"
            }
          ],
          "text": "Kkkkkk amém Deus"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T07:43:13.080779",
          "text": "Acabei"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T07:43:07.338825",
          "text": "Mesmo?"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T07:43:04.984936",
          "text": "A última"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T07:43:00.250652",
          "text": "E você"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T07:42:48.123979",
          "text": "Tô bem"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T07:42:45.067230",
          "text": "Kkkkkkk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T07:40:03.826969",
          "text": "Tá bem???"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T07:26:20.680369",
          "text": "Ver"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T07:26:19.344090",
          "text": "Quero só vee"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T07:25:29.605073",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-31T07:26:06.327721"
            }
          ],
          "text": "To jogando a última"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T07:25:24.695164",
          "text": "Prometo"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T07:25:23.291895",
          "text": "Vai não"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T07:22:47.728009",
          "text": "6h"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T07:22:45.476816",
          "text": "Dormir"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T07:22:43.098491",
          "text": "Eu vou"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T07:22:38.855072",
          "text": "Então"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T07:22:35.652921",
          "text": "Kkkkkk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T07:22:04.073651",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-31T07:22:29.226793"
            }
          ],
          "text": "Vai dormir só quando eu for também"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T07:21:56.131002",
          "text": "Calma ae"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T07:18:13.879920",
          "text": "Kkkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T07:18:11.408763",
          "text": "Menos mal"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T07:18:08.042448",
          "text": "Foi só pra exagerar"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T07:17:58.490183",
          "text": "Eu to comendo de boa"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T07:17:55.657958",
          "text": "To zoando"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T07:17:41.549225",
          "text": "Eu comi"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T07:17:37.288121",
          "text": "É"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T07:17:33.339883",
          "text": "Oi"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T07:17:28.877816",
          "text": "Gustavo Gustavo"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T07:17:05.441912",
          "text": "N comeu mais nada?"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T07:17:02.007741",
          "text": "E quando chegou em casa"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T07:16:52.811050",
          "text": "Lá no Danilo"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T07:16:49.379929",
          "text": "Mas comeu"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T07:16:42.267735",
          "text": "Hmm"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T07:16:38.918786",
          "text": "?"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T07:16:38.145415",
          "text": "O que"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T07:16:33.282694",
          "text": "Meio dia"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T07:16:31.824303",
          "text": "Sim"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T07:16:25.805664",
          "text": "Você jantou hj né"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T07:16:19.730169",
          "text": "Kkkkk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T07:16:06.650344",
          "text": "Eu vou comer alguma coisa jaja"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T07:16:02.850501",
          "text": "Tem razão"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T07:15:55.868422",
          "text": "Osh"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T07:15:52.881089",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-31T07:15:57.720670"
            }
          ],
          "text": "Precisa comer"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T07:15:34.682963",
          "text": "Comer não dá experiência"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T07:15:31.379548",
          "text": "Não"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T07:15:27.262536",
          "text": "Tem que comer, tá doido é kk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T07:15:18.810352",
          "text": "Aí não pode não"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T07:15:10.527800",
          "text": "Q você não vai desinstalar"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T07:15:06.764766",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-31T07:15:13.322085"
            }
          ],
          "text": "De andar"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T07:15:04.564996",
          "text": "To deixando de comer"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T07:15:00.794174",
          "text": "Ctz"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T07:14:58.696642",
          "text": "E tenho ct"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T07:14:08.175497",
          "text": "Kkkkkk doente não"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T07:13:38.233580",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-31T07:13:43.669281"
            }
          ],
          "text": "Pode me internar"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T07:13:35.794428",
          "text": "Eu sou doentio"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T07:13:30.551168",
          "text": "6 horas jogando?"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T07:13:26.353016",
          "text": "Que?"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T07:12:51.070155",
          "text": "21:30"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T07:12:28.919117",
          "text": "Eu entrei"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T07:08:48.563752",
          "text": "Precisa nem pedir"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T07:08:27.919964",
          "text": "Você n faz isso"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T07:07:37.648762",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-31T07:08:18.378356"
            }
          ],
          "text": "Sem mentir?"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T07:05:01.971634",
          "text": "Sem mentir pra mim"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T07:04:55.879420",
          "text": "Desde que horas?"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T07:04:52.470039",
          "text": "Você está jogando"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T07:04:43.491788",
          "text": "Kkkkkkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T07:04:31.315496",
          "text": "De leves"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T07:04:29.814077",
          "text": "A me preocupar contg"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T07:04:24.246044",
          "text": "Tô começando"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T07:04:17.010148",
          "text": "Foi o que eu pensei"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T07:04:12.501594",
          "text": "É"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T07:04:08.920854",
          "text": "Advinha"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T07:03:43.457313",
          "text": "Você ainda tá jogando né Gustavo"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T07:03:35.161369",
          "text": "A pergunta da noite"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T07:03:23.978952",
          "text": "Kkkkkkkkkkkkkkkkkk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T07:03:17.769436",
          "text": "É pesadelo"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T07:03:13.231675",
          "text": "Agora não é sonho mais"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T07:02:54.998710",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-31T07:03:10.654269"
            }
          ],
          "text": "Já sonhei"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T07:02:51.050770",
          "text": "Quando eu gostava mais do jogo"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T07:01:43.672580",
          "text": "Isso"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T07:01:42.499258",
          "text": "Fazia mt"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T07:01:40.424888",
          "text": "Jogando?"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T07:01:38.577342",
          "text": "Q tava"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T07:01:37.117269",
          "text": "Tu já chegou a sonhar"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T07:01:25.259392",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-31T07:01:28.317918"
            }
          ],
          "text": "Te juro"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T07:01:24.578751",
          "text": "Vei"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T07:01:20.671475",
          "text": "Sério"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T07:01:14.489512",
          "text": "De você"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T07:01:12.802779",
          "text": "Eu tô rindo mt"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T07:01:09.615300",
          "text": "Kkkkkkkkkkkkkkk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T07:01:06.012250",
          "text": "Tá me deixando paranoico"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T07:01:01.695218",
          "text": "Com meus neurônios"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T07:00:58.798740",
          "text": "Esse jogo tá mexendo"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T07:00:55.658351",
          "text": "Mano"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T07:00:50.675744",
          "text": "Na raba toma tapão"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T07:00:41.920642",
          "text": "Dançar"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T07:00:37.834624",
          "text": "Tu topou a dancar"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T07:00:29.638152",
          "text": "Como eu vou te ajudar mano?"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T07:00:23.196741",
          "text": "Mds"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T07:00:18.146044",
          "text": "Kkkkkkkkkkkkkkkkkkkk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T07:00:10.424924",
          "text": "Entendeu a droga que é esse jogo?"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T07:00:03.216323",
          "text": "Porque não foi a última"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T06:59:59.850754",
          "text": "Não"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T06:59:50.701920",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T06:59:44.517233",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-31T06:59:50.381729"
            }
          ],
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T06:59:34.047096",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-31T06:59:36.494565"
            }
          ],
          "text": "Nunca mais vou abrir esse jogo"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T06:59:27.173999",
          "text": "Só que pra sempre"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T06:59:23.604453",
          "text": "Eu vou dar essa segurada mesmo"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T06:57:36.897837",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T06:56:51.408936",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T06:56:25.024548",
          "text": "Duvido"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T06:56:21.574397",
          "text": "Kkkkkkkkkk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T06:56:15.108082",
          "text": "Vou desinstalar"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T06:56:11.236837",
          "text": "Extremamente certa"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T06:56:07.138502",
          "text": "Você tá certa"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T06:56:04.592738",
          "text": "Não"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T06:55:51.112430",
          "text": "Falo zuando"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T06:55:35.113506",
          "text": "Pq você n vai virar jogando kk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T06:53:13.513069",
          "text": "Boa porque?"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T06:45:40.367647",
          "text": "Boa sorte, ganha aí a última"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T06:45:27.819240",
          "text": "Kkkkkkk boa Gustavo"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T06:45:02.827120",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-31T06:45:19.281853"
            }
          ],
          "text": "Última"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T06:44:32.715503",
          "text": "Já n sei"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T06:44:28.102603",
          "text": "Agr você kkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T06:44:23.761799",
          "text": "nada, jaja durmo"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T06:43:41.458477",
          "text": "Parece que você quem vai virar"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T06:38:29.616367",
          "text": "Kkkkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T06:38:24.742195",
          "text": "Tá bom"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T06:38:02.332880",
          "text": "Vamo tentar então"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T06:36:46.751392",
          "text": "E vou fazer tb"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T06:36:41.092679",
          "text": "Eu sou péssima"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T06:35:53.550983",
          "text": "N é uma opção"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T06:35:50.213429",
          "text": "Desistir"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T06:35:11.187207",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-31T06:35:48.666979"
            }
          ],
          "text": "Vai ficar lindo"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T06:35:06.755101",
          "text": "Não vaiiii"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T06:34:09.659126",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-31T06:35:01.147925"
            }
          ],
          "text": "Eu já to vendo que vai ficar horroroso"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T06:33:49.066206",
          "text": "To me arrependendo já"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T06:32:09.035327",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-31T06:33:41.950595"
            }
          ],
          "text": "Aiai o bom é que você topa tudo 😂"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T06:31:22.092800",
          "text": "Amanhã eu defino a música kk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T06:31:09.202934",
          "text": "Certa então"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T06:31:06.724165",
          "text": "Define uma música"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T06:31:06.625311",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-31T06:31:13.280450"
            }
          ],
          "text": "Vai que você gosta, aí faz vários"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T06:30:35.556142",
          "text": "Maiores"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T06:30:33.090321",
          "text": "Por motivos"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T06:30:28.592313",
          "text": "tô aceitando essa condição"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T06:30:12.954789",
          "text": "Hmmm, tá bom Gustavo"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T06:29:50.117676",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-31T06:29:53.439840"
            }
          ],
          "text": "Nem dançar"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T06:29:48.139377",
          "text": "Nem jogar"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T06:29:46.185294",
          "text": "Que não faço nada sozinho"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T06:29:42.006139",
          "text": "Eu costumo falar pra você"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T06:29:19.072330",
          "text": "Das coisas"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T06:29:16.485101",
          "text": "Mudando as regras"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T06:29:12.007753",
          "text": "De ficar"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T06:29:08.615572",
          "text": "Tu tem uma mania feia"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T06:28:57.058413",
          "text": ";)"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T06:28:53.732494",
          "text": "É nois dois"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T06:28:50.164524",
          "text": "O combinado"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T06:28:47.253433",
          "text": "Agora"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T06:27:42.165525",
          "text": "Dançar"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T06:27:40.331140",
          "text": "Era só você"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T06:27:37.098644",
          "text": "O combinado"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T06:27:33.207327",
          "text": "Mas"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T06:27:01.980483",
          "text": "É fácil mano"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T06:26:52.004695",
          "text": "N sou besta"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T06:26:48.703983",
          "text": "Kkkkkkkkkkkkkk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T06:26:36.402185",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-31T06:26:42.897751"
            }
          ],
          "text": "Agora pronto"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T06:26:32.637745",
          "text": "Oxiiiii"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T06:26:02.326419",
          "text": "Ou é k.o"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T06:25:49.645165",
          "text": "Parou de jogar mesmo?"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T06:24:52.126191",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T06:24:38.415043",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T06:22:07.384931",
          "text": "Aqui em casa"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T06:22:03.560153",
          "text": "Kkkkkk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T06:21:58.651272",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-31T06:22:00.664299"
            }
          ],
          "text": "Alguém roubou"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T06:21:54.997430",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-31T06:21:59.468422"
            }
          ],
          "text": "Eu não tenho mais"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T06:21:21.351722",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T06:21:13.795679",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T06:21:06.052918",
          "text": "Eu fiquei com a mais feia"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T06:21:05.341830",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T06:21:02.264494",
          "text": "Quando ele morreu cada primo pegou uma boina dele"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T06:20:46.050159",
          "text": "Ele gostava"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T06:20:43.320614",
          "text": "Meu avô tinha várias"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T06:20:33.501529",
          "text": "Boina"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T06:19:11.751586",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T06:18:53.880428",
          "text": "Boinas?"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T06:18:47.259186",
          "text": "Que que é isso aí?"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T06:18:43.222065",
          "text": "Tá beleza"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T06:17:23.249021",
          "text": "O video é meu uai"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T06:17:12.185269",
          "text": "Eu não, pra que faria isso"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T06:17:01.527572",
          "text": "Pra poder compartilhar link né"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T06:16:54.076617",
          "text": "Salvar no drive"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T06:13:39.220568",
          "text": "Vê"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T06:13:34.887236",
          "text": "E apago do cel q aí ngm mais ver"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T06:13:11.287677",
          "text": "Kkkkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T06:13:05.704611",
          "text": "No drive*"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T06:12:59.944540",
          "text": "Em um drive"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T06:12:57.046997",
          "text": "E vou salvar"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T06:12:47.280570",
          "text": "Mas quero o vídeo"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T06:12:40.874851",
          "text": "No seu tempo"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T06:12:36.581594",
          "text": "Como você sempre diz pra mim"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T06:12:26.844623",
          "text": "Então"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T06:12:10.148814",
          "text": "Kkkkkkkkkkkkkkkkk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T06:12:01.997596",
          "text": "Que se alguém ver eu vou parecer um imbecil"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T06:11:53.931003",
          "text": "Imaginei"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T06:11:43.161930",
          "text": "Não, agora não"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T06:11:27.144697",
          "text": "Você vai gravar agr? Kkkkkkkkkkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T06:11:18.451138",
          "text": "Mas agr n tem como eu gravar"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T06:11:08.808499",
          "text": "Eu faço, tb vou passar vergonha"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T06:10:48.536268",
          "text": "E me manda"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T06:10:46.613740",
          "text": "Faz tu também"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T06:10:44.160963",
          "text": "Então tá"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T06:10:24.442179",
          "text": "Que você é incrível"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T06:10:16.351114",
          "text": "KKKKKKK por isso"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T06:10:10.219324",
          "text": "To nem aí"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T06:10:07.739290",
          "text": "Vou passar vergonha com essa mesmo"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T06:10:01.871035",
          "text": "Não"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T06:09:59.706735",
          "text": "Uai"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T06:09:58.945268",
          "text": "Então escolhe outra música"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T06:09:49.495069",
          "text": "KKKKKKKKKKK"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T06:09:45.292456",
          "text": "Ridículo"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T06:09:39.429403",
          "text": "Faz do jeito q você quiser"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T06:09:30.967284",
          "text": "N precisa ficar igual n"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T06:08:38.008080",
          "text": "Ta"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T06:08:36.069567",
          "text": "Kkkkkkkkkkk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T06:08:32.547941",
          "text": "Calmae"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T06:08:31.019210",
          "text": "Essa coreografia"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T06:08:28.557311",
          "text": "Deixa eu ver"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T06:08:19.396838",
          "text": "O video"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T06:08:17.578175",
          "text": "Mt"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T06:08:16.573240",
          "text": "Eu queria mr"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T06:08:07.413054",
          "text": "Mas eu queria o vídeo kkk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T06:07:45.460505",
          "text": "Eu vou parar"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T06:07:37.761669",
          "text": "Parou de jogar?"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T06:07:33.287623",
          "text": "Q você"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T06:07:30.315890",
          "text": "N vem me dizer"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T06:07:17.817850",
          "text": "Virar é até as 6"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T06:07:11.920017",
          "text": "Não"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T06:06:58.269248",
          "link": "https://youtu.be/6Ei7Hg3KBf0",
          "text": "https://youtu.be/6Ei7Hg3KBf0"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T06:06:27.967810",
          "text": "Virar é o que mesmo?"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T05:51:21.127775",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-31T05:51:22.770126"
            }
          ],
          "text": "Mandou bem"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T05:51:18.669473",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-31T05:51:29.842547"
            }
          ],
          "text": "Se der certo, vai ser bão"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T05:51:10.100730",
          "text": "Ótimo sinal"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T05:51:02.425648",
          "text": "Muito bom"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T05:51:01.817847",
          "text": "Então"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T05:51:00.365029",
          "text": "Kkkkkkkkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T05:50:51.431839",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-31T05:50:57.051276"
            }
          ],
          "text": "Tem q ver se esses meninos dirige bem"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T05:50:35.725813",
          "text": "Aí ela só falou assim"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T05:50:26.907787",
          "text": "Eu e Dani"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T05:50:24.194852",
          "text": "Mãe, talvez vou viajar com os meninos esse ano"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T05:50:14.999625",
          "text": "Falei assim"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T05:49:42.744903",
          "text": "Tu falou o que?"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T05:49:20.904505",
          "text": "Os loucos se entendem"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T05:49:11.178650",
          "text": "Tá certo"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T05:47:52.736763",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-31T05:49:39.159992"
            }
          ],
          "text": "Kkk um ótimo sinal"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T05:47:42.240638",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-31T05:49:37.494522"
            }
          ],
          "text": "Tá longe ainda"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T05:47:21.952882",
          "text": "Só disse assim"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T05:47:13.198314",
          "text": "Ela n proibiu"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T05:47:08.773895",
          "text": "Minha mãe tá acordada né"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T05:46:48.067024",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T05:43:21.005300",
          "text": "To falando sério"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T05:43:18.031786",
          "text": "Ele é perturbado"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T05:33:24.338521",
          "text": "Dão certinho msm kk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T05:31:53.126350",
          "text": "A dupla dos doidinnn"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T05:31:41.481640",
          "text": "Da certinnn"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T05:14:32.704317",
          "text": "Dá trab"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T05:14:30.406697",
          "text": "Daniela tb"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T05:13:27.420999",
          "text": "Simmmm"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T05:13:25.959873",
          "text": "Nossa"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T05:13:21.707353",
          "text": "Lascou foi tudo já"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T05:13:18.172358",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-31T05:13:21.953439"
            }
          ],
          "text": "Então só pra gerenciar ele"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T05:13:16.815266",
          "text": "E o Lucas já vale por 10"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T05:13:07.060144",
          "text": "Se não vira bagunça"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T05:12:57.467789",
          "text": "Sim"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T05:12:47.713537",
          "text": "Só a gente"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T05:12:45.380782",
          "text": "Kkkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T05:12:43.868491",
          "text": "É melhor msm"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T05:12:39.645805",
          "text": "Se a gente for mesmo"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T05:12:14.701015",
          "text": "Ah s"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T05:12:00.256816",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-31T05:12:08.706854"
            }
          ],
          "text": "Só brother"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T05:11:31.987299",
          "text": "Acho q ela deixa"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T05:11:20.866749",
          "text": "Qual era a outra galera? Povo do seu trab? Ou só amgs msm"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T05:10:55.974552",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-31T05:11:00.060320"
            }
          ],
          "text": "Faz tua persuasão"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T05:10:48.874415",
          "text": "Que ela conhece etc"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T05:10:46.077999",
          "text": "E aí tu fala do Vitor"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T05:10:10.952013",
          "text": "Pra ser só o Bonde conhecido"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T05:10:05.829838",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-31T05:10:39.970697"
            }
          ],
          "text": "Se vocês forem, vou limitar a galera que vai"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T05:08:51.499268",
          "text": "Jesus"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T05:08:46.609542",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-31T05:09:22.983097"
            }
          ],
          "text": "Da muita vontade de ir mesmo"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T05:08:32.352892",
          "text": "Só em falar em viagem"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T05:08:23.004107",
          "text": "Nem fala"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T05:08:11.457180",
          "text": "Vai ser impressionante"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T05:07:52.152107",
          "text": "Vai ser um milagre"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T05:07:46.057645",
          "text": "Se ela deixar"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T05:07:02.784621",
          "text": "Kkkkkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T05:07:00.510883",
          "text": "Tá bom, eu vou conseguir"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T05:06:45.445282",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-31T05:06:48.619977"
            }
          ],
          "text": "Boa sorte"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T05:06:43.832849",
          "text": "Caldas novas"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T05:06:38.177539",
          "text": "Exato"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T05:06:26.589085",
          "text": "Minha mãe"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T05:06:22.712626",
          "text": "Tento convencer"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T05:06:18.724654",
          "text": "Enquanto isso"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T05:06:14.787751",
          "text": "Boa, tudo combinadinho"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T05:05:47.797756",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-31T05:05:51.201051"
            }
          ],
          "text": "Trabalho/faculdade"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T05:05:42.538276",
          "text": "Geral concilia os dias"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T05:05:11.771169",
          "text": "Vou tirar minhas férias e abonos"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T05:04:54.194221",
          "text": "Esse ano"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T05:04:40.337624",
          "text": "Ia ser top demais"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T05:04:19.918002",
          "text": "A gente tenta convencer ela"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T05:04:04.755603",
          "text": "Vai aceitar isso"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T05:04:01.958012",
          "text": "Como a mãe de vocês"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T05:03:52.131486",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-31T05:03:54.226655"
            }
          ],
          "text": "Então me explica"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T05:03:36.607954",
          "text": "Gravar o vídeo"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T05:03:31.193565",
          "text": "De você"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T05:03:28.360242",
          "text": "É pq tá na hr"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T05:03:10.819340",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-31T05:03:17.891269"
            }
          ],
          "text": "Eu chega cai por inatividade no jogo"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T05:02:47.940691",
          "text": "Jesus"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T05:02:35.417890",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-31T05:02:46.248718"
            }
          ],
          "text": "Beleza Débora"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T05:02:32.311130",
          "text": "Kkkkkkkkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T05:02:25.690380",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-31T05:02:31.386375"
            }
          ],
          "link": "https://youtu.be/6Ei7Hg3KBf0",
          "text": "https://youtu.be/6Ei7Hg3KBf0"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T05:01:59.091636",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T05:01:38.983583",
          "text": "Eu não convido pra receber não"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T05:01:25.773179",
          "text": "Até vocês se resolverem"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T05:01:20.533612",
          "text": "Por isso, sem convite"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T05:01:03.934803",
          "text": "Mas se eu convidar, vocês vão falar não"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T05:00:45.037126",
          "text": "Vocês falaram de viagem"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T04:59:36.469060",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T04:59:24.594116",
          "text": "Kkkkkkkkk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T04:58:51.028191",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-31T04:59:21.602779"
            }
          ],
          "text": "Convidando ela pra entrar"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T04:58:46.808962",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-31T04:59:21.016614"
            }
          ],
          "text": "Avisa pra Daniela que eu vou mandar uma boina pra ela, e que ela vai receber uma ligação de um líder de uma gangue"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T04:58:22.841190",
          "text": "Mas ein"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T04:58:15.082057",
          "text": "Kkkkakakakaka"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T04:58:12.582657",
          "text": "Kkkkkkkkkkkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T04:58:09.649128",
          "text": "Em mim"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T04:58:07.816603",
          "text": "Pode confiar"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T04:58:05.046222",
          "text": "Que você"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T04:58:02.809176",
          "text": "Vai ser uma prova"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T04:57:56.780329",
          "text": "Claro que não"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T04:57:42.463859",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-31T04:57:53.632337"
            }
          ],
          "text": "Esse vídeo"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T04:57:40.277191",
          "text": "Tu vai usar como arma"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T04:57:33.013004",
          "text": "Hmm"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T04:57:20.288097",
          "text": "Não, mas eu quero o vídeo kkkkk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T04:57:12.031626",
          "text": "Sou doente não"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T04:57:08.272854",
          "text": "Mas eu nem vou virar não"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T04:56:22.342126",
          "text": "O que tu quiser"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T04:55:14.215982",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-31T04:56:15.745521"
            }
          ],
          "text": "Pode ser funk?"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T04:53:53.628935",
          "text": "Já sei"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T04:53:49.353829",
          "text": "Tá bom"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T04:53:45.313126",
          "text": "Aham"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T04:53:28.116708",
          "text": "Tá bom, ngm mais"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T04:53:15.443770",
          "text": "Só tu vai ver"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T04:52:08.904566",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-31T04:53:12.584683"
            }
          ],
          "voice_media": "Media unavailable."
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T04:51:42.078060",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T04:50:47.126240",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T04:50:40.028885",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T04:50:39.172219",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-31T04:51:05.043418"
            }
          ],
          "text": "Manda a música ai"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T04:50:35.024511",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T04:50:34.583014",
          "text": "Tranquilão"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T04:49:08.806929",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-31T04:50:31.772462"
            }
          ],
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T04:49:00.230260",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-31T04:49:13.371303"
            }
          ],
          "text": "Mas ele não tá comigo agora"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T04:48:47.404071",
          "text": "Que a culpa é toda deles"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T04:48:44.954696",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T04:48:43.097798",
          "text": "Eu concordo"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T04:48:11.249658",
          "text": "Kkkkkkkkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T04:48:10.679770",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T04:48:05.122608",
          "text": "Deve ser só por isso"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T04:47:58.076059",
          "text": "Hoje eu entro tem 10 on-line"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T04:47:45.135367",
          "text": "Antigamente eu entrava e não via ninguém jogando, eu saia"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T04:47:18.939643",
          "text": "O jogo é bom pra jogar com outras pessoas"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T04:47:07.406477",
          "text": "Mas tipo"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T04:46:56.941720",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T04:46:40.184168",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T04:46:38.102815",
          "text": "Não gostou já era"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T04:46:35.525900",
          "text": "Vacilona não"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T04:46:24.511224",
          "text": "Se for ruim eu paro no começo e nunca mais volto"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T04:46:14.640371",
          "text": "Mas quando eu começo uma série eu costumo terminar ela logo"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T04:46:11.858099",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T04:45:55.436590",
          "text": "No começo é ruim mesmo"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T04:45:51.435592",
          "text": "É"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T04:45:27.088049",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T04:45:06.883203",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T04:45:06.244162",
          "text": "A série é de 2012? Por aí"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T04:44:35.190038",
          "text": "Quando eu voltar integral já era"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T04:44:29.637419",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-31T04:44:50.429460"
            }
          ],
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T04:44:25.790472",
          "text": "Eu preciso enjoar"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T04:44:16.912087",
          "text": "É um compromisso meu"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T04:44:12.903985",
          "text": "Sério"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T04:44:10.967024",
          "text": "Mas eu vou enjoar"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T04:43:39.742330",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T04:43:27.808530",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T04:43:21.222557",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T04:42:16.860430",
          "text": "Mas porque tu não gostou da série do professor?"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T04:41:34.971968",
          "text": "Aviiimaria"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T04:41:26.288353",
          "text": "Eu to mal hoje"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T04:41:22.077390",
          "text": "Cabei de morrer"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T04:41:18.275572",
          "text": "Ala"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T04:41:14.564521",
          "text": "Pq"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T04:41:04.525373",
          "text": "Eu to cagando o jogo deles aqui"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T04:40:43.244231",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-31T04:40:59.669191"
            }
          ],
          "text": "Tá jogando ainda?"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T04:39:23.982897",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T04:38:53.184779",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T04:37:38.329655",
          "text": "Ah sim"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T04:37:11.682308",
          "text": "KKKKKK"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T04:37:06.034295",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T04:36:15.814167",
          "text": "O nome é esse mesmo?"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T04:36:10.483952",
          "text": "Mas mano"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T04:35:40.907805",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T04:35:07.887172",
          "text": "Tu quer uma buena??!"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T04:35:02.473609",
          "text": "Buena???!!"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T04:34:25.096685",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T04:33:50.824393",
          "text": "Buena?"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T04:33:24.089215",
          "text": "Para de dar spoiler"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T04:33:20.772589",
          "text": "Não véi"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T04:33:09.480203",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T04:32:29.117722",
          "text": "Vou te colocar em uma"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T04:32:24.977183",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T04:32:21.467245",
          "text": "Tu quer ser de uma gangue"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T04:32:17.738387",
          "text": "Relaxa"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T04:32:16.185108",
          "text": "To zoandoooo"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T04:31:36.304425",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-31T04:31:46.254444"
            }
          ],
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T04:31:28.477793",
          "text": "To suavao"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T04:31:24.491926",
          "text": "Série modinha dessa"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T04:31:21.120704",
          "text": "Não vou assistir mesmo"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T04:31:17.338949",
          "text": "Pode dar spoiler"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T04:31:07.418673",
          "text": "O sonho da garota kkkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T04:30:56.035678",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T04:30:35.537190",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-31T04:30:58.323007"
            }
          ],
          "text": "“Queria ser de uma gangue”"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T04:30:13.298385",
          "text": "Vai me matar se rir"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T04:30:09.023346",
          "text": "Essa menina"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T04:29:57.476656",
          "text": "Na moral"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T04:29:40.314452",
          "text": "Jkkkkkkkkkkkkkkkkkkkkkkkkkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T04:29:14.126715",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-31T04:29:48.395138"
            }
          ],
          "text": "Minha mãe ouviu e agr tá brigando c ela kk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T04:28:54.449128",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-31T04:29:35.250073"
            }
          ],
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T04:27:23.537802",
          "text": "Respeitados"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T04:27:10.992643",
          "text": "Império desses"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T04:26:57.551833",
          "text": "Só que tu é da família Basílio"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T04:26:27.484070",
          "text": "Tu queria ser da família deles"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T04:23:14.615689",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-31T04:26:11.764353"
            }
          ],
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T04:22:41.532702",
          "text": "Peaky blinders??"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T04:22:35.669671",
          "text": "Boinas?"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T04:20:31.227485",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T04:19:48.690940",
          "text": "Vdd"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T04:19:41.096145",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-31T04:19:46.840203"
            }
          ],
          "text": "É vontade de ter algo pra fazer"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T04:19:35.852980",
          "text": "É isso, não é vontade de férias"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T04:19:26.293141",
          "text": "Ué"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T04:19:20.650279",
          "text": "Paia não é não, mas tbm n gostei tanto assim kkkkkkkkkkk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T04:18:45.819683",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-31T04:18:49.745933"
            }
          ],
          "text": "Achou paia?"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T04:18:41.689276",
          "text": "Porque tu não conseguiu assistir mais?????"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T04:18:28.048360",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T04:18:00.350557",
          "text": "É férias de trabalho e faculdade"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T04:17:38.697471",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T04:17:25.093624",
          "text": "Eu entendi"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T04:17:13.476543",
          "text": "Férias mas tamo preso"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T04:17:02.242001",
          "text": "Que perfeito"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T04:16:59.770827",
          "text": "Kkkkkkkkkkkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T04:16:53.310740",
          "text": "Daniela*"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T04:16:48.088619",
          "text": "Daniele desabafando"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T04:15:24.932364",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-31T04:16:56.859723"
            }
          ],
          "voice_media": "Media unavailable."
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T04:14:37.583500",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T04:13:18.089243",
          "text": "Aquela lá do professor, não consegui assistir mais kkkkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T04:12:47.466504",
          "text": "Eu preciso achar uma série ou filme q eu goste"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T04:11:53.354328",
          "text": "Mas é tentar ficar de boa"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T04:11:46.450181",
          "text": "Você já deve tá me achando chata falando td dia q quero sair, mas tá osso, é uma tortura"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T04:10:58.599353",
          "text": "Eu tava ouvindo música, na verdade a noite inteira kkk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T04:09:28.741396",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-31T04:11:05.345143"
            }
          ],
          "text": "O que mais tem pra fazer dentro de casa?"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T04:09:16.759450",
          "text": "Mas tu não tá curtindo série, filme, jogo"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T04:07:43.636957",
          "text": "Normal"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T04:06:10.774782",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-31T04:07:32.751365"
            }
          ],
          "text": "Mais com uma menos com outra"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T03:58:48.281463",
          "text": "Verdade, você é bem próximo das suas irmãs tb?"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T03:56:04.651811",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-31T03:58:07.161721"
            }
          ],
          "text": "Mas tu tem sorte que tem alguém pra conversar aí"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T03:52:30.019358",
          "text": "Guento ficar em casa também não"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T03:52:23.355090",
          "text": "Eu te entendi"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T03:51:51.377648",
          "text": "Kkkkkkkkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T03:49:27.081040",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-31T03:51:46.283282"
            }
          ],
          "text": "Já pode acabar"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T03:49:22.420515",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-31T03:51:45.636747"
            }
          ],
          "text": "Mas já deu"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T03:49:19.023102",
          "text": "Dessa quarentena"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T03:49:14.528476",
          "text": "Um lado do bom pelo menos"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T03:48:50.907408",
          "text": "Geralmente não tenho msm"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T03:48:39.388307",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-31T03:48:44.155437"
            }
          ],
          "text": "Não vai ter tempo pra isso"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T03:48:34.150793",
          "text": "Quando você voltar a fazer suas coisas"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T03:48:29.290010",
          "text": "É"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T03:45:09.054035",
          "text": "Kkkkkkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T03:45:06.145091",
          "text": "Mas eu gosto"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T03:45:03.936132",
          "text": "Eu encho o saco"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T03:44:58.580296",
          "text": "Na minha cola"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T03:44:54.414972",
          "text": "É o dia inteiro"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T03:44:41.359873",
          "text": "A Dani então"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T03:44:35.732023",
          "text": "Aqui em casa, até q a gente é unido"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T03:43:41.297013",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-31T03:43:57.712848"
            }
          ],
          "text": "Que coisa boa"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T03:43:38.404167",
          "text": "Aí, quarentena unindo família"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T03:43:23.942907",
          "text": "Ahh ta"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T03:42:27.432557",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T03:41:41.770982",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-31T03:41:50.563330"
            }
          ],
          "text": "Como assim?"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T03:41:32.103444",
          "text": "Oportunista hahahah"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T03:41:26.038131",
          "text": "Q parece cmg kkkkkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T03:41:19.957983",
          "text": "Sim, o único irmão"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T03:41:09.693432",
          "text": "Tá explicado porque esse mlq parece tanto você"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T03:41:01.983600",
          "text": "Aaaahhh"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T03:40:12.345828",
          "text": "Meu pai vai até registrar ela"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T03:40:05.270812",
          "text": "Que é"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T03:40:00.283403",
          "text": "A Sophia"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T03:39:48.088369",
          "text": "Minha mãe o que será que ela quer de mim?"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T03:39:44.915993",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-31T03:39:53.704070"
            }
          ],
          "text": "Adotado"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T03:39:42.739848",
          "text": "Só que tu falou que ele é adorado"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T03:39:35.786557",
          "text": "Eu acho"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T03:39:33.634080",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T03:34:52.731044",
          "text": "Tu acha ele parecido cmg? Kkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T03:34:37.680261",
          "story_share": "Shared deborabasili0's story",
          "text": "",
          "story_share_type": "default"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T03:33:28.617757",
          "text": "Dele"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T03:33:27.462551",
          "text": "Tô com mó sdd"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T03:33:22.880019",
          "text": "Ele tá"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T03:33:20.046638",
          "text": "Qual? O mais novo?"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T03:29:19.292501",
          "text": "E seu irmãozinho, tá bem?"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T02:57:46.030820",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-31T03:14:27.524847"
            }
          ],
          "text": "Bunitin"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T02:33:47.873797",
          "text": "Tô só esse garotinho"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T02:32:56.901711",
          "text": "Simm, feliz dms"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T02:32:40.555028",
          "text": "Kkkkkkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T02:32:38.930082",
          "text": "nem lembro"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T02:29:56.609967",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-31T02:32:21.875187"
            }
          ],
          "text": "Sonhou mais o que?"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T02:29:35.295267",
          "text": "Pegar bus feliz"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T02:29:30.936794",
          "text": "Quando voltar a trabalhar, vai sair de casa felizona"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T02:29:22.276312",
          "text": "Hahaha"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T02:20:27.140148",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-31T02:29:41.350434"
            }
          ],
          "text": "Toda noite eu tô sonhando com coisas nada a haver"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T02:19:37.990764",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-31T02:29:05.770290"
            }
          ],
          "text": "Eu sonhei que eu tava indo trabalhar kkkkkkkkkkkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T02:19:27.604172",
          "text": "Essa noite"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T02:19:11.776160",
          "text": "Vontade de sair q eu tô n tá escrito"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T02:18:53.447650",
          "text": "Tentei assistir a série da Dani mas nem"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T02:18:26.153441",
          "text": "Nadinha mb, só rolando o feed mesmo"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T02:16:59.886762",
          "text": "Você tá fazendo o que????"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T02:16:55.871963",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-31T02:18:02.278503"
            }
          ],
          "text": "Chega de mim"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T02:16:52.444741",
          "text": "Você"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T02:16:24.516128",
          "text": "Depois a gente vai kkk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T02:15:31.719025",
          "text": "Queria muito jogar contigo"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T02:15:10.154320",
          "text": "Kkkkkkkkkkkkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T02:04:26.409901",
          "text": "Tadin kk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T02:04:13.247281",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-31T02:15:06.061763"
            }
          ],
          "media_owner": "Username unavailable.",
          "media_share_caption": "Caption unavailable.",
          "media_share_url": "Media share unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T02:03:16.830794",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-31T02:04:21.302230"
            }
          ],
          "text": "Mas esforçado não deixa de ser"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T02:03:07.291724",
          "text": "Danilo foi comprado 3 vezes..."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T02:03:00.241567",
          "text": "Pegamo 6 agora"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T02:02:51.358133",
          "text": "Kkkkkkkkkkkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T02:01:40.913581",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-31T02:02:47.525989"
            }
          ],
          "media_owner": "apexdazoeira",
          "media_share_caption": "Muito meu squad !! Hahaha ~~~ Marca o amigo noob que tem que te salvar aí ~~~ #################################  #apexlegendsbrasil  #apexlegendscommunity #apexlegendsmeme #apexlegendsbr #apexlegendsbr #ps4vsxboxone #gamerslife #apexlegends #melhorjogo #jogosbr #consoles #xbox #jogosonline #apexmemes #pcgamer #xboxbrasil #ps4brasil  #respawnentertainment #pubgbrasil #fortinitebrasil #callofdutybrasil #melhordomundo #fortnitememe  #rainbowsixsiegebrasil #garotasgamers #gamers",
          "media_share_url": "https://scontent-atl3-2.cdninstagram.com/v/t51.2885-15/e35/64383386_395071021366173_8450208306830536981_n.jpg?_nc_ht=scontent-atl3-2.cdninstagram.com&_nc_cat=109&_nc_ohc=VaxqYJNR4ygAX8cy_Vf&tp=18&oh=8c27419a4f9e55d3049374be4e7bb9e8&oe=5FCAC9CF&ig_cache_key=MjA3NzA4OTUzNDE4MDYzOTI5NA%3D%3D.2"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T01:38:50.344853",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-31T02:02:37.253726"
            }
          ],
          "text": "Acho q você está sendo legal com ele"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T01:37:31.186853",
          "text": "Kkkkkkkkkkkk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T01:34:02.214780",
          "text": "Mas ele é bão"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T01:33:56.197478",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-31T01:37:20.883970"
            }
          ],
          "text": "Brincadeira, só fico zoando ele porque ele fica brabo"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T01:33:21.856557",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-31T01:37:19.433917"
            }
          ],
          "text": "Ele é lixo"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T01:33:17.710360",
          "text": "Não"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T01:28:00.154128",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-31T01:33:37.144957"
            }
          ],
          "text": "N pode desacreditar do menino kkkkkkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T01:27:45.175075",
          "text": "Olha aí, eu disse que vocês iriam conseguir"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T01:25:25.999726",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-31T01:27:33.017472"
            }
          ],
          "text": "Danilo se dedicou"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T01:25:12.741457",
          "text": "O mais difícil que tem"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T01:25:04.290082",
          "text": "Em primeiro"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T01:17:25.580042",
          "text": "Kkkkkkkkkkkkkkkkkkkkk Danilo merece"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T01:17:14.253010",
          "text": "Ou é outro modo"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T01:16:50.093813",
          "text": "Em primeiro?"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T01:16:46.308286",
          "text": "Queeeee"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T01:11:45.860843",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-31T01:16:39.850258"
            }
          ],
          "text": "Primeira vitória do Danilo"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T01:11:41.697389",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-31T01:16:39.486701"
            }
          ],
          "text": "Depois de semanas"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T01:11:22.942535",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-31T01:16:38.502627"
            }
          ],
          "text": "Tu acredita?"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T01:11:14.894290",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-31T01:16:36.747423"
            }
          ],
          "text": "Acabamo de ganhar 1"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T01:11:03.035180",
          "text": "Hahahahahahah"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T00:45:30.157997",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-31T01:11:00.340929"
            }
          ],
          "text": "Depois eu escolher a música"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T00:45:12.756792",
          "text": "E"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T00:45:10.497403",
          "text": "Jogando"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T00:45:08.340272",
          "text": "Virar"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T00:45:05.572508",
          "text": "Hoje é dia de jogar muito"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T00:44:02.992115",
          "text": "É que nem meu avô"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T00:44:00.090146",
          "text": "Kkkkkkkkkkkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T00:43:57.936435",
          "text": "Kkkkkkkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T00:43:57.667401",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-31T00:44:20.029021"
            }
          ],
          "text": "Cocada mano"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T00:43:50.610304",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-31T00:43:55.630684"
            }
          ],
          "text": "Veinha deve tá com a glicose lá em cima"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T00:43:50.080659",
          "text": "Afs kkk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T00:43:42.773228",
          "text": "Lá tinha brigadeiro, cocada, doce de num sei o que"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T00:43:40.559195",
          "text": "Oh mano, queria kk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T00:43:26.609433",
          "text": "A vozinha do Danilo faz um monte de doce kkkkkkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T00:42:58.541745",
          "text": "Queria era um doce"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T00:42:46.566909",
          "text": "Kkkk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T00:42:41.030507",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-31T00:42:44.088502"
            }
          ],
          "text": "Deve estar boa mesmo"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T00:42:35.144529",
          "text": "Cê vai querer a maionese"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T00:42:30.387872",
          "text": "Na madrugada"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T00:42:28.527718",
          "text": "Eu como muito"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T00:42:28.175049",
          "text": "Jaja bate a fome"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T00:42:24.815208",
          "text": "Igual eu disse"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T00:42:21.988365",
          "text": "Já fiz isso"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T00:42:18.303462",
          "text": "N tem problema nenhum msm n"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T00:42:05.572751",
          "text": "Kkkkkkkko"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T00:42:01.772800",
          "text": "Até pra almoçar, eu tô enojada de comida"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T00:41:48.640216",
          "text": "Sempre como um lanche sla"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T00:41:29.382779",
          "text": "Tem tempo"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T00:41:23.160468",
          "text": "Eu n tô c vontade de jantar"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T00:41:15.866744",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-31T00:42:09.313654"
            }
          ],
          "text": "Qual o problema de comer os dois?"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T00:41:07.293204",
          "text": "Comi só coxinha"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T00:41:05.376516",
          "text": "Hahahahahahah"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T00:41:00.350297",
          "text": "Gustavo"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T00:40:58.585197",
          "text": "Kkkkkkkkkkkk não né"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T00:40:53.486790",
          "text": "Guerreira!!"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T00:40:50.676765",
          "text": "Tu comeu coxinha e ainda jantou"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T00:40:39.111639",
          "text": "Adoro ela"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T00:40:36.525616",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-31T00:40:42.330615"
            }
          ],
          "text": "Gente finíssima"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T00:40:33.096410",
          "text": "Vozinha do Danilo fez um rango lá pra gente"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T00:39:45.629477",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-31T00:40:40.018125"
            }
          ],
          "text": "Minha mãe fez tipo uma maionese caseira, mt bomm"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T00:39:14.689421",
          "text": "Já jantou já?"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T00:35:54.891003",
          "text": "Fala"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T00:35:40.536231",
          "text": "Ah sim"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T00:35:22.701927",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-31T00:35:35.722554"
            }
          ],
          "text": "To em casa"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T00:35:20.628455",
          "text": "Não"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T00:34:08.322589",
          "text": "Vcs estão na casa do Danilo né?"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T00:33:34.166694",
          "text": "Povo chato"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T00:33:15.525806",
          "text": "Embaixo*"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T00:32:52.122796",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-31T00:35:16.628498"
            }
          ],
          "text": "Já tá tendo briga aqui em baixo,"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T00:32:23.037062",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-31T00:35:12.632295"
            }
          ],
          "text": "Bixa jogou sujo"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T00:32:13.736271",
          "text": "Pior q ela q foi comprar mesmo kkkkkk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T00:31:00.220185",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-31T00:32:00.582564"
            }
          ],
          "text": "Entendi tudo"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T00:30:53.286452",
          "text": "Ela te ofereceu coxinha né"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T00:28:40.091406",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-31T00:30:30.743867"
            }
          ],
          "text": "Tô de boa com ela já"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T00:27:44.543426",
          "text": "Não vai não"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T00:27:39.510060",
          "text": "Kkkkkk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T00:27:07.425000",
          "text": "Com ela*"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T00:27:04.297111",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-31T00:27:29.060530"
            }
          ],
          "text": "Cê vai fazer as pazes com elas e ela vai ficar brava comigo agora"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-31T00:26:32.088515",
          "text": "Hihihihi"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T00:04:26.171642",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-31T00:01:35.906792",
          "text": "Tava bão"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-30T23:59:36.301845",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-31T00:01:19.473725"
            }
          ],
          "text": "E a coxinha tava boa???"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-30T23:59:29.334522",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-31T00:01:53.553047"
            }
          ],
          "text": "Vou entrar agora"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-30T23:47:55.592952",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-30T23:59:38.128259"
            }
          ],
          "text": "Eaí, já passaram muita raiva com o Danilo? Kkkkkkkkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-30T21:31:47.391943",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-30T21:50:15.225582"
            }
          ],
          "text": "Você ❤️"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-30T21:31:10.549486",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-30T21:31:38.337167"
            }
          ],
          "story_share": "Shared deborabasili0's story",
          "text": "Linda!!"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-30T21:27:34.639138",
          "text": "Viciados que fala né"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-30T21:27:25.418621",
          "text": "Kkkkkkkkkkkk povo lindo"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-30T21:26:38.837363",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-30T21:27:11.049891"
            }
          ],
          "media": "https://scontent-atl3-2.cdninstagram.com/v/t50.2886-16/116099238_147371196993165_8455586860124607974_n.mp4?cb=ae824530-854f1720&efg=eyJxZV9ncm91cHMiOiJbXCJpZ19wcm9ncmVzc2l2ZV91cmxnZW4ucHJvZHVjdF90eXBlLmRpcmVjdF9wZXJtYW5lbnRcIl0ifQ&_nc_ht=scontent-atl3-2.cdninstagram.com&_nc_cat=109&_nc_ohc=oAEKOF5-WUoAX8w15JM&oe=5FA4FD83&oh=d9c88a906641cb64bfe9752a24abe6d0"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-30T21:10:03.871723",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-30T21:25:46.387950"
            }
          ],
          "text": "Eu gosto de Sobradinho, morar no plano é bom só pq ganha tempo mesmo"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-30T20:03:14.214816",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-30T21:09:25.851323"
            }
          ],
          "text": "Ganharia muito tempo!!"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-30T20:03:09.361797",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-30T21:09:25.378343"
            }
          ],
          "text": "Eu quero morar no plano... perto do trampo"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-30T20:02:16.674660",
          "text": "Cidade calma"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-30T20:02:12.274411",
          "text": "É bom né?"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-30T19:44:17.158322",
          "text": "Quero achar um lugar em Sobradinho 1 mesmo"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-30T19:40:21.414069",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-30T19:43:50.729406"
            }
          ],
          "text": "Quais lugares você viu??"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-30T19:40:15.125448",
          "text": "Hmmm"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-30T19:35:39.730641",
          "text": "Ela só quer mudar mesmo, mas tem q procurar tudo certinho"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-30T19:13:32.025713",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-30T19:35:08.611839"
            }
          ],
          "voice_media": "Media unavailable."
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-30T19:05:41.177906",
          "text": "Eu tava vendo com a Dani uns lugares pra alugar, minha mãe tá querendo mudar daqui"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-30T19:03:38.144901",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-30T19:05:15.447820"
            }
          ],
          "text": "E você? O que anda fazendo?"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-30T19:03:31.843177",
          "text": "Terminando uns negocin aqui e já vou partirrr"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-30T19:03:15.955807",
          "text": "Yesss"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-30T18:58:23.956233",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-30T19:03:08.547431"
            }
          ],
          "text": "Mt vontade de ir embora? Kk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-30T18:58:10.504392",
          "text": "E você?"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-30T18:58:07.678762",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-30T19:03:05.034052"
            }
          ],
          "text": "Tô bemm"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-30T18:54:40.164400",
          "text": "Tá bem???"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-30T18:54:34.587053",
          "text": "Boa tarde lindona"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-30T03:52:06.125717",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-30T03:52:25.479519"
            }
          ],
          "text": "Eu vou tentar dormir também, boa noite! Beijo"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-30T03:52:02.888025",
          "text": "Beijo!!"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-30T03:51:52.463756",
          "text": "Boa noite"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-30T03:51:39.514858",
          "text": "Ta bom, n vou demorar mesmo kk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-30T03:51:13.531332",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-30T03:51:40.820510"
            }
          ],
          "text": "Só voltei pra te dar boa noite"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-30T03:51:05.853732",
          "text": "Preciso mesmo"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-30T03:50:58.438164",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-30T03:51:02.803876"
            }
          ],
          "text": "Eu vou esperar"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-30T03:50:47.938705",
          "text": "Não demore tanto pra mandar mensagem"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-30T03:50:12.866050",
          "text": "Tá com sono?"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-30T03:48:54.167767",
          "text": "Conversar sobre isso contg, q agr eu vou mudar isso"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-30T03:48:12.465594",
          "text": "Mas foi muito bom"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-30T03:47:54.496218",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-30T03:51:07.915264"
            }
          ],
          "text": "Agora você precisa dormir"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-30T03:47:39.279297",
          "text": "Kkkkk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-30T03:47:29.740377",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-30T03:47:35.832944"
            }
          ],
          "text": "Serião"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-30T03:47:24.539387",
          "text": "Eu que digo"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-30T03:31:12.931172",
          "text": "Sérião"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-30T03:31:03.146140",
          "text": "Digo o mesmo kk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-30T03:30:43.945424",
          "text": "Eu fico felizao com suas mensagens"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-30T03:30:37.417491",
          "text": "Por favor"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-30T03:29:20.564837",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-30T03:30:38.348185"
            }
          ],
          "text": "Pois então, agora você que lute, q eu vou te mandar mais msgs"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-30T03:28:40.033204",
          "text": "Entendo perfeitamente"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-30T03:28:13.487331",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-30T03:28:22.659900"
            }
          ],
          "text": "Porque eu só me abro com quem vale a pena"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-30T03:28:02.821948",
          "text": "Conheço muita gente, mas pouca gente me conhece de verdade"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-30T03:23:44.237968",
          "text": "N é possível que isso seja raro, mas se for eu tenho mt sorte"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-30T03:22:30.652742",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-30T03:23:21.590799"
            }
          ],
          "text": "E isso é raro"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-30T03:22:15.418682",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-30T03:23:20.982506"
            }
          ],
          "text": "Porque você me entende"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-30T03:22:09.278086",
          "text": "Eu vou"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-30T03:20:51.685493",
          "text": "E eu quero que você se abra cmg tb, pode me falar qualquer coisa sempre que quiser"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-30T03:20:03.696362",
          "text": "Tá bom, cmg também não"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-30T03:19:28.865015",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-30T03:19:33.041285"
            }
          ],
          "text": "Comigo, nunca vai ser..."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-30T03:19:21.302933",
          "text": "Quando uma pessoa afirma alguma coisa, conta alguma coisa, a reação das pessoas é de julgamento/avaliação"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-30T03:18:41.241396",
          "text": "Geralmente"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-30T03:18:39.200035",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-30T03:18:43.830477"
            }
          ],
          "text": "Presta atenção nisso aqui"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-30T03:18:31.831693",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-30T03:18:38.335299"
            }
          ],
          "text": "Quanto mais se abrir comigo, mais vou me abrir contigo"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-30T03:17:22.928565",
          "text": "É q eu sou meio fechada em relação a me abrir de verdade mesmo, pq das outras vezes n deram muito certo, mas eu vou me esforçar pq eu realmente quero mudar isso"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-30T03:14:49.066769",
          "text": "Mas vou mudar isso"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-30T03:14:07.185766",
          "text": "E não mando"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-30T03:14:03.948802",
          "text": "E eu direto n mando msg pq penso mil vezes antes"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-30T03:13:28.430352",
          "text": "Tão bom ler isso, afs kk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-30T03:13:16.220601",
          "text": "É uma necessidade"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-30T03:13:10.142443",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-30T03:13:15.053265"
            }
          ],
          "text": "Eu preciso conversar mais com você!"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-30T03:12:46.874373",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-30T03:12:51.143355"
            }
          ],
          "text": "Quando sentir vontade por favor"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-30T03:12:34.414909",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-30T03:12:41.910384"
            }
          ],
          "text": "Eu quero que você fale"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-30T03:12:31.048878",
          "text": "Não precisa dar desculpas pra falar comigo"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-30T03:11:42.229472",
          "text": "Da minha vida"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-30T03:11:38.649125",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-30T03:11:54.627423"
            }
          ],
          "text": "Foi a desculpa mais bem dada"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-30T03:11:31.760482",
          "text": "KKK"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-30T03:11:28.610539",
          "text": "Free fire"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-30T03:11:18.916267",
          "text": "Enfim, eu vou assumir que eu não gosto mesmo daquele jogo"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-30T03:10:48.363010",
          "text": "Agora eu já falo muito kkkkkkkkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-30T03:10:28.821003",
          "text": "Isso é bom"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-30T03:10:12.688220",
          "text": "Lerdão não"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-30T03:10:05.847411",
          "text": "Eu sou lerdao"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-30T03:10:00.457948",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-30T03:10:21.768384"
            }
          ],
          "text": "Eu tenho q parar, pensar... e aí sim falar"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-30T03:09:50.362520",
          "text": "Kkkkkkkkkkkkk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-30T03:09:35.295586",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-30T03:09:44.614872"
            }
          ],
          "text": "Com eles é cada um puxando um assunto"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-30T03:08:54.508064",
          "text": "Uma conversa, depois outra conversa"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-30T03:08:48.027599",
          "text": "Pra mim é"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-30T03:08:45.714782",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-30T03:09:32.987883"
            }
          ],
          "text": "Eu não consigo, acho que você já percebeu até demais"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-30T03:08:12.352489",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-30T03:08:20.974127"
            }
          ],
          "text": "Porque são 5 opiniões diferentes, interesses diferentes, assuntos diferentes"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-30T03:07:52.250376",
          "text": "Conversar com um é mais prazeroso do que conversar com 5"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-30T03:07:22.460020",
          "text": "E concordo"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-30T03:07:20.474514",
          "text": "Entendi"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-30T03:07:13.224638",
          "text": "Mas você me entendeu"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-30T03:07:07.285398",
          "text": "Dms"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-30T03:07:04.346579",
          "text": "Gosto deles"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-30T03:06:58.372421",
          "text": "N graça kk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-30T03:06:45.611878",
          "text": "Pq com os meninos na ligação"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-30T03:06:32.439606",
          "text": "Conversar com você q nem aquele dia"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-30T03:06:17.181818",
          "text": "Depois quero ligar pra você kk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-30T03:06:07.372587",
          "text": "Pois é"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-30T03:05:56.648840",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-30T03:06:00.614712"
            }
          ],
          "text": "O erro vem dos outros de não pensar da mesma forma"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-30T03:05:46.061920",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-30T03:05:50.307233"
            }
          ],
          "text": "Sua atitude tá certa"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-30T03:05:41.609771",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-30T03:05:43.787180"
            }
          ],
          "text": "Não"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-30T03:05:35.506562",
          "text": "N compensa"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-30T03:05:30.170738",
          "text": "Faz mal"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-30T03:05:28.416716",
          "text": "N mano, isso é ruim dms"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-30T03:05:01.916280",
          "text": "Mostra que você não tem rancor"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-30T03:04:55.264439",
          "text": "Isso é bom"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-30T03:03:50.445824",
          "text": "Kkkkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-30T03:03:45.649363",
          "text": "Odeio isso"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-30T03:03:42.186019",
          "text": "Ficar com raiva por muito tempo"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-30T03:03:36.099904",
          "text": "E eu tb n consigo"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-30T03:01:40.568064",
          "text": "As coisas"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-30T03:01:38.409235",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-30T03:04:52.148329"
            }
          ],
          "text": "Eu n consigo dormir sem antes resolver"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-30T03:01:27.166482",
          "text": "Mas quando eu realmente gosto de uma pessoa"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-30T03:01:15.274057",
          "text": "Eu já fui muito orgulhosa"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-30T03:01:01.700610",
          "text": "Pedindo desculpa"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-30T03:00:55.841128",
          "text": "Ele ligou agorinha"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-30T03:00:48.908091",
          "text": "Tá te ligando ainda?"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-30T03:00:39.905792",
          "text": "Guento n"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-30T03:00:37.194963",
          "text": "Kkkkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-30T03:00:35.676039",
          "text": "Vitor Hugo é engraçado dms"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-30T03:00:01.925518",
          "text": "Good"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-30T02:59:14.482916",
          "text": "Ela é muito de boa"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-30T02:59:11.224724",
          "text": "Tô falando com ela aqui kk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-30T02:57:46.391738",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-30T02:59:28.370981"
            }
          ],
          "text": "E ela vai ficar feliz com a mensagem"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-30T02:57:37.619898",
          "text": "Ela gosta de você"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-30T02:57:18.007252",
          "text": "Pra n ter nenhum mal entendido"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-30T02:56:58.574448",
          "text": "Falando q gosto dela"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-30T02:56:40.495306",
          "text": "Kkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-30T02:56:28.777114",
          "text": "Eu mandei msg pra Geórgia"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-30T02:56:16.316615",
          "text": "Você que é"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-30T02:53:21.443949",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-30T02:55:49.998417"
            }
          ],
          "text": "Todos deveriam te dar valor!!"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-30T02:53:12.506959",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-30T02:55:52.512398"
            }
          ],
          "text": "Mas tu é demais, serião"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-30T02:52:28.494593",
          "text": "Hahahahah"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-30T02:51:36.774291",
          "text": "Oh Deus"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-30T02:51:33.453813",
          "text": "KKK"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-30T02:51:32.529564",
          "text": "Tá q me liga"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-30T02:51:29.697882",
          "text": "Vitor Hugo"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-30T02:51:24.619144",
          "text": "Own, perfeito"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-30T02:50:29.780069",
          "text": "E se tu gosta desse meu jeito, pra mim é suficiente"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-30T02:50:14.430303",
          "text": "Sim, fica tudo bem"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-30T02:48:24.570538",
          "text": "E tudo vai ficar de boa"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-30T02:48:18.458248",
          "text": "Depois vou falar com o Vitor"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-30T02:48:11.258127",
          "text": "E aí"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-30T02:48:06.065643",
          "text": "Mas é que quando eu n curto uma brincadeira eu corto"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-30T02:47:35.747833",
          "text": "Ainda bem kkkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-30T02:47:33.001516",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-30T02:49:39.521548"
            }
          ],
          "text": "Só disse a verdade kk, seu jeito é lindo, você sabe"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-30T02:46:34.876221",
          "text": "Eles já sabem"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-30T02:46:32.347272",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-30T02:46:39.786885"
            }
          ],
          "text": "Que bom ler isso..."
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-30T02:45:46.611421",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-30T02:46:35.809394"
            }
          ],
          "text": "Fala pros meninos pra mim que eu n tô com raiva deles n, vai que eles pensam q sla"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-30T02:45:09.312118",
          "text": "Mas com ela eu resolvo kk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-30T02:45:00.704147",
          "text": "E com a minha irmã"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-30T02:44:47.353358",
          "text": "Vou falar com ele"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-30T02:44:43.990040",
          "text": "Mas depois"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-30T02:44:41.746712",
          "text": "Hoje"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-30T02:44:37.779139",
          "text": "E os meninos são massa sim, eu  só fiquei c raiva do Vitor Hugo"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-30T02:43:25.798849",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-30T02:45:20.734899"
            }
          ],
          "text": "Seria só mais um amigo do Vitor"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-30T02:43:12.636871",
          "text": "De jeito nenhum"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-30T02:43:09.397393",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-30T02:45:19.036548"
            }
          ],
          "text": "Se você fosse diferente eu tenho ctz q n teria notado você"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-30T02:42:24.424251",
          "text": "Oh mano, você demais, e percebi isso desde o início"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-30T02:41:37.387792",
          "text": "Mas eu prefiro ter seu respeito do que vacilar zuando errado"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-30T02:41:25.989400",
          "text": "Talvez não esteja sendo tão engraçado, falando pouco etc"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-30T02:41:07.678083",
          "text": "Pq assim"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-30T02:41:00.582477",
          "text": "Zuar com tudo é de boa, mas eu n consigo zuar com tudo tudo"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-30T02:40:18.194943",
          "text": "Mano"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-30T02:40:01.289486",
          "text": "Você se importar com isso diz muito sobre, admiro muito"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-30T02:38:54.060722",
          "text": "Mas tudo que eu falo com eles é 200% brincadeira"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-30T02:38:01.184860",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-30T02:39:02.029825"
            }
          ],
          "text": "Pra mim é"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-30T02:37:56.002108",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-30T02:39:01.407918"
            }
          ],
          "text": "Talvez pra eles não seja tão importante teu julgamento"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-30T02:37:38.807977",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-30T02:40:13.424657"
            }
          ],
          "text": "Quando eu falei que eles não tem critério, eu tava falando sério... eles vão zuar com tudo"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-30T02:37:02.471844",
          "text": "Sério"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-30T02:36:57.796197",
          "text": "Entendo muito, você é incrível"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-30T02:36:44.252918",
          "text": "Entende isso?"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-30T02:36:34.959435",
          "text": "Na tua frente... eu não vou falar merda(ou pouca)"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-30T02:35:52.940960",
          "text": "Eu tenho que medir isso"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-30T02:35:49.270115",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-30T02:36:32.187959"
            }
          ],
          "text": "De um lado eu tenho uma galera que só fala merda, e de outro você..."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-30T02:35:19.232162",
          "text": "Quando eu to conquistando uma amizade, eu não costumo desperdiçar palavras"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-30T02:35:04.450483",
          "text": "Entendo, a zueira de vocês é pesada"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-30T02:34:46.119633",
          "text": "Dificuldade de explicar...."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-30T02:34:32.820188",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-30T02:34:45.816219"
            }
          ],
          "text": "Tipo assim"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-30T02:34:30.581829",
          "text": "Mano, se eu for zuar com você do jeito que eu costumo zuar com eles, não vai ser muito agradável"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-30T02:30:56.889765",
          "text": "Q vc n falou nd"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-30T02:30:46.694376",
          "text": "Percebi"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-30T02:30:40.182763",
          "text": "Kkkkkkkkkkkk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-30T02:30:36.497738",
          "text": "Kkkkkkkkkkkk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-30T02:30:33.359221",
          "text": "Porque com eles eu falo muita bosta"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-30T02:30:24.628992",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-30T02:30:30.550350"
            }
          ],
          "text": "Eu filtrei muita coisa"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-30T02:29:51.354785",
          "text": "Danilo não joga tão mal assim"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-30T02:29:21.701343",
          "text": "Que você ficou calado quando tava jogando kkkk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-30T02:28:28.352457",
          "text": "Falai"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-30T02:28:26.466513",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-30T02:29:58.632754"
            }
          ],
          "text": "Mas tá pensando em alguma coisa?"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-30T02:28:21.182588",
          "text": "Uhum, daqui a pouco"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-30T02:26:18.032369",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-30T02:28:14.706467"
            }
          ],
          "text": "Nada tbm, Jaja cê vai dormir né"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-30T02:24:48.650498",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-30T02:25:57.760825"
            }
          ],
          "text": "Nadinha, e você?"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-30T02:23:49.095603",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-30T02:24:48.160764"
            }
          ],
          "text": "Tá fazendo oq?"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-30T02:21:38.649535",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-30T02:22:19.826640"
            }
          ],
          "text": "Tá bom"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-30T02:18:46.376404",
          "text": "É sério, eu tô de boa msm, só sai da ligação pq já ia sair"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-30T02:18:09.041091",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-30T02:18:15.073552"
            }
          ],
          "text": "Qualquer coisa fala aí"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-30T02:18:00.876039",
          "text": "Só isso?"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-30T02:15:18.603625",
          "text": "Mas n tô com raiva do Danilo e Lucas n"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-30T02:15:04.064964",
          "text": "Enchendo meu saco"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-30T02:14:45.068014",
          "text": "Ela tava te zuando na chamada?"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-30T02:14:38.398166",
          "text": "Hmmm pode crê"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-30T02:13:08.050656",
          "text": "Não eu tô bolada com eles não, só com a Dani só"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-30T02:12:54.986353",
          "text": "Nem tava prestando atenção na conversa"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-30T02:12:38.438569",
          "text": "Que que houve?"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-30T02:12:33.906259",
          "text": "Ou tá bolada mesmo?"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-30T02:12:30.544852",
          "text": "Tá tirando onda com eles?"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-30T02:12:21.146409",
          "text": "N entendi direito"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-30T02:12:11.345897",
          "text": "Os meninos falaram pra você me ligar? Kk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-30T02:11:06.064818",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-30T02:11:48.759340"
            }
          ],
          "media": "https://scontent-atl3-2.cdninstagram.com/v/t51.2885-15/e35/116042712_180942303420386_8565029863530842421_n.jpg?_nc_ht=scontent-atl3-2.cdninstagram.com&_nc_cat=102&_nc_ohc=7N3XYoHIXWcAX9IYP2Q&tp=18&oh=049d64f9ffb66f49950f076d34348895&oe=5FCD152F&ig_cache_key=MjM2NDM3MTQ4MDIxMjMzNzkxOA%3D%3D.2"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T22:09:15.480835",
          "video_call_action": "deborabasili0 ended a video call"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T22:07:47.376311",
          "video_call_action": "gustavorinaldii started a video call"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T22:07:11.298936",
          "video_call_action": "deborabasili0 ended a video call"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T22:06:45.741557",
          "video_call_action": "deborabasili0 started a video call"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T22:06:42.868047",
          "video_call_action": "deborabasili0 ended a video call"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T22:06:11.416116",
          "video_call_action": "deborabasili0 started a video call"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T21:49:43.712424",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-29T21:50:21.723166"
            }
          ],
          "text": "Terminar me liga"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T21:49:40.158210",
          "text": "No seu tempo"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T21:44:10.937190",
          "text": "terminei agora, vou só comer alguma coisa aqui"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T18:36:44.293357",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-29T18:36:49.625833"
            }
          ],
          "text": "Tá bom"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T18:36:29.720618",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-29T18:36:34.505601"
            }
          ],
          "text": "manda mensagem"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T18:36:26.335381",
          "text": "umas 18h"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T18:36:20.745717",
          "text": "Kkkkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T18:36:15.414453",
          "text": "Tá bomm, te encher um saco um pouco"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T18:35:36.039384",
          "text": "liga ai mais tarde..."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T18:35:28.985553",
          "text": "demorou!!!"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T18:34:20.096172",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-29T18:35:46.696187"
            }
          ],
          "text": "Hoje eu tô bem, jaja vou é estudar untiquin"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T18:34:00.835273",
          "text": "Mais um dia"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T18:33:58.576087",
          "text": "Me contentar e ficar em casa"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T18:33:49.638949",
          "text": "Mas é assim mesmo"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T18:33:25.309364",
          "text": "É mano, é isso e muito mais"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T18:33:19.864058",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-29T18:33:32.414578"
            }
          ],
          "text": "mete bronca!!!!!"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T18:32:16.181190",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-29T18:32:53.641575"
            }
          ],
          "text": "\"mãe, eu jamais saberei como funciona esse instinto de proteção, mas eu entendo, caso contrário te desobedeceria ainda assim. mas peço que entenda, que esse vírus nada mais é do que a limitação da minha liberdade!\""
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T18:29:39.773180",
          "text": "É só por conta desse maldito vírus"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T18:29:27.563639",
          "text": "Ela n é de controlar minha vida n"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T18:29:15.409864",
          "text": "Já pedi, já fiz tudo que ela me pediu hj"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T18:28:56.586457",
          "text": "Com ela não adianta muito"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T18:27:31.878049",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-29T18:28:27.603969"
            }
          ],
          "text": "escute, compreenda e concorde"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T18:27:18.259812",
          "text": "quer a boa vontade das pessoas?"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T18:27:10.630319",
          "text": "ideia de vida"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T18:27:00.859733",
          "text": "vou te dar um macete"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T18:26:01.419796",
          "text": "Seria uma boa"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T18:25:57.618314",
          "text": "de a ela algo que ela precisa"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T18:25:54.575977",
          "text": "mas tu tem que convencer tua mãe"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T18:25:44.971167",
          "text": "e a gente joga hojeeeee"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T18:25:42.123964",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-29T18:25:50.635048"
            }
          ],
          "text": "da o role com o vito, faz a média"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T18:25:16.199678",
          "text": "faz o seguinte"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T18:23:40.128297",
          "text": "N vou sossegar enquanto n jogar esse jg"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T18:23:22.240560",
          "text": "Sem falar q eu queria jogar"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T18:22:21.632793",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-29T18:24:37.031522"
            }
          ],
          "voice_media": "Media unavailable."
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T18:21:45.347176",
          "text": "Isso é bom"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T18:21:22.306636",
          "text": "Tá bom Gustavo kkkk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T18:20:44.628698",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-29T18:20:55.312299"
            }
          ],
          "text": "não acontecerá novamente"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T18:20:41.673063",
          "text": "eu tenho que controlar esse tipo de situação"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T18:20:35.962702",
          "text": "é sério pra mim"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T18:19:49.082601",
          "text": "Kkkkkkkkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T18:19:46.279127",
          "text": "Eu já falei sabendo"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T18:19:35.883442",
          "text": "N conta sla kk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T18:19:27.607952",
          "text": "Eu falaria"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T18:19:21.431381",
          "text": "Se fosse algo sério"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T18:19:06.651956",
          "text": "Até parece"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T18:19:02.549244",
          "text": "Kkkkkkk oh Gustavo"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T18:18:20.035145",
          "text": "mas eu que vacilei, deveria ter pensado mais antes de falar"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T18:16:47.926263",
          "text": "a gente da um jeito"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T18:16:45.835947",
          "text": "tu não precisa do pc dele... mas ainda vai jogar com a gente depois"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T18:16:00.151007",
          "text": "relaxou"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T18:14:08.051995",
          "text": "N sei se minha mãe vai deixar eu sair p jogar"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T18:13:51.979669",
          "text": "A gente ta falando de outra coisa já kkkk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T18:13:27.034180",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-29T18:13:32.427549"
            }
          ],
          "text": "ele falou mais alguma coisa?"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T18:13:23.952792",
          "text": "e ai?"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T18:12:41.475599",
          "text": "Kkkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T18:12:39.361092",
          "text": "Mas já pedi desculpa p ele"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T18:12:16.723427",
          "text": "Eu n falo tudo q ele fala, só falei algo q ele n ligaria kkkkkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T18:11:49.855876",
          "text": "Foi"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T18:11:48.896736",
          "text": "Q nada"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T18:11:47.399500",
          "text": "Kkk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T18:11:33.420001",
          "text": "mas ele falou isso agora?"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T18:11:31.116634",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-29T18:11:41.316745"
            }
          ],
          "text": "ele ta com ciúmes da amiga dele"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T18:11:28.810370",
          "text": "?"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T18:11:27.622882",
          "text": "Tu n acha"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T18:11:22.692782",
          "text": "Da parte dele"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T18:11:16.375143",
          "text": "Audácia"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T18:11:14.331182",
          "text": "Muita"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T18:11:11.849079",
          "text": "Falando que você n sabe jogar po"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T18:10:40.679977",
          "text": "Ele q lute"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T18:10:36.482049",
          "text": "Marrapaiz"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T18:10:31.781366",
          "text": "Ele tá de boa"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T18:10:29.283724",
          "text": "Relaxa kkk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T18:10:11.314707",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-29T18:10:23.409753"
            }
          ],
          "text": "deixa eu pensar..."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T18:10:06.864963",
          "text": "hmmm"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T18:09:51.066014",
          "text": "Kkkkkkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T18:09:49.437771",
          "text": "Mas eu já pedi desculpa, deveria ter te consultado antes"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T18:09:30.275754",
          "text": "coincidência"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T18:09:20.274335",
          "text": "mas que eu saquei"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T18:09:12.765630",
          "text": "fala que tu não me contou"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T18:09:05.746630",
          "text": "eu falei pra ele hoje: arranja um mic bom ai que a Débora vai jogar no seu lugar hoje"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T18:08:44.323463",
          "text": "porque"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T18:08:31.649869",
          "text": "que tu falou só que ele um dia ia deixar você jogar"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T18:08:12.063243",
          "text": "fala assim"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T18:07:39.875635",
          "text": "Ontem"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T18:07:36.329694",
          "text": "Kkkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T18:07:33.730289",
          "text": "Que eu falei o q ele falou"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T18:07:17.155846",
          "text": "que que ele falou pra tu?"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T18:06:05.828642",
          "text": "KKKKKKK"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T18:06:02.056848",
          "text": "Você n conta"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T18:05:58.429475",
          "text": "Quando eu te falar as coisas aliado"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T18:05:42.012792",
          "media": "https://scontent-atl3-2.cdninstagram.com/v/t51.2885-15/e35/116017466_165008451755625_2902366267971428161_n.jpg?_nc_ht=scontent-atl3-2.cdninstagram.com&_nc_cat=109&_nc_ohc=DNGlBoXfNnsAX_We3Ig&tp=18&oh=03202ee16b807ecd50d8b90af2a93d91&oe=5FCBFAC6&ig_cache_key=MjM2NDEyNzE2OTc4MDYyNjE3Nw%3D%3D.2"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T07:45:00.448764",
          "text": "Beijo!"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T07:44:55.933323",
          "text": "Boa noite"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T07:44:46.668851",
          "text": "Boa noite! Bjoo"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T07:44:33.915379",
          "text": "Tá bom, vou ver com a minha mãe"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T07:44:12.816618",
          "text": "Vamo tentar jogar amanhã..."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T07:44:00.033082",
          "text": "Demorou"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T07:42:36.858163",
          "text": "Kkkkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T07:42:35.405938",
          "text": "Sim, é melhor você descansar"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T07:42:09.150329",
          "text": "Já são 5"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T07:41:47.034060",
          "text": "Tenho ctz"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T07:41:44.369251",
          "text": "Você que tá caindo de sono"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T07:40:38.218723",
          "text": "Kk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T07:40:36.703699",
          "text": "Eu vou jaja"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T07:40:07.138051",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-29T07:40:19.878071"
            }
          ],
          "text": "E você garotinha... tem que ir dormir também"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T07:39:27.104328",
          "text": "Kkkkk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T07:39:18.764547",
          "text": "Tamo juntao"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T07:39:13.126406",
          "text": "Tamo aí pra isso!"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T07:38:59.455534",
          "text": "❤️"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T07:38:40.863684",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T07:38:30.146527",
          "text": "❤️❤️❤️❤️❤️"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T07:38:29.172013",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-29T07:38:49.607384"
            }
          ],
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T07:37:25.470499",
          "text": "Fica relaxada, eu falei o suficiente por hoje"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T07:36:59.771053",
          "text": "Pode dormir com a consciência tranquila"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T07:36:51.682311",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T07:36:37.898257",
          "text": "Relaxa"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T07:36:35.530522",
          "text": "To zoando"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T07:36:09.074987",
          "text": "Kkkkkkkkkkkkkkkkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T07:36:02.893878",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T07:35:55.423026",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T07:35:48.673818",
          "text": "Ele costuma ser direto"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T07:35:41.375858",
          "text": "Cuidado ein"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T07:35:21.030697",
          "text": "Hihihihihi"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T07:35:14.938411",
          "text": "E te mando"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T07:35:11.429551",
          "text": "Eu vou pegar essas perguntas com ele"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T07:35:02.686504",
          "text": "Opa"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T07:34:44.143588",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-29T07:34:59.066456"
            }
          ],
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T07:34:28.251720",
          "text": "Tem certeza???"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T07:34:13.143276",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-29T07:34:23.052244"
            }
          ],
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T07:34:00.975774",
          "text": "Porque ele tá esperando uma resposta"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T07:33:53.814617",
          "text": "Eu te aconselho me autorizar a falar alguma coisa"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T07:33:39.526440",
          "text": "Ele me autorizou falar isso pra você"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T07:33:30.190033",
          "text": "Mas"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T07:32:59.673443",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T07:32:41.116756",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T07:32:31.396556",
          "text": "O mesmo serve pra você"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T07:32:26.076793",
          "text": "Ele só vai saber o que você autorizar"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T07:32:16.986025",
          "text": "Fale a vontade"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T07:31:47.365294",
          "text": "Assim como estou sendo com ele"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T07:31:40.658921",
          "text": "Se quer que eu não fale, vou ser leal a você"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T07:31:24.384731",
          "text": "Não quero que você deixe de perguntar/falar o que quer saber"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T07:30:46.797866",
          "text": "Presta atenção"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T07:30:43.368157",
          "text": "Não olha"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T07:30:25.416263",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T07:30:16.262061",
          "text": "Lasquera"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T07:30:13.627316",
          "text": "Kkkkkkkkkkkkkkkk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T07:29:50.735584",
          "text": "Considere falado"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T07:29:44.573063",
          "text": "E ele é leal a mim"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T07:29:40.181016",
          "text": "Eu sou leal a ele"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T07:29:14.575964",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T07:28:48.120943",
          "text": "Próxima?"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T07:28:45.303820",
          "text": "Várias curiosidades einn"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T07:28:24.907102",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T07:27:56.538058",
          "text": "Qual a preocupação? Você acha que ele vai mudar de ideia tão rápido assim?"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T07:27:43.610151",
          "text": "Oxiii"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T07:27:28.668884",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T07:27:20.184387",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T07:27:10.218932",
          "text": "Psicólogo formado pela vida"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T07:26:44.153596",
          "text": "Kkkkkkkkkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T07:26:39.261745",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-29T07:26:58.311794"
            }
          ],
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T07:26:19.212092",
          "text": "Pode ter certeza"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T07:26:14.260368",
          "text": "Na cabeça dela"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T07:26:11.884178",
          "text": "Que tá passando um monte de coisa"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T07:26:06.722572",
          "text": "Esse é o momento"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T07:25:16.402012",
          "text": "Cruel"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T07:25:11.549334",
          "text": "É isso aí"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T07:25:03.750978",
          "text": "E o ser humano é cruel"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T07:24:59.361612",
          "text": "Kkkkkkkkkkkkk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T07:24:52.011771",
          "text": "A realidade assusta"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T07:24:48.797236",
          "text": "A verdade impressiona as vezes"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T07:24:34.229357",
          "text": "É fia"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T07:24:18.724125",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T07:24:05.433751",
          "text": "Kkkkkk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T07:23:29.102157",
          "text": "Amanhã a graça volta"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T07:23:25.873526",
          "text": "Pois é"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T07:23:10.121770",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-29T07:23:20.119478"
            }
          ],
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T07:23:08.111064",
          "text": "Então"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T07:22:42.358561",
          "text": "To te falando a verdadezinha"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T07:22:37.194496",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-29T07:22:53.530419"
            }
          ],
          "voice_media": "Media unavailable."
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T07:22:20.883851",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T07:22:11.174773",
          "text": "Magnífica?"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T07:22:01.868029",
          "text": "Interessante?"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T07:21:58.160632",
          "text": "Legal?"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T07:21:58.008615",
          "text": "Kkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T07:21:54.709757",
          "text": "Só p finalizar"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T07:21:47.949060",
          "text": "Outro"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T07:21:39.306503",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T07:21:28.828962",
          "text": "Bonita"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T07:21:12.635579",
          "text": "Hmmmm, um adjetivo?"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T07:20:57.668814",
          "text": "Resposta superficial: só falou bem de você"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T07:20:43.060116",
          "text": "Estou me sentindo coagida"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T07:20:33.887740",
          "text": "Aqui"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T07:20:30.943154",
          "text": "Me obrigando"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T07:20:27.751342",
          "text": "Kkkkkkkk a Dani"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T07:20:23.228573",
          "text": "Saber"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T07:20:20.631352",
          "text": "Não exclua as mensagens"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T07:20:14.734595",
          "text": "Ei"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T07:20:06.808001",
          "text": "Então tá bom kk, ela que queria sabe kk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T07:19:48.337536",
          "text": "Que doideira"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T07:19:42.792290",
          "text": "Não véi"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T07:18:52.187898",
          "text": "Da Dani"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T07:18:50.141654",
          "text": "A pauta aqui são as dúvidas"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T07:18:23.039116",
          "text": "Vocês vão fazer na ligação"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T07:18:15.091287",
          "text": "E essas perguntas"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T07:18:07.416579",
          "text": "Essas informações vocês terão que tirar a partir das perguntas corretas"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T07:17:42.464262",
          "text": "Valiosas"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T07:17:40.338356",
          "text": "Quais são as informações"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T07:17:35.021308",
          "text": "O que tu quer saber?"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T07:17:29.911043",
          "text": "Falar o que mulher"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T07:17:21.946483",
          "text": "Fala pra gente"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T07:17:15.593214",
          "text": "Então"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T07:17:13.232526",
          "text": "Eu imaginei kk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T07:17:00.705272",
          "text": "Mas agora se eu começar a falar eu vou acordar geral"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T07:16:38.479413",
          "text": "A gente fala sobre"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T07:16:33.852468",
          "text": "Amanhã"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T07:16:32.035423",
          "text": "Se quiserem ligar"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T07:16:29.222527",
          "text": "😒"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T07:16:22.984981",
          "text": "Relaxou"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T07:16:15.200214",
          "text": "Não afoba"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T07:16:12.640295",
          "text": "Não, calmaaaaaaaa"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T07:15:14.129417",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T07:14:45.242787",
          "text": "Ok"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T07:14:42.862031",
          "text": "Então isso é tudo???"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T07:14:38.298550",
          "text": "Vocês estão perdendo a oportunidade de alcançar informações absurdas extremamente relevantes"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T07:13:46.828932",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T07:13:09.955714",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-29T07:13:25.229548"
            }
          ],
          "text": "Deu pra entender????"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T07:13:04.644801",
          "text": "É simplesmente uma zueira criada pelos amigos na tentativa de querer ridicularizar o mlq ou fazer nascer dali a oportunidade de algo novo"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T07:12:05.140726",
          "text": "A montagem"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T07:11:56.088515",
          "text": "Papo reto agora"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T07:11:53.129499",
          "text": "Não"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T07:11:37.636477",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T07:11:32.168034",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T07:11:21.357999",
          "text": "Vocês querem saber da montagem"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T07:11:12.323650",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T07:10:32.220272",
          "text": "Acho que a nossa conversa tomou um rumo avançado demais"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T07:09:54.967438",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T07:09:43.894066",
          "text": "Aproveita que eu to na boa vontade"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T07:09:36.443722",
          "text": "Faça a pergunta correta"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T07:09:24.533502",
          "text": "Tu quer saber mais"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T07:09:21.700233",
          "text": "Beijo não"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T07:08:56.332249",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T07:08:31.461744",
          "text": "O surgimento dessas zoações foi ocasionado pela falta de senso crítico desenterrado através de um pensamento errôneo de querer lascar a vida do outro"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T07:05:47.846357",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T07:05:24.999048",
          "text": "Pergunta difícil do caçamba"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T07:04:39.502104",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T07:03:42.608031",
          "text": "Talvez tenham a resposta que querem"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T07:03:31.861836",
          "text": "Quando vocês fizerem a pergunta correta"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T07:02:29.217917",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T07:02:10.635143",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T07:01:51.880241",
          "text": "Ela quer saber mais"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T07:01:49.051262",
          "text": "Ela não quer dormir"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T07:01:31.838369",
          "text": "Você"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T07:01:30.415862",
          "text": "Eu não né"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T07:01:27.046761",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T07:01:14.262940",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-29T07:01:25.684597"
            }
          ],
          "text": "Tu é má"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T07:00:59.965006",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-29T07:01:08.484009"
            }
          ],
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T07:00:46.857191",
          "text": "Relaxou"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T07:00:44.321391",
          "text": "Era uma conversa nossa"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T07:00:40.021548",
          "text": "Eu não falei nada distorcido do que você me falou"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T07:00:22.908531",
          "text": "Não"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T06:59:54.484449",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T06:59:26.056180",
          "text": "Durma bem"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T06:59:24.247336",
          "text": "Boa sorte"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T06:59:21.425587",
          "text": "E eu apaguei as dele também"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T06:59:15.953376",
          "text": "A gente conversou"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T06:58:43.426423",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T06:58:20.360878",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T06:58:01.499441",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T06:58:01.312033",
          "text": "😢😢😢😢"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T06:57:50.389572",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T06:57:41.160516",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T06:57:37.697015",
          "text": "Kkkkkkkkkkkkkkkkkkkkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T06:57:23.889723",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T06:57:11.056684",
          "media": "https://scontent-atl3-2.cdninstagram.com/v/t51.2885-15/e35/116032675_2719860954998861_7428734196950481694_n.jpg?_nc_ht=scontent-atl3-2.cdninstagram.com&_nc_cat=105&_nc_ohc=aT1wD0x0Ht4AX-hS0Xb&tp=18&oh=2b629577338b08df9d218d9b903398bd&oe=5FCBC1C7&ig_cache_key=MjM2Mzc5MDY5NDkxMjEzNzM5MA%3D%3D.2"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T06:56:47.638058",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T06:56:36.124094",
          "text": "Quer print da conversa?"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T06:56:05.286271",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T06:55:47.002470",
          "text": "Vocês são demais!"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T06:54:55.192685",
          "text": "Kkkkkkkkkkkkkkkkkkkkkkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T06:54:38.029796",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T06:54:19.184904",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-29T06:54:45.494170"
            }
          ],
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T06:54:01.873133",
          "text": "Eu acho que ela não quer entender"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T06:53:39.829903",
          "text": "Boa noite, tenho certeza que a dúvida ficou maior depois que eu falei tudo isso"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T06:53:29.748881",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-29T06:53:45.832348"
            }
          ],
          "voice_media": "Media unavailable."
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T06:53:14.504503",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T06:52:53.370041",
          "text": "Por acaso"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T06:52:50.625230",
          "text": "É"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T06:52:48.086136",
          "text": "Nada"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T06:52:45.587128",
          "text": "Débora tem razão"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T06:52:43.117514",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-29T06:53:05.672446"
            }
          ],
          "voice_media": "Media unavailable."
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T06:52:23.724109",
          "text": "Kkkkkkk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T06:52:03.626866",
          "text": "Aleatório não né"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T06:52:00.285189",
          "text": "Não"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T06:51:49.525050",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T06:51:19.980918",
          "text": "Já falei"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T06:51:17.810052",
          "text": "Foi sequelagem"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T06:51:11.824421",
          "text": "A montagem"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T06:50:55.110397",
          "text": "Olha ela se fazendo"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T06:50:51.416647",
          "text": "Kakakaakakak"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T06:50:42.765856",
          "text": "Kkkkkkkkkkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T06:50:35.487001",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-29T06:50:48.441768"
            }
          ],
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T06:50:10.999699",
          "text": "Tem piada interna nenhuma, só realidade"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T06:49:47.037878",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T06:49:36.065450",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T06:49:23.188145",
          "text": "Qual dia?"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T06:48:39.959148",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T06:48:09.927138",
          "text": "Valeuuuu"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T06:48:04.075045",
          "text": "Mas a pergunta não foi feita da maneira correta"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T06:47:55.099797",
          "text": "Tem resposta"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T06:46:49.061154",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T06:46:22.189381",
          "text": "To processando as informações"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T06:46:16.678594",
          "text": "Calma"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T06:45:39.706500",
          "text": "Nada disso"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T06:45:39.583271",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T06:45:17.701428",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T06:45:12.162662",
          "text": "Vocês conspirando as coisas"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T06:45:07.458581",
          "text": "Tu não tem noção"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T06:45:02.485938",
          "text": "Eu to rachando demais com isso"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T06:44:51.995636",
          "text": "Sejam menos..."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T06:44:51.268844",
          "text": "Vocês são inteligentes demais"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T06:44:41.778648",
          "text": "Kkkkkkkkkkkkkkkkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T06:44:13.908308",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T06:38:58.896124",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T06:38:03.734641",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T06:37:37.420250",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T06:37:22.089455",
          "text": "Kkkkkkkkkkkkkkkkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T06:37:13.068272",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T06:37:06.000691",
          "text": "Ops"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T06:36:56.560111",
          "text": "Ou as vezes não né"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T06:36:35.142716",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T06:36:06.912441",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-29T06:36:43.899587"
            }
          ],
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T06:35:42.600883",
          "text": "Mas o que que ela sabe?"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T06:35:29.357581",
          "text": "Que doideira é essa"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T06:34:15.252918",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T06:34:11.863432",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T06:33:55.863511",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-29T06:34:03.498185"
            }
          ],
          "text": "Vocês tem que entender eles não tem critério pra zuar... eles vão zuar com tudo"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T06:33:15.966147",
          "text": "E gostam de zoar com tudo"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T06:33:11.062786",
          "text": "Que eles são sequelados"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T06:33:04.175494",
          "text": "Da pra concluir"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T06:33:00.655790",
          "text": "Sendo qualquer um dos dois"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T06:32:44.318538",
          "text": "Ué"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T06:32:30.156875",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T06:32:29.494989",
          "text": "Kkkkkkkkkkkkk na moral"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T06:31:45.754188",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-29T06:32:21.733062"
            }
          ],
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T06:31:40.059749",
          "text": "Quem fez?"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T06:31:38.042262",
          "text": "Ele não fez a montagem"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T06:31:21.864114",
          "text": "Ué"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T06:30:39.314321",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T06:30:33.902591",
          "text": "Kkkkkkkkkkkkkk eu to rindo demais"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T06:30:10.003643",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T06:29:51.989589",
          "text": "Ela vai ter que perguntar pra ele"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T06:29:48.675309",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T06:29:46.312602",
          "text": "Então"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T06:29:25.601792",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T06:29:04.462850",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T06:28:55.498422",
          "text": "Kkkkkkkkkkkkkkkkkkkkkkk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T06:28:41.172599",
          "text": "Tu não confia em mim"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T06:28:40.785224",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T06:28:34.766766",
          "text": "An"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T06:28:23.675574",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-29T06:28:31.713757"
            }
          ],
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T06:28:17.871783",
          "text": "Da hora!"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T06:28:06.851273",
          "text": "Sei"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T06:28:03.862723",
          "text": "Hmmm"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T06:27:28.456956",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T06:27:03.217212",
          "text": "Como era?"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T06:26:51.369711",
          "text": "🤦🏾‍♀️"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T06:26:44.564200",
          "text": "Pq a Dani me falou como era"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T06:26:24.121324",
          "text": "Deve ter ficado uma merda essa montagem KKKK"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T06:26:03.885361",
          "text": "Kkkkkkkkkk hmm"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T06:25:58.975241",
          "text": "Kkkkkkkkk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T06:25:56.189299",
          "text": "Vi não"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T06:25:55.532416",
          "text": "Me manda aí"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T06:25:54.680921",
          "text": "To zoando"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T06:25:51.646309",
          "text": "Gustavo"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T06:25:47.944462",
          "text": "Não"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T06:25:45.719017",
          "text": "Opa"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T06:25:45.676747",
          "text": "Hmmm kk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T06:25:42.885854",
          "text": "Sim"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T06:25:40.593934",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-29T06:25:42.368724"
            }
          ],
          "text": "Não"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T06:25:29.729370",
          "text": "Sim mas vai saber"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T06:25:19.448281",
          "text": "Te perguntei quem fez"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T06:25:15.731562",
          "text": "Se eu"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T06:25:12.556442",
          "text": "Kkkkkkkkkkkkkkkkkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T06:25:09.526626",
          "text": "Uma opção"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T06:25:06.317142",
          "text": "N é"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T06:25:05.153191",
          "text": "Mentir"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T06:25:03.245322",
          "text": "Você já viu a montagem?"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T06:24:55.363318",
          "text": "Ok"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T06:24:49.925422",
          "text": "N é"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T06:24:45.696882",
          "text": "Mentir não é uma opção"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T06:24:34.702217",
          "text": "Aí já viu"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T06:24:29.568813",
          "text": "Só q se mentir"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T06:24:23.386203",
          "text": "E eu tbm, agora é sucesso kk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T06:23:58.506344",
          "text": "Eu te entrego minha lealdade"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T06:23:34.019457",
          "text": "Mentir pra aliada"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T06:23:22.104291",
          "text": "Alguma"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T06:23:20.076965",
          "text": "Em hipótese"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T06:23:16.905308",
          "text": "N vale"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T06:23:15.382089",
          "text": "Kkkkkkk bom saber"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T06:23:11.534580",
          "text": "Não posso confiar neles"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T06:23:07.526216",
          "text": "Tu que é minha aliada agora"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T06:22:55.900238",
          "text": "Não"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T06:22:49.520238",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-29T06:22:53.283453"
            }
          ],
          "text": "Kkkkkkkkkkkkk teus aliados"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T06:22:39.424007",
          "text": "Bando de safado"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T06:22:36.584388",
          "text": "Q tinha"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T06:22:34.774827",
          "text": "Daniela q me disse"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T06:22:29.732912",
          "text": "Não faço idéia"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T06:22:23.476668",
          "text": "Quem fez?"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T06:22:14.522029",
          "text": "Só sei q existe"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T06:22:04.370636",
          "text": "Até hoje eu peço pra ele me mostrar uma montagem q ele fez c a gente e ele nunca mostrou KKKKKKKKKKKK"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T06:21:22.542853",
          "text": "A dúvida"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T06:21:18.139319",
          "text": "Fica aí"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T06:21:17.948605",
          "text": "Mim"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T06:21:16.264246",
          "text": "Não é tão leal a m"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T06:21:16.257419",
          "text": "Pois é"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T06:21:14.359393",
          "text": "Kkkkkkkkkkkk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T06:21:08.206396",
          "text": "Se bem que ele falou pra você que eu não sei jogar em equipe"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T06:21:01.324022",
          "text": "Kkkkkkk ele conta se eu perguntar"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T06:20:55.146525",
          "text": "Ele é meu aliado, não faria isso"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T06:20:41.013464",
          "text": "Que eu virei jogando?"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T06:20:34.130655",
          "text": "Fala oq"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T06:18:44.901729",
          "text": "Ele fala"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T06:18:41.351258",
          "text": "Q eu pergunto pro Vitor"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T06:18:33.615618",
          "text": "Tentar me gambelar"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T06:18:29.529739",
          "text": "E não adianta"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T06:18:29.147267",
          "text": "Pode deixar"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T06:18:28.846673",
          "text": "Kkkkkkkkkkkkkkkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T06:18:28.463120",
          "text": "Assim q eu gosto de ver"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T06:18:09.062209",
          "text": "Que eu danço"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T06:18:06.820165",
          "text": "Pode ser a mais difícil que tem"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T06:18:02.481809",
          "text": "Qualquer música"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T06:17:42.471916",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T06:17:24.284184",
          "text": "Olha aí"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T06:17:19.537062",
          "text": "Depois escolho a música"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T06:17:18.720438",
          "text": "Já define a música aí que vou dançar"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T06:17:08.790186",
          "text": "Kkkkkkkkkkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T06:17:04.412670",
          "text": "Jogando"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T06:17:02.377853",
          "text": "Quero q vc vire"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T06:16:58.335672",
          "text": "Quero q vc jogue"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T06:16:56.971963",
          "text": "Tá me tirando"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T06:16:44.209601",
          "text": "Kkkkkkkkkkkkkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T06:16:42.529971",
          "text": "Você consegue"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T06:16:37.264439",
          "text": "Em você"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T06:16:35.294151",
          "text": "Mas acredito"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T06:16:32.960908",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-29T06:16:39.719699"
            }
          ],
          "text": "Parece um drogado falando KKK"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T06:16:16.540169",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-29T06:16:20.388781"
            }
          ],
          "text": "Vou parar de jogar"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T06:16:12.486726",
          "text": "Não vai acontecer"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T06:16:02.054737",
          "text": "Hoje só"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T06:15:56.513810",
          "text": "Kkkkkkk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T06:15:48.064170",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-29T06:15:51.818163"
            }
          ],
          "text": "Escapei"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T06:15:42.624909",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-29T06:15:46.883408"
            }
          ],
          "text": "Hheheehehe"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T06:15:18.125282",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T06:14:55.413831",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T06:14:23.477799",
          "text": "Hm kkk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T06:13:50.455936",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-29T06:14:15.305921"
            }
          ],
          "text": "Eu não to jogando"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T06:12:25.663205",
          "text": "Ver isso"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T06:12:22.172709",
          "text": "Quero muito"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T06:11:45.704841",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-29T06:13:32.255316"
            }
          ],
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T06:11:26.261744",
          "text": "Tá viajando"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T06:11:23.903259",
          "text": "Que trato"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T06:11:21.193921",
          "text": "Que?"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T06:10:47.855834",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T06:06:46.526954",
          "text": "As desculpas"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T06:06:21.945872",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-29T06:11:16.467896"
            }
          ],
          "text": "Kkkkkkkkkkk quero, sem pé nem cabeça"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T06:05:44.691135",
          "text": "Tu tem que escutar o Danilo dando as desculpas dele..."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T06:05:24.607909",
          "text": "Pra você me compreender"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T06:05:13.696770",
          "text": "Mas você tem que jogar com a gente"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T06:05:07.679319",
          "text": "Da pra fazer"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T06:04:17.534994",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T06:03:54.515626",
          "text": "Mas o engraçado é o áudio"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T06:03:47.039743",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-29T06:03:49.144439"
            }
          ],
          "text": "Demorou"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T06:03:25.251321",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T06:03:07.008262",
          "text": "Você mesma"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T06:03:03.472443",
          "text": "Que você veja"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T06:02:59.683107",
          "text": "Mas eu quero"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T06:02:55.181796",
          "text": "Não"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T06:02:47.751023",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T06:02:34.857134",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-29T06:02:37.313625"
            }
          ],
          "text": "Você entende"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T06:02:08.272204",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T06:01:50.333766",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-29T06:01:56.144167"
            }
          ],
          "text": "Parece que eu falo nego não tá nem aí"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T06:01:48.547249",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T06:01:33.083813",
          "text": "Mas se eles seguissem minha call a vida ia ser mais fácil"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T06:01:03.954208",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-29T06:01:30.766933"
            }
          ],
          "text": "Zoa, as vezes eu vacilo também e deixo geral na mão"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T06:00:58.731344",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-29T06:02:17.543557"
            }
          ],
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T06:00:36.729794",
          "text": "Tendo que comprar todo mundo de volta"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T06:00:31.375978",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T06:00:16.459845",
          "text": "Aiii gente o Gustavo carregando nas costas novamente"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T05:59:50.675191",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T05:59:16.872919",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T05:58:35.011380",
          "text": "Ele joga bem?"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T05:58:31.487685",
          "text": "Mas então tu viu o Vitor jogando lá"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T05:57:57.647902",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T05:57:43.740114",
          "text": "Enquanto eles colocavam comida na mesa tu tava concordando"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T05:56:07.341095",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-29T05:56:57.892038"
            }
          ],
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T05:55:27.645358",
          "text": "Kkkkkkkkkkkk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T05:55:22.826452",
          "text": "Ele nem fala comigo"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T05:55:19.848481",
          "text": "E quando ele aparece lá no portão e me vê"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T05:54:58.119125",
          "text": "Brigar com o vito"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T05:54:43.266186",
          "text": "Aí ele foi lá puto"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T05:54:40.212866",
          "text": "De madrugada"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T05:54:35.155013",
          "text": "Um dia a gente tava conversando na rua do Danilo"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T05:54:11.698133",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T05:53:54.162684",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T05:53:38.961075",
          "text": "Pai dele não é muito chegado em mim não"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T05:53:32.307234",
          "text": "Kkkkkkkkkkkkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T05:53:20.120684",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T05:53:05.957148",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T05:52:44.608044",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T05:52:41.622324",
          "text": "Kkkkkkkkkkkk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T05:52:39.194644",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-29T05:52:50.643315"
            }
          ],
          "text": "E me deu uns pedaço"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T05:52:35.679162",
          "text": "Levou a bacia de carne lá na rua"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T05:52:30.523102",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-29T05:52:35.794305"
            }
          ],
          "text": "Ela tava fazendo churrasco"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T05:52:25.476721",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-29T05:53:06.343148"
            }
          ],
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T05:52:25.425459",
          "text": "Teve um dia que cheguei lá"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T05:51:51.067464",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-29T05:52:19.973033"
            }
          ],
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T05:51:34.960391",
          "text": "Passou o dia todo jogando"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T05:51:30.295510",
          "text": "Mãe do vito fez foi desligar a internet dele"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T05:50:48.307518",
          "text": "Entendo"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T05:50:13.899911",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-29T05:50:42.082036"
            }
          ],
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T05:49:40.684397",
          "text": "Não vai gastar dinheiro com algo q pode não usar, ou enjoar"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T05:49:00.523659",
          "text": "Primeiro testa o jogo."
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T05:47:19.068999",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T05:47:03.904032",
          "text": "Quanto cê acha que gasta num note desse?"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T05:45:20.803298",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-29T05:46:49.302549"
            }
          ],
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T05:44:46.700054",
          "text": "E é chei de bug"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T05:44:37.083922",
          "text": "Mas esse jogo é pesadin"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T05:44:19.943442",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T05:43:53.537024",
          "text": "Trocou 6 por meia dúzia"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T05:43:44.871923",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T05:43:43.522386",
          "text": "Nessa última o Lucas assumiu pro Danilo"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T05:43:36.461636",
          "text": "Não, já sai"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T05:43:29.037116",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T05:43:26.321270",
          "text": "Depende"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T05:43:13.075540",
          "text": ":)"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T05:43:09.825894",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T05:43:09.665258",
          "text": "Você que lute"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T05:43:07.289492",
          "text": "Exato"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T05:42:52.051104",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-29T05:43:04.844519"
            }
          ],
          "voice_media": "Media unavailable."
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T05:42:33.518057",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T05:42:21.800051",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-29T05:42:37.291922"
            }
          ],
          "text": "A gente começa umas 18h"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T05:42:14.411726",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-29T05:42:30.226714"
            }
          ],
          "voice_media": "Media unavailable."
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T05:41:54.810403",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T05:41:44.186727",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T05:41:32.180573",
          "text": "Mas tu vai pra lá que horas?"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T05:41:15.792526",
          "text": "Acho q é só o dele"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T05:40:56.436097",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T05:40:43.909826",
          "text": "Tem quantos computadores lá?"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T05:40:33.752451",
          "text": "Booooa"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T05:39:55.948927",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T05:39:49.062580",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-29T05:40:21.430186"
            }
          ],
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T05:39:36.804795",
          "text": "Mas todo dia ele melhora"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T05:39:32.073431",
          "text": "Eu to queimando Danilo"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T05:38:58.987566",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T05:38:40.509849",
          "text": "“Fica junto miserável” “calmai po to sem arma”"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T05:37:59.934453",
          "text": "Tu ia adorar escutar eu reclamando com Danilo o jogo inteirin"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T05:37:25.989291",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-29T05:37:35.603007"
            }
          ],
          "voice_media": "Media unavailable."
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T05:37:18.438817",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T05:37:13.140798",
          "text": "Nem queria"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T05:37:09.535361",
          "text": "Essa arma lixo dele"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T05:37:05.090270",
          "text": "Foi sem queree"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T05:36:49.412937",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T05:36:29.304521",
          "text": "“Devolveeee minha armaaa”"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T05:36:28.911465",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T05:36:12.214540",
          "text": "Mermao esse bixo fez um escândalo"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T05:36:04.374935",
          "text": "E eu peguei a dele sem querer"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T05:36:00.262818",
          "text": "Aí ele sem querer pegou outra arma lá e dropou a dele"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T05:35:55.281262",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T05:35:30.832097",
          "text": "Tem uma caixa que cai do céu, que da pra pegar as armas que a gente faz no jogo, arma montada"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T05:34:57.779163",
          "text": "Danilo kkkkkkkkkkk eu rachei com ele hoje"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T05:34:54.689178",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T05:34:34.028393",
          "text": "Vou parar"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T05:34:31.973111",
          "text": "Tadin, to pegando muito no pé do Danilo"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T05:34:29.089330",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T05:34:15.657026",
          "text": "Boa, já entende melhor q Danilo"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T05:33:50.810260",
          "text": "A graça do jogo é essa"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T05:33:44.890695",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-29T05:34:07.752153"
            }
          ],
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T05:33:41.136832",
          "text": "Mas eles tem que rushar comigo"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T05:33:36.756024",
          "text": "Pois é ué"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T05:33:19.817230",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T05:33:08.095697",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T05:32:53.292718",
          "text": "É, eu costumo rushar enquanto eles estão lá atrás pegando arma"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T05:32:46.597207",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T05:32:21.050463",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T05:32:03.420633",
          "text": "Item"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T05:32:01.683607",
          "text": "Pegar irem"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T05:31:49.909793",
          "text": "Kkkkkkkkkkkkkkkkkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T05:31:49.403062",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T05:31:40.264058",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-29T05:31:54.934552"
            }
          ],
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T05:31:31.102298",
          "text": "Não sabe o que é lootear?"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T05:31:23.036992",
          "text": "Êeee jogadora de free fire"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T05:31:02.113531",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T05:30:50.079728",
          "text": "Vitor só sabe lotear fi"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T05:30:07.466897",
          "text": "E Danilo"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T05:30:00.456391",
          "text": "Jogam*"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T05:29:54.429647",
          "text": "Vitor e só jogar sozinhos"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T05:29:46.692167",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T05:29:42.475493",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-29T05:29:52.343135"
            }
          ],
          "text": "Eu não gosto de jogar em equipe?"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T05:29:32.217653",
          "text": "Mas o Vitor tem que colocar um fone decente lá"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T05:29:30.059743",
          "text": "Kkkkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T05:29:28.353334",
          "text": "Viciado mds"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T05:29:13.701570",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-29T05:29:17.711754"
            }
          ],
          "text": "Vamos por favor"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T05:29:02.783952",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T05:28:14.287463",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T05:28:04.897817",
          "text": "Curtiu?"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T05:27:54.227847",
          "text": "Vitor Hugo colocou o Cel p gravar"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T05:27:50.367667",
          "text": "E aí?"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T05:27:34.220139",
          "text": "Tava assistindo vcs jogarem"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T05:27:14.106552",
          "text": "Kkkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T05:27:12.503915",
          "text": "Ela é uma palhaça"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T05:26:58.172606",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-29T05:27:06.002515"
            }
          ],
          "text": "Doido é"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T05:26:52.194629",
          "text": "Ela veio me cobrar 10 reais por isso"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T03:31:29.242217",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-29T03:39:55.231308"
            }
          ],
          "text": "Kkkkkkk ainda tá sendo generoso po"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T03:24:45.446591",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-29T03:30:37.597200"
            }
          ],
          "text": "1 real pelo dia trabalhado"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T03:24:37.297621",
          "text": "Mandei o contrato pra ela"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T03:07:34.324401",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-29T03:23:20.351835"
            }
          ],
          "voice_media": "Media unavailable."
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T03:06:49.118348",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T02:57:14.539228",
          "text": "Quero ver!"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T02:57:09.890627",
          "text": "Vai fazer ensaio fotográfico sem tirar foto?"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T02:50:06.525482",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-29T02:56:50.754138"
            }
          ],
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T02:44:19.538075",
          "text": "Tá massa"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T02:44:17.755986",
          "text": "Falou que não gostava de série, todo dia assiste uma diferente"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T02:43:52.317162",
          "text": "É pra dormir issai?"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T02:31:54.611476",
          "text": "Ganhando todas certeza"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T02:31:44.770554",
          "text": "E você"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T02:30:41.299423",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-29T02:44:27.031690"
            }
          ],
          "text": "Good girl"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T02:30:17.486191",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-29T02:44:26.313907"
            }
          ],
          "text": "Tava vendo uma série com a Dani"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T02:29:34.478901",
          "text": "Tá fazendo o que?"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T02:29:31.437992",
          "text": "E aiiii"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T02:08:17.351250",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-29T02:16:56.841913"
            }
          ],
          "text": "Boa!"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T02:06:25.498732",
          "text": "Você tá certo, n é mesmo"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T02:06:01.103839",
          "text": "Fofo, obrigada"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T02:02:50.509111",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-29T02:05:50.405909"
            }
          ],
          "text": "A beleza é tua última preocupação, isso tu já tem"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T02:01:23.696200",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-29T02:06:05.994598"
            }
          ],
          "text": "A beleza não é o único atributo atraente numa pessoa"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T01:56:08.863292",
          "text": "Sim, eu sei q isso n deveria me afetar, já passou kkkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T01:54:28.568092",
          "text": "Oh ela que é linda"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T01:52:56.518958",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-29T01:54:29.797248"
            }
          ],
          "text": "Tá se importando por pouca coisa"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T01:52:44.912782",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-29T01:54:04.843556"
            }
          ],
          "media": "https://scontent-atl3-2.cdninstagram.com/v/t51.2885-15/e35/116327510_2700458563611313_7286819093444188461_n.jpg?_nc_ht=scontent-atl3-2.cdninstagram.com&_nc_cat=101&_nc_ohc=Ied2Q6X45MEAX9MgLGp&tp=18&oh=7d1eafb7986d597055427c00c3a64343&oe=5FCC7EE9&ig_cache_key=MjM2MzYzNzQ2NzM5OTA1Mzc2NA%3D%3D.2"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T01:51:56.973885",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-29T01:54:00.934815"
            }
          ],
          "text": "E que a Dani tem uma beleza de modelo?"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T01:51:49.798665",
          "text": "Ele falou que você tem uma beleza comum"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T01:51:41.294639",
          "text": "Não"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T01:51:35.925113",
          "text": "Eu tô bem, de vdd"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T01:51:25.293616",
          "text": "Kkk relaxa, apaguei pq fiquei com vergonha do que a pra falou, deixa isso pra lá"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T01:50:11.103984",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-29T01:50:26.263884"
            }
          ],
          "text": "Desculpa"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T01:50:08.720601",
          "text": "To na treta aqui"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T01:49:50.153811",
          "text": "Nem liiii"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T01:49:43.408542",
          "text": "Não véi"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T01:49:29.592848",
          "text": "A foi um comentário nada a haver, mas já tá tudo bem"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T01:35:29.831226",
          "text": "Que que ela falou?"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T01:34:07.466408",
          "text": "A é difícil falar kk, é q meio besta, eu tô me achando estranha sla c a auto estima baixa tem uns dias, insegura sla... Aí escutei umas coisas de um pessoa da família, a pessoa falou brincando mas me afetou"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T01:28:52.070387",
          "text": "Mas nem se preocupa c isso n pf"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T01:28:48.688478",
          "text": "Desabafe"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T01:27:55.096510",
          "text": "Mas triste é mt forte, n tô triste kkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T01:27:23.207935",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-29T01:28:44.730530"
            }
          ],
          "text": "Hoje eu n tô muito bem, não vou mentir pra você, só que jaja fico kk é sla problemas bestas mesmo"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T01:21:44.320575",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-29T01:24:30.526101"
            }
          ],
          "text": "Tá triste??"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T01:21:03.057226",
          "text": "Mas você tá bem???"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T01:20:59.595946",
          "text": "Eu to bem"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T01:20:36.252935",
          "text": "Da não"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T01:20:06.633335",
          "text": "Não"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T01:04:44.349661",
          "text": "Amg é p isso"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T01:04:39.133190",
          "text": "Kkkkkkkkk carrega eles"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T01:01:00.204918",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T01:00:33.488991",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-29T01:04:07.390769"
            }
          ],
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T00:59:13.769908",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T00:42:39.450322",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T00:41:58.384032",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-29T00:29:35.660341",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T00:02:15.234482",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-29T00:29:40.171318"
            }
          ],
          "text": "Foi mal n ter mandado msg antes, hoje o dia foi mei estranho"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-29T00:00:50.753710",
          "text": "Boa noite!"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T03:26:18.764479",
          "text": "Tá bom"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-28T03:25:33.512996",
          "text": "Beijo"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-28T03:25:32.131295",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-28T03:26:10.575507"
            }
          ],
          "text": "Manda mensagem"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-28T03:25:29.451389",
          "text": "Dorme com Deus"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T03:24:35.861274",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-28T03:25:45.732502"
            }
          ],
          "text": "Dorme com Deus ❤️"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T03:24:22.045833",
          "text": "Beijo"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T03:24:20.259510",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-28T03:25:13.604852"
            }
          ],
          "text": "Tá bom, só fechar os olhos que o sono vai vir kk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-28T03:21:07.499811",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-28T03:23:29.988546"
            }
          ],
          "text": "Jaja to acordando"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-28T03:20:59.310403",
          "text": "Que eu vou tentar dormir um tikin"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-28T03:20:45.287323",
          "text": "Então vai se familiarizando aí com a plataforma"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-28T03:19:53.246767",
          "text": "Suavão"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T03:19:25.126089",
          "text": "Vai ser de boa, fé"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T03:19:17.460795",
          "text": "Né, é apelação kk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-28T03:19:04.124883",
          "text": "Né possível"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-28T03:18:58.272773",
          "text": "É, não tem como obrigarem isso"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T03:18:42.930369",
          "text": "Kkkkkkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T03:18:40.732126",
          "text": "Câmera desligada"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T03:18:34.344410",
          "text": "Tomara q seja igual você disse"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-28T03:18:31.580890",
          "text": "É fácil procê"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-28T03:18:22.835903",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-28T03:18:25.500466"
            }
          ],
          "text": "Mas vai ser bom"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T03:17:45.678773",
          "text": "É vdd"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-28T03:17:05.934175",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-28T03:17:32.047303"
            }
          ],
          "text": "Tá aliviada por muito tempo ainda"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-28T03:16:56.977646",
          "text": "Tá aí não"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T03:10:47.294813",
          "text": "Tá aí já"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T03:10:40.149260",
          "text": "Dia 17/08"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-28T03:09:58.407443",
          "text": "Facul volta que dia?"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T03:08:49.924255",
          "text": "Q vai ter q dançar msm"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T03:08:43.092359",
          "text": "Acho"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T03:08:41.848417",
          "text": "Viu"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T03:08:40.078134",
          "text": "KKKKKKKKKK ata"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-28T03:08:34.345284",
          "text": "Droga!!"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-28T03:08:30.408599",
          "text": "É, pelo visto nunca mais vou virar jogando"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T03:07:57.134408",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-28T03:08:19.923093"
            }
          ],
          "text": "Vai ter que colocar uma coreografia do fit dance e dançar"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T03:07:33.984754",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-28T03:08:13.901970"
            }
          ],
          "text": "Como castigo kkkkkkkkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T03:07:28.206060",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-28T03:08:12.618052"
            }
          ],
          "text": "Toda vez q você quiser virar jogando"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T03:07:19.295422",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-28T03:08:11.395282"
            }
          ],
          "text": "Aí pronto"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T03:07:07.192924",
          "text": "Gustavo"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T03:07:04.798425",
          "text": "Aiai"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T03:07:03.055742",
          "text": "Kkkkkkkkkkkkkkkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T03:06:43.293612",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-28T03:08:07.955289"
            }
          ],
          "text": "Você que precisa dançar pra sentir sono"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T03:06:16.494654",
          "text": "Tentando me adptar a plataforma nova"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T03:05:33.553914",
          "text": "Eu tô é vendo aqui como vai funcionar o semestre q vem"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T03:05:00.560054",
          "text": "Já paramos"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T03:04:56.376909",
          "text": "Que nada"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-28T03:04:31.270107",
          "text": "Dança lá, libera a energia pra conseguir dormir bem hoje"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T03:03:43.225392",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-28T03:04:32.112229"
            }
          ],
          "text": "Kkkkkkkkkkkkkkkkkkk ok, pelo menos vamos"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-28T03:03:31.630006",
          "text": "Daqui 5 anos"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-28T03:03:28.634791",
          "text": "Depois"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-28T03:03:24.196607",
          "text": "Só de zueira"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-28T03:03:20.660582",
          "text": "Vamo dançar sim"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-28T03:03:13.790944",
          "text": "Relaxou"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T03:03:05.236882",
          "text": "Então tá bom Rinaldi"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-28T03:02:54.214278",
          "text": "Dançar é muito pra mim"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T03:02:51.230920",
          "text": "Kkkk hm"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-28T03:02:43.801171",
          "text": "Meu negócio é andar e correr"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T03:02:35.737425",
          "text": "Tudo bem, sem pressão 😂"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T03:02:13.965430",
          "text": "Kkkkkkkkkkkkkkkk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-28T03:02:03.800865",
          "text": "Deeeeeus que me livre"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T02:45:48.286445",
          "text": "Kk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T02:45:46.627549",
          "text": "Mas o q importa é ser feliz"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T02:45:30.959130",
          "text": "Somos péssimas"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T02:45:13.558587",
          "text": "Nam, cansa"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T02:44:49.472765",
          "text": "😂"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T02:44:46.429010",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-28T03:01:57.067355"
            }
          ],
          "text": "Vai dançar com a gente depois"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T02:44:36.210053",
          "text": "E você"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T02:44:34.587797",
          "text": "Kkkkkkk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-28T02:44:27.267256",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-28T02:44:32.229109"
            }
          ],
          "text": "Fitdance é massssa"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-28T02:44:04.493455",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-28T02:45:07.372843"
            }
          ],
          "text": "Vão virar dançando então"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T02:41:50.639567",
          "text": "0 sono"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T02:41:41.443565",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-28T02:43:37.254672"
            }
          ],
          "text": "Eu e a Dani estamos dançando as músicas do fit dance agora kkkkkkkkkkkk oh vei"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T02:40:57.860843",
          "text": "Sabia que você n tinha ido dormir"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T02:40:48.184744",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-28T02:43:36.290317"
            }
          ],
          "text": "Foi só p fzr um drama"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T02:40:33.533955",
          "text": "Rum kk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-28T02:40:24.700444",
          "text": "Antes de te dar boa noite jamais"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-28T02:40:07.801468",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-28T02:40:11.684393"
            }
          ],
          "text": "Que legal, disposição 200%"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-28T02:39:43.474857",
          "text": "Virar estudando"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T02:32:41.924299",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-28T02:40:09.874371"
            }
          ],
          "text": "E nem me deu boa noite"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T02:32:28.721489",
          "text": "Dormiu"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T02:32:26.574093",
          "text": "Ih"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T02:25:49.856260",
          "text": "Mas nam"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T02:25:13.367450",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-28T02:39:07.139944"
            }
          ],
          "text": "Dani quer virar estudando cmg"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T02:25:00.600095",
          "text": "Hoje eu vou assistir mais um EP daquela série do prof"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T02:24:12.339549",
          "text": "Você n tá é querendo dormir agora"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T02:23:42.015238",
          "text": "Kkkkkkk hmm"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-28T02:23:03.103408",
          "text": "Se você não falar nada eu vou"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T02:21:59.483312",
          "text": "Vai tentar dormir agora?"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-28T02:20:58.310686",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-28T02:21:49.793992"
            }
          ],
          "text": "É, vou seguir teu conselho"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T02:16:06.647569",
          "text": "Tá sem sono né"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T02:14:58.518790",
          "text": "você me disse q ia dormir cedo hoje kkk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-28T02:10:43.291906",
          "text": "Acabou a conversa?"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-28T02:10:38.888286",
          "text": "E aí?"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-28T02:07:34.360546",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-28T02:09:12.415404"
            }
          ],
          "text": "Que bom"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T01:46:24.786578",
          "text": "Kkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T01:46:22.141719",
          "text": "Não, hoje em dia é de boassa"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-28T01:42:27.548354",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-28T01:46:05.845554"
            }
          ],
          "text": "Sente alguma diferença? Falta?"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-28T01:42:07.134964",
          "text": "Mas você já se acostumou né?"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T01:38:40.054727",
          "text": "É desse jeito"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T01:38:21.499150",
          "text": "Sim"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-28T01:38:13.189737",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-28T01:38:16.898159"
            }
          ],
          "text": "Aí a partir disso você forma seu caráter"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T01:37:54.838857",
          "text": "Isso é"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-28T01:37:36.838277",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-28T01:37:41.335305"
            }
          ],
          "text": "São duas pessoas diferentes te criando"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-28T01:37:25.477163",
          "text": "Mas acho que cada um pensa de um jeito"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T01:37:24.561050",
          "text": "Eles n se comunicavam"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T01:37:17.480494",
          "text": "E os dois davam"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T01:37:13.138620",
          "text": "Kkkkkkkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T01:37:10.648589",
          "text": "Dinheiro pros dois"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T01:37:04.273182",
          "text": "Eu pedia"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T01:37:00.380564",
          "text": "É bom po, mas quando eu era adolescente"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-28T01:36:33.793766",
          "text": "Nunca experimentei de outra forma"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-28T01:36:18.903420",
          "text": "Cê acha?"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T01:35:56.896086",
          "text": "Isso é bomm"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-28T01:35:41.891795",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-28T01:35:47.245991"
            }
          ],
          "text": "Eu moro com os dois"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T01:35:27.971591",
          "text": "Kkkkk uhum"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-28T01:35:18.573140",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-28T01:35:23.840478"
            }
          ],
          "text": "Porque não tinha como seu pai trabalhar e cuidar de tu"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-28T01:35:09.929538",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-28T01:35:17.035582"
            }
          ],
          "text": "Aí sua mãe organizou sua vida"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-28T01:33:49.537230",
          "text": "Você achava a rotina dele mais legal kkkkkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T01:19:15.689790",
          "text": "Você mora com os dois né?"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T01:17:56.780916",
          "text": "Ele trabalhava kk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T01:17:52.200039",
          "text": "Foram lá decidiram que era melhor eu ficar com a minha mãe"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T01:17:40.834657",
          "text": "Mas a minha mãe sensata e o meu pai tbm"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T01:17:26.458252",
          "text": "Era tudo errado mas p mim tava ótimo"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T01:17:14.007960",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-28T01:33:28.606951"
            }
          ],
          "text": "De ir pro trab dele, comer na rua"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T01:17:03.411838",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-28T01:33:26.707335"
            }
          ],
          "text": "Mas n queria morar c a minha mãe pq queria a vida bagunçada do meu pai KKK"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T01:16:37.597891",
          "text": "Mano eu ia horrorosa mesmo"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-28T01:14:26.279391",
          "text": "Kkkkkkkkkkk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-28T01:14:20.825333",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-28T01:18:24.175942"
            }
          ],
          "text": "Kkkkkkkkkk eu to imaginando você pequenininha indo estudar com o uniforme todo amarrotado"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-28T01:13:40.716368",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-28T01:16:23.983519"
            }
          ],
          "text": "Mas é porque ele trabalhava muito?"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-28T01:12:58.288909",
          "text": "Sério?"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-28T01:12:55.377907",
          "text": "Kkkkkkkkkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T01:07:22.097175",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-28T01:12:51.942392"
            }
          ],
          "text": "Eu era bem novinha mesmo né, aí ele me levava pra escola toda bagunçada"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T01:06:54.123711",
          "text": "Kkkkkkkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T01:06:43.205305",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-28T01:12:47.231693"
            }
          ],
          "text": "Só comia na rua"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T01:06:35.626177",
          "text": "Aí eu morei em Taguatinga com ele um ano"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T01:06:02.084675",
          "text": "Ele sozinho n deu conta de cuidar de mim na época"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T01:05:46.993270",
          "text": "E tive q morar com a minha mãe"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T01:05:39.992980",
          "text": "Só q n deu mt certo kkkkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T01:05:21.658127",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-28T01:12:44.815504"
            }
          ],
          "text": "Eu era bem mais apegada com ele, quando meus pais se separaram eu era bem novinha né, aí chorei até minha mãe deixar eu morar com ele"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-28T01:04:28.422325",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-28T01:04:38.451079"
            }
          ],
          "text": "Sinal de que ele da importância"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-28T01:04:12.578686",
          "text": "Então é um bom sinal"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T01:00:56.861407",
          "text": "Pior q faz"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T01:00:51.977228",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-28T01:04:05.109664"
            }
          ],
          "text": "Eu falo isso pra Dani ela apela kkkkkkki"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-28T00:59:21.129896",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-28T01:00:36.945330"
            }
          ],
          "text": "Você é a preferida dele"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-28T00:58:36.249989",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-28T01:00:53.250705"
            }
          ],
          "text": "Ele faz isso com frequência?"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-28T00:58:29.893589",
          "text": "Kkkkkkkkkkkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T00:58:07.218369",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-28T00:58:25.610617"
            }
          ],
          "text": "Perguntando minha vida toda"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T00:57:37.472734",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-28T00:58:21.568834"
            }
          ],
          "text": "Q eu sou a filha mais velha dele e q no sei oq KKKKKK"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T00:57:17.082087",
          "text": "E ficou falando falando que me ama q tá com sdd q no sei oq"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T00:56:41.164304",
          "text": "Me ligou né kkkkkkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T00:56:33.292737",
          "text": "Meu pai hoje tá carente"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T00:56:15.514543",
          "text": "Da trab kk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T00:56:11.019695",
          "text": "Más"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T00:56:08.877766",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-28T00:58:58.341456"
            }
          ],
          "text": "É, fica até mais gostoso"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-28T00:55:53.221732",
          "text": "Boa, quem sabe fazer não precisa comprar pronto"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T00:55:44.586577",
          "text": "Kkkkk falou em comida né"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-28T00:55:35.823745",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-28T00:55:38.619995"
            }
          ],
          "text": "Você soluciona os problemas muito rápido"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T00:55:16.137893",
          "text": "Pq só assim"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T00:55:11.468295",
          "text": "E*"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T00:55:08.719213",
          "text": "Em fazer em casa"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T00:55:04.719974",
          "text": "Vou comprar tudo"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T00:55:00.311926",
          "text": "Kkkkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T00:54:58.622814",
          "text": "Acho q eu sei o que eu vou fazer"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T00:54:51.779273",
          "text": "Oh gente"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T00:54:46.035834",
          "text": "Mas minha mãe"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T00:54:42.770131",
          "text": "Tô, é isso"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-28T00:54:34.162398",
          "text": "É só vontade de comer algo diferente"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-28T00:54:27.854011",
          "text": "Ta de boa então?"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T00:54:03.110993",
          "text": "Acho que não"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-28T00:53:54.888983",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-28T00:53:59.792640"
            }
          ],
          "text": "Ta ansiosa?"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-28T00:53:52.306885",
          "text": "E o que é isso?"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T00:53:46.790161",
          "text": "N me deixa pedir"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T00:53:43.023763",
          "text": "E minha mãe"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T00:53:40.223180",
          "text": "Tô querendo comer alguma porcaria mesmo, tipo hambúrguer com batata"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T00:52:51.570170",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-28T00:53:22.601273"
            }
          ],
          "text": "Ontem eu comi pudim e ainda achei ruim"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T00:52:15.326438",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-28T00:53:20.787355"
            }
          ],
          "text": "Eu n sei o que eu quero comer"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T00:52:05.716153",
          "text": "Kkk*"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T00:52:01.793429",
          "text": "Okk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T00:51:59.462840",
          "text": "Enjoada de tudo"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T00:51:47.554040",
          "text": "Esses dias eu tô comendo quase nada"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T00:51:31.484463",
          "text": "Ainda não"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-28T00:51:27.094171",
          "text": "Já jantou?"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-28T00:51:18.105183",
          "text": "E aí?"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T00:50:27.718619",
          "text": "Kkkkkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T00:50:19.519812",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-28T00:50:55.224950"
            }
          ],
          "text": "Aceito"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T00:50:17.720108",
          "text": "Tá bom"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-28T00:50:08.128571",
          "text": "Os dois dão conselho então"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-28T00:49:51.770144",
          "text": "Tá bom"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T00:49:37.139972",
          "text": "Kkkkkkk vai"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-28T00:49:28.407304",
          "text": "Vou dar conselho pra tu"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-28T00:49:24.195069",
          "text": "Eu não organizo nem minha vida"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-28T00:49:15.542772",
          "text": "Que diabo de cargo é esse??"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T00:49:14.277467",
          "text": "Kkkkkkkkkkk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-28T00:49:07.732790",
          "text": "Não véi"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T00:48:55.413538",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-28T00:49:01.544678"
            }
          ],
          "text": "Pra você"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T00:48:51.182260",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-28T00:48:59.473716"
            }
          ],
          "text": "Já era"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T00:48:49.575155",
          "text": "Teria então q ter outro nome"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T00:48:42.772473",
          "text": "E mudar as regras"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T00:48:36.290248",
          "text": "Ai tu quer ir lá"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T00:48:27.747674",
          "text": "Q já tem regras"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-28T00:48:23.230400",
          "text": "Mas..."
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T00:48:23.116856",
          "text": "Um jogo"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T00:48:21.637302",
          "text": "Como criar"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T00:48:10.529273",
          "text": "Kkkkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T00:48:09.124466",
          "text": "Já existe"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T00:48:05.068194",
          "text": "Pedra papel tesoura"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T00:47:57.245364",
          "text": "Não"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-28T00:47:52.805525",
          "text": "As regras são minhas"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-28T00:47:48.901590",
          "text": "Eu que criei o jogo"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T00:47:47.150802",
          "text": "Nunca precisou"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T00:47:41.538086",
          "text": "Que regra é essa"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-28T00:47:37.586172",
          "text": "Valeuuu!"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-28T00:47:31.785251",
          "text": "Quem ganha perde"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T00:47:30.663218",
          "text": "Hm"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-28T00:47:25.102335",
          "text": "Só que tu esqueceu uma coisa"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T00:47:14.647717",
          "text": "Kkkkkk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-28T00:47:09.500279",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-28T00:47:12.925909"
            }
          ],
          "text": "Bacana!"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T00:47:06.433006",
          "text": "Ganhei"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T00:47:04.201577",
          "text": "Ganheu"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T00:47:02.764842",
          "text": "Kkkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T00:47:01.078932",
          "text": "Pedra"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-28T00:46:51.386417",
          "text": "Demorou demais"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-28T00:46:49.254866",
          "text": "Vacilou"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T00:46:42.231460",
          "text": "Com meus irmãos cara"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-28T00:46:40.730744",
          "text": "Tesoura"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-28T00:46:38.718343",
          "text": "Já"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-28T00:46:35.535240",
          "text": "1"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T00:46:35.070214",
          "text": "Eu faço isso"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-28T00:46:33.015557",
          "text": "2"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-28T00:46:30.056511",
          "text": "3"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-28T00:46:22.350536",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-28T00:46:27.508644"
            }
          ],
          "text": "Vamo tirar no já então só pra ver o q vai dar"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T00:46:17.306753",
          "text": "Disse pra você jogar o jogo"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T00:46:06.249674",
          "text": "Não concordo"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-28T00:45:59.181951",
          "text": "Mas você é infinitamente mais habilidosa pra isso"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T00:45:51.805044",
          "text": "Precisei da sua ajuda primeiro"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T00:45:35.043726",
          "text": "Você falou dps"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T00:45:26.354722",
          "text": "Eu falei primeiro"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-28T00:45:18.398550",
          "text": "No já você fala um"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T00:45:17.031444",
          "text": "Naoo"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T00:45:13.644787",
          "text": "Kkkkkkkkkkkkkk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-28T00:45:06.920950",
          "text": "Vamo tirar esse cargo no pedra papel e tesoura"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-28T00:44:52.641484",
          "text": "Não"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-28T00:44:21.137837",
          "text": "Que doideira"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T00:44:19.960554",
          "text": "E você q é meu conselheiro"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T00:43:57.765815",
          "text": "Kkkkk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-28T00:43:52.370187",
          "text": "Pode ser"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T00:43:42.218326",
          "text": "O jogo"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T00:43:40.294142",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-28T00:43:48.191594"
            }
          ],
          "text": "E odeia"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T00:43:38.638766",
          "text": "O jogo"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T00:43:36.483008",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-28T00:43:47.394121"
            }
          ],
          "text": "Você ama"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T00:43:29.025875",
          "text": "Kkkkkkkkk aiai"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-28T00:43:23.797285",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-28T00:43:25.686597"
            }
          ],
          "text": "Incrível"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-28T00:43:21.643901",
          "text": "Você é muito competente pra dar conselhos"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T00:43:17.792484",
          "text": "Mano"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T00:43:16.900271",
          "text": "Você tá em uma relação de amor e ódio"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T00:42:53.488541",
          "text": "Kkkkkkkkkkkkkkkkkk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-28T00:42:46.890010",
          "text": "Deve ser esquecido"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-28T00:42:42.905950",
          "text": "O jogo não deve ser amado"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T00:41:48.887073",
          "text": "Kkkkkkkkoo"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T00:41:46.794467",
          "text": "O jogo"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T00:41:45.444083",
          "text": "Então tem q jogar"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T00:41:35.189617",
          "text": "Mas se você ama o jogo"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T00:41:10.840727",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-28T00:42:07.587801"
            }
          ],
          "text": "O jogo n é um problema, só dar uma leve manerada se você perceber q está te afetando"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T00:40:37.344435",
          "text": "Kkkkkkkkkkk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-28T00:40:29.603616",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-28T00:40:40.502601"
            }
          ],
          "text": "O jogo é um problema"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-28T00:40:25.773895",
          "text": "Ficar conversando com você não é um problema"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T00:39:28.713313",
          "text": "Seria muita hipocrisia"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T00:39:11.893235",
          "text": "Kkkkkkkko"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T00:39:00.353363",
          "text": "Até tarde"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T00:38:51.267892",
          "text": "Sendo q a gente conversa"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T00:38:39.143776",
          "text": "Pra vc virar"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T00:38:34.372805",
          "text": "Como vou falar"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T00:38:30.429600",
          "text": "Mas eu n tenho moral quanto a isso"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T00:38:24.135447",
          "text": "Virar n é uma boa opção"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T00:38:13.656604",
          "text": "N cai nessa"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-28T00:38:04.276990",
          "text": "Simmm"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T00:37:57.265249",
          "text": "Kkkkkkkkkkko"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T00:37:54.332578",
          "text": "Nãooooo"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-28T00:37:50.280778",
          "text": "Obrigado!!!"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-28T00:37:42.167586",
          "text": "E você sabe ajudar as pessoas einn"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T00:37:37.104997",
          "text": "Kkkkkkkkkkkkkk não sei"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-28T00:37:25.062760",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-28T00:37:31.222487"
            }
          ],
          "text": "Você tem razão"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-28T00:37:22.130583",
          "text": "Oxiii"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T00:37:10.914421",
          "text": "kkkkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T00:37:04.200687",
          "text": "P vc jogar"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T00:37:01.746476",
          "text": "Olha o q eu tô dizendo"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T00:36:56.422532",
          "text": "N sou boa igual a você pra dar conselhos n"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T00:36:45.973757",
          "text": "Enfim"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T00:36:35.806516",
          "text": "Kkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T00:36:32.860220",
          "text": "Até a hr que eu quero"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T00:36:21.582444",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-28T00:37:08.100792"
            }
          ],
          "text": "Eu jogaria"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T00:36:18.727504",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-28T00:37:06.281998"
            }
          ],
          "text": "Muito de jogar"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T00:36:14.323187",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-28T00:37:04.560041"
            }
          ],
          "text": "Se eu gostasse"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T00:36:07.731918",
          "text": "Sla"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T00:35:54.528574",
          "text": "Kkkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T00:35:51.393730",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-28T00:37:09.815013"
            }
          ],
          "text": "Jogar até umas 2:30"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T00:35:38.227418",
          "text": "Mas aí amanhã é de boa"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T00:35:20.984153",
          "text": "É teu"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T00:35:19.347994",
          "text": "Esse cargo"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T00:35:14.330062",
          "text": "Nam kkkk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-28T00:35:03.866677",
          "text": "Coach de vida"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T00:35:02.641226",
          "text": "Kkkkkkkkkkkkk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-28T00:34:57.691027",
          "text": "Você quem deveria ser minha conselheira"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T00:34:33.587919",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-28T00:34:45.104627"
            }
          ],
          "text": "Vou é jogar com os mlk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T00:34:26.613103",
          "text": "Então"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T00:34:24.523676",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-28T00:34:44.464129"
            }
          ],
          "text": "Amanhã não vou trabalhar cedo"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T00:34:16.083578",
          "text": "Mas"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T00:34:14.490052",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-28T00:34:43.208636"
            }
          ],
          "text": "Eu tô morto kk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T00:34:10.210738",
          "text": "Po"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T00:34:09.428996",
          "text": "E pensar"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T00:34:06.206130",
          "text": "Você vai chegar em casa"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T00:34:01.190844",
          "text": "Amanhã"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T00:33:59.467116",
          "text": "Mas aí"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T00:33:54.715972",
          "text": "Pois é"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T00:33:47.979014",
          "text": "Outro n"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-28T00:33:47.316133",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-28T00:33:51.928424"
            }
          ],
          "text": "É, amanhã da pra regular um pouco, que vou cansar o dia todo"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T00:33:20.334852",
          "text": "Jaja acaba"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T00:33:16.041669",
          "text": "Aproveita"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T00:33:12.786935",
          "text": "De ir um dia sim outro"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T00:33:04.446817",
          "text": "Já q tá rolando essa parada"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T00:32:49.199486",
          "text": "Kk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T00:32:47.691347",
          "text": "Nada mais justo"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T00:32:45.026317",
          "text": "Você já vai acordar cedin amanhã"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T00:32:34.844650",
          "text": "Tipo"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-28T00:32:34.566501",
          "text": "Mentira, de tarde"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-28T00:32:30.528882",
          "text": "Kkkkkkkkkkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T00:32:27.129075",
          "text": "Kkkkkkkkkkkkk relaxa"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-28T00:32:18.331494",
          "text": "Pra amenizar a situação"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-28T00:32:14.737002",
          "text": "Vou falar meio dia"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T00:31:57.874932",
          "text": "Kkkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T00:31:54.902121",
          "text": "Mas você consegue"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T00:31:51.666825",
          "text": "Pq é difícil dormir cedo do nada"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T00:31:35.818394",
          "text": "Hoje você acordou q hrs? kk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-28T00:31:16.062226",
          "text": "Já to a muito tempo dormindo tarde"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-28T00:31:05.685411",
          "text": "Não, hoje vou ter q dormir cedo"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-28T00:30:58.632606",
          "text": "Por favor"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T00:30:49.526887",
          "text": "Mas você dorme cedo"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T00:30:31.549801",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-28T00:30:48.314260"
            }
          ],
          "text": "Ah sim, então hoje você precisa dormir kkk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-28T00:29:53.610411",
          "text": "Eu trabalho presencialmente amanhã"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T00:28:56.833921",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-28T00:29:44.469408"
            }
          ],
          "text": "Se pelo menos soubesse jogar KKKKK"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T00:27:49.452276",
          "text": "Virar jogando"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T00:27:39.407471",
          "text": "Mas de vez e quando tb n tem problema"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T00:27:16.421137",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-28T00:29:32.413349"
            }
          ],
          "text": "Mas mano n tem problema você jogar, só n é bom virar jogando kkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T00:26:40.076007",
          "text": "Só n sei como"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T00:26:37.303117",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-28T00:29:35.285678"
            }
          ],
          "text": "Vou tentar te ajudar kkkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T00:26:24.198271",
          "text": "Você trabalha amanhã presencial?"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T00:26:04.937042",
          "text": "Agora ferrou kkkk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-28T00:24:17.030635",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-28T00:26:00.081497"
            }
          ],
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-28T00:22:44.722247",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-28T00:25:35.584276"
            }
          ],
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-28T00:21:27.536013",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-28T00:25:27.488174"
            }
          ],
          "voice_media": "Media unavailable."
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T00:15:18.819756",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T00:14:50.604402",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T00:14:19.060450",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-28T00:20:51.199869"
            }
          ],
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-28T00:12:26.457794",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-28T00:13:40.903026"
            }
          ],
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-28T00:10:04.709157",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T00:05:45.459521",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-28T00:04:24.505796",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-28T00:04:16.314275",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-28T00:04:51.669716"
            }
          ],
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-28T00:02:03.090804",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-28T00:04:05.490241"
            }
          ],
          "voice_media": "Media unavailable."
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-27T23:58:32.654695",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-27T23:57:45.451149",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-27T23:57:36.221183",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-27T23:57:34.166804",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-27T23:57:43.794085"
            }
          ],
          "voice_media": "Media unavailable."
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-27T23:56:59.311732",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-27T23:56:23.667030",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-27T23:56:17.667108",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-27T23:56:31.905564"
            }
          ],
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-27T23:54:53.204614",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-27T23:52:20.051473",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-27T23:50:51.542318",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-27T23:48:41.759051",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-27T23:48:33.796720",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-27T23:46:10.365227",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-27T23:46:29.384666"
            }
          ],
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-27T23:43:38.126535",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-27T23:36:12.677886",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-27T23:34:36.246717",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-27T23:35:57.229640"
            }
          ],
          "voice_media": "Media unavailable."
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-27T23:31:14.342316",
          "text": "O dia inteiro atrás de mim"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-27T23:31:01.282118",
          "text": "Só implorando p Dani sair da minha cola"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-27T23:30:48.426653",
          "text": "Eu tô fazendo nada também"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-27T23:30:37.936032",
          "text": "Kkkkkkk bobo"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-27T23:30:16.544214",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-27T23:30:34.091024"
            }
          ],
          "voice_media": "Media unavailable."
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-27T23:21:16.614854",
          "text": "Tá fazendo o que de bom ae?"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-27T23:19:09.622951",
          "text": "Eu tento kkk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-27T23:18:02.029345",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-27T23:18:43.947387"
            }
          ],
          "story_share": "Shared deborabasili0's story",
          "text": "Promissora!"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-27T03:22:48.213347",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-27T03:27:49.568629"
            }
          ],
          "text": "Então tá bomm kk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-27T03:21:32.273545",
          "text": "Você escolhe"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-27T03:21:25.329195",
          "text": "Você decide"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-27T03:15:45.119738",
          "text": "Mas a gente pode ver outro tb kk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-27T03:14:52.008237",
          "text": "É bom o filme"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-27T03:14:46.916782",
          "text": "E n ligo de assistir dnvo o primeiro"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-27T03:14:33.277748",
          "text": "Eu já, mas n assisti o segundo"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-27T03:13:12.664059",
          "text": "Essa trilogia do fragmentado você já assistiu né"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-27T03:12:58.290820",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-27T03:14:55.066222"
            }
          ],
          "text": "Mas a gente vai fazer isso com qual?"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-27T03:12:35.141328",
          "text": "Vamos!"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-27T02:59:31.265519",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-27T03:12:30.410699"
            }
          ],
          "text": "A gente assistiu um filme pelo discord aí da p assistir e conversar ao mesmo tempo"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-27T02:59:03.057557",
          "text": "Kkkkkkkjj"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-27T02:59:00.306171",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-27T03:12:28.950207"
            }
          ],
          "text": "Já fiz isso c uma amiga"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-27T02:58:47.192454",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-27T03:12:16.297444"
            }
          ],
          "text": "Vamos assistir depois pelo discord ?"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-27T02:58:11.311469",
          "text": "Assiste depois o fragmentado e a continuação deles"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-27T02:57:47.748131",
          "text": "Pensando aqui, you é boa"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-27T02:56:35.288298",
          "text": "Pode ser filme tambem"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-27T02:56:29.117216",
          "text": "Que eu assisto e a gente comenta sobre"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-27T02:56:19.407654",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-27T02:56:54.148027"
            }
          ],
          "text": "Me indica uma aí também muié"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-27T02:38:58.639367",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-27T02:55:59.599708"
            }
          ],
          "text": "Depois eu vou continuar assistindo"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-27T02:38:47.065165",
          "text": "Ainda não kk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-27T02:31:40.334652",
          "text": "?"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-27T02:31:38.210180",
          "text": "Enjoou"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-27T02:29:12.860728",
          "text": "Série"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-27T02:29:11.062279",
          "text": "P assistir"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-27T02:29:08.828172",
          "text": "Sou difícil demais"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-27T02:29:03.977947",
          "text": "Uhum kkk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-27T02:28:42.737072",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-27T02:29:00.989622"
            }
          ],
          "text": "So assistiu o primeiro ep?"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-27T02:28:22.209764",
          "text": "Pra segunda"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-27T02:28:18.360401",
          "text": "Criou expectativa"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-27T02:28:15.791182",
          "text": "Ficou melhor"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-27T02:28:13.015665",
          "text": "Do ep"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-27T02:28:10.217702",
          "text": "Mas no finalzin"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-27T02:28:03.672876",
          "text": "Kkkkkkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-27T02:28:01.418442",
          "text": "No começo eu tava achando bem ruim"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-27T02:27:45.254208",
          "text": "Sinceridade por favor"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-27T02:16:13.410659",
          "text": "Achei bom até"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-27T02:16:08.915877",
          "text": "Terminei agr o primeiro"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-27T02:05:29.454859",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-27T02:16:00.580322"
            }
          ],
          "text": "O que você achou do primeiro?"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-27T01:48:03.535916",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-27T02:05:20.447070"
            }
          ],
          "media": "https://scontent-atl3-2.cdninstagram.com/v/t51.2885-15/e35/116041910_291750298699816_1791562267688284228_n.jpg?_nc_ht=scontent-atl3-2.cdninstagram.com&_nc_cat=104&_nc_ohc=2p_bkxRXhaIAX9c8wfX&tp=18&oh=9e76b88c856b28330261866fadd0d925&oe=5FCD01B9&ig_cache_key=MjM2MjE4NTU1NTM2NTQwNTg1Nw%3D%3D.2"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-27T01:40:53.852272",
          "text": "Sim senhorita"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-27T01:29:54.597336",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-27T01:41:27.671810"
            }
          ],
          "text": "Abates né"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-27T01:29:51.289070",
          "text": "São tipo"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-27T01:29:48.877750",
          "text": "Vi"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-27T01:13:45.952942",
          "text": "Você viu as baixas?"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-27T01:13:06.091443",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-27T01:29:42.521233"
            }
          ],
          "text": "To assustado"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-27T01:13:03.170521",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-27T01:29:41.342532"
            }
          ],
          "text": "O Lucas ta pilotando o helicóptero agora"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-27T01:09:14.390621",
          "text": "Você é o melhor po, eu vi a pontuação 😂"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-27T01:08:42.825127",
          "text": "Kkkkkkkkkkkkkk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-27T01:03:54.022264",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-27T01:08:36.146699"
            }
          ],
          "text": "Zoação, cada um faz sua parte"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-27T01:03:32.528273",
          "text": "Ajudou? Claro que não"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-27T01:03:04.047113",
          "text": "Lucas ta no lugar dele"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-27T01:02:52.772855",
          "text": "Danilo saiu um tikin"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-27T01:02:41.262237",
          "text": "Tu só gosta de coisa boa"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-27T00:58:57.669618",
          "text": "Danilo tomou vergonha na cara é kkkkkkkkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-27T00:57:58.053501",
          "text": "Mano uma hr o primeiro vem"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-27T00:57:44.231572",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-27T01:02:13.016659"
            }
          ],
          "text": "Pavê"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-27T00:57:41.720390",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-27T01:02:12.468374"
            }
          ],
          "text": "Pudim kk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-27T00:56:16.719929",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-27T00:57:35.179326"
            }
          ],
          "text": "Você gosta de que doce?"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-27T00:55:54.552889",
          "text": "Ta osso"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-27T00:55:51.019172",
          "text": "Kkkkkkkkk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-27T00:55:39.816012",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-27T00:57:45.200114"
            }
          ],
          "text": "Pegamo 3"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-27T00:38:56.701744",
          "text": "Hoje eu quase n comi direito, queria comer alguma coisa diferente e eu nem sei oq é kk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-27T00:37:34.268332",
          "text": "Foi, em uma q tem aqui perto"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-27T00:22:42.226756",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-27T00:37:35.946742"
            }
          ],
          "text": "To jogando nada"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-27T00:21:51.527570",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-27T00:37:20.231935"
            }
          ],
          "text": "Foi só em uma padaria?"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-27T00:21:42.411493",
          "text": "E aí não tinha?"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-27T00:17:09.538355",
          "text": "Tá jogando mt po"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-27T00:16:29.267442",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-27T00:21:35.961003"
            }
          ],
          "text": "Pedi pro meu irmão ir pra mim"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-27T00:16:09.042186",
          "text": "KKKKKKKKK uhuuuuul"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-27T00:13:33.016631",
          "text": "Você foi na padaria hoje?"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-27T00:12:47.955602",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-27T00:16:04.133207"
            }
          ],
          "text": "Eu to inspirado"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-27T00:12:36.298267",
          "text": "Ficamo em 4"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-27T00:12:31.106024",
          "text": "Meu deussss"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-27T00:03:47.721476",
          "text": "Jogando"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-27T00:03:45.336325",
          "text": "Você deve estar"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T23:58:07.424333",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-27T00:13:17.031261"
            }
          ],
          "text": "Pensando em uma palha italiana q n tinha na padaria kkkkkk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T23:47:23.711955",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-26T23:56:33.148169"
            }
          ],
          "text": "Quais os pensamentos?"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T23:46:35.485057",
          "text": "Só refletindo?"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T23:31:32.625999",
          "text": "São difíceis kk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T23:31:16.874650",
          "text": "Domingo na maioria das vezes"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T23:31:10.628043",
          "text": "Hoje tá difícil, n tem nada"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T23:26:16.343550",
          "text": "E tem o que pra fazer?"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T23:23:21.363120",
          "text": "Kkkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T23:23:11.779519",
          "text": "Entediada"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T23:11:25.453951",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-26T23:22:55.776569"
            }
          ],
          "text": "E essa voz é de cansada ou de entediada?"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T23:10:45.181652",
          "text": "Ahhh ta"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T23:00:35.895684",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T22:58:55.200505",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T22:57:57.892537",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T22:56:54.615125",
          "text": "Então ela gostou do reconhecimento?"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T22:56:33.138672",
          "text": "Não vi a parte que ela chora"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T22:56:22.478999",
          "text": "Eu vi nos stories da Daniela"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T22:55:58.269923",
          "text": "Hahahahahahah"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T22:54:14.818317",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-26T22:55:51.174657"
            }
          ],
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T22:53:11.636570",
          "text": "E o que fez hoje?"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T22:52:43.024263",
          "text": "Kkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T22:52:41.792025",
          "text": "Acordamos quase na mesma hora"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T22:52:35.320474",
          "text": "Acorda 1 hora mais cedo"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T22:52:33.231817",
          "text": "Nada"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T22:52:27.801499",
          "text": "Você é melhor que eu"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T22:52:20.996239",
          "text": "Kkkkkkkkkk é"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T22:52:08.157787",
          "text": "Eu acordei 15:30"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T22:51:37.259264",
          "text": "Kkkkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T22:51:24.139560",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-26T22:51:52.495835"
            }
          ],
          "text": "Acordei 14:30 🤦🏾‍♀️"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T22:50:31.569515",
          "text": "Fala você primeiro"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T22:50:26.085848",
          "text": "Cê não vai acreditar se eu falar"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T22:47:21.477137",
          "text": "Acordou q hrs?"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T22:47:17.343763",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-26T22:50:18.428767"
            }
          ],
          "text": "Hoje eu acordei foi tarde kkkkkkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T22:46:59.319576",
          "text": "Tô bem"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T22:46:25.496916",
          "text": "Mas você tá bem??"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T22:46:21.795188",
          "text": "Eu to bem sim"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T22:28:08.180567",
          "text": "Você tá bem?"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T21:45:28.965335",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-26T21:46:32.122132"
            }
          ],
          "text": "Que nada"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T21:43:15.480135",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-26T21:45:25.279640"
            }
          ],
          "text": "Vacilou grandão ein"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T21:37:13.955377",
          "text": "Kk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T21:37:12.911624",
          "text": "Já foi"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T21:33:35.528784",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-26T21:36:50.696960"
            }
          ],
          "text": "Tava bom"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T21:33:33.588817",
          "text": "Para com isso"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T21:31:58.524387",
          "text": "Vergonha"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T21:31:55.366570",
          "text": "Ah sla kkkkkk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T21:30:59.190592",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-26T21:31:35.643539"
            }
          ],
          "text": "Tu tirou porque?"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T21:30:56.146782",
          "text": "?????"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T21:25:55.926119",
          "text": "Hmm"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T21:25:03.787557",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-26T21:25:15.127006"
            }
          ],
          "text": "É isso!"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T21:25:00.948076",
          "text": "É"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T21:22:53.859350",
          "text": "Kkkkkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T21:22:52.361354",
          "text": "Tá gravando"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T21:22:46.365202",
          "text": "Pq é milagre a Dani"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T21:20:09.534732",
          "text": "Nada"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T21:16:15.809790",
          "text": "O que? KKK"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T21:14:14.345085",
          "story_share": "Shared deborabasili0's story",
          "text": "😮"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T09:05:47.039840",
          "text": "Beijo"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T09:05:42.781957",
          "text": "Beijo"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T09:05:40.839842",
          "text": "Você também"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T09:05:35.120341",
          "text": "Dorme com Deus"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T09:05:32.147040",
          "text": "Kkkkkkkkkkkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T09:05:28.036050",
          "text": "Obrigada por admitir"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T09:05:21.317892",
          "text": "A culpa é sua mesmo"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T09:05:17.571227",
          "text": "É"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T09:05:16.172102",
          "text": "Kkkkkkkkkkkkk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T09:05:11.936468",
          "text": "Kkkkkkkkkkkkk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T09:05:00.150794",
          "text": "Desculpa por isso"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T09:04:42.561153",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-26T09:04:52.245921"
            }
          ],
          "text": "E tá quase amanhecendo"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T09:04:31.624612",
          "text": "Pq a gente fala muito ❤️"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T09:04:19.134531",
          "text": "Vamos dormir"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T09:04:13.571721",
          "text": "E agora"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T09:04:09.622514",
          "text": "Kkkkkkk aiai você q é"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T09:03:57.714748",
          "text": "É demais"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T09:03:52.722611",
          "text": "Você"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T09:01:02.200610",
          "text": "Kkkkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T09:00:58.419162",
          "text": "Eu também"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T08:59:20.258032",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-26T09:00:53.921831"
            }
          ],
          "text": "Eu acho importante a gente ir dormir"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T08:58:19.107952",
          "text": "?"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T08:58:18.025686",
          "text": "Você quer né"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T08:58:12.850709",
          "text": "Tava procurando aqui o vídeo"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T08:55:57.889491",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-26T08:57:51.490109"
            }
          ],
          "text": "Quer ir dormir?"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T08:54:59.433633",
          "text": "Acho q nem tenho mais não"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T08:53:48.799842",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-26T08:54:49.637155"
            }
          ],
          "text": "Os antigos"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T08:53:47.021611",
          "text": "Manda aí"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T08:53:45.451609",
          "text": "Eu não enjoo"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T08:52:36.177503",
          "text": "Normal uai"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T08:52:31.732429",
          "text": "Kkkkkkk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T08:51:42.944032",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-26T08:52:28.253842"
            }
          ],
          "text": "Agora pronto"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T08:51:38.499765",
          "text": "Eu ein"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T08:51:22.088706",
          "text": "Enjôo da minha cara kk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T08:50:54.901300",
          "text": "Kkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T08:50:49.739544",
          "text": "N sei"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T08:50:26.905390",
          "text": "Porque motivo?"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T08:49:52.429706",
          "text": "Sempre apago"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T08:49:47.037711",
          "text": "Altos msm"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T08:49:42.219976",
          "text": "Lá"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T08:49:41.103464",
          "text": "Altos"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T08:49:39.291361",
          "text": "Tinha"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T08:49:37.066450",
          "text": "Kkkkkkkkkkkkkkk eu sempre apago"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T08:49:28.711496",
          "text": "Se quiser depois eu pego lá"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T08:49:24.629696",
          "text": "Tem tudo lá no tiktok"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T08:49:18.820516",
          "text": "To zoando, não tem porque eu gravar"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T08:49:17.252277",
          "text": "Hj"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T08:49:15.632829",
          "text": "Já passei tanta vergonha hh"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T08:48:42.943488",
          "text": "Hmmmm"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T08:48:40.041222",
          "text": "Kkkkki"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T08:48:38.131205",
          "text": "Pode gravar"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T08:48:32.752720",
          "text": "Ata, a eu n ligo mais"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T08:48:22.050208",
          "text": "É ué"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T08:48:08.908823",
          "text": "Como assim, a tela? Kkkkkkk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T08:47:52.693023",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-26T08:47:55.454000"
            }
          ],
          "text": "Sim senhorita"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T08:47:20.649531",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-26T08:47:33.059897"
            }
          ],
          "text": "Gravar o vídeo?"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T08:46:41.223015",
          "text": "Vou gravar só essse"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T08:46:35.687028",
          "text": "Obrigado"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T08:46:27.318317",
          "text": "Boa escolha"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T08:46:22.766364",
          "text": "Hmmm"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T08:44:14.883117",
          "text": "Demorou"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T08:43:01.815090",
          "text": "N"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T08:43:00.834390",
          "text": "Kkkkkkkkkkk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T08:42:37.795083",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-26T08:42:56.465083"
            }
          ],
          "text": "Mas agora eu sei q tem um escondido"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T08:42:31.528636",
          "text": "Mentira"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T08:42:19.400929",
          "text": "Putz"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T08:42:17.559001",
          "text": "KKKKKKKKKKKKKK"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T08:42:06.987228",
          "text": "No tiktok"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T08:42:04.508029",
          "text": "Não"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T08:41:50.859317",
          "text": "Tu escondeu um então"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T08:41:31.601231",
          "text": "Aqui né"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T08:41:21.855287",
          "text": "Onde?"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T08:41:06.431195",
          "text": "Eu vi"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T08:39:56.615378",
          "text": "Kkkkkkkkkkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T08:39:54.201621",
          "text": "Melhores amgs e postei um lá mas ngm vê n"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T08:38:58.213315",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-26T08:39:23.601411"
            }
          ],
          "text": "E jogou nos melhores amigos?"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T08:38:50.796538",
          "text": "Ou só gravou"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T08:38:47.614305",
          "text": "Jogou no tik tok?"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T08:38:08.404060",
          "text": "Mil tentativas"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T08:38:01.931182",
          "text": "Eu ainda gravei dancinha de tiktok hj a noite kkkkkkkkkkkkkkkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T08:37:33.340100",
          "text": "Você tb ué"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T08:37:23.993569",
          "text": "Kkkk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T08:37:20.127794",
          "text": "Nessa energia"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T08:37:15.766991",
          "text": "De virar o dia"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T08:37:15.429154",
          "text": "De q"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T08:37:09.195170",
          "text": "Não sei como você da conta"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T08:37:04.895917",
          "text": "Sinceramente"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T08:36:07.721274",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-26T08:36:55.636119"
            }
          ],
          "text": "Não"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T08:36:00.642538",
          "text": "Kkkkkkkkkkkk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T08:35:51.204279",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-26T08:35:54.250481"
            }
          ],
          "text": "Sai dessa"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T08:35:48.889488",
          "text": "Não osh"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T08:35:28.168641",
          "text": "Você é meu psicólogo agr, conselheiro sla"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T08:35:08.832557",
          "text": "Kkkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T08:35:07.538008",
          "text": "Sai dessa"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T08:35:04.488747",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-26T08:35:10.869740"
            }
          ],
          "text": "Não osh"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T08:34:59.175187",
          "text": "Vou falar menos"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T08:34:52.935779",
          "text": "Aiai"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T08:34:40.683490",
          "text": "Sim, depois diz q não fala"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T08:34:30.023064",
          "text": "Falei mais que tu hoje"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T08:34:26.635871",
          "text": "Na moral"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T08:34:23.181930",
          "text": "Olha a hr"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T08:34:18.240236",
          "text": "Muito"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T08:34:16.736195",
          "text": "Fala po"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T08:34:13.537206",
          "text": "Kkkkkkkkkkkk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T08:34:09.024750",
          "text": "Beleza! 👍"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T08:34:05.616256",
          "text": "Ahhhh então quer dizer que eu falo demais né"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T08:33:50.475500",
          "text": "Ah fala sim"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T08:33:28.817123",
          "text": "Mas não falo nada demais"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T08:33:28.183674",
          "text": "Kkkkkkkkkk hmmm"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T08:33:19.629651",
          "text": "Essas frases é só quando to inspirado"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T08:33:04.655029",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-26T08:33:07.159235"
            }
          ],
          "text": "Nada"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T08:32:51.622312",
          "text": "Kkkkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T08:32:48.040393",
          "text": "Frase"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T08:32:45.295898",
          "text": "É só"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T08:32:42.169628",
          "text": "É vdd, vc n é de falar mas quando fala po"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T08:32:16.671246",
          "text": "Kkkkkkkkkkkkkkkk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T08:32:11.940215",
          "text": "Que lindo"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T08:32:09.167453",
          "text": "Ownt"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T08:31:16.447322",
          "text": "Não há conhecimento científico em cima disso"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T08:31:14.770384",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-26T08:31:58.937815"
            }
          ],
          "text": "Mas eu gosto de escutar você"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T08:31:01.668243",
          "text": "Você sabe falar eu sei escutar"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T08:30:56.929545",
          "text": "É, tudo que sei é escutar as pessoas"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T08:30:30.326194",
          "text": "Zoa"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T08:30:29.757216",
          "text": "Hummmmm"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T08:30:27.755137",
          "text": "Kkkkkkkkkkkkkkkk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T08:30:21.006015",
          "text": "Eu sou apenas um mero entendedor das aflições humanas"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T08:30:17.201348",
          "text": "Sérião"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T08:30:08.086290",
          "text": "Me ajudou a pensar"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T08:29:55.099130",
          "text": "Não sou não"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T08:29:45.348226",
          "text": "Fico é de cara"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T08:29:42.519976",
          "text": "Kkkkkkkkkkkkkkkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T08:29:34.744527",
          "text": "Né po"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T08:29:28.538871",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-26T08:29:31.727502"
            }
          ],
          "text": "É muita filosofia pra uma madrugada só"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T08:29:11.770705",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-26T08:29:48.672615"
            }
          ],
          "text": "Eu só sei q você é uma ótima pessoa p dar conselhos, vou precisar sempre kkkkkkkkkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T08:28:04.284267",
          "text": "Kkkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T08:28:02.742871",
          "text": "Tá bom"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T08:27:54.332448",
          "text": "Pense sobre isso"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T08:27:53.911970",
          "text": "Eu não estaria aqui"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T08:27:44.764833",
          "text": "Se falasse muito"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T08:27:41.358252",
          "text": "Gustavo"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T08:27:39.891444",
          "text": "Isso é bom"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T08:27:38.926410",
          "text": "Gustavo"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T08:27:35.390558",
          "text": "KKKKKKKKK"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T08:27:26.754164",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-26T08:27:32.088698"
            }
          ],
          "text": "Você fala o suficiente pra me fazer ficar aqui até as 6h"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T08:26:33.455581",
          "text": "Tava n"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T08:26:25.668973",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-26T08:26:30.201863"
            }
          ],
          "text": "E tu não tava com nada de sono né?"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T08:26:23.081549",
          "text": "Assumo"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T08:26:21.037129",
          "text": "Assume"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T08:26:19.370471",
          "text": "Mas eu falos muito msm"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T08:25:34.468206",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-26T08:25:37.769214"
            }
          ],
          "text": "Mentira kk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T08:25:29.282388",
          "text": "Já é pura"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T08:25:26.316682",
          "text": "Q vc falou agr"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T08:25:22.970572",
          "text": "Isso aí"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T08:25:16.869354",
          "text": "O queee"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T08:25:09.896794",
          "text": "Kkkkkkkkkkkkkkkkkkk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T08:25:09.504509",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-26T08:26:10.613275"
            }
          ],
          "text": "Por isso leva tempo demais"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T08:25:01.768129",
          "text": "Culpa 100% sua, você vai falando e eu só vou respondendo"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T08:24:36.784858",
          "text": "Isso q vc falou agr"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T08:24:32.624366",
          "text": "É verdade demais"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T08:24:03.435624",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-26T08:24:15.579814"
            }
          ],
          "text": "Se não tivesse uma conexão essa conversa nesse chat não passaria do primeiro dia"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T08:23:54.565235",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-26T08:24:17.393224"
            }
          ],
          "text": "Óbvio"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T08:23:52.801022",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-26T08:24:16.266908"
            }
          ],
          "text": "Do Gustavo"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T08:23:49.501622",
          "text": "E culpa é de quem?"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T08:22:51.311048",
          "text": "Kkkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T08:22:47.669057",
          "text": "E já são quase 6h dnvo"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T08:22:28.293452",
          "text": "Kkkkkkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T08:22:26.339382",
          "text": "Não mesmo"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T08:22:17.491112",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-26T08:22:20.332906"
            }
          ],
          "text": "Esse tipo de pessoa não se encontra toda hora"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T08:21:35.949959",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-26T08:22:00.310883"
            }
          ],
          "text": "O mesmo de você"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T08:20:48.016831",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-26T08:21:12.532583"
            }
          ],
          "text": "A cada dia que passa eu gosto mais de conversar contg"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T08:20:06.939429",
          "text": "Kkkkkkkkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T08:20:01.638541",
          "text": "Msm"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T08:20:00.546910",
          "text": "Mt boa"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T08:19:36.679920",
          "text": "Do além nd po"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T08:19:30.648796",
          "text": "Mt boa"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T08:19:23.830005",
          "text": "O cara tira umas frases do além"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T08:19:14.748059",
          "text": "Aiai"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T08:19:11.203066",
          "text": "Kkkkkkkkkkkkkkkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T08:19:05.212353",
          "text": "Kkkkkkkkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T08:19:03.107810",
          "text": "Olha essa frase mano"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T08:18:48.848130",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-26T08:18:53.540381"
            }
          ],
          "text": "Eu só entendo quem se faz entender"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T08:18:35.191293",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-26T08:18:42.431274"
            }
          ],
          "text": "Nada."
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T08:18:22.756080",
          "text": "Kkkkkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T08:18:18.976601",
          "text": "Psicólogo"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T08:18:15.320389",
          "text": "E você"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T08:17:49.833599",
          "text": "Minhas decisões"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T08:17:36.836081",
          "text": "Kkkkkkkkkkk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T08:17:24.483156",
          "text": "Como que a gente chegou nessa conversa"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T08:17:07.816824",
          "text": "Meu Deus"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T08:17:02.626738",
          "text": "Né vei"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T08:17:01.351143",
          "text": "Kkkkkkkkkkkkkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T08:17:00.959732",
          "text": "Sim"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T08:16:59.665316",
          "text": "KKKKKKKKKKKKKK"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T08:16:53.535581",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-26T08:16:55.654041"
            }
          ],
          "text": "Que papo filosófico doido"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T08:16:21.113846",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-26T08:16:38.188479"
            }
          ],
          "text": "Own, você que é psicólogo kk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T08:16:12.010135",
          "text": "Mentalidade"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T08:16:02.241023",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-26T08:16:42.234040"
            }
          ],
          "text": "Por isso que querendo ou n temos q ter muito cuidado com na hora de escolher o tipo de pessoa q cola com a gente, n por questão financeira óbvio mas por questão de mentalizar"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T08:15:28.370723",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-26T08:16:05.700232"
            }
          ],
          "text": "Não se culpe por ter personalidade"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T08:15:20.134607",
          "text": "Não falar demais"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T08:15:17.339555",
          "text": "A sua personalidade é falar bem"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T08:14:37.813193",
          "text": "É verdade"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T08:14:23.469824",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-26T08:14:31.301110"
            }
          ],
          "text": "Porque o ambiente e a mentalidade de uma pessoa rica de dinheiro é diferente do ambiente de uma pessoa pobre de dinheiro"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T08:13:52.022400",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-26T08:13:59.206151"
            }
          ],
          "text": "Uma pessoa pobre de dinheiro, alcança a riqueza andando com pessoa ricas"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T08:13:27.083529",
          "text": "Eu falo no sentido de que"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T08:13:22.409288",
          "text": "Por exemplo"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T08:13:14.891742",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-26T08:13:17.983255"
            }
          ],
          "text": "Mas assim"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T08:13:11.942345",
          "text": "Eu as vezes eu acho que falo mt, pode pedir p eu parar"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T08:12:31.544586",
          "text": "Kkk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T08:12:24.186483",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-26T08:12:27.968456"
            }
          ],
          "text": "Pode crê"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T08:10:21.891694",
          "text": "Andam com pessoas realizadas msm"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T08:10:13.743191",
          "text": "Pessoas realizadas geralmente"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T08:10:04.983081",
          "text": "Agr"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T08:09:45.184299",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-26T08:11:59.996048"
            }
          ],
          "text": "Pessoas ricas podem andar com pessoas pobres tb, pq é questão de mentalidade, as vezes o pobre n seja pobre de espírito, como um rico pode ser pobre de espírito tb"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T08:08:03.435651",
          "text": "Tipo assim"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T08:08:00.104471",
          "text": "Mas acho q seja uma questão de mentalidade"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T08:07:48.650046",
          "text": "Ah entendo o que vc disse"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T08:07:29.130477",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-26T08:07:31.169171"
            }
          ],
          "text": "Etc etc"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T08:07:26.523760",
          "text": "Pessoas realizadas andam com pessoas realizadas"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T08:07:16.186981",
          "text": "Pessoas ricas andam com pessoas ricas"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T08:07:10.630801",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-26T08:07:16.532496"
            }
          ],
          "text": "Por isso"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T08:07:08.597622",
          "text": "Sim, eu acho que tem muita pessoa que passa pela gente e não tem capacidade de agregar nada pra você"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T08:05:27.240040",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-26T08:06:11.938742"
            }
          ],
          "text": "Todas as pessoas são importantes, mas outras p você n será tão importante mas p outro será"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T08:04:29.330517",
          "text": "Digo assim, pessoas q n somam estão ali só por estar"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T08:03:43.897351",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-26T08:04:20.559567"
            }
          ],
          "text": "Pessoas aparecem em nossa vida outras n são importantes já outras são dms"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T08:02:59.414028",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-26T08:03:24.670091"
            }
          ],
          "text": "Acho q sim"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T08:02:51.966622",
          "text": "E você acha que apareceram pessoas importantes na sua vida?"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T08:02:36.537218",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-26T08:02:38.792702"
            }
          ],
          "text": "Legal"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T08:01:47.235638",
          "text": "Nada cai do céu kk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T08:01:37.847544",
          "text": "Claro"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T08:01:26.202977",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-26T08:01:32.323758"
            }
          ],
          "text": "Eu acredito que a oração causa algum efeito se além de orar você tá trabalhando pra isso"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T08:00:57.341746",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-26T08:02:18.000717"
            }
          ],
          "text": "Q me via preocupada com meu futuro, mas que era pra eu confiar em Deus pq me via como uma influência muito grande e que no momento certo iriam aparecer pessoas importantes na minha vida, eu fiquei de cara pq esse dia eu realmente estava mt preocupada"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:59:28.767768",
          "text": "Enfim, ela disse assim"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:59:19.040769",
          "text": "N disse isso n kk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:59:13.355358",
          "text": "Em profecia essas coisas?"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T07:59:08.731182",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-26T07:59:15.228710"
            }
          ],
          "text": "Pra você passar?"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:58:53.928059",
          "text": "Você acredita"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:58:51.732284",
          "text": "Kkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:58:46.944884",
          "text": "Uma vez uma menina orou por mim"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:58:35.599247",
          "text": "Ia mesmo"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:58:26.444373",
          "text": "Aham"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T07:58:19.952604",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-26T07:58:22.747409"
            }
          ],
          "text": "Você ia se frustrar"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:58:12.709421",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-26T07:58:35.362506"
            }
          ],
          "text": "Mas eu uma hr eu vou passar em um"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T07:58:11.197245",
          "text": "E se você renunciasse o cargo comissionado pra estudar pro concurso, e não passasse nele?"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:57:23.802755",
          "text": "Eu vou ter q ir por outro caminho"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:57:02.745160",
          "text": "E aí"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:56:58.913529",
          "text": "As vezes pode acontecer de eu n passar no concurso"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:56:43.794522",
          "text": "Penso"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:56:42.254328",
          "text": "E eu pensi"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:56:25.087477",
          "text": "É vdd"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T07:56:15.443956",
          "text": "As pessoas precisam de objetivos"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:56:13.781329",
          "text": "Simmm"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T07:56:05.127019",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-26T07:56:10.728202"
            }
          ],
          "text": "Uma pessoa que não pensa no futuro, o que ela faz no presente é em vão, é pra nada"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T07:55:40.169426",
          "text": "5 anos é uma forma de projetar seu futuro"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:55:13.420634",
          "text": "Eu preciso"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:55:10.657372",
          "text": "Mas"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:55:07.422586",
          "text": "Kkkkkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:55:05.595719",
          "text": "Tds"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:55:03.418919",
          "text": "É a pior de ts"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:54:58.987191",
          "text": "Pra mim"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:54:54.286836",
          "text": "É uma tortura"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:54:49.252042",
          "text": "Tipo acordar cedo"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:54:39.707835",
          "text": "N"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:54:37.810059",
          "text": "Ou"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:54:35.718295",
          "text": "Um futuro bom"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:54:29.104656",
          "text": "Vai me proporcionou"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:54:23.613076",
          "text": "Se o que eu faço agr"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:54:10.240218",
          "text": "Kkkkkkkkkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:54:05.666095",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-26T07:55:21.110655"
            }
          ],
          "text": "Daqui 5 anos"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:54:01.467172",
          "text": "Onde eu vou estar"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:53:57.387769",
          "text": "Eu tenho mania de pensar"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:53:52.574012",
          "text": "Perspectiva de vida, pq se não"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:53:32.072786",
          "text": "A gente tem q ter mesmo"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:53:22.199893",
          "text": "Mas é isso"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:53:17.948002",
          "text": "Eu n me vejo dependendo de ninguém, talvez eu precise um dia o que eu n quero q aconteça né"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:52:41.947405",
          "text": "Aí q já era"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:52:35.416771",
          "text": "Quando eu comecei trabalhar"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:52:29.452487",
          "text": "Pq via q eu precisava"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:52:23.179167",
          "text": "Minha mãe q comprava"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:52:16.658969",
          "text": "Eu nunca gostei de pedir as coisas"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T07:51:59.971911",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-26T07:52:03.995030"
            }
          ],
          "text": "De que você tem perspectiva de vida"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T07:51:49.003184",
          "text": "Esse incômodo de ser totalmente sustentada pelos pais é um sinal de maturidade"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:51:02.901137",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-26T07:51:11.813272"
            }
          ],
          "text": "Minha mãe q lute"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:50:51.398459",
          "text": "O que eu quero"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:50:47.279076",
          "text": "Eu só faço"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:50:44.516036",
          "text": "KKKKKKK"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:50:42.907756",
          "text": "Eu já sou teimosa q só"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:50:37.317177",
          "text": "Mas isso aí"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:50:29.637634",
          "text": "Exatamente"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T07:50:18.049679",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-26T07:50:19.875038"
            }
          ],
          "text": "Pra você mesma"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T07:50:14.235676",
          "text": "Vai saber o que você precisa"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T07:49:57.082561",
          "text": "Mas só você"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T07:49:55.041832",
          "text": "A sua mãe terá sempre as melhores intenções pra você"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:49:43.118659",
          "text": "Ela me ajudaria financeiramente mas sla isso me incomoda mesmo q seja besta"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T07:49:06.272987",
          "text": "Jkkkkkkkkkkkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:49:00.222901",
          "text": "E diz q por ela eu n aceitaria o emprego"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:48:49.625460",
          "text": "Só isso q ela fala"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:48:43.960369",
          "text": "Kkkkkkkkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:48:41.937238",
          "text": "Eu em"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:48:38.832436",
          "text": "Relaxa menina"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:48:33.585300",
          "text": "Não sei*"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:48:29.083973",
          "text": "Não pq vc se preocupa tanto"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:48:19.333651",
          "text": "Minha mãe fala sabe o que pra mim"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:48:12.338258",
          "text": "Nem minha mãe soube me ajudar"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T07:48:06.668713",
          "text": "Você que é boa de decisão!!"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:47:50.904196",
          "text": "Amei**"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:47:49.921184",
          "text": "Ei"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:47:49.628200",
          "text": "Kkkkkkkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:47:49.007695",
          "text": "Conselheiro"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T07:47:43.247034",
          "text": "Kkkkkkkkkkkkkkkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:47:36.389591",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-26T07:47:44.394913"
            }
          ],
          "text": "Psicólogo"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:47:30.807609",
          "text": "Tipo"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:47:25.105397",
          "text": "Af"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:47:22.108592",
          "text": "Kkkkki"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:47:20.496949",
          "text": "Você é muito bom"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T07:47:15.559716",
          "text": "Mas você que decidiu"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T07:47:11.393134",
          "text": "Viu que eu fui imparcial"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:46:52.249782",
          "text": "Kkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:46:51.083126",
          "text": "Mas vai dar certo você vai ver"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:46:42.158358",
          "text": "São alternativas"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:46:32.234135",
          "text": "Simmm"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T07:46:27.621293",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-26T07:46:30.388823"
            }
          ],
          "text": "Tudo pode acontecer"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T07:46:22.276511",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-26T07:46:29.792620"
            }
          ],
          "text": "Pode juntar uma grana e depois decidir se larga pra focar no concurso ou se continua trabalhando e muda de plano"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:45:45.091239",
          "text": "Kkkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:45:37.528950",
          "text": "É algo q tá ali"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:45:30.749002",
          "text": "Posso juntar uma grana"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:45:21.850162",
          "text": "Por isso acho q eu vou aceitar o trab"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:44:54.226770",
          "text": "Sim"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:44:46.049062",
          "text": "Eu n passo"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:44:43.652293",
          "text": "Primeiro pq n terminei a facul e segundo q se eu faço a prova dentro de 7 meses"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T07:44:13.714379",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-26T07:44:52.238157"
            }
          ],
          "text": "O trabalho não"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T07:44:05.691048",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-26T07:44:51.677834"
            }
          ],
          "text": "O concurso é um risco, uma imprecisão, imprevisível"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:43:47.670846",
          "text": "Não quero q o edital saia agr n"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:43:33.286936",
          "text": "Pode"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T07:43:29.519665",
          "text": "Em 7 meses pode acontecer muita coisa"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:43:27.982348",
          "text": "Tomara q não saia kkk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T07:43:17.697549",
          "text": "Em 7 meses você pode passar"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T07:43:11.763835",
          "text": "Você tem 7 meses pra se preparar, em 7 meses pode sair o edital"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:43:07.540003",
          "text": "Kkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:43:05.885516",
          "text": "Mas provavelmente vou"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:42:41.525271",
          "text": "Talvez eu nem aceite não"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:42:37.416335",
          "text": "Bem"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:42:30.847235",
          "text": "Pra pensar"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:42:25.931097",
          "text": "Uhum, é eu tenho 7 meses"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T07:42:03.164183",
          "text": "Não é só o conhecimento do assunto"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T07:41:52.522488",
          "text": "É um teste de múltipla escolha, que uma errada anula uma certa, tem muita coisa envolvida ali"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T07:40:59.259013",
          "text": "Porque o teste"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:40:56.510477",
          "text": "Simm"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T07:40:48.033914",
          "text": "Vai entender a sua dificuldade/facilidade"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T07:40:18.528972",
          "text": "Você vai entender como funciona as provas"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T07:40:06.230733",
          "text": "Faz essa prova aí pra ver como é"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:40:03.703765",
          "text": "Mas eu vou fazer de td pra passar"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:39:51.127835",
          "text": "As pessoas n passam no primeiro"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T07:39:43.916888",
          "text": "Então calma"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:39:40.163152",
          "text": "Sendo racional"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:39:35.383636",
          "text": "Geralmente"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:39:31.853499",
          "text": "Nunca fiz antes"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:39:27.014851",
          "text": "Mas n sei te falar bem é o meu primeiro concurso"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:38:58.103717",
          "text": "Eu acho que sim"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T07:38:20.384153",
          "text": "Por isso, é uma decisão que só você pode tomar, é muita vontade sua ser agente? Se você focasse diante do rendimento que você tá tendo estudando em casa o dia todo, você garante que passaria nesse concurso quando saísse?"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:37:53.799149",
          "text": "Eu vou tentar estudar no trabalho"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:37:42.406250",
          "text": "Mas igual te disse"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:37:21.664798",
          "text": "É verdade"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T07:37:12.130282",
          "text": "E isso exige tempo e disciplina"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T07:37:03.985022",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-26T07:37:08.008889"
            }
          ],
          "text": "Mas você tem um objetivo maior que é o de conseguir passar no concurso"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:36:55.027293",
          "text": "Hmmmmm"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T07:36:34.326121",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-26T07:36:40.955409"
            }
          ],
          "text": "Me acostumei a trabalhar o dia todo e não gosto de ficar em casa"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:36:29.497936",
          "text": "E nem eu consigo fazer isso"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T07:36:13.571890",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-26T07:36:20.295827"
            }
          ],
          "text": "Eu não renunciaria a grana e o trabalho em si pra estudar"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T07:35:37.048561",
          "text": "É porque"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:35:25.018401",
          "text": "Está ótimo"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:35:21.627144",
          "text": "Você tentando me ajudar"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:35:12.902819",
          "text": "Kkkkkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:34:58.323590",
          "text": "Estudar"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:34:55.627622",
          "text": "Mas eu prefiro"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:34:53.149048",
          "text": "Eu gosto de ir trabalhar tb"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:34:39.839409",
          "text": "Ficar em casa estudando é bom"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T07:34:24.106153",
          "text": "Você fica em casa o dia todo estudando tranquila?"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T07:34:07.119099",
          "text": "Mas não só pelo dinheiro"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T07:33:59.729882",
          "text": "Ah tá"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T07:33:56.523206",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-26T07:34:06.898546"
            }
          ],
          "text": "As dificuldades de não estar trabalhando são maiores que a dificuldade de estar em casa o dia todo estudando?"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:33:48.781872",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-26T07:33:59.268658"
            }
          ],
          "text": "Sim pq continuo recebendo"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T07:33:31.875017",
          "text": "Você tá lidando bem sem emprego?"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:32:06.992952",
          "text": "É"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:32:04.064103",
          "text": "Kkkkkkkk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T07:31:56.463935",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-26T07:32:01.667341"
            }
          ],
          "text": "Agora sim, chegamos no ponto certo"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:31:44.985129",
          "text": "Fiquei muito feliz"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:31:30.572507",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-26T07:31:37.863113"
            }
          ],
          "text": "Eu rendi absurdamente"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:31:13.482667",
          "text": "Emprego"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:31:11.590809",
          "text": "Sem facul"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:31:08.015484",
          "text": "Meu Deus"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:31:03.859910",
          "text": "Esses dias em casa eu rendi muito"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T07:30:13.024609",
          "text": "Sim"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:30:12.769050",
          "text": "Se eu ver q dá"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:30:07.085146",
          "text": "P estudar"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:30:02.869613",
          "text": "Talvez eu tenha tempo"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:29:57.035605",
          "text": "Ficando o dia inteiro na empresa"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:29:52.592949",
          "text": "Pq dependendo do setor q eu ficar lá"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:29:39.343331",
          "text": "Trabalhar"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:29:32.067458",
          "text": "Eu vou tentar"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:29:26.902952",
          "text": "Mas enfim"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:29:23.804946",
          "text": "Pq o conteúdo é mt parecido"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:29:10.220776",
          "text": "P ver como eu tô"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:29:05.546165",
          "text": "Eu vou fazer ele por experiência"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:28:58.388694",
          "text": "Mas esse aí"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:28:54.556156",
          "text": "Ainda"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:28:52.966530",
          "text": "Mas de agente n tá previsto"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:28:44.891106",
          "text": "N tem taf"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:28:41.529853",
          "text": "Pra assistente de trânsito"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:28:35.175942",
          "text": "Vai sair um agora"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:28:29.341920",
          "text": "Eu vejo"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T07:28:22.001822",
          "text": "Tenta ver alguma previsão desse concurso, se tem alguma coisa, noticia"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:28:16.330537",
          "text": "Eu vou tentar fazer"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:28:06.869493",
          "text": "Igual eu disse"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:27:49.949912",
          "text": "Eu tenho q estar preparada"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:27:43.838400",
          "text": "Já pensei isso, mas e se o conc sai do nada"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T07:27:33.136656",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-26T07:27:54.848813"
            }
          ],
          "text": "Ou você foca no concurso agora e abre mão da grana"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:27:18.967322",
          "text": "Deles"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T07:27:17.531836",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-26T07:27:30.254213"
            }
          ],
          "text": "Ou você foca no concurso depois que terminar a faculdade"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:27:13.546042",
          "text": "Depender"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:27:11.180812",
          "text": "Mas n consigo"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:27:08.186375",
          "text": "Meus pais"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:27:05.471287",
          "text": "Minha mãe me ajudaria com certeza"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:26:45.270342",
          "text": "Eu n quero ficar sem grana"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:26:30.889694",
          "text": "Sim, isso q pega"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T07:26:15.588592",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-26T07:26:24.371880"
            }
          ],
          "text": "Você tem que traçar prioridades mas também sem largar mão da sua liberdade financeira"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:26:05.141726",
          "text": "Juntar a grana pra depois da facul?"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T07:25:09.792375",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-26T07:25:45.153470"
            }
          ],
          "text": "Porque a faculdade você não vai largar de jeito nenhum"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T07:24:52.365556",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-26T07:25:44.171598"
            }
          ],
          "text": "Você poderia terminar a faculdade e juntar essa grana pra depois conseguir o tempo da faculdade pra estudar pro concurso mas ainda sim ganhando sua grana"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:24:13.401063",
          "text": "Tbm acho"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T07:23:54.982102",
          "text": "É muita coisa pra fazer de uma vez só"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:23:21.422217",
          "text": "Kkkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:23:19.787631",
          "text": "O que muita gente quer"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:23:09.926061",
          "text": "E assumir um concurso"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:22:54.489823",
          "text": "E aí quero só terminar logo a faculdade"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:22:31.094416",
          "text": "Durante no curso"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:22:25.816536",
          "text": "Mas minha mente mudou"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:22:19.222813",
          "text": "Eu realmente só queria dar aula"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:22:11.648117",
          "text": "Quando eu comecei a facul"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:21:58.440313",
          "text": "*"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:21:55.761910",
          "text": "Experimentar"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:21:53.250539",
          "text": "Eu vou explicar"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:21:45.460055",
          "text": "A oportunidade de dar aula"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:21:38.516286",
          "text": "Mas se eu tiver"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:21:27.723983",
          "text": "Eu tenho só esse foco agr"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:21:05.514600",
          "text": "Minha mente mudou muito, eu tenho muita vontade em passar no concurso do Detran, e por isso estudo tanto"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:20:15.210525",
          "text": "E no estágio obrigatório"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:20:03.002058",
          "text": "Acho q só quando eu realmente me formar"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:19:39.492428",
          "text": "Mas quero"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:19:33.497220",
          "text": "Eu realmente não sei mais"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T07:19:19.262846",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-26T07:19:23.635774"
            }
          ],
          "text": "Quando você se vê fazendo isso?"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T07:19:14.288512",
          "text": "Você não quer trabalhar na sua área pelo menos uma vez na vida?"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:18:48.745374",
          "text": "E saio"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:18:46.733956",
          "text": "Junto uma grana"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:18:43.547908",
          "text": "Eu fico uns meses"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:18:36.999759",
          "text": "Se não tiver"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:18:24.604005",
          "text": "Ver se tem como"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:18:14.961668",
          "text": "Sim, eu vou testar esse emprego, ver se consigo estudar no trabalho"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T07:17:41.744263",
          "text": "Onde você se vê?"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T07:17:31.330986",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-26T07:17:38.957467"
            }
          ],
          "text": "Ou você renúncia o trabalho e foca no concurso, e termina a faculdade"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T07:17:08.877006",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-26T07:17:15.966207"
            }
          ],
          "text": "Ou você fica no trabalho, recebe uma grana massa, e termina sua faculdade porque não há como renunciar ela"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T07:16:33.284045",
          "text": "Você tem duas opções"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T07:16:21.186882",
          "text": "Então"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T07:16:19.978970",
          "text": "Ta"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:16:16.384668",
          "text": "3 mil"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:16:14.111105",
          "text": "Recebe mais ou menos isso"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:16:06.956696",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-26T07:16:13.093330"
            }
          ],
          "text": "Aí cargo comissionado lá"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:15:51.194247",
          "text": "Mas o contrato vai acabar"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:15:36.533366",
          "text": "Terminar a facul"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:15:30.202295",
          "text": "Eu receberia isso até"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:15:25.158922",
          "text": "Por mim"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:15:23.416250",
          "text": "O que é de boa"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:15:16.331097",
          "text": "Eu trabalho 5 hrs e recebo 1300"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T07:14:59.412566",
          "text": "E antes tava recebendo o que?"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:14:13.827376",
          "text": "Nessa faixa"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:13:46.816725",
          "text": "Hmmmm, uns 3 mil por aí"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T07:13:12.195544",
          "text": "Quanto vai aumentar de salário?"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:13:05.803571",
          "text": "Então"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T07:12:59.540821",
          "text": "Sim"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:12:52.989081",
          "text": "Por n ter tempo pra estudar?"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T07:12:39.147731",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-26T07:12:44.607951"
            }
          ],
          "text": "Você vai se frustrar"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T07:12:34.726057",
          "text": "Se tu colocar o concurso dentro disso tudo"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:12:19.876877",
          "text": "Eu abro mão do emprego"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T07:12:16.897671",
          "text": "Então seu foco deve ser nisso por enquanto"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:12:13.799358",
          "text": "Se eu ver q n tem como"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:12:07.766762",
          "text": "Tentar me adaptar"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T07:11:56.054898",
          "text": "Ta"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:11:51.455861",
          "text": "Vou arriscar"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:11:45.195094",
          "text": "Kkkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:11:43.977588",
          "text": "A eu vou"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T07:11:34.052491",
          "text": "Tu vai ser feliz, trabalhando na sua empresa o dia todo, e fazendo faculdade à noite?"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T07:11:02.833941",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-26T07:11:05.538400"
            }
          ],
          "text": "A pergunta é"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T07:11:00.015624",
          "text": "Mas antes do dinheiro vem tua saúde e sua felicidade"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:10:56.802565",
          "text": "Por ser a noite"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:10:33.776148",
          "text": "Pra voltar da faculdade"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T07:10:32.931471",
          "text": "Calma, o dinheiro todo mundo quer"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:10:27.517178",
          "text": "E aí pago uma van pra mim"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:09:22.079621",
          "text": "Kkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:09:21.105045",
          "text": "E é isso"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:09:06.095417",
          "text": "Estudar no trabalho quando n tiver mts demandas"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:08:52.612461",
          "text": "Então vou ver se consigo"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:08:45.208668",
          "text": "Kkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:08:42.783369",
          "text": "Eu quero o dinheiro"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:08:30.528712",
          "text": "Mas quem quer consegue"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:08:13.182065",
          "text": "Pro concurso"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:08:10.449491",
          "text": "E ainda ter q estudar"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:08:05.091849",
          "text": "Trabalhar"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:07:57.561641",
          "text": "Eu vou ter q estudar de noite"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:07:46.218536",
          "text": "Tudo"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:07:44.143654",
          "text": "Vai mudar"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:07:41.971459",
          "text": "Mas sendo contratada"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:07:31.477326",
          "text": "Eu faço minha parte q n é muita coisa assim e consigo estudar, fazer a faculdade"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:07:04.674887",
          "text": "Lá"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:07:02.684895",
          "text": "E o que n é ruim pra mim, pq lay"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:06:52.642123",
          "text": "Vai ser se eu quiser continuar pelo contrato"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:06:38.838399",
          "text": "Os serviços mais assim n é competência minha sabe"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:06:23.015267",
          "text": "Então, vou ser bem sincera contg, evolui muito lá, muito mesmo, foi meu primeiro estágio, mas como estagiária"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T07:05:55.536096",
          "text": "Você tá evoluindo lá? Profissionalmente e pessoalmente?"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T07:05:45.201030",
          "text": "O seu trabalho faz sentido pra você?"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T07:05:36.598429",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-26T07:05:39.348019"
            }
          ],
          "text": "Lembra que eu falei que o trabalho tem que fazer sentido?"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:05:35.750307",
          "text": "Eu vou continuar lá, e tentar me organizar"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:05:16.170229",
          "text": "Kkkkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:05:14.750876",
          "text": "Eu já decidi"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T07:05:10.663321",
          "text": "Claro que entendi"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:05:07.997940",
          "text": "Mas me conhecendo"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:04:52.228907",
          "text": "Vc me entende"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:04:49.407138",
          "text": "Mas né"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:04:44.194623",
          "text": "N é mesmo"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:04:40.060519",
          "text": "Mas lá n é ruim"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:04:35.369842",
          "text": "Q é ficar lá"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:04:26.036828",
          "text": "Pq n quero isso p minha vida"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:04:15.065327",
          "text": "Estudar pro concurso"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:04:08.516460",
          "text": "Mas eu preciso"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:04:04.616018",
          "text": "Kk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:04:00.632341",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-26T07:04:05.711182"
            }
          ],
          "text": "Eu quero o dinheiro do trab"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T07:03:50.248952",
          "text": "Ou quer estudar para o concurso?"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T07:03:34.307416",
          "text": "Você quer trabalhar?"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:03:27.100713",
          "text": "Uhumm"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T07:03:20.583337",
          "text": "Uma hora você teria que tomar essas decisões mesmo"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:02:58.215584",
          "text": "N vou aguentar n"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:02:52.259243",
          "text": "Porém"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:02:48.729232",
          "text": "Minha mãe não quer q eu trabalhe"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:02:37.918601",
          "text": "E o concurso"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:02:32.001288",
          "text": "Mas tem a faculdade ainda"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:02:27.372547",
          "text": "Vou ter q trabalhar de manhã e de tarde"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:02:12.307324",
          "text": "Aí"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:02:09.913588",
          "text": "Mas"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:02:08.010251",
          "text": "O salário aumenta e muito"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:01:57.937074",
          "text": "Pq acho q eles me contratam lá"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:01:34.740936",
          "text": "Pq n sei o que é melhor"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:01:28.240569",
          "text": "Tava com medo"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:01:23.063670",
          "text": "Importantes"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:01:18.896903",
          "text": "Escolhas"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:01:12.647012",
          "text": "Vou ter q fazer"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:01:08.584920",
          "text": "E aí"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:00:54.103284",
          "text": "Q é o tempo máximo"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:00:48.389147",
          "text": "Completa 2 anos"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:00:33.373022",
          "text": "E aí"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T07:00:25.202569",
          "text": "Só tenho mais sete meses na empresa como estagiária"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T06:59:49.768823",
          "text": "Depois que você voltar, tem 7 meses? Ou já tá contando?"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T06:59:44.260724",
          "text": "Já vai ter dado os dois anos"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T06:59:31.449281",
          "text": "Acabando os 7 meses"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T06:59:17.792206",
          "text": "São dois anos de contrato"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T06:59:10.061781",
          "text": "Digo assim"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T06:59:03.099009",
          "text": "Não dá pra trabalhar home office?"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T06:58:50.090495",
          "text": "E aí? Vai voltar quando?"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T06:58:37.832957",
          "text": "É vdd"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T06:58:25.182748",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-26T06:58:29.724566"
            }
          ],
          "text": "O pedal que cê faz de vez em quando trabalha o cardíaco, condicionamento físico, resistência também"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T06:58:24.759426",
          "text": "Do estágio"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T06:58:20.670118",
          "text": "Meu contrato acaba em 7 meses"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T06:58:12.830382",
          "text": "Kkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T06:58:10.599309",
          "text": "Eu tava preocupada com a minha vida esses dias"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T06:58:04.087247",
          "text": "Mas é suave eu acho"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T06:57:49.729025",
          "text": "Mais uma HR vai sair"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T06:57:45.261170",
          "text": "Sair"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T06:57:44.229689",
          "text": "Mas n está nem previsto ainda"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T06:57:26.515925",
          "text": "Pois é"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T06:57:20.032668",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-26T06:57:23.779744"
            }
          ],
          "text": "Imagina passar na prova, e não passar no taf"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T06:57:07.380546",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-26T06:57:10.105178"
            }
          ],
          "text": "Claro"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T06:57:01.556103",
          "text": "Oh gente"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T06:56:51.758007",
          "text": "A fazer barra"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T06:56:49.236203",
          "text": "E eu preciso aprender"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T06:56:43.172822",
          "text": "Mesmo"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T06:56:38.302222",
          "text": "Eu tô é bem sedentária"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T06:56:32.178713",
          "text": "Kk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T06:56:29.829937",
          "text": "N estou tão ativa mais"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T06:56:11.759130",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-26T06:56:19.479287"
            }
          ],
          "text": "Mas isso aí não faz muita diferença se você é ativa..."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T06:55:52.270751",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-26T06:56:13.457729"
            }
          ],
          "text": "Mas é tão difícil pra você parar?"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T06:55:36.530645",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-26T06:56:10.674923"
            }
          ],
          "text": "Tem umas composições ali que são ruins"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T06:55:25.028422",
          "text": "Eu acho que a coca ajuda pra isso"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T06:54:34.414645",
          "text": "Mds"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T06:54:33.192094",
          "text": "Preciso mt"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T06:54:30.052630",
          "text": "Eu também"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T06:54:24.164319",
          "text": "Coca deixa a gente sedentário?"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T06:54:04.976383",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-26T06:54:09.672631"
            }
          ],
          "text": "Focar de novo em esporte/treino"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T06:53:47.044736",
          "text": "Mas vou sair dessa fase em breve"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T06:52:59.732413",
          "text": "Eu já to sedentário"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T06:52:44.964864",
          "text": "Mas isso me deixa sedentário demais"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T06:52:35.410864",
          "text": "Eu era viciadin em coca também"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T06:52:18.005150",
          "text": "Sou dessas"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T06:52:06.418503",
          "text": "É cada história"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T06:52:02.681512",
          "text": "Ohhh"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T06:52:01.163690",
          "text": "KKKKK"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T06:51:55.641516",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-26T06:52:17.022320"
            }
          ],
          "text": "Queria muito n beber refri q nem vc"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T06:51:46.966782",
          "text": "Pra ver quem come mais"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T06:51:45.202855",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-26T06:51:58.738995"
            }
          ],
          "text": "Cê deve fazer as competições em rodízio"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T06:51:20.897658",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-26T06:51:30.351715"
            }
          ],
          "text": "Mas eu como bastante também"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T06:50:18.030099",
          "text": "Kkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T06:50:16.434565",
          "text": "Isso é um privilégio"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T06:50:05.939672",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-26T06:50:08.096784"
            }
          ],
          "text": "Eu também não engordo"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T06:50:02.485089",
          "text": "Nem tanto, p esse lado aí é bom kk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T06:49:46.655252",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-26T06:49:49.531084"
            }
          ],
          "text": "Genética muito boa"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T06:49:45.607358",
          "text": "E quando acontece eu emagreço rápido tbm"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T06:49:29.089180",
          "text": "É meio difícil"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T06:49:11.343381",
          "text": "Engordar"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T06:49:08.267013",
          "text": "Pq"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T06:49:04.885673",
          "text": "Tenho uma genética boa"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T06:48:48.101198",
          "text": "Ent"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T06:48:46.666949",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-26T06:49:10.957635"
            }
          ],
          "text": "Em rodízio"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T06:48:38.182970",
          "text": "Kkkkkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T06:48:32.500088",
          "text": "Mesmo"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T06:48:30.201276",
          "text": "Muito"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T06:48:28.273737",
          "text": "Eu como muito"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T06:48:19.218223",
          "text": "E assim vai"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T06:48:18.041965",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-26T06:48:22.804491"
            }
          ],
          "text": "De um lado o arroz com feijão e de outro lado o chocolate"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T06:48:09.550502",
          "text": "Docinho"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T06:48:06.153219",
          "text": "E já me dá vontade de comer um docinhos"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T06:47:54.989561",
          "text": "Eu como algo de sal"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T06:47:54.365248",
          "text": "Ao mesmo tempo"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T06:47:49.222467",
          "text": "É"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T06:47:48.421881",
          "text": "Já entendi"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T06:47:46.283950",
          "text": "Os dois"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T06:47:45.084319",
          "text": "N sei"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T06:47:40.663104",
          "text": "Kkkkkkkkkkkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T06:47:36.804304",
          "text": "Ish"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T06:47:15.773664",
          "text": "Prefere?"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T06:47:02.750808",
          "text": "Sal ou doce?"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T06:46:23.623553",
          "text": "Amo dms"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T06:46:13.483899",
          "text": "Tava baum ein"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T06:46:08.853019",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-26T06:46:18.429239"
            }
          ],
          "text": "Como uns KitKat hoje"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T06:45:38.743089",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-26T06:45:48.338203"
            }
          ],
          "text": "Eu ia morrer primeiro q nem o gordinho"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T06:45:26.374368",
          "text": "Olha as coisas q eu falo kkkkkkkkkkkkkk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T06:45:19.139896",
          "text": "Aí sim"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T06:45:07.122741",
          "text": "Aiaiai"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T06:44:59.551123",
          "text": "Kkkkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T06:44:58.255495",
          "text": "Po"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T06:44:56.892079",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-26T06:45:32.375207"
            }
          ],
          "text": "A fábrica de chocolate"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T06:44:51.010478",
          "text": "Com"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T06:44:48.800783",
          "text": "Essa emoção"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T06:44:40.525485",
          "text": "Só queria"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T06:44:36.895166",
          "text": "Nam, nada disso kkkkkkkkk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T06:44:25.714359",
          "text": "Seria um privilégio"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T06:44:22.590849",
          "text": "Imagina você nessa cozinha aí"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T06:44:12.072439",
          "text": "Deve ser emocionante ver cenas do desenho na vida real"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T06:43:01.002050",
          "text": "Deus é mais"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T06:42:57.514786",
          "text": "Na vida real"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T06:42:53.983752",
          "text": "Mas assim"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T06:42:46.088618",
          "text": "Amo"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T06:42:42.163619",
          "text": "É sim kkkkkk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T06:42:26.183453",
          "text": "Hmmm"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T06:42:23.753756",
          "text": "Teu desenho favorito né?"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T06:42:17.570140",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-26T06:42:23.574084"
            }
          ],
          "text": "Kkkkkkkkkkkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T06:40:40.485987",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-26T06:42:10.600156"
            }
          ],
          "text": "AF KKKKKK"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T06:40:33.771386",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-26T06:42:09.848636"
            }
          ],
          "media_owner": "funncob",
          "media_share_caption": "Ratatui",
          "media_share_url": "https://scontent-atl3-2.cdninstagram.com/v/t51.2885-15/e35/109784689_1699264640223172_2026138738497320190_n.jpg?_nc_ht=scontent-atl3-2.cdninstagram.com&_nc_cat=104&_nc_ohc=CyQ3IXUIJagAX-9wZHc&tp=18&oh=c8a00e1233efcc2fa1da1de88f71ab8d&oe=5FCB4D62&ig_cache_key=MjM2MTQ3MjA2Njk0MDk4NDE5Nw%3D%3D.2"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T06:39:32.853715",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-26T06:39:44.215749"
            }
          ],
          "text": "Ta"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T06:38:31.594627",
          "text": "N muda"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T06:38:15.026231",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-26T06:38:20.805831"
            }
          ],
          "text": "Espero que não mesmo"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T06:38:06.697150",
          "text": "Hmm"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T06:36:20.929107",
          "text": "Era uma dúvida"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T06:36:12.407127",
          "text": "Claro que não"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T06:35:21.389519",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-26T06:36:03.462684"
            }
          ],
          "text": "Isso muda alguma coisa na nossa relação?"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T06:34:14.961178",
          "text": "Hoje tinha só essa dúvida mesmo kk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T06:33:53.430557",
          "text": "Kkkkkkkkk ainda n"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T06:33:39.463375",
          "text": "Mais pergunta?"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T06:32:39.300848",
          "text": "Kkk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T06:32:34.564001",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-26T06:32:36.368829"
            }
          ],
          "text": "Bela percepção"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T06:32:23.244660",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-26T06:32:28.549097"
            }
          ],
          "text": "É isso!"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T06:31:20.067129",
          "text": "Você ainda n tem uma preferência, mas o seu coração está em Deus, seu coração tá no lugar certo e um dia você vai saber qual \"religião\" seguir, mas por enquanto você acredita em Deus, vê semelhança no modo de viver em ambas, mas sabe o pq delas serem diferentes, mas ainda n sabe qual prefere"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T06:28:15.463079",
          "text": "Sim"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T06:28:09.034683",
          "text": "Sério?"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T06:27:54.833494",
          "text": "Entendi"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T06:27:38.147681",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-26T06:27:40.030676"
            }
          ],
          "text": "Ta em Deus"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T06:27:34.783018",
          "text": "Meu coração não tá na religião"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T06:27:30.556221",
          "text": "Embora tenha crescido no espiritismo"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T06:27:14.010403",
          "text": "Entendo"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T06:27:11.120451",
          "text": "Só acredita em Deus"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T06:27:07.169689",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-26T06:27:19.345700"
            }
          ],
          "text": "Ainda não"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T06:26:56.103044",
          "text": "Você n tem uma preferência"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T06:26:41.877129",
          "text": "É kk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T06:26:35.463964",
          "text": "Kkkkkkkkkk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T06:26:30.088549",
          "text": "Acho que estendi um pouco"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T06:26:16.583739",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-26T06:26:18.333370"
            }
          ],
          "text": "Sim, eu acredito em Deus"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T06:25:53.913222",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-26T06:25:59.603231"
            }
          ],
          "text": "Mas respondendo sua pergunta lá em cima"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T06:25:47.450632",
          "text": "Perfeitamente"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T06:24:42.240136",
          "text": "Mas isso é complicado kk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T06:24:11.197519",
          "text": "Mas cabe a gente seguir ele ou n"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T06:23:50.892059",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-26T06:25:12.464100"
            }
          ],
          "text": "E sim, seu propósito sempre será o mesmo, o propósito q Deus tem pra nós sempre será o mesmo propósito"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T06:23:06.481439",
          "text": "Q bom q você acredita"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T06:22:37.422863",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-26T06:22:42.861195"
            }
          ],
          "text": "Porque não acreditar? Meu propósito sempre foi o mesmo..."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T06:22:26.900709",
          "text": "Eu acredito"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T06:22:22.914259",
          "text": "Mas se você tá falando pra mim que tudo que tá na Bíblia é verdade"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T06:21:18.894159",
          "text": "Mas cada religião é diferente mesmo, mas eu sou cristã e respeito as demais"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T06:20:23.818060",
          "text": "É"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T06:20:18.201359",
          "text": "Que doideira"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T06:20:02.401000",
          "text": "Q é diferente"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T06:19:57.703117",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-26T06:20:14.855621"
            }
          ],
          "text": "Só q eles seguem algumas coisas q o próprio humano instituiu como adorar símbolos, mas alguns deles dizem q n eles n adoram"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T06:19:11.955347",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-26T06:20:11.756785"
            }
          ],
          "text": "Tem gente que tá dando a vida pra discutir isso com as pessoas..."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T06:18:54.697494",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-26T06:20:19.030644"
            }
          ],
          "text": "Viu? Confusão doida pra entender que o propósito é o mesmo... servir..."
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T06:18:34.537080",
          "text": "E eles realmente são"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T06:18:15.204567",
          "text": "Mas pra eles, eles são só q eles n seguem esse ponto aí, q é adorar somente a Deus"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T06:17:16.782641",
          "text": "Pelo menos eu acredito q n"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T06:17:10.611065",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-26T06:17:22.095437"
            }
          ],
          "text": "Então assim, não há como ser cristão"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T06:17:04.665764",
          "text": "Assim"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T06:16:59.832400",
          "text": "Não"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T06:16:51.681935",
          "text": "Então eles não seguem 100% a Bíblia?"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T06:16:42.232099",
          "text": "Ah"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T06:16:38.238519",
          "text": "Adorar simbolos"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T06:16:28.745139",
          "text": "Como o que vc disse"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T06:16:24.031487",
          "text": "Eles tem práticas que a bíblia n aprova, assim q nós pensamos"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T06:16:12.414449",
          "text": "O que é um mero detalhe"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T06:15:59.101830",
          "text": "Só diferença de religião"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T06:15:50.058134",
          "text": "Aí nós seguimos a bíblia e somos evangélicos"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T06:15:49.552038",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-26T06:16:04.022898"
            }
          ],
          "text": "Tem diferença de propósito aí?"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T06:15:26.995306",
          "text": "Isso aí"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T06:15:23.043017",
          "text": "Mas adoram símbolos"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T06:15:15.551810",
          "text": "E tem algumas diferenças na doutrina deles"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T06:15:14.661634",
          "text": "Boa"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T06:15:03.563636",
          "text": "Também são cristãos"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T06:14:58.066342",
          "text": "Os católicos"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T06:14:43.865779",
          "text": "Que"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T06:14:42.861087",
          "text": "Só"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T06:14:41.204722",
          "text": "Cristão é quem acredita em Jesus e segue a bíblia"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T06:13:55.774297",
          "text": "Existe essa diferença? De cristão e evangélico?"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T06:13:43.251489",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-26T06:14:19.478858"
            }
          ],
          "text": "Tem gente que se diz evangélica, mas ta afastada de Jesus? Por não ser 100% cristão?"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T06:13:08.591844",
          "text": "Que você falou"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T06:13:06.245749",
          "text": "Mas a questão da religiosidade"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T06:13:01.151186",
          "text": "Uhumm"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T06:12:54.953372",
          "text": "Os dois são importantes"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T06:12:49.631962",
          "text": "Sim"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T06:12:42.298521",
          "text": "Eu sou cristã, e evangélica ué kk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T06:11:37.280909",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-26T06:12:10.247096"
            }
          ],
          "text": "E ser cristão é acreditar 100% na Bíblia"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T06:11:22.621217",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-26T06:12:06.283269"
            }
          ],
          "text": "Ser evangélico é uma religião"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T06:11:12.261681",
          "text": "Quero dizer que"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T06:11:09.280617",
          "text": "A pergunta não foi correta"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T06:10:25.185659",
          "text": "Simmm"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T06:09:56.632035",
          "text": "Sendo a bíblia a palavra"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T06:09:31.935108",
          "text": "Claro q são, mas ele deixou a bíblia kk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T06:09:04.129322",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-26T06:09:08.860419"
            }
          ],
          "text": "Mas Deus e Jesus são mais"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T06:08:56.730165",
          "text": "A religião é importante"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T06:08:41.998067",
          "text": "O outro é a Bíblia"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T06:08:35.156303",
          "text": "Um é religião"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T06:08:27.240311",
          "text": "Então você acha mais importante ser cristão ou evangélico?"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T06:08:11.423172",
          "text": "Boa"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T06:07:33.815008",
          "text": "Religiosidade*"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T06:06:07.077848",
          "text": "Enfim"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T06:05:59.159122",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-26T06:07:34.068877"
            }
          ],
          "text": "De Jesus"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T06:05:56.831462",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-26T06:07:32.792232"
            }
          ],
          "text": "Afasta as pessoas"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T06:05:52.634896",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-26T06:07:11.894607"
            }
          ],
          "text": "Da religiosidades q também"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T06:05:44.493955",
          "text": "Tem a parte"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T06:05:33.021328",
          "text": "Que todos nós pecamos"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T06:05:26.909644",
          "text": "Sendo"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T06:05:25.573824",
          "text": "E querer apontar erros ou pecados"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T06:05:15.785201",
          "text": "Como quem tem mania de olhar pro próximo"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T06:05:02.989218",
          "text": "Mas isso em todo lugar"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T06:04:43.114931",
          "text": "Mas a igreja tem vários problemas tbm"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T06:04:30.101287",
          "text": "A igreja q n tem isso como verdade n tá certa"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T06:04:17.578466",
          "text": "Ações sociais mesmo"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T06:04:06.768179",
          "text": "E é dever de todos nós ajudar o próximo, digo assim"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T06:03:14.135995",
          "text": "E tudo mais"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T06:03:11.644302",
          "text": "Preenche  vazios"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T06:02:59.982582",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-26T06:07:18.386518"
            }
          ],
          "text": "Mas eu acredito q Deus realmente conforta as pessoas"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T06:01:54.466831",
          "text": "Entendo"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T06:01:38.909074",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-26T06:07:20.153326"
            }
          ],
          "text": "Existe Deus, pai e espírito santo. E a palavra q Deus nos deixou, e levar o evangelho é dos pedidos de Deus, e tem várias formas de fazer isso, e eu acredito nisso"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T06:01:33.307450",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-26T06:01:41.070901"
            }
          ],
          "text": "Além de uma crença minha, eu tenho uma convicção que ele existe"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T06:01:19.422294",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-26T06:02:22.190503"
            }
          ],
          "text": "A ideia de existir um Deus conforta as pessoas"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T06:00:18.027420",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-26T06:03:22.958204"
            }
          ],
          "text": "Enquanto as pessoas se prejudicarem, se atacarem, discutirem e se separarem, pessoas continuarão morrendo de fome, de frio, de depressão..."
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T05:59:40.310027",
          "text": "Mesmo"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T05:59:38.384318",
          "text": "É simples"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T05:59:35.539259",
          "text": "Sim"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T05:59:19.462723",
          "text": "Ao mesmo tempo que é complexo, é simples"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T05:59:00.267650",
          "text": "Relacionamento*"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T05:58:18.675039",
          "text": "Pq cada um vai acreditar em algo"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T05:57:49.143788",
          "text": "Mas é um assunto mei complicado religião"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T05:57:31.683947",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-26T05:58:59.193544"
            }
          ],
          "text": "É, igual você disse, para nós o evangelho deve ser 100% levado como verdade, talvez a gente pense diferente isso, pra mim a verdade é a bíblia, mas muito sobre o que você disse está na bíblia, como ajudar o próximo enfim, é que para nós cristãos acreditamos no céu e inferno e q vamos sim ser julgados, q foi o q vc falou q n devíamos estar preocupados c isso, más quem tem relacionado com Jesus n se preocupa com isso pq tem a certeza da salvação"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T05:52:58.690298",
          "text": "Kkk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T05:52:40.168799",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-26T05:52:51.501800"
            }
          ],
          "text": "Prazeroso é comer pipoca de leite ninho"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T05:52:28.736150",
          "text": "O trabalho tem que fazer sentido, não ser prazeroso"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T05:52:18.468266",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-26T05:52:26.963960"
            }
          ],
          "text": "Uma filosofia de vida: trabalhe, sirva e não encha o saco"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T05:51:36.289047",
          "text": "A gente tá precisando de trabalho, empatia, enxergar o outro, dar água, comida, agasalho"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T05:50:59.730222",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-26T05:51:03.582486"
            }
          ],
          "text": "O mundo não tá precisando disso"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T05:50:45.563116",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-26T05:50:49.576973"
            }
          ],
          "text": "Se a gente vai reencarnar ou ser julgado"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T05:50:36.187738",
          "text": "Porque as pessoas querem discutir"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T05:50:31.612524",
          "text": "As duas religiões tem pontos diferentes, que são pontos irrelevantes na trajetória de um ser humano no final das contas"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T05:49:42.867022",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-26T05:50:03.157442"
            }
          ],
          "text": "E o espiritismo tem 3 pilares: filosofia, ciência e religião"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T05:49:19.348372",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-26T05:49:42.629397"
            }
          ],
          "text": "A Bíblia é incrível"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T05:48:50.767425",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-26T05:48:53.898361"
            }
          ],
          "text": "Pra ser um cristão"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T05:48:44.454699",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-26T05:48:52.860269"
            }
          ],
          "text": "Que o evangelho deve ser 100% levado como verdade"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T05:48:13.641918",
          "text": "Eu sei"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T05:47:46.689407",
          "text": "O espiritismo nada mais é do que a Bíblia com alguns princípios diferentes"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T05:47:13.098143",
          "text": "Galera tem uma opinião defasada sobre o espiritismo"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T05:47:04.158555",
          "text": "E essa energia se reproduz nos trabalhos sociais no centro espírita"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T05:46:46.879520",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-26T05:46:53.275495"
            }
          ],
          "text": "Eu sinto uma energia imensa quando vou na igreja"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T05:46:19.394568",
          "text": "Então"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T05:46:00.330188",
          "text": "Gostou mais de uma ou nem tem preferência"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T05:45:38.403334",
          "text": "Tipo"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T05:45:36.883176",
          "text": "Então"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T05:45:34.673242",
          "text": "Você foi nas duas"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T05:45:05.271177",
          "text": "A idéia do cristianismo é assim seguir jesus e fazer jesus conhecido"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T05:44:32.999916",
          "text": "Estabelecer força e seguir Jesus"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T05:44:08.066532",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-26T05:44:11.210548"
            }
          ],
          "text": "Se juntar"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T05:44:06.002719",
          "text": "Eu acho que as religiões tem que fazer parcerias"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T05:43:55.126660",
          "text": "Galera tem uma mania de separar as coisas"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T05:43:52.719146",
          "text": "A gente n acredita em reencarnação"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T05:43:43.507830",
          "text": "Muda alguns detalhes"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T05:43:39.528895",
          "text": "Mas igual vc disse"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T05:43:23.623635",
          "text": "Todos tem a mesma ideia"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T05:43:13.190467",
          "text": "No centro espírita"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T05:43:01.234809",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-26T05:43:03.320706"
            }
          ],
          "text": "Na igreja"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T05:42:55.225508",
          "text": "Eu já fui na universal"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T05:42:49.504877",
          "text": "É um assunto tão bom e ao mesmo tempo muita das vezes mal interpretado"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T05:38:37.237966",
          "text": "Você deve ter noção"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T05:38:31.765487",
          "text": "Como a família da sua mãe é evangélica"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T05:38:17.366072",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-26T05:41:17.738498"
            }
          ],
          "text": "Q eu sou a igreja, e que tenho o espírito santo em mim"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T05:37:42.768174",
          "text": "Gente"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T05:37:40.128780",
          "text": "Acredito igual o Lucas disse lá com a genre,"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T05:37:05.734532",
          "text": "No relacionamento com Deus"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T05:36:55.579026",
          "text": "E acredito"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T05:36:52.465379",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-26T05:41:09.587784"
            }
          ],
          "text": "Eu sou cristã e acredito em Jesus, q ele salvou todos nós, acredito na bíblia, a palavra que Deus deixou e tal, os ensinamentos, sendo o principal o amor ao próximo, acredito q existe o céu e o inferno"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T05:35:10.160379",
          "text": "E o que você acha sobre isso tudo?"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T05:34:31.610061",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-26T05:34:37.390360"
            }
          ],
          "text": "Que ótimo"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T05:34:01.290192",
          "text": "Meu pai é pastor kk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T05:33:54.101774",
          "text": "Minha família tbm"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T05:33:46.787112",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-26T05:34:20.502821"
            }
          ],
          "text": "Entendi, eu sou evangélica"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T05:33:22.800739",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-26T05:33:25.884459"
            }
          ],
          "text": "E isso é importante"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T05:33:16.886736",
          "text": "Trabalhos sociais etc"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T05:33:09.288255",
          "text": "Mas acho que o objetivo da religião não deve ser esse... a religião é um conforto pras pessoas acreditarem em algo e é uma ferramenta que se usa pra fazer o bem"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T05:32:14.098482",
          "text": "Céu inferno, juízo final reencarnação"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T05:31:55.174107",
          "text": "Existem divergências nos detalhes"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T05:31:47.187534",
          "text": "Que é de seguir Deus e Jesus e fazer o bem etc"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T05:31:33.747025",
          "text": "Na essência"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T05:31:25.782352",
          "text": "E não acho que o espiritismo contradiz o evangelho e nem vice-versa"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T05:30:43.406424",
          "text": "Acho que o propósito geral é servir a Deus e ajudar a sociedade através do que você pode"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T05:30:11.635316",
          "text": "Mas não me prendo a isso"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T05:29:53.957692",
          "text": "To aí no meio"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T05:29:27.704088",
          "text": "E de parte de pai espírita"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T05:29:22.957696",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-26T05:30:33.894176"
            }
          ],
          "text": "Minha família de parte de mãe é evangélica"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T05:28:55.876979",
          "text": "Acredito em Deus"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T05:28:43.561501",
          "text": "Que bom"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T05:22:49.962436",
          "text": "Gustavo você tem alguma religião? Acredita em algo? Só por curiosidade"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T05:19:07.368838",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-26T05:28:37.484854"
            }
          ],
          "text": "Ainda bem"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T05:19:02.429886",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-26T05:27:59.932178"
            }
          ],
          "text": "Ela tá bem melhor, quase 100"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T05:18:34.161006",
          "text": "Tava conversando com a minha mãe"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T05:10:25.665531",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-26T05:18:03.072068"
            }
          ],
          "text": "Tá só vendo Instagram?"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T05:10:16.800319",
          "text": "E aí?"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T04:53:57.756990",
          "text": "Nem tô mt"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T04:51:13.841671",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-26T04:53:44.550377"
            }
          ],
          "text": "Porque dormiu tarde ontem"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T04:50:52.624271",
          "text": "Tá cansadinha?"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T04:46:36.408861",
          "text": "Tô deitada já kk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T04:46:01.478587",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-26T04:46:12.419610"
            }
          ],
          "text": "E você?"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T04:45:55.287274",
          "text": "Uhum"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T04:44:33.112485",
          "text": "Tá jogando?"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T04:44:22.432529",
          "text": "Então tá bom, quero ver isso kk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T04:41:31.573937",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-26T04:43:33.995222"
            }
          ],
          "text": "Posso"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T04:32:03.448895",
          "text": "Então vc vai fazer"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T04:31:57.649836",
          "text": "Alguma dancinha kkkkkk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T04:30:53.174691",
          "text": "E a gente vai fazer qual?"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T04:26:56.502703",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T04:26:05.158791",
          "text": "Começa a ganhar dinheiro com isso"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T04:25:39.126203",
          "text": "Imagina ela gosta, vira profissional de tiktok"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T04:25:11.873722",
          "text": "Bota ela pra fazer contigo"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T04:24:21.612522",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T04:23:50.689489",
          "text": "Eu gosto"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T04:23:49.197546",
          "text": "Desistir jamais"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T04:23:10.117661",
          "text": "Daniela nunca fez nenhum?"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T04:23:03.549761",
          "text": "Vale sim"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T04:21:33.440767",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-26T04:23:31.136939"
            }
          ],
          "text": "N desiste de mim KKKK"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T04:21:14.596284",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T04:19:07.452666",
          "text": "Isso aí n vale não"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T04:18:52.499086",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-26T04:19:01.527423"
            }
          ],
          "text": "Mas não, só falei que ia pra tu mandar os videos"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T04:18:28.117885",
          "text": "100gb"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T04:18:21.392807",
          "text": "É pesado"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T04:18:18.905918",
          "text": "Sim"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T04:17:50.506124",
          "text": "Vitor Hugo tava falando que o jogo é muito muito pesado"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T04:17:31.962600",
          "text": "KKKKK"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T04:17:30.017381",
          "text": "Mas quero ver nos dois tentando"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T04:16:47.193366",
          "text": "Aiai Gustavo"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T04:16:40.209604",
          "text": "Kkkkkkk hummm"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T04:16:27.134934",
          "text": "Todos prestaram, só mudou alguns detalhes"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T04:16:20.970944",
          "text": "Kkkkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T04:16:16.830666",
          "text": "Coca"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T04:16:14.373571",
          "text": "É cova"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T04:15:50.132808",
          "text": "Daniela tá tomando o vinho dela"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T04:15:32.748812",
          "text": "Prestou*"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T04:15:25.308661",
          "text": "Vitor Hugo disse q foi o único q pr stou"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T04:15:14.066050",
          "text": "Ele falou aqui kkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T04:15:09.716782",
          "text": "Sim"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T04:14:42.315304",
          "text": "Instalando o jogo que eu passei pra ele no hd"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T04:14:34.123684",
          "text": "Sabe o que ele tá fazendo né???"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T04:14:21.839137",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-26T04:15:14.750332"
            }
          ],
          "text": "Na primeira tentativa já tinha ficado bom"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T04:14:15.137522",
          "text": "Kkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T04:14:09.102885",
          "media": "https://scontent-atl3-2.cdninstagram.com/v/t51.2885-15/e35/116341223_719031292004434_975949610589684340_n.jpg?_nc_ht=scontent-atl3-2.cdninstagram.com&_nc_cat=110&_nc_ohc=ZYfvH1GgThAAX9rGsdM&tp=18&oh=2bf92e2ae2d00131eacfff492b7378f2&oe=5FCB1A35&ig_cache_key=MjM2MTUzNDMxMDU0ODIwODczMg%3D%3D.2"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T04:11:43.386145",
          "media": "https://scontent-atl3-2.cdninstagram.com/v/t51.2885-15/e35/109467698_290218348910535_4280118241371607932_n.jpg?_nc_ht=scontent-atl3-2.cdninstagram.com&_nc_cat=103&_nc_ohc=ak8GtBOMRkgAX-SqkiC&tp=18&oh=727b003c89729b7b7a26f2da9cad794c&oe=5FCB4A5A&ig_cache_key=MjM2MTUzMzA4ODM0NDcyMzk3NA%3D%3D.2"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T04:06:08.181364",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-26T04:14:07.493117"
            }
          ],
          "text": "Eu já coloquei kkkkkkkk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T04:05:03.116709",
          "text": "Vai no seu tempo"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T04:04:55.419236",
          "text": "To esperando"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T04:04:26.290706",
          "text": "O Instagram tira a qualidade mesmo"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T04:01:21.318576",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T03:57:29.994123",
          "text": "P postar kkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T03:57:26.347485",
          "text": "Deixei 8 pessoas"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T03:57:11.241384",
          "text": "Vou postar as tentativas lá"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T03:57:03.488597",
          "text": "Nos melhores amigos"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T03:56:58.696659",
          "text": "Eu fiz um limpa"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T03:52:54.119439",
          "text": "Hehehehe"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T03:52:52.380797",
          "text": "Mas só se tu mandar mais vídeo teu"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T03:52:46.325247",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-26T03:56:48.428029"
            }
          ],
          "text": "Eu falei que vou"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T03:51:45.781067",
          "text": "Q vai"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T03:51:41.704606",
          "text": "E você disse"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T03:51:39.251541",
          "text": "Kkkkkkkkkkk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T03:51:05.278429",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-26T03:51:34.094750"
            }
          ],
          "text": "Tu me chamando pra fazer tiktok"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T03:50:52.123652",
          "text": "Né possível não"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T03:50:41.506454",
          "text": "Kkkkkkkkkk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T03:50:39.421586",
          "text": "Véi"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T03:40:28.703097",
          "text": "Nossa quero mt ver isso"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T03:40:14.982054",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T03:40:02.639158",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T03:38:33.313031",
          "text": "Eu não sei fazer isso não muié"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T03:38:19.619577",
          "text": "Kkkkkkkkkkkkk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T03:37:57.808010",
          "text": "Vamos!"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T03:37:34.908947",
          "text": "Só se for pra me ridicularizar mais ainda"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T03:32:57.521310",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-26T03:37:11.889634"
            }
          ],
          "voice_media": "Media unavailable."
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T03:32:53.199421",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T03:32:43.018826",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T03:23:10.812275",
          "text": "Pelo visto tá gravando vários einnn"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T03:22:56.202758",
          "text": "Ela tá condenando mas ela gosta de tiktok"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T03:22:43.628629",
          "text": "A Daniela quer aparecer com você"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T03:22:38.180260",
          "text": "Kkkkkkkkkkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T03:14:44.418588",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T03:14:25.515017",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T03:14:07.896799",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T03:00:46.716599",
          "text": "Eu fico vendo vários no Instagram direto"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T03:00:27.041600",
          "text": "Não vejo problema nenhum se você gosta"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T02:59:40.466188",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-26T03:13:53.924499"
            }
          ],
          "text": "Eu quero ver :)"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T02:59:36.028497",
          "text": "Kkkkkkkkkkkkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T02:54:35.231258",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-26T02:59:25.713459"
            }
          ],
          "voice_media": "Media unavailable."
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T02:54:20.516396",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T02:54:13.285499",
          "text": "Tem muitas"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T02:49:05.331327",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-26T02:54:08.177592"
            }
          ],
          "text": "Eles devem ter muita história pra contar"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T02:48:26.805866",
          "text": "É admirável"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T02:44:35.716053",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-26T02:54:05.085197"
            }
          ],
          "text": "Essa cumplicidade por tanto tempo é incrível"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T02:44:13.053006",
          "text": "O amor é sinistro"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T02:03:50.097218",
          "text": "Tão fofinho"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T02:03:40.068388",
          "text": "E ela é louca por ele"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T02:03:33.461278",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-26T02:43:43.786603"
            }
          ],
          "text": "Pq são anos e anos juntos"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T02:03:23.480270",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-26T02:43:41.872269"
            }
          ],
          "text": "É engraçado e fofo"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T02:03:18.357886",
          "text": "Muito ciúmes"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T02:00:05.378747",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-26T02:03:04.282412"
            }
          ],
          "text": "Então quer dizer que sua vó tem ciúmes do seu vô? Kkkkkkkkk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T01:59:22.833937",
          "text": "To em casa já"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T01:59:20.150513",
          "text": "Naaaada"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T01:59:06.367684",
          "text": "Então cuida hahaha"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T01:59:01.955416",
          "text": "Ele quis ser dono do cachorro também"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T01:58:50.114465",
          "text": "Primo meu mora lá"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T01:54:23.124103",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T01:53:30.547896",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T01:43:37.736857",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T01:42:52.023375",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-26T01:50:50.781918"
            }
          ],
          "voice_media": "Media unavailable."
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T01:40:06.138863",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T01:38:56.128389",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T01:37:20.827847",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-26T01:37:28.212597"
            }
          ],
          "text": "Eu tive bons avós também"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T01:37:17.510540",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T01:37:11.689363",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-26T01:37:18.660908"
            }
          ],
          "text": "As avós são incríveis"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T01:36:19.277612",
          "text": "Ela tem quantos anos?"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T01:36:15.352894",
          "text": "Ownt"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T01:36:12.918279",
          "text": "Hmmm"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T01:34:30.762086",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T01:33:56.457712",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-26T01:36:31.025996"
            }
          ],
          "voice_media": "Media unavailable."
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T01:33:46.956681",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T01:33:34.290002",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T01:31:46.396834",
          "text": "Tu fez seu vídeo pra ela?"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T01:31:40.726500",
          "text": "Entendi"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T01:31:01.759363",
          "text": "O susto foi aquele dia do deck?"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T01:24:48.885157",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T01:24:34.703147",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-26T01:31:36.759553"
            }
          ],
          "voice_media": "Media unavailable."
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T01:24:14.863592",
          "text": "Faço muito isso kk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T01:24:14.795585",
          "text": "Sua vó tá fazendo aniversário?"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T01:24:00.692698",
          "text": "Lindões"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T01:23:51.356213",
          "text": "Hahahahah"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T01:23:30.653300",
          "text": "Sua mãe confia em você né? O que tá faltando pra ela deixar vocês sairem?"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T01:22:58.374830",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-26T01:24:12.499043"
            }
          ],
          "text": "Tá curtindo uma vibe na música e pensando nas coisas?"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T01:04:03.431010",
          "text": "Meus irmãos tb"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T01:03:37.355879",
          "text": "Esse é o Henrique e a Sophia"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T01:03:30.683995",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-26T01:23:41.230749"
            }
          ],
          "media": "https://scontent-atl3-2.cdninstagram.com/v/t50.2886-16/109343456_3166247026805424_8757108580158117720_n.mp4?cb=ae824530-854f1720&efg=eyJxZV9ncm91cHMiOiJbXCJpZ19wcm9ncmVzc2l2ZV91cmxnZW4ucHJvZHVjdF90eXBlLmRpcmVjdF9wZXJtYW5lbnRcIl0ifQ&_nc_ht=scontent-atl3-2.cdninstagram.com&_nc_cat=100&_nc_ohc=-clSp_HuXvEAX_9MWcw&oe=5FA55889&oh=8e3b0d2b99113d1430de91885c95129a"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T00:59:35.274786",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-26T01:23:39.320325"
            }
          ],
          "text": "Hoje todos os primos tiveram q gravar um vídeo p minha vó, aí vai juntar os vídeos de TD mundo e mostrar p ela"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T00:55:59.657587",
          "text": "Minha mãe n deixou"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T00:55:47.497008",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-26T01:22:30.636963"
            }
          ],
          "text": "Minha amg me chamou p pegar sol hj"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T00:55:28.059158",
          "text": "Menos em casa"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T00:55:23.287928",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-26T01:22:32.450106"
            }
          ],
          "text": "Tô ouvindo música e pensando q eu poderia estar em qualquer lugar"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T00:54:39.196124",
          "text": "De interessante nada kk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T00:53:18.221086",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-26T00:54:23.804361"
            }
          ],
          "text": "Tá fazendo o que de interessante??"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T00:38:45.935427",
          "text": "E falando q era festa"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T00:38:40.369221",
          "text": "Aiai"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T00:38:39.310414",
          "text": "Kkkkkkkkkkkk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T00:35:36.395926",
          "text": "Imagine!"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T00:35:11.304245",
          "text": "Foi pra casa da tia e só tem primo lá"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T00:34:52.081543",
          "text": "Kkkkkkkkkk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T00:33:42.241444",
          "text": "Acabei de ver aqui"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T00:22:47.602275",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-26T00:33:30.780199"
            }
          ],
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T00:14:19.116450",
          "text": "Festa?"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T00:14:10.779978",
          "text": "É o que?"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T00:11:20.401458",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T00:11:06.687429",
          "text": "Q pala"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T00:11:04.595499",
          "text": "Frevo de família"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T00:11:01.637170",
          "text": "KKKKKKKKKKKKKKKKKKKK"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T00:10:47.961774",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T00:10:42.075397",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-26T00:10:57.258947"
            }
          ],
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T00:10:06.312549",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T00:09:53.648758",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T00:09:15.022326",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T00:09:02.663391",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T00:08:46.088673",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T00:08:01.635281",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T00:07:54.868637",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-26T00:08:10.522232"
            }
          ],
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T00:07:10.568031",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T00:06:28.591219",
          "text": "Instagram tá de vacilação"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-26T00:06:28.175997",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-26T00:03:50.366854",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T23:59:09.804746",
          "text": "Vitor Hugo me mandou um vídeo aqui, só quer saber de festa kkkkkkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T23:55:48.155098",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T23:55:32.598537",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T23:55:25.113902",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T23:50:59.313107",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T23:50:51.170309",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-25T23:54:32.895186"
            }
          ],
          "voice_media": "Media unavailable."
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T23:09:48.995335",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T23:09:06.235356",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T22:54:07.079822",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-25T23:10:27.568019"
            }
          ],
          "story_share": "Shared deborabasili0's story",
          "text": "Eita!"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T22:49:56.278661",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-25T23:08:23.377203"
            }
          ],
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T22:49:18.212159",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T22:40:49.792494",
          "text": "Kk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T22:40:47.696515",
          "text": "hoje você dorme cedo"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T22:39:49.359568",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-25T22:40:18.356546"
            }
          ],
          "voice_media": "Media unavailable."
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T22:35:32.789568",
          "text": "Kkkkkkk sei"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T22:34:25.093529",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-25T22:35:22.010296"
            }
          ],
          "text": "Você que me fez ficar até 5h por aqui"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T22:34:04.045487",
          "text": "Queeeee"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T08:52:10.660264",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-25T08:52:14.459826"
            }
          ],
          "text": "Até Amanhã"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T08:52:05.396741",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-25T08:52:13.632239"
            }
          ],
          "text": "Boa noite, beijo!"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T08:51:54.797431",
          "text": "Beijo!"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T08:51:44.695506",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-25T08:51:47.676860"
            }
          ],
          "text": "Boa noite"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T08:51:42.465407",
          "text": "Vai lá meu bem"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T08:51:23.802766",
          "text": "Tá com sono?"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T08:51:15.428486",
          "text": "Agr o sono bateu"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T08:51:07.019707",
          "text": "Kkk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T08:51:03.254509",
          "text": "Heheehh"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T08:51:02.455483",
          "text": "Uhumm"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T08:50:53.553173",
          "text": "Depois você me mostra"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T08:50:48.277364",
          "text": "Kkkkkk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T08:50:45.048379",
          "text": "Mas relaxa"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T08:50:43.220749",
          "text": "Não, não acabou"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T08:50:18.225194",
          "text": "Acabou"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T08:50:16.690537",
          "text": "Kkkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T08:50:09.785279",
          "text": "Os q davam pra mandar mandei"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T08:48:54.591184",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-25T08:49:57.389027"
            }
          ],
          "text": "Gostei"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T08:48:52.276020",
          "text": "Me manda mais depois"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T08:47:34.030461",
          "text": "Kkkkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T08:47:33.513741",
          "text": "Mas enjoei"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T08:47:32.408489",
          "text": "Teve um tempo q eu ficava nessa"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T08:47:09.342896",
          "text": "Aiai é só p zuar"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T08:46:53.859642",
          "text": "Mas você manda bem!!!"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T08:46:48.619847",
          "text": "Vou respeitar sua vontade"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T08:46:43.825478",
          "text": "Não"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T08:46:39.467211",
          "text": "Sim ou n"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T08:46:36.772469",
          "text": "KKKKK"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T08:46:35.018437",
          "text": "A tela"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T08:46:33.918269",
          "text": "Você gravou"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T08:46:30.196128",
          "text": "Cmg"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T08:46:28.789181",
          "text": "Seja sincero"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T08:46:25.646738",
          "text": "Gustavo"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T08:46:08.269979",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-25T08:46:20.340642"
            }
          ],
          "text": "Último ícone"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T08:46:05.162692",
          "media": "https://scontent-atl3-2.cdninstagram.com/v/t51.2885-15/e35/116010470_2607269109514811_8012676202277040059_n.jpg?_nc_ht=scontent-atl3-2.cdninstagram.com&_nc_cat=111&_nc_ohc=jZBEZS6OvJgAX8cXPX0&tp=18&oh=99724187ebb8b88edd6c3aca023ed859&oe=5FCCD3F9&ig_cache_key=MjM2MDk0NjQwMzgyMzE4OTAzMw%3D%3D.2"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T08:45:52.534144",
          "text": "Dá sim kk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T08:45:47.581262",
          "text": "Da não"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T08:45:27.732979",
          "text": "Mas dá trabalho"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T08:45:24.386410",
          "text": "Kkkkkkkkkkk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T08:43:54.235241",
          "text": "Cê sabe que eu posso gravar a tela facilmente né?"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T08:43:38.310830",
          "text": "Kkkkkkkkkkkk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T08:43:33.994697",
          "text": "Peguei a visão"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T08:38:17.405446",
          "text": "P abrir"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T08:38:12.791358",
          "text": "Ah abaixa o volume"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T08:38:07.779512",
          "text": "Como são muitos deve bem ir na ordem errada, isso tudo pro vídeo n ficar salvo aqui kkk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T08:35:42.953788",
          "text": "Nada a ver"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T08:35:04.093102",
          "text": "Da muita vergonha"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T08:34:55.288337",
          "text": "Oh mano"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T08:34:53.150734",
          "text": "Perai kkk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T08:32:45.190880",
          "text": "Tem sim"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T08:32:40.968836",
          "text": "Tem n"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T08:32:38.933753",
          "text": "Mkkkkkkkk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T08:32:29.399896",
          "text": "Cadê o resto"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T08:32:28.482342",
          "text": "Descobriram"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T08:32:24.187838",
          "text": "Pq meus amigos"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T08:32:20.901095",
          "text": "Aí eu apaguei"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T08:32:19.379561",
          "text": "Tinha uns piores meus"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T08:32:13.828284",
          "text": "Kkkkkkkkkkkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T08:32:09.693616",
          "text": "Kkkkkkkkkkkkkk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T08:32:01.404301",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-25T08:32:04.916843"
            }
          ],
          "text": "Obrigado por existir"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T08:31:56.916591",
          "text": "Kkkkkkkkkkkkkkkkkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T08:24:04.506576",
          "text": "Perai"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T08:23:54.390184",
          "text": "Kkkkkkkkkkkk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T08:23:52.152395",
          "text": "Eu quero muito ver"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T08:23:38.025197",
          "text": "Kkkkkkkkkkkkkkkk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T08:23:30.015680",
          "text": "Eu quero ver"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T08:23:27.262731",
          "text": "Ikkkkkkkkkkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T08:23:24.377543",
          "text": "Af"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T08:23:19.625794",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-25T08:23:23.592969"
            }
          ],
          "text": "Já fiz tiktok com áudio dele KKKKKKKKKKK"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T08:23:08.535541",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-25T08:23:15.330453"
            }
          ],
          "text": "Muito bom"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T08:23:03.578822",
          "text": "Portugal"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T08:23:00.139277",
          "text": "Murilo Couto"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T08:22:59.001869",
          "text": "Rafael"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T08:22:55.935741",
          "text": "Mano"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T08:22:54.917697",
          "text": "Hmmmmmm"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T08:22:50.105878",
          "text": "Rafael Portugal"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T08:22:46.527036",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-25T08:22:50.001525"
            }
          ],
          "text": "Thiago Ventura"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T08:22:34.308994",
          "text": "Kkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T08:22:32.845356",
          "text": "Q eu conheço"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T08:22:29.622436",
          "text": "Só ele mesmo"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T08:22:09.483088",
          "text": "Manda msm"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T08:21:40.221002",
          "text": "Esse bixo manda muito bem"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T08:21:23.616855",
          "text": "Winderson Nunes kkk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T08:21:01.948781",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-25T08:21:07.211603"
            }
          ],
          "text": "Standup?"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T08:20:44.558173",
          "text": "Tá bom, vou assistir"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T08:20:23.967692",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-25T08:20:33.225897"
            }
          ],
          "text": "Assiste pelo menos 3 ep"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T08:20:11.628269",
          "text": "O começo de toda série é chato"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T08:19:47.136463",
          "text": "Tenta assistir"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T08:19:39.565797",
          "text": "Essa"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T08:19:38.514769",
          "text": "Deve ser boa"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T08:19:34.600162",
          "text": "Não"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T08:19:25.511134",
          "text": "Do professor de química que começa a fazer droga e vender pra ajudar a família"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T08:18:50.155111",
          "text": "Das drogas?"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T08:18:43.038056",
          "text": "Tu nunca assistiu breaking bad?"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T08:18:17.900008",
          "text": "É mt bom"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T08:18:06.746208",
          "text": "N sei pq"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T08:18:03.203001",
          "text": "KKKKKk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T08:18:01.333031",
          "text": "Psicopatas"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T08:17:57.955406",
          "text": "Q tem"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T08:17:56.033330",
          "text": "Documentário"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T08:17:52.150212",
          "text": "E filme"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T08:17:49.929819",
          "text": "Eu gosto de série"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T08:17:41.986399",
          "text": "Do cara q é psicopata"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T08:17:27.734274",
          "text": "Essa eu vi ela toda"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T08:17:22.559717",
          "text": "É boa tb"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T08:17:19.501807",
          "text": "You"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T08:17:07.318055",
          "text": "Tem"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T08:17:02.254113",
          "text": "Tem muita série boa"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T08:16:36.489559",
          "text": "Mas n tive mt paciência p assistir"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T08:16:23.777049",
          "text": "Deve ser boa"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T08:16:06.985531",
          "text": "Kkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T08:16:05.142303",
          "text": "N sei"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T08:15:56.977614",
          "text": "Ela terminou?"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T08:15:48.351906",
          "text": "Vikings"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T08:15:43.402475",
          "text": "Dani q assistia"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T08:15:34.486483",
          "text": "Vikings"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T08:15:24.586339",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-25T08:15:29.143898"
            }
          ],
          "text": "Claro"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T08:15:23.092171",
          "text": "Mt boa"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T08:15:18.423695",
          "text": "Assiste só um ep dps"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T08:15:11.963063",
          "text": "Já ouvi falar"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T08:15:09.228750",
          "text": "Não"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T08:15:02.186829",
          "text": "Vei nunca assistiu?"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T08:14:53.462596",
          "text": "Engraçado"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T08:14:51.546213",
          "text": "Muito"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T08:14:50.289740",
          "text": "É muito"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T08:14:48.057467",
          "text": "Mas ao mesmo tempo q ensina sobre"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T08:14:31.555120",
          "text": "A vida dele e pá"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T08:14:27.431786",
          "text": "Aí mostra"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T08:14:23.888643",
          "text": "Mas o meio pro final é muito doido"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T08:14:22.773046",
          "text": "É um menino que ele é autista"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T08:14:16.952182",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-25T08:15:32.102940"
            }
          ],
          "text": "O começo de the 100 é paia"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T08:14:09.826910",
          "text": "Do povo q fica preso na floresta né"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T08:14:02.914114",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-25T08:14:11.064851"
            }
          ],
          "text": "É sobre o que?"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T08:13:59.893651",
          "text": "Eu comecei"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T08:13:55.947544",
          "text": "The 100"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T08:13:49.384167",
          "text": "MT boa"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T08:13:44.919745",
          "text": "Atypical"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T08:13:39.050335",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-25T08:13:50.248065"
            }
          ],
          "text": "Breaking bad, the 100, justiceiro"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T08:13:37.888767",
          "text": "Aqui"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T08:13:35.851454",
          "text": "Lembrei"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T08:13:34.447805",
          "text": "Tem uma"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T08:13:32.580352",
          "text": "Nossa"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T08:13:10.958883",
          "text": "Ainda n"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T08:13:08.401309",
          "text": "Nops"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T08:12:51.232032",
          "text": "Irmandade, já viu?"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T08:12:35.996217",
          "text": "Ela é enorme TB kk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T08:12:27.844243",
          "text": "Ainda não vi"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T08:12:20.690194",
          "text": "É boa"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T08:12:14.233232",
          "text": "Sim"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T08:12:12.710634",
          "text": "Suits"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T08:12:10.837725",
          "text": "Igual"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T08:11:59.574418",
          "text": "Aí é diferente"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T08:11:52.512194",
          "text": "Agr quando a série é boa"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T08:11:43.375715",
          "text": "Melhor kkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T08:11:38.358527",
          "text": "Sla"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T08:11:33.373844",
          "text": "Final"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T08:11:31.556082",
          "text": "Vc sabe o finao"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T08:11:27.913081",
          "text": "Acaba"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T08:11:25.260345",
          "text": "Filme você assiste"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T08:11:11.639135",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-25T08:11:15.147114"
            }
          ],
          "text": "Já assisti também"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T08:11:08.533389",
          "text": "Dms"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T08:11:07.805181",
          "text": "Eu não gostei"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T08:11:07.373789",
          "text": "Paiaa"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T08:11:05.188537",
          "text": "Começo"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T08:11:01.502376",
          "text": "Nem assisti mt"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T08:10:57.343728",
          "text": "Na vdd"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T08:10:53.707770",
          "text": "N acaba"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T08:10:53.153594",
          "text": "Sim"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T08:10:52.849803",
          "text": "Já tentei"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T08:10:47.218804",
          "text": "Deus me livre"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T08:10:43.335036",
          "text": "The walking dead?"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T08:10:39.516218",
          "text": "Nem eu"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T08:10:35.518679",
          "text": "Eu não consigo ver série com muita temporada"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T08:10:30.227122",
          "text": "Eu não sou muito de assistir série"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T08:10:15.276573",
          "text": "E eu nem vi"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T08:10:11.679784",
          "text": "Mais ep"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T08:10:06.519186",
          "text": "Aí lançou tem um tempo"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T08:10:02.368743",
          "text": "Nunca nem vi"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T08:09:58.335411",
          "text": "Eu assisti ela toda"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T08:09:48.954965",
          "text": "La casa de papel"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T08:09:44.232929",
          "text": "Tipo"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T08:09:42.545372",
          "text": "Muito"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T08:09:41.237418",
          "text": "Só se eu estiver gostando"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T08:09:33.652585",
          "text": "Eu n consigo muito"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T08:09:28.186083",
          "text": "Série"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T08:09:12.214279",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-25T08:09:22.071248"
            }
          ],
          "text": "Ahh ta"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T08:09:06.176393",
          "text": "Esse era de polícia"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T08:08:57.766208",
          "text": "Muito bom"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T08:08:55.734181",
          "text": "De polícia"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T08:08:53.403835",
          "text": "Mas simm"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T08:08:51.489184",
          "text": "Animais"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T08:08:49.810237",
          "text": "De polícia"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T08:08:49.388347",
          "text": "Eu tbmm"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T08:08:38.864224",
          "text": "Eu gosto de assistir documentário"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T08:08:29.074338",
          "text": "Ah"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T08:08:23.213824",
          "text": "O nome"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T08:08:21.627724",
          "text": "Gênio diabólico kk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T08:08:15.712198",
          "text": "Esses dias"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T08:08:12.359478",
          "text": "Eu assisti uma série documental"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T08:08:01.929557",
          "text": "Não assiste série?"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T08:07:59.185016",
          "text": "Ou desenho"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T08:07:53.934381",
          "text": "Romântica"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T08:07:45.796648",
          "text": "Comédia"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T08:07:43.850031",
          "text": "Na maioria das vezes q eu assisto algo é de romance ou"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T08:07:25.215531",
          "text": "Kkkkkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T08:07:23.270849",
          "text": "Foi um de romance"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T08:07:15.134042",
          "text": "N foi esse n eu acho"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T08:07:10.188736",
          "text": "Olhei aqui"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T08:07:02.202235",
          "text": "Kkkkkkkkkko"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T08:06:11.298634",
          "text": "Pior que só sei esse kkkkkkkkkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T08:06:06.205404",
          "text": "Acho q foi esse"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T08:06:01.852129",
          "text": "Mano"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T08:05:50.459579",
          "text": "One piece?"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T08:05:38.474348",
          "text": "Bem clichêzin"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T08:05:28.326859",
          "text": "Mas nem lembro o nome"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T08:05:20.714627",
          "text": "Eu já kk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T08:05:11.198785",
          "text": "Nunca assisti anime"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T08:05:02.784102",
          "text": "Bom tb"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T08:04:54.768689",
          "text": "Simmm"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T08:04:53.758429",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-25T08:04:56.277691"
            }
          ],
          "text": "Mogli"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T08:04:50.571236",
          "text": "Tarzan"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T08:04:44.747633",
          "text": "Mas nunca assisti"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T08:04:40.570865",
          "text": "Meu irmão gosta muito de Naruto"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T08:04:01.591767",
          "text": "Eu amava"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T08:03:58.801116",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-25T08:05:02.776730"
            }
          ],
          "text": "Tartarugas ninjas"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T08:03:38.182994",
          "text": "Hmmm"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T08:03:25.957888",
          "text": "É bom dmssas"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T08:02:57.366887",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-25T08:03:02.965938"
            }
          ],
          "text": "Sherk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T08:02:47.234728",
          "text": "Muitos"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T08:02:43.429229",
          "text": "Tem"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T08:02:38.853534",
          "text": "Tem mais desenho bom"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T08:02:06.725240",
          "text": "Muito bom"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T08:02:02.382955",
          "text": "Muito antigo"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T08:01:55.466622",
          "text": "Sim"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T08:01:52.433859",
          "text": "Filme?"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T08:01:51.920422",
          "text": "Só q n é desenho"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T08:01:47.998487",
          "text": "Eu nunca vou enjoar tbm"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T08:01:41.646799",
          "text": "É muito bom"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T08:01:37.319547",
          "text": "Amor para recordar"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T08:01:15.843571",
          "text": "Kkkk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T08:01:13.214029",
          "text": "Sei qual é"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T08:01:06.737654",
          "text": "Dos pinguins q surfam"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T08:00:54.451227",
          "text": "Eu acho"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T08:00:52.845389",
          "text": "Nunca vi"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T08:00:49.633205",
          "text": "Kkkkkkkkkkkkkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T08:00:47.724729",
          "text": "Amo esse filme"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T08:00:43.812078",
          "text": "Kkkkkkkkkooo"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T08:00:40.678359",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-25T08:00:46.125997"
            }
          ],
          "text": "Maconheiro"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T08:00:36.342352",
          "text": "Q tem o galo"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T08:00:27.893089",
          "text": "Deu onda"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T08:00:25.988757",
          "text": "Mas aquele"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T08:00:22.080160",
          "text": "Gosto"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T08:00:16.682827",
          "text": "Kkkkkkk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T08:00:13.377533",
          "text": "Eu ia falar esse"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T08:00:09.266435",
          "text": "Sim"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T08:00:06.460180",
          "text": "?"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T08:00:05.431351",
          "text": "Já"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T08:00:04.059777",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-25T08:00:07.739973"
            }
          ],
          "text": "Mulan"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T08:00:01.632018",
          "text": "Já sim"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T07:59:57.238505",
          "text": "Mentira"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:59:46.628168",
          "text": "Não eu acho"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T07:59:36.512825",
          "text": "Irmão urso?"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:59:34.428911",
          "text": "Kkkkkk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T07:59:31.444074",
          "text": "Ah tá"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:59:25.854562",
          "text": "Muita bommmmmm"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:59:22.446385",
          "text": "Óbvio q já"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T07:59:19.519873",
          "text": "Timão e pumba"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:59:18.530579",
          "text": "A não"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T07:59:16.539463",
          "text": "Do macaco"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T07:59:13.461982",
          "text": "Isso"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:59:02.918760",
          "text": "?"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:59:01.968899",
          "text": "Do Madagascar"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:58:54.048214",
          "text": "Calma"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:58:52.612732",
          "text": "Aaaaaaaaaaaaaah"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T07:58:35.478516",
          "text": "Rei leão?"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:58:29.628015",
          "text": "Acho qn"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:58:26.989156",
          "text": "Se não assisti mesmo"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:58:19.187334",
          "text": "Calma deixa eu ver"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T07:58:15.067376",
          "text": "An?"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:58:10.245261",
          "text": "Sim"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T07:58:01.953639",
          "text": "Que?"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:57:55.644191",
          "text": "KK"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:57:54.529982",
          "text": "Eu acho"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:57:52.537506",
          "text": "É, até eu n assisti"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T07:57:38.092594",
          "text": "Rei leão?"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:57:28.889138",
          "text": "Kkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:57:26.434409",
          "text": "E nunca vou enjoar"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T07:57:18.842695",
          "text": "Ratatouille é masssssa"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:57:18.362455",
          "text": "Assisto mil vezes"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:57:08.729288",
          "text": "Esse filme"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:57:06.192145",
          "text": "Eu amo"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:57:04.086617",
          "text": "Kkkkkkkk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T07:57:01.165462",
          "text": "Kkkkkkkkkkkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:56:51.628891",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-25T07:57:00.732588"
            }
          ],
          "text": "Ratatouille"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:56:47.865779",
          "text": "É"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:56:46.706590",
          "text": "Meu filme preferido"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:56:41.602500",
          "text": "Quando eu assisto"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:56:38.002862",
          "text": "De desenho"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:56:35.714656",
          "text": "Eu gosto"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:56:32.057283",
          "text": "N sou muito de filme"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T07:56:18.317230",
          "text": "E tá caindo de sono aí"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T07:56:13.926906",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-25T07:56:21.367685"
            }
          ],
          "text": "Falou que ia ver o filme, nem viu"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:56:10.508947",
          "text": "Kkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:56:08.769864",
          "text": "Quase 5 hrs"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T07:55:40.104946",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-25T07:55:44.477871"
            }
          ],
          "text": "De nada!"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:55:27.929814",
          "text": "Obrigada"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:55:23.224142",
          "text": "Kkkkkkkk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T07:55:16.806741",
          "text": "Perfeitamente"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:55:05.151386",
          "text": "É diferente"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:55:00.317718",
          "text": "Então"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:54:58.449802",
          "text": "Eu n sou"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:54:56.493713",
          "text": "Então"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:54:47.682657",
          "text": "Kkkkkkkk hummm"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T07:54:40.572174",
          "text": "Eu sou hipocrita"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T07:54:32.999815",
          "text": "Sim"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:54:27.692129",
          "text": "Kkkkkkkkkkkkkkk uai"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T07:54:20.411760",
          "text": "Eu também não concordo comigo"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:54:15.377732",
          "text": "Kkkkkkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:54:12.802949",
          "text": "Com você"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:54:10.378715",
          "text": "N concordo"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T07:54:05.405268",
          "text": "É o mesmo gosto"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T07:54:00.228405",
          "text": "Não soube explicar"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T07:53:56.243640",
          "text": "Argumentos inválidos"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:53:23.735783",
          "text": "Mas é diferente"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:53:16.929675",
          "text": "Como os dois"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:53:08.582908",
          "text": "E o gosto muda tbm"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:52:50.855614",
          "text": "Com Toddy fica as bolinhas"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:52:38.688330",
          "text": "Com Nescau n fica com bolinhas e fica menos enjoativo"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:52:05.571009",
          "text": "Tá ok"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:52:03.666829",
          "text": "Kkkkkkk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T07:51:59.812369",
          "text": "A diferença"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T07:51:55.578973",
          "text": "Descreva"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T07:51:55.159574",
          "text": "Tá bom"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:51:40.985569",
          "text": "É diferente"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:51:21.616069",
          "text": "Kkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:51:19.785141",
          "text": "Você q pensa"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T07:49:53.198836",
          "text": "Tem o mesmo gosto"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:47:48.339768",
          "text": "Kkkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:47:45.803347",
          "text": "Com Nescau"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:47:42.700246",
          "text": "É melhor"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:47:39.012550",
          "text": "Mas brigadeiro"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:46:58.780515",
          "text": "Mt fresco"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:46:53.526924",
          "text": "Simm"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:46:50.937294",
          "text": "Kkkkkkkkkkkk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T07:46:46.070265",
          "text": "Fica bolha de açúcar"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T07:46:41.064977",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-25T07:46:44.361752"
            }
          ],
          "text": "Esse bixo tá fresco viu"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:46:07.250972",
          "text": "Vc tem outro né"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:45:48.864315",
          "text": "Sofre de insônia o bixin"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:45:27.795346",
          "text": "Tadinho"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:45:24.856914",
          "text": "Kkkkkkkkkkkkk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T07:43:56.304536",
          "text": "Essa praga ainda tá acordada"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T07:43:15.554251",
          "text": "É bão demaisss"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T07:43:09.228130",
          "text": "Oxi"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:42:48.137423",
          "text": "É um deles"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:42:45.061416",
          "text": "Vitor Hugo"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:42:37.460677",
          "text": "Pq eu falo q prefiro"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:42:26.297862",
          "text": "Kkkkkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:42:22.615067",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-25T07:43:19.683604"
            }
          ],
          "text": "Toddy é bom dms, meus amigos me julgam"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:41:52.425555",
          "text": "Toddy ou Nescau"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:41:46.095957",
          "text": "Mas é que tem a discussão"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:41:35.348558",
          "text": "Eu gosto dos três"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T07:41:27.028211",
          "text": "Só gostar dos 3"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T07:41:24.143447",
          "text": "Não precisa preferir"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T07:41:17.493823",
          "text": "Ué"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:41:11.140639",
          "text": "pode me julgar"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:41:06.627387",
          "text": "Toddy"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:41:03.256501",
          "text": "E"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:41:01.810710",
          "text": "Eu prefiro café"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:40:57.023297",
          "text": "Mas"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:40:55.778689",
          "text": "Curto"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T07:40:42.486542",
          "text": "Curte?"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:40:02.249643",
          "text": "Eu percebi"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:39:59.889310",
          "text": "KKKKKKKKKKKKKK"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T07:39:55.328645",
          "text": "Aquilo ali é o satanás"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:39:53.575035",
          "text": "Com ódio"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:39:51.240201",
          "text": "Late"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:39:50.178276",
          "text": "Mas a bixa"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:39:47.114361",
          "text": "No cachorro"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:39:44.242663",
          "text": "Queria fazer carinho"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:39:37.511609",
          "text": "Foi"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:39:36.286989",
          "text": "KKKKKKK"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T07:39:33.269119",
          "text": "Kkkkkkkkkkkkk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T07:39:30.881501",
          "text": "Tu conheceu ela?"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:39:21.670949",
          "text": "Isso"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:39:17.037529",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-25T07:39:27.150241"
            }
          ],
          "text": "Kkk agr o cachorro do Danilo, chato dms"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T07:39:12.972268",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-25T07:39:17.750653"
            }
          ],
          "text": "Estrada de chão ali perto do sesi?"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T07:39:00.670946",
          "text": "Ahhhh"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T07:38:44.902488",
          "text": "Esses cachorros não mordem"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:38:13.230090",
          "text": "Quase morri do coração"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:38:04.743505",
          "text": "KKKKK"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:38:02.643754",
          "text": "Apareceu uns cachorros"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:37:57.347159",
          "text": "Tava a noite"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:37:53.243118",
          "text": "Aí"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:37:51.583492",
          "text": "Fomos parar numa estradinha de chão né"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:37:40.129044",
          "text": "Uma vez eu Vitor Hugo"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:37:35.034007",
          "text": "Machucar faz parte"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:37:25.323205",
          "text": "Né"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:37:19.514177",
          "text": "Mas"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:37:12.209670",
          "text": "Kkk isso, eu gosto de andar de bike"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T07:36:49.810121",
          "text": "Isso se chama liberdade"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T07:36:45.470199",
          "text": "Normal"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:35:30.312464",
          "text": "Toda vez"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:35:24.215072",
          "text": "Kkkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:35:21.830906",
          "text": "A perna"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:35:20.134837",
          "text": "Só pra machucar"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T07:35:12.050928",
          "text": "Nem vem"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T07:35:09.534246",
          "text": "E ficou até 5h da manhã acordada"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:35:08.949307",
          "text": "Uai"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:35:07.957258",
          "text": "Não msm"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T07:35:02.414342",
          "text": "Pedalou aquele dia"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T07:34:57.686259",
          "text": "Tu é outro nível"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:34:38.641919",
          "text": "Depois quer vir falar q eu q tenho energia"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:34:29.374890",
          "text": "Sinceramente"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:34:27.313928",
          "text": "Nem eu"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T07:34:17.141914",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-25T07:34:25.051237"
            }
          ],
          "text": "Nem sei como q eu to acordado ainda"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:34:16.718283",
          "text": "Sacanagem kkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:34:13.203211",
          "text": "A n"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:33:58.360108",
          "text": "Eu sei"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:33:54.776985",
          "text": "Kkkk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T07:33:44.496223",
          "text": "Mentira, eu to mortin"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T07:33:37.871542",
          "text": "Sai"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T07:33:36.180746",
          "text": "Eu já daí"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:33:12.980104",
          "text": "Provavelmente vou mesmo"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:33:03.371685",
          "text": "N preciso falar kk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:32:58.790876",
          "text": "Nome disso vc já sabe"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:32:52.184009",
          "text": "Isso é pq acordou cedo"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T07:31:05.198062",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-25T07:33:06.085028"
            }
          ],
          "text": "Tu vai dormir primeiro q eu"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T07:30:58.601396",
          "text": "To vivasso"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T07:30:56.299170",
          "text": "Não"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:29:25.240814",
          "text": "Você tá?"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:29:19.563062",
          "text": "Um pouco"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T07:29:02.230872",
          "text": "Pode falar"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T07:29:00.079346",
          "text": "Já tá com soninho"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:27:40.215278",
          "text": "Né"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T07:27:10.013897",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-25T07:27:38.417945"
            }
          ],
          "text": "Que feio"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:26:48.560786",
          "text": "Mesmo"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:26:47.252839",
          "text": "Da rua"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:26:43.399543",
          "text": "Não"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T07:26:39.129180",
          "text": "É o povo que mora aí?"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:26:37.310909",
          "text": "Essa 14 é movimentada"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:26:22.757702",
          "text": "É lei"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:26:21.089336",
          "text": "Sempre"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:26:17.680606",
          "text": "Sábado"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:26:16.164812",
          "text": "P sábado"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:26:12.641876",
          "text": "Sexta"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T07:26:07.949160",
          "text": "Todo dia briga?"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T07:26:01.349979",
          "text": "Que bom"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:26:00.392152",
          "text": "Kkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:25:59.354087",
          "text": "Oh Jesus"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:25:55.760727",
          "text": "Tendo briga lá embaixo"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:25:34.204455",
          "text": "Mt"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:25:33.106235",
          "text": "Me ajuda mr"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:25:30.309551",
          "text": "Mas minha mãe"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:25:22.459838",
          "text": "Mas minha alimentação n é certinha n"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:25:07.728160",
          "text": "Eu tenho me regrar"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T07:24:42.113597",
          "text": "Uhum beleza"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:24:42.050414",
          "text": "Eu amo"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:24:38.102666",
          "text": "Toda semana"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:24:33.837648",
          "text": "Diante de Deus"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:24:27.318369",
          "text": "Kkkkkkkkkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:24:23.659178",
          "text": "Na padaria"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:24:21.602259",
          "text": "Toda semana"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:24:18.771510",
          "text": "Eu compro"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:24:15.751108",
          "text": "Mas ela n gosta muito, pq da trabalho"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T07:24:06.348971",
          "text": "Curte?"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T07:24:04.300923",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-25T07:24:16.426072"
            }
          ],
          "text": "Palha italiana"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:23:57.399479",
          "text": "Um tempo atrás"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:23:51.785795",
          "text": "Ela já vendeu bolo"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:23:46.353904",
          "text": "Kkkkkkkk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T07:23:43.724202",
          "text": "Ela já pensou em vender?"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T07:23:34.577666",
          "text": "Legal"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:23:33.968296",
          "text": "É um medo"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:23:30.377886",
          "text": "Do que comprar"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:23:28.117548",
          "text": "Ela prefere fzr"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T07:23:18.144946",
          "text": "Minha mãe também faz uns negocin legal aqui"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:23:16.854683",
          "text": "Pizza"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:23:13.728064",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-25T07:23:23.989777"
            }
          ],
          "text": "Até pão caseiro ela faz"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:22:59.767320",
          "text": "Sabe fazer tudo"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T07:22:58.846540",
          "text": "Mentira, é bom"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:22:55.236930",
          "text": "Minha mãe"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:22:52.440843",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-25T07:23:01.992794"
            }
          ],
          "text": "Ou torta de abacaxi ou limão"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T07:22:49.107530",
          "text": "Eca"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:22:37.929430",
          "text": "Bolo de chocolate"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:22:34.583955",
          "text": "Sim, mas ainda prefiro"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T07:22:23.743125",
          "text": "Bolo de cenoura com chocolate"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T07:22:13.287564",
          "text": "Claro que é com chocolate"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T07:22:08.580205",
          "text": "Não"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:18:36.320766",
          "text": "Ainda vai"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:18:34.028701",
          "text": "Chocolate"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:18:30.792850",
          "text": "Se tiver muito"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:18:27.651354",
          "text": "Igual bolo de cenoura"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:18:22.413633",
          "text": "Puro n"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:18:13.082362",
          "text": "Kkkkkkkkkkkkkkk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T07:18:07.853093",
          "text": "Naaaaao"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:18:00.781309",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-25T07:18:05.938319"
            }
          ],
          "text": "N gosto de cuscuz tb"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:17:52.452737",
          "text": "Kkkkkkkkk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T07:17:48.627885",
          "text": "Que falta de respeito"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:17:46.558488",
          "text": "Mas n gosto"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T07:17:39.821310",
          "text": "Meu deussss"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:17:36.521061",
          "text": "Eu até como"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:17:26.515204",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-25T07:17:36.911852"
            }
          ],
          "text": "Minha mãe fez bolo de cenoura, mas eu n gosto"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:17:06.991993",
          "text": "Jaja kkkkkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:16:58.633147",
          "text": "Só q eu tô com preguiça de levantar"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T07:16:57.901184",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-25T07:17:02.337322"
            }
          ],
          "text": "Já da pra tomar café da manhã"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:16:49.078292",
          "text": "Kkkkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:16:47.293886",
          "text": "Eu também"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:16:44.664226",
          "text": "Simm"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T07:16:39.541585",
          "text": "Eu to com fome"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:15:58.643515",
          "text": "Tá de boa"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:15:53.123619",
          "text": "Kkkkkkk hj é sábado"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T07:13:41.482936",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-25T07:15:36.325659"
            }
          ],
          "text": ";(("
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T07:13:38.439567",
          "text": "Eu preciso"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:11:03.311649",
          "text": "Você precisa de ajuda"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:10:48.732241",
          "text": "A n vei"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:10:45.831272",
          "text": "Kkkkkkkkkkkkkkkkkkkkkkk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T07:10:38.929761",
          "text": "Já era"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T07:10:37.684396",
          "text": "Usou a primeira vez"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T07:10:34.708065",
          "text": "É que nem crack"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T07:10:31.581266",
          "text": "Esse jogo aqui"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T07:10:28.777382",
          "text": "Não"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:09:46.245183",
          "text": "Free fire é pq é ruim"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:09:29.158091",
          "text": "Acho que n né"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:09:09.275172",
          "text": "Q vc enjoa?"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:09:04.477471",
          "text": "Será"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:09:00.785557",
          "text": "Uma hr"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:08:54.671935",
          "text": "Mano"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:08:49.721730",
          "text": "Kkkkkkkk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T07:07:26.319648",
          "text": "Isso é doença"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T07:07:10.074355",
          "text": "4h e to aqui"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T07:07:01.716935",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-25T07:08:43.442241"
            }
          ],
          "text": "Vou desinstalar"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:04:35.747657",
          "text": "Como é"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:04:32.663125",
          "text": "Ver"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:04:31.107412",
          "text": "P vee"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:04:22.917669",
          "text": "Esse jg"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:04:19.784019",
          "text": "Mesmo"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:04:18.167011",
          "text": "Eu vou baixar"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:04:12.505433",
          "text": "Mas depois"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:04:04.921227",
          "text": "Dmr"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T07:04:01.088618",
          "text": "Demorou?"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:03:59.524631",
          "text": "Tá ok"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:03:55.857048",
          "text": "Kkkkkkkkkkkkkkkk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T07:03:55.014936",
          "text": "A gente vai trio"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T07:03:52.182055",
          "text": "E aí você baixa"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T07:03:48.324158",
          "text": "Vou te vender um pc"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:03:14.096162",
          "text": "Tbm"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:03:12.600834",
          "text": "Quero viciar meus amigos"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:03:06.027776",
          "text": "E ainda"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:02:52.813919",
          "text": "Estou a 10 dias jogando sem parar"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:02:40.377484",
          "text": "Sou viciado"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:02:35.624944",
          "text": "Oi meu nome é Gustavo"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:02:26.901701",
          "text": "Gustavo"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:02:16.859423",
          "text": "E ainda pediu p eu baixar tbm"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T07:02:09.342271",
          "text": "Kkkkkkkkkkkk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T07:00:56.587750",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-25T07:02:05.601139"
            }
          ],
          "text": "E falei pra ele baixar"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T07:00:51.370374",
          "text": "Eu que vendi pra ele"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T07:00:44.715414",
          "text": "Totalmente minha"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T06:58:54.151631",
          "text": "Culpa sua"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T06:58:49.295709",
          "text": "E Danilo tbm"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T06:58:43.731424",
          "text": "Você tá viciado mesmo"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T06:58:24.644889",
          "text": "Né nada po"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T06:58:18.256398",
          "text": "Mas eu sou ruimzao"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T06:58:13.391118",
          "text": "Kkkkkkkk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T06:58:12.497551",
          "text": "Eu vou parar"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T06:58:05.287647",
          "text": "De viciado"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T06:58:03.531991",
          "text": "Eu to ridículo"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T06:57:54.734844",
          "text": "Ranking"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T06:57:51.011638",
          "text": "E eu 153"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T06:57:43.177595",
          "text": "Ele tá taking 75"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T06:57:32.367092",
          "text": "Kkkkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T06:57:30.305108",
          "text": "Né"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T06:57:28.529848",
          "text": "Ainda"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T06:57:27.458122",
          "text": "Difícil"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T06:57:25.705922",
          "text": "Tentem pelo menos ficar em décimo lugar"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T06:56:57.803120",
          "text": "Então n é fácil"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T06:56:51.199235",
          "text": "Aaaaah"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T06:56:50.141314",
          "text": "O máximo é 155"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T06:56:46.343397",
          "text": "Ou são missões"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T06:56:46.194363",
          "text": "É tipo ranking"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T06:56:20.629744",
          "text": "É tipo ranqueada?"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T06:55:57.186759",
          "text": "1"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T06:55:56.225292",
          "text": "Pelo menos"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T06:55:52.660285",
          "text": "Ganhar"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T06:55:50.891456",
          "text": "Vcs precisam"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T06:55:28.323960",
          "text": "Oh vei"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T06:55:20.481857",
          "text": "KKKKKKKKKKKKKKKKO"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T06:55:13.893385",
          "text": "O desgraçado ainda tá comigo"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T06:55:10.825117",
          "text": "Ou carregando o Danilo"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T06:55:00.318145",
          "text": "Jogando sozinho?"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T06:54:52.847886",
          "text": "Vei"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T06:54:51.993689",
          "text": "Acredito kkkkkkkk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T06:54:24.052628",
          "text": "Tu acredita????"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T06:53:37.167321",
          "text": "Kkkkkkkkkkkkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T06:53:31.613660",
          "text": "2"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T06:53:31.028329",
          "text": "Deus é mais"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T06:53:25.440013",
          "text": "Imagina se você fosse igual a mim"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T06:53:21.901076",
          "text": "Deus é mais"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T06:53:08.014121",
          "text": "Kkkkkkkkk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T06:53:03.430909",
          "text": "Imagina se você fosse igual a mim"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T06:52:57.325859",
          "text": "Por isso que eu gosto"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T06:52:41.775774",
          "text": "Mas mesmo assim eu concordo contg"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T06:52:17.385522",
          "text": "Você é tipo ao contrário de mim kkkkkkkkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T06:50:22.477775",
          "text": "N são todas as pessoas mesmo"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T06:49:58.884197",
          "text": "Eu gosto de falar contg kkk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T06:49:44.983417",
          "text": "Sobre essas coisas"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T06:49:33.924178",
          "text": "Poucas pessoas sabem falar"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T06:49:30.487764",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-25T06:49:40.938898"
            }
          ],
          "text": "E a gente deveria ter mais esse papo de vida"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T06:48:51.136966",
          "text": "Muito bom KKK"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T06:48:43.212062",
          "text": "Eu não deixo"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T06:48:40.545580",
          "text": "Quem me incomoda não fala comigo"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T06:48:35.144714",
          "text": "Você, jamais"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T06:47:08.708297",
          "text": "Mas n vou pensar assim"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T06:47:00.809187",
          "text": "Pode deixar, é q eu tenho mania de achar q vou atrapalhar a pessoa Kk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T06:46:24.419955",
          "text": "Por favor..."
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T06:45:06.512336",
          "text": "Tá bom, bom saber"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T06:44:42.206867",
          "text": "E a hora q quiser"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T06:44:39.433430",
          "text": "Me manda mensagem o dia que quiser"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T06:44:26.219957",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-25T06:44:47.302831"
            }
          ],
          "text": "Eu esperei sua mensagem"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T06:44:05.647776",
          "text": "N mandei"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T06:44:03.960630",
          "text": "Daí"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T06:43:59.421066",
          "text": "Igual hoje, eu ia te mandar msg, mas eu fiquei achando q iria te incomodar"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T06:43:44.753445",
          "text": "Boa sorte viu"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T06:42:53.759298",
          "text": "Kkkkkkkkkkkk esperando esse dia chegar"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T06:42:37.869745",
          "text": "Se deixar"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T06:42:34.818140",
          "text": "Eu falo mais q tu"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T06:42:31.191540",
          "text": "Tu tá lascada"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T06:42:28.640587",
          "text": "Pegar intimidade"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T06:42:25.629074",
          "text": "É só no começo..."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T06:41:59.610591",
          "text": "Mas isso aí kkkkkk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T06:41:21.254901",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-25T06:41:28.479341"
            }
          ],
          "text": "Você tá certa"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T06:41:18.505650",
          "text": "To zoando"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T06:41:13.928249",
          "text": "Kkkkkkkkkkkk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T06:40:48.393386",
          "text": "Fala pouco é ruim"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T06:40:42.600494",
          "text": "Falar muito é bom"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T06:40:36.744191",
          "text": "Não"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T06:39:20.680310",
          "text": "Mas penso assim"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T06:39:11.061387",
          "text": "Posso até estar errada"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T06:38:14.784190",
          "text": "Kkkkkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T06:38:10.850373",
          "text": "Pq eu ficaria é triste"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T06:37:58.723748",
          "text": "Menos"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T06:37:56.092650",
          "text": "De tentar falar menod"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T06:37:48.776265",
          "text": "Já desisti"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T06:37:45.323600",
          "text": "Igual eu"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T06:37:35.613162",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-25T06:41:24.695905"
            }
          ],
          "text": "Mas se tenta mudar algo q é tipo um traço forte da sua personalidade vc deixa de ser vc kkkkkkkkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T06:36:40.245111",
          "text": "Pq mudar em outras coisas todos nós precisamos"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T06:36:20.754728",
          "text": "Nesse sentido"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T06:36:07.852243",
          "text": "Se você muda"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T06:36:01.767148",
          "text": "Cada um é cada um"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T06:35:41.287319",
          "text": "Você n precisa de nada"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T06:35:24.320586",
          "text": "Gustavo, fraco você é só no Gartic"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T06:35:16.170978",
          "text": "Eu preciso disso"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T06:35:05.613314",
          "text": "Eu ainda sou fraco"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T06:35:02.585511",
          "text": "Não"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T06:34:48.381842",
          "text": "E tá tudo bem kk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T06:34:31.109220",
          "text": "Igual disse, cada um tem um jeito"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T06:34:02.705345",
          "text": "Entendo"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T06:33:54.653587",
          "text": "Eu falo o mínimo"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T06:33:50.843091",
          "text": "Eu demoro"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T06:33:48.924551",
          "text": "Eu preciso de tempo"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T06:33:41.823166",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-25T06:33:46.674524"
            }
          ],
          "text": "O de falar bem com as pessoas sem conhecê-las"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T06:33:19.047539",
          "text": "Mas você tem um atributo diferente"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T06:33:13.021083",
          "text": "Sim, intimidade todo mundo precisa pegar pra se abrir"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T06:31:53.859167",
          "text": "É superficial"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T06:31:49.177868",
          "text": "Mas eu n tenho intimidade com todo mundo"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T06:31:33.343714",
          "text": "Não tem distinção"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T06:31:29.706599",
          "text": "Você fala com geral"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T06:31:19.213932",
          "text": "O problema é as pessoas confundirem isso com intimidade"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T06:31:09.024777",
          "text": "Não é nada ruim"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T06:30:52.149794",
          "text": "Se expressar dms"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T06:30:42.485190",
          "text": "Isso q n é bom"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T06:30:32.325140",
          "text": "Você passa uma imagem legal tb"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T06:29:55.250172",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-25T06:30:33.145314"
            }
          ],
          "text": "Você se expressa rápido"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T06:29:54.897322",
          "text": "Você nem sabe"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T06:29:50.830245",
          "text": "Para com isso"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T06:29:43.701434",
          "text": "Eu não"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T06:29:39.799566",
          "text": "Mas você passa uma imagem legal desde o início"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T06:29:24.876140",
          "text": "Sim claro"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T06:27:43.253816",
          "text": "E temos muito tempo kkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T06:27:23.897752",
          "text": "Mesmo eu sendo faladeira, você também só vai me conhecer com o tempo"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T06:26:35.726803",
          "text": "Kkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T06:26:28.199610",
          "text": "E eu tenho paciência"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T06:26:08.024691",
          "text": "Isso não é um defeito"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T06:26:01.394263",
          "text": "Olha"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T06:25:41.462239",
          "text": "Você só vai precisar ter paciência comigo"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T06:25:21.843206",
          "text": "Não é nem 10% do que eu sou"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T06:25:13.030164",
          "text": "Tudo que a gente conversou... e a gente conversou muito"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T06:25:08.924867",
          "text": "N é mesmo"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T06:25:03.638085",
          "text": "N é defeito"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T06:24:57.561193",
          "text": "Eu queria"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T06:24:54.775421",
          "text": "Mas eu não consigo mudar isso"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T06:24:48.158514",
          "text": "É um defeito meu não me abrir direto no começo"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T06:24:35.607165",
          "text": "Você vai me conhecer com o tempo"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T06:24:21.716538",
          "text": "Kk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T06:24:18.969268",
          "text": "Você ué"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T06:24:02.996960",
          "text": "Quem?"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T06:23:47.246194",
          "text": "Da vontade de conhecer a pessoa sla"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T06:23:17.559717",
          "text": "É legal isso"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T06:23:03.770046",
          "text": "Sim"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T06:22:57.138103",
          "text": "Só que essa intimidade levou um tempo"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T06:22:46.982658",
          "text": "Hoje eu falo com ele muito mais do que eu falava"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T06:22:33.102444",
          "text": "Mas isso quando não tinha intimidade com ele"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T06:22:25.261931",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-25T06:22:27.468644"
            }
          ],
          "text": "Sim"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T06:22:12.278749",
          "text": "Kk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T06:22:03.437933",
          "text": "Sempre foi"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T06:21:58.711083",
          "text": "Ele é muito na dele"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T06:21:51.130681",
          "text": "O Cassimiro falou bem assim"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T06:21:48.070973",
          "text": "Kkkkkkkk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T06:21:45.280256",
          "text": "Viu? Que é difícil de explicar"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T06:21:22.286691",
          "text": "Kkkkkkkkkkkkkkk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T06:21:12.588480",
          "text": "Mas eu falo mais do que aquilo e menos do que eles"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T06:20:37.697311",
          "text": "Kkk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T06:20:34.127069",
          "text": "É difícil explicar"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T06:20:29.057424",
          "text": "Sei lá"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T06:19:52.244724",
          "text": "Uhumm"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T06:19:47.168334",
          "text": "Sim, cada um tem uma característica"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T06:19:23.329969",
          "text": "Kkkkkkkkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T06:19:20.876211",
          "text": "É de um jeito"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T06:19:17.889930",
          "text": "Cada um"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T06:19:16.116860",
          "text": "A mais o legal é isso"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T06:18:42.589019",
          "text": "Mas ele é muito na dele tb"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T06:18:37.484418",
          "text": "Pq tem intimidade"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T06:18:32.490411",
          "text": "Sim, o Vitor Hugo é daquele jeito com a gente"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T06:18:13.709195",
          "text": "Era só cumprimento"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T06:18:10.325896",
          "text": "Se ele não fosse meu amigo ele não falaria quase nada comigo"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T06:17:56.093990",
          "text": "Intimidade"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T06:17:50.540015",
          "text": "Q seria amiga dele"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T06:17:47.441225",
          "text": "Eu nunca pensei"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T06:17:39.778119",
          "text": "Meu Deus"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T06:17:37.071464",
          "text": "O Vitor hugo"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T06:17:25.006159",
          "text": "Pq ele era na dele tb"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T06:17:12.093752",
          "text": "N conseguia conversar cmg"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T06:17:03.714756",
          "text": "Era muito calado"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T06:16:58.200981",
          "text": "O Bruno"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T06:16:56.037145",
          "text": "O meu melhor amg"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T06:16:48.338141",
          "text": "É engraçado"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T06:16:38.336033",
          "text": "Kkkkkkkkkkk sim o Lucas não cala a boca"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T06:16:04.765211",
          "text": "Lucas? Não cala a boca..."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T06:15:57.232767",
          "text": "Por exemplo eu só ando com gente que fala"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T06:15:42.533544",
          "text": "Que as pessoas geralmente gostam da aversão delas mesmas"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T06:15:17.757094",
          "text": "Um dia eu li"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T06:15:15.690080",
          "text": "Eu gosto de pessoa que falam"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T06:14:56.135942",
          "text": "Até hj"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T06:14:54.273303",
          "text": "Mas eu ainda tô tentando mudar"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T06:14:44.951693",
          "text": "Pra todo mundo"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T06:14:42.152257",
          "text": "N falar tudo"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T06:14:36.134830",
          "text": "Que eu devia ter mais maldade"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T06:14:27.108020",
          "text": "Minha mãe uma vez falou pra mim"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T06:14:17.632729",
          "text": "Kkkk e eu já tentei"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T06:13:56.096156",
          "text": "Eu falo sem pensar pq eu sou empolgada"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T06:13:28.433945",
          "text": "Tipo ali com vcs"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T06:13:21.159652",
          "text": "Q eu tô"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T06:13:19.176957",
          "text": "Do ambiente"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T06:13:17.492150",
          "text": "Depende muito"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T06:13:09.434416",
          "text": "Filtrar"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T06:13:06.168245",
          "text": "Eu n consigo muito"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T06:12:49.974327",
          "text": "Nossa, isso é muito inteligente pra mim"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T06:12:39.563926",
          "text": "Que eu poderia falar qualquer bosta que viesse na minha cabeça e tava tudo certo"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T06:12:24.822672",
          "text": "Porque é uma pressão psicológica que eu fico"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T06:12:05.628594",
          "text": "Mas isso é mei ruim"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T06:11:59.926659",
          "text": "Eu penso muito pra falar... filtro muito, me adapto a pessoa"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T06:11:26.148122",
          "text": "Kkkkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T06:11:23.037869",
          "text": "Mas nem tanto"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T06:11:18.947967",
          "text": "Entendo, eu sou um pouco assim tb"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T06:10:33.163230",
          "text": "Eu consigo interagir com qualquer um, mas quando eu pego intimidade 100% é infinitamente diferente"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T06:09:40.270376",
          "text": "Kkkkkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T06:09:38.702076",
          "text": "Ou ela pode querer te conhecer"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T06:09:28.367487",
          "text": "Aí a pessoa pode escolher n ter uma amizade contg por vc ser mais na sua"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T06:08:53.805340",
          "text": "Q n sei pq"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T06:08:50.406966",
          "text": "E eu juro"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T06:08:46.949207",
          "text": "Eu percebi na hr q vc era na sua, mas você passa uma imagem de uma pessoa q é confiável"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T06:07:49.271223",
          "text": "Quando eu te conheci"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T06:07:39.736935",
          "text": "Mas depende muito, pq assim"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T06:07:11.846513",
          "text": "Mas poucos amigos"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T06:07:02.717947",
          "text": "Embora eu conheça bastante gente"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T06:06:53.246405",
          "text": "É ruim porque poderia conhecer muita gente muito fácil"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T06:06:24.648200",
          "text": "Não, no meu caso"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T06:06:04.649470",
          "text": "Nas pessoas"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T06:06:01.034471",
          "text": "Eu confio muito fácil"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T06:05:56.262782",
          "text": "Eu sei"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T06:05:51.394251",
          "text": "Isso tem pontos positivos e pontos negativos"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T06:05:35.367333",
          "text": "Mas n adianta"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T06:05:31.439854",
          "text": "Eu já tentei tanto me abrir menos"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T06:05:14.136721",
          "text": "Você é seletivo"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T06:05:04.184748",
          "text": "Sim, percebi kkk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T06:04:52.943342",
          "text": "O Lucas tem facilidade, Danilo"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T06:04:31.020504",
          "text": "Você é muito na sua"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T06:04:23.309930",
          "text": "Imaginei que percebeu"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T06:04:16.516888",
          "text": "Acho lindo"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T06:04:10.905116",
          "text": "Em você"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T06:04:07.224930",
          "text": "Eu percebi isso dms"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T06:04:02.638930",
          "text": "Eu tenho facilidade pq eu falo muito"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T06:03:50.702489",
          "text": "Eu analiso o comportamento, a mente"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T06:03:40.180526",
          "text": "Pra pegar intimidade comigo, leva tempo"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T06:03:15.176112",
          "text": "Eu não"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T06:03:12.774043",
          "text": "Com todo mundo"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T06:03:03.192293",
          "text": "Você tem uma facilidade enorme de fazer amizade"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T06:02:54.088209",
          "text": "Sim"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T06:02:39.675706",
          "text": "Eu n gostar de alguém"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T06:02:33.662039",
          "text": "Mas é muito difícil"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T06:02:23.734079",
          "text": "Kkkkkkkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T06:02:21.058776",
          "text": "Tb"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T06:02:20.082522",
          "text": "E quando eu n gosto"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T06:02:16.891604",
          "text": "Quando eu gosto da pessoa ela vai saber"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T06:01:58.749946",
          "text": "Você se expressa bem"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T06:01:54.747618",
          "text": "É"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T06:01:48.128982",
          "text": "Verdadeiras"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T06:01:40.133475",
          "text": "Kkkkkkk isso"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T06:01:35.100184",
          "text": "Leais"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T06:01:29.373825",
          "text": "São legítimas"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T06:01:21.678869",
          "text": "Kkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T06:01:16.414774",
          "text": "Sla"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T06:01:09.417157",
          "text": "Mas as q eu tenho"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T06:00:56.046931",
          "text": "N tenho muitas amigas"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T06:00:36.669815",
          "text": "Kkkkkkkkkkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T06:00:30.667645",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-25T06:01:42.025859"
            }
          ],
          "text": "Eu demonstro muito"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T05:59:10.541037",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-25T06:01:40.663816"
            }
          ],
          "text": "As vzs quero falar alguma coisa e aí n tem graça falar por msg"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T05:58:45.076705",
          "text": "Sempre ligo para as pessoas do nada"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T05:58:32.860966",
          "text": "Kkkkkkkkko"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T05:58:30.297220",
          "text": "Pra uma"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T05:57:40.144172",
          "text": "Ligou pra todas ou só pra uma?"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T05:56:38.614001",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-25T06:00:14.633194"
            }
          ],
          "text": "É bom dar importância pra eles"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T05:56:23.043740",
          "text": "Tudo o que temos são nossos amigos"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T05:55:58.826260",
          "text": "Ta certo"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T05:42:01.056607",
          "text": "Tô sensível sla, acho q é quarentena"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T05:41:01.184432",
          "text": "Tô c sdd das pessoas"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T05:40:47.038620",
          "text": "N sei o que deu em mim, saí me declarando pros meus amigos hj"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T05:39:32.022671",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-25T05:55:53.650188"
            }
          ],
          "text": "Eu tô com muita sdd da minha amg aí eu liguei pra ela agorinha do nada e comecei a chorar sendo q n faz tanto tempo assim q a gnt se viu KKKKKKKKKK"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T05:38:44.170338",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-25T05:55:52.449738"
            }
          ],
          "text": "E começar a me declarar"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T05:38:38.253655",
          "text": "De ligar pras minhas amigas"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T05:38:32.068417",
          "text": "Eu tenho q parar"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T05:38:23.876054",
          "text": "Então"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T05:38:22.084942",
          "text": "Kkkkkkk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T05:37:45.691859",
          "text": "Puxa um assunto massa aí"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T05:37:35.271337",
          "text": "Vai, chega de falar de jogo"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T05:37:20.280012",
          "text": "Uhum"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T05:36:30.359168",
          "text": "De partida?"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T05:36:24.924227",
          "text": "Três min"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T05:36:22.011341",
          "text": "KKKKKk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T05:35:37.005940",
          "text": "Bacana!!"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T05:35:31.333572",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-25T05:36:17.684466"
            }
          ],
          "text": "Quanto tempo? 3 minutos"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T05:35:22.597232",
          "text": "A fé acabou"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T05:33:16.287514",
          "text": "Kkkkkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T05:33:13.665037",
          "text": "Fé"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T05:32:44.939144",
          "text": "Vou jogar a última aqui, vamuvê"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T05:32:28.544896",
          "text": "Não :))))"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T05:27:58.756632",
          "text": "N ganharam nenhuma?"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T05:26:02.202356",
          "text": "Ate a gente ganhar uma"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T05:25:58.837656",
          "text": "Mas fácil eu ficar passando raiva com Danilo aqui"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T05:23:05.430884",
          "text": "Acordou cedo"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T05:22:53.484404",
          "text": "Você jaja capota"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T05:22:46.329505",
          "text": "Kkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T05:22:44.176584",
          "text": "Tem nada pra fazer, mas n quero dormir agr"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T05:20:30.150155",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-25T05:22:27.712242"
            }
          ],
          "text": "Rede social, dormir"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T05:20:22.310322",
          "text": "Que que tem pra fazer uma hora dessas?"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T05:20:14.377902",
          "text": "E aí?"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T05:18:44.999475",
          "text": "De tédio"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T05:18:41.499372",
          "text": "Vou morrer"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T05:18:38.735127",
          "text": "Tô fazendo nada não"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T05:18:34.935125",
          "text": "Tadin"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T05:18:30.609554",
          "text": "E você?"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T05:18:22.881168",
          "text": "Kkkkkkk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T05:18:13.687135",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-25T05:18:20.179774"
            }
          ],
          "text": "Ele gosta de sofrer"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T05:18:10.657964",
          "text": "Uhum"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T05:17:18.912526",
          "text": "Estão jogando ainda? Kkkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T05:12:17.963445",
          "text": "Se você está dizendo"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T05:12:09.482826",
          "text": "Kkk hmm"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T05:11:08.472267",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-25T05:11:57.095357"
            }
          ],
          "text": "Ele é bãum"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T05:10:58.544034",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-25T05:11:01.795224"
            }
          ],
          "text": "To só gastando ele"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T05:10:49.010273",
          "text": "Hehehe"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T05:00:07.815017",
          "text": "Tem q carregar o amigo"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T04:59:41.171331",
          "text": "Kkkkkkkkkkkkk putasso"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T04:56:43.466726",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-25T04:59:35.349478"
            }
          ],
          "text": "Mais fácil jogar sozinho"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T04:56:37.895317",
          "text": "Da não"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T04:56:36.658800",
          "text": "Não"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T04:44:43.865304",
          "text": "\"Eu falo pra ele ficar junto\""
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T04:44:31.859736",
          "text": "Q pala"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T04:44:30.246045",
          "text": "KKKKKKKKKKKK"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T04:43:44.799190",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-25T04:44:19.965477"
            }
          ],
          "voice_media": "Media unavailable."
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T04:39:51.213157",
          "text": "Brincadeira 😂"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T04:39:47.646367",
          "text": "Deixa eu só baixar esse jogo"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T04:39:42.168579",
          "text": "Mas eu sou melhor q ele msm po"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T04:39:26.477285",
          "text": "Q você disse"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T04:39:23.397337",
          "text": "Vou acreditar nisso ai"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T04:39:12.125894",
          "text": "Kkkkkkkkkkkkkkkkkkkkkk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T04:39:08.058553",
          "text": "Fico é bolado"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T04:39:04.984405",
          "text": "Faria muito mais q ele"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T04:38:58.636195",
          "text": "Mas se tu tivesse no lugar dele"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T04:38:50.764872",
          "text": "Tamo em time"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T04:36:40.580120",
          "text": "Ganhando do Danilo aí? Kkkkkk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T04:36:10.056808",
          "text": "Brincadeira"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T04:25:44.228052",
          "text": "Não"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T04:25:42.145758",
          "text": "LKKKKKKKK"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T04:23:27.173801",
          "text": "Mortal... empinar"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T04:22:56.220371",
          "text": "Tu faz aquelas manobras de bike?"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T04:22:04.623578",
          "text": "É impossível fazer essas coisas andando de bicicleta"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T04:18:25.059497",
          "text": "Da última vez foi pior"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T04:17:58.247231",
          "media": "https://scontent-atl3-2.cdninstagram.com/v/t51.2885-15/e35/111700541_2687246801546873_578791758666678132_n.jpg?_nc_ht=scontent-atl3-2.cdninstagram.com&_nc_cat=105&_nc_ohc=oU567fRAj64AX-Wze8O&tp=18&oh=8f640f6efab7a70f523d2db63b761d76&oe=5FCD2D4E&ig_cache_key=MjM2MDgxMTQ1NzI2NzcxOTg2Ng%3D%3D.2"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T04:13:30.916306",
          "text": "Isso sim"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T04:13:28.503965",
          "text": "Tô muito é sedentária"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T04:13:00.128777",
          "text": "Kkkkk eu sla"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T04:10:47.684758",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-25T04:12:59.317245"
            }
          ],
          "text": "Que ferro é esse?"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T04:10:36.998461",
          "text": "Bacana"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T04:10:33.739321",
          "text": "Sai pra andar de bicicleta e volta toda cortada"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T04:10:21.802087",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-25T04:13:04.185883"
            }
          ],
          "text": "Aventureira"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T04:06:34.810636",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T04:06:01.637823",
          "text": "Kkkkkkkkkkkkkkkkk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T04:05:13.382311",
          "text": "Me conta"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T04:05:07.144465",
          "text": "Que que tu fez com essa perna???"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T03:59:11.508696",
          "text": "A barraca do beijo 2 kkkkkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T03:58:01.301576",
          "text": "Eu vi só um"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T03:57:35.384541",
          "text": "Q vergonha"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T03:57:32.688466",
          "text": "Nossa, simmmmmmm"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T03:57:19.203136",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-25T03:57:24.504408"
            }
          ],
          "text": "Vou muito filme hoje?"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T03:57:02.741560",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-25T03:57:23.751375"
            }
          ],
          "text": "Que vergonha pra sociedade"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T03:56:28.716227",
          "text": "Estudando"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T03:56:26.371270",
          "text": "Sexta à noite"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T03:56:22.998705",
          "text": "Na moral"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T03:55:13.780779",
          "text": "n aguento mais Netflix"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T03:54:48.144315",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-25T03:57:06.721121"
            }
          ],
          "text": "Mais tarde acho q talvez vou ver outro filme"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T03:54:05.649374",
          "text": "E ela n para"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T03:54:02.193917",
          "text": "Eu quero conversar com ela"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T03:53:48.867859",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-25T03:56:20.204865"
            }
          ],
          "text": "Atrapalhando a Dani estudar kkkkkkk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T03:53:14.017294",
          "text": "E tu? Tá fazendo o que?"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T03:43:22.862753",
          "text": "Concordo com você"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T03:43:16.955910",
          "text": "Kkkkkkkkkkkkkkkkk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T03:43:08.913932",
          "text": "Sabe nem desenhar"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T03:43:04.501898",
          "text": "Ele é o mais medíocre"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T03:40:39.915496",
          "text": "Mas nem é"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T03:40:30.769247",
          "text": "Quer ser o melhor lá no Gartic"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T03:40:22.254549",
          "text": "Ele se acha po"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T03:40:12.549478",
          "text": "Larguei"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T03:40:08.690333",
          "text": "Eu sai"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T03:40:02.555912",
          "text": "Aiai"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T03:40:00.517177",
          "text": "KKKKKKKKKK"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T03:39:53.002661",
          "text": "Vocês estavam jogando lá até agora"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T03:39:38.232167",
          "text": "Que se fosse por você"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T03:39:33.537155",
          "text": "Ele tá falando aqui"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T03:39:30.950238",
          "text": "To jogando com Danilo"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T03:39:14.598136",
          "text": "Viciado"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T03:39:06.065649",
          "text": "Kkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T03:39:01.280045",
          "text": "Já até sei q jogo"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T03:38:38.609539",
          "text": "Faz um tempin"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T03:38:15.103199",
          "text": "Chegou só agr? Kk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T03:37:56.747233",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-25T03:38:05.834894"
            }
          ],
          "text": "Cheguei, e to jogando agora"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T03:37:53.745103",
          "text": "Kksksksksksksk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T03:37:50.116649",
          "text": "Se bem q é fácil"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T03:37:43.932883",
          "text": "Na minha tb, tipo escalar"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T03:37:22.292115",
          "text": "Mas na minha vez aparecia uns trem nada a ver"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T03:36:57.909909",
          "text": "Agr eu sou ruim msm"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T03:36:51.444073",
          "text": "Hmmmmm kkkkkkk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T03:36:42.996102",
          "text": "Te juro"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T03:36:40.952219",
          "text": "Eu desenhava em um canto, e aparecia em outro"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T03:36:39.547113",
          "text": "Kkkkkkkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T03:36:37.500827",
          "text": "Sei"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T03:36:35.575594",
          "text": "Ahan"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T03:36:25.664440",
          "text": "Hahahahah"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T03:36:19.651604",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-25T03:36:22.510716"
            }
          ],
          "text": "Tadin do Gustavo"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T03:36:11.648771",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-25T03:36:31.065187"
            }
          ],
          "text": "Bugado"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T03:36:10.167356",
          "text": "Ainda pensei quando eu acordei"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T03:36:08.791349",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-25T03:36:30.065746"
            }
          ],
          "text": "Tava bufado"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T03:36:05.926919",
          "text": "O meu navegador"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T03:36:02.648536",
          "text": "Foi difícil acordar"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T03:35:59.302198",
          "text": "Minha fia"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T03:35:45.916937",
          "text": "Você é pior que eu"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T03:35:45.126193",
          "text": "O que?"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T03:35:38.819704",
          "text": "KKKKK"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T03:35:36.729933",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-25T03:35:55.113223"
            }
          ],
          "text": "Como? Cheguei mortin em casa"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T03:35:34.780930",
          "text": "Só uma coisa"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T03:35:31.180854",
          "text": "Nada"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T03:35:13.715139",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-25T03:35:27.434368"
            }
          ],
          "text": "Jogou muito aquele dia com eles?"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T03:32:43.323345",
          "text": "Milagre n ter saído com os meninos kskks"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T03:32:27.196534",
          "text": "Tá fazendo o que de bom?"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T03:28:27.633688",
          "text": "Baozin"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T03:17:43.855972",
          "text": "E você, como c tá?"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-25T03:17:30.481455",
          "text": "Oii, tô bemm"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-25T03:16:22.285907",
          "text": "Tá bem?"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-24T04:15:38.987534",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-24T11:52:03.960997"
            }
          ],
          "text": "❤️"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-24T04:14:41.427316",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-24T04:15:24.073823"
            }
          ],
          "text": "Foi bom te ver! ❤️"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-24T03:31:31.666191",
          "text": "Só p passar vergonha esse jogo"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-24T03:31:23.679145",
          "text": "Já disse"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-24T03:31:21.689504",
          "text": "Kkkkkkk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-24T03:14:03.290633",
          "text": "Mas eu quero ver tu desenhando primeiro"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-24T03:13:46.043009",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-24T03:31:08.980062"
            }
          ],
          "text": "Porque eu preciso"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-24T03:13:42.745090",
          "text": "Então é melhor mandar"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-24T03:12:33.799069",
          "text": "Kk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-24T03:12:25.201544",
          "text": "Mandei nada"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-24T03:12:17.084527",
          "text": "Não"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-24T03:12:08.343686",
          "text": "Mandou tá mandado"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-24T03:12:04.527787",
          "text": "Tu mandou eu ir dormir"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-24T03:12:00.188148",
          "text": "Uai"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-24T03:11:39.246609",
          "text": "Kkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-24T03:11:36.072830",
          "text": "N entendi, vai dormir ou ficar?"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-24T03:10:58.155452",
          "text": "Eu vou"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-24T03:10:43.701079",
          "text": "Que linda sua preocupação"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-24T03:10:33.420137",
          "text": "Kkkkkkkk claro que não"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-24T03:10:22.280542",
          "text": "Você tá me expulsando"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-24T03:10:17.515544",
          "text": "Nosssaaaaa"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-24T03:09:40.323284",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-24T03:10:31.418200"
            }
          ],
          "text": "ei, você já deve ir dormir, foi bom te ver"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-23T22:16:34.704193",
          "text": "Show!"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-23T22:16:26.435457",
          "text": "Vou falar com eles"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-23T22:16:23.162448",
          "text": "Tá bom"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-23T22:16:17.878643",
          "text": "Mas passem aqui na volta"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-23T22:16:12.501793",
          "text": "Vou não"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-23T22:15:57.696557",
          "text": "Pensei q você ia"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-23T22:15:31.721080",
          "text": "Os meninos vão agr"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-23T22:15:28.361111",
          "text": "Andar de bike"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-23T22:12:18.612675",
          "text": "Pra onde linda?"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-23T22:10:24.803257",
          "text": "Você vai?"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-23T17:07:10.924166",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-23T20:36:43.366573"
            }
          ],
          "text": "Hmm"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-23T16:38:07.772429",
          "text": "É verdade"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-23T16:37:23.885293",
          "text": "Kkkkkkkkkkk Lucas é triste"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-23T16:36:34.447282",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-23T16:34:53.192860",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-23T16:37:12.543853"
            }
          ],
          "voice_media": "Media unavailable."
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-23T16:27:19.192880",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-23T20:59:45.151848"
            }
          ],
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-23T16:25:11.219515",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-23T16:25:41.353851"
            }
          ],
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-23T16:23:33.049788",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-23T16:25:25.524455"
            }
          ],
          "voice_media": "Media unavailable."
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-23T16:22:01.545270",
          "text": "Ontem"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-23T16:21:56.561435",
          "text": "Ele falou quando com você?"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-23T16:21:47.584227",
          "text": "Kkkkkkkkkkkk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-23T16:21:21.694341",
          "text": "Que doideira"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-23T16:21:17.589333",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-23T16:21:43.267986"
            }
          ],
          "voice_media": "Media unavailable."
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-23T16:20:47.500914",
          "text": "Simm"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-23T16:20:30.250285",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-23T16:20:38.103296"
            }
          ],
          "text": "Cassimiro ficou responsável cedo na vida"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-23T16:20:23.025503",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-23T16:19:48.502501",
          "text": "E ela fez oq?"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-23T16:19:44.157485",
          "text": "Venderam remédio caro pra Daniela?"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-23T16:18:33.931864",
          "text": "Mas agr q ele tá morando sozinho e longe kk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-23T16:18:10.345058",
          "text": "Ele ia lá pra minha tia, vinha aqui mas meu primo"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-23T16:17:49.124036",
          "text": "Sim"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-23T16:17:46.948156",
          "text": "Então, quando ele morava aqui"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-23T16:17:24.938599",
          "text": "E a minha irmã q foi na farmácia e o cara vendeu o remédio pra ela pelo dobro do preço"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-23T16:16:49.155842",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-23T16:17:33.898089"
            }
          ],
          "text": "Vocês se veem direto então?"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-23T16:16:36.275223",
          "text": "Tbm, ele praticamente primo meu"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-23T16:16:21.279806",
          "text": "Gosto demais dele"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-23T16:15:55.476892",
          "text": "Cassimiro é massa dms kk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-23T16:15:46.715039",
          "text": "Vai sim"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-23T16:15:44.878611",
          "text": "Ruim demais, tadinha"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-23T16:15:28.888904",
          "text": "Ela vai melhorar"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-23T16:15:24.891829",
          "text": "Coluna ruim é ruim 😢 kkk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-23T16:14:17.384606",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-23T16:15:29.552400"
            }
          ],
          "text": "Esse mlq é dedicado nos estudos dele"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-23T16:14:06.043278",
          "text": "Cassimiro é fisio sinistro"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-23T16:13:51.049291",
          "text": "Boa!"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-23T16:10:30.043119",
          "text": "Kkkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-23T16:10:15.704230",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-23T16:13:43.289768"
            }
          ],
          "text": "Falando uns exercícios pra ela fazer"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-23T16:09:53.172662",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-23T16:13:42.397255"
            }
          ],
          "text": "Minha mãe voltou pra casa, só que ela tá com a coluna ruim, Cassimiro fica falando com ela no celular"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-23T16:07:33.585031",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-23T16:13:41.431151"
            }
          ],
          "text": "Sim, a gente ainda ficou conversando mais dps kk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-23T16:05:07.548855",
          "text": "E você? Conseguiu dormir?"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-23T13:10:47.808233",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-23T15:36:55.008124"
            }
          ],
          "text": "Sim"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-23T13:10:45.011539",
          "text": "Hmm"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-23T05:51:59.926700",
          "text": "Dormiu né"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-23T05:51:54.849381",
          "text": "Entendi kkkkk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-23T04:35:15.263182",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-23T05:51:40.032522"
            }
          ],
          "text": "Esses mlq são emocionado, mas conseguiu entender?"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-23T04:35:05.919903",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-23T05:51:39.072410"
            }
          ],
          "text": "Tive que vir pra casa"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-23T04:35:01.407748",
          "text": "Boa"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-23T04:33:14.611551",
          "text": "Por vídeo chamada"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-23T04:33:01.977229",
          "text": "Estava até agr conversando com eles KKKKKKKKKKK"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-23T04:05:06.782629",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-23T04:04:21.918202",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-23T04:32:35.931785"
            }
          ],
          "story_share": "Shared deborabasili0's story",
          "text": "Ta pesando um saco de arroz"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-23T04:03:05.641290",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-23T04:32:43.637968"
            }
          ],
          "voice_media": "Media unavailable."
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-23T01:06:03.757503",
          "media": "https://scontent-atl3-2.cdninstagram.com/v/t51.2885-15/e35/110480435_680578622808856_5555203775496985233_n.jpg?_nc_ht=scontent-atl3-2.cdninstagram.com&_nc_cat=104&_nc_ohc=Hjg4x1Bulv8AX_FzxcC&tp=18&oh=6d56fef8d1c76440683ad2e761222377&oe=5FCC3453&ig_cache_key=MjM1OTI2NTMxNTE3ODY1NjQ1Mg%3D%3D.2"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-23T01:06:02.922764",
          "media": "https://scontent-atl3-2.cdninstagram.com/v/t51.2885-15/e35/115843996_1406166306440096_8986227501529604549_n.jpg?_nc_ht=scontent-atl3-2.cdninstagram.com&_nc_cat=108&_nc_ohc=sSplsD6_kfsAX-ddcbP&tp=18&oh=58d21ec80d71f201c0a3787a0028dc9a&oe=5FCDE087&ig_cache_key=MjM1OTI2NTMwODIyNDQ2NDIyNg%3D%3D.2"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-23T01:05:56.322111",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-23T04:13:58.060356"
            }
          ],
          "text": "Gustavo véi, como assim você foi parar na delegacia? Gente KKKKKKKKKK"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-21T04:56:44.962686",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-21T04:57:20.390070"
            }
          ],
          "text": "Beijo"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-21T04:56:42.646442",
          "text": "Você também"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-21T04:56:01.189108",
          "text": "Também já vou dormir"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-21T04:55:16.444852",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-21T04:56:39.288861"
            }
          ],
          "text": "Dorme bem, beijo"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-21T04:54:57.085011",
          "text": "Tá bomm"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-21T04:52:49.423102",
          "text": "E eu acho que to indo"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-21T04:51:03.269794",
          "text": "Tens razão"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-21T04:41:44.061042",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-21T04:51:15.655347"
            }
          ],
          "text": "É linda mesmo, só q acordar cedo n é fácil kkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-21T04:41:15.677103",
          "text": "Infelizmente"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-21T04:40:15.768300",
          "text": "E você vai ter q acordar cedo quando voltar a faculdade?"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-21T04:39:42.571902",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-21T04:41:30.121963"
            }
          ],
          "text": "A vida é bela"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-21T04:36:36.102722",
          "text": "Kkkkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-21T04:36:31.512589",
          "text": "Sexta feira ❤️"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-21T04:36:15.798619",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-21T04:36:19.089522"
            }
          ],
          "text": "Final de semana é mesmo"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-21T04:36:07.448918",
          "text": "Ironia né"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-21T04:35:53.993210",
          "text": "Bão?"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-21T04:35:41.389836",
          "text": "Final de semana é tão sagrado"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-21T04:35:40.604312",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-21T04:35:50.195647"
            }
          ],
          "text": "Bão demaaaaiss acordar 6h"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-21T04:35:20.881503",
          "text": "Nossa"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-21T04:35:19.073220",
          "text": "Fazer seu horário"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-21T04:35:18.875356",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-21T04:35:25.618250"
            }
          ],
          "text": "Mas vou ter que ir todo dia, então 6h já tamo de pé"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-21T04:35:14.653679",
          "text": "Melhor coisa né"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-21T04:34:45.254374",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-21T04:35:09.401441"
            }
          ],
          "text": "Porque quando trabalho de casa eu faço meu horário"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-21T04:34:36.988255",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-21T04:35:07.868417"
            }
          ],
          "text": "Acabar essa onda de revezar eu to lascado"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-21T04:33:12.354086",
          "text": "Tem gente q gosta de acordar cedo?"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-21T04:32:43.622226",
          "text": "Acho chique dms quem gosta"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-21T04:32:33.776748",
          "text": "N gosto de acordar cedo n"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-21T04:32:25.728244",
          "text": "Como te disse"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-21T04:32:23.610556",
          "text": "Mas KKKK"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-21T04:32:14.554584",
          "text": "Coloquei o celular pra despertar 6h"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-21T04:31:39.167427",
          "text": "Eu acordei 6h aí voltei a dormir e levantei umas 10"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-21T04:31:19.331090",
          "text": "Ontem pq já são 1h e pouco kk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-21T04:31:08.582252",
          "text": "Hj n"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-21T04:31:06.363614",
          "text": "Só sei q hj"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-21T04:31:02.407287",
          "text": "Ontem eu n lembro q hrs eu dormi kk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-21T04:30:45.601832",
          "text": "Que horas então?"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-21T04:30:33.234008",
          "text": "Acordei 6h e depois dormi dnvo"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-21T04:29:52.404762",
          "text": "Nem fui dormir tarde ontem"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-21T04:28:52.967960",
          "text": "Ontem eu n dormi 6h n kkkkkkk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-21T04:25:52.474596",
          "text": "E você vai dormir 6h da manhã que nem ontem?"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-21T04:22:39.119155",
          "text": "Kkkkkkk boa"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-21T04:21:49.526048",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-21T04:22:33.074925"
            }
          ],
          "text": "Vendo uns meme"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-21T04:21:03.808050",
          "text": "Nada, to suave"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-21T04:19:15.887849",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-21T04:20:53.276994"
            }
          ],
          "text": "Hoje vc trabalhou presencial né, deve tá é cansado"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-21T04:16:44.461471",
          "text": "Bem isso"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-21T04:16:37.066055",
          "text": "Kkkkkkkkkkk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-21T04:16:29.811645",
          "text": "Quarentena feelings"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-21T04:16:23.971941",
          "text": "Kkkkkkkkkkkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-21T04:14:43.873668",
          "text": "Do nada"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-21T04:14:29.089853",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-21T04:13:56.131488",
          "text": "Kkkkk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-21T04:13:43.768500",
          "text": "Quero vocês na zueira"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-21T04:13:33.970816",
          "text": "Com toda certeza"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-21T04:13:23.553114",
          "text": "Você q é, até baixou um jogo q nem gosta"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-21T04:12:41.998923",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-21T04:13:14.854335"
            }
          ],
          "text": "Mas vão ter mais oportunidades ❤️"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-21T04:12:26.638006",
          "text": "Né, tbm acho kkkk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-21T04:12:03.501787",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-21T04:12:53.868379"
            }
          ],
          "text": "Mas aquele rolê foi muito pouco"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-21T04:11:25.464125",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-21T04:13:04.498506"
            }
          ],
          "text": "Tu que é incrível"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-21T04:06:56.009007",
          "text": "Sair"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-21T04:06:35.585662",
          "text": "Você é tão legal, imagina se minha mãe n tivesse deixado eu sai, oh vei ainda bem q eu insisti pra ir kkkkkkkk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-21T04:05:24.006587",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-21T04:05:40.268369"
            }
          ],
          "text": "O bixo é bão"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-21T04:05:15.653415",
          "text": "Kkkkkkkkkkkkkkkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-21T04:03:15.596687",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-21T04:02:54.880919",
          "text": "Kkkkkkkkkkk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-21T04:02:28.847181",
          "text": "Mario ta famosin"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-21T04:02:06.598493",
          "text": "To ligado"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-21T04:02:01.349049",
          "text": "Kkkkkkkkkkkkkkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-21T04:00:26.324418",
          "text": "KKKKKKKK"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-21T04:00:24.348469",
          "text": "Ela não para"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-21T04:00:21.206873",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-21T04:01:51.302027"
            }
          ],
          "voice_media": "Media unavailable."
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-21T03:59:33.500548",
          "text": "Dos famosos"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-21T03:59:31.009861",
          "text": "Qual a fofoca do momento?"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-21T03:59:21.713476",
          "text": "Fico de cara"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-21T03:59:16.487497",
          "text": "De todas as fofocas KKK"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-21T03:59:10.627246",
          "text": "A bixa sabe"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-21T03:58:46.666266",
          "text": "A gente tá rindo aqui"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-21T03:58:32.233389",
          "text": "Kkkkkkkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-21T03:58:29.480713",
          "text": "Conversando com a Dani"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-21T03:58:16.075902",
          "text": "Tô só deitada msm"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-21T03:58:08.871688",
          "text": "Tô nada"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-21T03:57:58.773662",
          "text": "Assistindo eu a patroa e as crianca?"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-21T03:57:50.564963",
          "text": "Tá fazendo o que por aí?"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-21T03:53:55.297261",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-21T03:57:36.164525"
            }
          ],
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-21T03:52:01.565423",
          "text": "Tbm não gosto"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-21T03:51:57.437659",
          "text": "Já que você confessou, vou confessar também"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-21T03:49:34.742024",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-21T03:49:15.272814",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-21T03:48:41.896416",
          "text": "E julgue"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-21T03:48:38.402161",
          "text": "Testa o mobile então"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-21T03:47:25.712484",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-21T03:48:14.737820"
            }
          ],
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-21T03:47:23.423105",
          "text": "E tem o mobile"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-21T03:47:04.617460",
          "text": "O warzone é só pra pc"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-21T03:46:44.741642",
          "text": "Mas você viu o vídeo de qual?"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-21T03:44:48.898300",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-21T03:44:40.812155",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-21T03:46:34.085659"
            }
          ],
          "voice_media": "Media unavailable."
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-21T03:44:24.363301",
          "text": "Kkkkkkkkkkkkk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-21T03:44:11.593863",
          "text": "Você seria uma ótima rushadora nesse jogo"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-21T03:42:10.148440",
          "text": "Gente"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-21T03:42:05.817977",
          "text": "Kkkkkkkkkk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-21T03:41:57.164480",
          "text": "Pior que tem uns 20 que joga esse jogo"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-21T03:41:42.964974",
          "text": "Zoa"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-21T03:41:36.077059",
          "text": "Contg"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-21T03:41:34.790385",
          "text": "Mas n quer jogar"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-21T03:41:25.958225",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-21T03:41:32.078418"
            }
          ],
          "text": "Diz q é amg"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-21T03:41:18.519352",
          "text": "Esses seus amigos"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-21T03:41:05.613920",
          "text": "Kkkkkkkkkkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-21T03:41:00.874572",
          "text": "Mas"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-21T03:40:58.239226",
          "text": "Se eu soubesse jogar até tentaria"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-21T03:40:54.448905",
          "text": "😢"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-21T03:40:45.025763",
          "text": "Oh gente"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-21T03:40:40.009736",
          "text": "Joguei umas sozinho e sai"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-21T03:40:34.500309",
          "text": "To nada, tinha ninguém pra jogar comigo"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-21T03:40:21.222406",
          "text": "É kkkkkkkkk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-21T03:40:20.290741",
          "text": "Perdeu o fio"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-21T03:40:14.545511",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-21T03:40:17.994557"
            }
          ],
          "text": "Mas não viu o meio"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-21T03:40:10.786372",
          "text": "Aí cê assistiu o começo e o fim da trilogia"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-21T03:36:09.516901",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-21T03:40:24.849823"
            }
          ],
          "voice_media": "Media unavailable."
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-21T03:34:33.886914",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-21T03:33:42.714913",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-21T03:39:56.691462"
            }
          ],
          "voice_media": "Media unavailable."
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-21T03:33:10.019424",
          "text": "Ainda n"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-21T03:32:39.386443",
          "text": "E ocê?"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-21T03:31:58.598464",
          "text": "Não"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-21T03:29:25.138639",
          "text": "Tá com sono?"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-21T03:28:54.005158",
          "text": "Bão dms"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-21T03:28:35.129226",
          "text": "Não, trabalho de casa amanhã"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-21T03:26:17.384362",
          "text": "Vai trabalhar presencial amanhã?"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-21T03:23:05.476308",
          "text": "To aqui pra te ouvir se quiser falar"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-21T03:22:10.215861",
          "text": "Já vai dormir né?"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-21T03:18:49.876093",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-21T03:22:14.343679"
            }
          ],
          "text": "Eu entendi tudo"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-21T03:18:00.896460",
          "text": "Descansa, trabalhou muito hoje hehe"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-21T03:17:41.383722",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-21T03:20:01.321238"
            }
          ],
          "text": "Relaxou, você é brilhante!"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-21T03:10:19.813294",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-21T03:17:24.182860"
            }
          ],
          "text": "Quero conquistar minhas coisas, ajudar quem eu puder, ter uma vida estável e uma família legal, esse negócio das pessoas me verem como líder eu n curto mt, em alguns momentos a vida vai exigir isso n tem jeito, mas gostar eu n gosto só q as vezes a gnt nem escolhe simplesmente te cobram e já era, tipo meu pai hj"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-21T03:04:18.135675",
          "text": "Mas eu n gosto de lideranças n, sei q é necessário, mas n me sinto bem sabe"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-21T03:03:46.639012",
          "text": "Obrigada, sua mente é linda também, sério ❤️"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-21T03:02:58.495513",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-21T03:03:02.267956"
            }
          ],
          "text": "Seja a líder deles"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-21T03:02:36.008487",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-21T03:03:50.133186"
            }
          ],
          "text": "E tem muita gente burra aí, precisa ser delicada não"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-21T03:02:24.956366",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-21T03:02:49.211034"
            }
          ],
          "text": "Chata não, consciente, inteligente... eu gosto de gente que lidera"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-21T03:01:20.759765",
          "text": "É vdd"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-21T03:00:54.765009",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-21T03:01:06.555841"
            }
          ],
          "text": "Todas as merdas que estão acontecendo acontecem por falta de educação"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-21T03:00:51.195459",
          "text": "no*"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-21T03:00:42.755525",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-21T03:00:58.633235"
            }
          ],
          "text": "Humildade acima de tudo, tentei ajudar, mas sempre me colocando na mesmo lugar q a pessoa"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-21T03:00:39.458701",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-21T03:00:59.344573"
            }
          ],
          "text": "Se parar pra pensar, a educação move tudo, é a causa de tudo... uma pessoa rouba por falta de educação, a gente não tem saúde que preste por causa da educação, segurança etc etc"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-21T02:59:45.394795",
          "text": "Exatamente, por isso quem eu sou para julgar"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-21T02:58:45.073089",
          "text": "Todas as questões que você tentou levantar lá, são consequência da educação que uma pessoa teve durante a vida... racismo, agressão, feminismo"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-21T02:57:23.772075",
          "text": "Verdade, disse tudo"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-21T02:57:10.751025",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-21T02:57:14.601320"
            }
          ],
          "text": "Opiniões fracas sem fundamento todo mundo tem"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-21T02:56:55.689856",
          "text": "E também acho que, pra falar sobre alguma coisa, deve-se estudar sobre por 1 ano ou mais, ou não vai passar de uma opinião fraca"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-21T02:56:20.022728",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-21T02:56:25.184496"
            }
          ],
          "text": "Eu acho que pra liderar tem que ter disposição, e uma boa intenção"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-21T02:55:55.775101",
          "text": "Q lindo kk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-21T02:55:43.521566",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-21T02:55:49.124747"
            }
          ],
          "text": "Você como professora vai ser uma diferença enorme"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-21T02:55:04.370387",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-21T02:55:37.714211"
            }
          ],
          "text": "Você me disse que queria dar aula um dia, mas para crianças, porque você ama crianças, e eu te falei a experiência que tive dando aula para pessoas mais velhas, poluídas, com opiniões vagas sobre as coisas, você vai ter essa oportunidade, de fazer uma pessoa estudar sobre uma coisa antes de sair cuspindo besteira pra todos os cantos"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-21T02:52:10.555145",
          "text": "Eu n sou"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-21T02:52:07.532191",
          "text": "Você deve estar me achando uma chata kk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-21T02:51:14.150008",
          "text": "Td"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-21T02:51:13.892576",
          "text": "Feminismo"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-21T02:51:13.554850",
          "text": "Feminino"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-21T02:50:59.115965",
          "text": "Como racismo"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-21T02:50:51.433019",
          "text": "Cada questão colocada"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-21T02:50:43.598692",
          "text": "Tem q saber a fundo"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-21T02:50:36.640234",
          "text": "Pra liderar"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-21T02:50:33.249358",
          "text": "Mas"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-21T02:50:30.593343",
          "text": "Até aí TD bem"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-21T02:50:26.092461",
          "text": "Todos nós podemos expor idéias"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-21T02:49:57.049230",
          "text": "Nem meu pai"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-21T02:49:54.061679",
          "text": "Sendo bem sincera"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-21T02:49:50.660043",
          "text": "Ngm é"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-21T02:49:45.744353",
          "text": "Mas ali"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-21T02:49:41.132778",
          "text": "Pq eu n sou preparada pra isso"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-21T02:49:31.868161",
          "text": "Disso"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-21T02:49:28.964463",
          "text": "Eu n gosto"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-21T02:49:18.163953",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-21T02:49:25.407164"
            }
          ],
          "text": "Porque seu pai te odiaria? Você pegou a linha de frente e liderou o debate"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-21T02:49:05.821304",
          "text": "Oxiii, relaxa... até agora não falou uma palavra errada"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-21T02:46:51.788649",
          "text": "Nossa mano, me perdoa, eu n sou chata eu juro"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-21T02:46:24.986604",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-21T02:47:46.533152"
            }
          ],
          "text": "Como existem pessoas q precisam de ajuda (informação)"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-21T02:46:00.140802",
          "text": "Política pra mim é algo q acontece de 4 em 4 anos, aí eu fiquei assustada, n menosprezando ele, pq todos nós somos iguais e talvez ele n tenha tido oportunidade de aprender sobre, tanto q eu tentei ajudar só q eu fico pensando, caramba"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-21T02:43:59.732818",
          "text": "Um menino falou bem assim"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-21T02:40:58.468408",
          "text": "Sei só o básico"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-21T02:40:46.041375",
          "text": "N sou boa, juro"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-21T02:40:22.759316",
          "text": "Meu pai deve me odiar"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-21T02:40:22.437437",
          "text": "Praticamente me colocou p conduzir a reunião"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-21T02:40:22.133162",
          "text": "Pq meu pai"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-21T02:40:21.794829",
          "text": "Mas dessa vez n tinha como"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-21T02:40:21.510236",
          "text": "Eu sempre prefiro ficar neutra em debates"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-21T02:40:21.233690",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-21T02:47:28.091941"
            }
          ],
          "text": "Só achei paia alguns comentários como esse aí da agressão contra mulher"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-21T02:40:20.962989",
          "text": "Coisas básicas, e tá tudo bem"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-21T02:40:20.641542",
          "text": "Do cidadão"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-21T02:40:20.332828",
          "text": "Eai tive q voltar do começo, explicar qual é o papel da política"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-21T02:40:20.039656",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-21T02:47:36.398350"
            }
          ],
          "text": "N precisava pensar mt"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-21T02:40:19.769886",
          "text": "Coisas básicas"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-21T02:40:19.482994",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-21T02:47:31.071484"
            }
          ],
          "text": "Que cada Bandeira levantada é importante, que agressão contra mulher é algo q tá aí TD dia"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-21T02:40:18.948355",
          "text": "Eles n tem muita noção do que política e tá tudo bem, nem todo mundo tem, mas aí teve uns comentários meio como posso dizer, leigos mesmo, como \" a galera quer dar muito atenção ao lgbt, agressão a mulher e esquece de coisas mais importantes\" kkkkkkk aí eu tentei explicar falando q não é assim"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-21T02:33:19.354181",
          "text": "Manda áudio falando oq rolou :)"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-21T02:33:07.909545",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-21T02:40:36.900279"
            }
          ],
          "text": "Você é boa em política"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-21T02:32:05.232537",
          "text": "O que a galera não tava entendendo?"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-21T02:32:00.091656",
          "text": "Mas não, não entendi, que que rolou na real?"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-21T02:31:40.603957",
          "text": "Focadissima"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-21T02:31:34.638483",
          "text": "Meu pai quer colocar essa bomba na minha mão"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-21T02:31:10.873919",
          "text": "Mas é complicado kk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-21T02:30:54.145992",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-21T02:31:27.538536"
            }
          ],
          "text": "N tenho nenhum problema em passar pra frente algo, eu gosto"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-21T02:30:23.986405",
          "text": "Eu tentei ajudar"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-21T02:30:18.340619",
          "text": "Enfim"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-21T02:30:15.460889",
          "text": "Qualquer um pode chegar e enganar eles"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-21T02:30:01.630939",
          "text": "Eu fico triste de vdd"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-21T02:29:35.419426",
          "text": "As vezes parece q nem meu pai entende bem"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-21T02:29:16.933302",
          "text": "Sobre política"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-21T02:29:14.093078",
          "text": "A galera n sabe os conceitos mais simples"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-21T02:29:02.880533",
          "text": "Eu fiquei triste"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-21T02:28:58.275739",
          "text": "É mano, jovens e adolescentes"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-21T02:28:50.706116",
          "text": "Com adolescentes?"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-21T02:28:45.403395",
          "text": "Mas tava rolando tipo um debate lá?"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-21T02:28:37.563811",
          "text": "Hahahahahah"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-21T02:28:13.636733",
          "text": "Estudei o dia inteiro quando é pra eu descansar de noite, meu pai me estressa kk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-21T02:27:52.379423",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-21T02:28:29.964300"
            }
          ],
          "text": "Graças a Deus"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-21T02:27:49.376079",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-21T02:28:28.165280"
            }
          ],
          "text": "Mas acabou"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-21T02:27:30.132114",
          "text": "Meu pai só me complica, tenho tempo pra isso n"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-21T02:27:13.774862",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-21T02:28:25.935332"
            }
          ],
          "text": "Querem q eu administre uma pág no Instagram"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-21T02:26:56.426569",
          "text": "Enfim"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-21T02:26:47.335897",
          "text": "Oh vei"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-21T02:26:37.659736",
          "text": "Eu fico de cara com a mente de alguns adolescentes"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-21T02:26:11.503431",
          "text": "Foi"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-21T02:26:08.490661",
          "text": "Sim"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-21T02:26:00.154183",
          "text": "Reunião geralmente demora mesmo, seja de qualquer coisa"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-21T02:25:27.596939",
          "text": "Tá demorando porque cada um quer colocar seu ponto de vista né?"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-21T02:04:16.939945",
          "text": "E ainda n acabou"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-21T02:04:12.624191",
          "text": "2 horas de reunião"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-21T02:02:58.136345",
          "text": "Ainda está tendo"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-21T02:02:54.232521",
          "text": "Mas a reunião n acaba nunca"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-21T02:02:47.733013",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-21T02:24:13.062549"
            }
          ],
          "text": "Eu gostei até"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-21T02:02:11.836222",
          "text": "Meu pai me colocou pra falar do nada"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-21T02:02:03.031293",
          "text": "Mano é uma reunião do meu pai, política"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-21T02:01:49.689545",
          "text": "Oh obrigada pelo incentivo"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-21T01:58:30.191162",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-21T02:01:41.517121"
            }
          ],
          "text": "Reunião de que?"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-21T01:58:19.504260",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-21T02:01:39.400928"
            }
          ],
          "text": "O problema de ser grande, é que as responsabilidades também aumentam"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-21T01:57:29.683389",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-21T02:01:38.742270"
            }
          ],
          "text": "Quem mandou ser importante?"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-21T01:46:05.426395",
          "text": "😭"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-21T01:43:03.603403",
          "text": "Tô em uma reunião até agr, socorro 🤦🏾‍♀️"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-21T00:03:54.990798",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-21T00:26:04.066822"
            }
          ],
          "text": "Obrigada meu bem, você q é"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-21T00:02:22.279279",
          "story_share": "Shared deborabasili0's story",
          "text": "Linda!"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-20T02:31:02.692807",
          "text": "Hmmm, tá com a cara boa"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-20T01:53:15.042220",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-20T01:57:06.106109"
            }
          ],
          "text": "Kkkk q nada, ela é de boa"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-20T01:50:13.024506",
          "text": "Brigado"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-20T01:50:10.674949",
          "text": "Você me protegeu"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-20T01:50:08.025119",
          "text": "Ia levar um soco na boca se ela ouvisse"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-20T01:44:17.785970",
          "text": "Nem ouviu"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-20T01:44:12.761025",
          "text": "Ela n tá no quarto"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-20T01:44:06.597663",
          "text": "Ficou n kk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-20T01:41:19.155645",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-20T01:43:56.493003"
            }
          ],
          "text": "Eu sei q ela é fortíssima"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-20T01:41:14.174939",
          "text": "To brincando"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-20T01:41:10.687139",
          "text": "Ela ficou bolada?"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-20T01:36:40.198575",
          "text": "Foi ruim n po kkkkkkkk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-20T01:33:02.663439",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-20T01:27:32.464209",
          "text": "Kkkk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-20T01:27:05.203200",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-20T01:23:17.308499",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-20T01:22:01.472440",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-20T01:20:31.427423",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-20T01:22:21.953066"
            }
          ],
          "voice_media": "Media unavailable."
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-20T01:12:20.438524",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-20T01:11:23.323522",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-20T01:10:59.314372",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-20T01:07:36.263312",
          "text": "Eu não sei o que é..."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-20T01:07:14.407619",
          "text": "Se trabalhar o dia inteiro/estudar e a noite ir pra academia não é ser fitness"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-20T01:06:55.821673",
          "text": "Uhum"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-20T01:05:26.118428",
          "text": "Tento as vzs"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-20T01:05:21.235105",
          "text": "Eu n sou nada fit kk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-20T01:04:51.223842",
          "text": "Parabéns"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-20T01:04:49.454488",
          "text": "Você tá muito fitness"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-20T01:03:10.284908",
          "text": "Simm kk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-20T01:01:37.214910",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-20T00:51:38.709003",
          "text": "Ksksk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-20T00:51:18.710811",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-20T01:02:04.044184"
            }
          ],
          "text": "Osh, é gostosin"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-20T00:51:08.541056",
          "text": "É tipo uma massa de crepe, mas n sei se é igual, acho q n kkk, eu coloquei alface, pepino, cebola e frango desfiado"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-20T00:50:04.919329",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-20T00:29:25.510314",
          "text": "Uhummm kk Zzz"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-20T00:28:21.733902",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-20T00:29:18.840474"
            }
          ],
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-20T00:25:11.161208",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-20T00:12:45.834379",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-20T00:10:25.246776",
          "text": "Tbm gosto de cachorros grandes, labrador é lindo, quando eu morava em casa eu tinha dois cachorros"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-20T00:05:13.110967",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-20T00:08:09.858637"
            }
          ],
          "text": "Vou olhar depois esses"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-20T00:01:23.738505",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-20T00:00:45.552828",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-19T23:59:57.096309",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-19T23:55:32.666459",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-19T23:55:00.513312",
          "text": "Hmmmmm"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-19T23:54:27.799892",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-19T23:54:16.435703",
          "text": "Awn, lindo"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-19T23:53:56.731262",
          "media": "https://scontent-atl3-2.cdninstagram.com/v/t51.2885-15/e35/108887447_969513510160797_1696605211543146925_n.jpg?_nc_ht=scontent-atl3-2.cdninstagram.com&_nc_cat=109&_nc_ohc=slm-HJQnxXwAX9AfAny&tp=18&oh=1029ba2db73ae0096acd43bec363e014&oe=5FCBF203&ig_cache_key=MjM1NzA1NDY5MDIyNjQzNDU3NQ%3D%3D.2"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-19T23:53:53.688838",
          "media": "https://scontent-atl3-2.cdninstagram.com/v/t51.2885-15/e35/115821130_658830441404529_4946196131893423976_n.jpg?_nc_ht=scontent-atl3-2.cdninstagram.com&_nc_cat=109&_nc_ohc=Gzmk_ZQdGoAAX8Ow7jl&tp=18&oh=0ccc77ecd25dcfa571f5ce95aeac0a92&oe=5FCB2022&ig_cache_key=MjM1NzA1NDY2NDU2NTY3NTU3Ng%3D%3D.2"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-19T23:53:38.478573",
          "text": "Cadê"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-19T23:53:07.998438",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-19T23:35:52.128511",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-19T23:34:56.577064",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-19T23:16:27.270860",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-19T23:34:56.896211"
            }
          ],
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-19T23:15:59.382819",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-19T23:34:20.172826"
            }
          ],
          "media": "https://scontent-atl3-2.cdninstagram.com/v/t51.2885-15/e35/109220471_278415233419888_5274098435688659366_n.jpg?_nc_ht=scontent-atl3-2.cdninstagram.com&_nc_cat=104&_nc_ohc=Vq4al27d7T4AX_e7nxJ&tp=18&oh=fe9ac8af8712c788aa5489f0c86b0aa4&oe=5FCE2BFE&ig_cache_key=MjM1NzAzNTU4NjIwMzUxNjA0NA%3D%3D.2"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-19T23:12:13.744655",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-19T23:34:29.524114"
            }
          ],
          "voice_media": "Media unavailable."
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-19T23:07:52.538414",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-19T22:46:08.565811",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-19T23:07:27.937965"
            }
          ],
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-19T22:44:51.362433",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-19T23:07:22.391105"
            }
          ],
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-19T22:44:22.755729",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-19T23:06:55.745774"
            }
          ],
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-19T22:44:06.105970",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-19T22:31:21.896458",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-19T22:30:12.146642",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-19T22:48:02.098190"
            }
          ],
          "voice_media": "Media unavailable."
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-19T22:29:14.393542",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-19T22:47:59.266749"
            }
          ],
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-19T22:22:41.465119",
          "text": "Que que cê fez hoje?"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-19T22:19:39.849966",
          "text": "Macarrão bão dms"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-19T22:19:19.299276",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-19T22:22:46.576029"
            }
          ],
          "text": "Eu fiz bife acebolado mt bomm"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-19T22:15:26.362649",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-19T22:18:57.122493"
            }
          ],
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-19T22:14:31.519785",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-19T22:18:50.502046"
            }
          ],
          "voice_media": "Media unavailable."
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-19T22:14:04.694511",
          "text": "Nem joguei nada"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-19T22:13:36.124318",
          "text": "O mesmo de ontem ksksk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-19T22:12:52.439028",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-19T22:12:40.861158",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-19T22:13:14.810305"
            }
          ],
          "voice_media": "Media unavailable."
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-19T22:00:07.845550",
          "text": "Rinaldin, e esse domingo? Vamos matar ele q tédio kkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-19T07:38:47.826714",
          "text": "Beijo"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-19T07:38:43.637254",
          "text": "Tá bom, boa madrugada kk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-19T07:38:23.765573",
          "text": "Beijo"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-19T07:38:22.012164",
          "text": "Manda mensagem depois"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-19T07:38:15.479970",
          "text": "Boa madrugada"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-19T07:37:47.236915",
          "text": "Kk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-19T07:37:45.932237",
          "text": "Tá bomm, eu também vou"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-19T07:37:28.917442",
          "text": "Vou fechar o olho agora"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-19T07:37:23.943683",
          "text": "Galera desistiu de jogar"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-19T07:36:50.784158",
          "text": "Graveto**"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-19T07:36:18.651104",
          "text": "Bão msm"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-19T07:36:11.856596",
          "text": "Né nada kkkk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-19T07:35:21.326464",
          "text": "Bão demaaaais"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-19T07:35:07.547732",
          "text": "Estranho - Marília Mendonça"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-19T07:34:54.240967",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-19T07:36:05.535321"
            }
          ],
          "text": "Se quiser ficar nem é sofrencia não né?"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-19T07:33:40.012241",
          "text": "Kkkkkkkkkkkkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-19T07:33:37.104863",
          "text": "Tu gosta é da sofrência msm"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-19T07:32:21.869369",
          "text": "Nem doeu - Matheus e Kauan"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-19T07:32:09.806704",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-19T07:32:16.490457"
            }
          ],
          "text": "Tira onda"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-19T07:31:52.323880",
          "text": "Kkkkkkkkkkkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-19T07:30:23.519893",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-19T07:31:51.539660"
            }
          ],
          "text": "Bão dms"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-19T07:30:07.960959",
          "text": "Kk é"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-19T07:28:51.640515",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-19T07:30:00.709707"
            }
          ],
          "text": "Mas tu tá escutando os mais calminhos"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-19T07:28:33.543239",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-19T07:28:37.746664"
            }
          ],
          "text": "Volta por baixo do Henrique e Juliano"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-19T07:28:29.206263",
          "text": "Sei qual é kk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-19T07:28:17.709569",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-19T07:28:38.546677"
            }
          ],
          "text": "Eu to escutando muito essa litrão do Matheus e Kauan"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-19T07:28:12.379240",
          "text": "Simm"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-19T07:27:48.772715",
          "text": "Ta viciada nela?"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-19T07:27:26.487299",
          "text": "Já escutei ela umas 5 vzs hj"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-19T07:24:17.813058",
          "text": "Muito boa"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-19T07:23:36.091686",
          "text": "Gostei"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-19T07:23:32.123789",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-19T07:24:10.884307"
            }
          ],
          "text": "Confesso que essa do Matheus e Kauan nunca tinha escutado"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-19T07:21:45.719239",
          "text": "Minha preferida"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-19T07:21:28.512560",
          "text": "Boa"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-19T07:21:17.854948",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-19T07:21:41.882115"
            }
          ],
          "text": "A mais famosa deles é a oceans"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-19T07:21:06.025554",
          "text": "Hillsong United?"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-19T07:20:57.513190",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-19T07:22:01.327738"
            }
          ],
          "text": "São essas mesmo que eu quero"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-19T07:18:18.928806",
          "text": "tô falando as q eu tô escutando hj kk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-19T07:17:55.715042",
          "text": "Se quiser ficar - Matheus e Kauan"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-19T07:17:38.274302",
          "text": "Hillsong vou escutar aqui"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-19T07:17:26.163069",
          "text": "São muito boas sim"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-19T07:17:20.336735",
          "text": "Já escutei as duas primeiras"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-19T07:14:26.691746",
          "text": "Gosto das músicas da Hillsong"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-19T07:13:48.761130",
          "text": "Hillsong é gospel"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-19T07:13:36.799952",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-19T07:17:14.797503"
            }
          ],
          "text": "Paris do poesia acústica"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-19T07:13:23.064848",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-19T07:17:07.915797"
            }
          ],
          "text": "Se essa vida fosse um filme - Giulia be (acho q essa vc nem vai gostar n) kk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-19T07:10:39.570518",
          "text": "Hmm, perai"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-19T07:10:22.362141",
          "text": "Me indica umas músicas aí"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-19T07:10:04.879703",
          "text": "Emicida"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-19T07:07:37.271766",
          "text": "Simm"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-19T07:07:26.494026",
          "text": "Lourena*"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-19T07:07:19.077555",
          "text": "Lauren’s"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-19T07:07:16.201377",
          "text": "Cynthia luz"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-19T07:07:12.803483",
          "text": "Uhumm"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-19T07:06:59.296570",
          "text": "Djonga manda bem também"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-19T07:06:39.203945",
          "text": "Uhum"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-19T07:06:38.944854",
          "text": "Djonga"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-19T07:06:22.445326",
          "text": "Tá pesada kk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-19T07:06:16.032366",
          "text": "A última q eles fizeram agr"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-19T07:06:04.896422",
          "text": "Ele manda muito"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-19T07:06:00.063009",
          "text": "Sério?"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-19T07:05:52.677815",
          "text": "Nem sei se ele é"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-19T07:05:40.844567",
          "text": "Sim, L7NNON"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-19T07:05:16.712544",
          "text": "Escuta alguém separado do poesia acústica?"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-19T07:04:56.693902",
          "text": "Mas antigamente escutava muito rap"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-19T07:04:46.291983",
          "text": "Hoje escuto mais coisa"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-19T07:03:14.414355",
          "text": "Boa"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-19T07:03:08.208291",
          "text": "Gosto de tudo"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-19T07:02:20.329490",
          "text": "Agr funk eu gosto kkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-19T07:02:01.914485",
          "text": "N gosto muito de eletrônica"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-19T07:01:52.954711",
          "text": "Kkkkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-19T07:01:40.312559",
          "text": "Msm*"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-19T07:01:38.566356",
          "text": "Eletrônica msm mmk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-19T07:00:48.666760",
          "text": "E eletrônica"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-19T07:00:45.546730",
          "text": "Vito curte funk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-19T07:00:35.371699",
          "text": "Kkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-19T07:00:33.798598",
          "text": "Mais"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-19T07:00:31.167644",
          "text": "Tem majs"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-19T07:00:19.285371",
          "text": "Mv bill"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-19T07:00:14.591986",
          "text": "L7NNON, Filipe ret, projota"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-19T07:00:06.026275",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-19T07:00:20.276718"
            }
          ],
          "text": "No carro"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-19T07:00:01.784291",
          "text": "Kkkkkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-19T07:00:00.383202",
          "text": "Racionais"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-19T06:59:57.777556",
          "text": "Estávamos cantando"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-19T06:59:53.981529",
          "text": "Eu e o Vitor Hugo aquele dia"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-19T06:59:33.351519",
          "text": "Boua"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-19T06:59:24.544887",
          "text": "Kkkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-19T06:59:23.273308",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-19T06:59:27.824319"
            }
          ],
          "text": "Racionais"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-19T06:59:17.821711",
          "text": "Raiz"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-19T06:59:07.703870",
          "text": "Hmm"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-19T06:59:02.731829",
          "text": "Quem mais do rap?"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-19T06:58:52.072108",
          "text": "Q vc disse kk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-19T06:58:47.347073",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-19T06:58:52.820911"
            }
          ],
          "text": "Você tem um ótimo gosto musical"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-19T06:58:46.070075",
          "text": "N conheço nenhum desses"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-19T06:58:41.062267",
          "text": "Parabéns"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-19T06:58:28.677111",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-19T06:58:39.360635"
            }
          ],
          "text": "Blues, jazz, soul"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-19T06:58:28.367489",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-19T06:58:32.785088"
            }
          ],
          "text": "Froid, poesia acústica"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-19T06:58:15.027278",
          "text": "Rap?"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-19T06:58:11.281222",
          "text": "Pagodezin é bão einnn"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-19T06:58:00.143105",
          "text": "Pode falar"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-19T06:57:59.499471",
          "text": "Massa"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-19T06:57:54.702595",
          "text": "?"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-19T06:57:53.104110",
          "text": "Que mais? Só sertanejo!"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-19T06:57:52.694823",
          "text": "Gospel"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-19T06:57:49.042508",
          "text": "Eu gosto de pagode tb"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-19T06:57:42.126481",
          "text": "Kkkkk tem mais ctz"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-19T06:57:30.354177",
          "text": "Boa 2"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-19T06:57:19.666468",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-19T06:57:23.567359"
            }
          ],
          "text": "Henrique e Juliano"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-19T06:57:12.735631",
          "text": "Kkk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-19T06:57:10.014195",
          "text": "Boa"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-19T06:57:03.218568",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-19T06:57:08.103431"
            }
          ],
          "text": "Zé Neto e Cristiano"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-19T06:56:51.447998",
          "text": "Que mais?"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-19T06:56:47.120111",
          "text": "Marília Mendonça, Jorge e Matheus, Matheus e Kauan, Gustavo muito"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-19T06:56:35.897369",
          "text": "Tbm gosto mt"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-19T06:56:05.245933",
          "text": "Minha playlist tem tudo"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-19T06:55:57.949554",
          "text": "Eu ouço direto essss caras"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-19T06:55:43.232639",
          "text": "Tá no aleatório"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-19T06:55:14.258642",
          "text": "Antiga"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-19T06:55:06.573184",
          "text": "KKKKK"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-19T06:55:04.433767",
          "text": "Meu oxigênio"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-19T06:55:00.246859",
          "text": "Agr"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-19T06:54:37.598453",
          "text": "Qual música?"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-19T06:54:25.408696",
          "text": "Sertanejin"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-19T06:54:15.004184",
          "text": "Bãozin demais"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-19T06:53:33.115622",
          "text": "Você*"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-19T06:53:29.783404",
          "text": "Como diz vx"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-19T06:53:26.481292",
          "text": "bão"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-19T06:53:08.737053",
          "text": "Matheus e Kauan é bom demaisss"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-19T06:52:52.184612",
          "text": "Sono n chega"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-19T06:52:27.992211",
          "text": "Tô ouvindo música essa hr"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-19T06:51:23.429452",
          "text": "Peguei po"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-19T06:51:06.949861",
          "text": "Kskksksksks"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-19T06:49:28.828120",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-19T06:51:02.481266"
            }
          ],
          "text": "*enviando sono*"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-19T06:49:09.530488",
          "text": "Pega"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-19T06:49:07.202262",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-19T06:51:21.018843"
            }
          ],
          "text": "Quem disse?"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-19T06:47:25.568757",
          "text": "Dormiu"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-19T06:41:20.951198",
          "text": "Meu sono tá td errado"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-19T06:41:00.703785",
          "text": "Isso é bom"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-19T06:40:56.873667",
          "text": "Dorme mais rápido"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-19T06:40:47.368688",
          "text": "Eu disse né"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-19T06:40:40.589367",
          "text": "Kkkk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-19T06:39:01.348718",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-19T06:40:37.308465"
            }
          ],
          "text": "Vou dormir jaja"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-19T06:38:55.141279",
          "text": "To zoando"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-19T06:38:49.725762",
          "text": "É claro que você tem mais energia que eu"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-19T06:37:58.200888",
          "text": "Agr eu n tenho n"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-19T06:37:46.118981",
          "text": "Aí sim"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-19T06:37:40.353812",
          "text": "Kkkkkkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-19T06:37:37.684998",
          "text": "Ihhhhhh"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-19T06:37:29.063694",
          "text": "Tenho energia pra correr 20km fácil"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-19T06:37:17.821845",
          "text": "To pilhado"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-19T06:37:13.546000",
          "text": "Nada"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-19T06:35:47.660606",
          "text": "Mas cheio de sono"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-19T06:35:17.551065",
          "text": "To aqui até agora"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-19T06:35:08.942979",
          "text": "Mentira"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-19T06:29:29.211132",
          "text": "Kk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-19T06:29:27.436706",
          "text": "Você sente sono mais rápido q eu"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-19T06:29:10.310739",
          "text": "Bem pouco"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-19T06:24:40.375639",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-19T06:29:03.961595"
            }
          ],
          "text": "Da pra ver daqui"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-19T06:24:37.608729",
          "text": "Soninho né"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-19T06:21:40.870333",
          "text": "Cansei"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-19T06:21:29.446800",
          "text": "Agr deitada, casei de assistir"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-19T06:20:56.303709",
          "text": "E você?"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-19T06:08:16.013062",
          "text": "E minha irmã vendo série"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-19T06:08:10.891445",
          "text": "Meu irmão tá jogando"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-19T06:08:03.475078",
          "text": "Ksksk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-19T06:08:01.838667",
          "text": "🤦🏾‍♀️"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-19T06:07:59.189450",
          "text": "Nenhum deles"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-19T06:03:50.739369",
          "text": "Seus irmãos já dormiram?"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-19T06:01:52.104382",
          "text": "Uhumm"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-19T06:01:16.730619",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-19T06:01:47.419532"
            }
          ],
          "text": "São inofensivos"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-19T06:01:10.118517",
          "text": "Sempre tem"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-19T06:01:07.184555",
          "text": "Ahh normal"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-19T05:58:53.630324",
          "text": "Ainda mais no sábado"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-19T05:58:41.122931",
          "text": "Direto tem umas brigas"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-19T05:58:36.143988",
          "text": "Dá kkkk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-19T05:58:30.697709",
          "text": "Por aqui da pra escutar tudo também"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-19T05:58:25.815211",
          "text": "Da pra ouvir muito o barulho da rua aí?"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-19T05:58:23.169844",
          "text": "Eu gosto mt tbm"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-19T05:58:01.878229",
          "text": "Ta congelando hoje"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-19T05:57:57.087789",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-19T05:58:11.515609"
            }
          ],
          "text": "Frio é bão né?"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-19T05:57:51.124534",
          "text": "E ainda tá frio kk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-19T05:57:27.935464",
          "text": "Tô embrulhada aqui com um edredom"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-19T05:57:02.184019",
          "text": "Amo"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-19T05:57:00.022653",
          "text": "Muito frio"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-19T05:56:01.599913",
          "text": "Tá muito frio por aí?"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-19T05:55:50.249382",
          "text": "Cê acredita?"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-19T05:55:17.374519",
          "text": "Tá jogando ?"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-19T05:54:23.294683",
          "text": "Pararam"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-19T05:54:20.797590",
          "text": "Acho q é um casal sla"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-19T05:53:51.457877",
          "text": "Qual a briga?"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-19T05:52:53.048752",
          "text": "Ou deixo aberta"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-19T05:52:46.654480",
          "text": "Agr n sei se eu fecho a Janela e faço barulho"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-19T05:52:21.428274",
          "text": "Fico é com medo kk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-19T05:52:14.178109",
          "text": "🤦🏾‍♀️"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-19T05:52:09.978458",
          "text": "Tem um povo brigando aqui embaixo"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-19T05:51:59.631280",
          "text": "Eu nem se eu fechar"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-19T05:51:14.932802",
          "text": "Mas se eu fechar o olho eu durmo"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-19T05:51:09.242391",
          "text": "To com muito sono também não"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-19T05:50:10.734503",
          "text": "Kkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-19T05:50:09.408554",
          "text": "E vc?"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-19T05:50:01.105906",
          "text": "Zero sono como sempre né"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-19T05:49:26.154259",
          "text": "Zero sono??"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-19T05:49:20.289355",
          "text": "Tá massa ai?"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-19T05:47:18.924048",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-19T05:49:35.002718"
            }
          ],
          "text": "Na magreza e na obesidade o nome do ep kk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-19T05:45:06.514129",
          "text": "Qual episódio?"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-19T05:44:59.426426",
          "text": "Seriado"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-19T05:44:53.696572",
          "text": "Essa série é muito boa"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-19T05:38:20.645079",
          "text": "Tô assistindo eu a patroa e as crianças c a minha prima Zzz"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-19T05:37:40.031593",
          "text": "Ksksksksk uma hr vai"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-19T05:37:26.521771",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-19T05:37:33.049771"
            }
          ],
          "text": "Sem muito sucesso"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-19T05:37:22.717276",
          "text": "Tamo tentanu"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-19T05:36:36.008874",
          "text": "Tá ganhando todas aí? Kkk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-19T05:35:30.805022",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-19T05:35:50.761799"
            }
          ],
          "text": "Tem razão"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-19T05:35:22.230866",
          "text": "Uhum"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-19T05:17:29.384630",
          "text": "É só jogar com moderação ksksks"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-19T05:17:20.778358",
          "text": "Sim, mas se você gosta n tem problema continuar jogando depois q a quarentena acabar"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-19T05:16:28.673296",
          "text": "Acabar quarentena não vou ter tempo"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-19T05:16:21.136369",
          "text": "Mas jaja essa onda passa"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-19T05:16:17.336946",
          "text": "É"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-19T05:14:54.056809",
          "text": "Achei massa"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-19T05:14:49.518169",
          "text": "Eu vi um pouco de um vídeo dele"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-19T05:14:17.958367",
          "text": "Ahhhh sim"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-19T05:14:07.574902",
          "text": "Mas tem o call of duty mobile"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-19T05:13:58.728666",
          "text": "Esse warzone é só no pc"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-19T05:10:07.682148",
          "text": "Vou olhar esse aí a q vc falou"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-19T05:09:55.784402",
          "text": "Tava até agr vendo o vídeo"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-19T05:09:50.421486",
          "text": "É, n tem como n?"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-19T05:08:29.656283",
          "text": "Vai baixar o que no celular?"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-19T05:08:23.812442",
          "text": "Assiste ele jogando"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-19T05:07:55.836355",
          "text": "Tem um mlq chamado ninext"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-19T05:07:02.293760",
          "text": "Um tal de Apollo"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-19T05:06:49.203743",
          "text": "Vou ver o nome aqui do cara"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-19T05:06:42.839469",
          "text": "Vou baixar no celular depois"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-19T05:06:36.490994",
          "text": "Você assistiu vídeo de quem?"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-19T05:06:22.003224",
          "text": "O jogo parece ser mt massa"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-19T05:06:15.979960",
          "text": "Ou"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-19T05:06:12.002568",
          "text": "Minha prima q fez"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-19T05:06:06.620378",
          "text": "MT bommm"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-19T05:05:57.109573",
          "text": "Ksksksk mando"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-19T05:05:54.349056",
          "text": "Na foto pareceu muito bom"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-19T05:05:47.050520",
          "text": "Manda um tikin pra mim"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-19T05:05:39.584576",
          "text": "Hahahaha"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-19T05:05:31.565603",
          "text": "Vou comer pavê msm"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-19T05:05:14.170341",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-19T05:05:35.883380"
            }
          ],
          "text": "N tava boa n"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-19T05:05:07.301553",
          "text": "Kkkkkkkkkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-19T05:05:04.475158",
          "text": "Não"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-19T05:05:00.214021",
          "text": "Comida dela tava boa?"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-19T05:04:48.341306",
          "text": "Comeu?"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-19T05:04:36.848830",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-19T05:05:21.299197"
            }
          ],
          "text": "Tem clima de vício"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-19T04:57:08.976052",
          "text": "Tem mó clima de suspense kkkkkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-19T04:55:54.897850",
          "text": "Osh, achei legal"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-19T04:55:47.134240",
          "text": "Eu vi os vídeos aqui"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-19T04:55:23.792466",
          "text": "Não é besteira nossa, é q gente discutiu aí ela fez janta e tava falando q eu n iria comer, mas é só brincadeira kk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-19T04:53:57.266049",
          "text": "kkkkkkkk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-19T04:35:22.297167",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-19T04:33:43.115915",
          "text": "Vou olhar"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-19T04:33:18.152272",
          "text": "Kkkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-19T04:33:16.819465",
          "text": "A comida dela"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-19T04:33:12.268490",
          "text": "Aí ela n queria deixar eu comer mano"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-19T04:33:06.452250",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-19T04:33:37.123504"
            }
          ],
          "voice_media": "Media unavailable."
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-19T04:33:00.450013",
          "text": "A gente brigou né"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-19T04:32:53.872242",
          "text": "Comida da Dani"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-19T04:32:47.253757",
          "text": "Eu vou jantar agora kk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-19T04:32:21.590570",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-19T04:32:19.396568",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-19T04:32:35.694505"
            }
          ],
          "voice_media": "Media unavailable."
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-19T04:31:54.703974",
          "text": "Kkkkkkkkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-19T04:31:51.734288",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-19T04:31:57.214530"
            }
          ],
          "text": "Jogarr"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-19T04:31:35.227992",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-19T04:31:30.047590",
          "text": "Kkkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-19T04:31:27.865068",
          "text": "Dormir"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-19T04:31:11.174780",
          "text": "Ou jogar"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-19T04:31:08.549792",
          "text": "Comer"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-19T04:30:46.839400",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-19T04:30:35.757161",
          "text": "Tá bommm"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-19T04:29:15.208463",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-19T04:25:40.371441",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-19T04:21:58.398551",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-19T04:21:28.916936",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-19T04:21:21.518242",
          "text": "Kkkkkkkkkk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-19T04:21:10.802630",
          "text": "Boa!"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-19T04:17:45.132394",
          "text": "Joguei fora"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-19T04:17:40.364345",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-19T04:21:07.341386"
            }
          ],
          "text": "Tava virando bagunça"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-19T04:17:33.544867",
          "text": "Só pra eles n beberem mesmo ksksksksk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-19T04:17:09.699500",
          "text": "Voltou ainda n"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-19T04:16:55.663192",
          "text": "Ou sua mãe já voltou?"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-19T04:16:52.123529",
          "text": "Deu merda?"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-19T04:16:49.603225",
          "text": "Porque?"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-19T04:13:02.331497",
          "text": "Ficaram bravos cmg"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-19T04:12:52.512905",
          "text": "Acredita?"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-19T04:12:48.719938",
          "text": "Eu joguei fora"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-19T04:12:43.669383",
          "text": "Ninguém bebeu hj"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-19T04:12:37.316900",
          "text": "Kkkkkkkkk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-19T04:06:24.059216",
          "story_share": "Shared deborabasili0's story",
          "text": "Essa batida com leite condensado é da boa ein"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-18T02:16:08.170773",
          "text": "Débora21002Q"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-18T02:14:20.679090",
          "text": "Qual seu nome lá"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-18T02:04:29.747547",
          "text": "Tá bom"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-18T02:04:28.397944",
          "text": "Ebaaa"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-18T02:03:58.919028",
          "text": "To instalando"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-18T02:03:23.508006",
          "text": "Por mim pode ser, mas se vc quiser jogar outra coisa é de boa tb"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-18T02:02:59.440475",
          "text": "Free fire?"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-18T02:02:53.579850",
          "text": "Quer jogar o que?"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-18T01:58:21.314074",
          "text": "Quando puder jogar fala, n quero te incomodar kskk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-18T01:56:50.559522",
          "text": "Tô bemm"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-18T01:54:47.530569",
          "text": "E você?"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-18T01:54:45.486928",
          "text": "To bem"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-18T01:54:44.045276",
          "text": "Relaxou"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-18T01:49:21.566119",
          "text": "Tive q fazer uns negócios"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-18T01:49:04.867199",
          "text": "Foi mal n ter chamado antes kk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-18T01:48:56.180086",
          "text": "Tá bem?"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-18T01:47:50.516417",
          "text": "Oii"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-18T01:30:51.408487",
          "text": "Oii"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-17T04:35:42.026529",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-17T05:07:21.824784"
            }
          ],
          "text": "Até amanhã"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-17T04:35:24.461163",
          "text": "Boa noite, dorme bem"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-17T04:34:23.151694",
          "text": "To por aqui ainda 😁"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-17T04:17:25.458634",
          "text": "Até amanhã"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-17T04:17:20.386962",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-17T04:34:25.304752"
            }
          ],
          "text": "Boa noite, dorme bem"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-17T04:17:03.913554",
          "text": "Já deve ter ido dormir kk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-17T04:14:54.769244",
          "text": "Se formou bem cedo"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-17T04:14:39.781907",
          "text": "Que top"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-17T04:13:59.996442",
          "text": "É verdade"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-17T04:05:18.472197",
          "text": "Tem ponto positivo e negativo nos dois jeitos de ensino"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-17T04:04:18.950381",
          "text": "Mas se eu fizesse ead eu ia poupar tanto tempo/dinheiro"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-17T04:03:04.754875",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-17T04:14:07.860315"
            }
          ],
          "text": "E penso em fazer uma especialização de 1 ano"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-17T04:02:53.388061",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-17T04:14:04.113977"
            }
          ],
          "text": "Me formei"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-17T03:51:24.658606",
          "text": "Ou faz facul"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-17T03:51:12.534011",
          "text": "Você já se formou?"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-17T03:50:52.301381",
          "text": "Mas vai ser o jeito"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-17T03:50:47.298011",
          "text": "Mas fico nervosa só de pensar em EAD"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-17T03:50:20.318982",
          "text": "Sei sim"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-17T03:33:11.291781",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-17T03:52:49.847130"
            }
          ],
          "text": "Cê sabe que a chance de voltar faculdade presencialmente esse ano é quase 0 né?"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-17T03:29:00.906191",
          "text": "Mas fzr oq"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-17T03:28:56.632820",
          "text": "N gosto de nada a distância"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-17T03:28:42.943382",
          "text": "Kk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-17T03:28:41.996771",
          "text": "Tô ansiosa"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-17T03:28:36.133025",
          "text": "N mesmo"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-17T03:27:16.191478",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-17T03:28:42.346773"
            }
          ],
          "text": "Felicidade?"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-17T03:27:11.711051",
          "text": "E o que você tá sentindo com essa notícia?"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-17T03:06:29.554139",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-17T03:27:12.665861"
            }
          ],
          "text": "Minha facul vai voltar agr em agosto EAD"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-17T03:05:12.612173",
          "text": "Muito raro"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-17T03:05:00.534625",
          "text": "Nem trabalho está tendo"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-17T03:04:44.462980",
          "text": "Eu só tô ficando em casa"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-17T03:04:36.175714",
          "text": "Ahhh sim"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-17T03:03:51.600771",
          "text": "Os dias que não vou, trabalho de casa"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-17T03:03:24.913341",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-17T03:04:23.347894"
            }
          ],
          "text": "O seu ainda tá parado?"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-17T03:03:10.733081",
          "text": "Revezando"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-17T03:03:08.136487",
          "text": "To indo um dia sim outro não meu bem"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-17T02:57:17.364933",
          "text": "Você tá indo trabalhar td dia ou está trabalhando em casa?"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-17T02:32:08.989158",
          "text": "Tá bomm"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-17T02:29:33.344191",
          "text": "Depois das 21h"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-17T02:28:56.488809",
          "text": "A noite!"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-17T01:57:39.561791",
          "text": "Tá bomm, que hrs?"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-17T01:48:14.889745",
          "story_share": "Shared deborabasili0's story",
          "text": "Chama amanhã!"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-15T02:54:50.785822",
          "text": "Tá bomm kkkk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-15T02:53:44.459083",
          "text": "Quero veeeer"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-15T02:38:15.263787",
          "text": "Mas eu tento"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-15T02:38:11.331609",
          "text": "Eu n sei jogar mt bem 😔kkkkkkkk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-15T02:34:28.271733",
          "text": "Tu vai me carregar?????"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-15T02:20:56.756824",
          "text": "Bom saber, depois vms jogar ff pf kk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-15T02:19:31.990236",
          "text": "Desde que tenha uma galera pra jogar, to jogando qualquer coisa"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-15T02:19:02.176523",
          "text": "Jogo de tiro principalmente"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-15T02:18:56.802131",
          "text": "Eu não gosto de jogar nenhum jogo sozinho"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-15T02:12:25.689486",
          "text": "A maioria do povo n gosta"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-15T02:12:13.413538",
          "text": "Vc n gosta de ff n né kkkkk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-15T02:06:39.602432",
          "text": "Massa!"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-15T02:05:03.043305",
          "text": "Pub*"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-15T02:04:53.300368",
          "text": "Mas eu prefiro o ff"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-15T02:04:47.108799",
          "text": "Mais realista"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-15T02:04:42.341143",
          "text": "A imagem do pug é mais legal"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-15T02:01:35.225008",
          "text": "Mas tu prefere qual?? Free fire ou pub?"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-15T02:01:26.228951",
          "text": "Hahahahahahah"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-15T01:51:54.446002",
          "text": "Ele disse q n sabia por kk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-15T01:51:48.178178",
          "text": "Ainda implorei pro meu irmão colocar pra mim"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-15T01:51:38.726792",
          "text": "Eu n sabia 🤦🏾‍♀️"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-15T01:50:27.434100",
          "text": "Tem o modo terceira pessoa também"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-15T01:50:21.055409",
          "text": "Hmmm"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-15T01:43:47.139043",
          "text": "Quando eu joguei n tinha"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-15T01:43:40.291629",
          "text": "No pub n tem como né"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-15T01:43:30.760637",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-15T01:51:01.737890"
            }
          ],
          "text": "Pq eu gosto de ver o bonequinho o meu personagem inteiro kkkkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-15T01:42:54.605819",
          "text": "Agr free fire é mais fácil"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-15T01:42:43.861174",
          "text": "Pq no celular achei difícil"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-15T01:42:36.151543",
          "text": "Mas deve ser melhor jogar pub no not ou pc"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-15T01:42:14.729527",
          "text": "Simm"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-15T01:41:00.180359",
          "text": "Pub é no celular também muié"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-15T01:40:31.554638",
          "text": "Pq n dá pra ver o bonequinho andando ksksksksks"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-15T01:39:13.178019",
          "text": "N é"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-15T01:39:11.717277",
          "text": "Agr pubg"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-15T01:39:05.924975",
          "text": "Free fire é de boa no celular"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-15T01:38:49.463109",
          "text": "No celular uai"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-15T01:33:36.289460",
          "text": "Ué, mas tu joga free fire onde?"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-15T01:21:37.161164",
          "text": "No celular é muito ruim"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-15T01:21:32.560698",
          "text": "Já joguei no celular"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-15T01:21:24.514974",
          "text": "Skskskskk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-15T01:19:12.397836",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-15T01:21:15.908191"
            }
          ],
          "text": "Eu sou um jumento"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-15T01:19:09.110647",
          "text": "Desculpa"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-15T01:19:06.365259",
          "text": "Tu falou psicológico e eu entendi psicólogo"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-15T01:18:19.052005",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-15T01:21:26.914656"
            }
          ],
          "text": "Já jogou pubg?"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-15T01:06:15.132150",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-15T01:14:54.546326"
            }
          ],
          "text": "Parece free fire mas n é"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-15T00:59:39.311193",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-15T01:01:28.627174"
            }
          ],
          "text": "Nada, é q ela ficou com tanto medo q estava sentindo os sintomas, mas deu negativo ent tudo certo"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-15T00:56:16.526581",
          "text": "O psicólogo dela que sugeriu???"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-15T00:56:10.757124",
          "text": "Q doideira"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-15T00:44:58.325485",
          "text": "Minha mãe é pq o psicológico dela estava matando ela kkkkkkkkkkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-15T00:44:28.888190",
          "text": "N estou c isso n"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-15T00:43:58.992263",
          "text": "Ainda não, mas eu estou bem nem compensa fazer"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-15T00:27:13.643518",
          "text": "Tu ja fez esse teste??"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-15T00:26:59.049472",
          "text": "Jesus é bão"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-15T00:05:08.621744",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-15T00:27:02.050271"
            }
          ],
          "text": "Deu negativo"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-15T00:05:02.057951",
          "text": "Minha mãe n sossegou enquanto n fez o teste do covid kkkkkkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-15T00:02:39.219975",
          "text": "Kkkkkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-15T00:02:36.924503",
          "text": "😎"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-15T00:01:36.597994",
          "text": "Boa Basílio"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-14T23:54:05.612617",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-15T00:00:57.623665"
            }
          ],
          "text": "Rinaldi"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-14T23:54:01.068442",
          "text": "Kkkkkkkkkkkkkkkkkk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-14T23:40:32.004684",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-14T23:54:36.685570"
            }
          ],
          "text": "Tu tinha falado o que mesmo?"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-14T23:40:24.423003",
          "text": "Você acertou na primeira tentativa"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-14T23:39:29.380129",
          "text": "Ha ha ha ha"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-14T23:39:21.052677",
          "text": "Hahahahahahaahahahah"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-14T23:27:32.161997",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-14T23:39:44.043888"
            }
          ],
          "text": "Ou eu acertei msm"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-14T23:27:23.395875",
          "text": "Acho q n é e você tá me zuando"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-14T23:26:37.000001",
          "text": "Fala logo"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-14T23:26:33.857607",
          "text": "Aff kkkk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-14T23:23:01.966548",
          "text": "Que que cê acha???"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-14T23:22:27.792560",
          "text": "Kkkkkkkkkkkkkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-14T23:17:08.659301",
          "text": "Então se pronuncia hainedi?"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-14T23:16:47.586320",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-14T23:22:53.864168"
            }
          ],
          "text": "Kkkkkkkkkk sério?"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-14T23:15:54.933396",
          "text": "Aeeeee acertouuuu"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-14T23:15:46.763482",
          "text": "Hainedi?"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-14T23:12:00.932315",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-14T23:10:32.062882",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-14T23:09:17.222167",
          "text": "Manda áudio prununciando do jeito q tu acha"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-14T22:59:03.544164",
          "text": "Kkkkkkkkkkkk boa"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-14T22:51:40.162529",
          "text": "Ronaldo fenômeno"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-14T22:48:33.944166",
          "text": "como se pronuncia? Kk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-14T22:23:55.916923",
          "text": "É italiano hahahahaha"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-14T22:23:44.612655",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-14T22:47:03.452253"
            }
          ],
          "text": "Tem uma galera que me chama de Rinaldi"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-14T22:23:38.980631",
          "text": "Hmmm"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-14T22:15:37.924570",
          "text": "Seu sobrenome é diferente kk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-14T22:15:07.212406",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-14T22:24:00.839399"
            }
          ],
          "text": "sei viu Rinaldi"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-14T22:06:21.059248",
          "text": "Nada comparado a você!"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-14T21:56:20.459039",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-14T22:06:15.484856"
            }
          ],
          "story_share": "Shared gustavorinaldii's story",
          "text": "lindo é ele kk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-14T21:13:08.215699",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-14T21:51:51.157530"
            }
          ],
          "text": "Obrigada meu bem 😊"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-14T21:11:18.477687",
          "story_share": "Shared deborabasili0's story",
          "text": "Admirável!"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-11T05:13:33.796598",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-11T05:22:09.438096"
            }
          ],
          "text": "Beijos, boa noite!"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-11T05:11:52.298516",
          "text": "Beijos, boa noite."
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-11T05:07:00.093350",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-11T05:11:30.370311"
            }
          ],
          "text": "Tá bommm, pode deixar"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-11T05:03:36.682163",
          "text": "Não vai faltar oportunidade"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-11T05:03:30.449745",
          "text": "A gente inventa alguma coisa"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-11T05:03:19.585389",
          "text": "Mas quando ela tiver mais confiante, e vocês estiverem dispostas, é só falar"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-11T05:02:49.172395",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-11T05:04:01.629801"
            }
          ],
          "text": "Deixa dar uma esfriada agora"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-11T05:02:40.759212",
          "text": "Já saíram com a gente e pegaram um resfriado"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-11T05:02:24.475161",
          "text": "Tá bom, é importante que a mãe de você pegue confiança na gente aos poucos também"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-11T05:02:04.793277",
          "text": "Entendi"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-11T04:56:56.662905",
          "text": "Foi o sereno q a gente pegou aquele dia"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-11T04:56:41.633410",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-11T05:02:01.765449"
            }
          ],
          "text": "Mas q a gente ficou com medo a gnt ficou"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-11T04:56:30.847904",
          "text": "Kkkkkkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-11T04:56:21.163750",
          "text": "Então, já estamos bem já, foi só uma gripe"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-11T04:55:53.130952",
          "text": "Se foi só sintoma de gripe comum tá suave"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-11T04:55:38.952413",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-11T04:56:06.583887"
            }
          ],
          "text": "Mas vocês já estão bem dessa gripe?"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-11T04:55:32.430426",
          "text": "Relaxou então"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-11T04:54:53.291254",
          "text": "Ficou morrendo de medo"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-11T04:54:47.010731",
          "text": "Foi engraçado, a Dani tem o psicológico horrível"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-11T04:53:59.881254",
          "text": "Pra minha mãe eu e Dani estávamos com corona kkkkkk 🤦🏾‍♀️"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-11T04:53:06.620474",
          "text": "Dani n gripou e deu febre, aí eu tbm gripei e eu sei que não tem nada a ver com vocês né"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-11T04:52:31.360594",
          "text": "N tem quando a gente saiu com vcs?"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-11T04:52:12.944747",
          "text": "A eu quero muito mesmo ir, mas acho q minha mãe vai acabar n deixando"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-11T04:51:40.390835",
          "text": "Sim vei, eles n se decidem"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-11T04:49:56.830647",
          "text": "Se tiver livre amanhã, eu te chamo"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-11T04:49:27.287477",
          "text": "Ou em outro lugar"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-11T04:48:54.593504",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-11T04:51:21.727925"
            }
          ],
          "text": "Mas se o parque da cidade tiver aberto amanhã, a gente tá pensando em levar o dog pra passear lá"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-11T04:47:53.786564",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-11T04:51:08.566069"
            }
          ],
          "text": "Eles não se decidem..."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-11T04:47:36.957041",
          "text": "Tenho q ver o que o governo fechou de novo"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-11T04:43:21.402249",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-11T04:47:08.672402"
            }
          ],
          "text": "Vei q tédio q eu tô, mas tb n quero dormir cedo hj, tô com sdd de sair de casa kkkk 💔"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-11T04:35:43.596817",
          "text": "Awnn, acho q vou acabar colocando dnvo"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-11T04:33:21.865769",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-11T04:34:47.109229"
            }
          ],
          "text": "Basta escolher com qual se sente mais confortável"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-11T04:33:12.833027",
          "text": "É linda dos dois jeitos"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-10T22:30:51.656464",
          "text": "fechado ent kk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-10T22:29:17.208895",
          "text": "Podem colar com a gente a hora que ceis quiserem"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-10T22:29:09.561582",
          "text": "Sim, vamo sim"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-10T22:08:41.904312",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-10T22:10:46.975184"
            }
          ],
          "text": "q nada, obrigada 🥰"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-10T22:07:55.299503",
          "text": "Tá gata ein"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-10T22:07:54.961080",
          "story_share": "Shared deborabasili0's story",
          "text": "",
          "story_share_type": "default"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-10T01:00:37.262702",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-10T01:00:50.103894"
            }
          ],
          "text": "Vou baixar"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-10T01:00:34.394298",
          "text": "Show"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-10T00:39:49.146233",
          "text": "Depois baixa 8pool kk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-10T00:39:33.929399",
          "text": "Tá bommm"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-10T00:37:05.539307",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-10T00:39:23.659780"
            }
          ],
          "text": "Só você me chamar"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-10T00:36:58.944394",
          "text": "Vamo, qualquer coisa"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-10T00:36:49.459365",
          "text": "Massa!!"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-10T00:12:00.890950",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-10T00:36:39.012398"
            }
          ],
          "text": "Vamos jogar alguma coisa depois, sinuca online ksksksks"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-10T00:09:37.052160",
          "text": "Mas n sou boa n"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-10T00:09:33.130727",
          "text": "Eu jogo com uma amiga minha kkkkkk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-09T23:51:31.645370",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-10T00:09:18.768305"
            }
          ],
          "text": "Você joga?"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-09T23:51:27.417041",
          "text": "Mas no celular sou péssimo"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-09T23:51:20.233889",
          "text": "Eu já joguei"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-09T23:51:15.492280",
          "text": "To bem :)"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-09T23:35:14.629836",
          "text": "Você sabe jogar free fire? KKK"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-09T23:32:00.543756",
          "text": "Tô bem dms e você?"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-09T23:31:04.089171",
          "text": "E você tá bem?"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-09T23:23:32.560269",
          "text": "Terminei agr"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-09T23:23:27.400958",
          "text": "Hoje foi direito penal kkkkk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-09T22:33:45.490840",
          "text": "Ta estudando o que muié?"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-07T01:35:24.533176",
          "text": "verdade"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-07T01:35:21.197223",
          "text": "kkkkkk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-07T01:27:37.531877",
          "text": "Precisa de um time pra ele jogar contra"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-07T01:27:24.062815",
          "text": "O Flamengo e o Corinthians"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-07T01:25:43.042917",
          "text": "Pra mim só existe o Flamengo"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-07T01:25:22.864325",
          "text": "Kkkkkkkk então, nada contra tb"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-07T01:25:04.271753",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-07T01:25:10.492724"
            }
          ],
          "text": "Que bom"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-07T01:25:02.573085",
          "text": "Então você gosta do coringao"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-07T01:24:55.613297",
          "text": "Ah tá"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-07T01:24:02.303143",
          "text": "Mas nada contra"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-07T01:23:49.492086",
          "text": "Kkkkkkkkkkk não, n gosto do vasco"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-07T01:21:02.345148",
          "text": "Tu odeia o Corinthians né?"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-07T01:06:39.344568",
          "text": "Kkkkkkkkkkkkkkkk aaaaaae"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-07T01:03:40.235979",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-07T01:06:32.196436"
            }
          ],
          "text": "Qual a chance de tu acertar isso na última"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-07T01:03:15.444863",
          "text": "Véi?"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-07T01:02:52.256573",
          "text": "Kkkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-07T01:02:49.534369",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-07T01:03:45.574428"
            }
          ],
          "text": "Corinthians?"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-07T01:02:00.431128",
          "text": "Perai"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-07T01:01:58.981644",
          "text": "Hmmmm"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-07T01:01:57.051863",
          "text": "Kkkkkkkkkkk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-07T01:01:52.238431",
          "text": "Última chance vai"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-07T01:01:49.721109",
          "text": "Não e não"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-07T01:01:40.085559",
          "text": "Última chance"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-07T01:01:36.481752",
          "text": "Vasco"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-07T01:01:31.834592",
          "text": "Botafogo? Kkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-07T01:01:26.738045",
          "text": "Hmmm"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-07T01:01:21.650202",
          "text": "Não"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-07T01:01:14.578913",
          "text": "Nacional chuta um"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-07T01:01:12.806190",
          "text": "São Paulo?"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-07T01:01:00.668620",
          "text": "Liverpool?"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-07T01:00:08.215773",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-07T01:00:52.514900"
            }
          ],
          "text": "Sabia"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-07T01:00:03.784212",
          "text": "Mas eu não sou"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-07T00:59:57.544006",
          "text": "Aaaaah agora tem q ter a cara né"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-07T00:59:38.467514",
          "text": "Kkkkkkkkkkkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-07T00:59:35.643408",
          "text": "Me desculpa"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-07T00:59:33.385821",
          "text": "Vei tu n tem cara de flamenguista"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-07T00:59:24.018193",
          "text": "Pera"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-07T00:59:20.969119",
          "text": "Hmmmmm"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-07T00:59:17.065661",
          "text": "16"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-07T00:59:10.246685",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-07T00:59:18.814865"
            }
          ],
          "text": "Advinha???"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-07T00:59:03.549141",
          "text": "Seu irmão tem quantos anos?"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-07T00:59:00.620810",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-07T00:59:09.531700"
            }
          ],
          "text": "Tu torce pra qual?"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-07T00:58:58.098723",
          "text": "Hahahaha"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-07T00:58:51.127574",
          "text": "Meu irmão tbm n gosta"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-07T00:58:44.071698",
          "text": "Kk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-07T00:58:41.005894",
          "text": "Mas nem de futebol gosta"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-07T00:58:34.142141",
          "text": "Meu pai diz que é flamenguista"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-07T00:58:26.155976",
          "text": "Nem é"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-07T00:58:18.625489",
          "text": "É de família né kkkkkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-07T00:58:09.065030",
          "text": "Kkkkkkkkkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-07T00:58:06.437790",
          "text": "Sim, flamengo"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-07T00:57:58.160804",
          "text": "Sim, vou pedir o vídeo aqui pra ela kkkkkk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-07T00:57:53.818077",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-07T00:57:59.126484"
            }
          ],
          "text": "Você torce pra algum time?"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-07T00:57:10.728952",
          "text": "Sério?"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-07T00:44:36.094334",
          "text": "😂"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-07T00:44:23.380305",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-07T00:57:07.345109"
            }
          ],
          "text": "Mas ele é impossível, e ele canta a música do flamengo"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-07T00:44:09.681315",
          "text": "Eu nem sei, depois eu pergunto pra ela kkkk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-07T00:22:19.124207",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-07T00:43:53.736427"
            }
          ],
          "text": "Eu tenho dois agapornis e um australiano"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-07T00:22:01.609830",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-07T00:43:52.173127"
            }
          ],
          "text": "É periquito australiano?"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-07T00:21:53.754938",
          "text": "Legal"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-07T00:21:49.700590",
          "text": "a Lu hahahah"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-07T00:17:48.968943",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-07T00:21:40.166550"
            }
          ],
          "text": "Pensa em um passarinho atentado vei"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-07T00:17:36.573314",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-07T00:21:39.404749"
            }
          ],
          "text": "Minha prima tem um, a Lu"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-07T00:17:22.410914",
          "text": "Vida injusta"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-07T00:17:17.635736",
          "text": "Pq você tem os dois"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-07T00:17:12.027508",
          "text": "Kkkkkkkkkkkk eu discordo de você"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-07T00:15:27.816474",
          "text": "Ou você tem o passarinho ou tem a beleza"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-07T00:15:12.216492",
          "text": "Não se pode ter tudo, essa é a graça da vida"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-07T00:14:56.429347",
          "text": "Não tem foto com passarinho mas é bonita"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-07T00:12:20.285816",
          "text": "Kkkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-07T00:12:13.660835",
          "text": "Nem tenho foto com passarinho"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-07T00:05:42.320709",
          "text": "Você que manda bem"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-07T00:05:18.155618",
          "text": "Uhum, demais"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-07T00:02:23.810357",
          "text": "Aiai as fotos estão ótimas kkkk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-07T00:00:32.814458",
          "text": "Inclusive, tem umas fotos zuadas aí"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-07T00:00:10.459312",
          "text": "Minha irmã me disse isso esses dias"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-07T00:00:02.695660",
          "text": "Aham, imagino como eles devem ser"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-06T23:38:37.117864",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-06T23:58:56.475656"
            }
          ],
          "text": "Vi seu insta, só tem foto com bb kkkkkkkkkkkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-06T23:38:18.807017",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-07T00:01:12.763995"
            }
          ],
          "text": "E o Júnior q é meu irmão tbm"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-06T23:37:58.416536",
          "text": "Eles são incríveis, moro com a minha mãe, a Dani q estava com a gente"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-06T23:35:55.062140",
          "text": "Você mora com sua mãe?"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-06T23:35:42.041590",
          "text": "E como eles são?"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-06T23:35:32.576997",
          "text": "Mas n moro com eles"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-06T23:35:13.032921",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-06T23:35:33.718976"
            }
          ],
          "text": "E outra de 8 q meu pai adotou"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-06T23:34:59.581496",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-06T23:35:31.200617"
            }
          ],
          "text": "Tenho um irmãozinho de 4 anos"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-06T23:34:42.905565",
          "text": "E meu irmãozinho"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-06T23:34:34.461901",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-06T23:35:29.487672"
            }
          ],
          "text": "Eu fico usando meus primos tbm"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-06T23:34:11.008851",
          "text": "Só"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-06T23:34:06.308683",
          "text": "Das crianças na salinha kkkkkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-06T23:33:43.727889",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-06T23:35:27.939777"
            }
          ],
          "text": "Na igreja eu já cuidei alguns dias"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-06T23:33:33.316428",
          "text": "Ainda não, nenhuma vez kk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-06T23:33:22.338467",
          "text": "Mas já deu aula pra crianca?"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-06T23:33:15.943042",
          "text": "Sim"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-06T23:33:10.875220",
          "text": "Foi na faculdade"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-06T23:33:07.240698",
          "text": "Quem me dera"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-06T23:33:03.741494",
          "text": "Kkkkk relaxa"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-06T23:32:57.189863",
          "text": "Esquece"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-06T23:32:53.809858",
          "text": "Não, viajei"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-06T23:32:32.254644",
          "text": "Essa aula que você deu, foi pra criança né?"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-06T23:32:21.107290",
          "text": "Incrível"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-06T23:32:18.439168",
          "text": "Imagino"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-06T23:26:37.156958",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-06T23:32:09.097637"
            }
          ],
          "voice_media": "Media unavailable."
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-06T23:26:36.127781",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-06T23:32:08.386183"
            }
          ],
          "voice_media": "Media unavailable."
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-06T23:26:24.123289",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-06T23:32:07.806052"
            }
          ],
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-06T23:22:37.426514",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-06T23:19:10.651284",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-06T23:18:32.726027",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-06T23:17:07.908517",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-06T23:18:14.618147"
            }
          ],
          "text": "Algo que me irrita é quem se acha o dono da razão"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-06T23:15:32.320268",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-06T23:18:13.954112"
            }
          ],
          "text": "Mas tô sempre querendo ouvir o lado do outro"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-06T23:15:19.840498",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-06T23:18:13.197622"
            }
          ],
          "text": "Mas é verdade, quando a pessoa já tem a mente formada é complicado, eu n me considero uma pessoa de mente formada, claro q em alguns aspectos sim né kkkkkkkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-06T23:13:31.128157",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-06T23:18:11.777505"
            }
          ],
          "text": "Essa aula que a gente preparou foi em grupo ainda, foi em uma matéria de comunicação, aí eu peguei um filme e falei sobre as cores, o que cada cor passava, sentimentos e tals, foi top esse dia"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-06T23:10:58.143103",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-06T23:13:41.237590"
            }
          ],
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-06T23:06:56.846770",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-06T23:10:50.584390"
            }
          ],
          "voice_media": "Media unavailable."
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-06T23:02:14.294702",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-06T23:08:03.806739"
            }
          ],
          "text": "A real é que tem q gostar e ter coragem pra atuar nessa área, por isso que assim, eu quero dar aula pra crianças, mas n é isso que eu quero pra sempre sabe, por isso q eu estudo pro Detran"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-06T22:59:48.122960",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-06T23:08:03.117328"
            }
          ],
          "text": "Mas é bom saber como lidar com cada um, as vzs um método serve pra um mas n serve pro outro e aí tem q ir adptando pra ngm ficar p trás"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-06T22:59:46.992973",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-06T23:08:02.528645"
            }
          ],
          "text": "E tb n dá pra generalizar nada, tem os adolescentes que são difíceis tb kk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-06T22:59:46.304685",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-06T23:08:01.117848"
            }
          ],
          "text": "são públicos distintos né, é bom entender cada um pra saber como lidar, geralmente a glr mais nova ainda tá tentando n seguir um caminho errado ou mudar o rumo da vida, já os jovens já tem um certo receio em se abrir, e é outra realidade tb, as vezes a vida foi dura pra eles e tudo mais, tá q n justifica a falta de educação e tals mas o convívio social deles tb conta e é aí que a educação pode contribuir né, mas é difícil..."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-06T22:34:39.341621",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-06T22:44:08.850705"
            }
          ],
          "text": "Então quando você é professor, tem que se submeter aos ataques também, não só aos prestígios kkkkkkkk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-06T22:33:53.912495",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-06T22:44:02.829018"
            }
          ],
          "text": "O mais engraçado dessa experiência, é que tu só entende o professor, quando você tem alguma experiência semelhante... e eu tive que adaptar minha metodologia de ensino ao longo do tempo, porque minha chefe recebia reclamação de que eu tava falando muito rápido etc etc"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-06T22:31:32.235499",
          "text": "Quando eu peguei esse trampo, eu prometi pra mim mesmo que eu seria um professor que eu idealizava, um professor massa, compreensivo e paciente pra ensinar"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-06T22:29:40.511551",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-06T22:43:39.050444"
            }
          ],
          "text": "Então tinha um pouco dos dois comportamentos, mas de longe, a galera que eu mais sinto falta de dar aula, são os jovens aprendizes"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-06T22:28:42.047048",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-06T22:43:33.427167"
            }
          ],
          "text": "E tem os alunos de fora, de um programa chamado poeta, patrocinado por algumas empresas grandes, Microsoft etc. essa galera é uma galera misturada... adolescente, adulto, idoso"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-06T22:27:29.114892",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-06T22:43:21.392204"
            }
          ],
          "text": "Eu fiz algumas amizades dos dois lados, mas muito mais do lado dos aprendizes"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-06T22:25:25.635864",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-06T22:43:17.957926"
            }
          ],
          "text": "É uma galera mais difícil de lidar(a maioria), muitos já foram presos, usam droga, são indisciplinados e mal educados"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-06T22:24:29.632846",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-06T22:43:09.044541"
            }
          ],
          "text": "Jovens candangos é uma galera mais velha, com comportamento mais poluído e perspectiva de vida distorcida"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-06T22:23:21.593292",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-06T22:43:01.933979"
            }
          ],
          "text": "São pessoas que escutam mais, que tem um entusiasmo por estar começando alguma coisa, são mais acessíveis e é extremamente mais fácil fazer amizade com eles"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-06T22:21:20.607911",
          "text": "Os jovens aprendizes é uma galera mais nova, adolescentes... que estão começando a vida... eles gostam de zuar tanto quanto os candangos, mas eles são menos poluídos"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-06T22:13:21.415973",
          "text": "Continuando, a ideia era falar sobre você e a gente tá falando de mim"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-06T21:38:18.432601",
          "text": "temos que criar pra saber como lidar com cada um né"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-06T21:37:50.394346",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-06T21:37:54.763666"
            }
          ],
          "text": "Então... foi a partir daí que criei minhas opiniões sobre cada grupo desses"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-06T21:37:47.876167",
          "text": "Tá bom, vai lá, depois vc me conta tudo kkkkk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-06T21:37:20.981996",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-06T21:37:25.240917"
            }
          ],
          "text": "Se quiser eu continuo jaja, só vou participar de uma reuniãozinha aqui"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-06T21:37:11.972669",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-06T21:37:24.804167"
            }
          ],
          "text": "Os alunos eram bonzinhos com você? Kk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-06T21:36:54.221689",
          "text": "Tem muita coisa pra falar sobre essa experiência"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-06T21:36:24.492511",
          "text": "E eu entendi a pressão do ponto de vista de um professor"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-06T21:36:16.068639",
          "text": "Claro, com 19 anos, n sei se eu teria coragem kk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-06T21:36:12.508428",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-06T21:36:23.172138"
            }
          ],
          "text": "É muito louco falar disso, porque eu criei uma imagem/opinião sobre os candangos, aprendizes"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-06T21:35:49.337484",
          "text": "Então, foi desafiador"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-06T21:35:34.185711",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-06T22:26:21.592961"
            }
          ],
          "text": "Depois vou fazer estágio na minha área"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-06T21:35:19.710414",
          "text": "Kkkkkkkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-06T21:35:16.380885",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-06T22:26:20.273221"
            }
          ],
          "text": "Só na faculdade"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-06T21:35:13.075938",
          "text": "Eu nunca dei aula"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-06T21:35:01.894417",
          "text": "Hummmm, mas deve ter sido uma experiência boa"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-06T21:34:32.517367",
          "text": "Eu dei aula pra menor aprendiz, pra jovem candango, e pra alunos de fora desses programas"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-06T21:34:09.597409",
          "text": "Simmm"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-06T21:34:02.100558",
          "text": "Porque um professor precisa estabelecer uma metodologia de ensino, fazer plano de aula, gerenciar alunos"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-06T21:33:59.810955",
          "text": "imagino"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-06T21:33:28.752553",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-06T21:33:42.830703"
            }
          ],
          "text": "Foi uma pressão sinistra"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-06T21:33:18.382165",
          "text": "Depende, foi minha primeira experiência com emprego e como professor"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-06T21:32:59.029235",
          "text": "Menores aprendizes n é?"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-06T21:32:40.945731",
          "text": "Uai sim"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-06T21:32:21.611262",
          "text": "Você pensa em dar aula ainda?"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-06T21:32:21.421054",
          "text": "Candinho**"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-06T21:32:09.773213",
          "text": "Jerônimo canudinho"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-06T21:31:59.901337",
          "text": "E talvez você conheça o lugar"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-06T21:31:48.586243",
          "text": "Ele começou novo também"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-06T21:31:45.734114",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-06T21:31:54.308074"
            }
          ],
          "text": "Inclusive, foi em Sobral"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-06T21:31:40.624043",
          "text": "Que top, eu tenho um amigo q ele é professor de robótica"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-06T21:31:36.425394",
          "text": "E comecei com 19 anos"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-06T21:31:28.430855",
          "text": "Foi meu primeiro emprego na vida"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-06T21:31:17.908472",
          "text": "Já fui professor de informática"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-06T21:31:07.897165",
          "text": "Tão novinho, n imaginaria nunca"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-06T21:30:47.045055",
          "text": "Sério? De que?"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-06T21:30:30.645068",
          "text": "Já fui professor"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-06T21:30:26.132962",
          "text": "Cê acredita?"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-06T21:30:22.122152",
          "text": "Então... eu já dei aula kkkkkkkkkkkkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-06T21:30:00.989925",
          "text": "Você gosta de dar aula? Que lindo gente"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-06T21:29:40.541089",
          "text": "Sério??"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-06T21:29:36.762190",
          "text": "Mano, acho me enganei, elétrico ainda n temos, tem só o projeto, pensei q os novos q tinham chegado eram mas n são ksksk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-06T21:29:15.457919",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-06T21:29:37.636415"
            }
          ],
          "text": "Então até agora a gente tem duas coisas em comum, gostar de crianças e dar aula hahahah"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-06T21:28:37.670743",
          "text": "Sim, incrível"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-06T21:28:03.656481",
          "text": "Mas véi, os projetos mais complexos são os mais satisfatórios, quando você da conta!"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-06T21:27:18.348127",
          "text": "Top demais né"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-06T21:27:10.835943",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-06T21:28:16.535650"
            }
          ],
          "text": "Já temos um elétrico kkkkkkkk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-06T21:26:49.947888",
          "text": "Aviiimaria até parece que sabe falar... “revolução automobilística”"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-06T21:26:29.503178",
          "text": "E esse projeto de carro elétrico se incluir transportes públicos vai ser uma revolução automobilística"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-06T21:25:05.829197",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-06T21:25:36.433348"
            }
          ],
          "text": "Esses projetos são muito relevantes pra sua empresa, já que se trata de transporte e todo mundo usa"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-06T21:24:02.117759",
          "text": "Que massa!! É, existem projetos infinitos que podem ser implementados pra praticamente toda área né?"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-06T21:01:16.962435",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-06T21:21:47.250876"
            }
          ],
          "text": "Mas eu estudo pra passar p agente de Detran, desde quando eu era mais nova tenho essa vontade, mas tbm é só o primeiro concurso q eu quero passar kkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-06T21:00:04.043001",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-06T21:21:41.462416"
            }
          ],
          "text": "Eu amo crianças, provavelmente vou dar aula em algum momento da minha vida kkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-06T20:59:28.204247",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-06T21:21:38.902228"
            }
          ],
          "text": "Eu tô fazendo pedagogia né, mas esse ano eu perdi por causa da pandemia, a UnB parou totalmente"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-06T20:58:41.854019",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-06T21:21:38.018094"
            }
          ],
          "text": "Sobre ficar lá, eu até ficaria, mas n é o que eu quero"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-06T20:58:09.422485",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-06T21:21:31.481120"
            }
          ],
          "text": "Deu um trabalhão, mas foi legal"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-06T20:57:57.369153",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-06T21:21:29.771455"
            }
          ],
          "text": "Que foi esse aí, esse evento foi daora, eu tive q organizar a recepção do evento na câmara"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-06T20:57:20.017115",
          "media_owner": "tcb.transporte",
          "media_share_caption": "Faça sua inscrição: https://bit.ly/2kERdrT\nSaiba mais no site da TCB: http://tcb.df.gov.br",
          "media_share_url": "https://scontent-atl3-2.cdninstagram.com/v/t51.2885-15/e35/71200735_159805341767081_3255645527296108943_n.jpg?_nc_ht=scontent-atl3-2.cdninstagram.com&_nc_cat=105&_nc_ohc=g9rRGYz7mtUAX8VUlze&tp=18&oh=7d8127cb65cba7a60b0f62b62d3097f1&oe=5FCD686A&ig_cache_key=MjEzODE4OTc5OTU4MzcwNDIyNg%3D%3D.2"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-06T20:57:06.432807",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-06T21:21:25.219813"
            }
          ],
          "text": "O último agr foi sobre carros elétricos"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-06T20:56:41.985563",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-06T21:21:22.955019"
            }
          ],
          "text": "Então, eu gosto dos projetos especiais, pq eu tenho que ir de setor em setor, lidar com cada um, aí meio q isso me ajudou a conhecer todos da empresa kk, são vários projetos, tem projetos com crianças, como é uma empresa de transporte as vezes tem uns passeios, tem projetos em que adolescentes contribuem com conhecimento de robótica é bem variado"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-06T20:38:56.375278",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-06T20:58:13.956092"
            }
          ],
          "text": "Te entendo, por mais que as pessoas lá sejam bem receptivas, chega uma hora que você sente que não tá mais crescendo profissionalmente, é isso? Tá querendo ir pra alguma área específica?"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-06T20:36:57.288532",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-06T20:54:19.691522"
            }
          ],
          "text": "Como que funciona esses projetos especiais? Você ajuda a desenvolver projetos pra fazer a empresa crescer etc?"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-06T20:35:56.159818",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-06T20:54:13.799696"
            }
          ],
          "text": "Massa! E qual setor você mais gostou de trabalhar lá? Cê passou por diversas áreas então, acredito que tenha alguma que se sentiu mais confortável"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-06T19:22:31.833569",
          "text": "Como é estágio são dois anos o máximo, o presidente disse q se eu quiser ele me contrata né, mas se pá eu nem fico lá n"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-06T19:21:51.414949",
          "text": "Só que a minha chefe precisou pedir um tempo pq a irmã dela adoeceu, aí até minha chefe voltar eu estou ficando na recepção, aí veio essa pandemia aí, ai quando eu voltar provavelmente eu volte a ficar nos projetos especiais c a minha chefe"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-06T19:20:05.547799",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-06T20:33:30.089062"
            }
          ],
          "text": "Legal, lá eu já fiquei em alguns setores, eu já passei pelo financeiro, ouvidoria, projetos especiais que eu ficava mais na parte de planejamento dos eventos que a empresa realizava"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-06T17:26:22.289109",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-06T19:17:23.237975"
            }
          ],
          "text": "Hoje eu to trabalhando na sede do slu, no setor de tecnologia."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-06T17:23:41.741062",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-06T17:22:28.204602",
          "voice_media": "Media unavailable."
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-06T16:30:32.966791",
          "text": "E você trabalha onde?"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-06T16:29:23.082195",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-06T17:20:47.193892"
            }
          ],
          "text": "gosto muito de café, mas com açúcar kk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-06T16:28:41.507974",
          "story_share": "Shared gustavorinaldii's story",
          "text": "Sem açúcar? Gentee"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-06T16:27:52.396331",
          "text": "Aí como são só 2 anos, tenho só mais um p ficar lá"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-06T16:26:33.592789",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-06T17:19:56.585420"
            }
          ],
          "text": "Tô há um ano lá né, lá é tranquilo, foi meu primeiro estágio e as pessoas lá são mt legais, gosto de lá"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-06T13:31:37.130349",
          "text": "e o que que cê ta achando de lá?"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-06T13:18:50.194139",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-06T13:31:21.449756"
            }
          ],
          "text": "Na tcb, uma empresa de transporte q fica perto do palácio"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-06T13:03:47.610895",
          "text": "Tá fazendo estágio onde?"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-06T13:03:12.762849",
          "text": "Verdade, se estivesse parado talvez não estaria tão feliz."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-06T13:01:52.683202",
          "text": "Zoa"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-06T13:01:50.413512",
          "text": "É bom pa passar raiva"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-06T12:42:32.347517",
          "text": "Mas acordar cedinho n é mole"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-06T12:42:04.377299",
          "text": "Meu estágio tá parado"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-06T12:41:48.889784",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-06T13:01:42.391058"
            }
          ],
          "text": "Pelo menos você está tendo uma rotina"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-06T12:41:30.171184",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-06T13:01:40.434617"
            }
          ],
          "text": "Po é bom"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-06T12:41:07.113946",
          "text": "Nada véi, só oferecendo kkkk"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-06T12:39:42.161378",
          "text": "😢"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-06T12:39:22.420674",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-06T12:41:12.951421"
            }
          ],
          "text": "Acordei tendo que ir trabalhar, é mole?"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-06T12:38:48.023239",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-06T12:40:45.534839"
            }
          ],
          "text": "Tava te cobrando ou oferecendo alguma coisa?"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-06T12:38:31.586892",
          "text": "Kkkkkkkkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-06T12:33:59.233838",
          "text": "E você?"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-06T12:33:52.825985",
          "text": "Kkkkkkkkkkkkkk"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-06T12:33:49.661602",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-06T12:38:23.941580"
            }
          ],
          "text": "Eu tô bem, acordei com a claro me ligando"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-06T12:33:22.731727",
          "text": "Como você tá?"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-06T12:33:18.697104",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-06T12:33:28.452952"
            }
          ],
          "text": "Bom diiia"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-06T12:27:51.024163",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-06T12:33:10.931605"
            }
          ],
          "text": "bomm diaa!"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-06T12:25:43.420153",
          "text": "Kkkkkkkk hm"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-06T10:04:16.357003",
          "likes": [
            {
              "username": "deborabasili0",
              "date": "2020-07-06T12:25:10.629059"
            }
          ],
          "text": "Só esse passivista aí que tá mei estranho..."
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-06T10:03:43.019151",
          "text": "Valeuuu!"
        },
        {
          "sender": "gustavorinaldii",
          "created_at": "data: 2020-07-06T10:03:40.172701",
          "text": "Hahahaha"
        },
        {
          "sender": "deborabasili0",
          "created_at": "data: 2020-07-06T03:48:13.304624",
          "likes": [
            {
              "username": "gustavorinaldii",
              "date": "2020-07-06T10:03:33.571987"
            }
          ],
          "story_share": "Shared deborabasili0's story",
          "text": "A sua cor é rosa e verde kk"
        }
      ]
    }
  }
})