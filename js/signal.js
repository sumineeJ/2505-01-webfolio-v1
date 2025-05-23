document.addEventListener('DOMContentLoaded', function () {
  let showColon = true;

  function formatTime(date, showColon) {
    let hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    const hh = hours.toString().padStart(2, '0');
    const colon = showColon ? ':' : ' ';
    return `${hh}${colon}${minutes}${ampm}`;
  }

  function updateLogTime() {
    const now = new Date();
    const year = now.getFullYear();
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const day = now.getDate().toString().padStart(2, '0');
    const time = formatTime(now, showColon);

    const logText = `LOGGED: ${year}.${month}.${day} / ${time}<br>COORDINATES: SECURE`;
    document.getElementById('log-text').innerHTML = logText;

    showColon = !showColon;
  }

  // 1초마다 실행
  setInterval(updateLogTime, 1000);
  updateLogTime(); // 처음 한번 실행



  const findX = document.getElementById('find-x');
  const findY = document.getElementById('find-y');
  const constellation = document.querySelector('.constellation');

  constellation.addEventListener('mouseenter', () => {
    findX.style.color = '#C4BDF3'; // 바꾸고 싶은 색
    findY.style.color = '#C4BDF3';
  });

  constellation.addEventListener('mouseleave', () => {
    findX.style.color = ''; // 원래 스타일로 복귀 (CSS 값)
    findY.style.color = '';
  });

  // 좌표 갱신 스크립트
  document.addEventListener('mousemove', function(e) {
    const x = e.clientX.toFixed(4);
    const y = e.clientY.toFixed(4);
    findX.textContent = x.padStart(7, '0');
    findY.textContent = y.padStart(7, '0');
  });

});