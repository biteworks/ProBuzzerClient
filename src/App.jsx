import React, { useState, useEffect } from 'react';
import Sound from './components/Sound';
import Progressbar from './components/Progressbar';

const soundList = [
  {
    name: 'Blub',
    URL: 'https://download.samplelib.com/mp3/sample-3s.mp3',
  },
  {
    name: 'Blob',
    URL: 'https://download.samplelib.com/mp3/sample-9s.mp3',
  },
  {
    name: 'Blab',
    URL: 'https://download.samplelib.com/mp3/sample-3s.mp3',
  },
];

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  var audio = new Audio();

  audio.addEventListener('ended', function () {
    setIsPlaying(false);
  });

  const playSound = (url) => {
    if (!isPlaying) {
      audio.src = url;
      audio.load();
      audio.play();
      setIsPlaying(true);
    }
  };

  return (
    <>
      {isPlaying ? <Progressbar /> : null}
      {soundList.map((sound) => (
        <Sound
          key={sound.name}
          playSound={playSound}
          name={sound.name}
          url={sound.URL}
        />
      ))}
    </>
  );
}

export default App;
