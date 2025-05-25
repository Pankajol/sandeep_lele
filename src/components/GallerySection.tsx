"use client";
import { useState } from "react";

const images = [
  {
    src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    alt: "Community Rally",
    category: "Rallies",
    caption: "District President addressing a community rally in 2023.",
  },
  {
    src: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=800&q=80",
    alt: "Youth Workshop",
    category: "Community Work",
    caption: "Engaging youth in a skill development workshop.",
  },
  {
    src: "https://images.unsplash.com/photo-1532074205216-7897f4fbc62a?auto=format&fit=crop&w=800&q=80",
    alt: "NGO Event",
    category: "Community Work",
    caption: "Organizing a women’s empowerment event.",
  },
  {
    src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
    alt: "Cultural Festival",
    category: "Events",
    caption: "Celebrating local culture with community members.",
  },
  {
    src: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=800&q=80",
    alt: "Tree Plantation Drive",
    category: "Community Work",
    caption: "Leading a tree plantation drive for environmental sustainability.",
  },
  {
    src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
    alt: "Election Campaign",
    category: "Rallies",
    caption: "Campaigning for the upcoming district elections.",
  },
  {
    src: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=800&q=80",
    alt: "Public Meeting",
    category: "Events",
    caption: "Open meeting with district citizens for development discussions.",
  },
  {
    src: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=80",
    alt: "Health Awareness",
    category: "Community Work",
    caption: "Health awareness camp organized by local NGOs.",
  },
];

export default function GallerySection() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [modalOpen, setModalOpen] = useState(false);
  const [activeImage, setActiveImage] = useState<{ src: string; alt: string; caption: string } | null>(null);

  const categories = ["All", "Events", "Community Work", "Rallies"];

  const filteredImages =
    selectedCategory === "All"
      ? images
      : images.filter((img) => img.category === selectedCategory);

  const openModal = (img: { src: string; alt: string; caption: string }) => {
    setActiveImage(img);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setActiveImage(null);
  };

  return (
    <section className="py-12 px-4 bg-gray-100 text-gray-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-2 text-orange-700">Gallery</h2>
        <p className="text-center max-w-3xl mx-auto mb-8 text-lg">
          Explore moments from rallies, community work, and various events led by the District President and his team.
        </p>

        {/* Categories */}
        <div className="flex justify-center space-x-6 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full font-semibold transition ${
                selectedCategory === cat
                  ? "bg-orange-600 text-white"
                  : "bg-white text-orange-600 border border-orange-600 hover:bg-orange-600 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid or Scrollable gallery */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {filteredImages.map((img, idx) => (
            <div
              key={idx}
              className="relative cursor-pointer group rounded-lg overflow-hidden shadow-lg hover:shadow-xl"
              onClick={() => openModal(img)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 opacity-0 group-hover:opacity-100 transition-opacity text-white text-sm">
                {img.caption}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for large image */}
      {modalOpen && activeImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-lg max-w-3xl w-full max-h-full overflow-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-gray-700 hover:text-gray-900 font-bold text-2xl"
              aria-label="Close"
            >
              &times;
            </button>
            <img
              src={activeImage.src}
              alt={activeImage.alt}
              className="w-full object-contain rounded-t-lg"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-orange-700 mb-2">{activeImage.alt}</h3>
              <p className="text-gray-700">{activeImage.caption}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
