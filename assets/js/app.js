// Web Speech API Helpers (robusto)
(function () {
  function loadVoices(cb) {
    const ready = () => cb(speechSynthesis.getVoices());
    const voices = speechSynthesis.getVoices();
    if (voices && voices.length) return ready();
    // algunos navegadores cargan voces de forma asíncrona
    speechSynthesis.addEventListener('voiceschanged', ready, { once: true });
    // “kickstart” invisible para forzar carga de voces
    try { speechSynthesis.speak(new SpeechSynthesisUtterance('')); speechSynthesis.cancel(); } catch (e) {}
  }

  window.speak = function (text, voiceHint = 'en-GB') {
    if (!('speechSynthesis' in window)) {
      alert('Speech Synthesis no está soportado en este navegador.');
      return;
    }
    loadVoices(() => {
      const utter = new SpeechSynthesisUtterance(text);
      const voices = speechSynthesis.getVoices() || [];
      const v =
        voices.find(v => v.lang && v.lang.startsWith(voiceHint)) ||
        voices.find(v => v.lang && v.lang.startsWith('en')) ||
        voices[0];
      if (v) utter.voice = v;
      utter.rate = 1;
      utter.pitch = 1;
      speechSynthesis.cancel();
      speechSynthesis.speak(utter);
    });
  };

  window.speakStop = function () {
    if ('speechSynthesis' in window) speechSynthesis.cancel();
  };
})();
