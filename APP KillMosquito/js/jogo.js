
var altura = 0
var largura = 0
let vidas = 1
let tempo = 10

let criaMosquitoTempo = 2000

var nivel = window.location.search
nivel = nivel.replace('?', '')

if(nivel === 'facil') {
	//2000
	criaMosquitoTempo = 2000
} else if(nivel === 'normal') {
	//1500
	criaMosquitoTempo = 1500
}else if(nivel === 'dificil') {
	//1000
	criaMosquitoTempo = 1000
}

function ajustaTamanhoPalcoJogo() {
	altura = window.innerHeight
	largura = window.innerWidth

	console.log(largura, altura)
}

ajustaTamanhoPalcoJogo()

let cronometro = setInterval(function() {
	tempo -= 1
	if(tempo <= 0) {
		clearInterval(cronometro)
		clearInterval(criaMosquito)
		window.location.href = 'vitoria.html'
	}
	document.getElementById('tempo').innerHTML = tempo
}, 1000)


function posicaoRandomica() {


	//remover o mosquito caso exista
	if(document.getElementById('mosquito')) {
		document.getElementById('mosquito').remove()
		if (vidas > 3) {
			window.location.href = 'fim_jogo.html'
		} else {
			document.getElementById('v' + vidas).src = "../img/coracao_vazio.png"
		vidas++
}}

	var posicaoX = Math.floor(Math.random() * largura) - 90
	var posicaoY = Math.floor(Math.random() * altura) - 90

	posicaoX = posicaoX < 0 ? 0 : posicaoX
	posicaoY = posicaoY < 0 ? 0 : posicaoY

	console.log(posicaoX, posicaoY)

	//criar o elemento html
	var mosquito = document.createElement('img')
	mosquito.src = '../img/mosquito.png'
	mosquito.className = tamanhoAleatorio() + ' ' + trocarLado()
	mosquito.style.left = posicaoX + 'px'
	mosquito.style.top = posicaoY + 'px'
	mosquito.style.position = 'absolute'
	mosquito.id = 'mosquito'
	mosquito.onclick = function() {
		this.remove(mosquito);
	}

	document.body.appendChild(mosquito)
	tamanhoAleatorio()
}

posicaoRandomica()


function tamanhoAleatorio() {
	var tamanho = Math.floor(Math.random() * 3)
	switch(tamanho) {
		case 0:
			return 'mosquito1'
		case 1:
			return 'mosquito2'
		case 2:
			return 'mosquito3'
	}
}

function trocarLado() {
	var lado = Math.floor(Math.random() * 2)
	switch(lado) {
		case 0:
			return 'ladoA'
		case 1:
			return 'ladoB'
	}
}

var criaMosquito = setInterval(function() {
	posicaoRandomica()
}, criaMosquitoTempo)