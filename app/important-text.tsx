"use client";

import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";

import styles from "@/app/styles/styles.module.css";

export default function ImportantText({ text, onClick, visibilityDuration }) {
  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), 0); // Fade in immediately
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(false), visibilityDuration); // Fade out after given time
    return () => clearTimeout(timeout);
  }, []);

  //Used to set pointer position
  const [pointerPosition, setPointerPosition] = useState({
    left: 0,
    top: 0,
  });

  const [pointerLocation, setPointerLocation] = useState(null); //Used to set transition left or right
  const [isVisible, setIsVisible] = React.useState(false); //Used to toggle visibility

  const ref = useRef(null);

  //Handle Pointer Position
  function handleMouseEnter(ev) {
    setPointerPosition({ left: ev.pageX, top: ev.pageY });
    let posX = ev.pageX - ev.target.offsetLeft;
    let width = ref.current.clientWidth;

    if (posX + 20 < width / 2) {
      setPointerLocation("left");
    } else if (posX - 20 > width / 2) {
      setPointerLocation("right");
    } else {
      setPointerLocation("null");
    }
  }

  //Reset element
  function handleMouseOut(ev) {
    setPointerLocation(null);
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div
        ref={ref}
        className="p-56 border border-sky-500"
        onMouseEnter={(ev) => handleMouseEnter(ev)}
        onMouseLeave={(ev) => handleMouseOut(ev)}
        onClick={onClick}
      >
        <div
          className={`
            ${
              pointerLocation === "left" && isVisible
                ? "transition transform -translate-x-16"
                : pointerLocation === "right" && isVisible
                ? "transition transform translate-x-16"
                : ""
            } ${
            isVisible ? "duration-1000 opacity-100" : "duration-200 opacity-0" //Edit tailwind.config to add more duration ::  transitionDuration: {2000: '2000ms'}
          }`}
        >
          {text}
        </div>
      </div>
    </main>
  );
}
