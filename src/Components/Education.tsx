const educationData = [
  {
    title: "Bachelor of Computer Applications (BCA)",
    institution: "Indira Gandhi National Open University (IGNOU)",
    year: "2023 - Present",
    badges: [
      { text: "Currently Pursuing", color: "bg-emerald-600 text-white" },
      { text: "Distance Learning", color: "bg-gray-100 text-gray-800" },
    ],
    description:
      "Comprehensive computer science program covering programming, software development, and IT fundamentals.",
    iconColor: "#1A7C4B",
  },
  {
    title: "Higher Secondary Certificate (HSC)",
    institution: "Shri Raghubir English High School & Jr. College",
    year: "2020",
    badges: [
      { text: "Completed", color: "bg-emerald-600 text-white" },
      { text: "Science Stream", color: "bg-gray-100 text-gray-800" },
      { text: "90%", color: "bg-emerald-100 text-emerald-800" }, // Added badge
    ],
    description:
      "Focused on Mathematics, Physics, and Chemistry with strong analytical foundation.",
    iconColor: "#1A7C4B",
  },
  {
    title: "Secondary School Certificate (SSC)",
    institution: "Shri Raghubir English High School & Jr. College",
    year: "2018",
    badges: [
      { text: "Completed", color: "bg-emerald-600 text-white" },
      { text: "General Studies", color: "bg-gray-100 text-gray-800" },
      { text: "91%", color: "bg-emerald-100 text-emerald-800" },
    ],
    description:
      "Achieved excellent academic performance with 91% marks, demonstrating strong foundational knowledge.",
    iconColor: "#1A7C4B",
  },
];

const Education = () => {
  return (
    <section id="education" className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-heading font-bold text-3xl sm:text-4xl text-center mb-10">
          Education
        </h2>
        <div className="flex flex-col gap-8">
          {educationData.map((edu, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-card text-card-foreground flex flex-col gap-4 rounded-xl border py-6 px-4 sm:px-6 shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex items-start gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={edu.iconColor}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-7 w-7 mt-1 flex-shrink-0"
                  >
                    <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path>
                    <path d="M22 10v6"></path>
                    <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path>
                  </svg>
                  <div>
                    <div className="font-heading font-semibold text-lg sm:text-xl mb-1">
                      {edu.title}
                    </div>
                    <p className="text-muted-foreground font-medium">
                      {edu.institution}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col sm:items-end gap-2">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4"
                    >
                      <path d="M8 2v4"></path>
                      <path d="M16 2v4"></path>
                      <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                      <path d="M3 10h18"></path>
                    </svg>
                    {edu.year}
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    {edu.badges.map((badge, i) => (
                      <span
                        key={i}
                        className={`inline-flex items-center justify-center rounded-md px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 transition-colors duration-200 border border-transparent ${badge.color} hover:opacity-90`}
                      >
                        {badge.text}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-2">
                <p className="text-muted-foreground leading-relaxed text-base">
                  {edu.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
