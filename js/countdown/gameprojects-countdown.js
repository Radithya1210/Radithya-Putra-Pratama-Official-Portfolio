const releaseConfig = {
    year: 2030,
    month: 3,
    day: 14,
    hour: 0,
    minute: 0,
    second: 0
};

const releaseDateObj = new Date(
    releaseConfig.year,
    releaseConfig.month - 1,
    releaseConfig.day,
    releaseConfig.hour,
    releaseConfig.minute,
    releaseConfig.second
);

function formatDate(date, l) {
    const options = { day: "numeric", month: "long", year: "numeric" };
    const locale = l === "id" ? "id-ID" : "en-US";
    return date.toLocaleDateString(locale, options);
}

function formatCountdown(ms) {
    const totalSeconds = Math.floor(ms / 1000);
    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return [
        String(days).padStart(2, "0"),
        String(hours).padStart(2, "0"),
        String(minutes).padStart(2, "0"),
        String(seconds).padStart(2, "0")
    ].join(":");
}

function updateCountdown() {
    const countdownEl = document.getElementById("countdown");
    const releaseDateEl = document.getElementById("release-date-text");

    if (!countdownEl || !releaseDateEl) return;

    const now = new Date();
    const distance = releaseDateObj.getTime() - now.getTime();

    const currentLang = typeof lang !== "undefined" ? lang : "id";
    const translation = typeof T !== "undefined" && T[currentLang] ? T[currentLang] : {};
    const prefix = translation["release-prefix"] || "";
    const passedText = translation["release-passed"] || "Release date has passed";

    if (distance <= 0) {
        countdownEl.textContent = "00:00:00:00";
        releaseDateEl.textContent = passedText;
        return;
    }

    countdownEl.textContent = formatCountdown(distance);
    releaseDateEl.textContent = prefix + formatDate(releaseDateObj, currentLang);
}

setInterval(updateCountdown, 1000);
updateCountdown();
