const Contact = () => {
  return (
    <>
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-center mb-12">
            Get In Touch
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div
                data-slot="card"
                className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm"
              >
                <div
                  data-slot="card-header"
                  className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6"
                >
                  <div
                    data-slot="card-title"
                    className="font-heading font-semibold text-xl"
                  >
                    Contact Information
                  </div>
                </div>
                <div data-slot="card-content" className="px-6 space-y-4">
                  <div className="flex items-center space-x-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-mail h-5 w-5 text-primary"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                    </svg>
                    <span>sumitsj2002@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-map-pin h-5 w-5 text-primary"
                    >
                      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    <span>India</span>
                  </div>
                </div>
              </div>
              <div
                data-slot="card"
                className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm"
              >
                <div
                  data-slot="card-header"
                  className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6"
                >
                  <div
                    data-slot="card-title"
                    className="font-heading font-semibold text-xl"
                  >
                    Follow Me
                  </div>
                </div>
                <div data-slot="card-content" className="px-6">
                  <div className="flex space-x-4">
                    <a
                      href="https://github.com/sumitjha2003"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-github h-5 w-5"
                      >
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                        <path d="M9 18c-4.51 2-5-2-7-2"></path>
                      </svg>
                    </a>
                    <a
                      href="https://linkedin.com/in/sumitjha2003"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-linkedin h-5 w-5"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect width="4" height="12" x="2" y="9"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                    </a>
                    <a
                      href="https://twitter.com/sumitjha2003"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-twitter h-5 w-5"
                      >
                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div
                data-slot="card"
                className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm"
              >
                <div
                  data-slot="card-header"
                  className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6"
                >
                  <div
                    data-slot="card-title"
                    className="font-heading font-semibold text-xl"
                  >
                    Send Message
                  </div>
                </div>
                <div data-slot="card-content" className="px-6">
                  <form className="space-y-4">
                    <div className="space-y-2">
                      <label
                        data-slot="label"
                        className="flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50"
                        htmlFor="name"
                      >
                        Name
                      </label>
                      <input
                        data-slot="input"
                        className="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive"
                        id="name"
                        required
                        name="name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        data-slot="label"
                        className="flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50"
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        data-slot="input"
                        className="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive"
                        id="email"
                        required
                        name="email"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        data-slot="label"
                        className="flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50"
                        htmlFor="message"
                      >
                        Message
                      </label>
                      <textarea
                        data-slot="textarea"
                        className="border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                        id="message"
                        name="message"
                        rows={4}
                        required
                      ></textarea>
                    </div>
                    <button
                      data-slot="button"
                      className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 h-9 px-4 py-2 has-[>svg]:px-3 w-full"
                      type="submit"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
