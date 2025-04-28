import Image from "next/image";

const Footer = () => {
  return (
    <div className="w-full my-8 flex flex-row justify-around md:justify-center items-center gap-25 font-medium text-2xl">
      <a href="https://x.com/" target="_blank" rel="noopener noreferrer">
        <Image
          src="/x.svg"
          alt="X"
          width={0}
          height={0}
          className="w-5 h-5 md:w-7 md:h-7"
        />
      </a>
      <a href="https://t.me/" target="_blank" rel="noopener noreferrer">
        <Image
          src="/tg.svg"
          alt="Telegram"
          width={0}
          height={0}
          className="w-8 h-8 md:w-10 md:h-10"
        />
      </a>
      <a
        href="https://www.youtube.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/yt.svg"
          alt="Youtube"
          width={0}
          height={0}
          className="w-10 h-10 md:w-12 md:h-12"
        />
      </a>
    </div>
  );
};

export default Footer;
