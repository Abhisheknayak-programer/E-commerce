// Nav Bar Function
const NavFunction = () => {
    const nav = document.querySelector('.nav-links');
    const btn = document.querySelector('.burger');
    const navLinks = document.querySelectorAll('.nav-links li');

    btn.addEventListener("click",(()=>{
        nav.classList.toggle("nav-active");
        // HamBurger Toggler
        btn.classList.toggle("toogle");
    }))


}

NavFunction();


