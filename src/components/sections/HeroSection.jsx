import { ReactComponent as HeroImage } from "@/assets/programmer.svg";
import { Button } from "@/components/ui/button/Button";
import { MdMailOutline, MdOutlineFileDownload } from "react-icons/md";

export const HeroSection = () => {
  return (
    <div className="min-h-[650px] bg-[#F9F9FC]">
      <div className="container mx-auto pt-10 drop-shadow-md">
        <div className="flex flex-row justify-center items-center">
          <div className="basis-1/3">
            <h1 className="text-5xl font-bold text-left leading-[78px]">
              Hello 👋, My name is Mihail and I'm a <span className="inline-block">Full Stack Developer</span> from
              Moldova 🇲🇩
            </h1>
            <div className="flex justify-center mt-8">
              <Button primary size="lg" icon={MdMailOutline}>
                Contact me
              </Button>
              <Button link size="lg" className="ml-4" icon={MdOutlineFileDownload}>
                Download CV
              </Button>
            </div>
          </div>
          <div className="basis-2/3">
            <HeroImage />
          </div>
        </div>
      </div>
    </div>
  );
};
