const line1 = "這是第一行文字";
const line2 = "這是第二行文字";
const line3 = "這是第三行文字（圖片後才出現）"; // ★ 新增

const line1El = document.getElementById('line1');
const line2El = document.getElementById('line2');
const line3El = document.getElementById('line3'); // ★ 新增
const imageContainer = document.getElementById('imageContainer');

function typeWriter(text, element, delay = 100) {
  return new Promise(resolve => {
    let i = 0;
    function type() {
      if (i < text.length) {
        element.textContent += text[i];
        i++;
        setTimeout(type, delay);
      } else {
        resolve();
      }
    }
    type();
  });
}

async function startAnimation() {
  // 先跑兩行字
  await typeWriter(line1, line1El, 100);
  await typeWriter(line2, line2El, 100);

  // 顯示圖片
  imageContainer.classList.add('show');

  // ★ 圖片出現後延遲一點再跑第三行字
  setTimeout(() => {
    typeWriter(line3, line3El, 100);
  }, 600); // ← 可調整延遲時間
}

startAnimation();



// ====== 點擊 GIF 動作 ======

const gif = document.getElementById("gifImage");
const flash = document.getElementById("flash");

// 點擊圖片後的流程
gif.addEventListener("click", () => {

  // 1️⃣ GIF 加速播放（重刷 src）
  gif.src = gif.src + "?speedup=" + Date.now();

  // 2️⃣ 出現白光效果
  flash.classList.add("show");

  // 3️⃣ 白光之後跳頁（自行調整秒數）
  setTimeout(() => {
    window.location.href = "index.html"; 
  }, 900);
});

