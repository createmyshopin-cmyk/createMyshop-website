let audioContext: AudioContext | null = null;

function getAudioContext(forceNew = false): AudioContext | null {
  if (typeof window === "undefined") return null;

  const AudioCtx =
    window.AudioContext ||
    (window as Window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;

  if (!AudioCtx) return null;

  if (forceNew || !audioContext) {
    audioContext = new AudioCtx();
  }

  return audioContext;
}

export function setupMessageAudioUnlock() {
  if (typeof window === "undefined") return () => {};

  const unlock = () => {
    const ctx = getAudioContext();
    if (ctx?.state === "suspended") {
      void ctx.resume();
    }
  };

  window.addEventListener("pointerdown", unlock, { passive: true });
  window.addEventListener("keydown", unlock);
  window.addEventListener("touchstart", unlock, { passive: true });

  return () => {
    window.removeEventListener("pointerdown", unlock);
    window.removeEventListener("keydown", unlock);
    window.removeEventListener("touchstart", unlock);
  };
}

function vibrateDevice() {
  if (typeof navigator === "undefined" || typeof navigator.vibrate !== "function") {
    return;
  }

  navigator.vibrate([90, 40, 90, 40, 120]);
}

function playTone(
  ctx: AudioContext,
  frequency: number,
  start: number,
  duration: number,
  volume = 0.11
) {
  const oscillator = ctx.createOscillator();
  const gain = ctx.createGain();

  oscillator.type = "sine";
  oscillator.frequency.setValueAtTime(frequency, ctx.currentTime + start);
  gain.gain.setValueAtTime(0.0001, ctx.currentTime + start);
  gain.gain.exponentialRampToValueAtTime(volume, ctx.currentTime + start + 0.02);
  gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + start + duration);

  oscillator.connect(gain);
  gain.connect(ctx.destination);
  oscillator.start(ctx.currentTime + start);
  oscillator.stop(ctx.currentTime + start + duration + 0.05);
}

async function playWebAudioNotification(forceNewContext = false) {
  const ctx = getAudioContext(forceNewContext);
  if (!ctx) return false;

  if (ctx.state === "suspended") {
    await ctx.resume();
  }

  if (ctx.state !== "running") {
    return false;
  }

  playTone(ctx, 740, 0, 0.09);
  playTone(ctx, 988, 0.11, 0.12);
  playTone(ctx, 1175, 0.24, 0.14);

  return true;
}

export async function playMessageNotification() {
  vibrateDevice();

  try {
    if (await playWebAudioNotification()) return;
  } catch {
    // Retry with a fresh audio context below.
  }

  try {
    if (await playWebAudioNotification(true)) return;
  } catch {
    // Browser blocked autoplay until the user interacts with the page.
  }
}
