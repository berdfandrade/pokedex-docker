import React, { useState, useRef } from "react";
import { IconButton } from "@chakra-ui/react";
import { FaPlay, FaPause } from "react-icons/fa";

interface PlayButtonProps {
  audioUrl: string;
}

const PlayButton: React.FC<PlayButtonProps> = ({ audioUrl }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <>
      <IconButton
        p={5}
        aria-label={isPlaying ? "Pause" : "Play"}
        icon={isPlaying ? <FaPause /> : <FaPlay />}
        onClick={handlePlayPause}
        size="lg"
        borderRadius={"full"}
      />
      <audio
        ref={audioRef}
        src={audioUrl}
        onEnded={() => setIsPlaying(false)}
      />
    </>
  );
};

export default PlayButton;
