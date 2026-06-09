    function showPage(name, link) {
      document.querySelectorAll('.page-section').forEach(s => s.classList.remove('active'));
      document.getElementById('sec-' + name).classList.add('active');
      document.querySelectorAll('#navbar li a').forEach(a => a.classList.remove('active'));
      if (link) link.classList.add('active');
      window.scrollTo({ top:0, behavior:'smooth' });
    }
