// ===== TRANSLATIONS =====
const T = {
  id: {
    "nav-home": "Beranda", "nav-about": "Tentang", "nav-skills": "Keahlian", "nav-experience": "Pengalaman", "nav-projects": "Proyek", "nav-contact": "Kontak",
    "hero-badge": "Student & Developer", "hero-tag": "Siswa · Developer",
    "hero-sub": "Bersemangat membangun pengalaman digital yang berkesan — dari website hingga game.",
    "hero-cta1": "Lihat Proyek", "hero-cta2": "Hubungi Saya", "stat1": "Proyek", "stat2": "Tahun Coding", "stat3": "Skill", "scroll": "Scroll",
    "about-title": "Tentang Saya",
    "acard1-t": "Profil", "acard1-p": "Lahir 12 November 2010 di Tangerang. Saat ini belajar di SMPN 11 Kota Tangerang Selatan. Alumni SDN RawaBuntu 03.",
    "acard2-t": "Passion", "acard2-p": "Sangat tertarik dalam dunia web development dan game development. Selalu ingin belajar teknologi baru.",
    "acard3-t": "Pencapaian", "acard3-p": "Menyelesaikan tugas akhir SMP berupa game berbasis web dengan mekanisme RNG yang membuktikan kemampuan teknis sejak dini.",
    "about-p1": "Perjalanan saya di dunia coding dimulai saat kelas 5 SD, atau menjelang kenaikan ke kelas 6. Saat itu saya sangat suka bermain game, terutama game simulator buatan developer lokal Andy Lukito (Akhir Pekan Studio). Dari situ muncul keinginan: saya tidak ingin hanya menjadi penikmat game, tetapi juga ingin menjadi pembuatnya, dan mulai terinspirasi untuk terjun ke dunia development.",
    "about-p2": "Namun, saat itu saya belum memiliki laptop, yang cukup menghambat untuk belajar game development. Akhirnya saya beralih ke web development — awalnya hanya iseng menggunakan template HTML, CSS, dan JavaScript untuk membuat kartu ucapan dan proyek sederhana lainnya. Dari situ minat saya mulai berkembang dengan pesat.",
    "about-p3": "Proyek pertama saya adalah membuat website tentang batik Neo Tangsel dalam kegiatan P5 (Proyek Penguatan Profil Pelajar Pancasila) saat kelas 7 SMP. Dari proyek ini, saya mulai memahami dasar-dasar pembuatan website secara lebih serius.",
    "about-p4": "Selanjutnya, saya membuat proyek kedua berupa website top up game dan voucher bernama GARUDANEXTERA, yang saya mulai pada awal kelas 8 SMP. Menariknya, saya mengerjakannya hanya menggunakan HP dan platform Replit, lalu melanjutkannya setelah memiliki laptop.",
    "about-p5": "Sayangnya, pada awal kelas 9 SMP, proyek GARUDANEXTERA mengalami kegagalan karena saya kehilangan seluruh database MySQL dan mengalami banyak error pada PHP. Hingga saat ini belum ada niat untuk memperbaikinya, tetapi mungkin suatu saat nanti akan saya bangun kembali dengan versi yang lebih baik.",
    "about-p6": "Proyek ketiga saya adalah tugas akhir SMP pada mata pelajaran Informatika, yaitu membuat game berbasis web menggunakan konsep RNG (Random Number Generator) dengan mengadaptasi permainan kartu UNO. Dari sini saya belajar tentang logika game, sistem random, dan interaksi user.",
    "about-p7": "Saya juga memiliki ketertarikan di bidang cyber security. Namun, saat ini saya memilih untuk fokus terlebih dahulu pada web development dan game development sebagai fondasi utama kemampuan saya.",
    "about-p8": "Saya memiliki mimpi untuk dapat bekerja di lembaga-lembaga besar seperti NASA, dan berkontribusi dalam pengembangan teknologi yang berdampak luas, baik di bidang software, sistem, maupun inovasi digital lainnya.",
    "about-p9": "Saat ini saya terus berkembang dengan mengasah kemampuan HTML, CSS, JavaScript, serta C# untuk game development, dengan tujuan untuk suatu saat menciptakan karya yang benar-benar berdampak.",
    "skills-title": "Keahlian", "sk-proficient": "Mahir", "sk-learning": "Sedang Belajar",
    "countdown-label": "Waktu Rilis", "release-prefix": "Rilis pada ", "release-passed": "Tanggal rilis sudah lewat",
    "exp-title": "Pengalaman",
    "exp1-t": "Siswa SMPN 11 Kota Tangerang Selatan", "exp1-p": "Menempuh pendidikan menengah pertama sambil aktif mengembangkan keterampilan teknologi dan pemrograman secara mandiri.",
    "exp2-t": "Tugas Akhir SMP — Web Game RNG", "exp2-p": "Mendapat tugas akhir dari SMPN 11 untuk membuat game berbasis web dengan mekanisme Random Number Generator (RNG). Proyek ini menjadi bukti nyata kemampuan teknis dalam pengembangan game web.",
    "exp3-t": "Pengembangan Website", "exp3-p": "Berpengalaman membangun website dari nol menggunakan HTML, CSS, dan JavaScript. Terus mengasah kemampuan desain dan logika pemrograman frontend.",
    "exp4-t": "Pengembangan Game 3D — Unity", "exp4-p": "Berpengalaman membuat game 3D menggunakan Unity Engine dengan bahasa pemrograman C#. Mempelajari konsep fisika game, kamera, dan mekanik gameplay 3D.",
    "exp5-t": "Alumni SDN RawaBuntu 03", "exp5-p": "Menyelesaikan pendidikan dasar di SDN RawaBuntu 03, Tangerang, sebagai pondasi awal perjalanan akademik.",
    "proj1-title": "Proyek Web", "proj2-title": "Proyek Game", "proj-feat": "⭐ Tugas Akhir", "proj-feat3": "⭐ Portofolio", "proj-feat2": "🎮 Simulator",
    "proj1-t": "Web RNG Game — Tugas Akhir SMP", "proj1-p": "Game berbasis web dengan mekanisme Random Number Generator yang dibuat sebagai tugas akhir di SMPN 11 Kota Tangerang Selatan. Menampilkan gameplay yang menantang dan desain antarmuka yang interaktif.",
    "proj2-t": "Game Simulator (Segera Hadir)", "proj2-p": "Game bergenre simulation yang dikembangkan menggunakan Unity dan C#, dengan fokus pada pengalaman gameplay yang realistis dan interaktif. Menggabungkan elemen 3D modelling serta sistem gameplay untuk menciptakan pengalaman bermain yang imersif.",
    "proj3-t": "Portofolio", "proj3-p": "Website portofolio pribadi yang menampilkan berbagai proyek dan pengalaman di bidang web development dan game development. Dibangun dengan desain modern, animasi interaktif, serta fitur multi-bahasa untuk memberikan pengalaman pengguna yang menarik.",
    "btn-gh": "GitHub", "contact-title": "Kontak", "contact-sub": "Mari Terhubung!",
    "contact-desc": "Punya pertanyaan, ide kolaborasi, atau sekadar ingin menyapa? Jangan ragu untuk menghubungi saya!",
    "ci-loc": "Lokasi", "ci-school": "Sekolah", "form-name": "Nama", "form-email": "Email", "form-msg": "Pesan", "form-send": "Kirim Pesan",
    "form-ok": "Pesan berhasil dikirim! Terima kasih 🎉",
    "f-tagline": "Developer muda dari Tangerang Selatan yang berambisi membangun masa depan digital.",
    "f-social": "Media Sosial", "f-links": "Navigasi", "f-contact": "Kontak", "f-copy": "Semua hak dilindungi.", "f-made": "Dibuat dengan ❤️ dan semangat belajar"
  },
  en: {
    "nav-home": "Home", "nav-about": "About", "nav-skills": "Skills", "nav-experience": "Experience", "nav-projects": "Projects", "nav-contact": "Contact",
    "hero-badge": "Student & Developer", "hero-tag": "Student · Developer",
    "hero-sub": "Passionate about building memorable digital experiences — from websites to games.",
    "hero-cta1": "View Projects", "hero-cta2": "Contact Me", "stat1": "Projects", "stat2": "Years Coding", "stat3": "Skills", "scroll": "Scroll",
    "about-title": "About Me",
    "acard1-t": "Profile", "acard1-p": "Born November 12, 2010 in Tangerang. Currently studying at SMPN 11 Kota Tangerang Selatan. Alumni of SDN RawaBuntu 03.",
    "acard2-t": "Passion", "acard2-p": "Deeply interested in web development and game development. Always eager to learn new technologies.",
    "acard3-t": "Achievement", "acard3-p": "Completed a final project in junior high — a web-based game with an RNG mechanic that showcases technical skills at a young age.",
    "about-p1": "My coding journey began in 5th grade, around the transition to 6th grade. At that time, I really enjoyed playing games, especially simulator games by local developer Andy Lukito (Akhir Pekan Studio). That’s when I realized: I don’t just want to play games, I want to build them, and I became inspired to enter the world of development.",
    "about-p2": "However, I didn’t have a laptop at the time, which made it difficult to learn game development. So I shifted to web development — starting by experimenting with HTML, CSS, and JavaScript templates to create greeting cards and simple projects. That’s where my interest started to grow rapidly.",
    "about-p3": "My first project was a website about Batik Neo Tangsel, created as part of the P5 (Pancasila Student Profile Strengthening Project) in 7th grade. This project helped me understand the fundamentals of web development more seriously.",
    "about-p4": "After that, I built my second project: a game top-up and voucher website called GARUDANEXTERA, which I started in early 8th grade. Interestingly, I worked on it using only my phone and Replit, and later continued it after getting a laptop.",
    "about-p5": "Unfortunately, in early 9th grade, GARUDANEXTERA failed after I lost my entire MySQL database and encountered many PHP errors. I haven’t had the motivation to fix it yet, but maybe someday I’ll rebuild it into something better.",
    "about-p6": "My third project was my final Informatics assignment in junior high school: a web-based game using RNG (Random Number Generator), inspired by the UNO card game. From this, I learned about game logic, randomness systems, and user interaction.",
    "about-p7": "I also have an interest in cyber security. However, for now, I choose to focus on web development and game development as my main foundation.",
    "about-p8": "I dream of working at major institutions such as NASA, contributing to impactful technological advancements in software, systems, and digital innovation.",
    "about-p9": "Currently, I continue to grow by improving my skills in HTML, CSS, JavaScript, and C# for game development, with the goal of creating something truly impactful in the future.",
    "skills-title": "Skills", "sk-proficient": "Proficient", "sk-learning": "Learning",
    "countdown-label": "Release Time", "release-prefix": "Released on ", "release-passed": "Release date has passed",
    "exp-title": "Experience",
    "exp1-t": "Student at SMPN 11 Kota Tangerang Selatan", "exp1-p": "Pursuing junior high school education while actively developing technology and programming skills independently.",
    "exp2-t": "Final Project — Web-Based RNG Game", "exp2-p": "Assigned a final project by SMPN 11 to build a web-based game with a Random Number Generator (RNG) mechanic. A testament to early technical ability in web game development.",
    "exp3-t": "Website Development", "exp3-p": "Experienced in building websites from scratch using HTML, CSS, and JavaScript. Continuously honing frontend design and programming logic.",
    "exp4-t": "3D Game Development — Unity", "exp4-p": "Experienced in building 3D games using Unity Engine with C#. Learned game physics, camera systems, and 3D gameplay mechanics.",
    "exp5-t": "Alumni of SDN RawaBuntu 03", "exp5-p": "Completed primary education at SDN RawaBuntu 03, Tangerang, as the foundation of my academic journey.",
    "proj1-title": "Web Projects", "proj2-title": "Game Projects", "proj-feat": "⭐ Final Project", "proj-feat3": "⭐ Portfolio", "proj-feat2": "🎮 Simulator",
    "proj1-t": "Web RNG Game — Final School Project", "proj1-p": "A web-based game with a Random Number Generator mechanic built as a final project at SMPN 11 Kota Tangerang Selatan. Features challenging gameplay and an interactive interface.",
    "proj2-t": "Simulation Game (Coming Soon)", "proj2-p": "A simulation game developed using Unity and C#, focused on delivering a realistic and interactive gameplay experience. Combines 3D modeling elements with gameplay systems to create an immersive experience.",
    "proj3-t": "Personal Portfolio Website", "proj3-p": "Personal portfolio website showcasing various projects and experiences in web development and game development. Built with a modern design, interactive animations, and multi-language support to deliver an engaging user experience.",
    "btn-gh": "GitHub", "contact-title": "Contact", "contact-sub": "Let's Connect!",
    "contact-desc": "Have a question, collaboration idea, or just want to say hi? Don't hesitate to reach out!",
    "ci-loc": "Location", "ci-school": "School", "form-name": "Name", "form-email": "Email", "form-msg": "Message", "form-send": "Send Message",
    "form-ok": "Message sent successfully! Thank you 🎉",
    "f-tagline": "A young developer from Tangerang Selatan with ambitions to build the digital future.",
    "f-social": "Social Media", "f-links": "Navigation", "f-contact": "Contact", "f-copy": "All rights reserved.", "f-made": "Made with ❤️ and a passion to learn"
  }
};

