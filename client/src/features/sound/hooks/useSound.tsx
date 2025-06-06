import { useRef } from "react";
import { getSound, SoundKey } from "../soundMapper";

const useSound = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);


const playInLoop = (soundKey: SoundKey, volume: number = 1) => {
    if (volume < 0 || volume > 1) {
        console.error("Volume must be between 0 and 1");
        return;
    }
    const sound = getSound(soundKey);
    if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
    }

    const audio = new Audio(sound);
    audio.loop = true;
    audio.volume = volume;
    audio
        .play()
        .then(() => {
            audioRef.current = audio;
        })
        .catch((error) => {
            console.error("Error playing sound:", error);
        });
};

  const playOnce = (soundKey: SoundKey) => {
    const sound = getSound(soundKey);
    const audio = new Audio(sound);
    audio.loop = false;
    audio
      .play()
      .catch((error) => {
        console.error("Error playing sound:", error);
      });
  };

  const stop = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      audioRef.current = null;
    }
  };

  return {
    playInLoop,
    playOnce,
    stop,
  };
};

export default useSound;
