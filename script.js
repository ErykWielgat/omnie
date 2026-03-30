// --- TWOJA LOGIKA TYPEWRITER (BEZ ZMIAN) ---
const textArray = ["STUDIUJĘ INFORMATYKĘ.", "DOBRZE DZIAŁAM POD PRESJĄ", "LUBIE PRÓBOWAC NOWYCH RZECZY.", "NIE BOJE SIE WYZWAŃ"];
let textIndex = 0;
let charIndex = 0;
const typewriterElement = document.getElementById("typewriter");

const typingSpeed = 80;
const eraseSpeed = 40;
const delayAfterWord = 2000;

function typeWriter() {
    if (typewriterElement && charIndex < textArray[textIndex].length) {
        typewriterElement.innerHTML += textArray[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, typingSpeed);
    } else if (typewriterElement) {
        setTimeout(eraseText, delayAfterWord);
    }
}

function eraseText() {
    if (charIndex > 0) {
        typewriterElement.innerHTML = textArray[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseText, eraseSpeed);
    } else {
        textIndex = (textIndex + 1) % textArray.length;
        setTimeout(typeWriter, 500);
    }
}

// --- TWOJA LOGIKA TŁA CANVA + NOWA INTERAKCJA Z MYSZKĄ ---
const canvas = document.getElementById('circuit-bg');
const ctx = canvas.getContext('2d');

let width, height;
let particles = [];
// --- NOWE: Obiekt myszy do śledzenia pozycji ---
let mouse = {
    x: undefined,
    y: undefined,
    radius: 170 // Odległość, na którą reagują linie do myszy
};

function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
}

window.addEventListener('resize', resize);
resize();

// --- NOWE: Nasłuchiwanie ruchu myszy ---
window.addEventListener('mousemove', function(event) {
    mouse.x = event.x;
    mouse.y = event.y;
});

// --- NOWE: Resetowanie pozycji myszy, gdy kursor opuści okno ---
window.addEventListener('mouseleave', function() {
    mouse.x = undefined;
    mouse.y = undefined;
});

class Particle {
    constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
        this.radius = Math.random() * 1.5 + 0.5;
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > width) this.vx = -this.vx;
        if (this.y < 0 || this.y > height) this.vy = -this.vy;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 128, 0, 0.5)';
        ctx.fill();
    }
}

// Generowanie cząsteczek (70)
for (let i = 0; i < 70; i++) {
    particles.push(new Particle());
}

function animate() {
    ctx.clearRect(0, 0, width, height);

    // --- NOWE: Rysowanie interakcji z MYSZKĄ ---
    if (mouse.x !== undefined && mouse.y !== undefined) {
        for (let i = 0; i < particles.length; i++) {
            const dx = mouse.x - particles[i].x;
            const dy = mouse.y - particles[i].y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < mouse.radius) {
                ctx.beginPath();
                // Intensywność linii zależy od odległości (im bliżej, tym jaśniejsza)
                ctx.strokeStyle = `rgba(255, 128, 0, ${(1 - distance / mouse.radius) * 0.35})`;
                ctx.lineWidth = 1.0;
                ctx.moveTo(mouse.x, mouse.y);
                ctx.lineTo(particles[i].x, particles[i].y);
                ctx.stroke();
            }
        }
    }

    // Pętla po cząsteczkach (istniejąca logika)
    for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();

        // Łączenie cząsteczek między sobą
        for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 130) {
                ctx.beginPath();
                ctx.strokeStyle = `rgba(255, 128, 0, ${(1 - distance / 130) * 0.3})`;
                ctx.lineWidth = 0.8;
                ctx.moveTo(particles[i].x, particles[i].y);
                ctx.lineTo(particles[j].x, particles[j].y);
                ctx.stroke();
            }
        }
    }
    requestAnimationFrame(animate);
}

// START OBU SYSTEMÓW
window.onload = () => {
    setTimeout(typeWriter, 500);
    animate();
};
// --- SKRÓCONA LOGIKA KARUZELI 3D ---
// Tablica przechowuje aktualny układ klas dla 3 kart w HTML
let cardPositions = ['active', 'next', 'prev'];

function moveCarousel(direction) {
    // Array.prototype.unshift() i pop() to operacje na tablicach.
    // Przesuwają one elementy w lewo lub prawo, co pozwala na rotację klas w pętli.
    if (direction === 'next') {
        cardPositions.unshift(cardPositions.pop()); // Ostatni element idzie na początek
    } else {
        cardPositions.push(cardPositions.shift()); // Pierwszy element idzie na koniec
    }

    // Przypisanie nowych klas po rotacji
    document.querySelectorAll('.stacked-card').forEach((card, index) => {
        card.className = 'stacked-card ' + cardPositions[index];
    });
}