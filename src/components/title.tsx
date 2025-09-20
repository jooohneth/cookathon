// import Image from "next/image";

const Title = () => {
  return (
    <div className="mt-12 flex flex-col md:gap-4">
      <div className="w-full flex items-center lg:justify-start uppercase text-4xl md:text-6xl lg:text-8xl xl:text-9xl font-bold">
        {/* <Image
          src="/cookathon.svg"
          alt="logo"
          width={100}
          height={100}
          className="w-8 h-8 md:w-12 md:h-12 lg:w-20 lg:h-20 xl:w-28 xl:h-28"
        /> */}
        <div className="flex gap-4 md:gap-8 lg:gap-12 xl:gap-16">
          <div className="">The</div>
          <div className="">Cookathon</div>
        </div>
      </div>
      <div className="font-semibold text-left uppercase text-md md:text-xl lg:text-3xl xl:text-4xl">
        Where builders come to cook
      </div>
    </div>
  );
};

export default Title;
