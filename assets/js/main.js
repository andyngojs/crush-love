$(document).ready(function() {
    setTimeout(function() {
        $('.spinner').fadeOut()
        $('#preloader').delay(350).fadeOut('slow')
        $('body').delay(350).css({
            'overflow': 'visible'
        })
    }, 600)
})

function start() {
    var btnYes = document.querySelector('.btn--yes')
    var btnNo = document.querySelector('.btn--no')
    var btnOpen = document.querySelector('.btn--open')
    var popup = document.querySelector('.modal')
    var overlay = document.querySelector('.modal__overlay')
    var btnClose = document.querySelector('.btn-close')

    window.onload = () => {
        document.querySelector('.music').play()
        document.querySelector('.music').volume = 1
    }

    window.onkeypress = (e) => {
        if (e.charCode === 32) {
            document.querySelector('.music').play()
        }
    }

    document.querySelector('.header').innerHTML = `
        <h1 class="header-name">
            Làm Người Yêu Tớ Nhé ? ^^ I Love You
            <i class="ti-heart"></i>
        </h1>
        <p class="header-description">Nếu cậu thoát ra và không trả lời thì có nghĩa là cậu đã ĐỒNG Ý rồi đấy ^^
            <i class="ti-face-smile"></i>
        </p>`


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
        var x = Math.random() * e.relatedTarget.clientHeight * 0.9
        var y = Math.random() * e.relatedTarget.clientWidth * 0.9
        btnNo.style.top = x + "px"
        btnNo.style.right = y + "px"
    }

}
start()

