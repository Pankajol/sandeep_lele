"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const slides = [
  {
    image: "https://i.ytimg.com/vi/xXC14GKQuhw/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGGUgZShlMA8=&rs=AOn4CLAoQ3mFrfp_MY72KNNRoG52KzF4EQ",
    caption: "Empowering the Nation through Leadership",
  },
  {
    image: "https://scontent.fbom50-1.fna.fbcdn.net/v/t39.30808-6/471770238_2914196148742703_1097698356414117625_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=HRQ-PV4X_2AQ7kNvwGWmejL&_nc_oc=AdmKNjrvjTYYmb81-M_Yt8PLGpljCnk41e9saoeuFGwr1orCkdM1pYgfES2dSKrs9Zk&_nc_zt=23&_nc_ht=scontent.fbom50-1.fna&_nc_gid=dBwg81pk9723dHYySlNL6g&oh=00_AfLsyND0QXi0GiikH9PddoBB0G9rCXB21AZgmW7-XAmj4g&oe=6835364F",
    caption: "Unity, Discipline & Dedication",
  },
  {
    image: "https://scontent.fbom50-1.fna.fbcdn.net/v/t39.30808-6/499543997_1228295769306116_6224545518319070585_n.jpg?stp=dst-jpg_s600x600_tt6&_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=Z2_Rr2Ca8I8Q7kNvwGtMy1c&_nc_oc=Adk7l0wzPz9oU7wxEM2SgGHmxlqawQjliSRKrBVQhwjkum1HtCeuutwRB6UfG8Rwemw&_nc_zt=23&_nc_ht=scontent.fbom50-1.fna&_nc_gid=ysbVcCuRsrFSBmXZhyeQaw&oh=00_AfL6x6Deh90HkXeUr4JiqGdeV_h9rNWfqvByKdjPOTnecA&oe=68353927",
    caption: "Connecting with Every Voter",
  },
  {
    image: "https://th.bing.com/th/id/OIP.-mL4-8UDeILcLq8lOlIsZwHaFj?cb=iwp2&rs=1&pid=ImgDetMain",
    caption: "Building Strong Communities Together",
  },

  {
    image: "https://scontent.fbom50-1.fna.fbcdn.net/v/t39.30808-6/471770238_2914196148742703_1097698356414117625_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=HRQ-PV4X_2AQ7kNvwGWmejL&_nc_oc=AdmKNjrvjTYYmb81-M_Yt8PLGpljCnk41e9saoeuFGwr1orCkdM1pYgfES2dSKrs9Zk&_nc_zt=23&_nc_ht=scontent.fbom50-1.fna&_nc_gid=dBwg81pk9723dHYySlNL6g&oh=00_AfLsyND0QXi0GiikH9PddoBB0G9rCXB21AZgmW7-XAmj4g&oe=6835364F",
    caption: "Together We Can Make a Difference",
  },
];

export default function HeroSection() {
  const router = useRouter();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden select-none">
      {slides.map((slide, index) => (
        <div
          key={index}
          aria-hidden={index !== currentSlide}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.caption}
            className="w-full h-full object-cover"
            loading="lazy"
            draggable={false}
          />
          <div className="absolute inset-0  bg-opacity-60 flex flex-col justify-center items-center text-white text-center px-6 md:px-16">
            <h1 className="text-3xl md:text-6xl font-extrabold mb-4 drop-shadow-lg leading-tight max-w-4xl">
              {slide.caption}
            </h1>
            <p className="text-lg md:text-2xl mb-8 drop-shadow-md">
              District President - BJP
            </p>
            <button
              className="bg-white text-orange-700 px-8 py-3 font-semibold rounded shadow hover:bg-orange-100 focus:outline-none focus:ring-4 focus:ring-orange-300 transition"
              onClick={() => router.push("/voter-form")}
              aria-label="Fill Voter Form"
            >
              Fill Voter Form
            </button>
          </div>
        </div>
      ))}
    </section>
  );
}
