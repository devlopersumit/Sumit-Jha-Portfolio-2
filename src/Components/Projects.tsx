const devtoolyImg =
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80";
const movieshuntImg =
  "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80";
const offershareImg =
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80";
const usemycardImg =
  "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80";
const bookforyouImg =
  "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=600&q=80";

const Projects = () => {
  return (
    <>
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-center mb-12">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Project Card 1 */}
            <div
              data-slot="card"
              className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm group hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="aspect-video overflow-hidden rounded-t-lg">
                <img
                  src={devtoolyImg}
                  alt="DevTooly"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div
                data-slot="card-header"
                className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6"
              >
                <div
                  data-slot="card-title"
                  className="font-heading font-semibold text-xl"
                >
                  DevTooly
                </div>
              </div>
              <div data-slot="card-content" className="px-6 space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  A comprehensive collection of handy developer tools designed
                  to boost productivity and streamline development workflows.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span
                    data-slot="badge"
                    className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 font-medium w-fit whitespace-nowrap shrink-0 text-xs"
                  >
                    HTML
                  </span>
                  <span
                    data-slot="badge"
                    className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 font-medium w-fit whitespace-nowrap shrink-0 text-xs"
                  >
                    JavaScript
                  </span>
                  <span
                    data-slot="badge"
                    className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 font-medium w-fit whitespace-nowrap shrink-0 text-xs"
                  >
                    Vanilla CSS
                  </span>
                  <span
                    data-slot="badge"
                    className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 font-medium w-fit whitespace-nowrap shrink-0 text-xs"
                  >
                    Tools
                  </span>
                </div>
                <div className="flex gap-2 pt-2">
                  <a
                    href="https://devtooly.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all bg-[#1A7C4B] text-[#1A7C4B]-foreground shadow-xs hover:bg-[#1A7C4B]/90 h-8 rounded-md gap-1.5 px-3"
                  >
                    Live Demo
                  </a>
                  <a
                    href="https://github.com/devlopersumit/Development-Directory"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground h-8 rounded-md gap-1.5 px-3"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
            {/* Project Card 2 */}
            <div
              data-slot="card"
              className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm group hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="aspect-video overflow-hidden rounded-t-lg">
                <img
                  src={movieshuntImg}
                  alt="MoviesHunt"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div
                data-slot="card-header"
                className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6"
              >
                <div
                  data-slot="card-title"
                  className="font-heading font-semibold text-xl"
                >
                  MoviesHunt
                </div>
              </div>
              <div data-slot="card-content" className="px-6 space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  A modern movie discovery platform where users can explore,
                  search, and discover their next favorite films with detailed
                  information.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span
                    data-slot="badge"
                    className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 font-medium w-fit whitespace-nowrap shrink-0 text-xs"
                  >
                    React
                  </span>
                  <span
                    data-slot="badge"
                    className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 font-medium w-fit whitespace-nowrap shrink-0 text-xs"
                  >
                    API Integration
                  </span>
                  <span
                    data-slot="badge"
                    className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 font-medium w-fit whitespace-nowrap shrink-0 text-xs"
                  >
                    Responsive Design
                  </span>
                  <span
                    data-slot="badge"
                    className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 font-medium w-fit whitespace-nowrap shrink-0 text-xs"
                  >
                    Entertainment
                  </span>
                </div>
                <div className="flex gap-2 pt-2">
                  <a
                    href="https://movieshunt.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all bg-[#1A7C4B] text-[#1A7C4B]-foreground shadow-xs hover:bg-[#1A7C4B]/90 h-8 rounded-md gap-1.5 px-3"
                  >
                    Live Demo
                  </a>
                  <a
                    href="https://github.com/devlopersumit/MoviesHunt"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground h-8 rounded-md gap-1.5 px-3"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
            {/* Project Card 3 */}
            <div
              data-slot="card"
              className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm group hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="aspect-video overflow-hidden rounded-t-lg">
                <img
                  src={offershareImg}
                  alt="OfferShare"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div
                data-slot="card-header"
                className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6"
              >
                <div
                  data-slot="card-title"
                  className="font-heading font-semibold text-xl"
                >
                  OfferShare
                </div>
              </div>
              <div data-slot="card-content" className="px-6 space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  A platform designed for businesses to share exclusive offers
                  and deals, connecting merchants with potential customers.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span
                    data-slot="badge"
                    className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 font-medium w-fit whitespace-nowrap shrink-0 text-xs"
                  >
                    React
                  </span>
                  <span
                    data-slot="badge"
                    className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 font-medium w-fit whitespace-nowrap shrink-0 text-xs"
                  >
                    TypeScript
                  </span>
                  <span
                    data-slot="badge"
                    className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 font-medium w-fit whitespace-nowrap shrink-0 text-xs"
                  >
                    Tailwind CSS
                  </span>
                  <span
                    data-slot="badge"
                    className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 font-medium w-fit whitespace-nowrap shrink-0 text-xs"
                  >
                    E-commerce
                  </span>
                </div>
                <div className="flex gap-2 pt-2">
                  <a
                    href="https://offershare.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all bg-[#1A7C4B] text-[#1A7C4B]-foreground shadow-xs hover:bg-[#1A7C4B]/90 h-8 rounded-md gap-1.5 px-3"
                  >
                    Live Demo
                  </a>
                  <a
                    href="https://github.com/devlopersumit/Offer-Share"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground h-8 rounded-md gap-1.5 px-3"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
            {/* Project Card 4 */}
            <div
              data-slot="card"
              className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm group hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="aspect-video overflow-hidden rounded-t-lg">
                <img
                  src={usemycardImg}
                  alt="UseMyCard"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div
                data-slot="card-header"
                className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6"
              >
                <div
                  data-slot="card-title"
                  className="font-heading font-semibold text-xl"
                >
                  UseMyCard
                </div>
              </div>
              <div data-slot="card-content" className="px-6 space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  An innovative circle-based card benefit sharing application
                  that helps users maximize their credit card rewards and
                  benefits.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span
                    data-slot="badge"
                    className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 font-medium w-fit whitespace-nowrap shrink-0 text-xs"
                  >
                    React
                  </span>
                  <span
                    data-slot="badge"
                    className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 font-medium w-fit whitespace-nowrap shrink-0 text-xs"
                  >
                    JavaScript
                  </span>
                  <span
                    data-slot="badge"
                    className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 font-medium w-fit whitespace-nowrap shrink-0 text-xs"
                  >
                    Supabase
                  </span>
                  <span
                    data-slot="badge"
                    className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 font-medium w-fit whitespace-nowrap shrink-0 text-xs"
                  >
                    Google Auth
                  </span>
                </div>
                <div className="flex gap-2 pt-2">
                  <a
                    href="https://usemycard.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all bg-[#1A7C4B] text-[#1A7C4B]-foreground shadow-xs hover:bg-[#1A7C4B]/90 h-8 rounded-md gap-1.5 px-3"
                  >
                    Live Demo
                  </a>
                  <a
                    href="https://github.com/devlopersumit/UseMyCard"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground h-8 rounded-md gap-1.5 px-3"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
            {/* Project Card 5 */}
            <div
              data-slot="card"
              className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm group hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="aspect-video overflow-hidden rounded-t-lg">
                <img
                  src={bookforyouImg}
                  alt="BookForYou"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div
                data-slot="card-header"
                className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6"
              >
                <div
                  data-slot="card-title"
                  className="font-heading font-semibold text-xl"
                >
                  BookForYou
                </div>
              </div>
              <div data-slot="card-content" className="px-6 space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  A curated platform to discover top self-help, finance, and
                  personal development books with recommendations and reviews.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span
                    data-slot="badge"
                    className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 font-medium w-fit whitespace-nowrap shrink-0 text-xs"
                  >
                    React
                  </span>
                  <span
                    data-slot="badge"
                    className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 font-medium w-fit whitespace-nowrap shrink-0 text-xs"
                  >
                    JavaScript
                  </span>
                  <span
                    data-slot="badge"
                    className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 font-medium w-fit whitespace-nowrap shrink-0 text-xs"
                  >
                    Google Books API
                  </span>
                  <span
                    data-slot="badge"
                    className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 font-medium w-fit whitespace-nowrap shrink-0 text-xs"
                  >
                    Open Library API
                  </span>
                </div>
                <div className="flex gap-2 pt-2">
                  <a
                    href="https://bookforyou.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all bg-[#1A7C4B] text-[#1A7C4B]-foreground shadow-xs hover:bg-[#1A7C4B]/90 h-8 rounded-md gap-1.5 px-3"
                  >
                    Live Demo
                  </a>
                  <a
                    href="https://github.com/devlopersumit/BookPicker"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground h-8 rounded-md gap-1.5 px-3"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
