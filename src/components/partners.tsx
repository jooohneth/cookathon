import Image from "next/image";

const Partners = () => {
  return (
    <div className="w-full mt-12 flex flex-col gap-4">
      <div className="text-md md:text-xl lg:text-2xl xl:text-3xl font-bold uppercase">
        Partners
      </div>
      <div className="grid grid-cols-3 md:grid-cols-6 gap-x-8 gap-y-0 lg:gap-y-4 lg:gap-x-16 items-center justify-center">
        <div className="w-full h-16 md:h-24 flex items-center justify-center">
          <a href="https://privy.io" target="_blank" rel="noopener noreferrer">
            <Image
              src="/partners/privy.svg"
              alt="Privy"
              width={0}
              height={0}
              className="w-40"
            />
          </a>
        </div>
        <div className="w-full h-16 md:h-24 flex items-center justify-center">
          <a
            href="https://layerzero.network/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/partners/lz.svg"
              alt="LayerZero"
              width={0}
              height={0}
              className="w-60"
            />
          </a>
        </div>
        <div className="w-full h-16 md:h-24 flex items-center justify-center mb-1 lg:mb-2">
          <a
            href="https://zerion.io/api"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/partners/zerion.svg"
              alt="Zerion"
              width={0}
              height={0}
              className="w-40"
            />
          </a>
        </div>
        <div className="w-full h-16 md:h-24 flex items-center justify-center">
          <a
            href="https://omni.network/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/partners/omni.svg"
              alt="Omni"
              width={0}
              height={0}
              className="w-40"
            />
          </a>
        </div>
        <div className="w-full h-16 md:h-24 flex items-center justify-center">
          <a
            href="https://www.airfoil.studio/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/partners/airfoil.svg"
              alt="Airfoil"
              width={0}
              height={0}
              className="w-20 md:w-30"
            />
          </a>
        </div>
        <div className="w-full h-16 md:h-24 flex items-center justify-center">
          <a
            href="https://www.odisea.xyz/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/partners/odisea.svg"
              alt="Odisea"
              width={0}
              height={0}
              className="w-40"
            />
          </a>
        </div>
        <div className="w-full h-16 md:h-24 flex items-center justify-center">
          <a
            href="https://www.talentprotocol.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/partners/talent.svg"
              alt="Talent"
              width={0}
              height={0}
              className="w-40"
            />
          </a>
        </div>
        <div className="w-full h-16 md:h-24 flex items-center justify-center">
          <a
            href="https://www.developerdao.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/partners/d_d.svg"
              alt="DeveloperDAO"
              width={0}
              height={0}
              className="w-15 lg:w-20"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Partners;
