document.querySelectorAll('.image-comparison').forEach((comparison) => {
  const slider = comparison.querySelector('.image-comparison__slider');
  const update = () =>
    comparison.style.setProperty('--position', `${slider.value}%`);
  const move = (event) => {
    const rect = comparison.getBoundingClientRect();
    slider.value = Math.max(
      0,
      Math.min(100, ((event.clientX - rect.left) / rect.width) * 100),
    );
    update();
  };
  slider.addEventListener('input', update);
  comparison.addEventListener('pointerdown', (event) => {
    if (event.button !== 0) return;
    comparison.setPointerCapture(event.pointerId);
    move(event);
  });
  comparison.addEventListener('pointermove', (event) => {
    if (comparison.hasPointerCapture(event.pointerId)) move(event);
  });
  update();
});