let lang = 'id';
function applyLang(l) {
  const t = T[l];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const k = el.getAttribute('data-i18n');
    if (t[k]) k === 'f-made' ? el.innerHTML = t[k] : el.textContent = t[k];
  });
  document.getElementById('langLabel').textContent = l === 'id' ? 'EN' : 'ID';
  document.documentElement.lang = l;
}
document.getElementById('langBtn').addEventListener('click', () => {
  lang = lang === 'id' ? 'en' : 'id';
  applyLang(lang);
  const b = document.getElementById('langBtn');
  b.style.transform = 'scale(0.9)';
  setTimeout(() => b.style.transform = '', 200);
});

// ===== NAVBAR =====
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => navbar.classList.toggle('scrolled', window.scrollY > 50));

// ===== SIDE MENU =====
const hbg = document.getElementById('hamburger');
const sm = document.getElementById('sideMenu');
const ov = document.getElementById('menuOverlay');
const mc = document.getElementById('menuClose');
const openMenu = () => { sm.classList.add('open'); ov.classList.add('active'); hbg.classList.add('open'); document.body.style.overflow = 'hidden' };
const closeMenu = () => { sm.classList.remove('open'); ov.classList.remove('active'); hbg.classList.remove('open'); document.body.style.overflow = '' };
hbg.addEventListener('click', () => sm.classList.contains('open') ? closeMenu() : openMenu());
mc.addEventListener('click', closeMenu);
ov.addEventListener('click', closeMenu);
document.querySelectorAll('.menu-link').forEach(l => l.addEventListener('click', closeMenu));

