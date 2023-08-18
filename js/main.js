const nav = document.querySelector('.navbar-collapse')
const actualDate = document.querySelector('.actual-date');

document.addEventListener('click', () => {
    if (nav.classList.contains('show')) {
        nav.classList.remove('show')
    }
})

const handleCurrentYear = () => {
  const year = (new Date).getFullYear();
  actualDate.innerText = year;
}
handleCurrentYear();