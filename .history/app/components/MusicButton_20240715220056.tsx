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

  const toggleMusic = () => {
    setIsPlaying(!isPlaying);
    const audio = document.getElementById(
      "background-music"
    ) as HTMLAudioElement;
    if (audio) {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
    }
  };

  const selectTrack = (track: string) => {
    setCurrentTrack(track);
    const audio = document.getElementById(
      "background-music"
    ) as HTMLAudioElement;

    if (audio) {
      audio.src = track;
      if (isPlaying) {
        audio.play();
      }
    }
  };

  return (
    <>
      <button
        onClick={toggleMusic}
        className="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:ring-teal-500 dark:hover:bg-gray-800"
      >
        {isPlaying ? (
          <PauseIcon className="w-6 h-6" />
        ) : (
          <MusicalNoteIcon className="w-6 h-6" />
        )}
      </button>

      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
            Select Music
            <ChevronDownIcon className="w-5 h-5 ml-2 -mr-1" />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              <Menu.Item>
                {({ active }) => (
                  <a
                    onClick={() => selectTrack("/music1.mp3")}
                    className={`${
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                    } block px-4 py-2 text-sm cursor-pointer`}
                  >
                    Music Track 1
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    onClick={() => selectTrack("/music2.mp3")}
                    className={`${
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                    } block px-4 py-2 text-sm cursor-pointer`}
                  >
                    Music Track 2
                  </a>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>

      <audio id="background-music" loop></audio>
    </>
  );
}