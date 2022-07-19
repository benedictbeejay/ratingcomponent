let btns = document.querySelectorAll('.btn')
let card2 = document.querySelector('.card2')
let card = document.querySelector('.container')
let span = document.querySelector('span')
let button = document.querySelector('#button')


Array.from(btns).forEach(btn => {
	btn.addEventListener('click' , e => {
		const rating = e.target.textContent
		span.textContent = rating
		
	})
})

button.addEventListener('click' , s => {
	card2.classList.remove('hide')
	card.classList.add('hide')
})