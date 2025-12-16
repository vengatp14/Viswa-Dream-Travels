window.addEventListener("load", () => {
  const indiaFilterBtns = document.querySelectorAll('.vd-india-filter-pill');
  const indiaPackages = document.querySelectorAll('.vd-india-package-item');

  if (!indiaFilterBtns.length || !indiaPackages.length) {
    console.warn("India filter buttons or packages not found!");
    return;
  }

  indiaFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter.toLowerCase();

      // Update active class
      indiaFilterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Show/hide packages
      indiaPackages.forEach(item => {
        const category = item.dataset.category.toLowerCase();
        if (filter === 'all' || category === filter) {
          item.classList.remove('hide');
        } else {
          item.classList.add('hide');
        }
      });
    });
  });
});


