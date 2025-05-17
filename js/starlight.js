document.addEventListener('DOMContentLoaded', function () {

  function createStars() {
    const numStars = 40;

    $(".star_box").each(function () {
      const $container = $(this);
      $container.empty(); // 혹시 기존 별 제거

      for (let i = 0; i < numStars; i++) {
        let size = Math.random() * 2 + 1;
        let isYellow = Math.random() > 0.5;
        let color = isYellow ? "rgba(255, 255, 204, 0.8)" : "#ffffff";

        let $star = $("<div>").addClass("star").css({
          width: size + "px",
          height: size + "px",
          backgroundColor: color,
          boxShadow: `0 0 ${size * 3}px ${color}`,
          position: "absolute", // 중요!
          top: Math.random() * 98 + "%",
          left: Math.random() * 98 + "%",
          animationDuration: (Math.random() * 2 + 2) + "s",
          animationDelay: Math.random() * 3 + "s"
        });

        $container.append($star);
      }
    });
  }

  createStars();


  const heroWrapper = document.querySelector('.signal');
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  canvas.width = heroWrapper.clientWidth;
  canvas.height = heroWrapper.clientHeight;

  class ShootingStar {
    constructor() {
      this.reset();
    }

    reset() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height * 0.5;

      // 시작 속도 및 가속도 설정 (점점 빨라짐)
      this.speed = 4 + Math.random() * 1.5;
      this.acceleration = 0.65 + Math.random() * 0.07;

      // 45도 방향으로 떨어지게
      this.angle = (Math.PI / 180) * 45;

      this.trail = [];
      this.maxTrailLength = 25; // 꼬리 길이
      this.done = false;
    }

    update() {
      // 속도 점점 증가 (가속도)
      this.speed += this.acceleration;

      this.x -= this.speed * Math.cos(this.angle);
      this.y += this.speed * Math.sin(this.angle);
      this.trail.unshift({ x: this.x, y: this.y });

      if (this.trail.length > this.maxTrailLength) {
        this.trail.pop();
      }

      // 화면 벗어나면 제거 표시
      if (this.x < -200 || this.y > canvas.height + 200) {
        this.done = true;
      }
    }

    draw(ctx) {
      for (let i = 0; i < this.trail.length - 1; i++) {
        const a = this.trail[i];
        const b = this.trail[i + 1];
        const alpha = (1 - i / this.trail.length) ** 2; // 필압 느낌

        // 🎨 별똥별 색상 (여기 바꾸면 됨!)
        const color = `rgba(150, 180, 255, ${alpha})`;

        ctx.strokeStyle = color;
        ctx.lineWidth = 1; // 선 두께 조절 (작게)
        ctx.shadowBlur = 6; // 블러 효과
        ctx.shadowColor = color;

        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();

        // 블러 초기화 (다른 요소에 영향 안 주도록)
        ctx.shadowBlur = 0;
        ctx.shadowColor = 'transparent';
      }
    }
  }

  const stars = [];

  // ⭐ 랜덤 등장 타이머 (1~10초, 한 번에 1개만)
  let lastSpawn = Date.now();
  let nextDelay = 1000 + Math.random() * 9000; // 1~10초 랜덤

  function launchIfReady() {
    const now = Date.now();
    if (now - lastSpawn >= nextDelay) {
      stars.push(new ShootingStar()); // 한 번에 1개만 생성
      lastSpawn = now;
      nextDelay = 1000 + Math.random() * 9000; // 다음 간격 재설정
    }
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // ✨ 화면 깨끗하게 유지

    launchIfReady(); // 별 생성 조건 체크

    stars.forEach(star => {
      star.update();
      star.draw(ctx);
    });

    // 끝난 별 제거
    for (let i = stars.length - 1; i >= 0; i--) {
      if (stars[i].done) stars.splice(i, 1);
    }

    requestAnimationFrame(animate);
  }

  animate();

  window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });




  const orbit = document.getElementById('orbit');
const wrapper = document.getElementById('imgWrapper');
let angle = 0;
let prevX = null;

function orbitAnimate() {
  angle += 0.5;
  const rad = angle * (Math.PI / 180);
  const r = 170;
  const offset = -20;

  const x = r * Math.cos(rad) + offset;
  const y = r * Math.sin(rad);

  // 방향에 따라 부모인 .planet-orbit의 z-index를 바꾼다!
  if (prevX !== null) {
    if (x > prevX) {
      orbit.style.zIndex = '0'; // 뒤로
    } else {
      orbit.style.zIndex = '3'; // 앞으로
    }
  }
  prevX = x;

  wrapper.style.transform = `translate3d(${x}px, ${y}px, 0) rotateX(-75deg)`;
  requestAnimationFrame(orbitAnimate);
}

orbitAnimate();


});