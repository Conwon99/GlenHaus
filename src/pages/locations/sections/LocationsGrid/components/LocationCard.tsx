import type { Location } from "@/data/locations";

interface LocationCardProps {
  location: Location;
}

export const LocationCard = ({ location }: LocationCardProps) => {
  const locationHref = `/${location.slug}`;
  const deckingHref = `/${location.slug}/decking`;
  const gardenRoomsHref = `/${location.slug}/garden-rooms`;

  return (
    <article className="bg-white border border-slate-200 rounded-[20px] p-5 md:p-6 shadow-sm hover:shadow-md transition-shadow">
      <h3 className="text-gray-900 text-xl font-bold leading-tight mb-4 md:text-2xl">
        <a href={locationHref} className="hover:text-[#787e59] transition-colors">
          {location.name}
        </a>
      </h3>
      <div className="flex flex-col gap-3">
        <a
          href={deckingHref}
          className="min-h-[44px] inline-flex items-center justify-center px-4 py-3 rounded-[10px] bg-[#787e59] text-white font-semibold text-sm md:text-base hover:bg-[#8a9168] transition-colors"
        >
          Decking services
        </a>
        <a
          href={gardenRoomsHref}
          className="min-h-[44px] inline-flex items-center justify-center px-4 py-3 rounded-[10px] bg-[#787e59] text-white font-semibold text-sm md:text-base hover:bg-[#8a9168] transition-colors"
        >
          Garden room services
        </a>
      </div>
    </article>
  );
};
