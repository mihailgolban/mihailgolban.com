import { Button } from "./components/UI/Button/Button";
import { NavLink } from "./components/UI/NavLink/NavLink";
import { MdMailOutline, MdOutlineFileDownload } from "react-icons/md";

function App() {
  return (
    <>
      <div className="p-3">
        <Button primary>Hire me</Button>
        <Button primary icon={MdMailOutline} iconPosition="right">
          Hire me
        </Button>
        <Button secondary icon={MdMailOutline}>
          Contact me
        </Button>
        <Button primary size="lg" icon={MdMailOutline}>
          Contact me
        </Button>
        <Button link size="lg" icon={MdOutlineFileDownload}>
          Download
        </Button>
      </div>
      <div className="p-3">
        <NavLink active>Home</NavLink>
        <NavLink>Services</NavLink>
      </div>
    </>
  );
}

export default App;
