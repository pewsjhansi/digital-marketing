import React, { useState, useRef, useEffect } from 'react';
import {
  X,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize2,
  RotateCcw,
  AlertCircle,
  Sparkles,
} from 'lucide-react';
import type { PortfolioVideo } from '../../config/agencyConfig';

interface VideoPlayerModalProps {
  video: PortfolioVideo | null;
  onClose: () => void;
}

export const VideoPlayerModal: React.FC<VideoPlayerModalProps> = ({ video, onClose }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(0.85);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [hasError, setHasError] = useState<boolean>(false);

  // Close and stop playback
  const handleClose = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    onClose();
  };

  // Keyboard navigation: Escape key closes modal, Space toggles play
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose();
      } else if (e.code === 'Space' && e.target === document.body) {
        e.preventDefault();
        togglePlay();
      }
    };

    if (video) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      setIsLoading(true);
      setHasError(false);
      setIsPlaying(true);
    }

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [video]);

  if (!video) return null;

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play().catch(() => {});
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    const nextMuted = !isMuted;
    videoRef.current.muted = nextMuted;
    setIsMuted(nextMuted);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    if (videoRef.current) {
      videoRef.current.volume = val;
      videoRef.current.muted = val === 0;
      setIsMuted(val === 0);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration || 0);
      setIsLoading(false);
      videoRef.current.volume = volume;
      videoRef.current.play().catch(() => {
        // Autoplay may require mute in some browsers
        if (videoRef.current) {
          videoRef.current.muted = true;
          setIsMuted(true);
          videoRef.current.play().catch(() => {});
        }
      });
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const seekTime = parseFloat(e.target.value);
    setCurrentTime(seekTime);
    if (videoRef.current) {
      videoRef.current.currentTime = seekTime;
    }
  };

  const toggleFullscreen = () => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  };

  const formatTime = (seconds: number) => {
    if (isNaN(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-xl animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-label={`Video player for ${video.title}`}
    >
      {/* Click outside to close */}
      <div className="absolute inset-0" onClick={handleClose} aria-hidden="true" />

      {/* Main Reels Vertical Container */}
      <div
        ref={containerRef}
        className="relative z-10 w-full max-w-[420px] aspect-[9/16] max-h-[90vh] bg-black rounded-3xl overflow-hidden border border-purple-500/30 shadow-2xl shadow-purple-950/70 flex flex-col justify-between"
      >
        {/* Top Overlay Bar */}
        <div className="absolute top-0 inset-x-0 z-30 p-4 bg-gradient-to-b from-black/80 via-black/40 to-transparent flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider bg-purple-500/20 text-purple-300 border border-purple-500/30 flex items-center gap-1">
              <Sparkles className="w-3 h-3" />
              <span>{video.category}</span>
            </span>
          </div>

          <button
            onClick={handleClose}
            className="p-2 rounded-full bg-black/60 text-white/80 hover:text-white hover:bg-black/90 transition-all focus:outline-none"
            aria-label="Close video player"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Element */}
        <div className="relative w-full h-full flex items-center justify-center bg-zinc-950 cursor-pointer" onClick={togglePlay}>
          {isLoading && !hasError && (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-black/60 z-20">
              <div className="w-10 h-10 border-3 border-purple-500/30 border-t-purple-400 rounded-full animate-spin" />
              <span className="text-xs font-mono text-slate-300">Loading Reel Stream...</span>
            </div>
          )}

          {hasError ? (
            <div className="flex flex-col items-center justify-center p-6 text-center z-20">
              <AlertCircle className="w-12 h-12 text-rose-500 mb-3" />
              <h4 className="font-heading font-semibold text-white text-base mb-1">
                Video Stream Unavailable
              </h4>
              <p className="text-slate-400 text-xs mb-4">
                The video stream could not be loaded at this time.
              </p>
              <button
                onClick={() => {
                  setHasError(false);
                  setIsLoading(true);
                  if (videoRef.current) {
                    videoRef.current.load();
                  }
                }}
                className="px-4 py-2 rounded-xl bg-purple-600 text-xs font-semibold text-white flex items-center gap-2"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Retry Playback</span>
              </button>
            </div>
          ) : (
            <video
              ref={videoRef}
              src={video.videoUrl}
              poster={video.thumbnailUrl}
              playsInline
              className="w-full h-full object-cover"
              onTimeUpdate={handleTimeUpdate}
              onLoadedMetadata={handleLoadedMetadata}
              onWaiting={() => setIsLoading(true)}
              onPlaying={() => {
                setIsLoading(false);
                setIsPlaying(true);
              }}
              onError={() => {
                setIsLoading(false);
                setHasError(true);
              }}
              onEnded={() => setIsPlaying(false)}
            />
          )}

          {/* Centered Play/Pause Watermark on Pause */}
          {!isPlaying && !isLoading && !hasError && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/30 pointer-events-none">
              <div className="w-16 h-16 rounded-full bg-purple-600/80 backdrop-blur-md flex items-center justify-center text-white shadow-xl shadow-purple-600/40">
                <Play className="w-7 h-7 ml-1" />
              </div>
            </div>
          )}
        </div>

        {/* Bottom Video Controls Overlay */}
        <div className="absolute bottom-0 inset-x-0 z-30 p-4 bg-gradient-to-t from-black/90 via-black/60 to-transparent flex flex-col gap-2">
          {/* Title and Description */}
          <div className="space-y-1 mb-1">
            <h3 className="font-heading font-bold text-base text-white truncate">
              {video.title}
            </h3>
            <p className="text-slate-300 text-xs line-clamp-2 leading-relaxed">
              {video.description}
            </p>
          </div>

          {/* Time Scrubber / Progress Bar */}
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono text-slate-300 w-8">
              {formatTime(currentTime)}
            </span>
            <input
              type="range"
              min="0"
              max={duration || 100}
              step="0.1"
              value={currentTime}
              onChange={handleSeek}
              className="w-full h-1 bg-white/20 rounded-lg appearance-none cursor-pointer accent-purple-400"
              aria-label="Video timeline scrubber"
            />
            <span className="text-[10px] font-mono text-slate-400 w-8 text-right">
              {formatTime(duration)}
            </span>
          </div>

          {/* Controls toolbar */}
          <div className="flex items-center justify-between pt-1">
            <div className="flex items-center gap-3">
              <button
                onClick={togglePlay}
                className="p-1.5 rounded-lg text-white hover:text-purple-300 transition-colors"
                aria-label={isPlaying ? 'Pause video' : 'Play video'}
              >
                {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
              </button>

              {/* Volume & Mute */}
              <div className="flex items-center gap-1.5 group">
                <button
                  onClick={toggleMute}
                  className="p-1.5 rounded-lg text-white hover:text-purple-300 transition-colors"
                  aria-label={isMuted ? 'Unmute video' : 'Mute video'}
                >
                  {isMuted ? <VolumeX className="w-5 h-5 text-rose-400" /> : <Volume2 className="w-5 h-5" />}
                </button>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.05"
                  value={isMuted ? 0 : volume}
                  onChange={handleVolumeChange}
                  className="w-16 h-1 bg-white/20 rounded-lg appearance-none cursor-pointer accent-purple-400 hidden group-hover:block"
                  aria-label="Volume slider"
                />
              </div>
            </div>

            <button
              onClick={toggleFullscreen}
              className="p-1.5 rounded-lg text-white hover:text-purple-300 transition-colors"
              aria-label="Toggle fullscreen"
            >
              <Maximize2 className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
