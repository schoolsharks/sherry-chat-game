import { useRef, useState, useCallback } from "react";
import { getSound, SoundKey } from "../soundMapper";

interface PendingSound {
  soundKey: SoundKey;
  volume: number;
  loop: boolean;
}

const useSound = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [needsPermission, setNeedsPermission] = useState<boolean>(true);
  const [hasUserInteracted, setHasUserInteracted] = useState<boolean>(false);
  const [pendingSound, setPendingSound] = useState<PendingSound | null>(null);
  const currentSoundRef = useRef<SoundKey | null>(null);
  const isPlayingRef = useRef<boolean>(false);

  // Test if we can actually play audio without user interaction
  const checkAutoplaySupport = useCallback(async (): Promise<boolean> => {
    try {
      // Use a real audio file to test autoplay, not a data URL
      const audio = new Audio();
      audio.volume = 0.01;
      audio.muted = true; // Start muted to avoid sound during test
      
      // Create a short silence audio programmatically
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      const buffer = audioContext.createBuffer(1, 1, 22050);
      const source = audioContext.createBufferSource();
      source.buffer = buffer;
      
      // Test with actual audio element
      const testSound = getSound("BGM_1" as SoundKey); // Use your actual sound
      const testAudio = new Audio(testSound);
      testAudio.volume = 0;
      
      const playPromise = testAudio.play();
      if (playPromise !== undefined) {
        await playPromise;
        testAudio.pause();
        testAudio.currentTime = 0;
        return true;
      }
      return false;
    } catch (error) {
      console.log("Autoplay test failed:", error);
      return false;
    }
  }, []);

  const playSound = useCallback(async (soundKey: SoundKey, volume: number = 1, loop: boolean = false) => {
    console.log(`Attempting to play sound: ${soundKey}, volume: ${volume}, loop: ${loop}`);
    
    // Prevent duplicate sounds from playing simultaneously
    if (isPlayingRef.current && currentSoundRef.current === soundKey && loop) {
      console.log(`Sound ${soundKey} is already playing, skipping duplicate`);
      return;
    }

    // Validate volume
    if (volume < 0 || volume > 1) {
      console.error("Volume must be between 0 and 1");
      return;
    }

    const sound = getSound(soundKey);
    
    // Stop current audio if playing a looped sound
    if (loop && audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      audioRef.current = null;
      currentSoundRef.current = null;
      isPlayingRef.current = false;
    }

    const audio = new Audio(sound);
    audio.loop = loop;
    audio.volume = volume;
    
    // Add event listeners for tracking
    audio.addEventListener('play', () => {
      console.log(`Audio started playing: ${soundKey}`);
      isPlayingRef.current = true;
      if (loop) {
        currentSoundRef.current = soundKey;
      }
    });

    audio.addEventListener('ended', () => {
      console.log(`Audio ended: ${soundKey}`);
      if (!loop) {
        isPlayingRef.current = false;
        currentSoundRef.current = null;
      }
    });

    audio.addEventListener('pause', () => {
      console.log(`Audio paused: ${soundKey}`);
      if (!loop) {
        isPlayingRef.current = false;
        currentSoundRef.current = null;
      }
    });

    audio.addEventListener('error', (e) => {
      console.error(`Audio error for ${soundKey}:`, e);
      isPlayingRef.current = false;
      currentSoundRef.current = null;
    });

    try {
      const playPromise = audio.play();
      
      if (playPromise !== undefined) {
        await playPromise;
        console.log(`Successfully started playing: ${soundKey}`);
        
        if (loop) {
          audioRef.current = audio;
        }
        
        // If we successfully played, ensure permission modal is closed
        setNeedsPermission(false);
        setHasUserInteracted(true);
        setPendingSound(null);
      }
      
    } catch (error: any) {
      console.error(`Error playing sound ${soundKey}:`, error);
      isPlayingRef.current = false;
      currentSoundRef.current = null;
      
      // Check if the error is due to user interaction requirement
      if (error.name === 'NotAllowedError' || 
          error.name === 'AbortError' ||
          error.message.includes('user interaction') ||
          error.message.includes('autoplay') ||
          error.message.includes('gesture')) {
        
        console.log("Audio blocked by browser policy, requesting permission");
        // Store the pending sound and show permission modal
        setPendingSound({ soundKey, volume, loop });
        setNeedsPermission(true);
      }
    }
  }, []);

  const playInLoop = useCallback((soundKey: SoundKey, volume: number = 1) => {
    playSound(soundKey, volume, true);
  }, [playSound]);

  const playOnce = useCallback((soundKey: SoundKey, volume: number = 1) => {
    playSound(soundKey, volume, false);
  }, [playSound]);

  const stop = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      audioRef.current = null;
    }
    currentSoundRef.current = null;
    isPlayingRef.current = false;
  }, []);

  const handlePermissionGranted = useCallback(async () => {
    console.log("User granted audio permission");
    setHasUserInteracted(true);
    setNeedsPermission(false);
    
    // Play the pending sound that failed earlier
    if (pendingSound) {
      console.log(`Playing pending sound: ${pendingSound.soundKey}`);
      // Small delay to ensure the modal is closed and DOM is updated
      setTimeout(() => {
        playSound(pendingSound.soundKey, pendingSound.volume, pendingSound.loop);
      }, 100);
      setPendingSound(null);
    }
  }, [pendingSound, playSound]);

  const handlePermissionDenied = useCallback(() => {
    console.log("User denied audio permission");
    setNeedsPermission(false);
    setPendingSound(null);
    setHasUserInteracted(true);
  }, []);

  // Function to retry playing sounds manually
  const retryPendingSound = useCallback(() => {
    if (pendingSound && hasUserInteracted) {
      playSound(pendingSound.soundKey, pendingSound.volume, pendingSound.loop);
    }
  }, [pendingSound, hasUserInteracted, playSound]);

  return {
    needsPermission,
    hasUserInteracted,
    pendingSound,
    isPlaying: isPlayingRef.current,
    currentSound: currentSoundRef.current,
    playInLoop,
    playOnce,
    stop,
    handlePermissionGranted,
    handlePermissionDenied,
    retryPendingSound,
    checkAutoplaySupport,
  };
};

export default useSound;