import { ReviewCard } from "@/sections/ReviewsSection/components/ReviewCard";

export const GardenRoomsTestimonials = () => {
  return (
    <section className="box-border caret-transparent py-[70px] md:py-[140px]">
      <div className="box-border caret-transparent max-w-[1540px] mx-auto px-[15px] md:px-[30px] before:accent-auto before:caret-transparent before:text-neutral-600 before:table before:text-lg before:not-italic before:normal-nums before:font-medium before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-[27px] before:list-outside before:list-disc before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-manrope after:accent-auto after:caret-transparent after:clear-both after:text-neutral-600 after:table after:text-lg after:not-italic after:normal-nums after:font-medium after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-[27px] after:list-outside after:list-disc after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-manrope">
        <div className="box-border caret-transparent text-center mb-[30px] md:mb-[50px]">
          <h2 className="text-white text-4xl font-bold box-border caret-transparent leading-[43.2px] md:text-[56px] md:leading-[67.2px]">
            What Our Customers Say
          </h2>
        </div>
        <div className="box-border caret-transparent gap-x-[30px] grid auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] gap-y-[30px] md:grid-cols-[1fr_1fr] md:gap-y-[30px] lg:grid-cols-[1fr_1fr_1fr]">
          <ReviewCard
            author="Sarah Mitchell"
            text="Absolutely delighted with our new garden room! Glenhaus Garden Rooms transformed our garden into a beautiful space. The quality is outstanding and the team were professional throughout. Highly recommend!"
            isRecommendation={true}
          />
          <ReviewCard
            author="James Thompson"
            text="We needed a garden office and Glenhaus Garden Rooms delivered exactly what we wanted. The installation was quick, clean, and the finished result is perfect. Great value for money too!"
            isRecommendation={true}
          />
          <ReviewCard
            author="Emma Wilson"
            text="Our garden room is now our favourite space in the house! The team were fantastic from start to finish - professional, friendly, and the workmanship is excellent. Couldn't be happier!"
            isRecommendation={true}
          />
        </div>
      </div>
    </section>
  );
};

