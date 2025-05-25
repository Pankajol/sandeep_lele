"use client";
export default function AboutSection() {
  return (
    <section className="py-16 px-4 md:px-12 bg-white text-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-orange-700 mb-12 text-center">
          About the President
        </h2>

        {/* Top intro with main image */}
        <div className="flex flex-col md:flex-row items-center gap-10 mb-16">
          <img
            src="https://th.bing.com/th/id/OIP.YRcbM5qtJ5Izz1vrmW2hdgHaHa?cb=iwp2&rs=1&pid=ImgDetMain"
            alt="District President"
            className="w-full md:w-1/2 rounded-xl shadow-lg object-cover"
          />
          <div className="md:w-1/2 space-y-6 text-lg leading-relaxed text-gray-700">
            <p>
              Shri XYZ is a highly respected political leader, serving as the District President for BJP for three consecutive terms. His
              dedication towards public service and community development is exemplary.
            </p>
            <p>
              Having served as a TMC Corporation Member, Shri XYZ played a vital role in urban development and welfare programs. He is
              actively involved in leading multiple NGOs focusing on youth empowerment, women's welfare, and environmental sustainability.
            </p>
            <p>
              His vision is centered on transparent governance, grassroots involvement, and building a prosperous and united district.
            </p>
          </div>
        </div>

        {/* Info cards section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-20">
          <div className="bg-orange-50 p-6 rounded-xl shadow hover:shadow-lg transition cursor-default text-center">
            <img
              src="https://images.unsplash.com/photo-1532074205216-7897f4fbc62a?auto=format&fit=crop&w=200&q=60"
              alt="Terms Icon"
              className="mx-auto mb-4 h-20 w-20 object-cover rounded-full"
            />
            <h3 className="text-xl font-semibold mb-2 text-orange-700">Three Terms</h3>
            <p className="text-gray-700 text-sm">
              Elected thrice as District President, consistently trusted by the party and people for his leadership.
            </p>
          </div>

          <div className="bg-orange-50 p-6 rounded-xl shadow hover:shadow-lg transition cursor-default text-center">
            <img
              src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=200&q=60"
              alt="Municipal Corporation"
              className="mx-auto mb-4 h-20 w-20 object-cover rounded-full"
            />
            <h3 className="text-xl font-semibold mb-2 text-orange-700">TMC Corporation Member</h3>
            <p className="text-gray-700 text-sm">
              Served as a Corporation Member, contributing to urban planning and public welfare programs.
            </p>
          </div>

          <div className="bg-orange-50 p-6 rounded-xl shadow hover:shadow-lg transition cursor-default text-center">
            <img
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=200&q=60"
              alt="NGO Work"
              className="mx-auto mb-4 h-20 w-20 object-cover rounded-full"
            />
            <h3 className="text-xl font-semibold mb-2 text-orange-700">NGO & Social Work</h3>
            <p className="text-gray-700 text-sm">
              Leads multiple NGOs focused on youth empowerment, women’s welfare, and environmental sustainability.
            </p>
          </div>

          <div className="bg-orange-50 p-6 rounded-xl shadow hover:shadow-lg transition cursor-default text-center">
            <img
              src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=200&q=60"
              alt="Vision"
              className="mx-auto mb-4 h-20 w-20 object-cover rounded-full"
            />
            <h3 className="text-xl font-semibold mb-2 text-orange-700">Vision & Mission</h3>
            <p className="text-gray-700 text-sm">
              Dedicated to transparent governance, grassroots involvement, and building a prosperous, united district.
            </p>
          </div>
        </div>

        {/* Timeline section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-orange-700 mb-8 text-center">Career Timeline</h3>
          <ol className="relative border-l border-orange-300 max-w-4xl mx-auto">
            {[
              {
                year: "2010",
                title: "Elected as TMC Corporation Member",
                description:
                  "Began public service by serving in the municipal corporation, focusing on urban welfare projects and community engagement.",
              },
              {
                year: "2015",
                title: "First Term as BJP District President",
                description:
                  "Started his first term with strong focus on grassroots development and party strengthening at the district level.",
              },
              {
                year: "2018",
                title: "Founded Multiple NGOs",
                description:
                  "Established NGOs working on youth training, women empowerment, health awareness, and environmental programs.",
              },
              {
                year: "2020",
                title: "Re-elected for Second Term",
                description:
                  "Gained trust and support for his transparent governance and community outreach initiatives.",
              },
              {
                year: "2023",
                title: "Third Term and Visionary Projects",
                description:
                  "Currently leading district with innovative projects for sustainable development and youth engagement.",
              },
            ].map(({ year, title, description }, idx) => (
              <li key={idx} className="mb-10 ml-6">
                <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-orange-600 text-white font-bold text-sm">
                  {year}
                </span>
                <h4 className="text-lg font-semibold text-orange-700">{title}</h4>
                <p className="text-gray-700">{description}</p>
              </li>
            ))}
          </ol>
        </div>

        {/* Testimonials section */}
        <div className="mb-20 bg-orange-50 p-10 rounded-xl shadow-md max-w-5xl mx-auto">
          <h3 className="text-3xl font-bold text-orange-700 mb-8 text-center">What People Say</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Smt. Asha Patel",
                role: "Community Leader",
                quote:
                  "Shri XYZ has transformed our district with his sincere efforts and commitment. His leadership is truly inspirational.",
              },
              {
                name: "Mr. Rajesh Sharma",
                role: "Youth Activist",
                quote:
                  "His work with youth and women empowerment NGOs has given countless opportunities to our community.",
              },
              {
                name: "Dr. Meera Joshi",
                role: "Social Worker",
                quote:
                  "Transparent and compassionate leadership, always listening to the people's needs and acting promptly.",
              },
            ].map(({ name, role, quote }, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
                <p className="text-gray-800 italic mb-4">"{quote}"</p>
                <p className="font-semibold text-orange-700">{name}</p>
                <p className="text-sm text-gray-600">{role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action banner */}
        <div className="bg-orange-600 text-white text-center rounded-xl py-14 px-6 max-w-4xl mx-auto shadow-lg hover:bg-orange-700 transition cursor-pointer">
          <h3 className="text-3xl font-bold mb-4">Join Us in Building a Better Tomorrow</h3>
          <p className="mb-6 max-w-xl mx-auto">
            Get involved with the party or support local initiatives led by Shri XYZ. Your participation can make a real difference.
          </p>
          <button
            onClick={() => window.location.href = "/volunteer"}
            className="bg-white text-orange-600 font-semibold px-8 py-3 rounded shadow hover:bg-gray-100 transition"
          >
            Become a Volunteer
          </button>
        </div>
      </div>
    </section>
  );
}
