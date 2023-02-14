const btn = document.querySelector('.js-btn');
const icon1 = document.querySelector('.icon1');
const icon2 = document.querySelector('.icon2');

btn.addEventListener('click', () => {
  if(icon1.classList.toggle('icon2')) {
    icon2.style.display = 'block' 
}else{
  icon2.style.display = 'none';
                     }})
