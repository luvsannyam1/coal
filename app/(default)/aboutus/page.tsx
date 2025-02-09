import Image from "next/image";
import BlurredShapeGray from "@/public/images/blurred-shape-gray.svg";
import BlurredShape from "@/public/images/blurred-shape.svg";

export default function AboutUs() {
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
          {/* Section Header */}
          <div className="mx-auto max-w-3xl pb-4 text-center md:pb-12">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-amber-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-amber-200/50">
              <span className="inline-flex bg-linear-to-r from-amber-500 to-amber-200 bg-clip-text text-transparent">
                About Us
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-amber-200),var(--color-gray-50),var(--color-amber-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Empowering the Future of Coal Trading
            </h2>
            <p className="text-lg text-amber-200/65">
              At CoalConnect, we aim to revolutionize the coal marketplace by
              offering a transparent, efficient, and secure platform for buyers
              and sellers. Our mission is to streamline transactions, foster
              trust, and drive sustainable practices within the industry.
            </p>
          </div>
          {/* About Content */}
          <div className="mx-auto grid max-w-sm gap-12 sm:max-w-none sm:grid-cols-2 md:gap-x-14 md:gap-y-16 lg:grid-cols-3">
            <article>
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                Our Mission
              </h3>
              <p className="text-amber-200/65">
                To create a seamless, transparent marketplace that connects coal
                producers with global buyers, ensuring fair trade and fostering
                long-term partnerships.
              </p>
            </article>
            <article>
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                Our Vision
              </h3>
              <p className="text-amber-200/65">
                To be the leading digital platform for coal trading, driving
                innovation and sustainability in the energy sector.
              </p>
            </article>
            <article>
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                Our Values
              </h3>
              <p className="text-amber-200/65">
                Integrity, transparency, and sustainability guide every
                transaction and relationship within our marketplace.
              </p>
            </article>
            <article>
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                Our Team
              </h3>
              <p className="text-amber-200/65">
                A group of dedicated professionals with expertise in energy
                markets, technology, and sustainability, working together to
                transform the coal industry.
              </p>
            </article>
            <article>
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                Our Platform
              </h3>
              <p className="text-amber-200/65">
                Built with cutting-edge technology to ensure secure, efficient,
                and user-friendly transactions for all stakeholders.
              </p>
            </article>
            <article>
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                Sustainability
              </h3>
              <p className="text-amber-200/65">
                Committed to promoting environmentally responsible practices
                within the coal industry and supporting a transition to cleaner
                energy sources.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
