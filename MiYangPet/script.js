const container = document.getElementById('hover-zone');

document.addEventListener('mousemove', (e) => {
  const rect = container.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;
  const dist = Math.hypot(e.clientX - centerX, e.clientY - centerY);

  if (dist < 150) {
    container.classList.add('show');
  } else {
    container.classList.remove('show');
  }
});
