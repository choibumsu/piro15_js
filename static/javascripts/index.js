import {fetchGET, fetchPOST} from './api.js'
import {LIKE_HEART, UNLIKE_HEART} from './constants.js'

window.addEventListener('DOMContentLoaded', () => {
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

    /**
     * 클래스 내부에서 사용할 요소들을 선택하는 함수
     */
    setElements() {
        this.$imageContainer = document.querySelector('ul.image-container')
        this.$moreCommentsBtn = document.querySelector('button.more-comments-btn')
        this.$commentContainer = document.querySelector('ul.comment')
        this.$commentInput = document.querySelector('input#comment-input')
        this.$commentSubmitBtn = document.querySelector('button.comment-submit-btn')
        this.$heart = document.querySelector('.heart')
        this.$likeCount = document.querySelector('.like-count')
    }

    /**
     * 요소들에 이벤트를 추가하는 함수
     */
    setEvents() {
        this.$imageContainer.addEventListener('click', (e) => {
            this.swipeImage(e)
        })

        this.$moreCommentsBtn.addEventListener('click', () => {
            this.getComments()
        })

        this.$commentSubmitBtn.addEventListener('click', () => {
            this.submitComment()
        })

        this.$commentInput.addEventListener('input', () => {
            this.validateComment()
        })

        this.$commentInput.addEventListener('keydown', (e) => {
            if (e.keyCode !== 13) return
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

        let $newImage
        if (isRight) {
            $newImage = $image.nextElementSibling
        } else {
            $newImage = $image.previousElementSibling
        }

        if ($newImage === null) return

        const swipeX = imageWidth * -$newImage.dataset.index
        this.$imageContainer.style.transform = `translateX(${swipeX}px)`
    }

    checkFetchOk(status) {
        if (status !== 200) {
            alert('ERROR')
            return false
        }
        return true
    }

    async getComments() {
        const {status, data} = await fetchGET(urls.getCommentsApi)
        if (!this.checkFetchOk(status)) return

        this.$moreCommentsBtn.remove()
        this.addComments(data.comments)
    }

    addComments(comments) {
        comments.forEach((comment) => {
            const $newCommentParent = document.createElement('div')
            $newCommentParent.innerHTML = `
                <li class="comment row" data-id="${comment.id}">
                    <span class="comment-user">${comment.user}</span>
                    <span class="comment-text">${comment.text}</span>
                </li>
            `

            const $newComment = $newCommentParent.firstElementChild
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

        const text = this.$commentInput.value
        const {status, data} = await fetchPOST(urls.postCommentApi, {
            comment: text,
            user
        })
        if (!this.checkFetchOk(status)) return

        this.addComments([{
            id: data.id,
            text,
            user
        }])
        this.$commentInput.value = ''
    }

    async submitLike() {
        const currentIsLike = this.$heart.dataset.like === 'true'
        const newIsLike = !currentIsLike

        const {status, data} = await fetchPOST(urls.postLikeApi, {
            is_like: newIsLike,
        })
        if (!this.checkFetchOk(status)) return

        this.setHeart(newIsLike)
        this.setLikes(data.likes)
    }

    setHeart(isLike) {
        this.$heart.innerText = isLike ? LIKE_HEART : UNLIKE_HEART
        this.$heart.dataset.like = isLike
    }

    setLikes(likes) {
        this.$likeCount.innerText = likes
    }
}
