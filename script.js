// script.js
document.getElementById('startBtn').addEventListener('click', () => {
  const birthdate = new Date(document.getElementById('birthdate').value);
  const lifespan = parseInt(document.getElementById('lifespan').value);

  if (!birthdate || !lifespan) {
    alert('Please enter both your birthdate and expected lifespan!');
    return;
  }

  const today = new Date();
  const daysLived = Math.floor((today - birthdate) / (1000*60 * 60 * 24));
  const totalDays = lifespan * 365;
  const daysRemaining = totalDays - daysLived;

  if (daysRemaining <= 0) {
    alert('Lifespan exceeded! Cherish every moment from now on.');
    return;
  }

  document.getElementById('results').classList.remove('hidden');
  document.getElementById('daysLived').textContent = daysLived;
  document.getElementById('daysRemaining').textContent = daysRemaining;

  const secondsRemaining = daysRemaining * 24 * 60 * 60;
  document.getElementById('secondsRemaining').textContent = secondsRemaining;

  // Real-time update for seconds
  let currentSeconds = secondsRemaining;
  setInterval(() => {
    if (currentSeconds > 0) {
      currentSeconds--;
      document.getElementById('secondsRemaining').textContent = currentSeconds;
    }
  }, 1000);
});