// ===== PARTICLE CANVAS =====
const canvas = document.getElementById('particleCanvas');
const ctx = canvas.getContext('2d');
let particles = [];
function resizeCanvas() { canvas.width = window.innerWidth; canvas.height = window.innerHeight }
class Particle {
  constructor() { this.reset() }
  reset() { this.x = Math.random() * canvas.width; this.y = Math.random() * canvas.height; this.size = Math.random() * 1.5 + 0.3; this.vx = (Math.random() - .5) * .3; this.vy = (Math.random() - .5) * .3; this.opacity = Math.random() * .4 + .05; this.life = 0; this.maxLife = Math.random() * 300 + 200 }
  update() { this.x += this.vx; this.y += this.vy; this.life++; if (this.life > this.maxLife) this.reset(); if (this.x < 0 || this.x > canvas.width) this.vx *= -1; if (this.y < 0 || this.y > canvas.height) this.vy *= -1 }
  draw() { const fi = Math.min(this.life / 60, 1), fo = Math.min((this.maxLife - this.life) / 60, 1), a = this.opacity * Math.min(fi, fo); ctx.beginPath(); ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2); ctx.fillStyle = `rgba(255,255,255,${a})`; ctx.fill() }
}
function initP() { particles = []; const c = Math.min(80, Math.floor(canvas.width * canvas.height / 15000)); for (let i = 0; i < c; i++) { const p = new Particle(); p.life = Math.random() * p.maxLife; particles.push(p) } }
function drawLines() { for (let i = 0; i < particles.length; i++)for (let j = i + 1; j < particles.length; j++) { const dx = particles[i].x - particles[j].x, dy = particles[i].y - particles[j].y, d = Math.sqrt(dx * dx + dy * dy); if (d < 100) { ctx.beginPath(); ctx.moveTo(particles[i].x, particles[i].y); ctx.lineTo(particles[j].x, particles[j].y); ctx.strokeStyle = `rgba(255,255,255,${(1 - d / 100) * .06})`; ctx.lineWidth = .5; ctx.stroke() } } }
function animP() { ctx.clearRect(0, 0, canvas.width, canvas.height); drawLines(); particles.forEach(p => { p.update(); p.draw() }); requestAnimationFrame(animP) }
resizeCanvas(); initP(); animP();
window.addEventListener('resize', () => { resizeCanvas(); initP() });

