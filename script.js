document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. CUSTOM CURSOR ---
    const cursor = document.getElementById('custom-cursor');
    if (cursor) {
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });
        document.querySelectorAll('a, button, input, textarea, .proof-link').forEach(el => {
            el.addEventListener('mouseenter', () => cursor.classList.add('cursor-hover'));
            el.addEventListener('mouseleave', () => cursor.classList.remove('cursor-hover'));
        });
    }

    // --- 2. LOADER LOGIC ---
    let count = 0;
        const loader = document.getElementById('loader');
        const numDisp = document.getElementById('loader-number');
        const statusDisp = document.getElementById('loader-status');

        const interval = setInterval(() => {
            count += Math.floor(Math.random() * 4) + 1; 
            if (count > 40) statusDisp.innerText = "DECRYPTING_ASSETS...";
            if (count > 70) statusDisp.innerText = "MOUNTING_DRIVES...";
            if (count >= 100) {
                count = 100;
                clearInterval(interval);
                statusDisp.innerText = "BOOT_SUCCESSFUL";
                setTimeout(() => { 
                    loader.style.opacity = '0';
                    setTimeout(() => { loader.style.display = 'none'; }, 800);
                }, 400);
            }
            numDisp.innerText = count.toString().padStart(3, '0') + "%";
        }, 40);

    // --- 3. TERMINAL INTERACTION ---
    const msgInput = document.getElementById('messageInput');
    const termStatus = document.getElementById('terminalStatus');
    const contactForm = document.getElementById('contactForm');

    if (msgInput && termStatus) {
        msgInput.addEventListener('input', () => {
            termStatus.innerText = msgInput.value.length > 0 ? "DATA_BUFFERING..." : "AWAITING_INPUT";
        });
    }

    if (contactForm) {
        contactForm.onsubmit = (e) => {
            e.preventDefault();
            if (termStatus) termStatus.innerText = "PACKET_SENT_SUCCESS";
            alert("Transmission Successful. Encryption key verified.");
        };
    }

    // --- 4. RANDOM GLITCH ENGINE ---
    const screenContainer = document.querySelector('.screen-container');
    function triggerRandomGlitch() {
        if (!screenContainer) return;
        screenContainer.classList.add('violent-glitch');
        const duration = Math.floor(Math.random() * 350) + 350;
        setTimeout(() => {
            screenContainer.classList.remove('violent-glitch');
            setTimeout(triggerRandomGlitch, Math.floor(Math.random() * 6000) + 4000);
        }, duration);
    }
    setTimeout(triggerRandomGlitch, 3000);

    // --- 5. DEAD PIXEL GENERATOR ---
    for (let i = 0; i < 30; i++) {
        const p = document.createElement('div');
        p.className = 'dead-pixel';
        p.style.left = Math.random() * 100 + 'vw';
        p.style.top = Math.random() * 100 + 'vh';
        p.style.animationDelay = Math.random() * 4 + 's';
        document.body.appendChild(p);
    }

    // --- 6. WORLD CLOCKS ---
    function updateClocks() {
        const now = new Date();
        const options = { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' };
        const kulTime = document.getElementById('kulTime');
        const hamTime = document.getElementById('hamTime');
        if(kulTime) kulTime.innerText = now.toLocaleTimeString('en-GB', { ...options, timeZone: 'Asia/Kuala_Lumpur' }) + " MYT";
        if(hamTime) hamTime.innerText = now.toLocaleTimeString('en-GB', { ...options, timeZone: 'Europe/Berlin' }) + " CEST";
    }
    setInterval(updateClocks, 1000);
    updateClocks();


    // --- 8. TACTICAL CIPHER (GLITCH TEXT) ---
    const glyphs = "ABCDEFHIJKLMNOPQRSTUVWXYZ0123456789#%&@$*+^=}{*ß-_";
    function decodeEffect(el) {
        let iteration = 0;
        const originalText = el.dataset.value || el.innerText;
        if (!el.dataset.value) el.dataset.value = originalText;

        clearInterval(el.interval);
        el.interval = setInterval(() => {
            el.innerText = originalText.split("").map((letter, index) => {
                if (index < iteration) return originalText[index];
                return glyphs[Math.floor(Math.random() * glyphs.length)];
            }).join("");

            if (iteration >= originalText.length) clearInterval(el.interval);
            iteration += 1 / 3;
        }, 30);
    }

    document.querySelectorAll('.glitch-text').forEach(item => {
        item.addEventListener('mouseenter', () => decodeEffect(item));
    });

    // --- 9. UNIFIED MOTION ENGINE (TILT) ---
    const tiltCards = document.querySelectorAll('.glass-card');
    document.addEventListener('mousemove', (e) => {
        const { clientX, clientY } = e;
        
        tiltCards.forEach(card => {
            const rect = card.getBoundingClientRect();
            const x = clientX - rect.left;
            const y = clientY - rect.top;
            const xc = rect.width / 2;
            const yc = rect.height / 2;
            const dx = x - xc;
            const dy = y - yc;
            // Subtle tilt effect
            card.style.transform = `perspective(10000px) rotateX(${-dy / 55}deg) rotateY(${dx / 55}deg) translateZ(5px)`;
        });
    });

    document.addEventListener('mouseleave', () => {
        tiltCards.forEach(card => card.style.transform = `perspective(10000px) rotateX(0deg) rotateY(0deg)`);
    });
  
  // trigger denial //
function triggerDenial() {
    document.body.classList.add('access-denied');
    setTimeout(() => document.body.classList.remove('access-denied'), 400);
}
    // --- 10. REVEAL OBSERVER ---
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.glass-card').forEach(card => revealObserver.observe(card));
      // Ping  //
  setInterval(() => {
    const ping = document.getElementById('ping-value');
    if(ping) {
        const variance = Math.floor(Math.random() * 25) - 10;
        ping.innerText = Math.max(12, 24 + variance);
    }
}, 1000);
  document.querySelectorAll('a[href="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        triggerDenial();
    });
});// --- TERMINAL LOGIC ---
const termInput = document.getElementById('terminal-input');
const termOutput = document.getElementById('terminal-output');

