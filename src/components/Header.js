import react from 'react'
import './Header.css' 
function Header() {
    {/* 
    document.querySelector('.search-bar').addEventListener('input', search);
function search(e) {
    const val = e.target.value;
    const countryName = document.querySelectorAll('#imagetype');
    console.log(val);
    

    countryName.forEach(name => {
        console.log(name.innerText);

        if (name.innerText.toLowerCase().includes(val.toLowerCase())) {
            name.parentElement.parentElement.style.display = 'block';
        } else {
            name.parentElement.parentElement.style.display = 'none';
        }   
    })*/}
    return (
        <nav className='header'>
            <h2>Search Photos</h2>
            <input type='text' className= 'search-bar'  /> 
        </nav>
    )
}


export default Header