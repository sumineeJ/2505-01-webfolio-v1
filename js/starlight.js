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




  // orbit & wrapper
  const orbit_record = document.getElementById('orbit_record');
  const imgWrapper_record = document.getElementById('imgWrapper_record');

  const orbit_emotion = document.getElementById('orbit_emotion');
  const imgWrapper_emotion = document.getElementById('imgWrapper_emotion');

  const orbit_storage = document.getElementById('orbit_storage');
  const imgWrapper_storage = document.getElementById('imgWrapper_storage');

  // angle + prevX
  let angle_record = 0;
  let prevX_record = null;

  let angle_emotion = 120;
  let prevX_emotion = null;

  let angle_storage = 240;
  let prevX_storage = null;

  // 속도, 반지름, 오프셋
  const speed_record = 0.5;
  const r_record = 150;
  const offset_record = -20;

  const speed_emotion = 0.8;
  const r_emotion = 130;
  const offset_emotion = 0;

  const speed_storage = 0.3;
  const r_storage = 170;
  const offset_storage = -10;

  function orbitAnimate() {
    // 각도 증가
    angle_record += speed_record;
    angle_emotion += speed_emotion;
    angle_storage += speed_storage;

    // 라디안 변환
    const rad_r = angle_record * (Math.PI / 180);
    const rad_e = angle_emotion * (Math.PI / 180);
    const rad_s = angle_storage * (Math.PI / 180);

    // 좌표 계산
    const x_r = r_record * Math.cos(rad_r) + offset_record;
    const y_r = r_record * Math.sin(rad_r);

    const x_e = r_emotion * Math.cos(rad_e) + offset_emotion;
    const y_e = r_emotion * Math.sin(rad_e);

    const x_s = r_storage * Math.cos(rad_s) + offset_storage;
    const y_s = r_storage * Math.sin(rad_s);

    // z-index 조절 (x가 줄어들면 앞으로, 늘어나면 뒤로)
    if (prevX_record !== null) {
      orbit_record.style.zIndex = x_r > prevX_record ? '0' : '3';
    }
    prevX_record = x_r;

    if (prevX_emotion !== null) {
      orbit_emotion.style.zIndex = x_e > prevX_emotion ? '0' : '3';
    }
    prevX_emotion = x_e;

    if (prevX_storage !== null) {
      orbit_storage.style.zIndex = x_s > prevX_storage ? '0' : '3';
    }
    prevX_storage = x_s;

    // transform 적용 (이미지는 정면)
    imgWrapper_record.style.transform = `translate3d(${x_r}px, ${y_r}px, 0) rotateX(-75deg)`;
    imgWrapper_emotion.style.transform = `translate3d(${x_e}px, ${y_e}px, 0) rotateX(-65deg)`;
    imgWrapper_storage.style.transform = `translate3d(${x_s}px, ${y_s}px, 0) rotateX(-60deg)`;

    requestAnimationFrame(orbitAnimate);
  }

  orbitAnimate();




});