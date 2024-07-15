import { useState, Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import {
  MusicalNoteIcon,
  PauseIcon,
  ChevronDownIcon,
} from "@heroicons/react/20/solid";

export default function MusicButton() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState("");

  return (
    <>
      <button>MusicButton</button>
    </>
  );
}
