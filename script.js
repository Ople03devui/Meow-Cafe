// เลือกปุ่มทั้งหมดที่มีคลาส meow-btn
const buttons = document.querySelectorAll('.meow-btn');

// วนลูปเพื่อให้ทำงานกับทุกปุ่ม
buttons.forEach(button => {
    button.addEventListener('click', () => {
        // สร้างเสียงจำลอง (หรือจะเปลี่ยนเป็นเล่นไฟล์เสียง .mp3 จริงๆ ก็ได้)
        alert("เหม๊ยวววว~ 🐾 (น้องแมวขอบคุณที่คุณมาทักทาย)");
    });
});