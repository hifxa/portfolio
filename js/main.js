// Minimal JS: nav toggle, year, copy email, smooth scroll
document.addEventListener('DOMContentLoaded', function(){
  const toggle = document.getElementById('nav-toggle');
  const nav = document.getElementById('nav');
  toggle && toggle.addEventListener('click', ()=>{
    if(nav.style.display === 'block') nav.style.display = '';
    else nav.style.display = 'block';
  });

  // Insert current year
  const y = document.getElementById('year');
  if(y) y.textContent = new Date().getFullYear();

  // Copy email button
  const copyBtn = document.getElementById('copy-email');
  copyBtn && copyBtn.addEventListener('click', ()=>{
    navigator.clipboard?.writeText('your.email@example.com').then(()=>{
      copyBtn.textContent = 'Copied!';
      setTimeout(()=> copyBtn.textContent = 'Copy email', 2000);
    }).catch(()=>{
      alert('Please copy manually: your.email@example.com');
    });
  });

  // Smooth scrolling for internal links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', e=>{
      const href = a.getAttribute('href');
      if(href.length > 1){
        e.preventDefault();
        const el = document.querySelector(href);
        if(!el) return;

        // update active nav link
        document.querySelectorAll('.nav a').forEach(nav=>nav.classList.remove('active'));
        a.classList.add('active');

        // smooth scroll to section
        el.scrollIntoView({behavior:'smooth', block:'start'});

        // add a subtle flash animation to the section to draw attention
        el.classList.remove('page-flash');
        void el.offsetWidth; // force reflow to restart animation
        el.classList.add('page-flash', 'page-focus');

        // remove focus/flash after animation ends
        const clean = ()=>{
          el.classList.remove('page-flash');
          setTimeout(()=> el.classList.remove('page-focus'), 200);
          el.removeEventListener('animationend', clean);
        };
        el.addEventListener('animationend', clean);
      }
    });
  });
});
