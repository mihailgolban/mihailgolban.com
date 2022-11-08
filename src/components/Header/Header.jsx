import { Logo } from "../Logo";
import { Button } from "../UI/Button/Button";
import { NavLink } from "../UI/NavLink/NavLink";
import { MdMailOutline } from "react-icons/md";

export const Header = () => {
  return (
    <>
      <header>
        <div className="container mx-auto">
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
    </>
  );
};
