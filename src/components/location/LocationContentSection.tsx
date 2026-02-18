import type { Location } from "@/data/locations";

interface LocationContentSectionProps {
  location: Location;
}

export const LocationContentSection = ({ location }: LocationContentSectionProps) => {
  return (
    <section className="bg-slate-50 py-12 md:py-20">
      <div className="max-w-[1204px] mx-auto px-4 sm:px-5 md:px-8">
        <div className="prose prose-lg max-w-none text-gray-700">
          <p className="text-lg leading-relaxed mb-8">{location.contentOpening}</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            Garden Rooms in {location.name}
          </h2>
          <p className="leading-relaxed mb-6">
            Whether you need a home office, gym, or extra living space, our garden room installations
            in {location.name} are built for {location.regionLabel} weather. We work with you from
            design to completion and use quality materials that last. Serving {location.neighborhoods.slice(0, 3).join(", ")}
            {location.neighborhoods.length > 3 ? " and surrounding areas" : ""}.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            Decking in {location.name}
          </h2>
          <p className="leading-relaxed mb-6">
            From composite to timber, we install decking across {location.name} that stands up to
            the climate. Our decking solutions suit local properties and gardens, with professional
            installation and a focus on durability. Ideal for {location.neighborhoods.slice(0, 2).join(" and ")} and the wider area.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            Why Choose Us in {location.name}
          </h2>
          <p className="leading-relaxed">{location.localKnowledge}</p>
        </div>
      </div>
    </section>
  );
};
