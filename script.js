function generateHearts() {
  for (let i = 0; i < 20; i++) {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.innerHTML = '❤️';

    // Расположение по всей странице
    heart.style.left = Math.random() * 100 + 'vw'; // по горизонтали (виндоверс)
    heart.style.top = Math.random() * 100 + 'vh'; // по вертикали (вьюпорт-вер)

    heart.style.animationDelay = Math.random() * 2 + 's';

    document.body.appendChild(heart);

    // Удаляет сердечко через 3 секунды
    setTimeout(() => {
      if (heart.parentNode) {
        heart.parentNode.removeChild(heart);
      }
    }, 3000);
  }
}