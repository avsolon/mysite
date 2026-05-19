const widget = document.createElement("div");

widget.id = "ai-cat-widget";

widget.innerHTML = `

<!-- ===== CAT SVG ===== -->
<div class="cat-container idle" id="catContainer">
  <span class="speech-bubble" id="speechBubble">Мяу! 🐾</span>
  <div class="hearts-container" id="heartsContainer"></div>
  <span class="sleep-zzz">Z</span>
  <span class="sleep-zzz">z</span>
  <span class="sleep-zzz">z</span>

  <svg class="cat-svg" viewBox="0 0 165 180" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#ffb8d9"/>
        <stop offset="100%" style="stop-color:#ff8fbf"/>
      </linearGradient>
      <linearGradient id="bellyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style="stop-color:#fff0f5"/>
        <stop offset="100%" style="stop-color:#ffd6e8"/>
      </linearGradient>
      <linearGradient id="earGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#ff9ecb"/>
        <stop offset="100%" style="stop-color:#ff6b9d"/>
      </linearGradient>
      <radialGradient id="eyeGrad" cx="40%" cy="40%">
        <stop offset="0%" style="stop-color:#7dd3fc"/>
        <stop offset="100%" style="stop-color:#3b82f6"/>
      </radialGradient>
      <radialGradient id="pupilGrad" cx="50%" cy="50%">
        <stop offset="0%" style="stop-color:#1a1a2e"/>
        <stop offset="100%" style="stop-color:#0d0d1a"/>
      </radialGradient>
      <filter id="softShadow">
        <feDropShadow dx="0" dy="2" stdDeviation="2" flood-color="#000" flood-opacity="0.12"/>
      </filter>
    </defs>

    <g class="cat-body-wrapper">
      <g class="cat-breath-group">
        
        <!-- TAIL -->
        <g class="cat-tail-wag" filter="url(#softShadow)">
          <path d="M120 120 Q140 100 148 75 Q152 55 155 42 Q156 35 152 30 Q148 26 144 32 Q140 40 142 55 Q145 75 135 95 Q128 108 120 120Z" 
                fill="url(#bodyGrad)" stroke="#ff6b9d" stroke-width="1"/>
          <path d="M155 42 Q156 35 152 30 Q148 26 144 32 Q146 38 150 40 Q152 42 155 42Z" 
                fill="#fff0f5" opacity="0.8"/>
        </g>

        <!-- BACK LEGS -->
        <g filter="url(#softShadow)">
          <ellipse cx="48" cy="148" rx="10" ry="6" fill="url(#bodyGrad)" stroke="#ff6b9d" stroke-width="1"/>
          <circle cx="43" cy="147" r="2" fill="#ffb3cc" opacity="0.6"/>
          <circle cx="50" cy="146" r="2" fill="#ffb3cc" opacity="0.6"/>
          <circle cx="56" cy="148" r="1.5" fill="#ffb3cc" opacity="0.6"/>
        </g>
        
        <g filter="url(#softShadow)">
          <ellipse cx="107" cy="148" rx="10" ry="6" fill="url(#bodyGrad)" stroke="#ff6b9d" stroke-width="1"/>
          <circle cx="102" cy="147" r="2" fill="#ffb3cc" opacity="0.6"/>
          <circle cx="109" cy="146" r="2" fill="#ffb3cc" opacity="0.6"/>
          <circle cx="115" cy="148" r="1.5" fill="#ffb3cc" opacity="0.6"/>
        </g>

        <!-- BODY -->
        <g filter="url(#softShadow)">
          <ellipse cx="77" cy="120" rx="38" ry="42" fill="url(#bodyGrad)" stroke="#ff6b9d" stroke-width="1"/>
          <ellipse cx="77" cy="125" rx="22" ry="28" fill="url(#bellyGrad)" opacity="0.7"/>
          <path d="M62 95 Q77 102 92 95" stroke="#ff8fbf" stroke-width="2" fill="none" opacity="0.3"/>
          <path d="M58 105 Q77 112 96 105" stroke="#ff8fbf" stroke-width="2" fill="none" opacity="0.2"/>
        </g>

        <!-- FRONT PAWS -->
        <g class="cat-paw-wave" filter="url(#softShadow)">
          <ellipse cx="38" cy="132" rx="9" ry="5.5" fill="url(#bodyGrad)" stroke="#ff6b9d" stroke-width="1"/>
          <circle cx="34" cy="130" r="1.8" fill="#ffb3cc" opacity="0.6"/>
          <circle cx="40" cy="129" r="1.8" fill="#ffb3cc" opacity="0.6"/>
          <circle cx="46" cy="131" r="1.5" fill="#ffb3cc" opacity="0.6"/>
        </g>

        <g class="cat-paw-lick" filter="url(#softShadow)">
          <ellipse cx="112" cy="132" rx="9" ry="5.5" fill="url(#bodyGrad)" stroke="#ff6b9d" stroke-width="1"/>
          <circle cx="108" cy="130" r="1.8" fill="#ffb3cc" opacity="0.6"/>
          <circle cx="114" cy="129" r="1.8" fill="#ffb3cc" opacity="0.6"/>
          <circle cx="120" cy="131" r="1.5" fill="#ffb3cc" opacity="0.6"/>
        </g>

        <!-- HEAD -->
        <g filter="url(#softShadow)">
          <ellipse cx="77" cy="55" rx="35" ry="32" fill="url(#bodyGrad)" stroke="#ff6b9d" stroke-width="1.5"/>
          
          <!-- Left ear -->
          <g class="cat-ear-left">
            <path d="M45 32 L35 5 L58 24Z" fill="url(#earGrad)" stroke="#ff6b9d" stroke-width="1.5"/>
            <path d="M47 28 L39 12 L54 24Z" fill="#ff6b9d" opacity="0.5"/>
            <path d="M48 26 L42 16 L52 24Z" fill="#ffb3cc" opacity="0.3"/>
          </g>
          
          <!-- Right ear -->
          <g class="cat-ear-right">
            <path d="M109 32 L119 5 L96 24Z" fill="url(#earGrad)" stroke="#ff6b9d" stroke-width="1.5"/>
            <path d="M107 28 L115 12 L100 24Z" fill="#ff6b9d" opacity="0.5"/>
            <path d="M106 26 L112 16 L102 24Z" fill="#ffb3cc" opacity="0.3"/>
          </g>
          
          <!-- Hair tufts -->
          <path d="M67 22 Q72 10 77 22 Q82 10 87 22" stroke="#ff8fbf" stroke-width="1.5" fill="none" opacity="0.5"/>
        </g>

        <!-- FACE -->
        <g>
          <!-- Eyes (open) -->
          <g class="cat-eye-blink">
            <g class="cat-eye-open-group">
              <ellipse cx="62" cy="52" rx="11" ry="12" fill="#fff" stroke="#ff6b9d" stroke-width="1"/>
              <ellipse cx="62" cy="52" rx="10" ry="11" fill="url(#eyeGrad)"/>
              <ellipse class="pupil-left" cx="62" cy="52" rx="5.5" ry="6.5" fill="url(#pupilGrad)"/>
              <ellipse cx="58" cy="47" rx="3" ry="3.5" fill="white" opacity="0.85"/>
              <ellipse cx="65" cy="56" rx="1.5" ry="1.5" fill="white" opacity="0.35"/>
              <path d="M52 44 Q50 40 48 42" stroke="#ff6b9d" stroke-width="1.2" fill="none"/>
              <path d="M72 44 Q74 40 76 42" stroke="#ff6b9d" stroke-width="1.2" fill="none"/>
              
              <ellipse cx="92" cy="52" rx="11" ry="12" fill="#fff" stroke="#ff6b9d" stroke-width="1"/>
              <ellipse cx="92" cy="52" rx="10" ry="11" fill="url(#eyeGrad)"/>
              <ellipse class="pupil-right" cx="92" cy="52" rx="5.5" ry="6.5" fill="url(#pupilGrad)"/>
              <ellipse cx="88" cy="47" rx="3" ry="3.5" fill="white" opacity="0.85"/>
              <ellipse cx="95" cy="56" rx="1.5" ry="1.5" fill="white" opacity="0.35"/>
              <path d="M82 44 Q80 40 78 42" stroke="#ff6b9d" stroke-width="1.2" fill="none"/>
              <path d="M102 44 Q104 40 106 42" stroke="#ff6b9d" stroke-width="1.2" fill="none"/>
            </g>
          </g>

          <!-- Eyes (sleeping) -->
          <g class="cat-sleep-eye-group">
            <path d="M51 54 Q62 60 73 54" stroke="#3b82f6" stroke-width="2.5" fill="none" stroke-linecap="round"/>
            <path d="M81 54 Q92 60 103 54" stroke="#3b82f6" stroke-width="2.5" fill="none" stroke-linecap="round"/>
          </g>

          <!-- Nose -->
          <ellipse cx="77" cy="64" rx="3.5" ry="2.5" fill="#ff6b9d"/>
          <ellipse cx="77" cy="63.5" rx="1.5" ry="1" fill="#ff8fbf" opacity="0.5"/>

          <!-- Mouth -->
          <path d="M77 67 Q72 73 66 71" stroke="#ff6b9d" stroke-width="1.5" fill="none" stroke-linecap="round"/>
          <path d="M77 67 Q82 73 88 71" stroke="#ff6b9d" stroke-width="1.5" fill="none" stroke-linecap="round"/>
          <path d="M73 71 Q77 75 81 71" stroke="#ff6b9d" stroke-width="1" fill="none" stroke-linecap="round" opacity="0.5"/>

          <!-- Whiskers -->
          <g opacity="0.35" stroke="#ff8fbf" stroke-width="1" stroke-linecap="round">
            <line x1="25" y1="58" x2="48" y2="61"/>
            <line x1="22" y1="65" x2="48" y2="65"/>
            <line x1="26" y1="72" x2="48" y2="69"/>
            <line x1="106" y1="61" x2="129" y2="58"/>
            <line x1="106" y1="65" x2="132" y2="65"/>
            <line x1="106" y1="69" x2="128" y2="72"/>
          </g>

          <!-- Blush -->
          <ellipse cx="47" cy="67" rx="7" ry="4.5" fill="#ff6b9d" class="cat-blush"/>
          <ellipse cx="107" cy="67" rx="7" ry="4.5" fill="#ff6b9d" class="cat-blush"/>
        </g>

        <!-- COLLAR -->
        <path d="M50 82 Q77 92 104 82" stroke="#ff4477" stroke-width="3.5" fill="none" stroke-linecap="round"/>
        <circle cx="77" cy="88" r="4.5" fill="#ffdd57" stroke="#ffaa00" stroke-width="1"/>
        <circle cx="77" cy="88" r="1.8" fill="#ffaa00"/>

        <!-- FOREHEAD MARKING -->
        <path d="M68 30 L77 22 L86 30" stroke="#ff8fbf" stroke-width="1.5" fill="none" opacity="0.4"/>
      </g>
    </g>
  </svg>
</div>

<!-- ===== CHAT WINDOW ===== -->
<div class="chat-window" id="chatWindow">
  <div class="chat-header">
    <div class="chat-header-avatar">🐱</div>
    <div class="chat-header-info">
      <div class="chat-header-name">AI-Киса ✨</div>
      <div class="chat-header-status" id="chatStatus">онлайн</div>
    </div>
    <button class="chat-close" id="chatClose">✕</button>
  </div>
  <div class="chat-messages" id="chatMessages">
    <div class="chat-message bot">
      <div class="msg-name">AI-киса</div>
      Мяу~! Привет! 😺 Я твоя кошечка-помощница. Напиши мне что-нибудь! 🐾
    </div>
  </div>
  <div class="chat-input-area">
    <input type="text" class="chat-input" id="chatInput" placeholder="Напиши сообщение..." autocomplete="off"/>
    <button class="chat-send" id="chatSend">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <line x1="22" y1="2" x2="11" y2="13"/>
        <polygon points="22 2 15 22 11 13 2 9 22 2"/>
      </svg>
    </button>
  </div>
</div>
`;

