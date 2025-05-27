document.addEventListener('DOMContentLoaded', function () {

  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    if (window.scrollY > 100) {
      header.classList.add("active");
    } else {
      header.classList.remove("active");
    }
  });

  const pingBtn = document.querySelector('.ping-wrapper');
  if (pingBtn) {
    pingBtn.addEventListener('click', () => {
      const target = document.querySelector('.pulse');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  // document.querySelector('.ping-wrapper').addEventListener('click', () => {
  //   const target = document.querySelector('.pulse');
  //   if (target) {
  //     target.scrollIntoView({ behavior: 'smooth' });
  //   }
  // });

  const sections = [
    document.querySelector('.signal'),
    document.querySelector('.pulse'),
    document.querySelector('.vault'),
    document.querySelector('.tone'),
    document.querySelector('.ping')
  ];

  const navItems = document.querySelectorAll('.nav ul li');
  const unlockThreshold = 0.99;

  function updateLines() {
    const scrollY = window.scrollY;
    const unlocked = [];

    // 반응형 lineWidths 설정
    const isMobile = window.matchMedia('(max-width: 767px)').matches;
    const lineWidths = isMobile ? [70, 70, 65, 60] : [91, 91, 86, 83];

    const progresses = sections.map((section, index) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      const rawProgress = scrollY - sectionTop;
      const progress = Math.min(Math.max(rawProgress / sectionHeight, 0), 1);

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
      if (!li) {
        // console.warn(`navItems[${index + 1}] 없음 - JS에서 li::before 제어 중이라 무시함`);
        return;
      }
      li.style.setProperty('--line-width', `${Math.max(0, Math.min(width, max))}px`);
    });
  }

  window.addEventListener('scroll', updateLines);
  window.addEventListener('load', updateLines);
  window.addEventListener('resize', updateLines);

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
