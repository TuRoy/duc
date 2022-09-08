var text = document.getElementById('1')
var arr = ' BABI YÊU TÚ NHẤT!!'
var html = ''
var i = 0
function anhtu() {
   setTimeout(function (){
    if (i == arr.length) {
        html = ''
        text.value = html
        i = 0
    }else {
        html += arr[i]
         i++
        text.value = html
    }
   }, 1)
}
