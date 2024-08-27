var count = 0;
function updateDisplay() {
    var countElement = document.getElementById('countValue');
    if (countElement) {
        // 숫자자료형.toString()
        // : 문자로 변환 메서드
        countElement.textContent = count.toString();
    }
}
function increment() {
    count++;
    updateDisplay();
}
function decrement() {
    count--;
    updateDisplay();
}
document.addEventListener('DOMContentLoaded', function () {
    var incrementBtn = document.getElementById('incrementBtn');
    var decrementBtn = document.getElementById('decrementBtn');
    if (incrementBtn) {
        incrementBtn.addEventListener('click', increment);
    }
    if (decrementBtn) {
        decrementBtn.addEventListener('click', decrement);
    }
});
