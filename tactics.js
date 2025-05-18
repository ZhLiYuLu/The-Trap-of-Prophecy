window.addEventListener('scroll', function() {
  // 图片随滚动变小，最小缩放为0.5，最大为1
  const scrollY = window.scrollY || window.pageYOffset;
  // 以首屏高度为基准，滚动到100vh时缩放到0.5
  const maxScroll = window.innerHeight;
  let scale = 1 - (scrollY / maxScroll) * 0.9;
  if (scale < 0.5) scale = 0.5;
  const cards = document.querySelectorAll('.cards');
  cards.forEach(card => {
    card.style.transform = `scale(${scale})`;
  });
});




//word disappear 文字滑动逐渐消失 

window.addEventListener('scroll', function() {
  // 以第二屏顶部为基准
  const scrollY = window.scrollY || window.pageYOffset;
  const start2 = window.innerHeight; // center2开始的scrollY
  const maxScroll2 = window.innerHeight * 0.8; // 80%屏高内淡出
  let progress2 = 0;
  if (scrollY > start2) {
    progress2 = Math.min((scrollY - start2) / maxScroll2, 1);
  }
  // 让center2里的p文字渐隐
  document.querySelectorAll('.center2 p').forEach(p => {
    p.style.opacity = `${1 - progress2}`;
  });
});




//jump to center3-cold reading 跳转到cold-reading区域 
document.getElementById('jump-center3').addEventListener('click', function() {
  const center3 = document.querySelector('.center3');
  if (center3) {
    const rect = center3.getBoundingClientRect();
    const scrollTop = window.scrollY || window.pageYOffset;
    // 滚动到center3的中间位置
    const center3Middle = rect.top + scrollTop + rect.height / 2 - window.innerHeight / 2;
    window.scrollTo({ top: center3Middle, behavior: 'smooth' });
  }
});




//jump to center4-hot reading 跳转到hot-reading区域 
document.getElementById('jump-center4').addEventListener('click', function() {
  const center4 = document.querySelector('.center4');
  if (center4) {
    const rect = center4.getBoundingClientRect();
    const scrollTop = window.scrollY || window.pageYOffset;
    // 滚动到center4的中间位置
    const center4Middle = rect.top + scrollTop + rect.height / 2 - window.innerHeight / 2;
    window.scrollTo({ top: center4Middle, behavior: 'smooth' });
  }
});





 //jump to center5-warm reading 跳转到warm-reading区域 
 document.getElementById('jump-center5').addEventListener('click', function() {
  const center5 = document.querySelector('.center5');
  if (center5) {
    const rect = center5.getBoundingClientRect();
    const scrollTop = window.scrollY || window.pageYOffset;
    // 滚动到center5的中间位置
    const center5Middle = rect.top + scrollTop + rect.height / 2 - window.innerHeight / 2;
    window.scrollTo({ top: center5Middle, behavior: 'smooth' });
  }
});





    // mouse click and give hint 鼠标提示
    const cursorDiv = document.createElement('div');
    cursorDiv.id = 'mouseClick';
    cursorDiv.innerText = 'click';
    document.body.appendChild(cursorDiv);

    document.querySelectorAll('.center1 .card img').forEach(img => {
      img.addEventListener('mouseenter', e => {
        cursorDiv.style.display = 'block';
      });
      img.addEventListener('mousemove', e => {
        cursorDiv.style.left = (e.clientX + 16) + 'px';
        cursorDiv.style.top = (e.clientY + 8) + 'px';
      });
      img.addEventListener('mouseleave', e => {
        cursorDiv.style.display = 'none';
      });
    });







// next page 下一页
  document.addEventListener('DOMContentLoaded', function() {
    // content3
    const btn3 = document.getElementById('switchCon3');
    const main3 = document.querySelector('.mainCon');
    const alt3 = document.querySelector('.altCon3');
    if (btn3 && main3 && alt3) {
      let showingAlt3 = false;
      btn3.addEventListener('click', function() {
        if (!showingAlt3) {
          main3.style.display = 'none';
          alt3.style.display = '';
          btn3.classList.add('reverse');
          showingAlt3 = true;
        } else {
          main3.style.display = '';
          alt3.style.display = 'none';
          btn3.classList.remove('reverse');
          showingAlt3 = false;
        }
      });
    }
    // content4
    const btn4 = document.getElementById('switchCon4');
    const main4 = document.querySelector('.mainCon4');
    const alt4 = document.querySelector('.altCon4');
    if (btn4 && main4 && alt4) {
      let showingAlt4 = false;
      btn4.addEventListener('click', function() {
        if (!showingAlt4) {
          main4.style.display = 'none';
          alt4.style.display = '';
          btn4.classList.add('reverse');
          showingAlt4 = true;
        } else {
          main4.style.display = '';
          alt4.style.display = 'none';
          btn4.classList.remove('reverse');
          showingAlt4 = false;
        }
      });
    }
    // content5
    const btn5 = document.getElementById('switchCon5');
    const main5 = document.querySelector('.mainCon5');
    const alt5 = document.querySelector('.altCon5');
    if (btn5 && main5 && alt5) {
      let showingAlt5 = false;
      btn5.addEventListener('click', function() {
        if (!showingAlt5) {
          main5.style.display = 'none';
          alt5.style.display = '';
          btn5.classList.add('reverse');
          showingAlt5 = true;
        } else {
          main5.style.display = '';
          alt5.style.display = 'none';
          btn5.classList.remove('reverse');
          showingAlt5 = false;
        }
      });
    }



          // content6
          const btn6 = document.getElementById('switchCon6');
          const main6 = document.querySelector('.mainCon6');
          const alt6 = document.querySelector('.altCon6');
          if (btn6 && main6 && alt6) {
            let showingAlt6 = false;
            btn6.addEventListener('click', function() {
              if (!showingAlt6) {
                main6.style.display = 'none';
                alt6.style.display = '';
                btn6.classList.add('reverse');
                showingAlt6 = true;
              } else {
                main6.style.display = '';
                alt6.style.display = 'none';
                btn6.classList.remove('reverse');
                showingAlt6 = false;
              }
            });
          }
  });