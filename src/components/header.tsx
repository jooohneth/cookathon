"use client";

import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <div className="w-full flex items-center justify-between">
      <div
        className="md:text-xl uppercase text-o-accent flex flex-col md:flex-row md:gap-3 md:items-center"
        style={{
          WebkitTextStroke: "1px var(--o-accent-stroke)",
        }}
      >
        <span>THE PROGRAM HAS ENDED. {"  "}</span>
        {/* <Countdown targetDate={new Date("2025-08-08T23:59:59Z")} /> */}
      </div>
      <div className="flex flex-row items-center gap-4">
        <Button
          size="lg"
          className="text-lg font-semibold uppercase text-foreground bg-transparent border border-foreground hover:bg-transparent hover:border-o-accent hover:text-o-accent transition-colors duration-400 cursor-pointer"
          onClick={() => {
            // window.open("https://lu.ma/hnm6xu2m", "_blank");
            window.open("https://mantle-builders-hub.vercel.app", "_blank");
          }}
        >
          Closed
        </Button>
        {/* <ThemeToggle /> */}
      </div>
    </div>
  );
};

export default Header;
