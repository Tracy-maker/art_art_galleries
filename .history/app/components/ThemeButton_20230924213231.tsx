"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { LightBulbIcon, MoonIcon } from "@heroicons/react/20/solid";

export default function ThemeButton() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="bg-blue-500/30 p-2 rounded-lg text-blue-500"
    >
      {resolvedTheme === "dark" ? (
     <LightBulbIcon/>
      ) : (
      <MoonIcon/>
      )}
    </button>
  );
}
