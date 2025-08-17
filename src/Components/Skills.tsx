const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-heading font-bold text-3xl sm:text-4xl text-center mb-12">
          Skills &amp; Technologies
        </h2>
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div className="space-y-6">
            {/* Frontend Development */}
            <div
              data-slot="card"
              className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm"
            >
              <div
                data-slot="card-header"
                className="grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6"
              >
                <div
                  data-slot="card-title"
                  className="font-heading font-semibold text-xl"
                >
                  Frontend Development
                </div>
              </div>
              <div data-slot="card-content" className="px-6 space-y-4">
                {/* React.js */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">React.js</span>
                    <span className="text-sm text-muted-foreground">90%</span>
                  </div>
                  <div
                    aria-valuemax={100}
                    aria-valuemin={0}
                    role="progressbar"
                    className="bg-[#1A7C4B]/20 relative w-full overflow-hidden rounded-full h-2"
                  >
                    <div className="bg-[#1A7C4B] h-full w-[90%] flex-1 transition-all"></div>
                  </div>
                </div>
                {/* JavaScript */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">JavaScript (ES6+)</span>
                    <span className="text-sm text-muted-foreground">85%</span>
                  </div>
                  <div
                    aria-valuemax={100}
                    aria-valuemin={0}
                    role="progressbar"
                    className="bg-[#1A7C4B]/20 relative w-full overflow-hidden rounded-full h-2"
                  >
                    <div className="bg-[#1A7C4B] h-full w-[85%] flex-1 transition-all"></div>
                  </div>
                </div>
                {/* TypeScript */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">TypeScript</span>
                    <span className="text-sm text-muted-foreground">80%</span>
                  </div>
                  <div
                    aria-valuemax={100}
                    aria-valuemin={0}
                    role="progressbar"
                    className="bg-[#1A7C4B]/20 relative w-full overflow-hidden rounded-full h-2"
                  >
                    <div className="bg-[#1A7C4B] h-full w-[80%] flex-1 transition-all"></div>
                  </div>
                </div>
                {/* Tailwind CSS */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Tailwind CSS</span>
                    <span className="text-sm text-muted-foreground">90%</span>
                  </div>
                  <div
                    aria-valuemax={100}
                    aria-valuemin={0}
                    role="progressbar"
                    className="bg-[#1A7C4B]/20 relative w-full overflow-hidden rounded-full h-2"
                  >
                    <div className="bg-[#1A7C4B] h-full w-[90%] flex-1 transition-all"></div>
                  </div>
                </div>
                {/* HTML/CSS */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">HTML/CSS</span>
                    <span className="text-sm text-muted-foreground">95%</span>
                  </div>
                  <div
                    aria-valuemax={100}
                    aria-valuemin={0}
                    role="progressbar"
                    className="bg-[#1A7C4B]/20 relative w-full overflow-hidden rounded-full h-2"
                  >
                    <div className="bg-[#1A7C4B] h-full w-[95%] flex-1 transition-all"></div>
                  </div>
                </div>
              </div>
            </div>
            {/* Backend & Database */}
            <div
              data-slot="card"
              className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm"
            >
              <div
                data-slot="card-header"
                className="grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6"
              >
                <div
                  data-slot="card-title"
                  className="font-heading font-semibold text-xl"
                >
                  Backend &amp; Database (Learning)
                </div>
              </div>
              <div data-slot="card-content" className="px-6 space-y-4">
                {/* Node.js */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Node.js</span>
                    <span className="text-sm text-muted-foreground">60%</span>
                  </div>
                  <div
                    aria-valuemax={100}
                    aria-valuemin={0}
                    role="progressbar"
                    className="bg-[#1A7C4B]/20 relative w-full overflow-hidden rounded-full h-2"
                  >
                    <div className="bg-[#1A7C4B] h-full w-[60%] flex-1 transition-all"></div>
                  </div>
                </div>
                {/* Express.js */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Express.js</span>
                    <span className="text-sm text-muted-foreground">55%</span>
                  </div>
                  <div
                    aria-valuemax={100}
                    aria-valuemin={0}
                    role="progressbar"
                    className="bg-[#1A7C4B]/20 relative w-full overflow-hidden rounded-full h-2"
                  >
                    <div className="bg-[#1A7C4B] h-full w-[55%] flex-1 transition-all"></div>
                  </div>
                </div>
                {/* MongoDB */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">MongoDB</span>
                    <span className="text-sm text-muted-foreground">50%</span>
                  </div>
                  <div
                    aria-valuemax={100}
                    aria-valuemin={0}
                    role="progressbar"
                    className="bg-[#1A7C4B]/20 relative w-full overflow-hidden rounded-full h-2"
                  >
                    <div className="bg-[#1A7C4B] h-full w-[50%] flex-1 transition-all"></div>
                  </div>
                </div>
                {/* Python */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Python</span>
                    <span className="text-sm text-muted-foreground">65%</span>
                  </div>
                  <div
                    aria-valuemax={100}
                    aria-valuemin={0}
                    role="progressbar"
                    className="bg-[#1A7C4B]/20 relative w-full overflow-hidden rounded-full h-2"
                  >
                    <div className="bg-[#1A7C4B] h-full w-[65%] flex-1 transition-all"></div>
                  </div>
                </div>
              </div>
            </div>
            {/* Tools & Platforms */}
            <div
              data-slot="card"
              className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm"
            >
              <div
                data-slot="card-header"
                className="grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6"
              >
                <div
                  data-slot="card-title"
                  className="font-heading font-semibold text-xl"
                >
                  Tools &amp; Platforms
                </div>
              </div>
              <div data-slot="card-content" className="px-6 space-y-4">
                {/* Git & GitHub */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Git &amp; GitHub</span>
                    <span className="text-sm text-muted-foreground">85%</span>
                  </div>
                  <div
                    aria-valuemax={100}
                    aria-valuemin={0}
                    role="progressbar"
                    className="bg-[#1A7C4B]/20 relative w-full overflow-hidden rounded-full h-2"
                  >
                    <div className="bg-[#1A7C4B] h-full w-[85%] flex-1 transition-all"></div>
                  </div>
                </div>
                {/* Firebase */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Firebase</span>
                    <span className="text-sm text-muted-foreground">70%</span>
                  </div>
                  <div
                    aria-valuemax={100}
                    aria-valuemin={0}
                    role="progressbar"
                    className="bg-[#1A7C4B]/20 relative w-full overflow-hidden rounded-full h-2"
                  >
                    <div className="bg-[#1A7C4B] h-full w-[70%] flex-1 transition-all"></div>
                  </div>
                </div>
                {/* Supabase */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Supabase</span>
                    <span className="text-sm text-muted-foreground">75%</span>
                  </div>
                  <div
                    aria-valuemax={100}
                    aria-valuemin={0}
                    role="progressbar"
                    className="bg-[#1A7C4B]/20 relative w-full overflow-hidden rounded-full h-2"
                  >
                    <div className="bg-[#1A7C4B] h-full w-[75%] flex-1 transition-all"></div>
                  </div>
                </div>
                {/* Airtable */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Airtable</span>
                    <span className="text-sm text-muted-foreground">80%</span>
                  </div>
                  <div
                    aria-valuemax={100}
                    aria-valuemin={0}
                    role="progressbar"
                    className="bg-[#1A7C4B]/20 relative w-full overflow-hidden rounded-full h-2"
                  >
                    <div className="bg-[#1A7C4B] h-full w-[80%] flex-1 transition-all"></div>
                  </div>
                </div>
                {/* VS Code */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">VS Code</span>
                    <span className="text-sm text-muted-foreground">90%</span>
                  </div>
                  <div
                    aria-valuemax={100}
                    aria-valuemin={0}
                    role="progressbar"
                    className="bg-[#1A7C4B]/20 relative w-full overflow-hidden rounded-full h-2"
                  >
                    <div className="bg-[#1A7C4B] h-full w-[90%] flex-1 transition-all"></div>
                  </div>
                </div>
                {/* Cursor */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Cursor</span>
                    <span className="text-sm text-muted-foreground">85%</span>
                  </div>
                  <div
                    aria-valuemax={100}
                    aria-valuemin={0}
                    role="progressbar"
                    className="bg-[#1A7C4B]/20 relative w-full overflow-hidden rounded-full h-2"
                  >
                    <div className="bg-[#1A7C4B] h-full w-[85%] flex-1 transition-all"></div>
                  </div>
                </div>
                {/* Figma */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Figma</span>
                    <span className="text-sm text-muted-foreground">75%</span>
                  </div>
                  <div
                    aria-valuemax={100}
                    aria-valuemin={0}
                    role="progressbar"
                    className="bg-[#1A7C4B]/20 relative w-full overflow-hidden rounded-full h-2"
                  >
                    <div className="bg-[#1A7C4B] h-full w-[75%] flex-1 transition-all"></div>
                  </div>
                </div>
                {/* Canva */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Canva</span>
                    <span className="text-sm text-muted-foreground">80%</span>
                  </div>
                  <div
                    aria-valuemax={100}
                    aria-valuemin={0}
                    role="progressbar"
                    className="bg-[#1A7C4B]/20 relative w-full overflow-hidden rounded-full h-2"
                  >
                    <div className="bg-[#1A7C4B] h-full w-[80%] flex-1 transition-all"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Additional Skills & Currently Learning */}
          <div className="space-y-6">
            {/* Additional Skills */}
            <div
              data-slot="card"
              className="bg-gradient-to-br from-blue-50 via-white to-blue-100 text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm"
            >
              <div
                data-slot="card-header"
                className="grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6"
              >
                <div
                  data-slot="card-title"
                  className="font-heading font-semibold text-xl"
                >
                  Additional Skills
                </div>
              </div>
              <div data-slot="card-content" className="px-6">
                <div className="flex flex-wrap gap-2">
                  <span
                    data-slot="badge"
                    className="inline-flex items-center justify-center rounded-md border px-3 py-1 font-medium w-fit whitespace-nowrap shrink-0 gap-1 transition-all overflow-hidden border-blue-200 bg-blue-50 text-blue-900 text-sm shadow-sm"
                  >
                    Responsive Design
                  </span>
                  <span
                    data-slot="badge"
                    className="inline-flex items-center justify-center rounded-md border px-3 py-1 font-medium w-fit whitespace-nowrap shrink-0 gap-1 transition-all overflow-hidden border-blue-200 bg-blue-50 text-blue-900 text-sm shadow-sm"
                  >
                    API Integration
                  </span>
                  <span
                    data-slot="badge"
                    className="inline-flex items-center justify-center rounded-md border px-3 py-1 font-medium w-fit whitespace-nowrap shrink-0 gap-1 transition-all overflow-hidden border-blue-200 bg-blue-50 text-blue-900 text-sm shadow-sm"
                  >
                    Version Control
                  </span>
                  <span
                    data-slot="badge"
                    className="inline-flex items-center justify-center rounded-md border px-3 py-1 font-medium w-fit whitespace-nowrap shrink-0 gap-1 transition-all overflow-hidden border-blue-200 bg-blue-50 text-blue-900 text-sm shadow-sm"
                  >
                    Agile Methodology
                  </span>
                  <span
                    data-slot="badge"
                    className="inline-flex items-center justify-center rounded-md border px-3 py-1 font-medium w-fit whitespace-nowrap shrink-0 gap-1 transition-all overflow-hidden border-blue-200 bg-blue-50 text-blue-900 text-sm shadow-sm"
                  >
                    Problem Solving
                  </span>
                  <span
                    data-slot="badge"
                    className="inline-flex items-center justify-center rounded-md border px-3 py-1 font-medium w-fit whitespace-nowrap shrink-0 gap-1 transition-all overflow-hidden border-blue-200 bg-blue-50 text-blue-900 text-sm shadow-sm"
                  >
                    Team Collaboration
                  </span>
                  <span
                    data-slot="badge"
                    className="inline-flex items-center justify-center rounded-md border px-3 py-1 font-medium w-fit whitespace-nowrap shrink-0 gap-1 transition-all overflow-hidden border-blue-200 bg-blue-50 text-blue-900 text-sm shadow-sm"
                  >
                    Teaching & Mentoring
                  </span>
                  <span
                    data-slot="badge"
                    className="inline-flex items-center justify-center rounded-md border px-3 py-1 font-medium w-fit whitespace-nowrap shrink-0 gap-1 transition-all overflow-hidden border-blue-200 bg-blue-50 text-blue-900 text-sm shadow-sm"
                  >
                    Content Creation
                  </span>
                </div>
              </div>
            </div>
            {/* Currently Learning */}
            <div
              data-slot="card"
              className="bg-gradient-to-br from-green-50 via-white to-green-100 text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm"
            >
              <div
                data-slot="card-header"
                className="grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6"
              >
                <div
                  data-slot="card-title"
                  className="font-heading font-semibold text-xl"
                >
                  Currently Learning
                </div>
              </div>
              <div data-slot="card-content" className="px-6">
                <ul className="space-y-2 text-green-900 font-medium list-disc pl-5">
                  <li>Full Stack Development with MERN</li>
                  <li>Advanced TypeScript Patterns</li>
                  <li>AI/ML Integration in Web Apps</li>
                  <li>Cloud Deployment &amp; DevOps</li>
                  <li>Advanced React Patterns</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
