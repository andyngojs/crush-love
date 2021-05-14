function start() {
    const $ = document.querySelector.bind(document)

    var btnYes = $('.btn--yes')
    var btnNo = $('.btn--no')
    var popup = $('.modal')
    var overlay = $('.modal__overlay')
    var btnClose = $('.btn-close')

    window.onload = () => {
        $('.music').play()
        $('.music').volume = 0.6
    }

    window.onkeypress = (e) => {
        if (e.charCode === 32) {
            $('.music').play()
        }
    }

    btnYes.onclick = () => {
        popup.classList.add('show')
    }

    btnClose.onclick = () => {
        popup.classList.remove('show')
    }

    overlay.onclick = () => {
        popup.classList.remove('show')
    }

    btnNo.onmouseover = (e) => {
        // console.log(e)
        var x = Math.floor(Math.random() * e.relatedTarget.clientHeight)
        var y = Math.floor(Math.random() * e.relatedTarget.clientWidth)

        btnNo.style.top = x + "px"
        btnNo.style.left = y + "px"
    }
}


start()