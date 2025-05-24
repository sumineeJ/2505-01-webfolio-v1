document.addEventListener('DOMContentLoaded', function () {
  const books = document.querySelectorAll('.book');
  const leftContent = document.querySelector('.left-page .detail-content');
  const rightContent = document.querySelector('.right-page .detail-content');
  const bookDetail = document.querySelector('.book-detail');

  let currentKey = null;
  const initialBackground = window.getComputedStyle(bookDetail).background;

  const contents = {
    "intro": {
      left: `
        <div class="first">
          <p>작은 고민들과 조용한 감각들을 책처럼 모아두는 공간입니다.</p>
          <p><b>책등을 눌러 한 권씩 펼쳐보세요.</b><br>
          페이지마다 천천히 머문 마음들이 담겨 있어요.</p>
        </div>
      `,
      right: `
        <div class="second">
          <img src="img/tone_img.png" alt="무드">
        </div>
      `
    },
    "star": {
      left: `
        <div>📌 『포트폴리오 메인에 별똥별을 넣은 이유?』</div>
        <p>포트폴리오의 콘셉트가 ‘신호 보내기’라서<br>
        별똥별을 통해 내가 누군가에게 닿는 느낌을 담았어요.</p>
        <p>책등을 눌러 책장을 넘겨보세요 :)</p>
      `,
      right: `
        <img src="images/star.gif" alt="별똥별 애니메이션" style="width:100%; border-radius:8px; box-shadow:0 2px 6px rgba(0,0,0,0.2);">
      `
    },
    "daily": {
      left: `
        <div>📌 『무심코 지나친 일상에서 영감을 받은 적이 있나요?』</div>
        <p>버스정류장 그림자, 자동문 열리는 속도, 손으로 만지는 버튼의 감촉...<br>
        그런 일상의 순간들이 인터랙션 디자인의 시작이 되었어요.</p>
      `,
      right: `
        <img src="images/daily.jpg" alt="일상 감성 이미지" style="width:100%; border-radius:8px;">
      `
    },
    "animation": {
      left: `
        <div>📌 『마이크로 애니메이션을 어디까지 고민했는가?』</div>
        <p>사용자의 행동에 반응하는 작고 세심한 움직임이<br>
        인터페이스를 살아 있게 만든다고 생각해요.</p>
      `,
      right: `
        <img src="images/interaction.gif" alt="애니메이션 예시" style="width:100%; border-radius:8px;">
      `
    },
    "taste": {
      left: `
        <div>📌 『디자인에서 중요하게 여기는 취향 요소가 있나요?』</div>
        <p>나는 여백과 간격을 중요하게 생각해요.<br>
        빽빽한 정보보다, 숨 쉴 틈이 있는 구성에 마음이 끌려요.</p>
      `,
      right: `
        <img src="images/taste.jpg" alt="취향 이미지" style="width:100%; border-radius:8px;">
      `
    },
    "rules": {
      left: `
        <div>📌 『작업을 할 때 스스로 세운 기준이나 원칙이 있나요?』</div>
        <p>디자인은 설득력이라고 생각해요.<br>
        그래서 모든 요소에 이유가 있어야 한다고 믿어요.</p>
      `,
      right: `
        <img src="images/rules.png" alt="룰북 노트" style="width:100%; border-radius:8px;">
      `
    },
    "accessibility": {
      left: `
        <div>📌 『접근성을 왜 이렇게 중요하게 생각하나요?』</div>
        <p>누구나 사용할 수 있어야 진짜 좋은 디자인이라고 생각해요.<br>
        특히 시각·청각 정보 외에도 다양한 방식으로 정보가 닿을 수 있도록 고민해요.</p>
      `,
      right: `
        <img src="images/a11y.png" alt="접근성 노트" style="width:100%; border-radius:8px;">
      `
    },
    "ux": {
      left: `
        <div>📌 『인상 깊었던 UX 경험은 무엇이었나요?』</div>
        <p>처음 보는 UI였지만<br>
        아무 설명 없이도 자연스럽게 조작할 수 있었던 경험이 있어요.<br>
        그건 디자이너의 배려라고 느꼈어요.</p>
      `,
      right: `
        <img src="images/ux.png" alt="UX 사례" style="width:100%; border-radius:8px;">
      `
    }
  };
  
  books.forEach(book => {
    book.addEventListener('click', () => {
      const key = book.dataset.title;

      if (currentKey === key) {
        currentKey = null;
        leftContent.innerHTML = contents["intro"].left;
        rightContent.innerHTML = contents["intro"].right;
        bookDetail.style.background = initialBackground;
        return;
      }

      currentKey = key;
      const data = contents[key];
      leftContent.innerHTML = data?.left || '';
      rightContent.innerHTML = data?.right || '';

      const bg = window.getComputedStyle(book).background;
      bookDetail.style.background = bg;
    });
  });

  // 첫 진입 시 인트로 내용 세팅
  leftContent.innerHTML = contents["intro"].left;
  rightContent.innerHTML = contents["intro"].right;
});