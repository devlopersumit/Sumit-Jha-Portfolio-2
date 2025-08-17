import { useState } from "react";

const menuItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMenuClick = (label: string, href: string) => {
    setActive(label);
    setMobileMenuOpen(false); // Close mobile menu on selection
    const section = document.querySelector(href);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-heading font-bold text-xl text-[#1A7C4B]">
              Sumit Jha
            </div>
            <div className="hidden md:flex items-center space-x-8">
              {menuItems.map((item) => (
                <button
                  key={item.label}
                  className={`text-sm font-medium transition-colors ${
                    active === item.label
                      ? "text-[#1A7C4B] underline underline-offset-4"
                      : "text-muted-foreground hover:text-[#1A7C4B]"
                  }`}
                  onClick={() => handleMenuClick(item.label, item.href)}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <div className="md:hidden flex items-center space-x-2">
              <button
                data-slot="button"
                className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all h-8 rounded-md gap-1.5 px-3"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Open menu"
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
                  className="lucide lucide-menu h-5 w-5"
                >
                  <line x1="4" x2="20" y1="12" y2="12"></line>
                  <line x1="4" x2="20" y1="6" y2="6"></line>
                  <line x1="4" x2="20" y1="18" y2="18"></line>
                </svg>
              </button>
            </div>
          </div>
        </div>
        {/* Mobile menu below navbar on small devices */}
        {mobileMenuOpen && (
          <div className="absolute left-0 right-0 top-full bg-white shadow-md flex flex-col items-center md:hidden z-40">
            {menuItems.map((item) => (
              <button
                key={item.label}
                className={`w-full py-4 text-lg font-medium ${
                  active === item.label
                    ? "text-[#1A7C4B] underline underline-offset-4"
                    : "text-muted-foreground hover:text-[#1A7C4B]"
                }`}
                onClick={() => handleMenuClick(item.label, item.href)}
              >
                {item.label}
              </button>
            ))}
            <button
              className="absolute top-2 right-4 text-2xl"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              &times;
            </button>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
