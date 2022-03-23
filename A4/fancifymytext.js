const bigger = document.querySelector('#bigger');
const fancyShmancy = document.querySelector('#fancy');
const boringBetty = document.querySelector('#boring');
const textArea = document.querySelector('textarea');
const moo = document.querySelector('#moo');

bigger.onclick = () => {
    textArea.style.fontSize = "24px";
};

fancyShmancy.onchange = () => {
    textArea.style.fontWeight = "bold";
    textArea.style.color = "blue";
    textArea.style.textDecoration = "underline";
}

boringBetty.onchange = () => {
    textArea.removeAttribute('style');
}

moo.onclick = () => {
    let text = textArea.value;
    text = text.toUpperCase();
    let sentences = text.split('.');
    textArea.value = sentences.join("-Moo");
}