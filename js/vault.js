document.addEventListener('DOMContentLoaded', function () {

  const categoryButtons = document.querySelectorAll('.category li');
  const items = document.querySelectorAll('.item');

  categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
      const filter = button.getAttribute('data-filter');

      // 버튼 스타일 업데이트
      categoryButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      // 필터링 동작
      items.forEach(item => {
        if (filter === 'all' || item.classList.contains(filter)) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  function updatePlaceholderVisibility() {
    const items = document.querySelectorAll('.item:not(.placeholder)');
    const placeholder = document.querySelector('.item.placeholder');
    const wrapper = document.querySelector('.item-wrapper');

    const isMobile = window.innerWidth <= 1024;

    if (isMobile || items.length % 2 === 0) {
      placeholder.style.display = 'none';
    } else {
      placeholder.style.display = 'flex';
    }
  }

  // 최초 실행 + 리사이즈 대응
  updatePlaceholderVisibility();
  window.addEventListener('resize', updatePlaceholderVisibility);

  const data = [
    {
      title: '봄바람재활의학과 BI 디자인',
      date: '2024.12.23 ~ 2025.01.16',
      desc: ['개인 작업물', '기획, 디자인 모든 부분 단독 작업'],
      tags: ['개인', 'BI디자인', '로고디자인'],
      links: {
        website: '',
        github: 'https://github.com/sumineeJ/2412-01-personal-bombaram',
        figma: '',
        notion: ''
      },
      content: './projects/project-1.html'
    },
    {
      title: '인하대학교 웹 리디자인',
      date: '2025.02.04 ~ 진행 중',
      desc: ['개인 작업물', '콘텐츠 정보 구조 정리부터 퍼블리싱까지 전체 흐름 설계 및 구현 단독 진행'],
      tags: ['개인', '퍼블리싱', '반응형', '기획'],
      links: {
        website: 'https://sumineej.github.io/2502-01-personal-inha/',
        github: 'https://github.com/sumineeJ/2502-01-personal-inha',
        figma: 'https://www.figma.com/design/6oRGRrcR8ZAMkwpaMzvUo3/0211_%EB%B0%98%EC%9D%91%ED%98%95%EC%9B%B9_%EA%B0%9C%EC%9D%B8%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B81.fig?node-id=0-1&t=L1KVzFqao7SdSppz-1',
        notion: ''
      },
      content: './projects/project-2.html'
    },
    {
      title: '멍비서 반려견 건강/산책 앱 기획 및 UIUX 디자인',
      date: '2025.02.06 ~ 2025.03.27',
      desc: ['개인 작업물', '핵심 기능 도출부터 정보 구조, 주요 화면 디자인까지 단독 진행'],
      tags: ['개인', '앱', 'UIUX', '기획'],
      links: {
        website: '',
        github: '',
        figma: 'https://www.figma.com/design/cVzuYkXa0tmv8c8Oa6kkyU/%EB%AA%A8%EB%B0%94%EC%9D%BC%EC%95%B1_%EA%B0%9C%EC%9D%B8%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8_1_%EB%A9%8D%EB%B9%84%EC%84%9C?node-id=0-1&t=DsZZqNRn58nhLilW-1',
        notion: ''
      },
      content: './projects/project-3.html'
    },
    {
      title: 'Steam 홈페이지 리디자인',
      date: '2025.03.11 ~ 진행 중',
      desc: ['개인 작업물', '기획 변경 후 짧은 시간 내 완성도 높은 퍼블리싱 중심 구현'],
      tags: ['개인', '웹', '퍼블리싱', '반응형'],
      links: {
        website: '',
        github: 'https://github.com/sumineeJ/2503-01-personal-steam',
        figma: '',
        notion: ''
      },
      content: './projects/project-4.html'
    },
    {
      title: '투어지 공유 자전거 앱 UIUX 기획 및 랜딩페이지 제작',
      date: '2025.04.01 ~ 2025.04.30',
      desc: ['팀 작업물', '화면 구조 기획 일부 참여부터 랜딩페이지 퍼블리싱 단독 진행'],
      tags: ['팀', '앱/웹', 'UIUX', '퍼블리싱', '기획'],
      links: {
        website: 'http://58.239.58.243:50601/kdt3/team_1/www',
        github: 'https://github.com/sumineeJ/2504-01-team-tourzy',
        figma: 'https://www.figma.com/design/BEdoNGRwJvaN8Yww4dboiN/%F0%9F%A4%9D-250404_%ED%88%AC%EC%96%B4%EC%A7%80_%ED%8C%80%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8?node-id=0-1&t=PUFYw4G9tXGFC3Cn-1',
        notion: ''
      },
      content: './projects/project-5.html'
    },
    {
      title: '돌봐효 앱 고도화 리뉴얼',
      date: '2025.05.07 ~ 2025.05.27',
      desc: ['팀 작업물', '정보구조도, 플로우차트, 스토리보드 등 기획 일부 참여'],
      tags: ['팀', '앱', '기획'],
      links: {
        website: '',
        github: 'https://github.com/sumineeJ/2505-01-team-dolbwahyo',
        figma: 'https://www.figma.com/design/oMihQI0yIqRK3cSAZUnH62/%F0%9F%A4%9D-250507_%EB%8F%8C%EB%B4%90%ED%9A%A8_%ED%8C%80%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8?node-id=0-1&t=gYsi3zKyijGCcexG-1',
        notion: ''
      },
      content: './projects/project-6.html'
    },
    {
      title: '개인 웹 포트폴리오 v1 제작',
      date: '2025.05.15 ~ 진행 중',
      desc: ['개인 작업물', '섹션 기획부터 인터랙션, 반응형 퍼블리싱까지 직접 설계 및 구현'],
      tags: ['개인', '퍼블리싱', '반응형', '인터랙션', '설계'],
      links: {
        website: '',
        github: 'https://github.com/sumineeJ/2505-01-webfolio-v1',
        figma: '',
        notion: ''
      },
      content: './projects/project-7.html'
    },
  ];

  let currentIndex = 0;

  const modal = document.querySelector('.vault-details');
  const titleEl = modal.querySelector('.title');
  const dateEl = modal.querySelector('.date');
  const descEl = modal.querySelector('.desc');
  const tagsEl = modal.querySelector('.tags');
  const linksEl = modal.querySelector('.links');
  const contentEl = modal.querySelector('.content');

  function openModal(index) {
    updateModal(index);
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = '';
  }

  function updateModal(index) {
    const item = data[index];
    currentIndex = index;

    titleEl.textContent = item.title;
    dateEl.textContent = item.date || '';
    descEl.innerHTML = item.desc.map(p => `<p>${p}</p>`).join('');
    tagsEl.innerHTML = item.tags.map(tag => `<span>${tag}</span>`).join('');
    linksEl.innerHTML = `
      ${item.links.website ? `<a href="${item.links.website}" target="_blank" title="homepage"><i class="ph ph-house-line"></i></a>` : ''}
      ${item.links.github ? `<a href="${item.links.github}" target="_blank" title="GitHub"><i class="ph ph-github-logo"></i></a>` : ''}
      ${item.links.figma ? `<a href="${item.links.figma}" target="_blank" title="Figma"><i class="ph ph-figma-logo"></i></a>` : ''}
      ${item.links.notion ? `<a href="${item.links.notion}" target="_blank" title="Notion"><i class="ph ph-notion-logo"></i></a>` : ''}
    `;

    fetch(item.content)
      .then(res => res.text())
      .then(html => {
        contentEl.innerHTML = html;
        contentEl.scrollTop = 0;
      })
      .catch(err => {
        contentEl.innerHTML = '<p style="color:red;">내용을 불러올 수 없습니다.</p>';
        console.error('모달 콘텐츠 로드 실패:', err);
      });

    const btnLeft = modal.querySelector('.btn-arrow.left');
    const btnRight = modal.querySelector('.btn-arrow.right');

    btnLeft.style.display = (index === 0) ? 'none' : 'block';
    btnRight.style.display = (index === data.length - 1) ? 'none' : 'block';
  }

  document.querySelectorAll('.item-wrapper .item').forEach(item => {
    item.addEventListener('click', () => {
      const index = parseInt(item.dataset.index, 10);
      openModal(index);
    });
  });

  modal.querySelector('.btn-close').addEventListener('click', closeModal);

  modal.querySelector('.btn-arrow.left').addEventListener('click', () => {
    if (currentIndex > 0) updateModal(currentIndex - 1);
  });

  modal.querySelector('.btn-arrow.right').addEventListener('click', () => {
    if (currentIndex < data.length - 1) updateModal(currentIndex + 1);
  });

  modal.addEventListener('click', (e) => {
    const isBox = modal.querySelector('.box').contains(e.target);
    const isArrow = e.target.closest('.btn-arrow');
    if (!isBox && !isArrow) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'block') {
      closeModal();
    }
  });

});