// ===== SCROLL REVEAL =====
const ro = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('revealed');
      if (e.target.classList.contains('skill-card')) {
        const f = e.target.querySelector('.sk-fill');
        if (f) setTimeout(() => f.style.width = f.getAttribute('data-pct') + '%', 200);
      }
    }
  });
}, { threshold: .1, rootMargin: '0px 0px -60px 0px' });
document.querySelectorAll('.reveal-up,.reveal-left,.reveal-right').forEach(el => ro.observe(el));

// Init skill bars to 0
document.querySelectorAll('.sk-fill').forEach(f => f.style.width = '0%');

// ===== COUNTER =====
function countUp(el, target) { let n = 0; const step = target / (1500 / 16); const t = setInterval(() => { n += step; if (n >= target) { el.textContent = target; clearInterval(t) } else el.textContent = Math.floor(n) }, 16) }
const co = new IntersectionObserver(e => { e.forEach(x => { if (x.isIntersecting) { x.target.querySelectorAll('.stat-num').forEach(n => countUp(n, +n.getAttribute('data-count'))); co.unobserve(x.target) } }) }, { threshold: .5 });
const hs = document.querySelector('.hero-stats');
if (hs) co.observe(hs);

// ===== CURSOR GLOW =====
const cg = document.createElement('div');
cg.classList.add('cursor-glow');
document.body.appendChild(cg);
let mx = -500, my = -500, gx = -500, gy = -500;
document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY });
(function animCursor() { gx += (mx - gx) * .1; gy += (my - gy) * .1; cg.style.left = gx + 'px'; cg.style.top = gy + 'px'; requestAnimationFrame(animCursor) })();

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', function (e) {
    const t = document.querySelector(this.getAttribute('href'));
    if (t) { e.preventDefault(); window.scrollTo({ top: t.getBoundingClientRect().top + window.scrollY - 70, behavior: 'smooth' }) }
  });
});

