import { useEffect, useState } from 'react';
import {
  Phone,
  Flame,
  Wind,
  Wrench,
  Clock,
  ArrowUp,
  Menu,
  X,
  MapPin,
  Mail,
  Snowflake,
  ShieldCheck,
  ChevronRight,
} from 'lucide-react';

const PHONE = '(573) 445-2095';
const PHONE_HREF = 'tel:+15734452095';

const services = [
  {
    icon: Snowflake,
    title: 'Air Conditioning Repair & Installation',
    description:
      'Fast, reliable AC repair and expert installation to keep your home cool and comfortable through the hottest Missouri summers.',
    points: ['Central AC repair', 'New system installation', 'Refrigerant recharge', 'Ductless mini-splits'],
  },
  {
    icon: Flame,
    title: 'Furnace & Heating Maintenance',
    description:
      'Comprehensive furnace tune-ups and heating maintenance to ensure your system runs efficiently all winter long.',
    points: ['Annual tune-ups', 'Heat pump service', 'Filter replacement', 'Safety inspections'],
  },
  {
    icon: Wrench,
    title: 'HVAC System Replacement',
    description:
      'Upgrade your aging system with a high-efficiency replacement tailored to your home and budget — financing available.',
    points: ['Free in-home estimates', 'Energy-efficient upgrades', 'System load calculation', 'Financing options'],
  },
  {
    icon: Clock,
    title: '24/7 Emergency Services',
    description:
      'Heating or cooling emergency? Our certified technicians are on call around the clock, every day of the year.',
    points: ['Round-the-clock availability', 'Rapid response times', 'All makes and models', 'No overtime surcharge'],
  },
];

