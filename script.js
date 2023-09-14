// Add JavaScript code here

const buttons = document.querySelectorAll('.btn');

const textarea = document.querySelector('textarea');

const delete_btn = document.querySelector('.delete');

const space_btn = document.querySelector('.space');

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        if (textarea.value.length <= 9) {
            console.log(textarea.value.length)
            textarea.value += btn.innerText
            chars = textarea.value.split('')
        }
    })
})

delete_btn.addEventListener('click', () => {
    chars.pop()
    textarea.value = chars.join('')
})
space_btn.addEventListener('click', () => {
    chars.push(' ')
    textarea.value = chars.join('')
})