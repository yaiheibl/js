let input = document.getElementById('inp');
let button = document.getElementById('but');
let block = document.getElementById('div1')

let func = () => {
    let text = input.value
    if(text) block.innerHTML = text
}
button.onclick = func

