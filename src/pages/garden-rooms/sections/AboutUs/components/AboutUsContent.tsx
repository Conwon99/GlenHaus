import { RatingDisplay } from "@/sections/ExperienceSection/components/RatingDisplay";

export const AboutUsContent = () => {
  return (
    <div className="box-border caret-transparent gap-x-[30px] flex flex-col justify-between gap-y-[30px] md:gap-x-[50px] md:gap-y-[50px]">
      <div className="box-border caret-transparent">
        <p className="text-gray-200 text-sm sm:text-base box-border caret-transparent mt-2.5 mb-5 md:mt-5 md:mb-5 leading-relaxed">
          Fully qualified and insured with years of experience, we provide professional garden room installation services across Scotland.
        </p>
        <div className="box-border caret-transparent mb-5 md:mb-[50px]">
          <ul className="text-white text-sm sm:text-base md:text-lg box-border caret-transparent list-none pl-0 space-y-2 md:space-y-3">
            <li className="flex items-center gap-3">
              <div className="flex items-center justify-center w-6 h-6 md:w-7 md:h-7 rounded-full bg-green-800 flex-shrink-0">
                <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-white font-medium">Garden Rooms</span>
            </li>
          </ul>
        </div>
        <a
          href="/about"
          className="text-white text-sm bg-green-800 box-border caret-transparent inline-block leading-[19.6px] text-center border border-green-800 px-5 py-2 rounded-[50px] border-solid md:text-lg md:leading-[25.2px] md:px-[30px] md:py-3 hover:bg-green-900 hover:decoration-transparent shadow-[0_0_20px_rgba(22,101,52,0.5),0_0_40px_rgba(22,101,52,0.3)] hover:shadow-[0_0_30px_rgba(20,83,45,0.7),0_0_60px_rgba(20,83,45,0.5)] transition-shadow duration-300"
        >
          More about us
        </a>
      </div>
      <div className="box-border caret-transparent mt-8 md:mt-10">
        <RatingDisplay />
      </div>
    </div>
  );
};

