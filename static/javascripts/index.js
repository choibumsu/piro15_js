import { fetchGET, fetchPOST } from './api.js'
import { LIKE_HEART, UNLIKE_HEART } from './constants.js'

window.addEventListener('DOMContentLoaded', () => {
	window.app = new App()
})

class App {
	constructor() {
		this.init()
	}

	init() {
		this.setElements()
		this.setEvents()
	}

	/**
	 * 클래스 내부에서 사용할 요소들을 선택하는 함수
	 */
	setElements() {
		// // TODO: #1-1 START
		// this.$imageContainer = document.querySelector('ul.image-container')
		// // TODO: #1-1 END
		//
		// // TODO: #2-1 START
		// this.$moreCommentsBtn = document.querySelector('button.more-comments-btn')
		// // TODO: #2-2 END
		//
		// // TODO: #2-6 START
		// this.$commentContainer = document.querySelector('ul.comment')
		// // TODO: #2-6 END
		//
		// // TODO: #3-1 START
		// this.$commentInput = document.querySelector('input#comment-input')
		// // TODO: #3-1 END
		//
		// // TODO: #3-2 START
		// this.$commentSubmitBtn = document.querySelector('button.comment-submit-btn')
		// // TODO: #3-2 END
		//
		// // TODO: #4-1 START
		// this.$heart = document.querySelector('.heart')
		// // TODO: #4-1 END
		//
		// // TODO: #4-4 START
		// this.$likeCount = document.querySelector('.like-count')
		// // TODO: #4-4 END
	}

	/**
	 * 요소들에 이벤트를 추가하는 함수
	 */
	setEvents() {
		// // TODO: #1-2 START
		// this.$imageContainer.addEventListener('click', (e) => {
		// 	this.swipeImage(e)
		// })
		// // TODO: #1-2 END
		//
		// // TODO: #2-2 START
		// this.$moreCommentsBtn.addEventListener('click', () => {
		// 	this.getComments()
		// })
		// // TODO: #2-2 END
		//
		// // TODO: #3-3 START
		// this.$commentSubmitBtn.addEventListener('click', () => {
		// 	this.submitComment()
		// })
		// // TODO: #3-3 END
		//
		// // TODO: #3-6 START
		// this.$commentInput.addEventListener('input', () => {
		// 	this.validateComment()
		// })
		// // TODO: #3-6 END
		//
		// // TODO: #3-7 START
		// this.$commentInput.addEventListener('keydown', (e) => {
		// 	if (e.keyCode !== 13) return
		// 	this.submitComment()
		// })
		// // TODO: #3-7 END
		//
		// // TODO: #4-2 START
		// this.$heart.addEventListener('click', () => {
		// 	this.submitLike()
		// })
		// // TODO: #4-2 END
	}

	// // TODO: #1-3 START
	// swipeImage(e) {
	// 	const $image = e.target.closest('.content-img')
	// 	const imageWidth = $image.offsetWidth
	// 	const isRight = imageWidth / 2 < e.offsetX
	//
	// 	const $newImage = isRight
	// 		? $image.nextElementSibling
	// 		: $image.previousElementSibling
	//
	// 	if ($newImage === null) return
	//
	// 	const swipeX = imageWidth * +$newImage.dataset.index * -1
	// 	this.$imageContainer.style.transform = `translateX(${swipeX}px)`
	// }
	// // TODO: #1-3 END
	//
	// // TODO: #2-4 START
	// checkFetchOk(status) {
	// 	if (status !== 200) {
	// 		alert('ERROR')
	// 		return false
	// 	}
	// 	return true
	// }
	// // TODO: #2-4 END
	//
	// // TODO: #2-3 START
	// async getComments() {
	// 	const { status, data } = await fetchGET(urls.getCommentsApi)
	// 	if (!this.checkFetchOk(status)) return
	//
	// 	this.addComments(data.comments)
	// 	this.$moreCommentsBtn.remove()
	// }
	// // TODO: #2-3 END
	//
	// // TODO: #2-5 START
	// addComments(comments) {
	// 	comments.forEach((comment) => {
	// 		const $newCommentParent = document.createElement('div')
	// 		$newCommentParent.innerHTML = /* html */ `
	// 			<li class="comment row" data-id="${comment.id}">
	// 				<span class="comment-user">${comment.user}</span>
	// 				<span class="comment-text">${comment.text}</span>
	// 			</li>
	//     `
	//
	// 		const $newComment = $newCommentParent.firstElementChild
	// 		this.$commentContainer.appendChild($newComment)
	// 	})
	// }
	// // TODO: #2-5 END
	//
	// // TODO: #3-5 START
	// validateComment() {
	// 	if (!this.$commentInput.value) {
	// 		this.$commentSubmitBtn.classList.remove('active')
	// 		return false
	// 	}
	//
	// 	this.$commentSubmitBtn.classList.add('active')
	// 	return true
	// }
	// // TODO: #3-5 END
	//
	// // TODO: #3-4 START
	// async submitComment() {
	// 	if (!this.validateComment()) return
	//
	// 	const text = this.$commentInput.value
	// 	const { status, data } = await fetchPOST(urls.postCommentApi, {
	// 		comment: text,
	// 		user,
	// 	})
	// 	if (!this.checkFetchOk(status)) return
	//
	// 	this.addComments([{ text, user, id: data.id }])
	// 	this.$commentInput.value = ''
	// }
	// // TODO: #3-4 END
	//
	// // TODO: #4-3 START
	// async submitLike() {
	// 	const currentIsLike = this.$heart.dataset.like === 'true'
	// 	const newIsLike = !currentIsLike

	// 	const { status, data } = await fetchPOST(urls.postLikeApi, {
	// 		is_like: newIsLike,
	// 	})
	// 	if (!this.checkFetchOk(status)) return

	// 	this.$heart.innerText = newIsLike ? LIKE_HEART : UNLIKE_HEART
	// 	this.setLikes(data.likes)
	// }
	// // TODO: #4-3 END
	//
	// // TODO: #4-5 END
	// setLikes() {
	// 	this.$heart.dataset.like = newIsLike
	// 	this.$likeCount.innerText = data.likes
	// }
	// // TODO: #4-5 END
}
