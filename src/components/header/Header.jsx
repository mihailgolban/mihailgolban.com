import { Button } from "@/components/ui/button/Button";
import { NavLink } from "@/components/ui/nav-link/NavLink";
import { MdMailOutline } from "react-icons/md";
import { Logo } from "../Logo";

export const Header = () => {
  return (
    <header className="bg-[#F9F9FC]">
      <div className="container mx-auto ">
        <div className="flex justify-between items-center h-[100px]">
          <div className="header__logo">
            <Logo />
          </div>
          <nav className="flex gap-12">
            <NavLink active>Home</NavLink>
            <NavLink>Services</NavLink>
            <NavLink>Projects</NavLink>
            <NavLink>Contacts</NavLink>
          </nav>
          <div className="header__buttons">
            <Button primary icon={MdMailOutline} iconPosition="right">
              Hire me
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
