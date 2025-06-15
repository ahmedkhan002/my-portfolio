import { useState, useEffect } from 'react'
import { Home, User, FileText, Briefcase, Server, Mail, Menu, X } from 'lucide-react'
import { useAppContext } from '../context/context';




function Navbar() {
  const { internalActiveSection, setInternalActiveSection } = useAppContext();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const navItems = [
    { id: "home", icon: Home, label: "Home" },
    { id: "about", icon: User, label: "About" },
    { id: "skills", icon: FileText, label: "Skills" },
    { id: "portfolio", icon: Briefcase, label: "Portfolio" },
    { id: "services", icon: Server, label: "Services" },
    { id: "contact", icon: Mail, label: "Contact" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "portfolio", "services", "contact"];
      let current = "home";

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const container = document.querySelector(".overflow-scroll");
          const containerTop = container.getBoundingClientRect().top;

          if (rect.top <= containerTop + 200 && rect.bottom >= containerTop + 200) {
            current = section;
          }
        }
      }

      setInternalActiveSection(current);
      console.log("Current visible section:", current);
    };

    const container = document.querySelector(".overflow-scroll");
    if (!container) return;

    container.addEventListener("scroll", handleScroll);

    // 🔧 Delay this to allow DOM layout to complete
    setTimeout(() => {
      handleScroll();
    }, 50);

    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);


 const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  const contentContainer = document.querySelector('.overflow-scroll'); // <- match this with your actual layout

  if (element && contentContainer) {
    const scrollOffset = element.offsetTop - contentContainer.offsetTop;

    contentContainer.scrollTo({
      top: scrollOffset - 20, // add small padding if needed
      behavior: "smooth"
    });
  }
};


  return (
    <>
      <button
        className="lg:hidden fixed bg-re top-4 right-4 mr-2 cursor-pointer z-50 bg-slate-800 p-3 rounded-lg shadow-lg"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        {mobileMenuOpen ? (
          <X className="w-5 h-5 text-slate-300" />
        ) : (
          <Menu className="w-5 h-5 text-slate-300" />
        )}
      </button>

      <div className="hidden lg:flex h-full w-full bg-slate-800 z-100  flex-col justify-center px-2 transition-all duration-300">
        <nav className="flex flex-col space-y-4 w-full">
          {navItems.map(({ id, icon: Icon, label }) => (
            <div key={id} className="relative group">
              <button
                onClick={() => scrollToSection(id)}
                className={`${internalActiveSection === id ? "w-42" : "w-16 group-hover:w-42"
                  } h-16 flex items-center justify-start rounded-xl transition-all duration-400 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-400/50 overflow-hidden ${internalActiveSection === id
                    ? "text-blue-400 bg-blue-500/50 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40"
                    : "text-slate-400 hover:text-blue-400 bg-blue-500/10 hover:bg-blue-500/10 hover:shadow-lg hover:shadow-blue-500/10"
                  }`}
              >
                <div className="flex items-center w-full">
                  <div className="w-16 h-16 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span
                    className={`ml-3 text-sm font-medium text-slate-200 whitespace-nowrap transform transition-all duration-300 delay-75 ${internalActiveSection === id
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0"
                      }`}
                  >
                    {label}
                  </span>
                </div>
              </button>
            </div>
          ))}
        </nav>

      </div>

           {/* Mobile Sidebar */}
      <div className={`lg:hidden fixed top-0 left-0 h-full w-64 bg-slate-800 shadow-xl z-40 flex flex-col justify-center px-4 transition-transform duration-300 ${mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}>
        <nav className="flex flex-col space-y-4 w-full">
          {navItems.map(({ id, icon: Icon, label }) => (
            <div key={id} className="relative ">
              <button
                onClick={() => {
                  scrollToSection(id)
                  setMobileMenuOpen(false)
                }}
                className={`w-full h-16 flex items-center justify-start rounded-xl transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-400/50 px-4 ${internalActiveSection === id
                    ? "text-blue-400 bg-blue-500/20 shadow-lg shadow-blue-500/25"
                    : "text-slate-400 hover:text-blue-400 hover:bg-blue-500/10"
                  }`}
              >
                <div className="flex items-center w-full">
                  <Icon className="w-5 h-5 flex-shrink-0" />
                  <span className="ml-4 text-sm font-medium text-slate-200 whitespace-nowrap">
                    {label}
                  </span>
                </div>
              </button>
            </div>
          ))}
        </nav>
      </div>

      {/* ✅ This overlay closes the sidebar when clicking outside */}
      {mobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 z-30"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

    </>
  )
}

export default Navbar