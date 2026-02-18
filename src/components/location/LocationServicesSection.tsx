import type { Location } from "@/data/locations";
import { ServiceCard } from "@/sections/ServicesSection/components/ServiceCard";

interface LocationServicesSectionProps {
  location: Location;
}

export const LocationServicesSection = ({ location }: LocationServicesSectionProps) => {
  const base = `/${location.slug}`;
  return (
    <section
      id="services"
      className="bg-white box-border caret-transparent pt-[50px] md:pt-[80px] pb-[50px] md:pb-[80px]"
    >
      <div className="box-border caret-transparent max-w-[1200px] mx-auto px-[15px] md:px-[30px]">
        <div className="box-border caret-transparent text-center mb-[30px] md:mb-[50px]">
          <h2 className="text-gray-900 text-3xl font-bold box-border caret-transparent leading-[38px] sm:text-4xl sm:leading-[43.2px] md:text-[56px] md:leading-[67.2px]">
            Our Services in {location.name}
          </h2>
        </div>
        <div className="box-border caret-transparent gap-x-[30px] grid auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] gap-y-[30px] md:grid-cols-[1fr_1fr] md:max-w-[1000px] md:mx-auto">
          <ServiceCard
            href={`${base}/garden-rooms`}
            iconUrl="https://c.animaapp.com/mial13ktyN5Jkh/assets/670f922ca00205c2937593ea_service-04.svg"
            iconAlt={`Garden room installation ${location.name} - Glenhaus Garden Rooms`}
            title="Garden Rooms"
            description={`Professional garden room installation in ${location.name} and across ${location.regionLabel}. Create additional living space with our expert team. Free quotes, fully insured.`}
          />
          <ServiceCard
            href={`${base}/decking`}
            iconUrl="https://c.animaapp.com/mial13ktyN5Jkh/assets/670f922ca00205c2937593ea_service-04.svg"
            iconAlt={`Deck installation ${location.name} - Glenhaus Garden Rooms`}
            title="Decking"
            description={`Expert deck installation in ${location.name} and across ${location.regionLabel}. Transform your outdoor space with quality decking. Free quotes, fully insured.`}
          />
        </div>
      </div>
    </section>
  );
};
