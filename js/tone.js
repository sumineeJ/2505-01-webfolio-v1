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
        <div>📌 포트폴리오 메인에 별똥별을 넣은 이유?</div>
        <p>
          밤하늘을 좋아해서<br>
          처음부터 별은 꼭 넣고 싶다고 생각했어요.<br>
          <br>
          가만히 반짝이는 것도 좋지만<br>
          별똥별은 잠깐이지만 눈길이 가고,<br>
          괜히 소원도 빌고 싶게 만드는 게 있잖아요.<br>
          <br>
          그래서 별똥별이 떨어지는 연출을 넣었고,<br>
          그게 단순히 예쁜 걸 넘어서<br>
          포트폴리오의 시작을 알리는 신호처럼 느껴졌으면 했어요.<br>
          보는 분들도 그 장면을 보면서<br>
          기분이 조금이라도 좋아졌으면 하는 마음도 있었고요.<br>
          <br>
          처음에 나오는 큰 별똥별은<br>
          사실 시선 끌고 싶어서 넣은 거긴 해요.<br>
          그래도 결과적으로는 시작을 알리는 역할이 되어 줬다고 생각해요.
        </p>
      `,
      right: `
        <img src="images/star.gif" alt="별똥별 애니메이션" style="width:100%; border-radius:8px; box-shadow:0 2px 6px rgba(0,0,0,0.2);">
      `
    },
    "daily": {
      left: `
        <div>📌 무심코 지나친 일상에서 영감을 받은 적이 있나요?</div>
        <p>
          사실 저는 밖에서 뭔가를 보고 영감을 받는 경우는 많지 않아요.<br>
          <br>
          오히려 멍하니 있을 때, 혼자만의 생각에 빠져 있을 때<br>
          갑자기 머릿속에 ‘완성본’이 뿅 하고 떠오르는 편이에요.<br>
          처음엔 그냥 이미지처럼 머릿속에 생겨서,<br>
          그걸 보고 역으로<br>
          “왜 이런 게 나왔지?”, “이걸 어떻게 설명하지?” 하면서<br>
          기획을 정리해 가요.<br>
          <br>
          어떻게 보면 좀 반대로 움직이는 흐름인데,<br>
          저는 항상 그렇게 시작되는 경우가 많아요.<br>
          <br>
          대신 구현할 땐 현실로 가져오기 위해<br>
          디자인 참고 자료나 레퍼런스는<br>
          가능한 많이 찾아보려고 해요.<br>
          내 머릿속에만 있는 그 장면을<br>
          다른 사람도 볼 수 있게 만들고 싶어서요.
        </p>
      `,
      right: `
        <img src="images/daily.jpg" alt="일상 감성 이미지" style="width:100%; border-radius:8px;">
      `
    },
    "animation": {
      left: `
        <div>📌 마이크로 애니메이션을 어디까지 고민했는가?</div>
        <p>
          이게 제 고질병 같은 건데요,<br>
          너무 사소한 부분까지 신경 쓰다가<br>
          작업이 자꾸 늦어질 때가 있어요.<br>
          <br>
          “여기까지 굳이 해야 해?” 싶은 것도<br>
          막상 제가 보면 계속 신경 쓰여서 결국 해 버려요.<br>
          <br>
          예를 들면 지금 포트폴리오 페이지에<br>
          섹션마다 같은 위치에 별이 반짝이는데,<br>
          그게 반복되는 게 너무 거슬려서<br>
          각 섹션마다 별을 따로 찍어서 다르게 만들었어요.<br>
          아마 다른 분들은 잘 모르실 거예요.<br>
          근데 저는 그걸 알잖아요.<br>
          <br>
          그리고 페이지 진행 정도를 보여주는 방식도<br>
          단순히 바(Bar)로 넣으면 재미가 없을 것 같아서<br>
          네비게이션에 별자리를 넣고<br>
          스크롤할수록 별이 하나씩 찍혀서<br>
          별자리가 완성되는 연출을 넣었어요.<br>
          <br>
          누가 봐도 흔한 방식일 수 있지만,<br>
          저한테는 하나하나 너무 소중한 요소들이에요.<br>
          그걸 잘 녹여냈다고 생각하면<br>
          그 순간만큼은 좀 뿌듯해요.
        </p>
      `,
      right: `
        <img src="images/interaction.gif" alt="애니메이션 예시" style="width:100%; border-radius:8px;">
      `
    },
    "taste": {
      left: `
        <div>📌 디자인에서 중요하게 여기는 취향 요소가 있나요?</div>
        <p>
          평범한 걸 평범하지 않게 보여주는 연출을 좋아해요.<br>
          근데 제가 디자인을 엄청 잘하는 편은 아니라서<br>
          말로 설명하는 게 좀 어려울 때가 많아요.<br>
          <br>
          크기 감각은 특히 자신이 없어서<br>
          제가 꽤 크게 만들었다고 생각했는데<br>
          다른 사람들은 작다고 느끼거나,<br>
          그 반대인 경우도 자주 있어요.<br>
          <br>
          그래서 요즘은 디자인할 때<br>
          특히 크기 부분에 대해 피드백을 자주 받으려고 해요.<br>
          제가 놓치는 부분이 많을 수 있어서요.<br>
          아마 이런 이유 때문에<br>
          디자인 시스템 같은 걸 미리 정해놓고 시작하는 게<br>
          조금 어렵게 느껴지는 것 같기도 하고요.<br>
          <br>
          그리고 개인적으로는<br>
          쨍한 색을 잘 안 쓰는 편이에요.<br>
          계속 채도가 낮은 색으로 가게 되는데,<br>
          요즘 감성이랑은 잘 안 맞는 걸지도 모르겠네요. (웃음)
        </p>
      `,
      right: `
        <img src="images/taste.jpg" alt="취향 이미지" style="width:100%; border-radius:8px;">
      `
    },
    "rules": {
      left: `
        <div>📌 작업을 할 때 스스로 세운 기준이나 원칙이 있나요?</div>
        <p>
          최소한 코드를 봤을 때<br>
          다른 사람도 뜯어볼 수 있게는 만들어야 한다고 생각해요.<br>
          그래서 정리나 주석 같은 부분에<br>
          신경을 많이 쓰는 편이에요.<br>
          <br>
          사실 남의 코드 보는 게<br>
          진짜 어려운 일이잖아요.<br>
          그런데 내가 혼자서만 알아볼 수 있는 코드를 짜면<br>
          결국엔 나 혼자 일해야 하는 느낌이 들어서<br>
          그게 좀 무섭더라고요.<br>
          <br>
          저는 같이 일하는 사람들이<br>
          제 코드를 보면서 배울 수도 있고,<br>
          저도 다른 사람들한테 배울 수 있는<br>
          그런 흐름이 좋다고 생각해서<br>
          항상 이 부분을 신경 쓰면서 작업하려고 해요.<br>
          <br>
          그리고 최대한<br>
          모든 디바이스에서 문제 없이 보이게 하고 싶어요.<br>
          어떤 사람이, 어떤 상황에서,<br>
          어떻게 이걸 보게 될지는 아무도 모르니까요.<br>
          <br>
          모두에게 괜찮은 결과를 주고 싶은<br>
          어려운 욕심이지만,<br>
          그래서 더 지켜가고 싶은 원칙이에요.
        </p>
      `,
      right: `
        <img src="images/rules.png" alt="룰북 노트" style="width:100%; border-radius:8px;">
      `
    },
    "accessibility": {
      left: `
        <div>📌 접근성을 왜 이렇게 중요하게 생각하나요?</div>
        <p>
          처음 HTML을 배웠을 땐<br>
          접근성이라는 개념 자체를 몰랐어요.<br>
          그때는 HTML5도 아니었고,<br>
          블로그 글 같은 걸 보면서 그냥 따라 했던 정도였거든요.<br>
          <br>
          근데 어느 순간 HTML5가 기본이 되고,<br>
          제대로 배우면서 접근성이나 웹 표준이<br>
          단순히 '좋은 코드'가 아니라<br>
          회사 입장에서는 검색이나 노출과도<br>
          연결된다는 걸 알게 됐어요.<br>
          <br>
          그리고 무엇보다<br>
          컴퓨터 사용이 불편한 사람들한테<br>
          실제로 도움이 될 수 있다는 걸 알게 되면서<br>
          되도록이면 검색해 가면서<br>
          하나씩 지켜보려고 하고 있어요.<br>
          <br>
          아주 사소한 거지만,<br>
          예를 들어 'p'는 문단 태그니까<br>
          인라인 요소 외엔 안 넣으려고 하고,<br>
          시맨틱 태그도 꼭 쓰려고 하고요.<br>
          <br>
          아직 다 알진 못하지만<br>
          이런 것들을 하나씩 챙기면서<br>
          '잘 만든다'보다 '잘 전달된다'는 쪽으로<br>
          생각이 조금씩 바뀌는 중이에요.
        </p>
      `,
      right: `
        <img src="images/a11y.png" alt="접근성 노트" style="width:100%; border-radius:8px;">
      `
    },
    "note": {
      left: `
        <div>📌 왜 이런 인터뷰 형식을 넣었나요?</div>
        <p>
          이 책장 섹션은<br>
          포트폴리오에서 흔히 볼 수 있는 구성은 아니에요.<br>
          <br>
          그래서 처음에는<br>
          “이걸 굳이 넣어도 될까?” 고민도 했어요.<br>
          근데 결과물만 보여주는 게 아니라<br>
          그 뒤에 있던 생각들도<br>
          좀 더 솔직하게 꺼내 보고 싶다는 마음이 들더라고요.<br>
          <br>
          실제로 질문을 붙여 놓고 답을 쓰다 보니까<br>
          기획 의도나 인터랙션처럼<br>
          막연했던 것도 조금 더 또렷해졌어요.<br>
          나 자신한테도 “내가 왜 이걸 만들었더라?”를<br>
          다시 물어보게 되기도 했고요.<br>
          <br>
          그리고 예전에 아르바이트하면서<br>
          사람을 뽑는 일을 잠깐 한 적이 있었는데,<br>
          면접할 때 어떤 질문을 해야 할지도 어렵고,<br>
          대답하는 사람도 힘들어하는 걸 보면서<br>
          '그 사람에 대해 뭔가 하나라도 더 알고 있으면<br>
          질문이 훨씬 쉬울 텐데'라는 생각이 들었어요.<br>
          <br>
          그래서 포트폴리오를 보는 사람도<br>
          이걸 보면서 제 안쪽 이야기를 조금이라도 알게 되면<br>
          저한테 궁금한 게 더 생길 수 있을 것 같았어요.<br>
          결국 이 공간은 저를 위해서이기도 하지만<br>
          저를 봐 주는 사람을 위한 공간이기도 해요.
        </p>
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