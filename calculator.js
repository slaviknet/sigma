function sum() {
    let input =  parseFloat(document.getElementById('input').value)
    let input2 =  parseFloat(document.getElementById('input2').value)
    let c = input + input2
    document.getElementById('br').innerHTML = c
    let rez = ''
    rez += c
    document.getElementById('rez').innerHTML = rez
    if(c == NaN) {
        alert("Введите конкретные значения")
    }
}
function minus() {
    let input =  parseFloat(document.getElementById('input').value)
    let input2 =  parseFloat(document.getElementById('input2').value)
    let c = input - input2
    document.getElementById('br').innerHTML = c
}
function ymno() {
    let input =  parseFloat(document.getElementById('input').value)
    let input2 =  parseFloat(document.getElementById('input2').value)
    let c = input * input2
    document.getElementById('br').innerHTML = c
}
function delen() {
    let input =  parseFloat(document.getElementById('input').value)
    let input2 =  parseFloat(document.getElementById('input2').value)
    let c = input / input2
    document.getElementById('br').innerHTML = c
}
