window.addEventListener('load', () => {
  const hero = document.querySelector('.hero');
  const heroWrapper = document.querySelector('.signal');
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");

  function setCanvasSize() {
    canvas.width = heroWrapper.clientWidth || window.innerWidth;
    canvas.height = heroWrapper.clientHeight || window.innerHeight;
    console.log('✅ canvas size:', canvas.width, canvas.height);
  }

  class ShootingStar {
    constructor() {
      this.x = canvas.width / 2;
      this.y = canvas.height / 2;
      console.log(`🌟 ShootingStar 생성 위치: x=${this.x}, y=${this.y}`);
      this.speed = 5;
      this.acceleration = 0.5;
      this.angle = (Math.PI / 180) * 45;
      this.trail = [];
      this.maxTrailLength = 25;
      this.done = false;
    }

    update() {
      this.speed += this.acceleration;
      this.x -= this.speed * Math.cos(this.angle);
      this.y += this.speed * Math.sin(this.angle);
      this.trail.unshift({ x: this.x, y: this.y });
      if (this.trail.length > this.maxTrailLength) this.trail.pop();
      if (this.x < -200 || this.y > canvas.height + 200) this.done = true;
    }

    draw() {
      for (let i = 0; i < this.trail.length - 1; i++) {
        const a = this.trail[i];
        const b = this.trail[i + 1];
        const alpha = (1 - i / this.trail.length) ** 2;
        const color = `rgba(150,180,255,${alpha})`;
        ctx.strokeStyle = color;
        ctx.lineWidth = 1;
        ctx.shadowBlur = 6;
        ctx.shadowColor = color;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
        ctx.shadowBlur = 0;
        ctx.shadowColor = 'transparent';
      }

      if (this.trail[0]) {
        console.log(`📍 현재 위치: x=${this.trail[0].x}, y=${this.trail[0].y}`);
      }
    }
  }

  function animateOnce() {
    console.log('🌠 별똥별 시작!');
    const star = new ShootingStar();

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      if (!star.done) {
        star.update();
        star.draw();
        requestAnimationFrame(animate);
      } else {
        console.log('🛑 별똥별 끝!');
      }
    }

    animate();
  }

  setCanvasSize();
  window.addEventListener("resize", setCanvasSize);

  // splash 관련 처리
  setTimeout(() => {
    const splash = document.querySelector('.splash'); // ✨ 이 시점에서 다시 찾기!
    if (splash) {
      document.body.classList.remove('loading');
      splash.classList.add('fade-out');

      setTimeout(() => {
        splash.remove();
        hero.classList.add('show');

        setCanvasSize(); // 다시 캔버스 크기 설정
        animateOnce(); // ⭐ 별똥별 시작
      }, 1000);
    } else {
      console.warn('⚠️ splash 요소가 이미 사라져 있음!');
      // 그래도 별똥별은 실행해도 됨
      setCanvasSize();
      animateOnce();
    }
  }, 2000);
});
