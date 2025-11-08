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
        el && el.scrollIntoView({behavior:'smooth', block:'start'});
      }
    });
  });
});
