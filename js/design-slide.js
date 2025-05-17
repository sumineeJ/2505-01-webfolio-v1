$(document).ready(function(){
  const designSwiper = new Swiper('.design-swiper', {
    loop: true,
    loopFillGroupWithBlank: true,

    slidesPerView: 4, // 기본값
    slidesPerGroup: 4, // 그룹
    spaceBetween: 28, // 슬라이드 간 간격(px)

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return `<span class="${className}"><i class="ph-fill ph-star-four"></i></span>`;
      }
    },

    on: {
      slideChange: function () {
        updatePaginationIcons(); // 슬라이드가 바뀔 때 아이콘 갱신
      },
      init: function () {
        updatePaginationIcons(); // 최초 로딩 시에도 아이콘 갱신
      }
    },

    breakpoints: {
      1280: {
        slidesPerView: 4,
        slidesPerGroup: 4,
        spaceBetween: 28
      },
      1024: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 24
      },
      768: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 20
      },
      0: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 16
      }
    }
  });

  // 아이콘 바꿔주는 함수
  function updatePaginationIcons() {
    $(".swiper-pagination-bullet").each(function () {
      const $icon = $(this).find("i");
      if ($(this).hasClass("swiper-pagination-bullet-active")) {
        $icon.attr("class", "ph-fill ph-star-four"); // 활성화 된 아이콘콘
      } else {
        $icon.attr("class", "ph ph-star-four"); // 비활성화화
      }
    });
  }

});