
const ctx = new AudioContext();
function playNote(freq) {
  const osc = ctx.createOscillator();
  osc.frequency.value = freq;
  osc.connect(ctx.destination);
  osc.start();
  osc.stop(ctx.currentTime + 0.4);
}

const notes = { a:262, s:294, d:330, f:349, g:392, h:440, j:494, k:523 };

document.addEventListener("keydown", function (e) {
  const letter = e.key.toLowerCase();
  const key = document.querySelector('[data-key="' + letter + '"]');
  if (!key) return;          
  if (e.repeat) return;      
  key.classList.add("active");
  playNote(notes[letter]);
});

document.addEventListener("keyup", function (e) {
  const key = document.querySelector('[data-key="' + e.key.toLowerCase() + '"]');
  if (!key) return;
  key.classList.remove("active");
});