const serviceAreas = [
  { name: 'Columbia', icon: MapPin },
  { name: 'Ashland', icon: MapPin },
  { name: 'Hallsville', icon: MapPin },
  { name: 'Centralia', icon: MapPin },
];

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'About Us', href: '#about' },
    { label: 'Service Areas', href: '#service-areas' },
    { label: 'Contact', href: '#footer' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white' 
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#" className="flex items-center group" aria-label="Grant Heating & Air Conditioning home">
            <img
              src="/Untitled-1.png"
              alt="Grant Heating & Air Conditioning Inc."
              className="h-12 md:h-14 w-auto object-contain"
            />
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-slate-700 hover:text-[#b83235] text-sm font-semibold transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={PHONE_HREF}
              className="hidden sm:flex items-center gap-2 bg-[#0b3b9f] hover:bg-[#092f7f] text-white font-semibold px-4 py-2.5 rounded-lg transition-all hover:shadow-lg hover:shadow-blue-900/30"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden md:inline">{PHONE}</span>
              <span className="md:hidden">Call Us</span>
            </a>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden text-slate-800 p-2"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav className="lg:hidden bg-white rounded-xl mb-4 p-4 border border-slate-200 shadow-xl">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-slate-700 hover:text-[#b83235] hover:bg-slate-50 px-4 py-3 rounded-lg text-sm font-medium transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={PHONE_HREF}
                className="flex items-center justify-center gap-2 bg-[#0b3b9f] text-white font-semibold px-4 py-3 rounded-lg mt-2"
              >
                <Phone className="w-4 h-4" />
                {PHONE}
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage:
          'linear-gradient(135deg, rgba(7,28,73,0.96) 0%, rgba(11,59,159,0.78) 52%, rgba(184,50,53,0.48) 100%), url(https://images.pexels.com/photos/5463575/pexels-photo-5463575.jpeg?auto=compress&cs=tinysrgb&h=1080&w=1920)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-[#071c49] via-transparent to-[#071c49]/50" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12 text-center">
        <div className="inline-flex items-center gap-2 bg-[#0b3b9f]/30 border border-blue-200/30 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
          <ShieldCheck className="w-4 h-4 text-[#b83235]" />
          <span className="text-blue-100 text-xs font-semibold tracking-wide uppercase">
            Trusted Since 1985 · Locally Owned
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-4">
          Grant Heating &amp; Air
          <br />
          <span className="text-[#b83235]">Conditioning Inc.</span>
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-8 font-light">
          Expert Heating &amp; Cooling Services in Columbia, MO
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <a
            href={PHONE_HREF}
            className="group flex items-center gap-3 bg-[#0b3b9f] hover:bg-[#092f7f] text-white font-bold text-lg px-8 py-4 rounded-xl transition-all hover:shadow-2xl hover:shadow-blue-900/40 hover:scale-105 w-full sm:w-auto justify-center"
          >
            <Phone className="w-5 h-5 group-hover:animate-pulse" />
            Call {PHONE}
          </a>
          <a
            href="#services"
            className="group flex items-center gap-3 bg-[#b83235] hover:bg-[#982b2e] text-white font-bold text-lg px-8 py-4 rounded-xl transition-all hover:shadow-2xl hover:shadow-red-600/40 hover:scale-105 w-full sm:w-auto justify-center"
          >
            <Flame className="w-5 h-5" />
            24/7 Emergency Service
          </a>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-gray-300 text-sm">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-[#b83235]" />
            Available 24/7/365
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-[#b83235]" />
            Columbia and surrounding areas
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#b83235]" />
            Licensed &amp; Insured
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-50 to-transparent" />
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-sky-600 font-semibold text-sm uppercase tracking-wider mb-2">
            What We Do
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4">
            Complete HVAC Services
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            From routine maintenance to emergency repairs, our certified technicians keep your home
            comfortable in every season.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-xl hover:border-sky-200 transition-all duration-300"
              >
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-sky-50 group-hover:bg-sky-500 rounded-xl flex items-center justify-center transition-colors duration-300">
                      <Icon
                        className="w-7 h-7 text-sky-600 group-hover:text-white transition-colors duration-300"
                        strokeWidth={2}
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-sky-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                    <ul className="grid grid-cols-2 gap-2">
                      {service.points.map((point) => (
                        <li
                          key={point}
                          className="flex items-center gap-2 text-sm text-gray-700"
                        >
                          <ChevronRight className="w-4 h-4 text-sky-500 flex-shrink-0" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <a
                  href={PHONE_HREF}
                  className="mt-6 flex items-center gap-2 text-sky-600 font-semibold text-sm group-hover:gap-3 transition-all"
                >
                  <Phone className="w-4 h-4" />
                  Schedule Service
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <>
      <section id="about" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sky-600 font-semibold text-sm uppercase tracking-wider mb-2">
                About Us
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6">
                Your Trusted Local HVAC Experts
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Grant Heating &amp; Air Conditioning Inc. has been serving Columbia and the
                surrounding Mid-Missouri communities with honesty and expertise for decades. As a
                locally owned and operated business, we understand the unique climate challenges
                our neighbors face — from sweltering July heat to bitter January cold.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Our certified technicians are committed to delivering top-quality workmanship, fair
                pricing, and dependable service on every job. Whether you need a quick repair, a
                full system replacement, or preventative maintenance, we treat your home like it&apos;s
                our own.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-sky-50 rounded-lg flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5 text-sky-600" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">Licensed &amp; Insured</p>
                    <p className="text-sm text-gray-500">Fully certified technicians</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-sky-50 rounded-lg flex items-center justify-center">
                    <Clock className="w-5 h-5 text-sky-600" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">24/7 Availability</p>
                    <p className="text-sm text-gray-500">Always here when you need us</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-sky-50 rounded-lg flex items-center justify-center">
                    <Wrench className="w-5 h-5 text-sky-600" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">All Brands Serviced</p>
                    <p className="text-sm text-gray-500">No matter the make or model</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-sky-50 rounded-lg flex items-center justify-center">
                    <Wind className="w-5 h-5 text-sky-600" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">Upfront Pricing</p>
                    <p className="text-sm text-gray-500">No surprises, ever</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/32497161/pexels-photo-32497161.jpeg?auto=compress&cs=tinysrgb&h=750&w=1100"
                  alt="American HVAC technician servicing an outdoor air conditioning unit at a suburban home"
                  className="w-full h-[400px] lg:h-[500px] object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-sky-500 text-white rounded-2xl p-6 shadow-xl hidden md:block">
                <p className="text-4xl font-extrabold">40+</p>
                <p className="text-sm text-sky-50">Years Serving Mid-Missouri</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="service-areas" className="py-16 md:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-sky-600 font-semibold text-sm uppercase tracking-wider mb-2">
              Service Areas
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-3">
              Communities We Proudly Serve
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Based in Columbia, Missouri, we provide heating and cooling services throughout
              Mid-Missouri.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
            {serviceAreas.map((area) => {
              const Icon = area.icon;
              return (
                <div
                  key={area.name}
                  className="group bg-white rounded-xl p-6 text-center shadow-sm border border-slate-100 hover:border-sky-300 hover:shadow-lg transition-all"
                >
                  <div className="w-12 h-12 bg-sky-50 group-hover:bg-sky-500 rounded-full flex items-center justify-center mx-auto mb-3 transition-colors">
                    <Icon className="w-6 h-6 text-sky-600 group-hover:text-white transition-colors" />
                  </div>
                  <p className="font-bold text-slate-900 text-lg">{area.name}</p>
                  <p className="text-sm text-gray-500">Missouri</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

function Footer() {
  return (
    <footer id="footer" className="bg-[#071c49] text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src="/Untitled-1.png" alt="Grant Heating & Air Conditioning Inc." className="h-16 w-auto object-contain bg-white rounded-md" />
              <div>
                <p className="text-white font-bold text-lg">Grant Heating &amp; Air</p>
                <p className="text-[#b83235] text-xs uppercase tracking-wide">Columbia, MO</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Expert heating and cooling services for Columbia and the surrounding Mid-Missouri
              area. Locally owned, trusted, and always here when you need us.
            </p>
            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-2 bg-[#0b3b9f] hover:bg-[#092f7f] text-white font-semibold px-5 py-2.5 rounded-lg transition-colors"
            >
              <Phone className="w-4 h-4" />
              {PHONE}
            </a>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-[#b83235]" />
              Contact Information
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#b83235] mt-0.5 flex-shrink-0" />
                <span>2101 W Broadway, Suite 103, Columbia, MO 65203</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#b83235] flex-shrink-0" />
                <a href={PHONE_HREF} className="hover:text-[#b83235] transition-colors">
                  {PHONE}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#b83235] flex-shrink-0" />
                <a
                  href="mailto:info@grantheatingandair.com"
                  className="hover:text-[#b83235] transition-colors"
                >
                  info@grantheatingandair.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
              <Clock className="w-5 h-5 text-[#b83235]" />
              Operating Hours
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="flex justify-between border-b border-slate-700 pb-2">
                <span>Monday – Friday</span>
                <span className="text-gray-400">7:00 AM – 6:00 PM</span>
              </li>
              <li className="flex justify-between border-b border-slate-700 pb-2">
                <span>Saturday</span>
                <span className="text-gray-400">8:00 AM – 4:00 PM</span>
              </li>
              <li className="flex justify-between border-b border-slate-700 pb-2">
                <span>Sunday</span>
                <span className="text-gray-400">Emergency Only</span>
              </li>
              <li className="flex items-center gap-2 pt-2 text-red-400 font-semibold">
                <Clock className="w-4 h-4" />
                24/7 Emergency Service Available
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            &copy; {new Date().getFullYear()} Grant Heating &amp; Air Conditioning Inc. All rights
            reserved.
          </p>
          <div className="flex items-center gap-6 text-sm">
            <a href="#services" className="text-gray-400 hover:text-[#b83235] transition-colors">
              Services
            </a>
            <a href="#about" className="text-gray-400 hover:text-[#b83235] transition-colors">
              About
            </a>
            <a href="#footer" className="text-gray-400 hover:text-[#b83235] transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-6 right-6 z-50 w-12 h-12 bg-[#0b3b9f] hover:bg-[#092f7f] text-white rounded-full shadow-lg hover:shadow-xl hover:shadow-blue-900/40 flex items-center justify-center transition-all hover:scale-110"
      aria-label="Scroll to top"
    >
      <ArrowUp className="w-6 h-6" />
    </button>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
