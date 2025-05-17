document.addEventListener('DOMContentLoaded', function () {

  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    if (window.scrollY > 100) {
      header.classList.add("active");
    } else {
      header.classList.remove("active");
    }
  });

  const sections = [
    document.querySelector('.signal'),
    document.querySelector('.pulse'),
    document.querySelector('.vault'),
    document.querySelector('.tone'),
    document.querySelector('.ping')
  ];

  const navItems = document.querySelectorAll('.nav ul li');
  const lineWidths = [91, 91, 86, 83];
  const unlockThreshold = 0.99;

  function updateLines() {
    const scrollY = window.scrollY;
    const unlocked = [];

    const progresses = sections.map((section, index) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      // ✅ 선 그리기용 진행률 계산 (그대로 유지)
      const rawProgress = scrollY - sectionTop;
      const progress = Math.min(Math.max(rawProgress / sectionHeight, 0), 1);

      // ✅ active 처리: 윈도우 상단에 해당 섹션의 top이 닿으면 바로 활성화
      const li = navItems[index];
      if (scrollY >= sectionTop) {
        li.classList.add('active');
      } else {
        li.classList.remove('active');
      }

      return progress;
    });

    unlocked[0] = true;
    for (let i = 1; i < progresses.length; i++) {
      unlocked[i] = progresses[i - 1] >= unlockThreshold;
    }

    progresses.forEach((progress, index) => {
      const li = navItems[index + 1]; // +1: Signal 제외
      const max = lineWidths[index];
      const canDraw = unlocked[index];
      const width = canDraw ? max * progress : 0;
      li.style.setProperty('--line-width', `${Math.max(0, Math.min(width, max))}px`);
    });
  }

  window.addEventListener('scroll', updateLines);
  window.addEventListener('load', updateLines);
  window.addEventListener('resize', updateLines);

  //const navItems = document.querySelectorAll('.nav ul li');

  navItems.forEach(item => {
    item.addEventListener('click', function () {
      const targetClass = this.getAttribute('data-target');
      const targetEl = document.querySelector(targetClass);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

});
