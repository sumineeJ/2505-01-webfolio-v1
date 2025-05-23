document.addEventListener('DOMContentLoaded', function () {

  const data = [
    {
      title: '봄바람재활의학과 BI 디자인',
      date: '2024.12.23 ~ 2025.01.16',
      desc: ['개인 작업물', '기획, 디자인 모든 부분 단독 작업'],
      tags: ['개인', 'BI디자인', '로고디자인'],
      links: {
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
        github: 'https://github.com/sumineeJ/2502-01-personal-inha',
        figma: 'https://www.figma.com/design/6oRGRrcR8ZAMkwpaMzvUo3/0211_%EB%B0%98%EC%9D%91%ED%98%95%EC%9B%B9_%EA%B0%9C%EC%9D%B8%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B81.fig?node-id=0-1&t=NWl7afXFjeacisFi-1',
        notion: ''
      },
      content: './projects/project-1.html'
    },
    {
      title: '멍비서 반려견 건강/산책 앱 기획 및 UIUX 디자인',
      date: '2025.02.06 ~ 2025.03.27',
      desc: ['개인 작업물', '핵심 기능 도출부터 정보 구조, 주요 화면 디자인까지 단독 진행'],
      tags: ['개인', '앱', 'UIUX', '기획'],
      links: {
        github: 'https://github.com/sumineeJ/2502-01-personal-inha',
        figma: 'https://www.figma.com/design/6oRGRrcR8ZAMkwpaMzvUo3/0211_%EB%B0%98%EC%9D%91%ED%98%95%EC%9B%B9_%EA%B0%9C%EC%9D%B8%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B81.fig?node-id=0-1&t=NWl7afXFjeacisFi-1',
        notion: ''
      },
      content: './projects/project-1.html'
    },
    {
      title: '야채부락리 게임형 웹사이트 리디자인',
      date: '2025.03.11 ~ 진행 중',
      desc: ['개인 작업물', '핵심 기능 도출부터 정보 구조, 주요 화면 디자인까지 단독 진행'],
      tags: ['개인', '앱', 'UIUX', '기획'],
      links: {
        github: 'https://github.com/sumineeJ/2502-01-personal-inha',
        figma: 'https://www.figma.com/design/6oRGRrcR8ZAMkwpaMzvUo3/0211_%EB%B0%98%EC%9D%91%ED%98%95%EC%9B%B9_%EA%B0%9C%EC%9D%B8%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B81.fig?node-id=0-1&t=NWl7afXFjeacisFi-1',
        notion: ''
      },
      content: './projects/project-1.html'
    },
    {
      title: '투어지 공유 자전거 앱 UIUX 기획 및 랜딩페이지 제작',
      date: '2025.04.01 ~ 2025.04.30',
      desc: ['팀 작업물', '화면 구조 기획 일부 참여부터 랜딩페이지 퍼블리싱 단독 진행'],
      tags: ['팀', '앱/웹', 'UIUX', '퍼블리싱', '기획'],
      links: {
        github: 'https://github.com/sumineeJ/2502-01-personal-inha',
        figma: 'https://www.figma.com/design/6oRGRrcR8ZAMkwpaMzvUo3/0211_%EB%B0%98%EC%9D%91%ED%98%95%EC%9B%B9_%EA%B0%9C%EC%9D%B8%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B81.fig?node-id=0-1&t=NWl7afXFjeacisFi-1',
        notion: ''
      },
      content: './projects/project-1.html'
    },
    {
      title: '돌봐효 앱 고도화 리뉴얼',
      date: '2025.05.07 ~ 2025.05.27',
      desc: ['팀 작업물', '정보구조도, 플로우차트, 스토리보드 등 기획 일부 참여'],
      tags: ['팀', '앱', '기획'],
      links: {
        github: 'https://github.com/sumineeJ/2502-01-personal-inha',
        figma: 'https://www.figma.com/design/6oRGRrcR8ZAMkwpaMzvUo3/0211_%EB%B0%98%EC%9D%91%ED%98%95%EC%9B%B9_%EA%B0%9C%EC%9D%B8%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B81.fig?node-id=0-1&t=NWl7afXFjeacisFi-1',
        notion: ''
      },
      content: './projects/project-1.html'
    },
    {
      title: '개인 웹 포트폴리오 v1 제작',
      date: '2025.05.15 ~ 진행 중',
      desc: ['개인 작업물', '섹션 기획부터 인터랙션, 반응형 퍼블리싱까지 직접 설계 및 구현'],
      tags: ['개인', '퍼블리싱', '반응형', '인터랙션', '설계'],
      links: {
        github: 'https://github.com/sumineeJ/2502-01-personal-inha',
        figma: 'https://www.figma.com/design/6oRGRrcR8ZAMkwpaMzvUo3/0211_%EB%B0%98%EC%9D%91%ED%98%95%EC%9B%B9_%EA%B0%9C%EC%9D%B8%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B81.fig?node-id=0-1&t=NWl7afXFjeacisFi-1',
        notion: ''
      },
      content: './projects/project-1.html'
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
      ${item.links.github ? `<a href="${item.links.github}" target="_blank"><i class="ph ph-github-logo"></i></a>` : ''}
      ${item.links.figma ? `<a href="${item.links.figma}" target="_blank"><i class="ph ph-figma-logo"></i></a>` : ''}
      ${item.links.notion ? `<a href="${item.links.notion}" target="_blank"><i class="ph ph-notion-logo"></i></a>` : ''}
    `;

    fetch(item.content)
      .then(res => res.text())
      .then(html => {
        contentEl.innerHTML = html;
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
