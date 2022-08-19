const rating = document.getElementById('rating')
const submitBtn = document.getElementById('submit-btn')


let selectedRating

document.addEventListener('DOMContentLoaded', e => {
	submitBtn.disabled = !selectedRating	
})

function selectRating(r) {
	const ratingButtons = document.querySelectorAll('.rating-btn')

	ratingButtons.forEach(btn => {
		if (btn.dataset.rating == r) {
			btn.classList.add('selected')
		} else {
			btn.classList.remove('selected')
		}

		selectedRating = r
		submitBtn.disabled = false
	})
}

rating.addEventListener('click', function(e) {
	if (!e.target.dataset.rating) return
	selectRating(e.target.dataset.rating)
})

submitBtn.addEventListener('click', e => {
	const selectedRatingMsg = document.getElementById('selected-rating')
	selectedRatingMsg.innerHTML = selectedRating

	const ratingState = document.getElementById('rating-state')
	const thankYouState = document.getElementById('thank-you-state')

	ratingState.style.display = 'none'
	thankYouState.style.display = ''
})