import Image from "next/image";
import BlurredShapeGray from "@/public/images/blurred-shape-gray.svg";
import BlurredShape from "@/public/images/blurred-shape.svg";
import FeaturesImage from "@/public/images/features.png";

export default function Features() {
  return (
    <section className="relative">
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 -mt-20 -translate-x-1/2"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={BlurredShapeGray}
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-80 -translate-x-[120%] opacity-50"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={BlurredShape}
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-400/.25),transparent)1] md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-4 text-center md:pb-12">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-amber-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-amber-200/50">
              <span className="inline-flex bg-linear-to-r from-amber-500 to-amber-200 bg-clip-text text-transparent">
                Marketplace Features
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-amber-200),var(--color-gray-50),var(--color-amber-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              The Future of Coal Trading
            </h2>
            <p className="text-lg text-amber-200/65">
              Revolutionizing how coal is bought and sold. Our platform ensures
              transparency, efficiency, and reliability for every transaction.
            </p>
          </div>
          <div className="flex justify-center pb-4 md:pb-12" data-aos="fade-up">
            <Image
              className="max-w-none"
              src={FeaturesImage}
              width={1104}
              height={384}
              alt="Marketplace Overview"
            />
          </div>
          {/* Items */}
          <div className="mx-auto grid max-w-sm gap-12 sm:max-w-none sm:grid-cols-2 md:gap-x-14 md:gap-y-16 lg:grid-cols-3">
            <article>
              <svg
                className="mb-3 fill-amber-500"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
              >
                <path d="M3 12h18v2H3z" />
                <path fillOpacity=".48" d="M6 6h12v2H6zM6 18h12v2H6z" />
              </svg>
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                Real-Time Pricing
              </h3>
              <p className="text-amber-200/65">
                Get instant updates on coal prices, ensuring you always make
                informed decisions.
              </p>
            </article>
            <article>
              <svg
                className="mb-3 fill-amber-500"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
              >
                <path fillOpacity=".48" d="M2 4h20v2H2zM2 18h20v2H2z" />
                <path d="M4 8h16v8H4z" />
              </svg>
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                Secure Transactions
              </h3>
              <p className="text-amber-200/65">
                Every deal is encrypted and protected, giving you peace of mind
                with every trade.
              </p>
            </article>
            <article>
              <svg
                className="mb-3 fill-amber-500"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
              >
                <path d="M12 2l7 7h-4v7h-6V9H5z" />
                <path fillOpacity=".48" d="M4 20h16v2H4z" />
              </svg>
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                Verified Suppliers
              </h3>
              <p className="text-amber-200/65">
                We partner with trusted coal suppliers to ensure the highest
                quality and reliability.
              </p>
            </article>
            <article>
              <svg
                className="mb-3 fill-amber-500"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
              >
                <path fillOpacity=".48" d="M2 2h20v2H2zM2 20h20v2H2z" />
                <path d="M4 6h16v12H4z" />
              </svg>
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                Global Reach
              </h3>
              <p className="text-amber-200/65">
                Connect with buyers and sellers worldwide, expanding your
                business opportunities.
              </p>
            </article>
            <article>
              <svg
                className="mb-3 fill-amber-500"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
              >
                <path d="M12 4l4 8h-8l4-8z" />
                <path fillOpacity=".48" d="M4 16h16v2H4zM4 20h16v2H4z" />
              </svg>
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                Advanced Analytics
              </h3>
              <p className="text-amber-200/65">
                Use detailed analytics to track trends and optimize your trading
                strategies.
              </p>
            </article>
            <article>
              <svg
                className="mb-3 fill-amber-500"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
              >
                <path d="M12 0l6 6h-4v12h-4V6H6z" />
                <path fillOpacity=".48" d="M4 20h16v2H4z" />
              </svg>
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                Seamless Logistics
              </h3>
              <p className="text-amber-200/65">
                Integrated logistics solutions to ensure smooth and timely
                delivery of coal shipments.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
