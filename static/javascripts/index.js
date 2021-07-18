import { fetchGET, fetchPOST } from './api.js'
import { LIKE_HEART, UNLIKE_HEART } from './constants.js'

window.addEventListener('DOMContentLoaded', async () => {
	new App()
})

class App {
	constructor() {
		this.init()
	}

	init() {
		this.setElements()
		this.setEvents()
	}

	setElements() {
		this.$imageContainer = document.querySelector('ul.image-container')
		this.$moreCommentsBtn = document.querySelector('button.more-comments-btn')
		this.$commentContainer = document.querySelector('ul.comment')
		this.$commentInput = document.querySelector('input#comment-input')
		this.$commentSubmitBtn = document.querySelector('button.comment-submit-btn')
		this.$heart = document.querySelector('.heart')
		this.$likeCount = document.querySelector('.like-count')
	}

	setEvents() {
		this.$imageContainer.addEventListener('click', (e) => {
			this.swipeImage(e)
		})

		this.$moreCommentsBtn.addEventListener('click', () => {
			this.getComments()
		})

		this.$commentInput.addEventListener('input', () => {
			this.validateComment()
		})

		this.$commentInput.addEventListener('keydown', (e) => {
			if (e.keyCode !== 13) return
			this.submitComment()
		})

		this.$commentSubmitBtn.addEventListener('click', () => {
			this.submitComment()
		})

		this.$heart.addEventListener('click', () => {
			this.submitLike()
		})
	}

	swipeImage(e) {
		const $image = e.target.closest('.content-img')
		const imageWidth = $image.offsetWidth
		const isRight = imageWidth / 2 < e.offsetX

		const $newImage = isRight
			? $image.nextElementSibling
			: $image.previousElementSibling

		if ($newImage === null) return

		const swipeX = imageWidth * +$newImage.dataset.index * -1
		this.$imageContainer.style.transform = `translateX(${swipeX}px)`
	}

	async getComments() {
		try {
			const { status, data } = await fetchGET(urls.getCommentsApi)
			if (status !== 200) {
				alert('ERROR')
				return
			}

			this.addComments(data.comments)
			this.$moreCommentsBtn.remove()
		} catch (err) {
			alert(err)
		}
	}

	addComments(comments) {
		comments.forEach((comment) => {
			const $newComment = document.createElement('li')
			$newComment.classList.add('comment')
			$newComment.classList.add('row')
			$newComment.dataset.id = comment.id

			$newComment.innerHTML = /* html */ `
        <span class="comment-user">${comment.user}</span>
        <span class="comment-text">${comment.text}</span>
      `
			this.$commentContainer.appendChild($newComment)
		})
	}

	validateComment() {
		if (!this.$commentInput.value) {
			this.$commentSubmitBtn.classList.remove('active')
			return false
		}

		this.$commentSubmitBtn.classList.add('active')
		return true
	}

	async submitComment() {
		if (!this.validateComment()) return

		try {
			const text = this.$commentInput.value
			const { status, data } = await fetchPOST(urls.postCommentApi, {
				comment: text,
				user,
			})

			if (status !== 200) {
				alert('ERROR')
				return
			}

			this.addComments([{ text, user, id: data.id }])
			this.$commentInput.value = ''
		} catch (err) {
			alert(err)
		}
	}

	async submitLike() {
		const currentIsLike = this.$heart.dataset.like === 'true'
		const newIsLike = !currentIsLike

		try {
			const { status, data } = await fetchPOST(urls.postLikeApi, {
				is_like: newIsLike,
			})

			if (status !== 200) {
				alert('ERROR')
				return
			}

			this.$heart.innerText = newIsLike ? LIKE_HEART : UNLIKE_HEART
			this.$heart.dataset.like = newIsLike
			this.$likeCount.innerText = data.likes
		} catch (err) {
			alert(err)
		}
	}
}
