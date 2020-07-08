function fn() {
    var con_list = document.getElementsByClassName('con-list')[0]
    var h2 = con_list.getElementsByTagName('h2')
    for (var i = 0; i < h2.length; i++) {
        h2[i].onclick = function () {
            for (var j = 0; j < h2.length; j++) {
                h2[j].className = ''
                h2[j].firstElementChild.nextElementSibling.innerHTML = '+'
            }
            this.className = 'active'
            var a = this.getAttribute('bb')
            if (this.firstElementChild.nextElementSibling.innerHTML = '+') {
                this.firstElementChild.nextElementSibling.innerHTML = '-'
            }
        }
    }
}
fn()