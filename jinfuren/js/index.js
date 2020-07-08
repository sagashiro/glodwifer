var btns = document.getElementsByTagName('button');
var img = document.getElementsByClassName('banner-img')
var lis = document.getElementsByTagName('li')
var wrap = document.getElementsByClassName('wrap-banner')[0]
var j = 0
for (var i = 0; i < btns.length; i++) {
    btns[i].onclick = function () {
        for (var i = 0; i < img.length - 1; i++) {
            lis[i].className = ''
            img[i].style.opacity = '0'
        }
        if (this.innerHTML == '&gt;') {
            j++
            if (j == 3) {
                j = 0
            }
            img[j].style.opacity = '1'
            lis[j].className = 'active'
            x()
        } else {
            j--
            if (j == -1) {
                j = 2
            }
            img[j].style.opacity = '1'
            lis[j].className = 'active'
            x()
        }
    }
}

function x() {
    for (var i = 0; i < img.length - 1; i++) {
        lis[i].onclick = function () {
            for (var i = 0; i < img.length - 1; i++) {
                lis[i].className = ''
                img[i].style.opacity = '0'
            }
            var a = this.getAttribute('hh')
            this.className = 'active'
            img[a].style.opacity = '1'
            j = a;
        }
    }
}
x();

timer = setInterval(function () {
    for (var i = 0; i < img.length - 1; i++) {
        lis[i].className = ''
        img[i].style.opacity = '0'
    }
    j++
    if (j == 3) {
        j = 0
    }
    img[j].style.opacity = '1'
    lis[j].className = 'active'
}, 3000)
wrap.onmouseover = function () {
    clearInterval(timer);
    timer = null;
}
wrap.onmouseout = function () {
    timer = setInterval(function () {
        for (var i = 0; i < img.length - 1; i++) {
            lis[i].className = ''
            img[i].style.opacity = '0'
        }
        j++
        if (j == 3) {
            j = 0
        }
        img[j].style.opacity = '1'
        lis[j].className = 'active'
    }, 3000)
}