const characters = [
	'A',
	'B',
	'C',
	'D',
	'E',
	'F',
	'G',
	'H',
	'I',
	'J',
	'K',
	'L',
	'M',
	'N',
	'O',
	'P',
	'Q',
	'R',
	'S',
	'T',
	'U',
	'V',
	'W',
	'X',
	'Y',
	'Z',
	'a',
	'b',
	'c',
	'd',
	'e',
	'f',
	'g',
	'h',
	'i',
	'j',
	'k',
	'l',
	'm',
	'n',
	'o',
	'p',
	'q',
	'r',
	's',
	't',
	'u',
	'v',
	'w',
	'x',
	'y',
	'z',
	'0',
	'1',
	'2',
	'3',
	'4',
	'5',
	'6',
	'7',
	'8',
	'9',
	'~',
	'`',
	'!',
	'@',
	'#',
	'$',
	'%',
	'^',
	'&',
	'*',
	'(',
	')',
	'_',
	'-',
	'+',
	'=',
	'{',
	'[',
	'}',
	']',
	',',
	'|',
	':',
	';',
	'<',
	'>',
	'.',
	'?',
	'/',
]

let passwordOne = document.getElementById('password-one')
let passwordTwo = document.getElementById('password-two')
let copyOne = document.getElementById('copy-one')
let copyTwo = document.getElementById('copy-two')

function generatePassword() {
	renderPassword()
}

function renderPassword() {
	let outputOne = ''
	let outputTwo = ''
	for (let i = 0; i < 15; i++) {
		let randomCharactersOne = Math.floor(Math.random() * characters.length) // random char
		let randomCharactersTwo = Math.floor(Math.random() * characters.length)
		let randomPassOne = characters[randomCharactersOne]
		let randomPassTwo = characters[randomCharactersTwo]

		outputOne += randomPassOne
		outputTwo += randomPassTwo
	}
	passwordOne.value = outputOne // display the password into input field
	passwordTwo.value = outputTwo
}
// copy onclick
passwordOne.addEventListener('click', function () {
	this.select()
	document.execCommand('copy')
	copyOne.textContent = 'Copied!'
	setTimeout(function () {
		copyOne.textContent = ''
	}, 1500)
})
// copy onclick
passwordTwo.addEventListener('click', function () {
	this.select()
	document.execCommand('copy')
	copyOne.textContent = 'Copied!' // 'copied' text appear if the user click the text
	setTimeout(function () {
		copyOne.textContent = ''
	}, 1500)
})
