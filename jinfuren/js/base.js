function fn() {
    var con_list = document.getElementsByClassName('con-list')[0]
    var h2 = con_list.getElementsByTagName('h2')
    var divs = con_list.getElementsByTagName('div')
    for (var i = 0; i < h2.length; i++) {
        h2[i].onclick = function () {
            for (var j = 0; j < h2.length; j++) {
                h2[j].className = ''
                divs[j].className = ''
                h2[j].firstElementChild.nextElementSibling.innerHTML = '+'
            }
            this.className = 'active'
            var a = this.getAttribute('bb')
            divs[a].className = 'active'
            if (this.firstElementChild.nextElementSibling.innerHTML = '+') {
                this.firstElementChild.nextElementSibling.innerHTML = '-'
            }
        }
    }
    for (var i = 0; i < divs.length; i++) {
        var as = divs[i].children
        for (var j = 0; j < as.length; j++) {
            as[j].onclick = function () {
                var ss = this.parentNode.children
                for (var u = 0; u < ss.length; u++) {
                    ss[u].style.color = '#666'
                }
                this.style.color = '#8d2c33'
            }
        }
    }
}
fn()