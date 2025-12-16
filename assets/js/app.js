    // Remove preloader after page load
    window.addEventListener("load", function () {
      const preloader = document.getElementById("vd-preloader");
      if (preloader) {
        preloader.style.opacity = "0";
        setTimeout(() => preloader.remove(), 400);
      }
    });

    // Current year
    document.getElementById("vdYear").textContent = new Date().getFullYear();

    // Fade-in scroll animations
    const animatedEls = document.querySelectorAll('.vd-animate');
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('vd-animate-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    animatedEls.forEach(el => io.observe(el));

    // Package filter
    const filterButtons = document.querySelectorAll('.vd-filter-pill');
    const packageItems = document.querySelectorAll('.vd-package-item');
    filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const filter = btn.getAttribute('data-filter');
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        packageItems.forEach(card => {
          const categories = card.getAttribute('data-category').split(' ');
          if (filter === 'all' || categories.includes(filter)) {
            card.style.display = '';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });

    // Highlight active bottom nav on scroll
    const sections = ['hero', 'services', 'packages', 'about-company', 'contact'];
    const bottomLinks = document.querySelectorAll('.vd-bottom-nav .nav-link');
    window.addEventListener('scroll', () => {
      let current = 'hero';
      sections.forEach(id => {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          current = id;
        }
      });
      bottomLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === '#' + current);
      });
    });

       // THEME TOGGLE FUNCTIONALITY
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = document.getElementById('themeIcon');
    const body = document.body;

    // Check saved preference or default to light
    if (localStorage.getItem('theme') === 'dark') {
      body.classList.remove('light-mode');
      themeIcon.classList.replace('bi-sun-fill', 'bi-moon-fill');
    } else {
      body.classList.add('light-mode');
      themeIcon.classList.add('bi-sun-fill');
    }

    themeToggle.addEventListener('click', () => {
      if (body.classList.contains('light-mode')) {
        // Switch to dark
        body.classList.remove('light-mode');
        themeIcon.classList.replace('bi-sun-fill', 'bi-moon-fill');
        localStorage.setItem('theme', 'dark');
      } else {
        // Switch to light
        body.classList.add('light-mode'); 
        themeIcon.classList.replace('bi-moon-fill', 'bi-sun-fill');
        localStorage.setItem('theme', 'light');
      }
    });

    // ALL EXISTING SCRIPTS (preloader, animations, filters, etc.)
    window.addEventListener("load", function () {
      const preloader = document.getElementById("vd-preloader");
      if (preloader) {
        preloader.style.opacity = "0";
        setTimeout(() => preloader.remove(), 400);
      }
    });
    

document.querySelectorAll('.toggle-accordion').forEach(btn => {
  btn.addEventListener('click', function() {
    const targetID = this.getAttribute('data-bs-target');
    const target = document.querySelector(targetID);
    
    // Toggle Bootstrap collapse manually
    const bsCollapse = new bootstrap.Collapse(target, {
      toggle: true
    });

    // Change the icon
    const icon = this.querySelector('i');
    if (target.classList.contains('show')) {
      icon.classList.remove('bi-chevron-up');
      icon.classList.add('bi-chevron-down');
    } else {
      icon.classList.remove('bi-chevron-down');
      icon.classList.add('bi-chevron-up');
    }
  });
});

const enquiryForm = document.getElementById("vdEnquiryForm");

enquiryForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("vdName").value.trim();
  const phone = document.getElementById("vdPhone").value.trim();
  const email = document.getElementById("vdEmail").value.trim();
  const location = document.getElementById("vdLocation").value.trim();
  const tripType = document.getElementById("vdTripType").value;
  const message = document.getElementById("vdMessage").value.trim();

  if (!name || !phone) {
    alert("Please enter name and mobile number");
    return;
  }

  const text = encodeURIComponent(
    "New travel enquiry from website:\n\n" +
    "Name: " + name + "\n" +
    "Mobile/WhatsApp: " + phone + "\n" +
    "Email: " + email + "\n" +
    "City: " + location + "\n" +
    "Trip type: " + tripType + "\n" +
    "Message: " + message
  );

  //OPEN WHATSAPP (USER ACTION → NOT BLOCKED)
  window.open(
    "https://wa.me/919944429499?text=" + text,
    "_blank"
  );

  //CLOSE MODAL
  const modalEl = document.getElementById("vdEnquiryModal");
  bootstrap.Modal.getOrCreateInstance(modalEl).hide();

  //RESET FORM
  enquiryForm.reset();
});
