import { MdMailOutline } from "react-icons/md";
import { Button } from "../ui/button/Button";

export function ContactSection() {
  return (
    <section id="contact-section" className="min-h-[470px] bg-neutral-70">
      <div className="max-w-2xl mx-auto text-center py-28">
        <div className="flex flex-col gap-8 h-full">
          <h1 className="text-5xl font-semibold leading-normal">
            <span className="block">Interested working</span>with me? Let's connect!
          </h1>
          <Button secondary size="lg" icon={MdMailOutline} className="w-max mx-auto">
            Contact me
          </Button>
        </div>
      </div>
    </section>
  );
}
