const releaseDateObj = new Date("2026-03-11T00:00:00");
const releaseTimestamp = releaseDateObj.getTime();

function formatDate(date, l) {
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    const locale = l === 'id' ? 'id-ID' : 'en-US';
    return date.toLocaleDateString(locale, options);
}

function updateCountdown() {
    const countdownEl = document.getElementById("countdown");
    const releaseDateEl = document.getElementById("release-date-text");

    // Jika elemen tidak ditemukan (misal karena terhapus translasi), hentikan eksekusi
    if (!countdownEl || !releaseDateEl) return;

    const now = new Date().getTime();
    const distance = releaseTimestamp - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownEl.innerHTML =
        String(days).padStart(2, "0") + ":" +
        String(hours).padStart(2, "0") + ":" +
        String(minutes).padStart(2, "0") + ":" +
        String(seconds).padStart(2, "0");

    // Ambil bahasa saat ini dari variabel global di index.js
    const currentLang = typeof lang !== 'undefined' ? lang : 'id';
    const prefix = T[currentLang]["release-prefix"] || "";

    releaseDateEl.innerText = prefix + formatDate(releaseDateObj, currentLang);

    if (distance < 0) {
        countdownEl.innerHTML = "00:00:00:00";
    }
}

setInterval(updateCountdown, 1000);
updateCountdown();