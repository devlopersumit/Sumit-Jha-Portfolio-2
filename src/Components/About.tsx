const About = () => {
  return (
    <>
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-center mb-12">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Avatar */}
            <div className="text-center md:text-left">
              <span
                data-slot="avatar"
                className="relative flex size-8 shrink-0 overflow-hidden rounded-full w-48 h-48 mx-auto md:mx-0 mb-6"
              >
                <img
                  data-slot="avatar-image"
                  className="aspect-square size-full"
                  alt="Sumit Jha"
                  src="/sumit-profile.png"
                />
              </span>
            </div>

            {/* Description + Quick Facts */}
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a passionate Frontend Developer and recent graduate with
                expertise in React, TypeScript, and Tailwind CSS. As a fresher
                in the tech industry, I'm actively seeking remote opportunities
                to contribute to innovative projects and grow my skills in a
                collaborative environment.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                I believe in creating user-centric applications that solve
                real-world problems. Through my personal projects and continuous
                learning, I've developed a strong foundation in modern web
                development technologies and best practices.
              </p>

              {/* Quick Facts Card */}
              <div
                data-slot="card"
                className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm"
              >
                <div data-slot="card-content" className="p-6">
                  <h3 className="font-heading font-semibold text-xl mb-4">
                    Quick Facts
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
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


export default About 