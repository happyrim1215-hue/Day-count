document.addEventListener('DOMContentLoaded', () => {
    const dateInput = document.getElementById('target-date-input');
    const countdownElement = document.getElementById('countdown');
    const instructionsElement = document.getElementById('instructions');

    let countdownInterval;

    function updateCountdown(targetDate) {
        if (countdownInterval) {
            clearInterval(countdownInterval);
        }

        countdownInterval = setInterval(() => {
            const now = new Date().getTime();
            const distance = targetDate - now;

            if (distance < 0) {
                countdownElement.innerHTML = "전역 완료 🎉";
                instructionsElement.style.display = 'none';
                clearInterval(countdownInterval);
                return;
            }

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

            countdownElement.innerHTML = `D-${days}일 ${hours}시간 ${minutes}분`;
            instructionsElement.style.display = 'none';

        }, 1000);
    }

    dateInput.addEventListener('change', (event) => {
        const selectedDate = new Date(event.target.value).getTime();
        if (!isNaN(selectedDate)) {
            updateCountdown(selectedDate);
        }
    });
});