document.body.appendChild(widget);

(function() {
  'use strict';

  const catContainer = document.getElementById('catContainer');
  const chatWindow = document.getElementById('chatWindow');
  const chatMessages = document.getElementById('chatMessages');
  const chatInput = document.getElementById('chatInput');
  const chatSend = document.getElementById('chatSend');
  const chatClose = document.getElementById('chatClose');
  const chatStatus = document.getElementById('chatStatus');
  const speechBubble = document.getElementById('speechBubble');
  const heartsContainer = document.getElementById('heartsContainer');
  const pupils = document.querySelectorAll('.pupil-left, .pupil-right');

  let isSleeping = false;
  let isChatOpen = false;
  let lastActivity = Date.now();
  let idleTimer = null;
  let actionTimers = [];

  const IDLE_THRESHOLD = 30000;

  const idlePhrases = [
    'Мяу 🐾', 'Поиграй со мной! 😺', 'Мурр~ 💕', 
    'Мне скучно... 😿', 'Хочу поговорить! 💬', 'Погладь меня 🤗',
    'Ня! ✨', 'Кто хороший котик? Я! 😸'
  ];

  const wakePhrases = [
    'Ой, ты вернулся! 😻', 'Мяу! Я не спала! 😸', 
    'Привет! 💕', 'Ня! 😺', 'Ура, внимание! ✨'
  ];

  const sleepPhrases = [
    'Zzz... 😴', 'Сладких снов... 💤', 'Мяу... zzz 🌙',
    'Кошечка устала... 😿💤'
  ];

  // ===== ACTIVITY TRACKING =====
  function resetIdleTimer() {
    lastActivity = Date.now();
    if (isSleeping) wakeUp();
    clearTimeout(idleTimer);
    idleTimer = setTimeout(goToSleep, IDLE_THRESHOLD);
  }

  document.addEventListener('mousemove', resetIdleTimer);
  document.addEventListener('mousedown', resetIdleTimer);
  document.addEventListener('keydown', resetIdleTimer);
  document.addEventListener('touchstart', resetIdleTimer);
  document.addEventListener('scroll', resetIdleTimer);

  // ===== SLEEP / WAKE =====
  function goToSleep() {
    if (isChatOpen) return;
    isSleeping = true;
    catContainer.className = 'cat-container sleeping';
    chatStatus.textContent = 'спит 😴';
    showSpeech(sleepPhrases[Math.floor(Math.random() * sleepPhrases.length)]);
    clearAllTimers();
  }

  function wakeUp() {
    isSleeping = false;
    catContainer.className = 'cat-container idle';
    chatStatus.textContent = 'онлайн';
    showSpeech(wakePhrases[Math.floor(Math.random() * wakePhrases.length)]);
    scheduleRandomActions();
  }

  // ===== RANDOM ACTIONS =====
  function scheduleRandomActions() {
    if (isSleeping || isChatOpen) return;

    const waveDelay = 4000 + Math.random() * 7000;
    const t1 = setTimeout(() => {
      if (!isSleeping && !isChatOpen) doWave();
    }, waveDelay);
    actionTimers.push(t1);

    const lickDelay = 6000 + Math.random() * 10000;
    const t2 = setTimeout(() => {
      if (!isSleeping && !isChatOpen) doLick();
    }, lickDelay);
    actionTimers.push(t2);

    const speechDelay = 7000 + Math.random() * 12000;
    const t3 = setTimeout(() => {
      if (!isSleeping && !isChatOpen && Math.random() > 0.4) {
        showSpeech(idlePhrases[Math.floor(Math.random() * idlePhrases.length)]);
      }
      scheduleRandomActions();
    }, speechDelay);
    actionTimers.push(t3);
  }

  function clearAllTimers() {
    clearTimeout(idleTimer);
    actionTimers.forEach(t => clearTimeout(t));
    actionTimers = [];
  }

  // ===== WAVE PAW =====
  function doWave() {
    catContainer.classList.remove('idle');
    catContainer.classList.add('waving');
    showSpeech('Привет~! 👋');
    
    setTimeout(() => {
      catContainer.classList.remove('waving');
      catContainer.classList.add('idle');
    }, 2000);
  }

  // ===== LICK PAW =====
  function doLick() {
    catContainer.classList.remove('idle');
    catContainer.classList.add('licking');
    
    setTimeout(() => {
      catContainer.classList.remove('licking');
      catContainer.classList.add('idle');
    }, 1200);
  }

  // ===== SPEECH BUBBLE =====
  function showSpeech(text) {
    speechBubble.textContent = text;
    speechBubble.classList.remove('show');
    void speechBubble.offsetWidth;
    speechBubble.classList.add('show');
    
    setTimeout(() => {
      speechBubble.classList.remove('show');
    }, 3000);
  }

  // ===== HEARTS =====
  function spawnHearts() {
    for (let i = 0; i < 5; i++) {
      setTimeout(() => {
        const heart = document.createElement('span');
        heart.className = 'floating-heart';
        heart.textContent = ['💕', '💖', '💗', '🩷', '✨'][Math.floor(Math.random() * 5)];
        heart.style.left = (Math.random() * 80 + 20) + 'px';
        heart.style.top = (Math.random() * 60 + 20) + 'px';
        heartsContainer.appendChild(heart);
        setTimeout(() => heart.remove(), 2000);
      }, i * 150);
    }
  }

  // ===== CHAT =====
  function toggleChat() {
    isChatOpen = !isChatOpen;
    chatWindow.classList.toggle('open', isChatOpen);
    
    if (isChatOpen) {
      spawnHearts();
      chatInput.focus();
      clearAllTimers();
    } else {
      chatInput.blur();
      resetIdleTimer();
      scheduleRandomActions();
    }
  }

  catContainer.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleChat();
  });

  chatClose.addEventListener('click', () => toggleChat());

  async function sendMessage() {

    const text = chatInput.value.trim();
    if (!text) return;
    addMessage(text, 'user');
    chatInput.value = '';
    showTyping();
    try {
      const response = await fetch(
        'https://asolontsov.ru/service/cat-ai/chat',
        {
          method: 'POST',

          headers: {
            'Content-Type': 'application/json'
          },

          body: JSON.stringify({
            message: text
          })
        }
      );

      const data = await response.json();
      removeTyping();
      addMessage(
        data.reply || 'Мяу~ 😺',
        'bot'
      );
      speakText(data.reply);
      spawnHearts();
    } catch (err) {
      removeTyping();
      addMessage(
        'Мяу… ошибка соединения 😿',
        'bot'
      );
      console.error(err);
    }
  }


  function addMessage(text, type) {
    const msg = document.createElement('div');
    msg.className = 'chat-message ' + type;
    
    if (type === 'bot') {
      msg.innerHTML = '<div class="msg-name">AI-киса</div>' + text;
    } else {
      msg.textContent = text;
    }
    
    chatMessages.appendChild(msg);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  function speakText(text) {
    const speech =
      new SpeechSynthesisUtterance(text);
    speech.lang = 'ru-RU';
    speech.pitch = 1.3;
    speech.rate = 1;
    speech.volume = 1;
    speechSynthesis.speak(speech);
  }

  function showTyping() {
    const typing = document.createElement('div');
    typing.className = 'chat-typing';
    typing.id = 'typingIndicator';
    typing.innerHTML = '<span class="typing-dot"></span><span class="typing-dot"></span><span class="typing-dot"></span>';
    chatMessages.appendChild(typing);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  function removeTyping() {
    const typing = document.getElementById('typingIndicator');
    if (typing) typing.remove();
  }

  chatSend.addEventListener('click', sendMessage);
  chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendMessage();
  });

  // ===== EYES FOLLOW MOUSE =====
  document.addEventListener('mousemove', (e) => {
    if (isSleeping) return;
    
    const rect = catContainer.getBoundingClientRect();
    const catCenterX = rect.left + rect.width / 2;
    const catCenterY = rect.top + rect.height * 0.3;
    
    const angle = Math.atan2(e.clientY - catCenterY, e.clientX - catCenterX);
    const distance = 2.5;
    
    const offsetX = Math.cos(angle) * distance;
    const offsetY = Math.sin(angle) * distance;
    
    pupils.forEach((pupil, index) => {
      const baseX = index === 0 ? 62 : 92;
      const baseY = 52;
      pupil.setAttribute('cx', baseX + offsetX);
      pupil.setAttribute('cy', baseY + offsetY);
    });
  });

  // ===== INIT =====
  resetIdleTimer();
  scheduleRandomActions();

  window.addEventListener('beforeunload', clearAllTimers);

})();