if (termInput) {
    termInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            const cmd = termInput.value.toLowerCase().trim();
            processCommand(cmd);
            termInput.value = '';
        }
    });
}

function processCommand(cmd) {
    let response = "";
    if (cmd === 'help') {
        response = "AVAILABLE COMMANDS: [whoami] [ls] [sudo access] [clear]";
    } else if (cmd === 'whoami') {
        response = "USER: SATVEENRAJ_SINGH // ROLE: SECURITY_ANALYST";
    } else if (cmd === 'ls') {
        response = "PROJECTS: [AIRCRAFT_TELEMETRY] [NETWORK_SOC] [PENTEST_v1]";
    } else if (cmd === 'sudo access') {
        response = "<span style='color: #ff5555;'>[CRITICAL] PERMISSION DENIED. IP LOGGED.</span>";
        document.querySelector('.terminal-box').classList.add('access-denied');
        setTimeout(() => document.querySelector('.terminal-box').classList.remove('access-denied'), 1000);
    } else if (cmd === 'clear') {
        termOutput.innerHTML = "";
        return;
    } else {
        response = `COMMAND NOT FOUND: ${cmd}`;
    }
    
    termOutput.innerHTML += `<div><span style='color:#bd93f9'>> ${cmd}</span></div><div>${response}</div>`;
    termOutput.scrollTop = termOutput.scrollHeight;
}

// --- DYNAMIC LOGGING ---
function addLiveLog(message) {
    const logContainer = document.getElementById('log-container');
    const time = new Date().toLocaleTimeString();
    const entry = document.createElement('div');
    entry.className = 'log-entry';
    entry.innerHTML = `<span style="color:rgba(255,255,255,0.3)">[${time}]</span> ${message}`;
    logContainer.prepend(entry);
    if(logContainer.childNodes.length > 10) logContainer.lastChild.remove();
}

// Random Security Logs
setInterval(() => {
    const logs = [
        "[WARN] Unauthorized attempt from 192.168.1.105",
        "[INFO] Port 443 scanning detected",
        "[OK] SSL Handshake complete",
        "[SYSTEM] Aircraft Telemetry Syncing..."
    ];
    addLiveLog(logs[Math.floor(Math.random() * logs.length)]);
}, 5000);

// Log User Scrolling
window.addEventListener('scroll', () => {
    if (window.scrollY % 500 === 0) addLiveLog("User navigating system memory...");
});
}); // End of DOMContentLoaded