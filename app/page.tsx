"use client";

import ImportantText from "@/app/important-text";

export default function Home() {

  let ImportantTextProps = {
    text: "IMPORTANT TEXT",
    onClick: (text) => void 0,
    visibilityDuration: 3000
  };

  // let text = "FLOATING TEXT COMPONENT";
  // let handleClick = (text) => console.log(text);

  // let visibilityDuration = 3;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <ImportantText text={text} onClick={handleClick} visibilityDuration={visibilityDuration} /> */}
      <ImportantText {...ImportantTextProps}/>
    </main>
  );
}
