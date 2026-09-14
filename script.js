const toggle=document.querySelector('.nav-toggle');
const navLinks=document.querySelector('.nav-links');
toggle.addEventListener('click',()=>{const open=navLinks.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));});
document.querySelectorAll('.nav-links a').forEach(link=>link.addEventListener('click',()=>{navLinks.classList.remove('open');toggle.setAttribute('aria-expanded','false');}));
const links=document.querySelectorAll('.nav-links a[href^="#"]');
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting)links.forEach(link=>link.classList.toggle('active',link.getAttribute('href')===`#${entry.target.id}`));}),{rootMargin:'-35% 0px -55%'});
document.querySelectorAll('main section[id]').forEach(section=>observer.observe(section));
document.querySelector('#year').textContent=new Date().getFullYear();
