import Image from "next/image";
import React from "react";

export const Pagos = () => {
  return (
    <div>
      <div className="bg-blue-900 flex justify-center items-center h-12 text-white">
        <h2 className="font-bold text-2xl lg:text-xl sm:text-base 2xs:text-sm">
          Payment Methods
        </h2>
      </div>
      <div className="py-10 flex justify-evenly">
        <div className="w-36 h-36 relative sm:w-20 sm:h-20">
          <Image
            src="/pagos/visa.png"
            alt="visa-logo"
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className="w-36 h-36 relative sm:w-20 sm:h-20">
          <Image
            src="/pagos/mastercard.png"
            alt="mastercard-logo"
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className="w-36 h-36 relative sm:w-20 sm:h-20">
          <Image
            src="/pagos/maestro.png"
            alt="maestro-logo"
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className="w-36 h-36 relative sm:w-20 sm:h-20">
          <Image
            src="/pagos/pago-facil.png"
            alt="pago-facil-logo"
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
      <div className="bg-blue-900 flex justify-evenly py-10 sm:flex-col">
        <div className="sm:w-full">
          <Image
            src="/images/shopping.jpg"
            alt="shopping-image"
            width={500}
            height={0}
            className="rounded-lg sm:w-full sm:rounded-none"
          />
        </div>
        <div className="text-white font-extrabold text-5xl w-3/6 flex justify-center items-center border-l-2 sm:text-2xl sm:border-t-2 sm:border-l-0 sm:w-full">
          <h2 className="text-center">
            Up to 30% discount when using these payment methods!
          </h2>
        </div>
      </div>
    </div>
  );
};