// ===== CONTACT FORM =====
function handleForm(e) {
  e.preventDefault();
  const form = document.getElementById('contactForm');
  const inp = form.querySelectorAll('input,textarea');
  const btn = form.querySelector('button[type="submit"]');
  const subject = encodeURIComponent(`Pesan dari ${inp[0].value} — Portofolio`);
  const body = encodeURIComponent(`Nama: ${inp[0].value}\nEmail: ${inp[1].value}\n\nPesan:\n${inp[2].value}`);
  btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Membuka email...';
  btn.disabled = true;
  setTimeout(() => {
    window.location.href = `mailto:radithya.putra1211@gmail.com?subject=${subject}&body=${body}`;
    setTimeout(() => { form.classList.add('hidden'); document.getElementById('formOk').classList.remove('hidden') }, 1000);
  }, 800);
}

// ===== HERO ENTER =====
window.addEventListener('load', () => {
  document.querySelectorAll('.hero .reveal-left,.hero .reveal-right').forEach((el, i) => {
    setTimeout(() => el.classList.add('revealed'), 300 + i * 200);
  });
});

// ===== TILT CARDS =====
document.querySelectorAll('.proj-card,.acard,.skill-card,.tl-card').forEach(c => {
  c.addEventListener('mousemove', e => {
    const r = c.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
    c.style.transform = `perspective(1000px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg) translateY(-4px)`;
  });
  c.addEventListener('mouseleave', () => c.style.transform = '');
});

// ===== GLITCH NAME =====
document.querySelectorAll('.hn').forEach(line => {
  const orig = line.textContent;
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  let iv, iter = 0;
  line.addEventListener('mouseenter', () => {
    clearInterval(iv); iter = 0;
    iv = setInterval(() => {
      line.textContent = orig.split('').map((c, i) => i < iter ? orig[i] : c === ' ' ? ' ' : chars[Math.floor(Math.random() * chars.length)]).join('');
      if (iter >= orig.length) clearInterval(iv);
      iter += .5;
    }, 30);
  });
  line.addEventListener('mouseleave', () => { clearInterval(iv); line.textContent = orig });
});

// ===== ACTIVE SECTION =====
window.addEventListener('scroll', () => {
  let cur = '';
  document.querySelectorAll('[id]').forEach(s => { if (s.getBoundingClientRect().top < 150) cur = s.id });
  document.querySelectorAll('.menu-link').forEach(l => {
    const h = l.getAttribute('href').replace('#', '');
    l.style.color = h === cur ? 'white' : '';
    l.style.background = h === cur ? 'rgba(255,255,255,0.06)' : '';
  });
});

// ===== PARALLAX BG =====
window.addEventListener('scroll', () => {
  const s = window.scrollY;
  document.querySelectorAll('.bg-circle,.bg-ring').forEach((el, i) => {
    el.style.transform = `translateY(${s * (0.05 + i * 0.02)}px)`;
  });
});

console.log('%c Radithya Putra Pratama 🚀', 'font-size:16px;font-weight:bold;color:#fff;background:#111;padding:10px 20px;border-radius:8px');
