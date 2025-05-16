const container = document.getElementById('hover-zone');

document.addEventListener('mousemove', (e) => {
  const rect = container.getBoundingClientRect();
  const dist = Math.hypot(
    e.clientX - (rect.left + rect.width / 2),
    e.clientY - (rect.top + rect.height / 2)
  );

  if (dist < 150) {
    container.classList.add('show');
  } else {
    container.classList.remove('show');
  }
});
