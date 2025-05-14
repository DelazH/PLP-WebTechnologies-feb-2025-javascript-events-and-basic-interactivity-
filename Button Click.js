const moodButton = document.getElementById('mood-btn');
let moods = ['😊 Calm', '🎉 Party', '🌈 Rainbow'];
let currentMood = 0;
moodButton.addEventListener('click', () => {
  currentMood = (currentMood + 1) % moods.length;
  moodButton.textContent = moods[currentMood];
  moodButton.style.backgroundColor = `hsl(${currentMood * 120}, 70%, 60%)`;
});
