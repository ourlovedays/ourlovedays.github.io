
// // 获取照片路径
// function getPhotoPaths() {
//   const folderPath = "/images"; // 将此处路径替换为你自己照片所在的实际路径
//   return fetch(folderPath)
//     .then(response => response.text())
//     .then(text => {
//       const parser = new DOMParser();
//       const html = parser.parseFromString(text, "index/html");
//       const links = Array.from(html.querySelectorAll("a")).map(a => a.href);
//       return links.filter(link => /\.(jpe?g|png|gif)$/i.test(link));
//     });
// }

// // 将照片添加到展示框中
// function addPhotosToGallery(photoPaths) {
//   const galleryEl = document.getElementById("gallery");
//   for (const photoPath of photoPaths) {
//     const li = document.createElement("li");
//     const img = document.createElement("img");
//     img.src = photoPath;
//     img.alt = "";
//     li.appendChild(img);
//     galleryEl.appendChild(li);
//   }
// }

// // 页面加载完成后执行逻辑
// window.addEventListener("load", () => {
//   getPhotoPaths().then(photoPaths => {
//     addPhotosToGallery(photoPaths.slice(0, 10)); // 只展示前10张照片
//   });
// });







window.onload = function() {
function createSnowflake() {
    // 创建雪花元素
    var snowflake = document.createElement("div");
    snowflake.classList.add("snowflake");
    snowflake.textContent = "❅";
  
    // 设置起始位置
    snowflake.style.left = Math.random() * 100 + "vw";
    snowflake.style.top = "-10px";
  
    // 添加到文档中
    document.getElementById("snow-container").appendChild(snowflake);
  
    // 移动雪花
    setInterval(function() {
      // 计算新位置
      var position = parseFloat(snowflake.style.top) + 1 + "px";
      snowflake.style.top = position;
      snowflake.style.transform = "rotateZ(" + Math.random() * 360 + "deg)";
      
      // 消失动画
      if (parseFloat(snowflake.style.top) > window.innerHeight) {
        snowflake.classList.add("fade-out");
        setTimeout(function() {
          snowflake.remove();
        }, 1000);
      }
    }, 10);
  }

  for (var i = 0; i < 50; i++) {
    createSnowflake();
  }
}
  