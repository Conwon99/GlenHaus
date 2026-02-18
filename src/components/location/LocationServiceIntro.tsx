import type { Location } from "@/data/locations";

interface LocationServiceIntroProps {
  location: Location;
}

export const LocationServiceIntro = ({ location }: LocationServiceIntroProps) => {
  return (
    <section className="bg-white py-12 md:py-16">
      <div className="max-w-[1204px] mx-auto px-4 sm:px-5 md:px-8">
        <p className="text-gray-700 text-lg md:text-xl leading-relaxed max-w-3xl">
          {location.serviceIntro}
        </p>
      </div>
    </section>
  );
};
