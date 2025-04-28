import { Button } from "@/components/ui/button";
import Countdown from "@/components/CountdownFlow";

const Header = () => {
  return (
    <div className="w-full flex items-center justify-between">
      <div
        className="md:text-xl uppercase text-o-accent flex flex-col md:flex-row md:gap-3 md:items-center"
        style={{
          WebkitTextStroke: "1px var(--o-accent-stroke)",
        }}
      >
        <span>Time till&apos; cook 001: {"  "}</span>
        <Countdown targetDate={new Date("2025-05-05")} />
      </div>
      <div className="flex flex-row items-center gap-4">
        <Button
          size="lg"
          className="text-lg font-semibold uppercase text-foreground bg-transparent border border-foreground hover:bg-transparent hover:border-o-accent-stroke hover:text-o-accent transition-colors duration-400"
        >
          Register
        </Button>
        {/* <ThemeToggle /> */}
      </div>
    </div>
  );
};

export default Header;
