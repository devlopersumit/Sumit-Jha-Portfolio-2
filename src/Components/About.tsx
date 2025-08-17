import sumit from "../assets/updated-SJ.png";

const About = () => {
  return (
    <>
      <section id="about" className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-center mb-10">
            About Me
          </h2>

          <div className="flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-12">
            {/* Avatar */}
            <div className="flex-shrink-0 flex justify-center md:justify-start w-full md:w-auto">
              <span
                data-slot="avatar"
                className="relative flex overflow-hidden rounded-full w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mb-6 md:mb-0"
              >
                <img
                  data-slot="avatar-image"
                  className="aspect-square w-full h-full object-cover"
                  alt="Sumit Jha"
                  src={sumit}
                />
              </span>
            </div>

            {/* Description + Quick Facts */}
            <div className="flex-1 space-y-6">
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                I'm a passionate Frontend Developer and recent graduate with
                expertise in React, TypeScript, and Tailwind CSS. As a fresher
                in the tech industry, I'm actively seeking remote opportunities
                to contribute to innovative projects and grow my skills in a
                collaborative environment.
              </p>

              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                I believe in creating user-centric applications that solve
                real-world problems. Through my personal projects and continuous
                learning, I've developed a strong foundation in modern web
                development technologies and best practices.
              </p>

              {/* Quick Facts Card */}
              <div
                data-slot="card"
                className="bg-card text-card-foreground flex flex-col gap-4 rounded-xl border py-6 shadow-sm"
              >
                <div data-slot="card-content" className="px-6">
                  <h3 className="font-heading font-semibold text-lg sm:text-xl mb-3">
                    Quick Facts
                  </h3>
                  <ul className="space-y-2 text-muted-foreground text-base">
                    <li>🎓 Self-Taught Developer &amp; Tech Enthusiast</li>
                    <li>🌍 Actively Seeking Remote Opportunities</li>
                    <li>💻 5+ Personal Projects Deployed</li>
                    <li>🚀 Passionate About Modern Web Development</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
