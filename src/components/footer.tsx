import Image from "next/image";

const Footer = () => {
  return (
    <div className="px-8 md:px-20 w-full my-8 flex flex-row justify-around md:justify-center items-center gap-25 font-medium text-2xl">
      <a
        href="https://x.com/0xMantleDevs"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/sm/x.svg"
          alt="X"
          width={0}
          height={0}
          className="w-4 h-4 md:w-5 md:h-5"
        />
      </a>
      <a
        href="https://t.me/+UpJHOMSqMnAyYWQx"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/sm/tg.svg"
          alt="Telegram"
          width={0}
          height={0}
          className="w-6 h-6 md:w-7 md:h-7"
        />
      </a>
      {/* <a
        href="https://www.youtube.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/sm/yt.svg"
          alt="Youtube"
          width={0}
          height={0}
          className="w-6 h-6 md:w-8 md:h-8"
        />
      </a> */}
    </div>
  );
};

export default Footer;
