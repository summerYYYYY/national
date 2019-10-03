/**
 * 控制nav的显示与否
 * show(h)展示nav与否
 * judge(e)判断鼠标点击的元素
 * showNav()给window加鼠标点击的事件
 */
function show(h, status) {
  const showText = `.nav-ul .ul-item .item`;
  const itemList = $(showText);
  for (let i = 0; i < itemList.length; i++) {
    itemList[i].style.height = `${h}px`;

    itemList[i].style.visibility = status;
  }
}

function judge(e) {
  const itemList = $('.nav-ul .ul-item');
  for (const item of itemList) {
    const item2 = item.querySelector('.item-wrapper a');
    const item3 = item.querySelector('.item-wrapper i');
    if (e === item2 || e === item3) {
      this.show(150, 'visible');
      return;
    } else {
      this.show(0, 'hidden');
    }
  }
}

function showNav() {
  window.addEventListener('click', e => {
    this.judge(e.target);
  });
}

showNav();

/**
 * 控制轮播图的逻辑
 */
function showImg(ele, src) {
  $(ele).animate({ opacity: 'toggle' }, 700, function() {
    $(ele).attr('src', src);
    $(ele).animate({ opacity: 'toggle' }, 700);
  });
}

function changeImg() {
  let num = 0;
  const imgEle = '#carousel .c-area .item img';

  $('#btn-l').click(e => {
    if (num <= 1) {
      num = 4;
      let snapSrc = `./图片/${num}.jpg`;
      this.showImg(imgEle, snapSrc);
    } else {
      num--;
      let snapSrc = `./图片/${num}.jpg`;
      this.showImg(imgEle, snapSrc);
    }
  });

  $('#btn-r').click(e => {
    if (num < 4) {
      num++;
      let snapSrc = `./图片/${num}.jpg`;
      this.showImg(imgEle, snapSrc);
    } else if (num === 4) {
      num = 1;
      let snapSrc = `./图片/${num}.jpg`;
      this.showImg(imgEle, snapSrc);
    }
  });

  setInterval(() => {
    if (num < 4) {
      num++;
      let snapSrc = `./图片/${num}.jpg`;
      this.showImg(imgEle, snapSrc);
    } else if (num === 4) {
      num = 1;
      let snapSrc = `./图片/${num}.jpg`;
      this.showImg(imgEle, snapSrc);
    }
  }, 10000);
}

// $('#car-img').mouseenter(() => {
//   $('#btn-l').animate(
//     {
//       opacity: '0.6'
//     },
//     'slow'
//   );
//   $('#btn-r').animate(
//     {
//       opacity: '0.6'
//     },
//     'slow'
//   );
// });
// $('#car-img').mouseleave(() => {
//   $('#btn-l').animate(
//     {
//       opacity: '0'
//     },
//     'slow'
//   );
//   $('#btn-r').animate(
//     {
//       opacity: '0'
//     },
//     'slow'
//   );
// });
changeImg();
