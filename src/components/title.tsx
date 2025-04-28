import Image from "next/image";

const Title = () => {
  return (
    <div className="mt-12 flex flex-col gap-4">
      <div className="w-full flex items-center justify-between uppercase text-9xl font-bold">
        <Image
          src="/logo.svg"
          alt="logo"
          width={100}
          height={100}
          className="text-foreground"
        />
        <div className="">The</div>
        <div className="">Cookathon</div>
      </div>
      <div className="font-semibold text-right uppercase text-4xl">
        Where builders come to cook.
      </div>
    </div>
  );
};

export default Title;
