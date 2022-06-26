const icoEl = document.getElementById('notfis-ico')
const notfieContainer = document.querySelector('.notfis')

icoEl.onclick = () => {
    notfieContainer.classList.toggle('active')
}