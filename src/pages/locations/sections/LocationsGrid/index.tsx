import type { Location } from "@/data/locations";
import { LocationCard } from "./components/LocationCard";

interface LocationsGridProps {
  regionTitle: string;
  locations: Location[];
  regionSubtitle?: string;
}

export const LocationsGrid = ({ regionTitle, locations, regionSubtitle }: LocationsGridProps) => {
  return (
    <section className="py-12 md:py-16">
      <div className="max-w-[1204px] mx-auto px-4 sm:px-5 md:px-8">
        <h2 className="text-gray-900 text-3xl font-bold mb-2 sm:text-4xl md:text-[42px] md:leading-tight">
          {regionTitle}
        </h2>
        {regionSubtitle && (
          <p className="text-gray-600 text-base md:text-lg mb-8 max-w-2xl">
            {regionSubtitle}
          </p>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {locations.map((location) => (
            <LocationCard key={location.slug} location={location} />
          ))}
        </div>
      </div>
    </section>
  );
};
