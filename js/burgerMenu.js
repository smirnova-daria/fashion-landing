export default function openBurgerMenu() {
    const burgerBtn = document.querySelector('.burger-menu')

    const handleClick = () => {
        burgerBtn.classList.toggle('active')
    }
    burgerBtn.addEventListener('click', handleClick)
}
