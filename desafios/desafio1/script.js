const body = document.querySelector('body')
const icon = document.querySelector('.icon')
const message = document.querySelector('.message')
const output = document.querySelector('output')


const setHour = 19
const setMinute = new Date().getMinutes()

if (setMinute < 10) {
    output.innerHTML = setHour + 'h0' + setMinute
} else {
    output.innerHTML = setHour + 'h' + setMinute
} 

if (setHour < 12) {
    body.style.background = '#F7F5EB'
    icon.innerHTML = '☀️'
    message.innerHTML = 'Good morning'
    message.classList = 'message morning'

} else if (setHour > 11 && setHour < 19) {
    body.style.background = '#EAFDFC'
    icon.innerHTML = '☁️'
    message.innerHTML = 'Good afternoon'
    message.classList = 'message afternoon'

} else {
    body.style.background = '#1A1A23'
    icon.innerHTML = '🌙'
    message.innerHTML = 'Good night'
    message.classList = 'message night'
}
