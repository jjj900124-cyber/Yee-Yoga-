/**
 * 程式檔案：script.js
 * 功能：實現導覽列點擊後的平滑滾動效果
 */

document.addEventListener('DOMContentLoaded', function() {
    // 獲取所有導覽列中的連結 (href 屬性以 # 開頭的，即指向頁面內區塊的連結)
    const links = document.querySelectorAll('nav a[href^="#"]');
    
    // 遍歷每一個連結
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            // 阻止連結的預設行為 (即阻止它生硬地跳轉)
            event.preventDefault();

            // 獲取連結的目標 ID (例如：如果連結是 "#about"，目標 ID 就是 "about")
            const targetId = this.getAttribute('href');
            
            // 找到目標區塊的元素
            const targetElement = document.querySelector(targetId);

            // 如果目標元素存在，則執行平滑滾動
            if (targetElement) {
                // 使用 window.scrollTo 進行平滑滾動
                window.scrollTo({
                    top: targetElement.offsetTop, // 滾動到目標元素頂部的位置
                    behavior: 'smooth'           // 啟用平滑滾動效果
                });
            }
        });
    });

    // 額外功能：導覽列狀態變化 (當向下滾動時增加陰影)
    const navbar = document.getElementById('navbar');

    window.addEventListener('scroll', () => {
        // 當滾動超過 50 像素時
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

});