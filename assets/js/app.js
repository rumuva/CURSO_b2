
// Sidebar active link logic
document.querySelectorAll('.sidebar nav a').forEach(a=>{
  if (a.href === window.location.href) a.classList.add('active');
});

// Simple Quiz Engine
window.Quiz = function(containerSelector, questions){
  const el = document.querySelector(containerSelector);
  if (!el) return;
  const form = document.createElement('form');
  form.className = 'card';
  const title = document.createElement('div');
  title.className = 'h2';
  title.textContent = 'Diagnostic Test';
  form.appendChild(title);

  questions.forEach((q,idx)=>{
    const qWrap = document.createElement('div');
    qWrap.className = 'quiz-question';
    const h4 = document.createElement('h4');
    h4.textContent = (idx+1) + '. ' + q.q;
    qWrap.appendChild(h4);
    const opts = document.createElement('div');
    opts.className = 'quiz-options';
    q.options.forEach((opt,oidx)=>{
      const id = `q${idx}_opt${oidx}`;
      const label = document.createElement('label');
      const input = document.createElement('input');
      input.type = 'radio';
      input.name = `q${idx}`;
      input.value = String.fromCharCode(65+oidx);
      input.id = id;
      label.setAttribute('for', id);
      label.appendChild(input);
      label.appendChild(document.createTextNode(' ' + String.fromCharCode(65+oidx) + ') ' + opt));
      opts.appendChild(label);
    });
    qWrap.appendChild(opts);
    form.appendChild(qWrap);
  });

  const submit = document.createElement('button');
  submit.type = 'button';
  submit.className = 'button quiz-submit';
  submit.textContent = 'Submit Answers';
  const scoreEl = document.createElement('div');
  scoreEl.className = 'quiz-score';
  submit.addEventListener('click', ()=>{
    let score = 0;
    questions.forEach((q,idx)=>{
      const checked = form.querySelector(`input[name="q${idx}"]:checked`);
      if (checked && checked.value === q.answer) score++;
    });
    scoreEl.textContent = `Score: ${score}/${questions.length}`;
    window.scrollTo({top:0,behavior:'smooth'});
  });
  form.appendChild(submit);
  form.appendChild(scoreEl);
  el.appendChild(form);
}

// Web Speech API Helpers
window.speak = function(text, voiceHint='en-GB'){
  if (!('speechSynthesis' in window)) { alert('Speech Synthesis not supported in this browser.'); return; }
  const utter = new SpeechSynthesisUtterance(text);
  const voices = speechSynthesis.getVoices();
  const selected = voices.find(v => v.lang.startsWith(voiceHint)) || voices.find(v=>v.lang.startsWith('en')) || voices[0];
  if (selected) utter.voice = selected;
  utter.rate = 1;
  utter.pitch = 1;
  speechSynthesis.cancel();
  speechSynthesis.speak(utter);
}

window.speakStop = function(){ if ('speechSynthesis' in window) speechSynthesis.cancel(); }
