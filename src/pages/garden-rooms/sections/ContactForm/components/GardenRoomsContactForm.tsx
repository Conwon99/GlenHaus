import { useEffect } from "react";
import { trackFormStart } from "@/utils/analytics";

export const GardenRoomsContactForm = () => {
  useEffect(() => {
    const form = document.querySelector('form[name="wf-form-Contact-Form"]') as HTMLFormElement;
    const successMessage = document.querySelector('[aria-label="Contact Form success"]') as HTMLElement;
    const errorMessage = document.querySelector('[aria-label="Contact Form failure"]') as HTMLElement;

    if (form) {
      // Track form start when user first interacts with any form field
      let formStarted = false;
      const handleFormStart = () => {
        if (!formStarted) {
          formStarted = true;
          trackFormStart('contact');
        }
      };

      const formFields = form.querySelectorAll('input, textarea, select');
      formFields.forEach((field) => {
        field.addEventListener('focus', handleFormStart, { once: true });
        field.addEventListener('click', handleFormStart, { once: true });
        field.addEventListener('change', handleFormStart, { once: true });
      });
      form.addEventListener("submit", async (e) => {
        e.preventDefault();
        
        if (successMessage) successMessage.classList.add("hidden");
        if (errorMessage) errorMessage.classList.add("hidden");

        // Check if form is valid
        if (!form.checkValidity()) {
          form.reportValidity();
          return;
        }

        const formData = new FormData(form);
        
        // Get the current URL and determine if it's main domain or subdomain
        if (typeof window !== "undefined") {
          const hostname = window.location.hostname;
          const pathname = window.location.pathname;
          
          // Check if it's a subdomain (e.g., ads.glenhausgardenrooms.com)
          const isSubdomain = hostname !== "glenhausgardenrooms.com" && 
                             hostname !== "www.glenhausgardenrooms.com" &&
                             hostname.includes("glenhausgardenrooms.com");
          
          // Check if it's the garden-rooms page (subdomain landing page)
          const isGardenRoomsPage = pathname === "/garden-rooms" || pathname === "/garden-rooms.html";
          
          let websiteUrl: string;
          if (isSubdomain || isGardenRoomsPage) {
            // Use the actual current URL for subdomain or garden-rooms page
            websiteUrl = window.location.origin + pathname;
          } else {
            // Main domain
            websiteUrl = "https://glenhausgardenrooms.com/";
          }
          
          formData.append("websiteUrl", websiteUrl);
        } else {
          // Fallback for SSR
          formData.append("websiteUrl", "https://glenhausgardenrooms.com/");
        }
        
        formData.append("service", "Garden Rooms");

        try {
          const response = await fetch("https://formspree.io/f/xjgvojeo", {
            method: "POST",
            body: formData,
            headers: {
              Accept: "application/json",
            },
          });

          if (response.ok) {
            form.reset();
            if (successMessage) {
              successMessage.classList.remove("hidden");
              successMessage.scrollIntoView({ behavior: "smooth", block: "nearest" });
            }
          } else {
            throw new Error("Form submission failed");
          }
        } catch (error) {
          if (errorMessage) {
            errorMessage.classList.remove("hidden");
            errorMessage.scrollIntoView({ behavior: "smooth", block: "nearest" });
          }
        }
      });
    }
  }, []);

  return (
    <form
      name="wf-form-Contact-Form"
      aria-label="Contact Form"
      action="https://formspree.io/f/xjgvojeo"
      method="POST"
      encType="multipart/form-data"
      className="box-border caret-transparent"
    >
      <div className="text-base items-start box-border caret-transparent flex-col w-full mb-5 md:text-lg md:items-center md:flex-row">
        <label className="text-gray-300 text-base font-semibold box-border caret-transparent block mb-[5px] md:text-lg">
          Name
        </label>
        <input
          name="name"
          placeholder="Dennis Barrett"
          type="text"
          required
          className="text-white text-base bg-gray-900 box-border caret-transparent block h-12 leading-[25.6px] align-middle w-full border-2 border-gray-700 mb-2.5 px-5 py-2.5 rounded-[20px] border-solid focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-green-600"
        />
      </div>
      <div className="text-base items-start box-border caret-transparent flex-col w-full mb-5 md:text-lg md:items-center md:flex-row">
        <label className="text-gray-300 text-base font-semibold box-border caret-transparent block mb-[5px] md:text-lg">
          Email
        </label>
        <input
          name="email"
          placeholder="your.email@example.com"
          type="email"
          required
          className="text-white text-base bg-gray-900 box-border caret-transparent block h-12 leading-[25.6px] align-middle w-full border-2 border-gray-700 mb-2.5 px-5 py-2.5 rounded-[20px] border-solid focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-green-600"
        />
      </div>
      <div className="text-base items-start box-border caret-transparent flex-col w-full mb-5 md:text-lg md:items-center md:flex-row">
        <label className="text-gray-300 text-base font-semibold box-border caret-transparent block mb-[5px] md:text-lg">
          Phone
        </label>
        <input
          name="phone"
          placeholder="07926 592704"
          type="tel"
          required
          className="text-white text-base bg-gray-900 box-border caret-transparent block h-12 leading-[25.6px] align-middle w-full border-2 border-gray-700 mb-2.5 px-5 py-2.5 rounded-[20px] border-solid focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-green-600"
        />
      </div>
      <div className="text-base items-start box-border caret-transparent flex-col w-full mb-5 md:text-lg md:items-center md:flex-row">
        <label className="text-gray-300 text-base font-semibold box-border caret-transparent block mb-[5px] md:text-lg">
          Message
        </label>
        <textarea
          name="message"
          placeholder="Tell us about your garden room needs..."
          rows={6}
          required
          className="text-white text-base bg-gray-900 box-border caret-transparent block leading-[25.6px] align-middle w-full border-2 border-gray-700 mb-2.5 px-5 py-2.5 rounded-[20px] border-solid resize-vertical focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-green-600"
        />
      </div>
      <div className="text-base items-start box-border caret-transparent flex-col w-full mb-5 md:text-lg md:items-center md:flex-row">
        <label className="text-gray-300 text-base font-semibold box-border caret-transparent block mb-[5px] md:text-lg">
          Upload Images (Optional)
        </label>
        <input
          name="images"
          type="file"
          accept="image/*"
          multiple
          className="text-white text-base bg-gray-900 box-border caret-transparent block w-full border-2 border-gray-700 mb-2.5 px-5 py-2.5 rounded-[20px] border-solid focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-green-600 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-green-800 file:text-white hover:file:bg-green-900 file:cursor-pointer"
        />
        <p className="text-gray-400 text-sm mt-1">You can upload multiple images to help us understand your project better.</p>
      </div>
      <input
        type="submit"
        value="Submit"
        className="!bg-white !text-black text-base font-bold box-border caret-transparent leading-[24px] text-center text-nowrap w-full border-2 border-white px-6 py-3 rounded-[50px] border-solid md:text-xl md:leading-[28px] md:px-8 md:py-4 hover:!bg-gray-50 hover:border-gray-50 transition-all duration-300 min-h-[56px] md:min-h-[64px] shadow-lg"
        style={{ backgroundColor: '#ffffff', color: '#000000' }}
      />
    </form>
  );
};

