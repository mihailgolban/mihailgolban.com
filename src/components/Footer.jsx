import { getContactInfo, getSocialLinks } from "../lib/api";
import { Logo } from "./Logo";
import { NavLink } from "./ui/nav-link/NavLink";

export function Footer() {
  const contactInfo = getContactInfo();
  const socialLinks = getSocialLinks();
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <div className="max-w-7xl bg-primary rounded-t-3xl mt-24 h-full text-white mx-auto px-40 py-14">
        <div className="grid grid-cols-2 gap-60">
          <div className="flex flex-col gap-11">
            <div>
              <Logo primaryColor="white" subtitleColor="white" className="h-14 w-[300px]" />
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae blandit lectus. Praesent at hendrerit.
            </p>
          </div>
          <div className="flex flex-col gap-6 justify-self-end">
            {contactInfo.map((item) => (
              <div className="flex gap-4 items-center">
                <div className="text-xl">{item.icon}</div>
                <div>{item.label}</div>
              </div>
            ))}
            <div className="flex gap-6 text-2xl">
              {socialLinks.map((link) => (
                <a key={link.title} href={link.url}>
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-white my-12" />
        <div className="flex justify-between">
          <div>
            <nav className="flex gap-12">
              <NavLink>Home</NavLink>
              <NavLink>Services</NavLink>
              <NavLink>Works</NavLink>
            </nav>
          </div>
          <div className="opacity-60">© Mihail Golban {currentYear}</div>
        </div>
      </div>
    </footer>
  );
}
