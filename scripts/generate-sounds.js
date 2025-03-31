import fs from 'fs';
import path from 'path';
import { exec } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create the sounds directory if it doesn't exist
const soundsDir = path.join(__dirname, '../public/sounds');
if (!fs.existsSync(soundsDir)) {
  fs.mkdirSync(soundsDir, { recursive: true });
}

// Function to generate a simple HTML file with audio context
function generateSoundHTML(soundType) {
  return `
<!DOCTYPE html>
<html>
<head>
  <title>Generate ${soundType} Sound</title>
</head>
<body>
  <script>
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    
    function generate${soundType}Sound() {
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      switch('${soundType}') {
        case 'bell':
          oscillator.type = 'sine';
          oscillator.frequency.setValueAtTime(880, audioContext.currentTime);
          gainNode.gain.setValueAtTime(0.5, audioContext.currentTime);
          gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 2);
          oscillator.start();
          oscillator.stop(audioContext.currentTime + 2);
          break;
          
        case 'digital':
          oscillator.type = 'square';
          oscillator.frequency.setValueAtTime(440, audioContext.currentTime);
          gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
          gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
          oscillator.start();
          oscillator.stop(audioContext.currentTime + 0.5);
          break;
          
        case 'gentle':
          oscillator.type = 'sine';
          oscillator.frequency.setValueAtTime(440, audioContext.currentTime);
          gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
          gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 1);
          oscillator.start();
          oscillator.stop(audioContext.currentTime + 1);
          break;
      }
    }
    
    generate${soundType}Sound();
  </script>
</body>
</html>`;
}

// Generate HTML files for each sound type
const soundTypes = ['bell', 'digital', 'gentle'];
soundTypes.forEach(type => {
  const htmlContent = generateSoundHTML(type);
  const htmlPath = path.join(__dirname, `generate-${type}.html`);
  fs.writeFileSync(htmlPath, htmlContent);
  
  // Use Chrome to record the audio and save as MP3
  // Note: This requires Chrome to be installed and the --auto-open-devtools-for-tabs flag
  exec(`open -a "Google Chrome" ${htmlPath} --args --auto-open-devtools-for-tabs`);
  
  console.log(`Please record the ${type} sound using Chrome DevTools and save it as ${type}.mp3 in the public/sounds directory`);
}); 